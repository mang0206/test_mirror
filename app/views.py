from flask import Flask, render_template, request, redirect
from .ml import model, Age_dict, Gender_dict, Contact_dict
import pandas as pd
from .cal_nutrients import cal_nutrients
from collections import defaultdict
from . import app

food_lst = []

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
    if request.method == "POST" and request.form.get('btn1') :
        age = int(request.form.get('age'))
        sex = request.form.get('gender')
        height = int(request.form.get('height'))
        Z = cal_nutrients.body_classifier(sex, age, height)
        nutrients = cal_nutrients.nutrient(Z, sex, age)
        return render_template("diet.html")

    if request.method == "POST" and request.form.get('btn2') :
        # nutrients = nutrients
        food_lst.append(request.form.get('food'))
        return render_template('kit.html', food_lst=food_lst, nutrients=nutrients)
   
    return render_template("diet.html")

@app.route("/kit")
def kit():
    return render_template("checker.html")

@app.route("/loading")
def loading():
    return render_template("loading.html")

@app.route("/diet_result")
def diet_result():
    return render_template("diet_result.html")

@app.route("/visualization")
def visualization():
    return render_template("visualization.html")

@app.route("/kit", methods=['GET', 'POST'])
def checker():
    if request.method == 'POST':
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

        return render_template("check.html", result=pred*0.3 + (1-pred)*0.7)
    else:
        return render_template("checker.html")