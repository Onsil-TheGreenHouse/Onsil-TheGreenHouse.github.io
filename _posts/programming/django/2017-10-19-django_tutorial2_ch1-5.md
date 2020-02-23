---
layout: post
title:  "[Django Advanced Tutorial] Ch1-5. load staticfiles"
date:   2017-10-19 01:50:00
description: 1-5. 템플릿 상속과 staticfiles를 통한 첫 페이지 작성
categories:
- programming
- django
- web_programmig
banner_image: /programming/django/python-django-logo.jpg
comments: true
---

template 상속과 staticfiles

---

이번 챕터에서는 템플릿 상속과 staticfiles를 이용하여

첫 페이지를 작성하도록 하겠습니다.

사실 [django tutorial]에서 템플릿 상속만을 이용해 간단한 첫페이지를 만들었었습니다.

이번엔 staticfiles 기능까지 사용하여 첫 페이지를 바꿔보겠습니다.

<br>

즉 이번 챕터에서 메인으로 설명하는건 **staticfiles**입니다.

나머지 html작성, css 등은 Django의 메인이 아니므로 코드만 적도록 하겠습니다.

<br>

이번에 만들 첫페이지는 index.html이고,

상속받을 부모템플릿은 base_project.html입니다.

먼저 프로젝트 urls.py에 첫페이지 url을 views에 연결시켜줍니다.

>mysite/urls.py
{% highlight python %}
from django.conf.urls import url, include
from django.contrib import admin
from mysite import views


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^polls/', include('polls.urls', namespace='polls')),
    url(r'^books/', include('books.urls', namespace='books')),
    url(r'^blog/', include('blog.urls', namespace='blog')),
    # 전에 만들었던 첫 페이지 url 주석화
    # url(r'^$', views.HomeView.as_view(), name='home'),
    url(r'^$', views.IndexView.as_view(), name='index_page'),
]
{% endhighlight %}

<br>

이제 views.py에 IndexView 클래스뷰를 작성해줍니다.
>mysite/views.py
{% highlight python %}
from django.views.generic.base import TemplateView

class IndexView(TemplateView):
    template_name = 'index.html'
{% endhighlight %}

<br>

그럼 'index.html'을 작성하기 전에 부모템플릿인

'base_project.html'을 만들겠습니다.

>mysite/templates/base_project.html
{% highlight jinja %}
{% raw %}
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>{% block title %}Django Web Programming{% endblock %}</title>
    {% load staticfiles %}
    <link rel="stylesheet" type="text/css" href="{% static 'css/base_project.css' %}" />
    <link rel="stylesheet" type="text/css" href="{% block extrastyle %}{% endblock %}" />
</head>

<body>
    <div id="header">
        <h2 class="maintitle">Easy&amp;Fast Django Web Programming</h2>
        <h4 class="welcome">
            Welcome, <a href="#">onsil</a> /
            <a href="#">Change Password</a> /
            <a href="#">Logout</a>
        </h4>
    </div>

    <div id="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Book</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Photo</a></li>

        <li><a href="#">Add&bigtriangledown;</a>
            <ul>
                <li><a href="#">Book</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Photo</a></li>
            </ul>
        </li>

        <li><a href="#">Change&bigtriangledown;</a>
            <ul>
                <li><a href="#">Book</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Photo</a></li>
            </ul>
        </li>

        <li><a href="#">Archive</a></li>
        <li><a href="#">Search</a></li>
        <li><a href="#">Admin</a></li>
    </div>

    {% block content %}{% endblock %}
    {% block footer %}{% endblock %}

</body>
</html>
{% endraw %}
{% endhighlight %}

부모템플릿의 상태를 보기위해 'index.html'을 만들어서 상속을 받고,

로컬서버로 들어가서 화면을 확인하겠습니다.

>mysite/templates/index.html
{% highlight jinja %}
{% raw %}
{% extends 'base_project.html' %}
{% endraw %}
{% endhighlight %}

이제 로컬서버를 켜고 localhost:8000에 접속하면

![1.raw_base_project](http://drive.google.com/uc?export=view&id=1CkcjLJ3-MPtEvYCufqeYPKz4cdlxbvTt)

아무 css가 적용되지 않은 상태입니다.

'base_project.html'에는 'css/base_project.css'를 로드한다고 되어있습니다.

그럼 base_project.css를 어디다 만들어야 로드할 수 있을까요?

<br>

{% raw %}
css를 로드하는데 {% static %}이 쓰인 걸 볼 수 있습니다.

그리고 이 static 문법을 사용하려면 {% load staticfiles %}를 먼저 작성해야합니다.

그리고 staticfiles에 대한 설정은 settings.py에서 합니다.

settings.py에 다음과 같이 작성합니다.
{% endraw %}

>mysite/mysite/settings.py
{% highlight python %}
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.11/howto/static-files/

STATIC_URL = '/static/'

# 위의 부분은 원래 있는 부분이고, 밑의 한줄만 추가하면 됩니다.
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]
{% endhighlight %}

settings.py에 써진대로 CSS, JavaScript, Images 등의 파일은 Static files라 부릅니다.

Django에서 static 파일을 찾는 방식은 템플릿을 찾는 방식과 유사합니다.

즉 STATICFILES_DIRS의 경로를 먼저 검색하고,

그 뒤에 STATIC_URL에 써진대로 각 앱의 static폴더를 뒤집니다.

{% raw %}
즉, 'base_project.html'에 {% static 'css/base_project.css' %}는

제일 먼저 뒤지는 장소가 '프로젝트폴더/static/css/base_project.css'입니다.

여기 기준으론 'mysite/static/css/base_project.css'가 되겠죠
{% endraw %}

<br>

그럼 이제 static과 css폴더를 만들고 그 안에 base_project.css를 작성하겠습니다.
>mysite/static/css/base_project.css
{% highlight css %}
body {
    font-family: 'Lucida Grande', Arial, sans-serif;
    font-size: 12px;
}

div#header {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 30px;
    width: 100%;
    display: table;
    background: orange;
}

div#menu {
    position: absolute;
    top: 30px;
    left: 0px;
    height: 20px;
    width: 100%;
    display: table;
    table-layout: fixed;
    border-spacing: 40px 0px;
    background: #ffa;
    font-size: 8px;
}

div#content {
    position: absolute;
    top: 70px;
    left: 50px;
    right: 50px;
}

div#footer {
    position: absolute;
    bottom: 20px;
    left: 50px;
    right: 50px;
    height: 30px;
    border-top: 1px solid #ccc;
}

.maintitle {
    display: table-cell;
    vertical-align: middle;
    padding-left: 20px;
    color: #ffc;
    font-weight: bold;
    font-size: 16px;
}

.welcome {
    display: table-cell;
    vertical-align: middle;
    text-align: right;
    padding-right: 20px;
    color: #ffc;
    font-weight: normal;
    font-size: 12px;
}

.welcome a:link, .welcome a:visited {
    color: white;
}

div#menu a:link, div #menu a:visited {
    color: #36c;
}

div#menu > li {
    display: table-cell;
    vertical-align: middle;
    border: 2px solid #bbb;
    border-radius: 25px;
    text-align: center;
    font-weight: bold;
}

div#menu li ul {
    display: none;
    position: absolute;
    margin: 0;
    padding: 10px 10px 5px 10px;
    list-style: none;
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    background: white;
    z-index: 1;
}

div#menu li:hover ul{
    display: block;
}

a:link, a:visited {
    color: #369;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

table {
    border-collapse: collapse;
}

td, th {
    line-height: 18px;
    border-bottom: 1px solid #eee;
}

{% endhighlight %}

이제 다시 index.html을 살펴보면 css가 적용된 걸 볼 수 있습니다.

![2.base_project_with_css](http://drive.google.com/uc?export=view&id=1XGILQQw8bBSn-ql6t2Vjg9gC9QqciqC7)

<br>

이제 index.html을 작성해보도록 하겠습니다.

일단 간단하게 다음과 같이 코드를 작성하고 index.html을 보면

content와 footer부분을 확인할 수 있습니다.

>mysite/templates/index.html
{% highlight jinja %}
{% raw %}
{% extends 'base_project.html' %}

{% block title %}index.html{% endblock %}

{% block content %}
    <div id="content">
        This is CONTENT area.
    </div>
{% endblock %}

{% block footer %}
    <div id="footer">
        This is FOOTER area.
    </div>
{% endblock %}
{% endraw %}
{% endhighlight %}

![3.raw_index](http://drive.google.com/uc?export=view&id=1wjI468sVKcDajA1dJcEky6ENuswYRPY9)

확인 후, index.html을 본격적으로 작성하겠습니다.

{% highlight jinja %}
{% raw %}
{% extends 'base_project.html' %}
{% load staticfiles %}

{% block title %}index.html{% endblock %}
{% block extrastyle %}
    {% static 'css/index.css' %}
{% endblock %}

{% block content %}
    <div id="content_home">
        <div id="homeimg">
            <a href="/">
                <img src="{% static 'img/cute_owl.jpg' %}" style="height: 256px;"/>
            </a>
            <h4 style="margin: 0;">This is Django Powered web site.</h4>
        </div>

        <hr style="margin: 5px 0px;">

        <h2>Select Application</h2>
        <table id="applist">
            <tr>
                <td>
                    <b><i><a href="#">Book</a></i></b>
                </td>
                <td>
                    You can write your own post and share to others
                </td>
                <td class="Edit">
                    <i><a href="#">Add</a></i>
                </td>
                <td class="Edit">
                    <i><a href="#">Change</a></i>
                </td>
            </tr>

            <tr>
                <td>
                    <b><i><a href="#">Blog</a></i></b>
                </td>
                <td>
                    You can write your own post and share to others
                </td>
                <td class="Edit">
                    <i><a href="#">Add</a></i>
                </td>
                <td class="Edit">
                    <i><a href="#">Change</a></i>
                </td>
            </tr>

            <tr>
                <td>
                    <b><i><a href="#">Photo</a></i></b>
                </td>
                <td>
                    You can write your own post and share to others
                </td>
                <td class="Edit">
                    <i><a href="#">Add</a></i>
                </td>
                <td class="Edit">
                    <i><a href="#">Change</a></i>
                </td>
            </tr>
        </table>
    </div>
{% endblock content %}

{% block footer %}
    <div id="footer">
        &copy; onsil
    </div>
{% endblock footer %}
{% endraw %}
{% endhighlight %}

일단 이 상태의 화면을 확인하면

![4.index_without_css](http://drive.google.com/uc?export=view&id=1geHyD5VgYkGInHK_1PjU_tv_sb05WSrj)

'index.html'도 static으로 css와 이미지를 로드하는걸 볼 수 있습니다.

이미지는 아무 이미지나 넣으시면 되고,

(mysite/static/img 디렉토리를 만들어서 이름 맞춰서 이미지를 넣으면 되겠죠)

'index.css'는 지금 작성하겠습니다.

>mysite/static/css/index.css
{% highlight css %}
div#content_home {
    position: absolute;
    top: 80px;
    left: 110px;
    right: 110px;
}

div#homeimg {
    background: #ddd;
    padding: 5px 0px 1px 0px;
    text-align: center;
}
{% endhighlight %}

이제 다시 로컬서버를 켜고 localhost:8000에 접속해

'index.html'을 살펴보면 다음 화면을 볼 수 있습니다.

![5.img_index_with_css](http://drive.google.com/uc?export=view&id=1uc5Pp4opO-Z79h4_l5Ogs00Oz2kE7LPJ)

<br>
blog와 관련된 다른 템플릿(blog/templates/blog에 있는)들도 base_project.html을 상속받으면 됩니다.

{% highlight jinja %}
{% raw %}
{% extends 'base_project.html' %}
{% block title %}blahblah{% endblock %}

{% block content %}
기존코드
{% endblock %}
{% endraw %}
{% endhighlight %}

이런 방식입니다. 예를들어 post_all.html을 보면

>mysite/blog/templates/blog/post_all.html
{% highlight jinja %}
{% raw %}
{% extends 'base_project.html' %}
{% block title %}post_all.html{% endblock %}

{% block content %}

<h1>Post List</h1>
{% for post in posts %}
    <h2><a href="{{ post.get_absolute_url }}">{{ post.title }}</a></h2>
    {{ post.modify_date|date:'N d, Y' }}
    <p>{{ post.description }}</p>
{% endfor %}

<br/>

<div>
    <span>
        {% if page_obj.has_previous %}
            <a href="?page={{ page_obj.previous_page_number }}">PreviousPage</a>
        {% endif %}

        Page {{ page_obj.number }} of {{ page_obj.paginator.num_pages }}

        {% if page_obj.has_next %}
            <a href="?page={{ page_obj.next_page_number }}">NextPage</a>
        {% endif %}
    </span>
</div>

{% endblock content %}
{% endraw %}
{% endhighlight %}

가 되겠습니다.

<br><br>


일단 첫페이지는 아무런 기능 없이 화면만 구현한 것입니다.

차차 기능 구현하겠습니다.
