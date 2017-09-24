---
layout: post
title:  "[Django, 파이썬 웹 프로그래밍] Ch1-1. MTV 개발 방식"
date:   2017-09-15 20:00:00
description: 1-1. Django의 개발 방식
categories:
- programming
- django
- web_programmig
banner_image: /programming/django/python-django-logo.jpg
comments: true
---

Django의 개발 방식: MTV(Model-Template-View)

___

## **MTV(Model-Template-View) 란?**

#### - 웹 프로그래밍 영역을 3가지 개념(모델, 템플릿, 뷰)으로 나눠 개발하는 방식

<br>

> - 모델(Model): 테이블(DataBase) 정의(백엔드, models.py)
- 템플릿(Template): 사용자가 보게 될 화면 정의(프론트엔드, 브라우저 화면, html)
- 뷰(View): 애플리케이션의 제어흐름 및 처리 로직을 정의(백엔드, views.py)

<br>

#### 예를 들어, Django로 만들어진 블로그에 들어가서
#### *www.django-blog.com/post1*
#### 이란 url을 브라우저에 입력해서 어떤 글을 보는 상황이라면,

#### 1. views.py(View)에서 www.django-blog.com/post1에 해당하는 함수가 실행되고,
#### 2. 함수에서는 화면에 보여줄 데이터를 테이블(Model)에서 가져와 가공하고,
#### 3. 가공된 데이터는 브라우저 화면(Template)에 전달되어,
#### 4. 사용자는 www.django-blog.com/post1에 해당하는 블로그 글을 볼 수 있게 된다.

<br>

## MTV 방식의 장점
- 모델, 템플릿, 뷰 각각의 모듈간에 독립성을 유지 가능
- 소프트웨어 개발의 중요 원칙인 느슨한 결합(Loose Coupling) 설계 원칙에도 부합
- 디자이너, 프론트개발자, 백엔드 개발자 간의 협업이 쉽다.

<br><br>

### 덧붙이는 말
#### - MTV와 거의 동일한 개념으로 MVC(Model-View-Controller)가 있다.

MTV | MVC
:---:|:---:
Model | Model
Template | View
View | Controller


즉, MTV의 Template 기능은 MVC의 View의 기능과 비슷하고,<br>
MTV의 View 기능은 MVC의 Controller의 기능과 비슷하다.<br>
###### 정확히 똑같은 건 아니며, Django는 Controller의 역활을 Django Framework 자체에서 한다고 보고 있으며, 따라서 MVC와 약간 다른 미묘한 차이를 MTV로 설명하고 있다.(MVC를 경험해보지 못해서 이해가 가진 않는다)
<br>
#### - 이 MTV 아님
![Image of Yaktocat](https://www.2017auditions.com/wp-content/uploads/2016/11/mtv-casting-call.jpg)
