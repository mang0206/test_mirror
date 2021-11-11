import os, sys, gc, warnings, random

import pandas as pd
import numpy as np

from catboost import CatBoostClassifier

def seed_everything(SEED=9):
    random.seed(SEED)
    os.environ['PYTHONHASHSEED'] = str(SEED)
    np.random.seed(SEED)

SEED = 9
seed_everything(SEED)

Age_dict = {
    "Age_0-9":0,
    "Age_10-19":1,
    "Age_20-24":2,
    "Age_25-59":3,
    "Age_60+":4
}

Gender_dict = {
    "Female":0,
    "Male":1,
    "Transgender":2
}

Contact_dict = {
    "Dont-Know":0,
    "No":1,
    "Yes":2
}

model_params = {
    'n_estimators': 10000,
    'learning_rate': 0.1,
    'eval_metric': 'Logloss',
    'loss_function': 'Logloss',
    'od_wait': 500,
    'metric_period': 100,
    'depth': 6,
    'rsm': 1, # columns
    'random_seed':SEED,
    'subsample':0.8 # rows
}

model = CatBoostClassifier(**model_params)
model.load_model(r'C:\Users\JCdata\workspace\diet_with_covid\app\ml\symptom_checker.cbm', format='cbm')

