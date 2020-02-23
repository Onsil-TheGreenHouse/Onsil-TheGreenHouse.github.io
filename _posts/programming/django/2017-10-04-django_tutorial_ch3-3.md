---
layout: post
title:  "[Django tutorial] Ch3-3. 클래스 뷰 적용하여 새 앱(books) 만들기"
date:   2017-10-04 13:50:00
description: 3-3. Django의 Class View
categories:
- programming
- django
- web_programmig
banner_image: /programming/django/python-django-logo.jpg
comments: true
---

클래스 뷰를 이용하여 새 앱(books) 만들기 (긴글 주의)

---

## 클래스 뷰(Class-Based View)란?

<br>

우리는 앞에서 polls앱을 만들 때, 함수형 뷰를 사용했습니다.

polls/views.py에서 모두 함수(def)를 사용했죠

사실 뷰를 모두 함수로 해결해도 되지만,

로직이 복잡해지고 프로젝트가 커질수록 클래스형 뷰의 장점이 효과를 발휘합니다.

다음은 클래스형 뷰의 장점입니다.

>1. GET, POST 등의 HTTP 메소드에 따른 처리 기능을 코딩할 때, if 함수를 사용하지 않고 메소드명으로 구분할 수 있어, 코드 구조가 깔끔해집니다.
2. 다중 상속과 같은 객체 지향 기술이 가능하게하여 코드의 재사용성이나 개발 생산성을 획기적으로 높여줍니다.

장점이 어렵게 설명되어, 이해가 잘 안갈 수 있습니다.(바로 제가...)

하지만 장점을 먼저 거론하지 않으면, 클래스형 뷰를 소개할 명분이 없기 떄문에...

![0.no_reason](http://drive.google.com/uc?export=view&id=13_VrKyGjfjzvn0TbdyiLU5xylrJEGqa4)

실제로 코딩하면서 장점에 대해 설명하도록 하겠습니다.

<br>

이번 챕터에선 복습도 할겸, 새로 books란 앱을 생성하도록 하겠습니다.

UI는 다음과 같이 기획했습니다.

![1.UI](http://drive.google.com/uc?export=view&id=1-eWIZris4jZK3PWAuwHYy8lPutjRn-WY)

index.html에서는 그림과 같이 3개의 항목이 있고, 각 항목을 클릭하면

해당 항목에 등록된 리스트가 나옵니다.

<br>

예를 들어 Book을 클릭하면 등록된 Book 리스트가 book_list.html에 뜹니다.

여기서 또 특정 책을 클릭하면, 그 책에 대한 상세 정보가 book_detail.html에 뜹니다.

<br>

Author을 클릭하면 등록된 Author 리스트가 author_list.html에 뜹니다.

여기서 또 특정 저자를 클릭하면, 그 저자에 대한 상세정보가 author_detail.html에 뜹니다.

<br>

Publisher를 클릭하면 등록된 Publisher 리스트가 publisher_list.html에 뜹니다.

여기서 또 특정 출판사를 클릭하면, 그 출판사에 대한 상세정보가 publisher_detail.html에 뜹니다.

<br>

즉, 총 7개의 템플릿이 필요합니다.

첫페이지인 index.html

Book 리스트를 보여주는 book_list.html

Book의 상세정보를 보여주는 book_detail.html

Author 리스트를 보여주는 author_list.html

Author 상세정보를 보여주는 author_detail.html

Publisher 리스트를 보여주는 publisher_list.html

Publisher 상세정보를 보여주는 publisher_detail.html

<br>

여기다 추가로, 모든 페이지에서 항상 보여줄 메뉴바가 포함된 부모페이지인..

프로젝트용 base1.html (ch3-2에서 이미 base.html이란 이름을 써버려서..)와

<br>

언제든 books앱 페이지 처음으로 돌아갈 링크가 포함된 부모페이지인

books앱용 base_books.html

<br>

이제 모델을 기획해봅시다.

일단 Book, Author, Publisher 이렇게 3개의 테이블이 있어야합니다.

Book테이블에는 책이름, 저자, 출판사, 출판일 필드가 들어가면 되겠군요

Author테이블에는 이름, 인사말, 이메일 필드를 넣어보겠습니다.

Publisher테이블에는 출판사명, 건물주소, 웹사이트 주소 필드를 넣겠습니다.

<br>

이제 코딩을 시작해보도록 하겠습니다.

먼저 가상환경에 접속 후, 프로젝트 디렉토리에서 books앱을 생성해줍니다.

{% highlight bash %}
$ python manage.py startapp books
{% endhighlight %}

그 다음 mysite/mysite/settings.py에서 INSTALLED_APPS에 'books'를 추가해줍니다.

![2.installed_apps](http://drive.google.com/uc?export=view&id=1YUGKAKnzPJEh2fp5ETi4yYdl-iJCLUY4)

기획했던 대로 모델도 생성해줍니다.

>mysite/books/models.py
{% highlight python %}
from django.db import models

# Create your models here.


class Book(models.Model):
    title = models.CharField(max_length=100, verbose_name='책 제목')
    # ManyToManyField는 다대다 FK관계일 때 쓰인다.
    authors = models.ManyToManyField('Author', verbose_name='저자')
    publisher = models.ForeignKey('Publisher', verbose_name='출판사')
    publication_date = models.DateField(verbose_name='출판날짜')

    def __str__(self):
        return self.title


class Author(models.Model):
    salutation = models.CharField(max_length=100, verbose_name='인사말')
    name = models.CharField(max_length=50, verbose_name='이름')
    email = models.EmailField(verbose_name='이메일 주소')

    def __str__(self):
        return self.name


class Publisher(models.Model):
    name = models.CharField(max_length=50, verbose_name='출판사명')
    address = models.CharField(max_length=100, verbose_name='출판사 주소')
    website = models.URLField(verbose_name='출판사 사이트')

    def __str__(self):
        return self.name
{% endhighlight %}

<br>

관리자 페이지에서 데이터에 접근할 수 있도록 admin.py도 손봐줍니다.

>mysite/books/admin.py
{% highlight python %}
from django.contrib import admin
from books.models import Book, Publisher, Author

# Register your models here.


admin.site.register(Book)
admin.site.register(Publisher)
admin.site.register(Author)
{% endhighlight %}

<br>

만든 모델을 적용시키기 위해 마이그레이션 작업을 진행합니다.

{% highlight bash %}
$ python manage.py makemigrations books
$ python manage.py migrate books
{% endhighlight %}

<br>

실습을 하면서 바로바로 결과를 볼 수 있도록 데이터를 먼저 입력해주겠습니다.

localhost:8000/admin 으로 접속 후, 다음과 같이 데이터를 입력해줍니다.

book데이터는 author와 publisher를 FK로 가지므로 제일 나중에 입력해줍니다.

![img_author](http://drive.google.com/uc?export=view&id=1izVFXnRrB8M0CvXreWYx1D3-i3SOKu8G)
![img_publisher](http://drive.google.com/uc?export=view&id=1AdKxJMFSDZTEJWfx3O7ZSi3MBZaYXt14)
![img_book](http://drive.google.com/uc?export=view&id=1kMZZP4J8ZfmbVi25BHM0qlUwp5YdDmzc)

book 데이터를 만들 때, author필드는 ManyToMany므로 다음과 같이 여러개 선택할 수 있습니다.

![img_book_data](http://drive.google.com/uc?export=view&id=1m9agBgnkhX-46-yFVhIyQovo43MrA432)

<br>

이제 URL을 만들 시간입니다.

먼저 polls와 마찬가지로 /books/로 접근하는 URL은 해당 앱의 urls.py로 넘기기위해

다음을 추가해줍니다.

>mysite/mysite/urls.py
{% highlight python %}
urlpatterns = [
    url(r'^books/', include('books.urls', namespace='books')),
]
{% endhighlight %}

<br>

그리고 저기서 넘긴 URL을 받아 처리하기 위해, 새로 books/urls.py를 만들고

다음을 입력해줍니다.

>mysite/books/urls.py
{% highlight python %}
from django.conf.urls import url
from books import views

urlpatterns = [
    url(r'^$', views.BooksModelView.as_view(), name='index'),

    url(r'^book/$', views.BookList.as_view(), name='book_list'),
    url(r'^author/$', views.AuthorList.as_view(), name='author_list'),
    url(r'^publisher/$', views.PublisherList.as_view(), name='publisher_list'),

    url(r'^book/(?P<book_id>\d+)/$', views.BookDetail.as_view(), name='book_detail'),
    url(r'^author/(?P<author_id>\d+)/$', views.AuthorDetail.as_view(), name='author_detail'),
    url(r'^publisher/(?P<publisher_id>\d+)/$', views.PublisherDetail.as_view(), name='publisher_detail'),
]
{% endhighlight %}

여기서부터 클래스 뷰의 시작입니다!

전에 polls앱에서의 url과는 달리 .as_view() 라는게 붙어있는데요,

이게 클래스 뷰를 처리하겠다는 의미입니다.

즉, 첫번째 url을 예로 들면, BooksModelView는 클래스이며,

그렇기 때문에 이름이 파스칼 표기법을 따르고 있습니다.

(파스칼 표기법: 대문자로 시작, 새로운 단어의 시작은 대문자로 시작하는 표기법)

<br>

이제 부모 템플릿을 만들어보겠습니다.

먼저 프로젝트 base1.html 템플릿을 작성하겠습니다.

>mysite/templates/base1.html
{% highlight jinja %}
{% raw %}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{% block title %}My Amazing Site{% endblock %}</title>
</head>
<body>
    <div id="sidebar">
        {% block sidebar %}
        <ul>
            <li><a href="/">Project_Home</a></li>
            <li><a href="/admin/">Admin</a></li>
        </ul>
        {% endblock %}
        <br>
    </div>

    <div id="content">
        {% block content %}{% endblock %}
    </div>
</body>
</html>
{% endraw %}
{% endhighlight %}

코드를 보면 알겠지만, Project_Home과 Admin이라는 링크를 작성했습니다.

이제 저 base1.html을 상속받는(extends) 모든 페이지에는, 저 두 링크가 보일 것입니다.

<br>

또, books앱의 템플릿에서만 상속할 base_books.html도 만들어줍니다.
{% highlight jinja %}
{% raw %}
{% extends 'base1.html' %}

{% block title %}Books Application Site{% endblock %}

{% block sidebar %}
{{ block.super }}
<ul>
    <li><a href="/books/">Books_Home</a></li>
</ul>
{% endblock %}
{% endraw %}
{% endhighlight %}

아까 만든 base1.html을 상속받고 있습니다.

ch3-2에서 배운것 처럼 상속받은 템플릿의 block 부분만 다시 채우고 있습니다.

{% raw %}
근데 sidebar 부분에 {{ block.super }}가 보입니다.

원래 block 사이에 다른 코드를 작성하면 상속받은 템플릿의 블록부분은 무시되는데

저렇게 super를 사용하면 상속받은 템플릿의 해당 블록 부분까지 그대로 상속받으면서

코드를 추가 할 수 있습니다.

즉, base_books.html을 상속받는 템플릿의 {% block sidebar %} 부분의 링크는

총 3개가 되겠지요. (Project_Home, Admin, Books_Home)
{% endraw %}

<br>

그 다음에 먼저 view를 작성해보겠습니다.

일단 한꺼번에 7개의 템플릿에 대한 뷰 클래스를 작성하겠습니다.

>mysite/books/views.py
{% highlight python %}
from django.shortcuts import render
from django.views.generic.base import TemplateView
from django.views.generic import ListView, DetailView
from books.models import Book, Author, Publisher


# --- TemplateView
class BooksModelView(TemplateView):
    template_name = 'books/index.html'

    def get_context_data(self, **kwargs):
        context = super(BooksModelView, self).get_context_data(**kwargs)
        context['object_list'] = ['Book', 'Author', 'Publisher']
        return context


# --- ListView
class BookList(ListView):
    model = Book


class AuthorList(ListView):
    model = Author


class PublisherList(ListView):
    model = Publisher


# --- DetailView
class BookDetail(DetailView):
    model = Book


class AuthorDetail(DetailView):
    model = Author


class PublisherDetail(DetailView):
    model = Publisher
{% endhighlight %}

먼저 ListView 3개에 대해 설명드리겠습니다.

코드가 굉장히 간단한데요, 예를 들어

{% highlight python %}
class BookList(ListView):
    model = Book
{% endhighlight %}
은
{% highlight python %}
def book_list(request):
    book = Book.objects.all()
    context = {'object_list': book}

    return render(request, 'books/book_list.html', context)
{% endhighlight %}
와 같은 의미입니다.

즉, ListView를 사용하면,

>model = 모델명

이 한줄을 통해, context에 'object_list'를 모델객체 리스트로 만들어서

모델명(소문자화)_list.html 템플릿을 찾아 넘겨주게 됩니다.

코드가 엄청 간단해지게 되죠.

참고로 model = Book 이었으므로, 템플릿에선

'object_list'대신에 'book_list'로도 접근할 수 있습니다.

<br>

그 다음, DetailView에 대해서 설명드리면,
{% highlight python %}
class BookDetail(DetailView):
    model = Book
{% endhighlight %}
는
{% highlight python %}
def book_detail(request):
    book = Book.objects.get(pk=pk)
    context = {'object': book}

    return render(request, 'books/book_detail.html', context)
{% endhighlight %}
와 같습니다.

아까 books/urls.py를 보면 DetailView로 연결되는 url은

모두 pk를 파라미터로 받았습니다.

pk는 primary key의 약자로 별다른 설정을 하지 않으면,

그냥 테이블에 데이터가 추가될 때마다 자동으로 생성되고 증가되는 id값 입니다.

참고로 DetailView가 받을 수 있는 파라미터는 pk와 slug(덧붙이는 말 참고) 뿐입니다.

<br>

이렇게 url을 통해 받은 pk값에 해당하는 데이터 객체를 context를 통해

'object'에 담고, 모델명(소문자화)_detail.html 템플릿을 찾아 넘겨줍니다.

여기서도 model=Book 이었으므로, 템플릿에선

'object'대신에 'book'으로도 접근 가능합니다.

<br>

마지막으로, TemplateView에 대해서 알아보겠습니다.

TemplateView는 저번에 ch3-1에서 사용해본적 있습니다.

넘겨줄 파라미터가 없어서 views.py를 거치지 않고,

바로 목표로하는 템플릿으로 이동할 때 사용했었습니다.

원래 그런 용도로 사용하는 거긴 하지만, 넘겨줄 파라미터가 존재할 땐

클래스 안에 get_context_data 메소드를 추가해(오버라이딩해서) 위의 코드와 같이 추가시키면 됩니다.

이때는 꼭 super()메소드를 이용해 자기자신의 context를 상속받아야합니다.

(사실 TemplateView를 사용하면, 템플릿에 아무것도 안넘기는게 아니라 자기자신 뷰 클래스 객체를 넘깁니다. context를 출력해보세요!)

context에 파라미터를 추가할 때는 꼭 object_list를 써야하는 건 아닙니다.

저는 통일성을 주려고 쓴거고, 자유롭게 작명하면 됩니다.

<br>

위에 template_name = 'books/index.html'를 정의해

렌더링하고자 하는 템플릿을 지정했습니다.

ListView나 DetailView에서도 template_name를 정의하여

원하는 이름의 템플릿에 렌더링할 수 있습니다.

여기도 함수형 뷰와 비교하자면 이렇습니다.

{% highlight python %}
class BooksModelView(TemplateView):
    template_name = 'books/index.html'

    def get_context_data(self, **kwargs):
        context = super(BooksModelView, self).get_context_data(**kwargs)
        context['object_list'] = ['Book', 'Author', 'Publisher']
        return context
{% endhighlight %}
은
{% highlight python %}
def book_mode_view(request):
    context = {'object_list': ['Book', 'Author', 'Publisher']}

    return render(request, 'books/index.html', context)
{% endhighlight %}
와 같습니다.

이번엔 함수형 뷰가 훨씬 간단하군요.

하지만 로직이 복잡해지면 클래스형 뷰가 훨씬 간단해질 겁니다.

<br>

이제 7개의 템플릿을 한꺼번에 작성해보도록 하겠습니다.

{% raw %}
TemplateView, ListView에서는 {{ object_list }}가,

DetailView에서는 {{ object }}가 쓰임을 주의깊게 보면서 작성해보세요.
{% endraw %}

<br>

>mysite/books/templates/books/index.html
{% highlight jinja %}
{% raw %}
{% extends 'base_books.html' %}

{% block content %}
<h2>Books Management Systemt</h2>
<ul>
    {% for modelname in object_list %}
        {% with 'books:'|add:modelname|lower|add:'_list' as urlvar %}
            <li><a href="{% url urlvar %}">{{ modelname }}</a></li>
        {% endwith %}
    {% endfor %}
</ul>
{% endblock %}
{% endraw %}
{% endhighlight %}

with 라인은 urlvar이라는 변수를 정의합니다.

그럼 endwith까지 urlvar을 사용할 수 있습니다.

<br>

add는 뒤에 덧붙인다는 말이고, lower은 소문자화 한다는 의미입니다.
{% highlight jinja %}
즉, 'books:'|add:modelname|lower|add:'_list'는, modelname이 Book이라면
{% endhighlight %}
'books:book_list'

가 됩니다.

이걸 그 다음줄에 url명령어가 books라는 namespace를 찾고, book_list라는 name을 찾음으로써

'/books/book/' 이라는 링크가 만들어집니다.

(이해가 안되면 django tutorial ch2-4를 참고하세요)

<br>
>mysite/books/templates/books/book_list.html
{% highlight jinja %}
{% raw %}
{% extends 'base_books.html' %}

{% block content %}
<h2>Book List</h2>
<ul>
    {% for book in object_list %}
    <li>
        <a href="{% url 'books:book_detail' book.id %}">{{ book.title }}</a>
    </li>
    {% endfor %}
</ul>
{% endblock %}
{% endraw %}
{% endhighlight %}

<br>
>mysite/books/templates/books/author_list.html
{% highlight jinja %}
{% raw %}
{% extends 'base_books.html' %}

{% block content %}
<h2>Author List</h2>
<ul>
    {% for author in object_list %}
    <li>
        <a href="{% url 'books:author_detail' author.id %}">{{ author.name }}</a>
    </li>
    {% endfor %}
</ul>
{% endblock %}
{% endraw %}
{% endhighlight %}

<br>
>mysite/books/templates/books/publisher_list.html
{% highlight jinja %}
{% raw %}
{% extends 'base_books.html' %}

{% block content %}
<h2>Publisher List</h2>
<ul>
    {% for publisher in object_list %}
    <li>
        <a href="{% url 'books:publisher_detail' publisher.id %}">{{ publisher.name }}</a>
    </li>
    {% endfor %}
</ul>
{% endblock %}
{% endraw %}
{% endhighlight %}

<br>
>mysite/books/templates/books/book_detail.html
{% highlight jinja %}
{% raw %}
{% extends 'base_books.html' %}

{% block content %}
<h1>{{ object.title }}</h1>
<br>
<li>
Authors:
    {% for author in object.authors.all %}
        {{ author }}
        {% if not forloop.last %}
            ,
        {% else %}

        {% endif %}
    {% endfor %}
</li>
<li>Publisher: {{ object.publisher }}</li>
<li>Publication date: {{ object.publication_date }}</li>
{% endblock %}
{% endraw %}
{% endhighlight %}

<br>
>mysite/books/templates/books/author_detail.html
{% highlight jinja %}
{% raw %}
{% extends 'base_books.html' %}

{% block content %}
<h1>{{ object.name }}</h1>
<p>{{ object.salutation }}</p>
<li>Email: {{ object.email }}</li>
{% endblock %}
{% endraw %}
{% endhighlight %}

<br>
>mysite/books/templates/books/publisher_detail.html
{% highlight jinja %}
{% raw %}
{% extends 'base_books.html' %}

{% block content %}
<h1>{{ object.name }}</h1>
<p>{{ object.website }}</p>
<li>Address: {{ object.address }}</li>
{% endblock %}
{% endraw %}
{% endhighlight %}

<br><br>

이렇게 해서 클래스형 뷰 스터디는 마쳤습니다.

로컬 서버를 돌려서 지금까지 만든 걸 확인해볼 수도 있습니다.

(localhost:8000/books 로 접속해서..)

하지만 하나 마무리 지을게 있습니다.

'base1.html'을 다시 봐보면 Project_Home의 링크가

'/'

즉, localhost:8000/

으로 되어 있는데 우린 아직 저 url을 처리해주지 않았습니다.

(지금 클릭하면 오류가 날 것입니다.)

<br>

먼저 첫페이지 UI를 기획해보겠습니다.

![img_first_page](http://drive.google.com/uc?export=view&id=1EVtc1GJyHYWHr_LDCB8BlFWPrdGMh1Sa)

위에 Project_Home과 Admin은 base1.html을 상속해서 나타나는 것이고,

밑에는 지금까지 만들었던 polls와 books 페이지로 연결하는 링크를 만들 것입니다.

<br>

다음으로 url을 설정하겠습니다. 다음을 추가해줍니다.

>mysite/mysite/urls.py
{% highlight python %}
from mysite import views


urlpatterns = [
    url(r'^$', views.HomeView.as_view(), name='home'),
]
{% endhighlight %}

그럼 views에 빨간 줄(에러)이 나올 것입니다.

지금 mysite/mysite/views.py가 없기 때문이죠

직접 생성해서 다음 클래스형 뷰를 적어줍니다.

<br>

>mysite/mysite/views.py
{% highlight python %}
from django.views.generic.base import TemplateView


class HomeView(TemplateView):
    template_name = 'home.html'

    def get_context_data(self, **kwargs):
        context = super(HomeView, self).get_context_data(**kwargs)
        context['apps'] = ['polls', 'books']
        return context
{% endhighlight %}

<br>

자, 이제 home.html을 만들어줄 차례입니다. 근데 그냥 'home.html'이라고 썻네요

그럼 어느 경로에 만들어야할까요?

네, settings.py의 DIRS에 적힌 경로인

>mysite/templates/home.html
{% highlight jinja %}
{% raw %}
{% extends 'base1.html' %}

{% block content %}
<h2>Onsil Django Tutorial</h2>
<ul>
    {% for app in apps %}
        {% with app|add:':'|add:'index' as urlvar %}
        <li>
            <a href="{% url urlvar %}">{{ app }}</a>
        </li>
        {% endwith %}
    {% endfor %}
</ul>
{% endblock %}
{% endraw %}
{% endhighlight %}

mysite/mysite/views.py/HomeView에서 context에 apps로 변수를 넘겨서

여기서도 apps를 사용하는 걸 확인할 수 있습니다.

<br>

자 이제 마무리가 됬습니다.

로컬서버를 켜고, localhost:8000으로 접속해서 지금까지 만든

polls와 books앱을 체험해보세요.

![img_books_complete](http://drive.google.com/uc?export=view&id=1mEUNaTOQhBJ7XLfsU9T7PU8yyWFBOhzY)

<br>


## 덧붙이는 말

### Slug 란?

<br>

짧은 라벨(텍스트)로서, 문자, 숫자, 밑줄 또는 하이픈만을 포함합니다. 일반적으로 URL에 사용됩니다.

<br>

여러분이 예를 들어 어떤 영화의 제목을 포함한 URL을 만들고싶다고 가정해봅시다.

근데 그 영화의 제목이 'Spiderman Homecoming'이었다고 하면

https://example.com/Spiderman Homecoming

이렇게 사용할 수 없습니다.

URL에는 띄어쓰기가 불가능하기 때문이죠. 하지만

https://example.com/spiderman-homecoming

은 가능하죠.

지금은 대문자가 소문자로 바뀌고, 공백(스페이스)가 하이픈(-)으로 대체되었는데요

이걸 Slug라고 합니다.

모델 필드에는 SlugField 도 존재합니다. 예를 들어 이렇게 사용하죠

>slug = models.SlugField(max_length=50, verbose_name='슬러그')