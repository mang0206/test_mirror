from flask import Flask, render_template, request, redirect
from .ml import model, Age_dict, Gender_dict, Contact_dict
import pandas as pd
from collections import defaultdict

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/diet")
def diet():
    return render_template("diet.html")

@app.route("/visualization")
def visualization():
    return render_template("visualization.html")

@app.route("/checker", methods=['GET', 'POST'])
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

        return render_template('check.html', result=pred*0.3 + (1-pred)*0.7)
    else:
        return render_template("checker.html")