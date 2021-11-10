from flask import Flask, render_template, request, redirect

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
def kit():
    if request.method == 'POST':
        print(request.form.get('type1'))
        return render_template('check.html', result=1)
    else:
        return render_template("checker.html")