from . import db

class User(db.Model) :
    _id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    id = db.Column(db.String(32), primary_key=True)
    password = db.Column(db.String(50))

    def __init__(self,id,password) :
        self.id = id
        self.password = password