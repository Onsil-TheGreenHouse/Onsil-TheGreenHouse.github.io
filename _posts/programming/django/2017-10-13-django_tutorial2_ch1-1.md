---
layout: post
title:  "[Django Advanced Tutorial] Ch1-1. 기획"
date:   2017-10-13 01:50:00
description: 1-1. 블로그 앱 기획
categories:
- programming
- django
- web_programmig
banner_image: /programming/django/python-django-logo.jpg
comments: true
---

기획하기

---

새로운 blog라는 앱을 만들어보면서

Django Advanced Tutorial을 시작하도록 하겠습니다.

Django Tutorial의 내용은 모두 알고있는 것으로 가정하겠습니다.

<br>

그럼 기획부터 시작하겠습니다.

화면, url, template 기획입니다.

<br>

![1.UI-1](http://drive.google.com/uc?export=view&id=1Yzj2JpEU6o5kbKzmxFlvJd2jN9gDkdXG)

왼쪽은 첫화면입니다.

Post가 리스트되고, 페이지네이션 기능을 넣을 것입니다.

<br>

Post 타이틀을 클릭하면 해당 포스트의 내용이 뜹니다.

앞, 뒤 포스트로 이동할 수 있는 링크도 달아놉니다.

<br>

![2.UI-2](http://drive.google.com/uc?export=view&id=1FJSG_YviDR1KVlO1EVBZV58olvDcTUjm)

주소창에 '/blog/archive/'를 입력하면

현재까지 작성한 포스트들이 리스트됩니다.

포스트들을 연도별로 나눌 링크도 달아놉니다.

여기서 Year-2016 을 클릭하면, 밑의 화면으로 이동합니다.

![3.UI-3](http://drive.google.com/uc?export=view&id=14vgak24omAV2utZ3b42vaSp8zZ9mIZS5)

2016년도에 작성한 포스트가 리스트됩니다.

이 포스트들을 달별로 나눌 링크도 있습니다.

여기서 October 를 클릭하면 아래 화면이 뜹니다.

![4.UI-4](http://drive.google.com/uc?export=view&id=1jZWR01uVqjkfnJSfZxRVIEPy0liq2DkE)

2016년도 10월의 포스트가 리스트됩니다.

<br>

![5.UI-5](http://drive.google.com/uc?export=view&id=1uidj-1E11uz6TDP_9_R9njeTIKu4U0xW)

주소창에 구체적인 날짜까지 입력하면,

해당 날짜의 포스트가 리스트됩니다.

<br>

![6.UI-6](http://drive.google.com/uc?export=view&id=1RvYOwdlTHO8IboQfHbLMtgHEerocO3ZH)

today를 입력하면, 오늘 작성한 포스트가 리스트됩니다.