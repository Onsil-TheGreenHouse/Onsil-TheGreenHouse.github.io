---
layout: post
title:  "[Django Advanced Tutorial] Ch2-1. pip freeze"
date:   2017-10-22 13:50:00
description: 2-1. pip freeze > asdf.txt
categories:
- programming
- django
- web_programmig
banner_image: /programming/django/python-django-logo.jpg
comments: true
---

가상환경 동일하게 설정하기

---

## pip freeze

<br>

상황 가정을 해보겠습니다.

기존에 A라는 프로젝트를 a라는 가상환경에서 진행하고 있었습니다.

a라는 가상환경에는 수십개의 파이썬 패키지들이 설치되어 있습니다.

이때 새롭게 A 프로젝트에 참여하는 사람이 생겼습니다.

그럼 그 새로 들어온 사람은 먼저 a와 똑같은 가상환경을 구성해야합니다.

근데 a에 설치된 수십개의 패키지를 하나하나 버전을 맞춰가며 설치하기는

번거롭고 시간이 매우 많이 걸릴 것입니다.

<br>

이때 사용할 수 있는게 pip freeze 기능입니다.

pip freeze를 사용하면 현재 사용하고 있는 가상환경에 설치되어 있는

파이썬 패키지 목록을 뽑아낼 수 있습니다.

<br>

먼저 가상환경(여기선 venv)에 들어간 후, 다음과 같이 명령어를 입력하면

{% highlight bash %}
(venv) $ pip freeze > requirement.txt
{% endhighlight %}

해당 디렉토리에 requirement.txt라는 파일이 생깁니다.

그리고 그 텍스트파일을 살펴보면, 해당 가상환경에 설치된 패키지와 그 버전이 적혀져 있습니다.

![1.img_requirement.txt](http://drive.google.com/uc?export=view&id=12rG-VgWfPSVyyEB1bqwXlEuJGzFx9JGM)

<br>

그럼 이 패키지 목록을 그대로 설치하려면

설치하려는 가상환경(여기서는 venv1)에 들어가고,

해당 디렉토리에 requirement.txt를 복사해놓고

터미널에 다음과 같이 입력하면 됩니다.

{% highlight bash %}
(venv1) $ pip install -r requirement.txt
{% endhighlight %}

![2.pip_install_r](http://drive.google.com/uc?export=view&id=1ZMhnh9LnOXWNC-81Erc5bPveKbK3x62G)

<br>

## 덧붙이는 말

<br>

pip freeze나 pip list명령어를 입력하면

해당 가상환경에 설치된 패키지 리스트들을 확인할 수 있습니다.

![3.pip_list](http://drive.google.com/uc?export=view&id=1X1J3k7A1hcOjepAIsqFS-_PS98K2yh5b)