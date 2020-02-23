---
layout: post
title:  "[Django Advanced Tutorial] Ch2-3. django-disqus"
date:   2017-10-22 13:50:00
description: 2-3. django-disqus
categories:
- programming
- django
- web_programmig
banner_image: /programming/django/python-django-logo.jpg
comments: true
---

장고의 댓글달기 기능

---

이번에는 포스트 화면에 댓글 기능을 추가하도록 하겠습니다.

![img_disqus_first](http://drive.google.com/uc?export=view&id=1K8PrintpSEr_O-dFM_cRuhhb7UNKBcKk)

이번에 필요한 패키지는 django-disqus 입니다.

원래 disqus는 댓글기능을 제공하는 API인데, 이를 django와 연동시킨 것입니다.

<br>

## disqus 가입 후, site생성하기

<br>

django-disqus는 댓글을 로컬에 저장하는게 아니라 disqus서버에 저장을 합니다.

그래서 disqus에 계정을 만든 후, 자신의 웹페이지에서 사용할 disqus shortname을 받아야합니다.

disqus에 가입 후, 로그인을 하면 다음 화면이 뜹니다.

![disqus_main](http://drive.google.com/uc?export=view&id=1_5COctXtroT1uko9EjRALlXGMJjoOweM)

여기서 우측상단에 admin에 들어가 다음 그림과 같이 새 site를 만들 수 있는 버튼(+ New)이 있습니다.

![disqus_new](http://drive.google.com/uc?export=view&id=1SoTholI-Mlni2ocs-GcpiO8Lp_m6Ik2E)

그 버튼을 눌러서 새 site를 만들어줍니다.

![disqus_make_new](http://drive.google.com/uc?export=view&id=1LGwdT_3k8j2HBF5kNT7I_gS8AGgcOySy)

website name쪽에 보면 'unique disqus url' 부분을 볼 수 있습니다.

settings.py에 적을 사항입니다.(여기선 django-tutorial1)

만든 후, 뭐 고르라고 나오는데 무시하고 다시 메인페이지가서 admin에 들어간 후, Edit Settings에 들어가면

![disqus_edit_settings](http://drive.google.com/uc?export=view&id=11nOrk8TsDg2Ka-5yLETU5_abTqdVY9bm)

다음 화면과 같이 해당 site의 정보가 나오는데 여기서 아까 말한

settings.py에 적을 shortname을 다시 확인할 수 있습니다.

![disqus_check_shortname](http://drive.google.com/uc?export=view&id=1F4AbG2m8VVwHKvNUNUh41EBnAsXByNeE)

<br>

## django-disqus 설치하기

<br>

{% highlight bash %}
$ pip install django-disqus
{% endhighlight %}

가상환경에서 pip를 이용해 django-disqus를 설치합니다.

그 후, INSTALLED_APPS에 추가를 해야하는데요

django-disqus는 apps.py가 없으므로, [docs](https://django-disqus.readthedocs.io/en/latest/installation.html)에 나온대로 'disqus'만 추가해줍니다.

<br>

그리고, 여기선 docs와 다른 방법으로 세팅을 하겠습니다.

disqus에서는 각 사이트를 구별하기 위해 API_KEY와 short_name을 적으라 했지만,

여기서는 django의 sites 프레임워크를 사용하겠습니다.

INSTALLED_APPS에 'django.contrib.sites'를 추가합니다.

그리고 SITE_ID값과 DISQUS_WEBSITE_SHORTNAME을 적어줍니다.

DISQUS_WEBSITE_SHORTNAME은 아까 disqus 사이트에서 확인했던 shortname입니다.

SITE_ID는 임의값을 적으면 되지만 중복되면 안됩니다.

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
    'tests.apps.TestsConfig',
    'tagging.apps.TaggingConfig',
    'disqus',
    'django.contrib.sites',
]

DISQUS_WEBSITE_SHORTNAME = 'django-tutorial1'
SITE_ID = 1
{% endhighlight %}

그리고, makemigraions와 migrate를 진행해야합니다.

모델을 바꾼게 없는것 같지만, 새로 추가한 'django.contrib.sites'를 보면

내장 테이블이 존재합니다.

결국 테이블이 새로 생성되는 것이니 마이그레이션이 필요합니다.

<br>

## 템플릿에 댓글입력 기능 구현하기

<br>

댓글입력 기능을 구현할 템플릿에 들어가 다음을 입력해줍니다.

>mysite/blog/templates/blog/post_detail.html
{% highlight jinja %}
{% raw %}
{% extends 'base_project.html' %}
{% block title %}post_detail.html{% endblock %}

{% block content %}

<h2>{{ object.title }}</h2>

<p class="other_posts">
    {% if object.get_previous_by_modify_date %}
        <a href="{{ object.get_previous_post.get_absolute_url }}" title="View previous post">&laquo;-- {{ object.get_previous_post }}</a>
    {% endif %}
    &nbsp;&nbsp;
    {% if object.get_next_by_modify_date %}
        <a href="{{ object.get_next_post.get_absolute_url }}" title="View next post">{{ object.get_next_post }} --&raquo;</a>
    {% endif %}
</p>

<p class="date">
    <!--example: 12 July 2015-->
    {{ object.modify_date|date:'j F Y' }}
</p>

<div class="body">
    <!--linebreaks: \n(newline) 인식-->
    {{ object.content|linebreaks }}
</div>

<div>
    <b>TAGS: </b>
    {% load tagging_tags %}
    {% tags_for_object object as tags %}
    {% for tag in tags %}
        <a href="{% url 'blog:tagged_object_list' tag.name %}">{{ tag.name }}</a>
    {% endfor %}
    <a href="{% url 'blog:tag_cloud' %}"><i>[ TagCloud ]</i></a>
</div>

<!--여기만 추가-->
<div>
    {% load disqus_tags %}
    {% disqus_show_comments %}
</div>

{% endblock %}
{% endraw %}
{% endhighlight %}

제일 밑에 마지막 div태그 부분만 추가한 것입니다.

<br>

이제 로컬서버에 들어가서 제대로 댓글기능이 구현이 됬는지 확인해봅시다!

![img_disqus_complete](http://drive.google.com/uc?export=view&id=1UdErb4D3Cyceof1s5eu8uUOoOkIkQjBO)
