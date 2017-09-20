---
layout: post
title:  "[Django를 활용한 쉽고 빠른 웹개발, 파이썬 웹 프로그래밍] Ch2-1. 간단한 Poll(투표) 앱 만들어보기 - 기획"
date:   2017-09-21 19:00:00
description: 2-1. 간단한 Poll 앱 만들어보기
categories:
- programming
- django
- web_programmig
banner_image: /programming/django/web_programming_book.png
---

간단한 Poll(투표) 앱 만들어보기 - 기획

---

## 프로젝트란? 앱(Application)이란?

<br>

예를 들어, 네이버를 살펴보면

(실제로 네이버가 Django로는 안만들어져있을 것 같지만...)

![1.naver_screenshot](/assets/images/programming/django/web_programming_2-1/1.naver_screenshot.png)

한 페이지에 다양한 기능들이 포함되어 있습니다.

**검색**기능부터 시작해서, **메일**, **카페**, **블로그**, **지식iN**, **쇼핑**, **뉴스** 등등...

첫페이지에서 보이는 것만 이정도지 훨씬 많을 겁니다.

이런 각각의 기능들을 **앱**이라 생각하시면 됩니다.

그리고, 이런 다양한 앱들이 모여저서 만들어진 네이버가 바로 **프로젝트**입니다.

<br>

이전 글에서, 우리는 mysite라는 프로젝트까지만 만들어봤습니다.

이제 무슨 앱을 가진 웹페이지를 만들 것인지 설계할 차례입니다.

간단한 설문조사 앱을 만들어보겠습니다.

코딩을 시작하기 전에 구체적으로 어떻게 만들지 기획을 해야겠죠?

크게 두 가지를 기획해 봅니다.

> 1.UI 기획 <br>
2.Model(데이터베이스) 기획

<br>

## 1. 화면 UI 기획

![2.buildUI](/assets/images/programming/django/web_programming_2-1/2.buildUI.png)

>index.html: 질문 리스트을 보여주는 페이지<br>
detail.html: 하나의 질문에 대해 투표하는 페이지<br>
results.html: 해당된 질문에 대한 결과를 보여주는 페이지<br>

<br>

## 2. Model(데이터베이스) 설계

<br>

어떤 데이터가 필요할지 생각해봅니다.

일단 질문 리스트가 필요합니다.

질문 리스트를 저장하기 위해 Question 모델(테이블)을 설계합니다.

칼럼명 | 타입 | 조건 | 설명
:---:|:---:|:---:|:---:|
id|integer|PK|Primary Key
question_text|char|not Null|질문문장
pub_date|datetime|not Null|질문 생성시각

### id
- Django의 모든 테이블에는 PK(Primary Key)로 id가 정수(Integer)로 자동 생성됩니다.
- PK란 해당 데이터의 고유한 값입니다.
- 즉, 같은 테이블에서 다른 두개의 데이터가 같은 id값을 가질 수 없습니다.

### question_text
- 질문은 텍스트가 될 것이므로 char로 만들어줍니다.
- 질문은 꼭 존재해야하므로 Not Null로 설정하였습니다.

### pub_date
- publish_date 즉, 질문 생성시각입니다.
- 시간필드인 datetime으로 만듭니다.

<br>

또 저장해야할 데이터는 해당 질문에 대한 보기 입니다. 예를 들어

What is your hobby? 라는 질문에는 독서,  코딩,  롤

Who do u like best? 라는 질문에는 Teemo,  Jinx,  Faker

의 보기가 존재할 수 있습니다.

<br>

보기를 저장하기 위해 Choice 테이블을 설계합니다.

칼럼명 | 타입 | 조건 | 설명
:---:|:---:|:---:|:---:|
id|integer|PK|Primary Key
choice_text|char|not Null|답변 항목 문구
votes|integer|not Null|투표 카운트
question_id|integer|FK|Foreign Key

### choice_text
- 보기는 텍스트므로 char

### votes
- 투표 카운트는 0부터 시작하는 정수이므로 integer

### question_id
- 보기와 질문을 연결시켜주는 Foreign Key.
- 예를 들어 독서는 취미가 무엇이냐는 질문에 대한 보기는 될 수 있지만, who do u like best? 의
보기는 될 수 없습니다. 즉 적절한 질문에 연결시켜줘야합니다.

<br>

이제 기획한 걸 바탕으로 다음 챕터부터 코딩을 해보겠습니다.