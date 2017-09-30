---
layout: post
title:  "[Django tutorial] Ch2-2. 간단한 Poll(투표) 앱 만들어보기 - 앱 생성 & 모델만들기"
date:   2017-09-22 22:00:00
description: 2-2. 앱 생성 & 모델만들기
categories:
- programming
- django
- web_programmig
banner_image: /programming/django/python-django-logo.jpg
comments: true
---

간단한 Poll(투표) 앱 만들어보기 - 앱 생성 & 모델만들기

---

## 1. 앱 생성

<br>

앱을 만들기 위해서는 ch1-2 에서 만들었던 가상환경에 들어가고,

manage.py를 사용하기 위해 경로를 프로젝트 최상위 디렉토리로 이동합니다.

여기서는 최상위 디렉토리가 mysite 폴더가 되겠습니다. 여기서

{% highlight bash %}
$ python manage.py startapp polls
{% endhighlight %}

를 입력하여 polls 앱 생성합니다. 물론 폴더 형태로 나타납니다.

![startapp](/assets/images/programming/django/web_programming_2-2/startapp.png)

새로 만든 polls 앱폴더를 들어가보면

admin.py, apps.py, models.py, views.py 등등 여러 python파일들이 보입니다.

일단 새로 앱을 만든 후, 해야할 일은 다음과 같습니다.

> a. INSTALLED_APPS에 새로 만든 앱 추가 <br>
b. migration

<br>

### a. INSTALLED_APPS에 새로 만든 앱 추가

<br>

간단히 말하면 프로젝트 디렉토리에 있는 settings.py 에서 코드를 추가하는 겁니다.

코드를 수정하는 방법이 여러가지가 있지만,

여기서는 pycharm이라는 에디터를 사용하겠습니다.

[파이참 홈페이지](https://www.jetbrains.com/pycharm/)에 가셔서, 자신의 OS에 맞는

pycharm community version(무료)을 설치하면 됩니다.

<br>

파이참을 처음에 실행하면 다음과 같은 화면이 나오는데,

![pycharm_first](/assets/images/programming/django/web_programming_2-2/pycharm_first.png)

(윈도우는 살짝 화면이 다를 수 있습니다.)

Open을 눌러 프로젝트 폴더를 선택하시면 됩니다. 여기서는 mysite 폴더가 되겠죠

그 후, 프로젝트 폴더내에서 settings.py 파일을 찾고,

그 안에 INSTALLED_APPS 에 새로 생성한 앱 이름을 다음과 같이 추가하시면 됩니다.

![installed_apps](/assets/images/programming/django/web_programming_2-2/installed_apps.png)

### b. migrations

Django에서는 새로 앱을 생성하거나 Model을 생성/수정/삭제 했을 때,

migration을 해야합니다.

migration은 데이터베이스의 변경사항을

기록(makemigrations) / 적용(migrate)하는 두단계로 나누어집니다.

명령어는 다음과 같습니다.

{% highlight bash %}
$ python manage.py makemigrations
$ python manage.py migrate
{% endhighlight %}

저희도 polls란 앱을 새로 생성했으니 다음과 같이 migration 을 합니다.

![total_migrate](/assets/images/programming/django/web_programming_2-2/total_migrate.png)

<br>

## 2. Model 생성

<br>

이제 ch2-1에서 기획했던 Question 과 Choice 모델을 생성할 차례입니다.

pycharm에서 polls폴더에 models.py를 찾아 열어보면 다음과 같이 빨간 줄이 나옵니다.

![pycharm_red_line](/assets/images/programming/django/web_programming_2-2/pycharm_red_line.png)

잘 보면 django 라는 코드가 오류가 나있는데, 이는 Django가 설치가 안되있기 때문입니다.

저희는 django 를 가상환경에만 설치를 했기 때문에, 이 가상환경을 연결해줘야 합니다.

가상환경 연결을 위해서 Preferences나 Settings에 들어가 Project Interpreter에 들어갑니다.

![pycharm_interpreter](/assets/images/programming/django/web_programming_2-2/pycharm_interpreter.png)

현재 기본 python 인 python3.4 와 연결되있는 걸 볼 수 있습니다.

우측 상단에 톱니바퀴 버튼을 클릭하고 Add Local 을 선택합니다.

![pycharm_interpreter_addLocal](/assets/images/programming/django/web_programming_2-2/pycharm_interpreter_addLocal.png)

여기서 저희가 설치한 가상환경 폴더 내에서 python 파일을 선택합니다.

(윈도우와 경로가 다를 수 있습니다. 파일을 비교해가며 잘 찾아보세요)

![pycharm_interpreter_choice](/assets/images/programming/django/web_programming_2-2/pycharm_interpreter_choice.png)

그럼 이제 Project Interpreter가 저희가 선택한 가상환경으로 바뀐 걸 볼 수 있고,

django를 포함하여 해당 가상환경에 설치된 패키지들을 볼 수 있습니다.

![pycharm_after_choice_interpreter](/assets/images/programming/django/web_programming_2-2/pycharm_after_choice_interpreter.png)

코드에 빨간 줄이 없어진 걸 확인한 후, models.py에 Question과 Choice 모델을 다음과 같이 만들어 줍니다.

![models](/assets/images/programming/django/web_programming_2-2/models.png)

코드를 간단히 설명하자면,

> **verbose_name**
- 해당 필드의 이름 역할을 합니다.
- 이따 데이터를 입력할 때 보게 됩니다.
- 필수사항은 아닙니다.

> **pub_date**
- django에서 시간형식인 DateTimeField입니다.
- auto_now_add=True로 설정하면, 데이터가 새로 생성될 때 자동으로 현재 시간이 저장됩니다.

> **question**
- Choice테이블의 FK(ForeignKey)입니다.
- Choice테이블의 데이터는 question필드를 통해 Question테이블과 연결되어 있습니다.
- Choice테이블의 데이터는 question필드를 통해 Question테이블에 접근할 수 있습니다.
- 자세한건 데이터를 입력할 때, 볼 수 있습니다.

> **votes**
- default=0 으로 설정함으로써, 데이터가 생성될 때 임의로 값을 지정해주지 않으면 자동으로 0값이 저장됩니다. (보기니까 당연히 0부터 시작해야겠죠)

> **__str__**
- 데이터 객체를 읽을 때, 나오는 이름을 정해줍니다.
- 자세한건 데이터를 입력할 때, 볼 수 있습니다.

<br>

이제 Models.py내에서 변경사항(새로 생성)이 있었으니, migration작업을 해줍니다.

![migration_model](/assets/images/programming/django/web_programming_2-2/migration_model.png)

자세히 보면 이번에는

{% highlight bash %}
$ python manage.py makemigrations polls
$ python manage.py migrate polls
{% endhighlight %}

와 같이 명령어 뒤에 polls라고 앱 이름까지 써줬습니다.

명령에 뒤에 앱 이름을 쓰면 해당 앱의 Models.py만 검사하고,

아무것도 안쓰면 프로젝트 내의 모든 앱의 Models.py를 검사합니다.

지금은 프로젝트 내에 polls라는 앱 하나만 있기 때문에 상관없지만

여러개의 앱이 존재할 때, 변경하고 싶은 앱만 반영하고 싶을 때 이렇게 사용합니다.

(실제로 이 방법을 더 추천합니다...)

또한 makemigrations를 한 후, 터미널을 살펴보면

{% highlight bash %}
polls/migrations/0001_initial.py
{% endhighlight %}

를 볼 수 있습니다. 실제로 polls/migrations 폴더를 살펴보면

다음과 같이 0001_initial.py 파일이 생성된 걸 볼 수 있습니다.

![migrations_file](/assets/images/programming/django/web_programming_2-2/migrations_file.png)

이 파일을 손댈 껀 없고,

우리가 models.py에서 테이블(모델)을 설계한 후, makemigrations를 하면

설계한 대로 django가 알아서 데이터베이스를 만드는 코드(0001_initial.py)를 작성해주고,

migrate 하면 이 코드를 토대로, 실제 DB에 반영된다는 걸 기억하면 됩니다.


<br>

이제 만든 모델에 실제로 데이터를 넣어봅시다.

데이터 관리는

http://127.0.0.1:8000/admin/

에서 할 수 있습니다.

그런데 접속해보면 다음과 같이 로그인을 하라고 나옵니다.

![admin_require_sign_up](/assets/images/programming/django/web_programming_2-2/admin_require_sign_up.png)

즉, 데이터베이스에 접근하려면 관리자계정인 superuser 계정이 있어야합니다.

잠시 터미널에서 CONTROL-C를 눌러 로컬서버를 종료한 후에,

{% highlight bash %}
$ python manage.py createsuperuser
{% endhighlight %}

명령어를 통해, 다음과 같이 superuser 계정을 만든 뒤, 다시 로컬 서버를 킵니다.

![create_superuser2](/assets/images/programming/django/web_programming_2-2/create_superuser2.png)

다시 admin 페이지(http://127.0.0.1:8000/admin/) 에 접속하여

방금 만든 계정으로 로그인 하면..

![login_admin_no_model](/assets/images/programming/django/web_programming_2-2/login_admin_no_model.png)

우리가 만든 Question과 Choice모델이 나오지 않습니다...

따로 설정을 해줘야하는데요,

다음과 같이 polls/admin.py에 Question과 Choice를 추가해줍니다.

![admin_py_first](/assets/images/programming/django/web_programming_2-2/admin_py_first.png)

admin페이지를 새로고침 해보면, 이제 우리가 만든 Question과 Choice모델이 나옵니다.

![admin_add_model](/assets/images/programming/django/web_programming_2-2/admin_add_model.png)

Question을 클릭해보면... 아직 아무 데이터도 입력을 안했기 때문에 아무것도 안뜹니다.

![admin_question_list](/assets/images/programming/django/web_programming_2-2/admin_question_list.png)

우측 상단에 ADD QUESTION 버튼을 눌러 질문 데이터를 새로 생성해 줍니다.

![admin_input_question](/assets/images/programming/django/web_programming_2-2/admin_input_question.png)

'질문 내용' 이라고 나오는게

아까 Models.py에서 입력했던 question_text필드의 verbose_name입니다.

즉, '질문 내용'란에 데이터를 입력하면 그건,

question_text 필드에 데이터를 입력하는 겁니다.

<br>

근데, Question모델에 분명 pub_date를 넣었는데, 보이질 않네요...

pub_date를 auto_now_add=True로 설정했고,

따로 수정기능을 활성화 시키지 않았기 때문에,

자동생성&수정불가라서 안보이는건데

이따 보이도록 수정해보겠습니다.

<br>

일단 'What is your hobby?'를 입력 후, SAVE를 누르면...

![admin_after_add_question1](/assets/images/programming/django/web_programming_2-2/admin_after_add_question1.png)

Question모델에 'What is your hobby?'라는 새 데이터가 생성되었습니다.

만든 데이터를 다시 클릭해보면 해당 데이터의 정보가 나오는데요,

여전히 pub_date가 안나옵니다.

<br>

pycharm으로 돌아가 polls/admin.py에서 다음과 같이 코드를 추가해줍니다.

![admin_py_add_pub_date](/assets/images/programming/django/web_programming_2-2/admin_py_add_pub_date.png)

field를 통해 보고싶은 필드 정보를 넣습니다.

pub_date필드는 수정가능하도록 설정을 안해놨기 때문에 readonly_field에도 넣어줍니다.

DateTimeField도 수정가능하도록 설정할 수 있지만... 그건 다음에...

<br>

이제 다시 데이터를 클릭하면 pub_date가 보입니다.

![admin_display_pub_date](/assets/images/programming/django/web_programming_2-2/admin_display_pub_date.png)

pub_date의 verbose_name인 '질문 생성 시각'으로 보이네요

<br>

같은 방법으로 다음과 같이 Question 데이터를 2개 더 추가해줍니다.

![admin_add_3questions](/assets/images/programming/django/web_programming_2-2/admin_add_3questions.png)

그런데 여기서 하나 눈여겨 볼 건, 데이터들이 question_text 필드로 보인다는 겁니다.

이유는 models.py에서 __str__을 question_text로 설정해놨기 때문입니다.

pub_date로 했으면 질문 내용이 아니라 시간으로 데이터들이 나왔겠죠

<br>

다음으로, Choice를 클릭하여 입력페이지로 들어가봅니다.

![admin_add_choice](/assets/images/programming/django/web_programming_2-2/admin_add_choice.png)

일단 question과 votes필드는 verbose_name을 지정해주지 않았기때문에,

필드명 그대로 나오는 걸 볼 수 있습니다.

다만 첫글자 스펠링이 Uppercase로 나오네요..

<br>

또한 question필드는 Question모델에 연결하는 FK(ForeignKey)이기 때문에,

Question모델의 데이터 중에 하나를 선택하도록 나옵니다.

일단 다음과 같이 9개의 Choice모델의 데이터를 추가했습니다.

![admin_choice_basic](/assets/images/programming/django/web_programming_2-2/admin_choice_basic.png)

그런데... 무슨 질문에 대한 보기인지 안나오기 때문에 답답합니다.

데이터 리스트 페이지에 보이는 필드를 수정하기 위해 polls/amdin.py 에 가서 다음과 같이 코드를 추가해줍니다.

![admin_py_add_list_display](/assets/images/programming/django/web_programming_2-2/admin_py_add_list_display.png)

list_display 변수에 보이고 싶은 필드를 리스트 형태로 추가하면 됩니다.

그리고 다시 admin페이지를 새로고침하면

![admin_after_add_all_choices](/assets/images/programming/django/web_programming_2-2/admin_after_add_all_choices.png)

어느 질문에 대한 보기이고 투표수는 얼마나 되는지 한번에 볼 수 있네요.


<br><br>

여기까지 앱 생성과 모델 생성을 해보았습니다.

다음 챕터에서는 화면(Template) 코딩을 해보겠습니다.

<br>

### 덧붙이는 말
<br>

이번 글 엄청 길다...

시간이 오래걸려따