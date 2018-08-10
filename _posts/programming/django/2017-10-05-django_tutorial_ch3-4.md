---
layout: post
title:  "[Django tutorial] Ch3-4. Polls 앱에 클래스 뷰 적용하기"
date:   2017-10-05 13:50:00
description: 3-4. Django의 Class View2
categories:
- programming
- django
- web_programmig
banner_image: /programming/django/python-django-logo.jpg
comments: true
---

Polls 앱에 클래스형 뷰 적용

---

이번 챕터에서는 지난번에 함수형 뷰로 만들었던

polls앱을 클래스형 뷰로 바꿔보고자 합니다.

(클래스형 뷰로 작성하는 습관을 들여야 합니다.)

<br>

먼저 books앱 템플릿과 일관성을 위해

base_polls.html 생성하도록 하겠습니다.

>mysite/templates/base_polls.html
{% highlight jinja %}
{% raw %}
{% extends 'base1.html' %}

{% block title %}Polls Application Site{% endblock %}

{% block sidebar %}
{{ block.super }}
<ul>
    <li>
        <a href="/polls/">Polls_Home</a>
    </li>
</ul>
{% endblock %}
{% endraw %}
{% endhighlight %}

<br>

그 다음, index, vote, results 템플릿을 수정하겠습니다.

<br>

>mysite/polls/tempaltes/polls/index.html
{% highlight jinja %}
{% raw %}
{% extends 'base_polls.html' %}

{% block content %}

<h2>Polls Question List</h2>

{% if object_list %} <!--views.py의 index함수에서 context를 통해 넘겨준 questions-->
    <ul>
        {% for question in questions %} <!--python3 for 문법과 동일-->
            <li>
                <a href="{% url 'polls:vote' question.id %}">{{question.question_text}}</a> <!--데이터 객체내에 필드명 접근 방법-->
            </li>
        {% endfor %}
    </ul>
{% else %}
    <p>No question data</p>
{% endif %}

{% endblock %}
{% endraw %}
{% endhighlight %}

polls/templates/index.html에선

'mysite/templates/base1.html'을 extends했고,

기존의 코드를 block content로 둘러싸고,

href부분을 하드코딩에서 url명령어를 써서 만드는 걸로 바꿨습니다.

<br>

vote와 results도 바꿔보겠습니다.

>mysite/polls/templates/polls/vote.html
{% highlight jinja %}
{% raw %}
{% extends 'base_polls.html' %}

{% block content %}

<h1>{{question.question_text}}</h1>

{% if error_message %}
    <p><strong>{{error_message}}</strong></p>
{% endif %}

<form action="{% url 'polls:vote_process' question.id %}" method="post">
    {% csrf_token %}
    {% for choice in question.choice_set.all %}
        <input type="radio" name="choice" id="choice{{forloop.counter}}" value="{{choice.id}}"/>
        <label for="choice{{forloop.counter}}">
            {{choice.choice_text}}
        </label>
        <br>
    {% endfor %}
    <input type="submit" value="Vote" />
</form>

{% endblock %}
{% endraw %}
{% endhighlight %}

<br>

>mysite/polls/templates/polls/results.html
{% highlight jinja %}
{% raw %}
{% extends 'base_polls.html' %}

{% block content %}

<h1>{{question.question_text}}</h1>

<ul>
    {% for choice in question.choice_set.all %}
        <li>
            {{choice.choice_text}} -- {{choice.votes}} vote{{choice.votes|pluralize}}
        </li>
    {% endfor %}
</ul>

<a href="{% url 'polls:index' %}">Vote again?</a>

{% endblock %}
{% endraw %}
{% endhighlight %}

둘다 기존 코드에 extends를 추가하고,

block content로 감싼걸 알 수 있습니다.

<br>

다음으로 mysite/polls/views.py를 고쳐보겠습니다.

이번에 여기서 고칠 함수는 index, vote, results입니다.

(템플릿 고친 그대로죠)

기존의 index, vote, results함수는 주석처리하거나 지우고,

다음의 IndexView, VoteView, ResultsView를 추가해줍니다.

{% highlight python %}
from django.views.generic import ListView, DetailView


class IndexView(ListView):
    template_name = 'polls/index.html'
    context_object_name = 'questions'

    def get_queryset(self):
        """
        return the last five published questions.
        """
        return Question.objects.order_by('-pub_date')[:5]


class VoteView(DetailView):
    model = Question
    template_name = 'polls/vote.html'


class ResultsView(DetailView):
    model = Question
    template_name = 'polls/results.html'
{% endhighlight %}

IndexView에 보면 처음보는 context_object_name이 보입니다.

원래 이렇게 설정을 안하면 템플릿에서 'object_list'로 접근해야합니다.

하지만 우린 index.html을 고칠 때, 거기서 쓰는 변수를

고치지 않아서 questions 그대로 써야하죠?

이럴때는 context_object_name을 이용해 접근 변수를 설정할 수 있습니다.

<br>

또한 여기서는 get_queryset메소드가 새로 보입니다.

전에 books앱을 만들 땐, model = Question 이런 식으로만 써서

query를 object_list로 템플릿에 넘겨줬었습니다.

하지만 다른(혹은 커스텀한) query를 넘겨주고 싶으면

get_queryset을 이용해 해당값을 리턴해주면 됩니다.

<br>

나머지는 django tutorial ch3-3에서 다 스터디했던 내용입니다.

<br>

이제 함수형에서 클래스형 뷰로 변경해준만큼 urls.py도 변경해줄 차례 입니다.

>mysite/polls/urls.py
{% highlight python %}
from django.conf.urls import url, include
from polls import views

urlpatterns = [
    # url(r'^$', views.index, name='index'),
    # url(r'^(?P<question_id>\d+)/$', views.vote, name='vote'),
    # url(r'^(?P<question_id>\d+)/results/$', views.results, name='results'),
    url(r'^$', views.IndexView.as_view(), name='index'),
    url(r'^(?P<pk>\d+)/$', views.VoteView.as_view(), name='vote'),
    url(r'^(?P<pk>\d+)/results/$', views.ResultsView.as_view(), name='results'),
    url(r'^(?P<question_id>\d+)/vote/$', views.vote_process, name='vote_process'),
]
{% endhighlight %}

이번 변경사항에 필요한 사항만 적은 것입니다.

아마 처음부터 제 django tutorial을 따라오신 분들이면

예제를 위한 url 코드가 더 있을 것입니다.

<br>

URL은 그대로인데, 함수형 뷰로 연결되있던게 클래스형 뷰로 연결되도록 변경되었습니다.

<br>

바뀐(더 간단해진) 코드를 다시 보며

로컬서버를 켜고, localhost:8000에 접속 후, polls앱에 접속해봅니다~

<br>

localhost:8000 에 접속했을 때,
![1.img_localhost](https://lh3.googleusercontent.com/BUpeFnED0UX2VW9vb_RPxyCDVK1R6KYAxdE53-5T5q83wCZXz5M26W1WG_Q8eRHkwQ4Nw4Pe53wU7FriaoRLGUkD7O9ld4WMbM0MQv2Slmoq3yEpfxMQgIciZO8z4W5yg9gUeKwHi79_zZw45e7zmq7eoD6750BWHhyyZ87CzYEka5e1ofP5N_3WBRaAEUSotwZAa8Yx1bM-LFPebC1DJFGHIep07vzwGLmtEK7uHJDvPrs_FVzawStlasgJyzyRhEqRAWU7BzUP-ryLT0UEZ2XlTlY8kxBCkI8hp6BcHGGS24-HIAJP2FSAGWATlyekuvyID7BsfkGup9-neUpEb2D0-dFLkPi5EEXLUle9b7J2IzXYwcr7FApvOTHj337lfcg4a-mBFpXYMmb1ybUJxNeQOdM8T2ztRrNhDY8eMRF87aP4Wy9JswKTQu8D0JEtfySOQfvaaTbBcwbrfQKGBCqvz2LEvNUc_NuQUdKjDJ9lPj6hqa5ir6IfwScOp8MDF63h62Wbdv1VC-F8nHrLRJBaizh3pyeQUpQGF5uLvvjdafSRPcZt549i5rRyposfp4Gyml8XioCyTkYesZLHrLOFnO62uYrdFM_cIn42bA=w1554-h1054-no)

polls앱을 클릭했을 때,
![2.img_clicked_polls](https://lh3.googleusercontent.com/tjXwnzoJlxuIRy_uuQesLFkQL_0tu2zoMR1ttd-ZaQ_DtwbMNaqRRZASWpGXPyQQ32VGUYqlsKoWtIf0yGvrV23J4P4l3cw6A3X4Ju4aKcp1pxMvBvbGfbvxHO7TGy6TPymOpjULmMnWxhqGAnYlAoqhJ79DUdG30ye5PT4_zsvzHPueJcdXI6n4JZPe1H4rPzPt39IRabkmJ5X7qbBmXooUnWwERaHFvdd7BX2NITeXjzSJFxEjec5P8SA9EhRaxlFTbKZ2YZsXhYM_4DUXmCmmPmQmO2_ODrnQIZn4EXpbhjRQs3Enx6RQW1phtL8HxD3-qD9Z2LIFUecQwi_PoKiE50lgHvULrwbsG-IH5S8JVK9Pu_tHM1-1KvGvCeLwa8Ru_sb988HBSgs7TDHyRz1tpNBmiZtNZTwf69sp3pJ3RbSNUgGVXyX7Zth5HktSTZjUaEXZazZ6viCxGIz-F8DKqyZTGjq6qK5c5bqKK44SyZHXq-nYK4-Ya3J8L0N6i9fDeV-AVtvnnKsivXsSEJTyF-dCBNPVfRbJyp26EAiLCIAC99TwG-IIzwbWTePr_FDFmFqhWgNF4dC-TiPY-XVummEXAo9wxtLlj9IJ7g=w1554-h1054-no)