from flask import Flask, render_template, request, redirect, url_for, session, flash, jsonify
from .ml import model, Age_dict, Gender_dict, Contact_dict
import pandas as pd
import numpy as np
from .cal_nutrients import cal_nutrients
from collections import defaultdict
from . import app, db
from .models import Food, User
import bcrypt
from datetime import datetime
from .utils import valid_email, valid_password
from sqlalchemy import desc, text
import json
import random
food_lst = None
foods_nutrients = {}
nutrients = None
result = None
json_foods_nutrients = None
sum_nutrients = None
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
        user_id = request.form.get('user_id')
        password = request.form.get('password')
        user = User.query.filter(User.user_id==user_id).first()
        if user :
            encoded_password = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())
            if bcrypt.checkpw(user.password, encoded_password) :
                session['login'] = user.user_id
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
        user_id = request.form.get('user_id')
        password = request.form.get('password')
        if not valid_password(password):
            flash("유효한 비밀번호 형식이 아닙니다")
        email = request.form.get('email')
        if not valid_email(email):
            flash("유효한 e-mail 형식이 아닙니다") # alert 적용
        encoded_password = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())
        if User.query.filter(User.user_id==user_id).first() :
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
    global nutrients, food_lst, foods_nutrients, json_foods_nutrients, sum_nutrients
    covid_nutrients = [100,50,19,30]
    if request.method == "POST" and request.form.get('btn') == 'form_personal' :
        if request.form.get('age') and request.form.get('gender') and request.form.get('height') and request.form.get('activity') :
            age = float(request.form.get('age'))
            sex = request.form.get('gender')
            height = float(request.form.get('height'))
            activity = float(request.form.get('activity'))

            Z = cal_nutrients.body_classifier(sex, age, height)
            nutrients = cal_nutrients.nutrient(Z, sex, age, activity)
            
            if nutrients != None :
                flash("정보가 안전하게 제출되었습니다! :)")
                return redirect(url_for('diet_food'))
            else:
                flash("개인정보 입력 후 버튼을 눌러주세요 :)")

    if request.method == "POST" and request.form.get('btn2'):
        if nutrients == None:
            flash("개인정보 입력 후 버튼을 눌러주세요 :)")
            return redirect(url_for("diet_food"))

        food_lst = request.form.get('btn2')
        food_lst = food_lst.split('=')
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
            food_nutrients[16] = food.selenium * 1000 * 100 #일일 권장량 55
            food_nutrients[17] = food.vitaminD2 * 1000 * 1000 #일일 권장량 19
            food_nutrients[18] = food.zinc * 1000 #일일 권장량 30
            # food_nutrients[19] = food.fatty_acid #필수 지방산
            print(food_nutrients)
            for i in range(len(nutrients)):
                food_nutrients[i] = round(food_nutrients[i] / nutrients[i] * 100)
            for i in range(len(covid_nutrients)):
                food_nutrients[15+i] = round(food_nutrients[15 + i] / covid_nutrients[i] * 100)
            
            foods_nutrients[food_name] = food_nutrients[:]
            # foods_nutrients.append({food_name:food_nutrients[:]})
        json_foods_nutrients = json.dumps(foods_nutrients, ensure_ascii = False)
        sum_nutrients = [0] * 19
        for food in foods_nutrients:
            print(food)
            tmp = foods_nutrients[food]
            # tmp = tmp[0]
            for i in range(len(sum_nutrients)):
                sum_nutrients[i] += tmp[i]
        print(sum_nutrients)
        return redirect(url_for('checker'))

    return render_template("food_search.html")

@app.route("/kit", methods=['GET', 'POST'])
def checker():
    global nutrients, result, food_lst, foods_nutrients, json_foods_nutrients, sum_nutrients
    if request.method == 'POST' and request.form.get('btn') == "diet_result" :
        input_data = {
            'test_date':int(datetime.today().month),
            'cough':0,
            'fever':0,
            'sore_throat':0,
            'shortness_of_breath':0,
            'head_ache':0,
            'age_60_and_above':0,
            'gender':0,
            'test_indication':0,
            'sum_symptom':0
        }

        for i in request.form: 
            value = request.form.get(i)
            if i not in ['test_indication','age_60_and_above', 'gender', 'button']:
                input_data[i] = 1
                input_data['sum_symptom'] += 1
            elif i == 'None_Sympton':
                for j in ['cough','fever','shortness_of_breath','head_ache']:
                    input_data[j] = 0
            else:
                if i == 'test_indication':
                    input_data[i] = Contact_dict[value]
                elif i == 'age_60_and_above':
                    input_data[i] = Age_dict[value]
                elif i == 'gender':
                    input_data[i] = Gender_dict[value]
                else:
                    continue

        x = pd.DataFrame(input_data, index=[0])
        pred = model.predict_proba(x)[:,1][0]
        result = str((pred*0.85 + (1-pred)*0.15)*100)[:6]

        return redirect(url_for("loading"))
    return render_template("checker.html",nutrients=nutrients,food_lst=food_lst,\
        foods_nutrients=json_foods_nutrients,result=result,sum_nutrients=sum_nutrients)

@app.route("/loading")
def loading():
    return render_template("loading.html")

@app.route("/diet_result")
def diet_result():
    global nutrients, result, food_lst, foods_nutrients, json_foods_nutrients, sum_nutrients

    important_nutrient_dic = {14:'niacin',15:'vitaminC',16:'selenium',17:'vitaminD2',18:'zinc'}
    lack_nutrients = []
    for i in range(14, len(sum_nutrients)):
        if sum_nutrients[i] < 100:
            lack_nutrients.append(important_nutrient_dic[i])
    print(lack_nutrients)
    result_recommend= {}
    tmp_dic = {}
    for nutrient in lack_nutrients:
        if nutrient == 'vitaminD2':
            foods = Food.query.order_by(desc(text(nutrient))).limit(10)
        else:
            foods = Food.query.order_by(desc(text(nutrient))).limit(50)
        tmp_dic[nutrient] = []
        for food in foods:
            tmp_dic[nutrient].append(food.food_name)

    for key, value in tmp_dic.items():
        random.shuffle(value)
        result_recommend[key] = value[:10]

    

    return render_template("check.html",nutrients=nutrients,food_lst=food_lst,\
        foods_nutrients=json_foods_nutrients,result=result, sum_nutrients=sum_nutrients)

@app.route("/food_direction")
def food_direction():
    return render_template("food_direction.html")

@app.route("/visual")
def visualization():
    return render_template("visual.html")

@app.route("/index_parallax")
def index_parallax():
    return render_template("index_parallax.html")