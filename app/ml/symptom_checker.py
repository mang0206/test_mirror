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