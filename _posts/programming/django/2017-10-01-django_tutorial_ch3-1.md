---
layout: post
title:  "[Django tutorial] Ch3-1. 템플릿 상속"
date:   2017-10-01 00:00:00
description: 3-1. Template 상속
categories:
- programming
- django
- web_programmig
banner_image: /programming/django/python-django-logo.jpg
comments: true
---

간단한 Poll(투표) 앱 만들어보기 - Extends Template

---

## 템플릿(Template) 상속이란?

<br>

예를 들어 지금 이 블로그 홈페이지를 살펴봅시다.

여러분이 어떤 포스트를 보든 간에,

빨간 네모로 둘러쌓인 부분은 항상 존재하는 부분입니다.

![1.blog_screenshot](http://drive.google.com/uc?export=view&id=1CPcF2e_-eP9V8-uuPeC0GzZBxoKyuymr)

이 항상 존재하는 부분을 매번 포스트를 작성할 때마다 작성해줘야할까요?

그보다는 항상 존재하는 부분을 따로 부모 템플릿으로 작성하고,

포스트 템플릿에서는 부모 템플릿을 상속받아 쓰면(가져다 쓰면) 될 것입니다.

그럼 직접 부모 템플릿과 자식템플릿을 작성해 보겠습니다.

<br>

먼저 부모 템플릿인 'base.html'을 작성해보겠습니다.

>mysite/polls/templates/base.html
{% highlight jinja %}
{% raw %}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{% block title %}title of base html{% endblock %}</title>
</head>
<body>
    <div id="sidebar">
        {% block sidebar %}
        <ul>
            <li><a href="/polls/">Select question</a></li>
            <li><a href="/polls/1/results/">Result of question that has id value as 1</a></li>
        </ul>
        {% endblock%}
    </div>

    <div id="content">
        {% block content %}
        content of base.html!
        {% endblock %}
    </div>
</body>
</html>
{% endraw %}
{% endhighlight %}

{% raw %}
코드 중간중간에 {% block %} {% endblock %} 이 보이시나요?

이점 기억하면서 자식 템플릿을 작성하겠습니다.

base.html의 저장위치에 대한건 좀 이따 설명드리겠습니다.

<br>
{% endraw %}

>mysite/polls/templates/polls/child_template.html
{% highlight jinja %}
{% raw %}
{% extends 'base.html' %}

{% block title %}
title of child_template in polls APP
{% endblock %}

{% block content %}
content of child_template in polls APP
{% endblock %}
{% endraw %}
{% endhighlight %}

자식 코드 설명을 먼저 하겠습니다.

항상 템플릿은 다른 템플릿을 상속받을 때는

extends명령어를 코드 제일 위에 작성해야합니다.

여기서는 그냥 'base.html'을 extends하겠다고 했는데요

그럼 별도의 설정이 없으면 장고는 예전에 django-tutorial 2-3에서 언급했듯이,

모든 앱의 /template/ 경로를 뒤지며 base.html를 찾습니다.

여기선 polls/templates/base.html이 있어서 이게 선택이 된거죠

사실 2-3에서 언급했던 것과 같은 이유로, 이런 경로로 상속받는 건 좋지 않으므로,

**덧붙이는말**에서 바꿔보겠습니다.**(중요)**

<br>

그리고 이후의 코드를 살펴보면, base.html에서 block으로 처리했던 부분만

다시 써서 그 안의 내용을 바꿔주는 걸 볼 수 있습니다.

그럼 실제로 어떻게 나오는지 살펴볼까요

<br>

그전에 먼저 이 child_template을 url연결 시켜줘야 확인할 수 있겠죠

polls/urls.py에 가서 다음 코드를 추가해줍니다.

>mysite/polls/urls.py
{% highlight python %}
from django.views.generic import TemplateView


urlpatterns = [
    url(r'^template-extends/$', TemplateView.as_view(template_name='polls/child_template.html')),
]
{% endhighlight %}

import 받아서 사용하고 있는 TemplateView 클래스는

위에서 보는바와 같이 views.py를 안거치고

바로 해당 url을 특정 템플릿에 연결할 수 있습니다.

지금 저희가 확인하고자 하는 child_template 템플릿도

views.py에서 처리할게 없기때문에

이렇게 TemplateView를 사용하여 처리하였습니다.

<br>

이제 runserver로 로컬서버를 켜고, 인터넷 브라우저 주소창에

>localhost:8000/polls/template-extends

를 입력하면 다음과 같이 화면이 뜹니다.

![2.screen_of_child_template](http://drive.google.com/uc?export=view&id=1vYq1sjAeINEYymr5b5LE_QcL7AEwsAOa)

{% raw %}

{% block sidebar %} 부분은 child_template에서 고친게 없기 때문에, 상속받은 그대로

base.html의 내용이 나오는 걸 볼 수 있습니다.

<br>

또한, {% block title %}과 {% block content %}부분은 child_template에서 수정한 대로

child_template에서 작성했던 내용이 나오는 걸 볼 수 있습니다.

<br>

**즉, 상속이란 부모 템플릿의 내용을 그대로 사용하되,**

**바꾸고 싶은 {% block %} 부분 자식 템플릿에서 그 내용을 바꾸면서 사용하는 것입니다.**

<br>

마지막으로 코드보기(소스보기)를 통해 코드가 어떻게 나오는지 살펴보며 마무리 짓겠습니다.

(아마 윈도우에서는 Ctrl+U 가 단축키일 겁니다.)

{% endraw %}

{% highlight html %}

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>
title of child_template in polls APP
</title>
</head>
<body>
    <div id="sidebar">

        <ul>
            <li><a href="/polls/">Select question</a></li>
            <li><a href="/polls/1/results/">Result of question that has id value as 1</a></li>
        </ul>

    </div>

    <div id="content">

content of child_template in polls APP

    </div>
</body>
</html>

{% endhighlight %}


<br><br>

## 덧붙이는 말

### 부모 템플릿의 위치

작명은 자유지만, 보통 부모템플릿은 base.html으로 이름짓습니다.

부모템플릿은 크게 두 종류로 나뉠 수 있습니다.

<br>

### 1. 프로젝트 전체에서 사용하는 부모 템플릿

<br>

제 블로그에서 예를 들면 아까 위에 있던 블로그 이미지에서

항상 나오는 빨간 네모안의 부분입니다.

그 부분들은 home, about me, 각종 포스트 등 어디들 들어가든

항상 존재하는 부분입니다.

이런 부모 템플릿은 보통 mysite/templates/ 와 같이,

프로젝트 폴더에 templates라는 폴더를 만들어서 거기에 저장합니다.

<br>

그리고 자식템플릿에서는

{% highlight jinja %}
{% raw %}
{% extends 'base.html' %}
{% endraw %}
{% endhighlight %}

와 같이 extends를 해줍니다.

<br>

이제 우리가 저장한 mysite/templates/base.html를 찾도록 설정해줘야합니다.

django 2-3에서 설명했다시피, 저렇게 extends를 해놓으면

django는 DIRS를 뒤진 후, INSTALLEDAPPS에 등록된 순서대로 templates폴더를 뒤질 것입니다.

즉, 제일 처음 뒤지는 DIRS의 경로를 mysite/templates 로 설정해놓으면 된다는 거죠

<br>

mysite/mysite/settings.py에 들어가서 TEMPLATES의 안에 DIRS를 찾아

>'DIRS': [os.path.join(BASE_DIR, 'templates')],

이렇게 입력해줍니다.

![3.settings_templates](http://drive.google.com/uc?export=view&id=1KGDUfSIDRKC7HbBaCdcAIrazNJ3Z1WpY)

os.path.join은 경로를 만들어주는 함수인데,

BASE_DIR은 settings.py 코드 위쪽에 정의되어 있고,

여기다 'templates'만 덧붙인 것입니다.

이제 다시 자식템플릿(여기서는 mysite/polls/templates/polls/child_templates.html)에 접속해보면

부모템플릿이 잘 상속된 걸 볼 수 있습니다.

<br>

### 2. 앱에서만 사용하는 부모 템플릿

제 블로그에서 예를 들면,

제 블로그의 포스트 글을 보면 이미지, 제목, 날짜, 설명

순으로 형식이 정해져서 나옵니다.

하지만 About me를 살펴보면 이와 다른 형식으로 글이 나옵니다.

즉, 각각의 앱에서만 사용하는 부모템플릿이 있는데

이걸 앱에서만 사용하는 base.html이라고 말합니다.

이 경우엔, views.py에서 render함수에서 템플릿에 연결하는 방식과 마찬가지로

자식템플릿에서는

{% highlight jinja %}
{% raw %}
{% extends 'polls/base.html' %}
{% endraw %}
{% endhighlight %}

과 같이 '앱이름/base.html'을 extends하고

base.html을 mysite/polls/templates/polls/ 와 같이

각 앱의 템플릿 저장소에 저장하면 됩니다.


