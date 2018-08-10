---
layout: post
title:  "[Django tutorial] Ch1-2. Django 설치 및 실행"
date:   2017-09-16 13:50:00
description: 1-2. Django 설치 및 실행
categories:
- programming
- django
- web_programmig
banner_image: /programming/django/python-django-logo.jpg
comments: true
---

Django 설치 및 웹페이지 실행

---

Django는 Python을 기반으로 하는 웹 프레임워크이다.

그래서 Python이 미리 깔려져있어야 한다.

<br>

Python은 [공식홈페이지](https://www.python.org/)에서

자신의 OS환경에 맞는 설치파일을 다운받아 설치하면 된다.

여기서는 Python 3.4.4 버전을 사용하고 있지만, Python3 이기만 하면 상관없다.

<br>

지금부터 Django 설치 시작!

<br>

## 1. VirtualEnv(가상환경) 설치

<br>

사실 가상환경을 사용안해도 장고가 실행되기는 하지만,

대부분의 회사들은 가상환경 아래 코딩을 한다고 한다.

<br>

> **가상환경을 사용하는 이유**<br>
#### -> 다양한 환경에서 작업하기 위해
#### -> 다운로드한 파이썬 라이브러리들의 충돌 방지

<br>

예를 들어 어떤 회사에서 동시에 2개의 다른 프로젝트(A, B)를 진행하고 있다고 가정해보자.

#### - A 프로젝트: Python3.4 와 Django 1.6.0 으로 개발을 해야하는 상황
#### - B 프로젝트: Python3.6 과 Django 1.9.0 으로 개발을 해야하는 상황

<br>

이럴 때, A용 가상환경과 B용 가상환경을 따로 만들어서

A를 개발할 때는 A용 가상환경 아래서 작업하고,

B를 개발할 때는 B용 가상환경 아래서 작업하면 된다는 것이다.

<br>

또한 외부의 라이브러리들은 서로 의존성을 갖고 있는 경우가 많아

버전이 맞지 않으면 에러가 나는 경우가 있어 가상환경 작업이 필요하다.

<br>

가상환경을 구축하는 방법은 크게 두가지 방법이 있다.

#### - virtualenv를 설치하여 만들기
#### - python 자체에서 만들기

<br>

가상환경 설치는 Mac과 Windows가 조금 상이한 만큼 따로 준비해봤다.

(내가 처음에 많이 해맸던 기억...)

<br>

### § Mac

### » virtualenv를 이용하여 가상환경 만들기

virtualenv를 사용하기 위해선 먼저 **pip**를 이용해 virtualenv를 설치해야한다.

pip는 Python으로 만들어진 라이브러리(프로그램)를 설치하고 관리하는 package management system이며,

pip install packages의 약어로 재귀적 약어이다.

python을 3.4버전 이상으로 설치했으면 자동으로 pip가 설치되어있다.

![2.before_venv](https://lh3.googleusercontent.com/pChltOjXBQOUVtQVUKPketMjI-2asyRxmcPibbjxADOtYxeJhEc5AJbKgVaB5cI4gCC4k57XO5FQ8nZoKnHQMGk1wlAWg06xGxVB8Yw--gLgSDzZLoIXP67Soo31sFHQ4h8bgi4-drrgLlX0yZXt-FgIejRydF-48Gut13XdQFFa8wxygRrn0atME8z0HbYq0eUZn85l6qQdBAKzhksGuScKjUEIQ8NuxH5qk7jQESKO670l3AYWRy29E8S6GEOJ0EXiKz4_s2TvmkrulWinok79p5_S2lp24wQq9cTPe6mCI_qGMysweTYR231TOywL6wXqsP7h0aWnxydvG7yNc54BveyS6Zhj7HJvkCc5eE25-R0j8fcwFROERzo-h7hRC3d9qvIzNITxtEJ2ZGGxKxIMvsEHVv8-OACJl1GE_-FZwz9J0GuiO2ilfhVm3uJZfGkmwu4Oh-YrqU1qRgu3_91j91UvQeotZ1DMC7yjd8LY1La6Qa1Tl_qVM6JvLCdJ_UlHvWZLwijdF2x1slDVCvo_aUHlCMiBAJLOnzLoUwK76L-2h93NkBOI5LNGZ9is6Lr6pGFHDVW8Nu6RKocatR4QWpbOTtLt0s42Nulbyw=w768-h458-no)

사진으로 설명하자면, 먼저 파이썬의 버전을 확인한다.

{% highlight bash %}
$ python3 --version
{% endhighlight %}

을 통해, python3를 입력했을 때 기본으로 Python3.4 버전이 실행됨을 알 수 있다.

{% highlight bash %}
$ pip install virtualenv
{% endhighlight %}

를 입력하여 virtualenv 를 설치했다.

여기서는 이미 설치가 된 상태라 Requirement already satisfied 라는 문구와 설치된 경로까지 나온다.

그리고 가상환경을 만들고자하는 디렉토리로 터미널을 이동한다.

pwd 를 통해 경로를 확인한 후,

{% highlight bash %}
$ virtualenv -p python3.4 venv
{% endhighlight %}

를 입력하여 venv라는 가상환경을 생성! 가상환경 이름은 자유롭게~

(새로운 폴더 만들기로 만드는게 아니다!)

![3.after_venv](https://lh3.googleusercontent.com/Q7dHcI_f-XZlS91_ttxFt--UuGiaybTyhj_zZILRDpZSJhBrnQ0KiC4hmbNRO7UQyhX9hA600v53hr7PhktQD0__rqLjTGl3GzWWz5-vQ88Fe2Ag3bYlNGnRW-MHDw9cuQtC-PQrofK_OHz17qv4GHfpO-c11SGJlVes8J4YQEERTK-DUgW5AyEHXIsaALKrCyRTF9MDJJP4G_rWIZK4lYG-lwnDxUjvTem9sH2j0SLbe6nwre55PUILBlhzdldsGFqOmsTfDMyxDG9RCsi-Qav1UNJSPuJOdhgdIPSGL4etLhm14Zpqjp0uelheyGmu0cNm4ye0p4oCKxvF_KBYgvaHACB9RjKqhkvJouy1hNmu0boQQrj81fioB11Im_FXsERbEW6q0N2Tm1dYYWPOKi9c54fDeiURf841q5uEqXXHHPiPeIv27A7Q-Qk06U1E8cVcHF-5VrVF-TXQ2CMgNnEvysyEIUXoNGg2Akmtrp0-50_UigM1CG8KUky2iahvt7R4NSDshshVvQyXleNscUiCd3gqtqb7goEXYNrpOmGIE3YaQTBFjnSQXWJLAXVm_cH6SPWB4AIHHnyChV-aVs6hoc9kOiy1ZXRGJ2lW6A=w768-h439-no)

가상환경은 폴더형식으로 만들어지며, 폴더안을 살펴보면 python3.4로 세팅된 것을 확인할 수 있다.

<br>

### » python 자체로 가상환경 만들기

![11.mac_no_virtualenv](https://lh3.googleusercontent.com/Nx6qqO7BBeB-nTQ8SVjf4bz6Sp-9gs4RfK4mpJNqzhoAU0dYkEOTH4eS_zzNrqdFv2KB5edhZoEj9zCZQPUJl0rQdct584Y-6dI7tJ6aW25r1iWf6tizA6Qqs8PIVq5_utVUf1MN3lt8mcDwzwTwGpXjNR9uCq3iF99mN5bvRLXWDzqEuasSHg2etGGVzIMUpZ3fWN4i8h3VbnJ6NMrs7eGbx3wtmbJ4L26ATfpDe2x-JiKGWY4sTM6ZTmRxWdq82PXsPxg2NwvxuzBpZs7TmwqDWB8b3UC6xcpxJhbVHYQ-apjZxdC8ZqoZ-uPhjwzCgKoNABBNXap7iUaWmNPdwX7zxBXMTDkl3vePbGxAGfqUqA7j11PgepPYbO5fvw35IXSQ4JqD86fgUGgkAJBJ5Zvg-gn5qs66W0cbdhfkDVTh_emaZyBb-25Y5STqybZFIMptp68IBi_9k2QDWGyv7l6V84kOB7lwOG9WC1nLuY4j5licZKT_LFQ7o7EQFsX4p4xG3miT6EiAipOcIoyGL3V5lYI6IH4NNVpVbwZeLhaOSuo7psoclYgRMmRhXd9CukcmkCDM8XSU5N-L3RoCGcTxzcFMg_GJMEbcVlENKg=w2462-h754-no)

만약 python3.6 버전의 가상환경을 만들고싶으면, python3.6을 설치한 후

어떤 명령어가 python3.6을 실행시키는지 알아본다. 여기서는(대부분은)

{% highlight bash %}
$ python3.6
{% endhighlight %}
를 입력하면 설치된 python3.6을 실행시킬 수 있다.

Python3.6 버전으로 가상환경을 만드려면 다음과 같이 입력한다.

{% highlight bash %}
$ python3.6 -m venv asdf
{% endhighlight %}

asdf 라는 폴더형식의 가상환경이 만들어진 걸 볼 수 있고,

폴더 안을 살펴보면 python3.6 으로 세팅된 걸 알 수 있다.

<br>

이제 만든 가상환경으로 들어갈 차례!

{% highlight bash %}
$ source venv/bin/activate
{% endhighlight %}

를 입력하면 경로 옆에 (venv)가 뜨면서 가상환경에 들어왔다는 걸 알려준다.

비슷하게 asdf 가상환경으로 들어가려면
{% highlight bash %}
$ source asdf/bin/activate
{% endhighlight %} 
를 입력하면 된다.
![4.enter_venv](https://lh3.googleusercontent.com/GyKwV4jhEM_yTTVGv9A6gXh1WoVk17BR1dgFSaZRCWfdaxDg4K3AQoNP7pD6rMOkXsipd60ZGk89Ho4xY5MxThxu9QVJKpQFbpSGRwyHlOoluuAqv0H7hPtFVDj69mcnkA8Jt-XTl_8tv4AabBt9K_jTe9S6ejPDfv5WvDgsTC7KcfiNXOGpfkxl6Xa1vpn4jY2-5ohTFotB8M1DUAhcBwN2xmOc4-dlvhUjl3q76CapUK0MqxD7ZIoiLbZ-Zc_KVfF57LMBC5C8ScERfHAPL31Bjg1wAtRkqqIIwiSn0uPpvZKpE9kxI4b0hpN86FOidMoQ3DnDildkytFfU_3fQbyYsQvBdwZ_7dWpDYmKNDLAYAxuVbdwFiLfEYTLhagQ4NNkDEMWr53Fjo9I78ECQGjDi9fF6m7es8kHDq-ebEpY03fksWuJI_3HZtWzRtAqC40TXSWCFctYKNhDctNio1H-tze60bH-DpldPMnvANwptu-l0vuh-QusPZtr4rkX6_3JcwDnxd7zyZ9T_A48qLpTjIJ2OqNE7a1dORYV7b9jQP53mHZ3uNaOn-SfrpKwAvxE3QCG3ls-JXyaYadGo5K98Xp0D7KG5K4DgNnkqA=w768-h512-no)

가상환경에서 나가려면

{% highlight bash %}
$ deactivate
{% endhighlight %}

를 입력하면 된다.

<br>

### § Windows

![9.windows_venv](https://lh3.googleusercontent.com/hWZZuSVDn6y3w-OFhNe1otHVYsPdzED5eq126Hk66cZbKJOTtHQb0j1dC5479OV3qdjTz3GKHdpua8fMX2K89fstdq9S_SbQDsgPBtzsasFbw6_CZ-YwlH5z3ilKC3FwluDfa5vJbcYn0xblMWKkM24BTtRpibIwsgxztcB2R6uzlN-kW-38xkAmvoTw-Hiux1JKRnBE3FydjBmBhVK7Ww4EhEzc-cB3VsoU18jIMDPAznzPeSo-pPg9zDdpxbyRnqzh4gwzuNWSsF3ovNVz-rHmQVk5NQsPHhueoDQ2PCGZzhu8uWfEc5zjUcoATiMMVlaIQmv0oap1svxPvLsgv7yP84ENESP21i4BB8qcUHsxbZZDaHeXwSYylfiWzDmgUmyUQcLiyuXViH7fI-A3mp0kKK6M8rgampmfchJ9zcFvVsOerSa-9fX0LUWuFltEah9e_ULLWB3mXFoRojJOT0hz91TcEwK1pcaL-C6izcH9-LqrkNvXBOl1iIjsNGI52Eb1ttp2IfeYCxXME_4CyYHaUa2bBoLNNrzfH2UuVCwIEslM14WFSi0IlvwY2X9comlPRLKklx6YsoD3oQTDYWE3P97b72VTBF9MsvnjfQ=w829-h955-no)

:: 로 시작하는 문장은 설명을 위한 코멘트일 뿐이다. 입력하지 않아도 된다.

밑의 그림 같이 커맨드( win+R 로 실행창을 띄운 후, cmd 입력으로 실행 )와 윈도우 탐색기를 같이 두고 하면 더 좋다.

Mac 환경과 마찬가지로 venv1, venv2는 새폴더만들기로 만드는게 아니라, 커맨드에 명령어를 입력해서 만든다.

![10.windows_venv2](https://lh3.googleusercontent.com/CoQNwpxa3IBXeWWGc4SQmHi9loqWaR-DCMn0aQsypIeMu1OF6AAm_kXkHMWsaYsU1Xa-jNke7o2NjBi0zzuDbB8tWONDxO6NzvefqkZjM68Jftb2Aoz6aDXwvp5DFRJ4ohtVYRcWxLwyDcOC1YopCkdMojDfYUZkij4Yuz2af9HVJMQ7P7IAdBGZ7S31plOYTxomhrTy6JeZSKgMXO7jxQd8d0xws2NFA1tWbBpGGSH6XhsWgSsaB7Qq-xtVAW1QCTh35_madHOyN_HeKEqZtC87H7BPf6W783uBQniUb3syLa2dCwDKBQf4r0-nBM-1j3IIiJiHgbj8K2yNv7-vjKUS5r23fivXgL5_XhhPZEUodYmTptPuD4nUv-VM7ZYS2p9HiXdK3AEIkPB6ZHFttwOSeSb3OrVFTmuYD8iwfOTEpkNkNZ5zi9ITRwzJfpcHfVpzCEGiSOt-KqSQ4f9uXT2AMR59Xmr4yQDbK6HsxK-PefRi_FBcMc57qdNW82q5yFUlsSJlJMdyPBt5dXJQoFomiM0HHcj2fZUXn0NY7-SVAToYAM9W6i59QuuKAUgaGawabLbS031_FyTf6how_saAmqQHuPazPju8Sax9SA=w1429-h949-no)

<br>

## 2. 가상환경에 들어온 상태에서 Django를 설치

<br>

여기서부턴 Mac과 Windows가 똑같다!

가상환경에 들어온 상태에서

{% highlight bash %}
$ pip install django
{% endhighlight %}

를 입력하면 해당 가상환경에 그림과 같이 Django가 설치된다.

![5-2.install_django2.png](https://lh3.googleusercontent.com/ICKkIzWV4S2i-OWvvH5sx4p1xmZ_RLjVSNRWPmJ4xFmcr8QxF_VhOIx701gLyas3xxdhnw_RlvanVOP2aINXu4l_5HT4pcj2kauztgvNMjGxERqsF4ZusSnX8w3QNyIiySfSKBgnDLPTLkqIsUkLEzCDnf1uUmL8tqlkDtj5Qv9siS_d6A9E2-Kyj7x0wK-evKlSCQUDlmQk1ZHTv9Mrl8zsoVR9u5j5oRKnG9-8yrnawc70NbqLpDnVFtdyjLiNc5VpSrrx7_WDN1BiQMr2zMiaJBlT7OiKhBNXigM29KrXEn9t8IHE16Qe8dX3anRD864U_PzrRuydvQf05j9LHvpPxF3N_dVlZpwoMPi3NEZliMrzdklLlhsX8bcgsgenXy_wKvswYP6U3mVLB2XcP5t2Wv7bOT5YPy9ia-gB_nIYCDiJymkTVLev6J28wpTGQUpqARUwye3rqtZWcHe0pxu7fT4mvPcAuDqO018fjbsvnZZzrprU9gay6rnGSBuFiFkLW1flX-jxIv3zCo65CYzkOHdQKZyKGJ9uuZ7gUaFliEKKtEeGUypdS1_dv3JeEZIjCINyXCKiqlBPI5yM9IFwbpB3QlC1WdyOqMtLPw=w768-h438-no)
가상환경 폴더안에 django 파일들이 생긴 걸 볼 수 있다.

이제 설치한 Django를 사용하기 위해서는 이 가상환경에 들어와야한다.

<br>

## 3. 프로젝트 만들기

<br>

Django를 설치했으니 Django를 이용한 프로젝트를 만들어 볼 차례!

가상환경에 들어간 상태에서

{% highlight bash %}
$ django-admin.py startproject mysite
{% endhighlight %}

를 입력하면 mysite라는 이름의 새 프로젝트 폴더가 생긴다.

(venv 폴더 안에 django-admin.py를 실행시킨 것이다.)
![6.startprogject.png](https://lh3.googleusercontent.com/zEihgxxPC1Ji0EPHlUcWwgYeXNhPfyCuD-FRJQP4PHtaAcG04vgx985ZEXO1phKrdqGUFwLpJrp63hvgBJbBEGBsr_vOP5Aqo0gmdO_yWSksYd4G7zLWX1aBc-NMvisCOE8J84S1L5NKEa4zmU5PvlGJBBkHxj3P07YFMoL31MvaBxtAX4hOCNORmWMBQeQsM6KGL6UM0quaPDDbiL-L3Pivjn4BBy7hGOE-tVF3kz9W3ctl12jYevrzhsr8x_oSJiS9tneNM1S-8BwkpaG9qazGABsXinLSNuUQmVDp4ZN5uPYA63gnxlbresHYPLcadZ-62xbdf4pAZVA8ZMFsZxMOEuxdJ3LbL_KMIWKK-wYpIl6HibT56LV2wLkuTuhEp3fmraDk3Ni2efouN69gSpV4B9B1Z1JK0Yj0S13WNPNLQF1aziYR2lC0Cuu5zeU478Scsb2Hwl3gHeETBvmRlRuPDGnjvQfijR5olCGylShMhB2W0F_uaIJWtBDC9xAdD0GBLj73CzbEqBQO56lqoHCh5otQTneoQr4-19hWOV4qqw8BiTZ8PdUpWzhgWSZYgQNIYcbbPBM4JAYv-ZbpHEfT1pAs3L0PpkvXaVR2yg=w768-h485-no)
새로 만들어진 mysite 폴더를 살펴보면 manage.py, settings.py, urls.py 등등이 보인다.

<br>

## 4. 만든 프로젝트 실행해보기

<br>

프로젝트는 manage.py를 통해 실행된다.

manage.py는 방금 생성한 mysite프로젝트(폴더)안에 있다.

터미널을 manage.py가 있는 폴더(mysite)로 이동한 후,

{% highlight bash %}
$ python manage.py runserver
{% endhighlight %}

를 입력하면 어쩌고저쩌고 글이 뜨면서 로컬서버가 실행된다.

아직은 세팅한게 없으니 오류가 뜰수도 있지만 상관없다.
![7.runserver.png](https://lh3.googleusercontent.com/i-iYkqfWJhzDaelMRy8cIT3k9gq7Jf_MzeIqmtYtb7X_Xf9ICHGA89No6WmV47J7veOZBrUWzAMnuVnn7SgMGnUtsbYYlIJ7xrgsPtXVIiDjbTR0Px7yfOXCHqNryvGbU2k9Rx510hv1-D44S8hp35V56jGpLqUhIbVXT17GXqz3Jh7KwqOYG7_msTEdaKVuPC-eL3QKXnB4TJlE0t3iDdYcuOijFflKBesKf7TPjnID-OTxO8y2rqqiBk55z28nMczZZwtXlD3yUKn4eqq7l7n36IAekGDXAreFFgjK9d7fcAL8l-mTqSOqQYkowfOlS_Yvygq7wSnRLJeepnCx5VXgxTPPsr0xLCzFg5V7TxIm6TCX6qcfCOXIU9x7Yi7F0bZSqVyvxZXt3dFHN7v5nwB3_vS74Ru8QMc6ID0dT_tKDDAe2sboEywue50z7WlQi0QFDeS6f6L_p6bbL5zPrpz-Z915_BtsRMudUVWiOHw7gmGhzmkYpBLWGg3fR_VorOrqrai2A7UWMrJwh1AyQOxjLc_t1SWbv7SuVTAqCeqnMvctBozNfFOLhHgb1w08OCxSM4TRgoJpruOghqW64rmjijzXwqIhT-wPqkj8TQ=w768-h439-no)
터미널을 잘 보면

{% highlight bash %}
Starting development server at http://127.0.0.1:8000/
{% endhighlight %}

이 보인다.

<br>

아무 브라우저나 켜서 주소창에

http://127.0.0.1:8000

을 입력하면...
![8.it_worked.png](https://lh3.googleusercontent.com/Nqr1EMDUhZ6IvIWD3XjS6Uv7fVuBy6d-AAPiLl-vUQIDtsAODx6rQzfLqJGnDPnCWPxBXph4RQfp3KiM5qPRZAQa-4f6beZcWU_ojQzl3HaC06lortp91BF1o7H9MOxvSsge1PhcDh9CuXu2IwuI3pXUIYB9_fU5a2Wu21X3ioN5Ab6Lw_OzZLK97EQcgOvqICllumaCEXgA4UvIDGMAbKjAi7zPovtsID4TbggQkVXfoWuD6KgdDO9RpfVjOiooA19KXqH93bIzFW51e0tV7eQaUTj4iDTpB9FJWw8xK4yKFRASgL9H4CU0WKKhVp7f40Riq4lR_zTKfnMyKoXYomVDeiY3qaUIPkZrMYjWs-YAp00pIyGzhJFCwERYQGTHhhPxmbpEVd_4nViU1pEDMlAE_G2H0LoK-9PRnR_GhfUUu7_13w_geN8Jd6KxcEo1X4cFUF5fWESwIQOEFHRmI1XdZHSx03agqTW2ClGmm_DU09WanaB9wXCcsvMIafFC_gIUZIQAx4MBClSqVf7rP21MRVBt19u01VGGwhUpAvR3n6DdYwXQRioLPPyg5X-YV_Inob4dDtE8UPXLMPvjuUXWCKkLiGnZHjmcvO1Qkg=w768-h522-no)
It worked!

성공했다고 장고가 축하해준다~

다시 터미널을 살펴보면

{% highlight bash %}
Quit the server with CONTROL-C
{% endhighlight %}

라고 적혀있다.

즉, 로컬 서버를 종료하려면 컨트롤+C 를 누르면 된다.

<br><br>

### 덧붙이는 말
#### 1. 재귀적 약어(Recursive acronym)
: - A recursive acronym is an acronym that refers to itself.

내안에 나있다??

PIP(Pip Install Packages)

BING(BING Is Not Google)

![Image of Bing](https://lh3.googleusercontent.com/W8z3VrmQ7Pabk4uiUFMNmkvdPfEnzL7YTfhPnUu55jR2seaP0Q6DqYj4NFhtsCTwk8Nq6BsyO79mbmjX2jq9kdVj0p9XSYCvrBVbYrVxwJBe6i8jwUN-ZLEpeDxtn3nZYRFeW0PJSFpMwGRYWpMtpmNCXdWw_qld2KLKaMkHerO0tr1-A3i85CFYiIMIXIoxUTZgRDVDNctKF4Iwnb-ZUNK5yKDH-gcFK973wQ0JgegmN78oeV0fd3YiLJWD8YJuCmNh-7pr1yh9HkYMJ5Sr7czYFzUSlhgJlx1ZSYc-UVD5f87EJUGJ2mmbPcVAuhKwYptNxRTP-NE-_J4NaqG1vrtKz40nGVL0h5Xn9SkfrGTTjnOW-ny4Z7gSMIkkg5KGWTwG9iXzYXM_buEoO3_UiGaM0NhVjcw4cB-hkTvnevVaKEy-bTNa0K1cNmBGV6T7ReiHEBIy3rrDi7H7zOR69nCOMgGzdXyAUbOef9E-GnObTfi9pEV9hpov2zk25ClxV6YEtSELGbiQOP-3_CmlbPvkdKQGHaqP3eCLIG39_WR41zRhr_E_Ku5zzU2IiI-V5Pj5embSf3W-ObwZFWNIxRLhT0-TLD-sjsQR-RcPtA=w300-h122-no)

...

#### 2. 가상환경 두가지 방법?!?!?

두가지 방법의 장단점은 모르겠다...뭘까