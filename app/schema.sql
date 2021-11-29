CREATE DATABASE diet ;

USE diet ;

CREATE TABLE User
(
	id INT PRIMARY KEY AUTO_INCREMENT,
	user_id VARCHAR(32) NOT NULL,
	password VARCHAR(32) NOT NULL,
	email VARCHAR(64) NOT NULL
) ENGINE=INNODB ;

CREATE TABLE food
(
	id INT PRIMARY KEY AUTO_INCREMENT,
	food_name  VARCHAR(64) NOT NULL,
	calorie FLOAT NOT NULL,
	protein FLOAT NOT NULL,
	fat FLOAT NOT NULL,
	carbohydrate FLOAT NOT NULL,
	sugar FLOAT NOT NULL,
	calcium FLOAT NOT NULL,
	phosphorus FLOAT NOT NULL,
	iron FLOAT NOT NULL,
	salt FLOAT NOT NULL,
	potassium FLOAT NOT NULL,
	vitaminA FLOAT NOT NULL,
	vitaminB1 FLOAT NOT NULL,
	vitaminB2 FLOAT NOT NULL,
	folic_acid FLOAT NOT NULL,
    niacin FLOAT NOT NULL,
    vitaminC FLOAT NOT NULL,
    selenium FLOAT NOT NULL,
    vitaminD2 FLOAT NOT NULL,
    zinc  FLOAT NOT NULL,
    fatty_acid FLOAT NOT NULL
) ENGINE=INNODB DEFAULT CHARSET=utf8;

#영양소 순서 - 에너지 단백질 지방 탄수화물 당 칼슘 인 철 나트륨 칼륨 비타민a 비타민b1 비타민b2 \
				엽산 나이아신 비타민c 셀레늄 비타민D2 아연 총 필수 지방산

LOAD DATA INFILE 'C:/Users/Public/Downloads/food.csv'
REPLACE
INTO TABLE food
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\r\n'
IGNORE 1 LINES ;