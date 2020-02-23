---
layout: post
title:  "[Django Advanced Tutorial] Ch2-2. django-tagging"
date:   2017-10-22 13:50:00
description: 2-2. django-tagging
categories:
- programming
- django
- web_programmig
banner_image: /programming/django/python-django-logo.jpg
comments: true
---

장고의 태그달기 기능

---

이번에는 django-taggin 패키지를 활용하여

기존의 post테이블에 태그기능을 추가하도록 하겠습니다.

<br>

## 기획하기

<br>

![img_post_detail](http://drive.google.com/uc?export=view&id=1lbFYeN-a_9GwOani-vLMoFhera0NhRvL)

기존의 포스트에 태그를 달아, 화면밑에 나오게 합니다. 각각의 태그는 링크가 달려있습니다.

예를 들어, strange태그를 클릭하면,

![img_post_tag_list](http://drive.google.com/uc?export=view&id=1aLQBWpKd4fm_BAcCCWBfbEZ7r1Eu31PF)

strange태그를 달고있는 post 객체들이 리스트됩니다. (tagging_post_list.html)

<br>

만약 TagCloud를 클릭하면,

![img_tag_cloud](http://drive.google.com/uc?export=view&id=1dtXSZxEwkfbpqnVFDGceEvifR3jL3c_O)

post 객체들이 달고 있는 모든 태그들이 나오고,

그 태그가 태그된 횟수도 나오게 됩니다.(tagging_cloud.html)

두개의 템플릿을 새로 만들어야합니다.

<br>

## django-tagging 설치하기

<br>

{% highlight bash %}
$ pip install django-tagging
{% endhighlight %}

설치 후, settings.py에서 installed_apps에

django-tagging을 추가해줍니다.

[django-tagging docs](https://django-tagging.readthedocs.io/en/develop/#using-django-tagging-in-your-applications)에 보면 그냥 'tagging'만 추가하면 된다고 나와있습니다.

그런데 저번에 살펴봤던대로, Django docs에서는 앱명보다는 설정 클라스를 적는 걸 추천했었습니다.

가상환경 폴더에 django-tagging의 apps.py를 살펴보면 TaggingConfig라는 설정클라스가 정의되어 있습니다.

![1.img_django-tagging_apps.py](http://drive.google.com/uc?export=view&id=1TBlYsezfw6KQFbnzyvzLXfX7e9FFigFI)

그래서 서는 INSTALLED_APPS에 'tagging.apps.TaggingConfig'라고 적겠습니다.

<br>

## Post 테이블에 tag필드 추가하기

<br>

기존의 테이블에 tag필드를 추가하겠습니다.

>mysite/blog/models.py
{% highlight python %}
from django.db import models
from django.core.urlresolvers import reverse
# 밑의 코드 한줄 추가
from tagging.fields import TagField

# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=100, verbose_name='TITLE')
    slug = models.SlugField(unique=True, allow_unicode=True, help_text='one word for title alias')
    description = models.CharField(max_length=100, blank=True, help_text='simple description text',
                                   verbose_name='DESCRIPTION')
    content = models.TextField(verbose_name='CONTENT')
    create_date = models.DateTimeField(auto_now_add=True, verbose_name='Create Date')
    modify_date = models.DateTimeField(auto_now=True, verbose_name='Modify Date')
    # 밑의 코드 한줄 추가
    tag = TagField()

    class Meta:
        verbose_name = 'post'
        verbose_name_plural = 'posts'
        db_table = 'my_post'
        ordering = ('-modify_date',)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('blog:post_detail', args=(self.slug,))

    def get_previous_post(self):
        return self.get_previous_by_modify_date()

    def get_next_post(self):
        return self.get_next_by_modify_date()

{% endhighlight %}

tag 라는 필드 하나 추가한 것 밖에 없습니다.

그리고 테이블이 바꼇으니 migrations을 해줍니다.

{% highlight bash %}
$ python manage.py makemigrations
$ python manage.py migrate
{% endhighlight %}

그리고 admin페이지에 들어가보면 post 테이블에 tag필드가 추가된 것 이외에

Tagging앱과 그 안에 속안 두 테이블이 새로 생성된 것을 볼 수 있습니다.

![img_admin_tagging](http://drive.google.com/uc?export=view&id=1q4JlsvbytlErv_I8o1_tgDbeACpCtrVm)

이는 django-tagging 자체에 테이블이 2개 정의돼 있기 때문입니다.

![7.img_tagging_model](http://drive.google.com/uc?export=view&id=19Uoit4xGNe2q0l1Kd4Osoo2SCLAlgWq6)

지금은 이 테이블을 따로 손댈 필요는 아직 없습니다.

post에 가서 기존의 post객체에 태그값을 적어줍니다. 태그는 콤마(,)로 구분합니다.

![img_add_comma](http://drive.google.com/uc?export=view&id=1tU3f_j6eC1MeaK47m9lW0F8WsIe7J-yE)

<br>

## 템플릿 추가

<br>

### urls 추가

>mysite/blog/urls.py
{% highlight python %}
from django.conf.urls import url
from blog.views import *

urlpatterns = [
    # Example: /tag/
    url(r'^tag/$', TagTV.as_view(), name='tag_cloud'),

    # Example: /tag/tagname/
    url(r'^tag/(?P<tag>[^/]+(?u))/$', PostTOL.as_view(), name='tagged_object_list'),
]

{% endhighlight %}

[^/]는 /은 문자로 받지않겠다는 의미입니다.

(?u)를 쓰면 표현식을 유니코드로 인식하여, 한글도 인식가능하게 됩니다.

<br>

### views 추가
>mysite/blog/views.py
{% highlight python %}
from django.views.generic import ListView, DetailView, TemplateView
from tagging.models import Tag, TaggedItem
from tagging.views import TaggedObjectList


class TagTV(TemplateView):
    template_name = 'tagging/tagging_cloud.html'


class PostTOL(TaggedObjectList):
    model = Post
    template_name = 'tagging/tagging_post_list.html'

{% endhighlight %}

추가할 부분만 적었습니다.

TagTV는 모든 태그들 리스트만 보여주면 되므로, TemplateView를 상속받았습니다.

PostTOL은 TaggedObjectList를 상속받는데, 이름그대로 태그된 객체리스트를 템플릿에 넘깁니다.

URL에서 tag를 받고, 클래스뷰에서 model 값을 받아서

해당 테이블의 객체 중에서 tag값을 가지고 있는 리스트를 템플릿에 넘깁니다.

<br>

### 템플릿 추가

먼저 포스트 내용이 나오는 post_detail.html 부분에 태그값을 추가해야합니다.

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

{% endblock %}
{% endraw %}
{% endhighlight %}

가장 밑에 div부분이 태그를 추가한 부분입니다.

{% raw %}
{% load tagging_tags %}
- 먼저 tagging 패키지에 커스텀태그를 사용하기위해 tagging_tags 모듈을 로딩합니다.

{% tags_for_object object as tags %}
- detailview와 연결된 템플릿이기 때문에 post객체를 object로 접근합니다.
- object의 tag를 tags_for_object 커스텀태그로 접근하여 tags로 저장합니다.

{% for tag in tags %}
- tags의 모든 태그들을 출력하고 있습니다.

{% endraw %}

<br>

이번엔 모든 태그가 리스트되는 tagging_cloud.html을 작성하도록 하겠습니다.

django-tagging을 이용하는 앱이 blog이므로 blog/templates/tagging에 저장하도록 하겠습니다.

>mysite/blog/templates/tagging/tagging_cloud.html
{% highlight jinja %}
{% raw %}
{% extends 'base_project.html' %}

{% block title %}
    tagging_cloud.html
{% endblock %}

{% load staticfiles %}
{% block extrastyle %}{% static 'tagging/tag.css' %}{% endblock %}

{% block content %}
<div id="content">
    <h1>Blog Tag Cloud</h1>

    <div class="tag-cloud">
        {% load tagging_tags %}
        {% tag_cloud_for_model blog.Post as tags with steps=6 min_count=1 distribution=log %}
        {% for tag in tags %}
        <span class="tag-{{tag.font_size}}">
            <a href="{% url 'blog:tagged_object_list' tag.name %}">{{ tag.name }} ({{tag.font_size}})</a>
        </span>
        {% endfor %}
    </div>
</div>
{% endblock content %}
{% endraw %}
{% endhighlight %}

{% raw %}
{% load tagging_tags %}
- 이번에도 커스텀태그를 사용하기 위해 tagging_tags 모듈을 로딩하는 걸 볼 수 있습니다.

{% tags_cloud_for_model blog.Post as tags steps=6 min_count=1 distribution=log %}
- blog.Post: 태그를 추출할 대상은 blog앱의 Post모델입니다.
- steps=6: 태그의 폰트 크기를 6단계로 설정합니다.
- min_count=1: 태그가 출력되기 위해서는 최소 한번은 사용되야 합니다.
- distribution=log: 태그 폰트 크기의 분포는 로그분포를 따릅니다.

{% for tag in tags %}
- tags의 모든 태그들을 출력하고 있습니다.

{% static 'tagging/tag.css' %}
- blog/static/tagging에 tag.css를 만들 예정입니다.

{% endraw %}

<br>

이번엔 특정 태그를 클릭했을 때, 그 태그를 포함한 post가 리스트되는

tagging_post_list.html을 작성하도록 하겠습니다.

>mysite/blog/templates/tagging/tagging_post_list.html
{% highlight jinja %}
{% raw %}
{% extends 'base_project.html' %}

{% block title %}tagging_post_list{% endblock %}

{% block content %}
<div id="content">
    <h1>Posts for tag - {{ tag.name }}</h1>

    {% for post in object_list %}
        <h2><a href="{{ post.get_absolute_url }}">{{ post.title }}</a></h2>
        {{ post.modify_date|date:'N d, Y' }}
        <p>{{ post.description }}</p>
    {% endfor %}
</div>
{% endblock content %}
{% endraw %}
{% endhighlight %}

tag는 url에서 받은 값이고, object_list는 PostTOL 클래스뷰에서 넘겨받은 값입니다.

<br>

마지막으로 tagging_cloud.html에서 참조하는 tag.css파일을 생성하겠습니다.

static 태그로 접근하기 때문에 settings.py에 설정한대로

STATICFILES_DIRS를 먼저 뒤지고, 각 앱의 static폴더를 뒤집니다.

>mysite/blog/static/tagging/tag.css
{% highlight css %}
.tag-cloud {
    width: 30%;
    margin-left: 30px;
    text-align: center;
    padding: 5px;
    border: 1px solid orange;
    background-color: #ffc;
}

.tag-1 {
    font-size: 12px;
}

.tag-2 {
    font-size: 14px;
}

.tag-3 {
    font-size: 16px;
}

.tag-4 {
    font-size: 18px;
}

.tag-5 {
    font-size: 20px;
}

.tag-6 {
    font-size: 24px;
}
{% endhighlight %}

<br>

이제 로컬 서버를 켜고 localhost:8000/blog

에 들어가서 결과를 확인해보면 처음에 기획했던 대로 결과물을 볼 수 있습니다.

<br><br>

## 덧붙이는 말

static 파일인 css를 못읽는 경우가 있습니다.

(바로 제 경우...STATICFILES_DIRS만 뒤지고 해당 css를 못찾았다고 에러가 나버리는...)

한참을 검색해도 원인을 못찾았었는데, 그냥 로컬서버를 껏다키니

바로 앱의 static폴더도 잘 뒤져서 해당 css가 적용됬습니다.

역시 껏다 키는게 최고...