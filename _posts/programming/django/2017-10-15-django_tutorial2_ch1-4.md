---
layout: post
title:  "[Django Advanced Tutorial] Ch1-4. url, view, template 작성"
date:   2017-10-14 01:50:00
description: 1-4. url, view, template 작성
categories:
- programming
- django
- web_programmig
banner_image: /programming/django/python-django-logo.jpg
comments: true
---

ListView, DetailView, ArchiveView 뷰 클래스 / 페이지네이션

---

이번 챕터에서는

url과 각종 클래스뷰를 연결하고, 클래스뷰와 연결될 템플릿을 작성하겠습니다.

[Django tutorial]의 부분과 거의 같고,

새로 나오는 각종 ArchiveView 클래스 뷰와 페이지네이션에 집중하면 됩니다.

<br>

먼저 url 작업을 하겠습니다.

프로젝트 urls.py와 blog앱 urls.py에 다음 코드를 추가합니다.

blog앱의 urls.py는 새로 생성합니다.

>mysite/urls.py
{% highlight python %}
urlpatterns = [
    url(r'^blog/', include('blog.urls', namespace='blog')),
]
{% endhighlight %}

>blog/urls.py
{% highlight python %}
from django.conf.urls import url
from blog.views import *

urlpatterns = [
    # Example: /
    url(r'^$', PostLV.as_view(), name='index'),

    # Example: /post/ (same as /)
    url(r'^post/$', PostLV.as_view(), name='post_list'),

    # Example: /post/who-teemo/
    url(r'^post/(?P<slug>[-\w]+)/$', PostDV.as_view(), name='post_detail'),

    # Example: /archive/
    url(r'^archive/$', PostAV.as_view(), name='post_archive'),

    # Example: /2017/
    url(r'^(?P<year>\d{4})/$', PostYAV.as_view(), name='post_year_archive'),

    # Example: /2017/oct/
    url(r'^(?P<year>\d{4})/(?P<month>[a-z]{3})/$', PostMAV.as_view(), name='post_month_archive'),

    # Example: 2017/oct/15/
    url(r'^(?P<year>\d{4})/(?P<month>[a-z]{3})/(?P<day>\d{1,2})/$', PostDAV.as_view(), name='post_day_archive'),

    # Example: /today/
    url(r'^today/$', PostTAV.as_view(), name='post_today_archive'),
]

{% endhighlight %}

'post_year_archive'는 year

'post_month_archive'는 year, month

'post_day_archive'는 year, month, day를

url에서 매개변수 받는 걸 볼 수 있습니다.

<br>

이번엔 urls.py에 쓴대로 views.py에 클래스뷰를 작성하겠습니다.

>blog/views.py
{% highlight python %}
from django.shortcuts import render
from django.views.generic import ListView, DetailView
from django.views.generic.dates import ArchiveIndexView, YearArchiveView, MonthArchiveView, DayArchiveView, \
    TodayArchiveView
from blog.models import Post

# Create your views here.


class PostLV(ListView):
    model = Post
    # template_name 기본값: 'blog/post_list.html'
    template_name = 'blog/post_all.html'
    # context 변수명 추가 (기본값인 'object_list'은 그대로 존재)
    context_object_name = 'posts'
    # 한 페이지에 보여주는 객체 리스트 갯수: 2개
    paginate_by = 2


class PostDV(DetailView):
    # DetailView가 받는 변수 pk, slug중 slug를 url에서 받고있음
    model = Post


class PostAV(ArchiveIndexView):
    model = Post
    # 수정 날짜를 리스트 소트 기준으로 설정
    date_field = 'modify_date'


class PostYAV(YearArchiveView):
    model = Post
    date_field = 'modify_date'
    # 해당 연도에 해당하는 객체의 리스트를 만들어서 템플릿에 넘기도록
    # 템플릿에 넘겨진 변수: object_list
    # 기본값은 False
    make_object_list = True


class PostMAV(MonthArchiveView):
    model = Post
    date_field = 'modify_date'


class PostDAV(DayArchiveView):
    model = Post
    date_field = 'modify_date'


class PostTAV(TodayArchiveView):
    model = Post
    date_field = 'modify_date'

{% endhighlight %}

<br>

이제 템플릿을 작성하겠습니다.

템플릿 저장 위치는 blog/templates/blog 입니다.

저장위치에 대한 설명은 [Django tutorial ch2-3](https://onsil-thegreenhouse.github.io/programming/django/web_programmig/2017/09/24/django_tutorial_ch2-3/)의 덧붙이는 말에 있습니다.

템플릿에 대한 기획 설명은 [Django Advanced Tutorial ch1-1 기획](https://onsil-thegreenhouse.github.io/programming/django/web_programmig/2017/10/13/django_tutorial2_ch1-1/)을 참고하면됩니다.

<br>

먼저 PostLV 클래스뷰와 연결된 템플릿을 생성/작성하겠습니다.

아래는 해당 템플릿 화면과 코드입니다.

![1.img_post_all](https://lh3.googleusercontent.com/MDbCPNf_10O-UrU6zWe0AmXPTgtJ0RkYJZUgkc0XRq99JZaZC0iDgDdwBrVg6DQRKjQ7upN3aIAaipoAvH5Y-2RuLbHS09p5Yl35nLdT5HFHpJU3sO6dryF-i_Qz83wHzx_4Ku9DYDQKPCJ8zx6abfw2HzL0olMAzu92DR4K5iopTZ3fd4B3xkm6nC-z4XrDQed5nx25Jc6oTSbFGUn-WY_EOyI5PX1w0aIxI-K-u7zAB3DheINpflxafoGpWIYgGsD8lxeRftwH9SolvcSNZ4oeUuPC479W_mL7aL3OIJkG7dhiYx29Cg5xuwjmcYwuQsoEl9vU2DK0GnjYib1QoywJ5jRtghA-EQBzjm_LZ-QYqpz1ygBOXScjH0ncsGiEfcsbzZOVOcTKqrHdV7BmdaxOu7QImMCnl3sk414j1I4EFMWK-yZPoKjRBmgEEWeHZXHRL3MDWCLbNmqWcMtSKaMGJiA025bXk8iy_i3Rs5-RWJUK4MfEn9xAtrlOyM12sRwKk1cH0EhjBoc-FapXRdPMlXXugm_qZyPC7392zwQU-jeW4Dz6yOfPauyvNY00TOtdNQA43uqye8KdIK9yPgviDKUaLpUri9vPoZLezQ=w1648-h1158-no)

>blog/templates/blog/post_all.html
{% highlight jinja %}
{% raw %}
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
{% endraw %}
{% endhighlight %}

PostLV에서 설정했던 것처럼 context 변수는 posts가 됩니다.

a태그에서는 테이블에서 설정했던 get_absolute_url을 이용해 링크를 정의했습니다.

div태그는 페이지네이션 부분입니다.

page_obj, has_previous, has_next, previous_page_number, next_page_number 등

이부분에서 쓰인 메소드는 모두 Django 내장함수입니다.

메소드 이름을 보면 무슨 의미인지 알 수 있습니다.

<br>

다음으로 PostDV와 연결된 템플릿을 생성/작성하겠습니다.

아래는 해당 템플릿 화면과 코드입니다.

![2.img_post_detail](https://lh3.googleusercontent.com/kYSMONkXgAvDTAFLVP0paPjsTQOraRDH33NMPwncuCnO9Mb1ul7aeUjigP8qXT40mduqIPnzonR9zaGsHcij0jsFxW3qo3DjtLofvj3wxT_bpGVN0BolXHdrEm-n6BQNSCcAbjogZXEZnzaYGwxw-vKjLiaWeOsFeRqiWwUsFBuOC7yEz6hf1qcYYbxDFH3ZWrS2dR3xSUjpviWYzzuSaol2JAb6-oE7Fp2nPhZtCGnpdBocJa05d895KlUetl0uvoRlG1CbJQnes3RVZP9kyMkbbQEPBEXFEY6zi2VNVZcuDdNPUAAbmdryVyewA7yQSTjhAhd58emDkI3QuJQF1cRf85niFZv7VnHQvl4S-TJfYn3MWiMUbvdv8B5Tnp8wpmmVNmn6DdWpBcEMNXZ1TftcIBUnREearAWttVLooxNz4-IY6Wa2FurzxVHhVnJ2hzRc2aIOjI03Id_hkPSFZrQrp0NXVdDkUOq95hkkt4eWFQOHG6ka4XwxUIztQJYDDJKjxiVFTFdwiC2Zzjt92h4TcUOFBdz4A8sxX3GORS7daqsGEMfVX1BicbQubM1XbTVPYEEmJpmqTsMqwl7NS3Yz8HK8LZefHNHuAumxPA=w2174-h1438-no)

>blog/templates/blog/post_detail.html
{% highlight jinja %}
{% raw %}
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
{% endraw %}
{% endhighlight %}

일단 PostDV는 DetailView를 상속받는데,

DetailView의 템플릿 기본값은 '테이블명_detail.html'입니다.

그래서 post_detail.html로 이름지었습니다.

<br>

또한 context 변수에 대한 별도의 설정이 없으므로,

기본값인 object로 context변수를 읽고 있습니다.

<br>

앞뒤 포스트가 있는지 확인하기 위해 get_previous_by_modify_date와

get_next_by_modify_date 메소드를 사용했습니다.

<br>

앞뒤 포스트 객체를 받기위해 Post테이블에서 정의했던

get_previous_post와 get_next_post 메소드를 사용하고 있습니다.

<br>

다음으로 PostAV와 연결되는 템플릿을 생성/작업하도록 하겠습니다.

아래는 해당 템플릿 화면과 코드입니다.

![3.img_post_archive](https://lh3.googleusercontent.com/X3lXyHVyflImxGw8MBA3bubdYvL3u4Fnjnzmk1hYPb_GgEr-dUZTWIefN0ZDCNCn5qFBgR2oDAlXHQJA5QkepMdeGiXbMEFAeInog-qvn5drnsgvHwy_vKXFcbtPpdJitn2OjTQqrMu8bHegFU24_tG2PdXZ67iO5h3B37elGm3qVItlczTwUxKhkDG5r5-XiT3F_BGW8mrEt8aZjDINm5IRx5FDIFW5YbqAeraYD8C2Q3EgykzTxXlfQd_jr-vYeLQEWgKWrYdV78M7im_xaznSuqT4hKHMsNF9zrkFJugKcdGHtj-1FHKELPT8CQYt6AyXTOMfqWjPN4nq1jPG_y6UqOJPP-fLtr96-s6IdKoYQcC5t8AF80Cf8P9yyoWTJTjBh4U15FpjV3sw174YNNqRCyMcHiisLxqnc6IjCIkmGxYIegHgUafb63hNMdX1mXPhD7ENiGcYMxnTBJN2r4OD9uxbxxedSv6PHaM-Ic16cg6_dZif8rCICra0VyGF-VKyr5_x5Sh_gFFEKXNqtFFQlCw6ef7T1j4pSbu2kaUAuQ_L_k4Pmlo66oCltm9Z6eedbUgr8tbA_Xs3ZPGB7hNF9qJDF3sJKg2d3zX_gw=w1426-h948-no)

>blog/templates/blog/post_archive.html
{% highlight jinja %}
{% raw %}
<!--now: 현재의 날짜와 시간 출력-->
<!--example: Oct 15, 2017-->
<h1>Post Archives until {% now 'N d, Y' %}</h1>

<ul>
    {% for date in date_list %}
    <li style="display: inline;">
        <a href="{% url 'blog:post_year_archive' date|date:'Y' %}">Year - {{ date|date:'Y' }}</a>
    </li>
    &nbsp;&nbsp;
    {% endfor %}
</ul>

<br/>

<div>
    <ul>
        {% for post in object_list %}
        <li>
            {{ post.modify_date|date:'Y-m-d' }}&nbsp;&nbsp;
            <a href="{{ post.get_absolute_url }}"><strong>{{ post.title }}</strong></a>
        </li>
        {% endfor %}
    </ul>
</div>

{% endraw %}
{% endhighlight %}

ArchiveIndexView는 template_name의 기본값이 '테이블명_archive.html'입니다.

그리고 기본으로 date_list를 context변수로 보내는데

이는 모든 테이블 객체가 해당되는 연도를 포함하는 Queryset입니다.

그래서 코드를 보면 date_list를 for문으로 돌면서

모든 Post 객체가 생성된 연도를 출력하는 걸 볼 수 있습니다.

예를들어 Post 객체가 2016, 2017에 쓰여졌다면,

date_list = [datetime.datetime(2017, 1, 1, 0, 0), datetime.datetime(2016, 1, 1, 0, 0)] 이 됩니다.

<br>

또한 밑에서 사용하고 있는 object_list변수는

모든 Post 테이블의 객체를 담고있는 리스트입니다.

모든 Post 객체를 출력하고 있습니다.

<br>

다음으로 PostYAV와 연결된 템플릿을 생성/작성하겠습니다.

아래는 해당 템플릿 화면과 코드입니다.

![4.img_archive_year](https://lh3.googleusercontent.com/jsedG1TStPFYqDDH-DTBOyLukoYN6966QJyTjM2FMuFRYYNyI00dM8nYa8C-pMyd-DUGcFXyeLZ__rIeQocqFkGSICv3UfC5cgB3Z1Id56UVJK3rRL8gvTq37wMb9bmKD1njAGef_A08b2VRok25QSSuQg1i4I2Od1I93fFo40tEri9Hv4fqarAFHjiEWwG56Lt0ycDCloKZrbvwCVFreZpct0h3ll3EY5LJvjWFK0kaxPvUicyCaXKUsFnUPNLKMQ7-wZ4aJivqpug5kuVZJn7sUfKXQhMeTwrO-7JflqKgST2MgoNDc63gN95koZgsCdsXSvgqk4w7Qn-USyXdzvTS2QACVbdhYYHAiKywxmPQfGk0C9ZPDhkJcUlIh2Q7DbSa5Bgo8eflV2ZVW8Lnqy-p5j_gH6fJzu9ASVyzvDtHWJURUX3cpPYJ2X0iVcvx7P_Uc08CK7oJVGfe5CAVhphxdXyySpgDNMS5HIxiSTdIEakDm6eeyLKg9Q5r4PFYstdAebTTXo47V3_cUVRFDb9RRVaYO-nyHn_r9YHVmXyFIfYqh0ML9sEU3kd1SOIqqOzDVx0a8TiuIhN9djy1OCYpQYKW93P7Q36rxQhDgg=w1426-h948-no)

>blog/templates/blog/post_archive_year.html
{% highlight jinja %}
{% raw %}
<h1>Post Archives for {{ year|date:'Y' }}</h1>

<ul>
    {% for date in date_list %}
    <li style="display: inline;">
        <a href="{% url 'blog:post_month_archive' year|date:'Y' date|date:'b' %}">
            {{ date|date:'F' }}
        </a>
    </li>
    {% endfor %}
</ul>

<br/>

<div>
    <ul>
        {% for post in object_list %}
            <li>
                {{ post.modify_date|date:'Y-m-d' }} &nbsp;&nbsp;&nbsp;
                <a href="{{ post.get_absolute.url }}"><strong>{{ post.title }}</strong></a>
            </li>
        {% endfor %}
    </ul>
</div>

{% endraw %}
{% endhighlight %}

YearArchiveView의 template_name의 기본값은 '테이블명_archive_year.html'입니다.

YearArchiveView에서 템플릿으로 넘기는 변수 중, 여기서는

year, date_list, object_list를 사용하고 있습니다.

year는 url에서 받는 year값입니다.

date_list는 테이블 객체의 연도, 월 정보가 들어있는 datetime의 queryset입니다.

예를 들어, Post 객체 중 2017년 10월에 작성한게 있다면,

date_list에는 datetime.datetime(2017, 10, 1, 0, 0)이 포함됩니다.

<br>

object_list는 해당 연도에 생성된 객체들의 리스트입니다.

<br>

다음으로 PostMAV와 연결되는 템플릿을 생성/작업하겠습니다.

아래는 해당 템플릿 화면과 코드입니다.

![5.img_archive_month](https://lh3.googleusercontent.com/4zIvdTIyGIK5jkUjytzEO3BhoGbthDwtbaoppC3BuuOJ_JXoBVShWnCGtJ3ECGvDQZw_cu4l1YSmLScYW1ADYXfqkx2MXFpUL8WElnI5n8HnZSfhclIpy-lD0TnN-6faSvS31h0YfbCDZvYPvIaIw-vnCUsKN99pOZ5YeKaCUnAomC2_QAuKqB2oKETmVZiiLqiDZUDHbo9SSIc0T0k7uXCNtty6BaB5cx9ckAotzqPh7YNNiwZZnRMkYeVvQO7BHWyQ_IDPcBXWYfM8F9V6n5YeAo9YctOCkcO8UbvQwXH6994FLRyLlqHYMUmRkuwEQRD5UPxJqgvuxsFD4ygk1pzEQjDyer-CFoj8gsJyC_FJS-S-wmfZdLR0TyzyjHvSZ3VCZnrrYrb56gCFwnVq_7Vp6sUmqyRNUFmDTa1mzqx1tgoZM2jPqO3coJHium2rJenxPIokMyJTqhjR1zWxb_3CjLQGWNPt895xHfg1AK1HvacjW_3l150T53dvjOZREkOiQz4VhqO_AhvT0fwsnH0pQ_V0dOfyBdTnWN8pyzszGIMBPvZzlCIkfIubBaNn8uWaPwFCaNPPVWgPgJ9OgxkoBxzTEwGc6PSqYC0Qyw=w1426-h948-no)

>blog/templates/blog/post_archive_month.html
{% highlight jinja %}
{% raw %}
<h1>Post Archives for {{ month|date:'N, Y' }}</h1>

<div>
    <ul>
        {% for post in object_list %}
            <li>
                {{ post.modify_date|date:'Y-m-d' }}&nbsp;&nbsp;&nbsp;
                <a href="{{ post.get_absolute_url }}">
                    <strong>{{ post.title }}</strong>
                </a>
            </li>
        {% endfor %}
    </ul>
</div>

{% endraw %}
{% endhighlight %}

MonthArchiveView의 template_name의 기본값은 '테이블명_archive_month.html'입니다.

<br>

마지막으로 PostDAV와 PostTAV와 연결되는 템플릿을 생성/작업하겠습니다.

아래는 해당 템플릿 화면과 코드입니다. 저는 Post 객체를 하루만에 다 만들어서 저렇게 나오네요...

![6.img_archive_day](https://lh3.googleusercontent.com/roLVAgeeGRZ0cXZRImAMeaadlqmMOWnBSbFPoks3Q2G06PL410tRNaPuNk7hMIWgaJjA0JmuYxwok6sSGJiTyH2GUUGCfCWC6nUN1io543vX1APjL8N6PNbq3PR_jTmQjKf-_kwaOxdn0TBksdtA5i9gBnUXzM6BxA5D8HCTLi-dwf5SS67n0pQn1AEx7MqsU7mWgQlw2P-YiJCaKVT2p4HE6FHOfvKfTCBU2me6g3ZBQyxXjS3StqrEBmEcwIbUnWDC9bXv6iXhJ8a2J31jc7ntWgJyILQrzLgRyvhIwFPqOFp_2NjucHoyfi8v6fMWpMhZNm3lW7_ZBZiJkjOVvSpOgAGpNbBW0ccp4pdvtPxeGXxCAolCONftFRPhn5Tky7epSKz5dtK5RUmrMtDMg6K-VZth87atj8MScgSJUeaIX7QTUq1AamwGgIxrfktnsWRFIv8bsMBNJXZIz9nRcX1VZw7S-UIRyDghVi4jyYpwnc9IILaUXe2kPampMTPiwoNt2LEDr1_Sp-M8xZVnkloHArVWfjgWjehiJkBpenshW_9eYiOL_O6tviYYPHD8ksVomQhkzIYtI4CTpeb_8ILnWAR8QztmFEbsoqThvw=w1570-h846-no)
![7.img_archive_today](https://lh3.googleusercontent.com/6kI5t-iuErVpFRuz_z4HERcu0E5iSnoWtF-IoBpiO04zg-EB_vcQc7ghJXp8KlQQHvd_Go0HZLGBopEWcZsPCwXakBjJwbGTw34pqmQKa_QZ5avrDvW_UApCGWigdYnZlFXcUV4DXaxSH7xNN9nDUS5fvyHAQxTXlT2rgg6dDpSdeugr0uymI18Hka_0p5H4yjOzMs05fMo2vxnzYlo2-Y7FkOdhVj7xwKhi9NAg8KzFer52NF56SRBIXVR02ydnl3xrWNmAKpl5Zjhp3-iHxayNdHK8NLYPLkPluhgFkfXQ5qEouXk4vNv8hc66J4oOzjwZ75KurDWGbD30r-L2fuMkFHHR9Xus9JkRiUdlK_ylVALZq_LqVDbCcqenM1kQL9vl3rw-AL6HLXgsgh2LVPjGvvxlZkD2SClBPzzrWKCstV7qk2bZxd37Jon2BL68yKGURPhToOhquG_y7rERiod7dYqiW6krZoZv_VyQtcK7oCoi4FAqWWhCJkrAQ3VXxPPc-YUjsfaS6BGlC2al8Fg9smNyhp-oVAxUl1DRQl1JOsatxGErXPb3IKyM7ua9N200vIifb21svqyrOAsW3qJmu0ZP4Yw1WjUWYWcZtQ=w1570-h846-no)

>blog/templates/blog/post_archive_day.html
{% highlight jinja %}
{% raw %}
<h1>Post Archives for {{ day|date:'N d, Y' }}</h1>

<div>
    <ul>
        {% for post in object_list %}
            <li>
                {{ post.modify_date|date:'Y-m-d' }}&nbsp;&nbsp;&nbsp;
                <a href="{{ post.get_absolute_url }}">
                    <strong>{{ post.title }}</strong>
                </a>
            </li>
        {% endfor %}
    </ul>
</div>

{% endraw %}
{% endhighlight %}

DayArchiveView의 template_name의 기본값은 '테이블명_archive_day.html'입니다.

<br>

이제 로컬 서버를 키면 blog앱 페이지에 접속할 수 있습니다.

/blog/

/blog/archive/

/blog/2017/oct/15

/blog/today/

를 접속해보세요!