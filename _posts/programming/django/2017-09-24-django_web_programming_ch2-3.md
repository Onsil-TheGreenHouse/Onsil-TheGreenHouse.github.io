---
layout: post
title:  "[Django, 파이썬 웹 프로그래밍] Ch2-3. 간단한 Poll(투표) 앱 만들어보기 - Template과 URL연결"
date:   2017-09-24 17:00:00
description: 2-3. Template과 URL연결
categories:
- programming
- django
- web_programmig
banner_image: /programming/django/python-django-logo.jpg
comments: true
---

간단한 Poll(투표) 앱 만들어보기 - 템플릿과 URL연결

---

## 템플릿(Template)이란?

<br>

브라우저를 통해 사용자에게 보이는 화면, 즉 html 파일입니다.

처음에 프로젝트를 설계할 때, 우리는 다음과 같이 UI를 설계했습니다.

![builtUI](/assets/images/programming/django/web_programming_2-3/1.buildUI.png)


설계한 대로, 3개의 html 파일을 만들겠습니다.

가운데 detail.html은 vote.html로 이름을 바꾸겠습니다.

(그게 더 명확한 거 같아서...)

<br>

일단 템플릿은 polls/template/polls 경로에 만들겠습니다.

굳이 이 경로에 만드는 이유는...맨 밑에 덧붙이는 말에 설명하도록 하겠습니다.

(내용이 좀 길고, 글의 흐름에 안맞아서..)

<br>

윈도우 탐색기나 파인더에서 만들어도 되지만

다음과 같이 pycharm에서도 폴더를 만들 수 있습니다.

![pycharm_mkdir](/assets/images/programming/django/web_programming_2-3/2.pycharm_mkdir.png)

밑의 이미지는 polls/template/polls 경로를 만들고,

3개의 템플릿을 만든 후, index.html에는 아무 글이나 쓴 상태입니다.

![make_3_htmls](/assets/images/programming/django/web_programming_2-3/3.make_3_htmls.png)

<br>

이제 템플릿을 연결할 차례입니다. 두가지 방법이 있습니다.


<br>

## 1. 프로젝트 urls.py에서 모두 관리하기(원리 이해용)

<br>

일단 그대로 따라해보세요

polls/views.py에 다음과 같이 코드를 추가합니다.

![polls_views_test](/assets/images/programming/django/web_programming_2-3/4.polls_views_test.png)

그리고 프로젝트 폴더에 urls.py, 즉 mysite/urls.py 에 가서

다음과 같이 코드를 작성합니다.

![urls_test](/assets/images/programming/django/web_programming_2-3/5.urls_test.png)

그리고 브라우저에 127.0.0.1:8000/asdf 를 입력하면

(127.0.0.1은 localhost 와 같습니다!)

![test_index_page](/assets/images/programming/django/web_programming_2-3/6.test_index_page.png)

index.html에 썻던 내용이 그대로 나오는 걸 볼 수 있습니다!

<br>

과정을 설명하자면,

브라우저에 127.0.0.1:8000/asdf 를 입력하면

django는 프로젝트 폴더에 urls.py에서 해당 url을 찾습니다.

지금은

{% highlight python3 %}
url(r^'asdf/$', views.test)
{% endhighlight %}

에 매칭되었고, 옆에 적어진 views.test로 접근하게 됩니다.

<br>

views는 다음에 의해 polls에서 가져온 것이기 때문에,
{% highlight python3 %}
from polls import views
{% endhighlight %}

polls/views.py에 가서 test 함수를 실행시킵니다.

<br>

test함수를 살펴보면 print 문장이 있죠

터미널을 보면 다음 문자열이 그대로 출력됨으로써,

test 함수의 실행을 확인할 수 있습니다.

{% highlight bash %}
function test in polls/views.py is run
{% endhighlight %}

![terminal_view_text](/assets/images/programming/django/web_programming_2-3/7.terminal_view_text.png)

그리고 밑의 render 함에 의해, 'polls/index.html'을 연결시켜 브라우저에 출력합니다.

<br>

그런데 앱이 polls이외에 엄청나게 많이 있다고 생각해봅시다.

모든 앱의 템플릿 url이 프로젝트 폴더에 urls.py 하나에서 모두 관리 된다면

파일 및 url 관리가 매우 어려울 것입니다.

때문에 이렇게 연결시키는 것보단 다음 방법을 추천합니다.

<br>

## 2.앱 별로 urls.py 관리하기(무조건 이거 쓰기)

![url_divide](/assets/images/programming/django/web_programming_2-3/8.url_divide.png)

프로젝트 폴더의 urls.py에는 include함수를 사용해 위와 같이 작성하고,

polls 폴더안에 새로 urls.py를 생성하여 위와 같이 작성합니다.

<br>

그리고 브라우저 주소창에 127.0.0.1:8000/polls/asdfasdf 을 입력하면

![polls_asdfasdf](/assets/images/programming/django/web_programming_2-3/9.polls_asdfasdf.png)

다시 index.html에 연결됩니다.

<br>

과정을 설명하자면

주소창에 127.0.0.1:8000/polls/asdfasdf 을 프로젝트 urls.py에서 매칭 시도합니다.

그럼

{% highlight python3 %}
url(r'^polls/', include('polls.urls'))
{% endhighlight %}

에 매칭이 되고, 옆에 적힌 include함수에 의해

polls/urls.py로 가서 나머지 세부사항을 매칭시도합니다.

그럼 polls/urls.py에서

{% highlight python3 %}
url(r^'asdfasdf/$', views.test)
{% endhighlight %}

에 매칭되고 옆에 적힌 views.test에 접근합니다.

{% highlight python3 %}
from polls import views
{% endhighlight %}

에 의해 polls/views.py 로 가서 test함수를 실행시킵니다.

<br>

이제 설명을 다 드렸으니, 함수명도 제대로 고치고

템플릿 3개를 모두 url 연결 후, 마치겠습니다.

![polls_views_final](/assets/images/programming/django/web_programming_2-3/10.polls_views_final.png)
![polls_asdfasdf](/assets/images/programming/django/web_programming_2-3/11.polls_url_final.png)

<br>

### 덧붙이는 말(템플릿 저장 위치에 대하여)

프로젝트 폴더에 settings.py를 살펴보면

INSTALLED_APPS와 TEMPLATES에 DIRS가 있습니다.

![template_position](/assets/images/programming/django/web_programming_2-3/12.template_position_settings.png)

원래 DIRS=[] 이지만 제가 설명을 위해 임의로 넣었습니다.

그럼 만약에

{% highlight python3 %}
return render(request, 'vote.html')
{% endhighlight %}

에 의해 vote.html을 찾는 상황이 온다면

Django는 DIRS -> INSTALLED_APPS 순서대로 경로를 뒤지며 vote.html을 찾습니다.

이 순서대로...

<br>
### I. DIRS에 직접 입력한 경로 먼저
#### 1. /asdf1/asdf2/templates
<br>
### II. INSTALLED_APPS에 기본세팅된 패키지
#### 2. (가상환경이름)/lib/python3.4/site-packages/django/contrib/admin/templates
#### 3. (가상환경이름)/lib/python3.4/site-packages/django/contrib/auth/templates
#### 4. (가상환경이름)/lib/python3.4/site-packages/django/contrib/contenttypes/templates
#### 5. (가상환경이름)/lib/python3.4/site-packages/django/contrib/sessions/templates
#### 6. (가상환경이름)/lib/python3.4/site-packages/django/contrib/messages/templates
#### 7. (가상환경이름)/lib/python3.4/site-packages/django/contrib/staticfiles/templates
<br>
### III. 우리가 직접 만들고 추가한 앱
#### 8. mysite/polls/templates

<br>

밑의 이미지같이 직접 가상환경 폴더를 뒤지며 눈으로 확인해보세요

![template_installedapps](/assets/images/programming/django/web_programming_2-3/13.template_installedapps.png)

(윈도우는 경로가 약간 다를 수 있습니다. 가상환경 폴더를 잘 뒤져보세요~)

<br>

이점 기억한 상태에서 이러한 상황을 가정해봅시다.

현재는 polls 앱밖에 없지만, 나중에 polls2 라는 앱을 만들었습니다.

그리고 두 앱 모두 이름은 똑같은 vote.html 템플릿이 있습니다.

그리고 Django가 (앱이름)/templates 경로에서 템플릿을 찾는다니깐,

mysite/polls/templates/vote.html

mysite/polls2/templates/vote.html

이렇게 vote.html을 저장했습니다.

<br>

이 때, 만약 polls2 앱의 vote.html에 접근하고 싶어서

{% highlight python3 %}
return render(request, 'vote.html')
{% endhighlight %}

을 작성했다고 하면, Django는 저 코드를 보고

어디에 있는 vote.html에 접근해야할지 정확히 인지를 못합니다.

(아마 템플릿을 순서대로 뒤지다 제일 먼저 발견된 vote.html에 접근하겠죠)

이런 상황을 방지하기 위해, templates폴더안에 앱이름의 폴더를 한번더 만들고,

그곳에 템플릿을 저장하며

{% highlight python3 %}
return render(request, 'polls2/vote.html')
{% endhighlight %}

라고 코드를 작성하여 접근을 합니다.

<br>

그럼 예를 들어,

polls/templates/polls2/vote.html 은 존재하지 않고

polls2/templates/polls2/vote.html 은 존재하니

개발자가 의도한대로 polls2에 접근을 하게 됩니다.
