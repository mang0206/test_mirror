from flask import Flask
import pymysql
from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

app = Flask(__name__)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
# app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URI')
app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://root:ydp123456@13.124.231.43:3306/diet"
app.config['JSON_AS_ASCII'] = False

db.init_app(app)

from app import views, models, utils
