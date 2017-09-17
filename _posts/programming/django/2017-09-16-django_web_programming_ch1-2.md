---
layout: post
title:  "[Django를 활용한 쉽고 빠른 웹개발, 파이썬 웹 프로그래밍] Ch1-2. Django 설치 및 실행"
date:   2017-09-16 19:00:00
description: 1-2. Django 설치 및 실행
categories:
- programming
- django
- web_programmig
banner_image: /programming/django/web_programming_book.png
---

Django 설치 및 웹페이지 실행

---

Django는 Python을 기반으로 하는 웹 프레임워크이다.

그래서 Python이 미리 깔려져있어야 한다.

<br>

Python은 [공식홈페이지](https://www.python.org/)에서

자신의 OS환경에 맞는 설치파일을 다운받아 설치하면 된다.

여기서는 Python 3.4.4 버전을 사용하고 있지만, Python3 이기만 하면 상관없다.

지금부터 Django 설치 시작!

<br>

## 1. VirtualEnv(가상환경) 설치

<br>

사실 가상환경을 사용안해도 장고가 실행되기는 하지만,

대부분의 회사들은 가상환경 아래 코딩을 한다고 한다.

<br>

> **가상환경을 사용하는 이유**<br>
**-> 다양한 환경에서 작업하기 위해**

<br>

예를 들어 어떤 회사에서 동시에 2개의 다른 프로젝트(A, B)를 진행하고 있다고 가정해보자.

#### - A 프로젝트: Python3.4 와 Django 1.6.0 으로 개발을 해야하는 상황
#### - B 프로젝트: Python3.6 과 Django 1.9.0 으로 개발을 해야하는 상황

<br>

이럴 때, A용 가상환경과 B용 가상환경을 따로 만들어서

A를 개발할 때는 A용 가상환경 아래서 작업하고,

B를 개발할 때는 B용 가상환경 아래서 작업하면 된다는 것이다.

<br>

일단 가상환경을 구축하기위해선 pip를 이용해 virtualenv를 설치해야한다.

pip는 Python으로 만들어진 라이브러리를 설치하고 관리하는 package management system이며,

pip install packages의 약어로 재귀적 약어이다...??(돌I 같은...)

python을 3.4버전 이상으로 설치했으면 자동으로 pip가 설치되어있다.

![2.before_venv](/assets/images/programming/django/web_programming_1-2/2.before_venv.png)

사진으로 설명하자면, 먼저

{% highlight bash %}
$ python3 --version
{% endhighlight %}

을 통해 설치되어있는 Python버전을 확인한 뒤,

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

![3.after_venv](/assets/images/programming/django/web_programming_1-2/3.after_venv.png)

가상환경은 폴더형식으로 만들어지며, 폴더안을 살펴보면 python3.4로 세팅된 것을 확인할 수 있다.

<br>

만약 python3.6 버전의 가상환경을 만들고싶으면, python3.6을 설치한 후

{% highlight bash %}
$ virtualenv -p python3.6 asdf
{% endhighlight %}

를 입력하면 asdf라는 폴더형식의 가상환경이 만들어진다.

<br>

이제 만든 가상환경으로 들어갈 차례!

{% highlight bash %}
$ source venv/bin/activate
{% endhighlight %}

를 입력하면 경로 옆에 (venv)가 뜨면서 가상환경에 들어왔다는 걸 알려준다.
![4.enter_venv](/assets/images/programming/django/web_programming_1-2/4.enter_venv.png)

가상환경에서 나가려면

{% highlight bash %}
$ deactivate
{% endhighlight %}

를 입력하면 된다.

<br>

## 2. 가상환경에 들어온 상태에서 Django를 설치

<br>

가상환경에 들어온 상태에서

{% highlight bash %}
$ pip install django
{% endhighlight %}

를 입력하면 해당 가상환경에 그림과 같이 Django가 설치된다.

![5-2.install_django2.png](/assets/images/programming/django/web_programming_1-2/5.install_django2.png)
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

(venv/bin 폴더 안에 django-admin.py를 실행시킨 것이다.)
![6.startprogject.png](/assets/images/programming/django/web_programming_1-2/6.startproject.png)
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
![7.runserver.png](/assets/images/programming/django/web_programming_1-2/7.runserver.png)
터미널을 잘 보면

{% highlight bash %}
Starting development server at http://127.0.0.1:8000/
{% endhighlight %}

이 보인다.

<br>

아무 브라우저나 켜서 주소창에

http://127.0.0.1:8000

을 입력하면...
![8.it_worked.png](/assets/images/programming/django/web_programming_1-2/8.it_worked.png)
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
재귀적 약어(Recursive acronym)
: - A recursive acronym is an acronym that refers to itself.

내안에 나있다??

PIP(Pip Install Packages)

BING(BING Is Not Google)

![Image of Bing](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Bing_logo_%282016%29.svg/300px-Bing_logo_%282016%29.svg.png)

...