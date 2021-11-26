from flask import Flask, render_template, request, redirect, url_for
from .ml import model, Age_dict, Gender_dict, Contact_dict
import pandas as pd
from .cal_nutrients import cal_nutrients
from collections import defaultdict
from . import app
from .models import Food, User

food_lst = None
foods_nutrients = {}
nutrients = None
result = None

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/join")
def join():
    return render_template("join.html")

@app.route("/join_result")
def join_result():
    return render_template("join_result.html")

@app.route("/diet", methods=["GET", "POST"])
def diet_food():
    global nutrients, food_lst, foods_nutrients

    if request.method == "POST" and request.form.get('btn') == 'form_personal' :
        age = int(request.form.get('age'))
        sex = request.form.get('gender')
        height = int(request.form.get('height'))
        Z = cal_nutrients.body_classifier(sex, age, height)
        nutrients = cal_nutrients.nutrient(Z, sex, age)
        return redirect(url_for("diet_food"))

    if request.method == "POST" and request.form.get('btn') == 'form_food':
        # food_lst = request.form.get('food_form')
        # food_lst = ['닭갈비', '비타맥스', '갈아담은 유기농과일 아기꼬야 사과배']
        # food_nutrients = [0] * 16
        # for food_name in food_lst:
        #     food = Food.query.filter(Food.food_name == food_name).first()
        #     food_nutrients[0] = food.calorie
        #     food_nutrients[1] = food.protein
        #     food_nutrients[2] = food.fat 
        #     food_nutrients[3] = food.carbohydrate 
        #     food_nutrients[4] = food.sugar
        #     food_nutrients[5] = food.calcium * 1000
        #     food_nutrients[6] = food.phosphorus * 1000   
        #     food_nutrients[7] = food.iron * 1000
        #     food_nutrients[8] = food.salt * 1000 
        #     food_nutrients[9] = food.potassium * 1000
        #     food_nutrients[10] = food.vitaminA * 1000 * 1000
        #     food_nutrients[11] = food.vitaminB1 * 1000
        #     food_nutrients[12] = food.vitaminB2 * 1000
        #     food_nutrients[13] = food.niacin * 1000
        #     food_nutrients[14] = food.vitaminC * 1000
        #     food_nutrients[15] = food.folic_acid * 1000 * 1000
        
        #     for i in range(len(nutrients)):
        #         food_nutrients[i] = food_nutrients[i] / nutrients[i] * 100
        
        #     foods_nutrients[food_name] = food_nutrients

        # food_nutrients = [0] * 16
        # foods_nutrients['percent'] = []
        # for i in range(len(food_nutrients)):
        #     for key in foods_nutrients:
        #         food_nutrients[i] += foods_nutrients[key][i]
            
        #     foods_nutrients['percent'].append(food_nutrients[i])


        return redirect(url_for('checker'))
   
    return render_template("food_search.html")

@app.route("/kit", methods=['GET', 'POST'])
def checker():
    global nutrients, result, food_lst, foods_nutrients
# , '비타맥스', '갈아담은 유기농과일 아기꼬야 사과배'
    food_lst = ['닭갈비', '비타맥스', '갈아담은 유기농과일 아기꼬야 사과배']
    food_nutrients = [0] * 16
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
        food_nutrients[13] = food.niacin * 1000
        food_nutrients[14] = food.vitaminC * 1000
        food_nutrients[15] = food.folic_acid * 1000 * 1000

        for i in range(len(food_nutrients)):
            food_nutrients[i] = round(food_nutrients[i] / nutrients[i] * 100)
        foods_nutrients[food_name] = food_nutrients[:]

    food_nutrients = [0] * 16
    foods_nutrients['percent'] = []
    for i in range(len(food_nutrients)):
        for idx, key in enumerate(foods_nutrients):
            if idx == len(foods_nutrients)-1:
                break

            food_nutrients[i] += foods_nutrients[key][i]
        foods_nutrients['percent'].append(food_nutrients[i])
    print(foods_nutrients)
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
    
    return render_template("checker.html",nutrients=nutrients,food_lst=food_lst,foods_nutrients=foods_nutrients)

@app.route("/loading")
def loading():
    return render_template("loading.html")

@app.route("/diet_result")
def diet_result():
    global nutrients, result, food_lst, foods_nutrients

    return render_template("diet_result.html",nutrients=nutrients,food_lst=food_lst,food_nutrients=foods_nutrients)

@app.route("/visual")
def visualization():
    return render_template("visual.html")


