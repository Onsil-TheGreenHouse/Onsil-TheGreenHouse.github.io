---
layout: post
title:  "[Django tutorial] Ch3-5. Log 남기기"
date:   2017-10-05 13:50:00
description: 3-5. Django의 로그 남기기
categories:
- programming
- django
- web_programmig
banner_image: /programming/django/python-django-logo.jpg
comments: true
---

로그 로깅 로거 Log Logging Logger

---

Django tutorial의 마지막으로

로그 남기는걸 스터디해보고자 합니다.

<br>

## 로그(Log) 란?

<br>

혹시 해킹을 할 때, 로그(흔적)를 남기지 말아야 한다는 말 들어봤나요?

로그란 간단히 말해서

애플리케이션의 상태를 관찰할 수 있도록 에플리케이션이 제공하는 정보입니다.

로그에는 다양한 단계의 레벨이 존재하고, 애플리케이션마다 정의된 레벨이 다릅니다.

여기서는 python의 로그 레벨에 대해 알아보겠습니다.

<br>

> #### DEBUG
- 디버그 용도로 사용되는 정보
- 최하위 수준의 로그 레벨
#### INFO
- 일반적이고 보편적인 정보
- 장고의 DEFAULT 값
#### WARNING
- 문제점 중에서 덜 중요한 문제점이 발생 시 이에 대한 정보
#### ERROR
- 주요한 문제점이 발생 시 이에 대한 정보
#### CRITICAL
- 치명적인 문제점 발생 시 이에 대한 정보
- 최상위 수준 로그 레벨

<br>

지금까지 만든 mysite 사이트를 로컬서버를 켜고 들어가서,

polls앱이나 books앱 사이트 여기저기로 접속할 때마다

그림과 같이 콘솔에 로그(기록)이 남는 걸 볼 수 있습니다.

![1.img_console_debug](http://drive.google.com/uc?export=view&id=183f93vfat8HqdcyZdGQ3o8l80vK95xgH)

위에서 설명했듯이 Django는 Default(기본)값으로

INFO 레벨의 로그를 콘솔에 출력합니다.

<br>

물론 기본 설정 외에 추가로 Logging을 추가할 수 있습니다.

일단 로그를 남기기 위해선 settings.py에서 로깅 설정을 해줘야합니다.

다음 코드를 settings.py에 추가해줍니다.

>mysite/mysite/settings.py
{% highlight python %}
# logging
LOGGING = {
    'version': 1,
    # 기존의 로깅 설정을 비활성화 할 것인가?
    'disable_existing_loggers': False,

    # 포맷터
    # 로그 레코드는 최종적으로 텍스트로 표현됨
    # 이 텍스트의 포맷 형식 정의
    # 여러 포맷 정의 가능
    'formatters': {
        'format1': {
            'format': '[%(asctime)s] %(levelname)s [%(name)s:%(lineno)s] %(message)s',
            'datefmt': '%d/%b/%Y %H:%M:%S'
        },
        'format2': {
            'format': '%(levelname)s %(message)s'
        },
    },

    # 핸들러
    # 로그 레코드로 무슨 작업을 할 것인지 정의
    # 여러 핸들러 정의 가능
    'handlers': {
        # 로그 파일을 만들어 텍스트로 로그레코드 저장
        'file': {
            'level': 'DEBUG',
            'class': 'logging.FileHandler',
            'filename': os.path.join(BASE_DIR, 'logs/logfile'),
            'formatter': 'format1',
        },
        # 콘솔(터미널)에 출력
        'console': {
            'level': 'DEBUG',
            'class': 'logging.StreamHandler',
            'formatter': 'format2',
        }
    },

    # 로거
    # 로그 레코드 저장소
    # 로거를 이름별로 정의
    'loggers': {
        'polls': {
            'handlers': ['file'],
            'level': 'DEBUG',
        },
        'books': {
            'handlers': ['console'],
            'level': 'DEBUG',
        }
    },

}
{% endhighlight %}

version은 현재 하나 뿐인데,

1은 dictConfig version 1 이라는 뜻입니다.

나머지는 polls/views.py를 작성한 후, 흐름으로 설명하겠습니다.

<br>

다음 코드를 추가해줍니다.

vote_process 함수에는 기존 코드에

logger.debug부분만 추가해주면 됩니다.

>mysite/polls/views.py
{% highlight python %}
import logging
logger = logging.getLogger(__name__)

def vote_process(request, question_id):
    # 밑의 라인 1줄만 추가하면 됩니다.
    logger.debug('vote().question.id = {}'.format(question_id))
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

일단 logging을 사용하려면

import logging

을 통해 로깅을 임포트 해줘야합니다.

그리고 그 다음 줄에서는 logger를 정의하고 있습니다.

__name__ 부분이 로거의 이름을 정의해주는 곳인데요,

여기는 polls/views.py이기 때문에

__name__은 polls.views 가 됩니다.

(__name__ 을 출력해보세요! 저처럼...)

![3.code_for_print_name](http://drive.google.com/uc?export=view&id=1zzZJ5aTpyzP-3f4S46pgWO0Sk65p_Xwc)
![2.console_print_name](http://drive.google.com/uc?export=view&id=1ZkFZy2xR5CY8EV-GlsAhdqpY7cA_S60i)
그리고 polls앱 페이지에서 투표를 하고 submit을 누르면

vote_process 함수가 실행되면서 logger가 실행됩니다.

logger.debug( )는 DEBUG 레벨의 로그메세지를 생성합니다.

예를 들어, logger.error( )이라 썻으면 ERROR레벨의 로그메세지가 생성되겠죠

<br>

이때 logger의 메세지는 'vote( ).question.id = 2'와 같이 됩니다.

이 메세지는 logger의 이름이 polls.views였기 때문에

아까 settings.py에서 설정했던 대로 logger에 polls로 저장됩니다.

이 저장된 로거를 **로그레코드** 라 부릅니다.

<br>

'polls'로거에 보면 'level'이 정의되어 있습니다.

이것은 'polls'라는 이름을 가진 logger들 중,

로그레벨이 DEBUG이상인 것들만 처리하겠다는 것입니다.

우리가 만든 로거는 logger.debug( )였으니 당연히 해당되겠죠.

<br>

polls의 handler는 'file'로 되어있으니 'handlers'에 정의된대로,

'logging.FileHandler'가 실행됩니다.

근데 'file'에도 'level'이 'DEBUG'로 정의되어 있습니다.

로그레코드가 logger에서 handler로 전달 될 때,

전달된 로그레코드의 레벨이 'DEBUG' 이상이여야 이 핸들러가 작동합니다.

<br>

파일 저장 위치와 이름은 'filename'에서 정의하고

'formatter'는 'format1'으로 정의되어 있습니다.

<br>

이제 포맷터를 정의한 'formatters'에서 'format1'을 찾아봅니다.

>[접근시간] 로그레벨 [로그이름 라인넘버] 로그메세지

형식으로 나오겠네요

접근시간의 형식도 'datefmt'으로 설정되어 있습니다.

<br>

이제 로컬 서버를 켜보면 에러가 날 것입니다.

바로 로그를 저장할 디렉토리가 없기 때문입니다.

설정을

>'filename': os.path.join(BASE_DIR, 'logs/logfile'),

이렇게 해놨으니, mysite(프로젝트 폴더, 최상위 폴더)에 logs 폴더를 만들어줍니다.

![4.mkdir_log](http://drive.google.com/uc?export=view&id=1L0sA7MN5CSj1kNJ3pi1K_zlqrQGFP7t_)

그리고 다시 로컬서버를 켜고, polls앱에서 투표를 몇번 해보세요.

그리고 logs폴더에 logfile파일을 열어보면

![5.logfile](http://drive.google.com/uc?export=view&id=14aegdqJitdTx2pD3Ffeb8hTRh54A-F5b)

로그가 정해진 형식대로 기록된 것을 볼 수 있습니다.

<br>

이번엔 books앱에 로그를 설정해보겠습니다.

books앱에서는 로그레코드를 파일에 저장하는게 아니라

콘솔에 출력하는 'StreamHandler'를 사용해보겠습니다.

books/views.py에 다음을 추가합니다.

>mysite/books/views.py
{% highlight python %}
import logging

logger = logging.getLogger(__name__)


class BooksModelView(TemplateView):
    template_name = 'books/index.html'

    def get_context_data(self, **kwargs):
        context = super(BooksModelView, self).get_context_data(**kwargs)
        context['object_list'] = ['Book', 'Author', 'Publisher']
        return context

    def get(self, request):
        logger.debug('GET access books/index.html')
        return super(BooksModelView, self).get(request)


class BookList(ListView):
    model = Book

    def get(self, request):
        logger.debug('GET access book_list')
        return super(BookList, self).get(request)


class AuthorList(ListView):
    model = Author

    def get(self, request):
        logger.debug('GET access author_list')
        return super(AuthorList, self).get(request)


class PublisherList(ListView):
    model = Publisher

    def get(self, request):
        logger.debug('GET access publisher_list')
        return super(PublisherList, self).get(request)


class BookDetail(DetailView):
    model = Book

    def get(self, request, *args, **kwargs):
        logger.debug('GET access id = {} book_detail'.format(kwargs['pk']))
        return super(BookDetail, self).get(request, *args, **kwargs)


class AuthorDetail(DetailView):
    model = Author

    def get(self, request, *args, **kwargs):
        logger.debug('GET access id = {} author_detail'.format(kwargs['pk']))
        return super(AuthorDetail, self).get(request, *args, **kwargs)


class PublisherDetail(DetailView):
    model = Publisher

    def get(self, request, *args, **kwargs):
        logger.debug('GET access id = {} publisher_detail'.format(kwargs['pk']))
        return super(PublisherDetail, self).get(request, *args, **kwargs)
{% endhighlight %}

처음에 logger를 정의할 때, 이름을 __name__ 즉,

books.views 로 지어준 걸 알 수 있습니다.

즉 여기서 생성되는 logger들은 settings.py에서

'books'란 이름의 로거에 저장될 것입니다.

'books'란 로거에 핸들러와 그 핸들러의 종류, 포맷을 확인하고

books앱 사이트를 돌아다녔을 때, 콘솔(터미널)에 어떻게 출력되는지 확인해보세요.

![6.img_console_books_log](http://drive.google.com/uc?export=view&id=147Fvvm9i22EmHgv3DR2kH0hMQecdHqQO)

<br><br>

## 덧붙이는 말

원래 settings.py의 LOGGING에서는

'formatters', 'handlers', 'loggers'외에

'filters'라는 것을 하나 더 정의할 수 있습니다.

<br>

로그 레코드가 로거에서 핸들러로 넘겨질 때,

필터를 사용해서 로그 레코드에 추가적인 제어를 할 수 있습니다.

ex)필터를 추가하여 ERROR 메세지 중에서 특정 소스로부터 오는 메세지만 핸들러로 넘긴다.

ex)어떤 조건에 맞으면 ERROR 로그 레코드를 WARNING 로그 레벨로 낮춰 주는 필터

<br>

필터는 다음과 같은 형식으로 사용할 수 있습니다.

{% highlight python %}
'filters': {
    # 'Special' 이라는 별명의 필터
    'special': {
        # project.logging.SpecialFilter라는 필터를 정의
        '()': 'project.logging.SpecialFilter',
        # 이 필터가 생성될 때 foo=bar 라는 인자를 넘김
        'foo': 'bar',
    }
}
{% endhighlight %}
