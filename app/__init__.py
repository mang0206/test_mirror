from flask import Flask
from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

app = Flask(__name__)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://ydp01:ydp123456@ec2-3-34-125-24.ap-northeast-2.compute.amazonaws.com:3306/diet"
# app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://root:111111@localhost:3306/diet"
app.config['JSON_AS_ASCII'] = False

db.init_app(app)

from app import views, models, utils
