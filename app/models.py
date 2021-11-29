from . import db

class User(db.Model) :
    _id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    id = db.Column(db.String(32), nullable=False)
    password = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100),nullable=False)

    def __init__(self,id,password,email) :
        self.id = id
        self.password = password
        self.email = email

class Food(db.Model) :
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    food_name = db.Column(db.String(64), nullable=False)
    calorie = db.Column(db.Float, nullable=False)
    protein = db.Column(db.Float, nullable=False)
    fat =  db.Column(db.Float, nullable=False)
    carbohydrate = db.Column(db.Float, nullable=False)
    sugar = db.Column(db.Float, nullable=False)
    calcium = db.Column(db.Float, nullable=False)
    phosphorus = db.Column(db.Float, nullable=False)
    iron = db.Column(db.Float, nullable=False)
    salt= db.Column(db.Float, nullable=False)
    potassium = db.Column(db.Float, nullable=False)
    vitaminA = db.Column(db.Float, nullable=False)
    vitaminB1 = db.Column(db.Float, nullable=False)
    vitaminB2 = db.Column(db.Float, nullable=False)
    folic_acid = db.Column(db.Float, nullable=False)
    niacin = db.Column(db.Float, nullable=False)
    vitaminC = db.Column(db.Float, nullable=False)
    selenium = db.Column(db.Float, nullable=False)
    vitaminD2 = db.Column(db.Float, nullable=False)
    zinc = db.Column(db.Float, nullable=False)
    fatty_acid = db.Column(db.Float, nullable=False)
    