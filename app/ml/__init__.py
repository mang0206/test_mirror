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
    # "Age_0-9":0,
    # "Age_10-19":1,
    # "Age_20-24":2,
    # "Age_25-59":3,
    # "Age_60+":4
    "Age_60-":0,
    "Age_60+":1
}

Gender_dict = {
    "Gender_Female":0,
    "Gender_Male":1,
    # "Gender_Transgender":2
}

Contact_dict = {
    # "Contact_Dont-Know":0,
    # "Contact_No":1,
    # "Contact_Yes":2
    "Other":0,
    "Abroad":1,
    "Contact_with_confirmed":2
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
model_path = os.path.join(".", "app", "ml", "fold0.cbm")
model.load_model(model_path, format='cbm')
