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

![1.img_wrong_code](https://lh3.googleusercontent.com/7V6LjUDUWLhJBoaMyg09DIJ2aCJLY97DFCYfV4f4QzGLMRlYUOdyT3bo2NO69eA8Xp3ThMe7rjsX2d4FMxV_F5EdkaK6djjhVcHbDsI7rNIoxofifz4GSyfO_yIg_8HhoURUj4dlRSjna0Y39FGpazNSSMeJjWAgj7D2KZojZUzsx15pdaAbsGVvHWHIaYyktoXTTeQBKRH4khqMzccZg1ekhU26Sx11T_xo572nY4eWdg1X8OWP74aOBkRQ_aUCuWppxvLh_rRKr52lzwZk0fbotykiAHQzsUfGgeuXdz5WSB2tEkfahsZazF-0JzVjbMisafC6NpO33jGdfjYhq1XWpiCHMekkqDtd7d5sxoRdRpJrqx18aBPV0EOLWoA4fRzD7_qIZ35dK768j46JxzDNPP_KMRQR2ywOlBG9pkl0AqTJkogQyARXFA4Ep_R25sVgUzN5KKjvw_ZdGbRI4jfMhWHvZ-kF2-rjcqERyPv5NvvgjH6Wh2UMqab20QhNPAPp_dfO6XLDbf-6DCUM-ux3_iT7SM70K1lkTt7QbE_K-uxbJmsy-pwfOeZZL-RxAWW0hXRDSFCCFtDmvNtyE5LZoJ8XVLGc_Ik_d-dGOA=w1112-h1472-no)

<br>

제가 의도했던 시나리오는, 해당 클래스뷰에 연결된 url로 접속을 하면

그 클래스뷰에 추가된 로거가 실행되는 것이었습니다.

하지만, 작성한 로거는 물론이고 테스트를 위해 적었던 프린트문까지

runserver를 실행하자마자 모두 실행되었습니다.

![2.img_wrong_result](https://lh3.googleusercontent.com/IZ1LgO7WNvmX-358scxvpGhKZ2byWxKIBdyM_cQEr26EEtjTjIayPeMNTmWO30TFjGgdMu8Lio2STJiOQkKJDhzXyrf8xGShDw2eMsKvhjdL5icFzmv-A8tsgEJrGaSucKv61Gn9v9JJx2SuPbzdtI838xQgh-OgN_c20TUcD69Z7zFG5Xhdq1ijAec7TaAgEVHqtdB4EDTCtpZ2dYANaZOXu71hj-nM_mHTnib4vLxrWptN1n_JV1sUPWGfE5BmJgd-apfI5P2NRACeIy-M4qKd1x1STfkhbNCiFBKxlk9lukLoOXplx08RYhGgW9VFNfTzFfaW8boNHrMiZKM_BXxObzyIauDXD2EuB-3bZ9DMxhn9MhmG4mhOBjKbHQPxr6LZoZgjSgs01Jy1k9uA9CHdRNRHAkSztGnrDXpEra9g1LLl9D3g1_G2f0F4KzkBgQPUg3CwdIIJHhwFNIjhsn1S-QWW-jF4hrb0T8O5gzPwWfo3oD0jCKWTjwRPl-ITuL1gElG4PBePQdOpFA4RiDWtxEb10gG7yOT5QpGZicM3TZ3X-zeIPOZLk69YLDH1nuBUIE4i2zlQAWPOLvkQ7yXcA7sUB8vIEbOn9RSTww=w1364-h1282-no)

그리고 해당 url로 접속했을 때는 로거는 작동하지 안았습니다.

<br>

저의 구글링 결과, 여기에는 크게 두가지 문제가 있었습니다.

<br>

### 1. runserver를 하자마자 실행되는 로거와 프린트문 !

<br>

runserver에 대한 [Django Docs](https://docs.djangoproject.com/en/1.11/ref/django-admin/)을 살펴보면 다음과 같은 구문을 발견할 수 있습니다.

>When you start the server, and each time you change Python code while the server is running, the system check framework will check your entire Django project for some common errors (see the check command). If any errors are found, they will be printed to standard output.

그리고 다시 콘솔 창을 봐보니, runserver을 할 때마다, 다음 글귀를 발견할 수 있었습니다.

![3.img_system_check_framework_console](https://lh3.googleusercontent.com/cGSeAGoCvtu8Yx1XIQUYmXA15rqYkd7A5C7bNfPEzQdE6pp7QQ9qulrScCwY4SfpdhalIZ5GuG-PSooeV2meUYZQX_bTx8HTF0KaWWdH0xVY60WTN60Y8QRN0Fo_RGl8lII-vxA80PWV2iq4q9ToYNDhPw51hacAeeC-yow15y4JnZmUkzNZsGTBDf2oo8NCvxFofiW2NGwxQtoHlCg95aUdZCm4gbDP5pY3UjarnGpqONi77ObZMasGNQt2GPL_wqxsFAOUGIEP1uHBp8v2cDO0hJum-ycjTW2TvrRgV9Z5uv5oeRSa5x4jJFO2Ok1PMfv5wk0cT3-2JyKpdghRMrKk4YL9RqDyzcPGUobfqECPKFoWaAr2hKaIswN97Qg-hBkxKWd23W1St2IGKuj3KLYU0mRAx5bUlNGYhXwkwG3EhfhM8kMWDi_xcvOWGTgKa8W9a4obAlH-rS6Uz1NKzz3smnx121rQssNvRvfp9yhSUp7FaFFpcM02dOfGin5DQtB7V7HOYn3QOqoGSJ7mYzcWIIj4aLr5k1-JCeJyRYhOKSLpXpoMDci-ZLD5t6TOiTu1wdPD-XPzi18_VeAKFs_1LaSdf99ua8Cm6J0pyg=w1364-h592-no)

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

![4.img_correct_code](https://lh3.googleusercontent.com/g9otT-4DRkP4B7s8fb-jSjzwm4MtN3vlqQ4rfmD0DtzEmqrm98i5VxvsbB0loGLq6mskk8rLDzCYo5E3PSqKkiK59JLaC2POXY6zI45bDnPyXRkNJWjHA_trlsIx_WrxCYsdDqsFR2ZG-XXmr_UIjxWE2JG4_EKTdNNeznOk5N3YzH8i9edyGIZT5RGBEyt8V1KO9YQ-QHJQUwOfMQyCVqSLAgQE-GWKukdqdFAEzo-yQ89V7zwEFX0sWxk_s2sejzhUyw1uUuxcxj3t74E11dSPjPZmfEYIpo8xfwyV5jF-F0DGGuFBmjArTBke7CASjxj7gUdXfk1wUSZ_HBr3qnGw901Q9g9S7FUbtRiVtaqVSKFJFDx6aOIV78ppR7bxjyip_-zfeZ3fEyOuCiFN3pKEK0K6DNk8ZBsnJz5-DYvAF-Lzc8AihW4MsbH3lBf-h_Jtt2qVfUU5QAOsDnSizjHTGp3Qto-YMUa_nyLUssFhhU7aqJ7Fv70Ly6hBroqlJpW5bOzBY_IAAbUHQzjsEoUteRxgTuhLY4EhqI03KXRkFP-aqxRcNUo0fSVMYbcFldzSU1LsCKZE3ZU6wNoGhekGfFb8sFaK8OKlqCitBQ=w1126-h1472-no)
