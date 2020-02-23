---
layout: post
title:  "[Django] System check framework"
date:   2017-10-08 01:50:00
description: 장고의 system check framework
categories:
- programming
- django
- web_programmig
banner_image: /programming/django/python-django-logo.jpg
comments: true
---

Django runserver 시, 실행되는 class 클래스

---

이 글을 쓰게 된 발단은 이렇습니다.

django tutorial ch 3-5 로그 추가 작업 중,

클래스형 뷰에 logger 코드를 넣고,

로거가 제대로 작동하는지 확인하기 위해 로컬 서버를 켰습니다.

![1.img_wrong_code](http://drive.google.com/uc?export=view&id=1t-4Qfm7hM0Oe3BjAm1IAHhbXNnNAg5c0)

<br>

제가 의도했던 시나리오는, 해당 클래스뷰에 연결된 url로 접속을 하면

그 클래스뷰에 추가된 로거가 실행되는 것이었습니다.

하지만, 작성한 로거는 물론이고 테스트를 위해 적었던 프린트문까지

runserver를 실행하자마자 모두 실행되었습니다.

![2.img_wrong_result](http://drive.google.com/uc?export=view&id=15GfobF5rpnMCBuSrfhdalrqD8Md7rA_C)

그리고 해당 url로 접속했을 때는 로거는 작동하지 안았습니다.

<br>

저의 구글링 결과, 여기에는 크게 두가지 문제가 있었습니다.

<br>

### 1. runserver를 하자마자 실행되는 로거와 프린트문 !

<br>

runserver에 대한 [Django Docs](https://docs.djangoproject.com/en/1.11/ref/django-admin/)을 살펴보면 다음과 같은 구문을 발견할 수 있습니다.

>When you start the server, and each time you change Python code while the server is running, the system check framework will check your entire Django project for some common errors (see the check command). If any errors are found, they will be printed to standard output.

그리고 다시 콘솔 창을 봐보니, runserver을 할 때마다, 다음 글귀를 발견할 수 있었습니다.

![3.img_system_check_framework_console](http://drive.google.com/uc?export=view&id=1ev0_5TU6e06hVjXK2fIcg445d5y7O6wr)

클래스는 runserver 될 때, system check framework에 의해서 코드 검사를 받고,

그 검사를 받는 도중 로거와 프린트문이 실행되는 것이었습니다.

system check framework에서 체크하는 모든 내용은 [여기](https://docs.djangoproject.com/en/1.11/ref/checks/)에서 확인할 수 있습니다.

<br>

### 2. url에 접속해도 클래스형 뷰의 로거가 실행안되는 이유는 ?

<br>

클래스는 함수와 달리 위에서부터 순차적으로 실행되는게 아니라,

클래스 안의 메소드가 실행될 때, 필요한 변수만 가져와서 쓰게 되죠.

예를 들어 위의 클래스뷰 코드에서 BookList 클래스를 본다면,

GET으로 접근했을 때, def get 메소드에서 model = Book은 필요한 변수니까 읽지만,

logger나 print문은 필요한 커맨드가 아니므로 실행되지 않습니다.

어떻게 보면 그냥 파이썬의 클래스 문법인데, 이거가지고 한참을 헤맸습니다.

(역시 초짜)

<br>

그래서 클래스뷰에서 로거를 추가하려면 다음과 같이

클래스안의 메소드에 추가를 해야합니다.

메소드는 위에서부터 순차적으로 실행이 될테니까요

![4.img_correct_code](http://drive.google.com/uc?export=view&id=1Ni1CMs1QumH84ciYgIBbR3hmSv0_f3V_)
