---
layout: post
title:  "[Django tutorial] Ch2-4. 간단한 Poll(투표) 앱 만들어보기 - View와 Template연결"
date:   2017-09-25 00:00:00
description: 2-4. View와 Template연결
categories:
- programming
- django
- web_programmig
banner_image: /programming/django/python-django-logo.jpg
comments: true
---

간단한 Poll(투표) 앱 만들어보기 - 뷰와 템플릿 연결

---

## 뷰(View)란?

<br>

서버쪽 데이터 로직을 담당하는 부분이자,

템플릿에 데이터를 전달하는 역할을 합니다.

이번 챕터에서는 index, vote, results 템플릿과 연결될 view를 작성해보겠습니다.

<br>

## 1.index.html
<br>
index.html에서는 모든 질문 사항들이 나와야합니다.

즉, Question 테이블의 모든 데이터를 나열해야합니다.

먼저 polls/views.py의 index 함수는 다음과 같이 작성합니다.

>mysite/polls/views.py

{% highlight python %}
from django.shortcuts import render
from polls.models import Question


def index(request):
    questions = Question.objects.all().order_by('-pub_date')[:5]

    # questions를 알아보기 위한 출력 코드
    print('===========check questions===========')
    print('questions: ', questions)
    print('questions[0]: ', questions[0])
    print('len(questions): ', len(questions))
    print('============= end check ==============')

    context = {'questions': questions}
    return render(request, 'polls/index.html', context)
{% endhighlight %}

테이블명.objects.all() 을 하면 해당 테이블의 모든 데이터를 가져옵니다.

뒤에 .order_by('-pub_date')를 통해 시간 역순으로 가져왔습니다.

순서가 상관없다면 굳이 안써도 됩니다.

[:5]를 통해 해당 순서대로 5개를 가져옵니다.

지금은 Question가 3개밖에 없어서 상관없지만, 설명을 위해 작성했습니다.

<br>

index.html은 다음과 같이 작성해줍니다.

>mysite/polls/templates/polls/index.html
{% highlight jinja %}
{% raw %}
{% if questions %} <!--views.py의 index에서 context를 통해 넘겨준 questions-->
    <ul>
        {% for question in questions %} <!--python3 for 문법과 동일-->
            <li>
                <a href="/polls/{{question.id}}/">
                    {{question.question_text}} <!--데이터내에 필드 접근 방법-->
                </a>
            </li>
        {% endfor %}
    </ul>
{% else %}
    <p>No question data</p>
{% endif %}
{% endraw %}
{% endhighlight %}

Django의 Template에서는 view에서 넘겨준 파라미터를 처리하기위해

{% raw %}
{% if %}나 {% for %}같은 템플릿 언어를 사용합니다.

대부분의 템플릿 언어는 {% endif %}나 {% endfor %}와 같이
마무리를 지어줘야 합니다.
{% endraw %}

<br>

context를 통해 넘겨준 questions 데이터 객체 리스트를 받아

for문을 돌려 모든 데이터의 question_text를 출력하고, 링크를 걸었습니다.

{% raw %}
링크는 '/polls/{{question.id}}'로 작성했습니다.
{% endraw %}

이 URL은 /polls/로 시작됩니다.

mysite/urls.py에서 polls로 시작하는 URL은

include를 통해 polls/urls.py로 넘기고 있습니다.

즉, 이 URL은 polls/urls.py에서 처리하면 됩니다.

<br>

id 필드는 models.py에서 테이블을 만들 때, 자동으로 생성되는 PK(PrimaryKey)입니다.

이제 로컬서버를 킨 후, 브라우저에서 localhost:8000/polls/ 로 접속하면

![image of index](http://blogfiles.naver.net/MjAxNzEwMDFfMTU0/MDAxNTA2NzkyNjQ3MjYz.TmnVXMCe1XBfpcNJDKE54rST_r0IaGIXXY-eAvDOc8Yg.H4n5Aza2s9rO1Kfu0KPMMLbOrBv2jY0NMb4ac_dvjhwg.PNG.zaxs1029/1.index.png)

또한 지금 터미널을 살펴보면, 아까 index함수에서 작성한 print문이 나옵니다.

{% highlight bash %}
===========check questions===========
questions:  <QuerySet [<Question: Which animal do u like best?>, <Question: Who do u like best?>, <Question: What is your hobby?>]>
questions[0]:  Which animal do u like best?
len(questions):  3
============= end check ==============
{% endhighlight %}


질문을 클릭하면 페이지 에러가 뜹니다. URL을 연결시켜주지 않았기 때문입니다.

<br>

{% raw %}
이제 링크주소('/polls/{{question.id}}')를 처리하러 갈 차례입니다.
{% endraw %}

먼저 namespace와 name을 지정해주겠습니다.

지금은 영문을 모르겠지만, 곧 알게되니 간단히 'url에 이름을 지어준다'

라고 생각하고 따라하시면 됩니다.

>mysite/urls.py
{% highlight python %}
from django.conf.urls import url, include
from django.contrib import admin


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^polls/', include('polls.urls', namespace='polls')),
]
{% endhighlight %}

그냥 원래 코드에 namespace를 추가한 것입니다.

<br>

mysite/polls/urls.py
{% highlight python %}
from django.conf.urls import url, include
from polls import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^(?P<question_id>\d+)/$', views.vote, name='vote'),
    url(r'^(?P<question_id>\d+)/vote/$', views.vote_process, name='vote_process'),
    url(r'^(?P<question_id>\d+)/results/$', views.results, name='results'),
]
{% endhighlight %}

여기에서는 모든 url에 name을 추가해 이름을 지어줬습니다.

그리고

{% highlight jinja %}
(?P<question_id>\d+)
{% endhighlight %}

부분이 추가 됬습니다. 간단히 설명하자면,

일단 /$ 는 url의 마침표를 의미입니다.

(url뒤에 더 붙는게 없이 이 시점에서 끝난다는 의미)

그리고 d+는 숫자를 받겠다는 의미입니다.

<br>

예를 들어 아까 작성한 index.html의 링크 중 하나가

'polls/1' 인데, 이 url은 mysite/urls.py의 url(r'^polls/')를 거쳐

mysite/polls/urls.py의 두번째 url로 가게 됩니다.

(1번째 url은 숫자를 받지않고 끝나고, 3번째 url은 /vote로 끝나야하며,

4번째 url은 results로 끝나야 매칭이 됩니다.)

그럼 url안에 1 이란 숫자는 question_id에 대입이 된 채로

이 url과 연결된 views.vote에 가게 됩니다.

이러한 django의 url 표현을 **정규표현식**이라고 하는데,

추후에 정리하겠습니다.



<br>

또한 3번째 url에
{% highlight jinja %}
polls/<question_id>/vote
{% endhighlight %}
을 새로 추가했습니다.

이 url은 곧 있으면 작성할 views.py의 vote_process 함수에 연결됩니다.

<br>

다시 과정을 정리하면,

index.html에서 투표할 보기를 하나 선택하면

링크를 통해 mysite/polls/urls.py의 2번째 url에 연결되어

views.py/vote 가 실행되고 vote.html에 연결됩니다.

<br>

vote.html에서는 선택한 질문에 대한 보기가 나오고,

보기를 선택한 후 투표를 하면, 투표결과가 세번째 url에 전달되서

views.py/vote_process 에서 투표결과를 DB에 반영합니다.

그 후, 네번째 url로 연결되어 views.py/results에서 결과 데이터를

results.html로 넘기고 results.html이 실행되어 투표 결과를 볼 수 있게 됩니다.

results.html에는 재투표 버튼이 있고, 그걸 클릭하면

다시 첫 화면인 index.html로 연결됩니다.

<br>

이제 index.html에서 걸어놓은 링크를 처리해보겠습니다.
{% highlight jinja %}
polls/<question_id>
{% endhighlight %}
는 방금 작성한 mysite/polls/urls.py에 의해

views.vote에 접근하게 되있습니다. vote함수를 작성해봅시다.

>mysite/polls/views.py
{% highlight python %}
from polls.models import Question


def vote(request, question_id):
    question = Question.objects.get(id=question_id)
    context = {'question': question}
    return render(request, 'polls/vote.html', context)
{% endhighlight %}

views.py에 위 코드를 추가합니다.

이번에 vote함수에서는 request이외에 question_id도 받는 것을 볼 수 있습니다.

바로 polls/urls.py의 두번쨰 url에서 받았던 question_id를 받습니다.

<br>

Question.objects.get(id=question_id)는

Question 모델(테이블)에서 id값이 question_id 값인 데이터 하나만 불러옵니다.

index 함수에서 씌였던 objects.all()이 데이터를 모두 가져오는 것과 대비됩니다.

<br>

마지막에 render함수의 리턴을 통해,

'question' 파라미터가 polls/vote.html로 전달됩니다.

<br>

이제 투표 페이지인 vote.html을 작성해봅시다.

>mysite/polls/templates/polls/vote.html
{% highlight jinja %}
{% raw %}
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
{% endraw %}
{% endhighlight %}

{% raw %}
이제 index.html에서 질문을 클릭하면 투표하는 화면이 나옵니다.

코드설명을 하자면

일단 {% if error_message %}는 지금은

error_message라는 파라미터를 전달하지 않았으므로 실행되지 않습니다.

(question만 파라미터로 보낸 상태입니다.)

<br>

form태그는 html에서 데이터를 입력받고 전송하는 역할을 합니다.

어디다 전송하냐면 action값인

'{% url 'polls:vote_process' question.id %}'에 전송합니다.

{% %} 안에 url은 주소를 만들어주는 명령어입니다. 그럼 뭘 보고 만드느냐

기억하시나요

polls는 mysite/urls.py에서 r'^polls/' 의 namespace였습니다.

vote_process는 r'^polls/' 이 include를 통해 연결하는
{% endraw %}

mysite/polls/urls.py의
{% highlight jinja %}
r'^(?P<question_id>\d+)/vote/$'
{% endhighlight %}
의 name이었습니다.

즉, 'polls:vote_process'는 url명령어에 의해
{% highlight jinja %}
r'^polls/(?P<question_id>\d+)/vote/$'
{% endhighlight %}
라는 주소를 만들어 냅니다.

이 주소 안에
{% highlight jinja %}
(?P<question_id>\d+)
{% endhighlight %}
에는 옆에 있는 question.id 값이 대입됩니다.

<br>

예를 들어 question.id가 3이라면, 최종 만들어지는 주소는
'/polls/3/vote' 가 되고,

form태그에 입력한 데이터는 method='post'이므로

POST방식으로 '/polls/3/vote'로 보내집니다.

<br>
{% raw %}
그 아래에 {% csrf_token %}은 django에서 제공하는 보안기능입니다.

form으로 데이터를 전송하는 경우, CSRF(Cross Site Request Forgery) 공격을 주의해야하는데

이를 방지하는 템플릿 태그입니다.

django에선 form태그를 사용할 때, csrf_token을 안쓰면 에러가 발생합니다.

<br>

그 밑에 for문에서 choice_set.all을 살펴보겠습니다.

choice_set.all은 django의 built-in 명령어로 데이터와 FK로 연결된

모든 다른 테이블의 데이터를 가져옵니다.

<br>

만약 Question에 'who do u like best?'란 데이터에 연결된 보기가

Choice테이블에 'Teemo', 'Jinx', 'Rengar' 로 있다면...

question이 'who do u like best?' 일 때,

{% endraw %}

{% highlight jinja %}
{% raw %}
{% for choice in question.choice_set.all %}
    {{choice}}
{% endfor %}
{% endraw %}
{% endhighlight %}
의 결과값은
'Teemo', 'Jinx', 'Rengar'
가 되겠죠

{% raw %}

<br>

{{forloop.counter}} 또한 django의 built-in 명령어입니다.

for문의 카운트를 1부터 시작해서 리턴합니다. ex) 1, 2, 3, 4...

<br>

나머지는 직접 화면을 보면서 확인해봅니다.
{% endraw %}

<br>

이제 보기를 선택하고 vote버튼을 누르면... 오류가 뜹니다.

form데이터가 전달되는 'polls:vote_process'에 연결된

views.vote_process가 정의되어 있지 않기 떄문이죠.

vote_process함수를 정의해봅시다.

>mysite/polls/views.py
{% highlight python %}
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponseRedirect
from django.core.urlresolvers import reverse
from polls.models import Question, Choice


def vote_process(request, question_id):
    question = get_object_or_404(Question, id=question_id)
    try:
        selected_choice = question.choice_set.get(id=request.POST['choice'])
    except (KeyError, Choice.DoesNotExist):
        # 설문 투표 폼을 다시 보여준다.
        context = {'question': question, 'error_message': "U didn't select a choice"}
        return render(request, 'polls/vote.html', context)
    else:
        selected_choice.votes += 1
        selected_choice.save()
        # POST 데이터를 정상적으로 처리했으면,
        # 그 결과를 보여줄 수 있는 페이지로 이동시키기 위해
        # HttpResponseRedirect 객체를 리턴하는 것이 일반적
        return HttpResponseRedirect(reverse('polls:results', args=(question.id,)))
{% endhighlight %}

views.py에 다음 코드를 추가합니다.

맨위에 from import 부분은 새로 추가되는 부분만 추가하면 됩니다.

<br>

이번에도 question_id를 3번째 url안에 (?P<question_id\d+)로 받는 걸 알 수 있습니다.

question = get_object_or_404(Question, id=question_id) 코드는

question = Question.objects.get(id=question_id) 와 거의 같습니다.

단지 함수명에서도 볼 수 있듯이, 먼저 괄호안의 조건에 맞는 객체를 검색해서

존재하면 그 객체를 리턴하고, 없으면 404예외처리(익셉션, 에러)를 반환합니다.

<br>

먼저 try를 통해, 투표된 보기 객체를 얻어봅니다.

request.POST는 POST로 전송된 데이터를 담고 있습니다.

아까 form의 method가 post였으니 request.POST는 form데이터를 담고있는 객체입니다.

request.POST['choice']는 form데이터 중,

name='choice'였던 선택지의 value값을 반환합니다.
{% raw %}
value='{{choice.id}}' 였으니, 투표한 보기의 id값이 반환되겠네요.

참고로 request.POST = {'choice': 3}

이와같이 request.POST는 dictionary(json) 형식입니다.

(print(request.POST)를 출력해보세요)

<br>

이렇게 selected_choice를 받는 코드를 실행하는데,

KeyError나 Choice.DoesNotExist 에러가 나면 except 코드를 실행합니다.

KeyError는 만약 vote.html에서 아무것도 선택안하고 vote버튼을 누르게되면

request.POST = {}가 되어, 'choice'라는 Key가 없게 되고,

이때 발생하는 익셉션(에러)입니다.

<br>

Choice.DoesNotExist는 Choice테이블에 데이터객체가 없을 때,

일어나는 익셉션 입니다. 우리는 보기 데이터를 만들었으니, 에러가 나지 않겠죠?

{% endraw %}
<br>

어쩃든 이런 에러가 났을 땐, render함수를 통해 다시 vote.html으로 넘어갑니다.

이때는 context를 통해 'error_message'까지 보내주니, vote.html에 있는

{% raw %}
{% if error_message %} 구문이 실행되겠군요
{% endraw %}

<br>

에러가 나지 않으면 else구문이 실행됩니다.

선택된 보기의 votes값을 1증가 시키구요

save()를 통해 변경사항을 저장합니다.

그리고 HttpResponseRedirect를 통해

reverse('polls:results', args=(question.id,))로 접근합니다.

여기서 reverse 함수는 아까 vote.html에서

{% raw %}
{% url 'polls:results' question.id %} 와 동일합니다.
{% endraw %}

즉, question.id가 3이라면 r'^polls/3/results' 라는 주소를 만듭니다.

<br>

투표가 에러가 나지 않으면, r'^polls/3/results'로 연결되어,

views.results 로 연결됩니다.

<br>

이제 results 함수를 작성할 차례입니다.

>mysite/polls/views.py
{% highlight python %}
def results(request, question_id):
    question = Question.objects.get(id=question_id)
    context = {'question': question}
    return render(request, 'polls/results.html', context)
{% endhighlight %}

views.py에 위의 코드를 추가합니다.

results.html에서는 해당 질문에 대한 투표 결과만 쭈르륵 보여주면 됩니다.

context를 통해 question 데이터를 'polls/results.html'로 전송하고 있습니다.

<br>

그럼 이제 results.html을 작성해보겠습니다.

>mysite/polls/templates/polls/results.html
{% highlight jinja %}
{% raw %}
<h1>{{question.question_text}}</h1>

<ul>
    {% for choice in question.choice_set.all %}
        <li>
            {{choice.choice_text}} -- {{choice.votes}} vote{{choice.votes|pluralize}}
        </li>
    {% endfor %}
</ul>

<a href="{% url 'polls:index' %}">Vote again?</a>
{% endraw %}
{% endhighlight %}

{% raw %}
vote{{choice.votes⎪pluralize}}는 만약 choice.votes가 1 초과이면

vote를 복수형인 votes로 바꿔줍니다.
{% endraw %}

별 기능이 다 있네요...

이제 마무리가 됬습니다!

완성된 화면을 감상하고, 또 직접 해보세요!

<br>

index.html 접속
![image of index](http://blogfiles.naver.net/MjAxNzEwMDFfMTU0/MDAxNTA2NzkyNjQ3MjYz.TmnVXMCe1XBfpcNJDKE54rST_r0IaGIXXY-eAvDOc8Yg.H4n5Aza2s9rO1Kfu0KPMMLbOrBv2jY0NMb4ac_dvjhwg.PNG.zaxs1029/1.index.png)
질문선택 후, 투표화면
![image of vote](http://blogfiles.naver.net/MjAxNzEwMDFfMjMw/MDAxNTA2NzkyNjQ3NDQy.ymkrL3aUe_Mqe3beAmHufvCwJEsrdZMeZei6VsMYS5gg.TTSCt-eibjj_uk98N5gLUdxnuFnD2J3p0IfEqdnSW1Eg.PNG.zaxs1029/2.vote.png)
만약 아무것도 선택안하고 vote버튼을 누르면
![image of vote_error](http://blogfiles.naver.net/MjAxNzEwMDFfMTE2/MDAxNTA2NzkyNjQ3NjA0.q6yi9PMMkwgNVThxAEOvgRxaFKNUA9MXu3-9CaAaaa0g.Jt0bBe76OAyu7dutQe645Z38uJtZfAeACmCcFPOw_sQg.PNG.zaxs1029/3.vote_error.png)
보기를 선택하고 vote버튼을 누르면
![image of results](http://blogfiles.naver.net/MjAxNzEwMDFfMzkg/MDAxNTA2NzkyNjQ3NzU0.vJ24xt1lITqv5cHbogVukM71wiJoJT8kcRqskF5FZvEg.Jx-ROqueQkb_zu_kc2HqR6xRKkfVOHkaZB8ekQ_zlr8g.PNG.zaxs1029/4.results.png)
