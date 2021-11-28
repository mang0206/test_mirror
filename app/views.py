from flask import Flask, render_template, request, redirect, url_for, session, flash
from .ml import model, Age_dict, Gender_dict, Contact_dict
import pandas as pd
from .cal_nutrients import cal_nutrients
from collections import defaultdict
from . import app, db
from .models import Food, User
import bcrypt

global nutrients, result, food_lst, foods_nutrients
food_lst = None
foods_nutrients = []
nutrients = None
result = None

# flash(alert) 기능 위한 key 설정
app.config["SECRET_KEY"] = "diet"

@app.route("/")
def index():
    user_id = session.get('login')
    if user_id :
        return render_template("index_login.html")

    return render_template("index.html")

@app.route("/login",methods=['GET','POST'])
def login():
    if request.method == "POST" :
        id = request.form.get('id')
        password = request.form.get('password')
        user = User.query.filter(User.id==id).first()
        if user :
            encoded_password = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())
            if bcrypt.checkpw(user.password, encoded_password) :
                session['login'] = user.id
                return redirect(url_for('index'))
            else :
                return redirect(url_for('login',flag=1))
        else :
            return redirect(url_for('login',flag=2))

    return render_template("login.html")

@app.route("/join",methods=['GET','POST'])
def join():
    global nutrients, food_lst
    if request.method == "POST" :
        id = request.form.get('id')
        password = request.form.get('password')
        email = request.form.get('email')
        encoded_password = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())
        if User.query.filter(User.id==id).first() :
            return redirect(url_for("join",flag=False))
        else :
            user = User(id,encoded_password.decode("utf-8"),email)
            db.session.add(user)
            db.session.commit()
            return redirect(url_for("index",flag=True))
    
    return render_template("join.html")

@app.route("/join_result")
def join_result():
    return render_template("join_result.html")

@app.route("/diet", methods=["GET", "POST"])
def diet_food():
    global nutrients, food_lst, foods_nutrients

    if request.method == "POST" and request.form.get('btn') == 'form_personal' :
        if request.form.get('age') and request.form.get('gender') and request.form.get('height') and request.form.get('activity') :
            age = float(request.form.get('age'))
            sex = request.form.get('gender')
            height = float(request.form.get('height'))
            activity = float(request.form.get('activity'))

            Z = cal_nutrients.body_classifier(sex, age, height)
            nutrients = cal_nutrients.nutrient(Z, sex, age, activity)
            
            flash("정보가 안전하게 제출되었습니다")
            return redirect(url_for("diet_food"))
        else:
            flash("개인정보 입력 후 버튼을 눌러주세요 :)")

    if request.method == "POST" and request.form.get('btn2'):
        if nutrients == None:
            return redirect(url_for("diet_food"))

        food_lst = request.form.get('btn2')
        food_lst = food_lst.split(',')
        food_nutrients = [0] * 19
        for food_name in food_lst:
            food = Food.query.filter(Food.food_name == food_name).first()
            food_nutrients[0] = food.calorie
            food_nutrients[1] = food.protein
            food_nutrients[2] = food.fat 
            food_nutrients[3] = food.carbohydrate 
            food_nutrients[4] = food.sugar
            food_nutrients[5] = food.calcium * 1000
            food_nutrients[6] = food.phosphorus * 1000   
            food_nutrients[7] = food.iron * 1000
            food_nutrients[8] = food.salt * 1000 
            food_nutrients[9] = food.potassium * 1000
            food_nutrients[10] = food.vitaminA * 1000 * 1000
            food_nutrients[11] = food.vitaminB1 * 1000
            food_nutrients[12] = food.vitaminB2 * 1000
            food_nutrients[13] = food.folic_acid * 1000 * 1000
            food_nutrients[14] = food.niacin * 1000
            food_nutrients[15] = food.vitaminC * 1000
            food_nutrients[16] = food.selenium * 1000 * 1000 #일일 권장량 55
            food_nutrients[17] = food.vitaminD2 * 1000 * 1000 #일일 권장량 19
            food_nutrients[18] = food.zinc * 1000 #일일 권장량 10
            # food_nutrients[19] = food.fatty_acid #필수 지방산
            for i in range(len(nutrients)):
                food_nutrients[i] = round(food_nutrients[i] / nutrients[i] * 100)
            foods_nutrients.append({food_name:food_nutrients[:]})
            
        return redirect(url_for('checker'))
   
    return render_template("food_search.html")

@app.route("/kit", methods=['GET', 'POST'])
def checker():
    global nutrients, result, food_lst, foods_nutrients
    if request.method == 'POST' and request.form.get('btn') == "diet_result" :
        input_data = {
            'Fever':0,
            'Tiredness':0,
            'Dry-Cough':0,
            'Difficulty-in-Breathing':0,
            'Sore-Throat':0,
            'None_Sympton':0,
            'Pains':0,
            'Nasal-Congestion':0,
            'Runny-Nose':0,
            'Diarrhea':0,
            'None_Experiencing':0,
            'Country':0,
            'Age':0,
            'Gender':0,
            'Contact':0
        }

        for i in request.form: # Fever
            value = request.form.get(i)

            if i not in ['Country', 'Age', 'Gender', 'Contact','button']:
                input_data[i] = 1
            else:
                if i == 'Country':
                    input_data[i] = value
                elif i == 'Age':
                    input_data[i] = Age_dict[value]
                elif i == 'Gender':
                    input_data[i] = Gender_dict[value]
                elif i == 'Contact':
                    input_data[i] = Contact_dict[value]
                else:
                    continue

        x = pd.DataFrame(input_data, index=[0])
        pred = model.predict_proba(x)[:,1][0]
        result = pred*0.3 + (1-pred)*0.7

        return redirect(url_for("loading"))
    return render_template("checker.html",nutrients=nutrients,food_lst=food_lst,foods_nutrients=foods_nutrients,result=result)

@app.route("/loading")
def loading():
    return render_template("loading.html")

@app.route("/diet_result")
def diet_result():
    global nutrients, result, food_lst, foods_nutrients

    return render_template("check.html",nutrients=nutrients,food_lst=food_lst,foods_nutrients=foods_nutrients,result=result)

@app.route("/visual")
def visualization():
    return render_template("visual.html")

