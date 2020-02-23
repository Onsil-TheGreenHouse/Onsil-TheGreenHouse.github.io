---
layout: post
title:  "[Django Advanced Tutorial] Ch1-2. App 등록"
date:   2017-10-14 01:50:00
description: 1-2. 블로그 앱 등록하기
categories:
- programming
- django
- web_programmig
banner_image: /programming/django/python-django-logo.jpg
comments: true
---

INSTALLED_APPS에 대하여

---

blog 앱은 [Django Tutorial]에서 만들었던

가상환경(python3.4, Django1.11.0)과 프로젝트(mysite)에 만들겠습니다.

가상환경은 python3 이기만 하면 큰 상관 없습니다.

먼저 blog앱을 만들어줍니다.

{% highlight bash %}
$ python manage.py startapp blog
{% endhighlight %}

<br>

그 다음 settings.py에 INSTALLED_APPS에

방금 생성한 blog앱을 추가시켜야합니다.

그냥 'blog' 라고 추가시켜도 됩니다.

하지만 더 정확하게는 'blog.apps.BlogConfig'라고 추가해야합니다.

실제로 방금만든 blog앱 폴더에 apps.py를 살펴보면

BlogConfig 클래스가 있습니다.

![1.img_config](http://drive.google.com/uc?export=view&id=1J40aALG2dc7RXjSWUthBXtTtep7113ZI)

<br>

이 BlogConfig는 앱의 메타 데이터를 설정하는 클래스입니다.

INSTALLED_APPS에 단순히 'blog'라고만 적으면,

장고 서버가 실행될 때, blog앱의 <u>__</u>init<u>__</u>.py에 가서

default_app_config가 정의되어 있는지 확인합니다.

기본적으론 안돼있습니다. 그러면 별도의 설정이 없다고 가정하고

이 BlogConfig 클래스가 아닌,

django.apps.AppConfig를 설정클래스로 사용합니다.

<br>

그럼 default_app_config를 설정하여 메타 데이터를 바꿔보겠습니다.

[Django tutorial]에서 만들었던 'books'앱을 건드려보겠습니다.

INSTALLED_APPS에서는 'books'라고만 적어놓습니다.

그리고, books/<u>__</u>init<u>__</u>.py에 다음 코드를 추가합니다.

{% highlight python %}
default_app_config = 'books.apps.BooksConfig'
{% endhighlight %}

그럼 아까 언급한대로 books/<u>__</u>init<u>__</u>.py 에 가서

default_app_config에 설정된 사항을 봅니다.

설정된대로, books/apps.py의 BookConfig 클래스를 설정 클래스로 사용합니다.

그럼 BookConfig 클래스에 verbose_name을 바꿔보겠습니다.

{% highlight python %}
from django.apps import AppConfig


class BooksConfig(AppConfig):
    name = 'books'
    # 밑의 코드만 추가
    verbose_name = 'books_custom_asdf'
{% endhighlight %}

이제 로컬서버를 켜고 admin페이지에 들어가봅니다.

![2.img_admin](http://drive.google.com/uc?export=view&id=1rtLeGQ--DVn3BIRaAe7Tv5-6XGyLye0_)

verbose_name이 바꾼대로 나오는 걸 확인할 수 있습니다.

Config 클래스에서는 name, label, verbose_name, path 등을 설정할 수 있습니다.

그 중, name은 어떤 앱에 이 설정을 적용할 것인가 설정하는 것이므로 필수사항입니다.

나머지 설정사항에 대해서는 [docs](https://docs.djangoproject.com/en/1.11/ref/applications/)에서 확인할 수 있습니다.

<br>

하지만 django docs에는 이런 글귀가 있습니다.

>it’s best to avoid using default_app_config and instead specify the app config class in INSTALLED_APPS as described next.

추천해주는 대로, <u>__</u>init<u>__</u>.py에서 default_app_config를 설정해주는 대신

INSTALLED_APPS에 app config class를 설정해줍니다.

즉, 'blog' 대신에 'blog.apps.BlogConfig'로... 이렇게..

{% highlight python %}
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'polls',
    'books',
    'blog.apps.BlogConfig',
]
{% endhighlight %}
