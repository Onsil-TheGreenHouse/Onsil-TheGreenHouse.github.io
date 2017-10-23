---
layout: post
title:  "[Django Advanced Tutorial] Ch2-4. Q objects를 이용하여 검색기능 추가하기"
date:   2017-10-24 00:30:00
description: 2-4. Q objects
categories:
- programming
- django
- web_programmig
banner_image: /programming/django/python-django-logo.jpg
comments: true
---

장고의 Q 오브젝트

---

Q는 복잡한 쿼리 계산을 할 떄 쓰이는 오브젝트 입니다.

이번에는 Q를 이용하여 Post테이블에서 특정 단어를 포함하는 객체를 뽑아보겠습니다.

![img_search_bar](https://lh3.googleusercontent.com/EsAfIc4VkPqu6YzOcZKdP6YfqauE2qgmtVg_aY9vZlX-O4avr4MoK8W5e4S8ZfyXQbQJB0_O31nQX8uzGI3mHbOePY36Y4boMjKRzId4cqvafJkVBXX_pM7Dp-3tvDTyTLdMYP9IqbwYEs1u8QDOUrDgDmttXVvIkX2TIGGAWEzn4Vdc7PkwAmjdW0tAiDKCi3IQxGouY268dbv0eYw0uNpO530p8I3UgZM9sVQDhFVpQP1jSWiPYo2UbjB9tJb636BPTYWEGFOIokcH0ED2xlLJzd9lhvd_sCX8gAeQN6g8zo7qjhKzcOnTdh4Rcan32JcZFcYYo4c9JAjQr0s2efRydgTwNDUGqLhYOr7X_H0yeKvO8A2Gqyyl6Sk3KMX5vAS08sd-MnZo52fDHTSk-t_Rx-ez_-2vEHM4_FZqaKQ2a6sSF1fFeQJz0SyUJqMqvMq7nyNkdel2OGm0Rw5kTZLgCLzSkQlo5aqvMIlHGtUmgqJfmePGHgrZePWSW0Wt5hsyJrIgJ90letMraaYVF0yI4EDXjVphE3njTRSDsR_-wJN5mpf-C0ZcP2H2q6uGv9rN_3Zkaa5Gz89Lso9C8mWzc58C10CLEl-SglnbNg=w2042-h1266-no)

상단메뉴에서 search를 누르면 검색바가 뜨고,

단어를 입력하고 Search버튼을 누르면 밑에 결과가 뜨는 흐름입니다.

<br>

먼저 검색할 단어를 입력할 폼을 작성하겠습니다.

>mysite/blog/forms.py
{% highlight python %}
from django import forms


class PostSearchForm(forms.Form):
    search_word = forms.CharField(label='Search Word')

{% endhighlight %}

<br>

여기서 작성한 폼을 이용하여 클래스 뷰를 작성하겠습니다.

>mysite/blog/views.py
{% highlight python %}
from django.shortcuts import render
from blog.models import Post

from django.views.generic.edit import FormView
from blog.forms import PostSearchForm
from django.db.models import Q


class SearchFormView(FormView):
    # form_class를 forms.py에서 정의했던 PostSearchForm으로 정의
    form_class = PostSearchForm
    template_name = 'blog/post_search.html'

    # 제출된 값이 유효성검사를 통과하면 form_valid 메소드 실행
    # 여기선 제출된 search_word가 PostSearchForm에서 정의한대로 Char인지 검사
    def form_valid(self, form):
        # 제출된 값은 POST로 전달됨
        # 사용자가 입력한 검색 단어를 변수에 저장
        search_word = self.request.POST['search_word']
        # Post의 객체중 제목이나 설명이나 내용에 해당 단어가 대소문자관계없이(icontains) 속해있는 객체를 필터링
        # Q객체는 |(or)과 &(and) 두개의 operator와 사용가능
        post_list = Post.objects.filter(Q(title__icontains=search_word) | Q(description__icontains=search_word) |
                                        Q(content__icontains=search_word))

        context = {}
        # context에 form객체, 즉 PostSearchForm객체 저장
        context['form'] = form
        context['search_term'] = search_word
        context['object_list'] = post_list

        return render(self.request, self.template_name, context)

{% endhighlight %}

<br>

이번엔 이 클래스뷰와 연결될 url을 정의하겠습니다.

>mysite/blog/urls.py
{% highlight python %}
from django.conf.urls import url
from blog.views import *

urlpatterns = [
    # Example: /search/
    url(r'^search/$', SearchFormView.as_view(), name='search'),
]

{% endhighlight %}

<br>

이번엔 템플릿을 코딩하겠습니다.

먼저 부모템플릿에서 urls.py에서 설정한 url을 연결합니다.

Search부분 코드만 변경했습니다.

>mysite/templates/base_project.html
{% highlight html %}
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
        <!--여기만 새로 설정!-->
        <li><a href="{% url 'blog:search' %}">Search</a></li>
        <li><a href="#">Admin</a></li>
    </div>

    {% block content %}{% endblock %}
    {% block footer %}{% endblock %}

</body>
</html>
{% endraw %}
{% endhighlight %}

<br>

이제 클래스뷰에서 template_name으로 설정한 'blog/post_search.html'을 작성하겠습니다.

>mysite/blog/templates/blog/post_search.html
{% highlight jinja %}
{% raw %}
{% extends 'base_project.html' %}

{% block title %}post_search.html{% endblock %}

{% block content %}
<div id="content">
    <h1>Blog Search</h1>

    <form method="post">
        {% csrf_token %}
        {{ form.as_table }}
        <input type="submit" value="Search">
    </form>

    <br><br>

    {% if object_list %}
        {% for post in object_list %}
            <h2><a href="{{post.get_absolute_url}}">{{ post.title }}</a></h2>
            {{ post.modify_date|date:'N d, Y' }}
            <p>{{ post.description }}</p>
        {% endfor %}
    {% elif search_term %}
        <b><i>Search Word({{ search_term }}) Not Found !</i></b>
    {% endif %}
</div>


{% endblock content %}
{% endraw %}
{% endhighlight %}

과정을 설명하면, localhost:8000/search/ 로 접속하면

urls.py를 통해 views.py의 SearchFormView로 갑니다.

SearchFormView에선 form_class와 template_name을 바탕으로 get 메소드가 실행됩니다.

(formView가 상속받는 BaseFormView가 있고,

BaseFormView가 상속받는 ProcessFormView에 get 메소드가 있습니다.)

그럼 템플릿에 form_class에 정의한대로 입력할 칸이 나옵니다.

<br>

FormView를 사용하는 경우, form객체에 action='form넘겨줄 url'을 안적어도

알아서 다시 해당 formView로 form값이 post방식으로 넘어갑니다.

{% raw %}
form태그에서 {{form.as_table}}을 채우고 submit버튼을 누르면

사용자가 입력된 값이 다시 SearchFormView로 넘어갑니다.

유효성검사를 마친 후, form_valid 메소드가 실행됩니다.

<br>

self.request.POST['search_word']로 입력된 값을 받는데,

'search_word'는 PostSearchForm에서 정의했던 필드 이름입니다.

입력된 값을 바탕으로, Q를 이용하여 쿼리작업을 마친 후, 결과물을

context변수에 넣고 다시 이 템플릿으로 값을 넘깁니다.

<br>

템플릿은 넘겨받은 값을 바탕으로 {% if object_list %}이하 코드를 실행합니다.
{% endraw %}

<br><br>

이제 실제로 검색기능을 실행해봅시다~

상단메뉴에 search버튼을 누르면

![img_search_first_page](https://lh3.googleusercontent.com/QTe1lqV-5djZ-3_dX2GTVbEJQBGbccuWl_TXLCMA0Cmfyci-45zXlXeAJy4qAiKYkJIPVxcuYsyiQQ7s8oxccs7JD4s0m_R6qbvCGm_RAmasnI-LHYNMiaSRY9QA8WL0kxQIQMvuUKhOGi-J_S5mPtCTMxfDYoeF4tbw8rxFNT-TpkUhRiYAUIWq9PgsmkekZe6nPAFNf_dxTFABRWVuDLUSuPrYBECw0WQNvC_TkpwWkQCzbF5xHGy38Ef3FmBd6W4PgBfX5QlENP0sRgOr7r1VVLgN0_yaiEePSLNTrETQRKBjH30526LYJyE6Cq5LbdAA-O24TOhtK5DvE1s0rMIzRxeo3NzikFdt-Vjx7q6Zgaa6zoK9ryZ8e54jYA97qB8klswOXLtRputmH3THOiivlUjTZO4g0r_jF7KD44FIMKFMUHGQA9tJzOYzK8N9EGld6llreHBBjg9RR3zHLT5eEBB4-9QyZ2RK21rE7L6LY2YH_cGvrHvOtnJPSOYtHOigj0kT7OwCWtlv_r-7xFCA2BSPvBrPYLpNnCRqJTRcJDOYyf9ELoKKQRmKm-rVZJSXh5qtkblRre-958Nnj2ILV6kRVa3dIXOvLI67wg=w2042-h772-no)

검색할 단어를 입력하고 Search버튼을 누르면

![img_search_bar](https://lh3.googleusercontent.com/EsAfIc4VkPqu6YzOcZKdP6YfqauE2qgmtVg_aY9vZlX-O4avr4MoK8W5e4S8ZfyXQbQJB0_O31nQX8uzGI3mHbOePY36Y4boMjKRzId4cqvafJkVBXX_pM7Dp-3tvDTyTLdMYP9IqbwYEs1u8QDOUrDgDmttXVvIkX2TIGGAWEzn4Vdc7PkwAmjdW0tAiDKCi3IQxGouY268dbv0eYw0uNpO530p8I3UgZM9sVQDhFVpQP1jSWiPYo2UbjB9tJb636BPTYWEGFOIokcH0ED2xlLJzd9lhvd_sCX8gAeQN6g8zo7qjhKzcOnTdh4Rcan32JcZFcYYo4c9JAjQr0s2efRydgTwNDUGqLhYOr7X_H0yeKvO8A2Gqyyl6Sk3KMX5vAS08sd-MnZo52fDHTSk-t_Rx-ez_-2vEHM4_FZqaKQ2a6sSF1fFeQJz0SyUJqMqvMq7nyNkdel2OGm0Rw5kTZLgCLzSkQlo5aqvMIlHGtUmgqJfmePGHgrZePWSW0Wt5hsyJrIgJ90letMraaYVF0yI4EDXjVphE3njTRSDsR_-wJN5mpf-C0ZcP2H2q6uGv9rN_3Zkaa5Gz89Lso9C8mWzc58C10CLEl-SglnbNg=w2042-h1266-no)
