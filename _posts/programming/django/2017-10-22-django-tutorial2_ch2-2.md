---
layout: post
title:  "[Django Advanced Tutorial] Ch2-2. django-tagging"
date:   2017-10-22 13:50:00
description: 2-2. django-tagging
categories:
- programming
- django
- web_programmig
banner_image: /programming/django/python-django-logo.jpg
comments: true
---

장고의 태그달기 기능

---

이번에는 django-taggin 패키지를 활용하여

기존의 post테이블에 태그기능을 추가하도록 하겠습니다.

<br>

## 기획하기

<br>

![img_post_detail](https://lh3.googleusercontent.com/zMpS2BCKxyTym6_CIaW4tXTf8uQXYgeCPH5TUrdMmR1-EcAmB_B1HYrjQGV4nip9G81ahqnVKeATtwjezaKfCICLmfKcIuSqaBWWoSq2bS1Zz-AoD6PFBOQTFPgZaMP58ypt97ZSxqs9tHB8AvUSw-dNxY2OQDRtPtzJ4X83nHSz7Jr34QHj38Vnes4yh2lBly65U0Jc2ZgIk567pEJaGkq4dqkbhRol3ivMnoLAsYiBx5BL2bgzfqfQWS3WMggimAgENruE7H1HH2IQAjhSnIp48p1zeNN83DoXAGk9w0jtsVbdjydbGecoPWnK7D4CIRxdWHnhD3jrNYvdf7MhG_wObF7kKwHBnDIsq67yk6D5sM9XYzMomCCMZp0N4Ravrxv5sOSfdqPI4SG3ks_0-nVHbg-xSH8jJ2e4GTWdZNu1Gr3BNXcpv3lzcUVvTvrR0cCRKa-wha7qERi2-GL8e5OqeU4KyG8AbTyK53f5SBk4QNr1bABVafIca_rst51LnX03LjxYxDMlXo9XIhVDrmbo_BpqmdypljT7zI4qnfLzgeuHaY-hwofF23YdHvBg7uLJyd9GSJ7C9DYxJq33qWedPYMYAAw1oHOoJihwFA=w2304-h762-no)

기존의 포스트에 태그를 달아, 화면밑에 나오게 합니다. 각각의 태그는 링크가 달려있습니다.

예를 들어, strange태그를 클릭하면,

![img_post_tag_list](https://lh3.googleusercontent.com/M7drmUETpLgk2Ra-khFMc7jDwxqqSDJPzoivSDMfa9DXG4CEmQa0Wz6YB1DiyyV23o6FSiX7O6AawmGDUHH0T_qokT_qq-BIkmur38jGdZXwSMjw0oNGD6uXn--btzhO5sPcxsucgGKmG7BzhRP-ftS72tyPLs7fsIc3D8HTOQsdEkMLfZMI5d83d2CNFlbtGFEEBfkzLhuup2Rgkpfen7WHurXvS3on6mLvjTpYExJ2gWz0yChW5VDzmbH7DzoSgu5psnlqmEvd6ENMocMJijeYg_Srp-8SB4LbRddSQHttrdTB8HKp5FkFYGnXJPKlVERNivyLwRB4Ti6m5w0NjpjESCB-BDwLOJpujSdJZa3jBJzKPQgnumUX_XO4wNjKW398O_30uRaxW05ViAeOu7HFbn627InPRl4e64iC-t1i8kKHQvz069Fb6LzZA2-XXKB5oxOgW-CiWsKW3BMaEtAI6lVp2Bgzmlh-t1vPuzkw-KgQQ5eGshUDhF9E6UDZYXPwW8J08pNhYtFJK75pVkKFMDVdQnQugsxw9btCA1iXFd44OvPdJSToC96I8ZMMTXLctedUbpdKyYMXWrgMct5XRcC0w6BqZ38XtwRqwA=w2304-h988-no)

strange태그를 달고있는 post 객체들이 리스트됩니다. (tagging_post_list.html)

<br>

만약 TagCloud를 클릭하면,

![img_tag_cloud](https://lh3.googleusercontent.com/p9wMZN_Khl4SkLJQztpNcx7_jw4X0w-dqWJ-RO1rcGpgC0ttGQaExEEx2a4v_OVVRQeDimpNI6ZdKE3iLyn7xcpDNXOQFQd-h48LGrOwGalzmKoPycgR5AzFWe_EKhtq6wMy_xiWtSaKPmRab_gNS5HDeVstH5BBuuvEd_bQT7ZDBERhuiWzb8Le64Vw1zmUJ03e7DfjKfE0BkrVaHOpr1P_Eenmyn3hOZ4YtC1gyLCsj9Gm_AsnuJ8mZSqAufYMPFGFyoHBft-UBT1qH9EO9DgSF2FRklTGlHvES7hYWqFIIQalWPlinPgaIq-1dM2Jv3yO-UUbsNvYcePJQvh3cD7r8Q1g2jUspKKKz9xp444wE3EXXO60iel8wt0PfqlnhSEbe4lOgZz0bHp--FgFXc-u52uYPNp3IWpxBn3DbIlREHZpoFtr_o8mS2AGQNfk8Xbq144Drnsnl8lw9kcN4NY1SxSVHxNaxhhoa00oN9VCYQGI9tXfhT-HDyEZ6iip-nXFUkGsXi47uQEEVeqXaDwnSEsH1MaixZb4hD-3rqFZy_bpCVmEu0pjYn9hkxflmXf4x04dQsEWYaMUTYYP8yPqI8yPOnTgIDMY7k55gw=w2304-h988-no)

post 객체들이 달고 있는 모든 태그들이 나오고,

그 태그가 태그된 횟수도 나오게 됩니다.(tagging_cloud.html)

두개의 템플릿을 새로 만들어야합니다.

<br>

## django-tagging 설치하기

<br>

{% highlight bash %}
$ pip install django-tagging
{% endhighlight %}

설치 후, settings.py에서 installed_apps에

django-tagging을 추가해줍니다.

[django-tagging docs](https://django-tagging.readthedocs.io/en/develop/#using-django-tagging-in-your-applications)에 보면 그냥 'tagging'만 추가하면 된다고 나와있습니다.

그런데 저번에 살펴봤던대로, Django docs에서는 앱명보다는 설정 클라스를 적는 걸 추천했었습니다.

가상환경 폴더에 django-tagging의 apps.py를 살펴보면 TaggingConfig라는 설정클라스가 정의되어 있습니다.

![1.img_django-tagging_apps.py](https://lh3.googleusercontent.com/4qILP3oKgqkc6aZWedroxQBXB8iVvwJJNKyBvBMOTdljeSXe50Dtkvkwn8-rVnnF2JjDo2L1gT9HIhN0UZdrOXhrF4Htvad4I2UgVk48mwZ1aZULQS7up4PYlQ34nE1hO0FfiUgzjbGBB6U-2Vds8uvK7Ff4AYyeM_wd-brliqjg5NCMbd8DKvaffyQd8LWM_WvGSj6t-jaLafFMjAhM1LXsZ_D3FtAU-N6PgT2J4frXHE6LUrMMOICNTXm38rEBXw99PsUPzyCDWYKHysrSjX_ipNtVO6Gi8Pv1xjG1_PyzJNQZS8crTI81tbsmppalpOAyzeHZeKtzG7ZAohG0tZjQo6JECb5DDcuh9fx-KqknPdyoVTXLwZqxlRIrQst0SQXDPYz2LIQlXUcVUqsUgXYg81RDDB7WgnYJCdvC95doZDtPu8fYX0ROu2yJCPDMV3VwceiKCZR7mxWN3c-C_3ovEZno1vZOhFI0ZsgtwEFKEE9l8A-mTKEt7JqR2vRojAEd00FVemI39nSH9x9Xf3YAM8y5UE4o2y3p-Ptp9PYcRuS1h4KvtFF8V4ySj9ETOtAGI94PgSNtBPF9Vf9IF5qXho1niwl2cl4p8WnRtA=w1996-h710-no)

그래서 서는 INSTALLED_APPS에 'tagging.apps.TaggingConfig'라고 적겠습니다.

<br>

## Post 테이블에 tag필드 추가하기

<br>

기존의 테이블에 tag필드를 추가하겠습니다.

>mysite/blog/models.py
{% highlight python %}
from django.db import models
from django.core.urlresolvers import reverse
# 밑의 코드 한줄 추가
from tagging.fields import TagField

# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=100, verbose_name='TITLE')
    slug = models.SlugField(unique=True, allow_unicode=True, help_text='one word for title alias')
    description = models.CharField(max_length=100, blank=True, help_text='simple description text',
                                   verbose_name='DESCRIPTION')
    content = models.TextField(verbose_name='CONTENT')
    create_date = models.DateTimeField(auto_now_add=True, verbose_name='Create Date')
    modify_date = models.DateTimeField(auto_now=True, verbose_name='Modify Date')
    # 밑의 코드 한줄 추가
    tag = TagField()

    class Meta:
        verbose_name = 'post'
        verbose_name_plural = 'posts'
        db_table = 'my_post'
        ordering = ('-modify_date',)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('blog:post_detail', args=(self.slug,))

    def get_previous_post(self):
        return self.get_previous_by_modify_date()

    def get_next_post(self):
        return self.get_next_by_modify_date()

{% endhighlight %}

tag 라는 필드 하나 추가한 것 밖에 없습니다.

그리고 테이블이 바꼇으니 migrations을 해줍니다.

{% highlight bash %}
$ python manage.py makemigrations
$ python manage.py migrate
{% endhighlight %}

그리고 admin페이지에 들어가보면 post 테이블에 tag필드가 추가된 것 이외에

Tagging앱과 그 안에 속안 두 테이블이 새로 생성된 것을 볼 수 있습니다.

![img_admin_tagging](https://lh3.googleusercontent.com/lzKQP6Cdf2PWaFOt0GlOxF90LeVEz1S46JztoVvCQy8mtRDuDy8THXRjC5SUOtTdrklCPZZRaGTY_oNBH2M6RlICQdVWxvc_KU1LYbYu94i--UQhtGF_Z9IWRDTPdnAZZji2AJWZsdNICdjrf63QcZm45rV1N8O-iuxLe_W-Gq4FXVdUClKjYEgY5fP19UaHb_JzCAeXg1vPRBcEbvEE0n95PZEEOojMYa1TLrO2FLD84KcTmkZVLx4t9BOSPStop2Wi8_hyaxgsRSA0QsmO_mNidbr_YG32mU5P9DEi1-WBFUFZnbCdqQ9DJKKQzyfPRRY0E-2m8EAyOCR5c9KCU235xcJuKtrWBRj_nKDMsDGmSnnG_EgnJp_OF_HXNa6NusWDKYISGWv6iOOBF-ZB9rLGGEzvxFU4bHWKaR4osG5JpZeoxmdePZWtjXWysEDgTBdJQpRS7gxY7gq3RIi6eSfXuty4H65Ez6jVwq6Z7HzwktPHKuUevWD9ghmvkyF2spTCZucMqeeGVKqZEzcCzQCKtyDMTquM0Im8mxyx2mvl7uPRj52zlIueAbfkFu_o6fO7tRAXdNNRSUyg5yPI50pOWqwIyMwAIJik6uATSQ=w1262-h258-no)

이는 django-tagging 자체에 테이블이 2개 정의돼 있기 때문입니다.

![7.img_tagging_model](https://lh3.googleusercontent.com/8YrShmtVaaWm7GL4heE0gpLHDfHPuLRJ5li0tgjS4mirsHqDAbDkVrMCRzKYidquZG80Msg4VKC1HnzjWx4dS1oDYrs7IoXU8hbewn7S_MiJ3Nm2akLy0DK9gYr5eA358t9M5XRe6rD_Q3hcmI4hpRI_RJTTXboCv_jJsv_Ml83VGDOiDY9HhSD6uH6BdnUG9BKIfhDMpYIXaW2FDtwPZZF3NmrJ427JbvnTxT0ob6zcdOtRoRLpc-rPRW0aeGVA3fCznJL_Rr3V9yKfi-UhrTyrEukTQ-ZCerg5InSO4XfB6jToS4zzAQeCHdTsDSnp0Vrs1V0xs6_1JPtBJKsndVpjEX8D4pmMbvMzL_27xyHtXTQc4FBwgb49TzvFF2FW27r02LBzsHCO2Tq3dp-r8HJf3Vcn1PnvvN9GS3ZVDX4d4sjnDn5dlMHZWemuvuwUARbTNEfaCG-4Eh-PfKKp3T2UpjWeq1PSO_Fctu5jMr4n9Ky011w220S4V_kqEtKFiJMq_iAoMVFwfaDfCVPyYcLXS7wtLunZc7zeA1VuXc5V2ikrqt9boF6Sbdn4NKesZfiWsbKJA0Ps-4YYQ8BR8-jiJQDqxNB5h8NrpziArQ=w2304-h1440-no)

지금은 이 테이블을 따로 손댈 필요는 아직 없습니다.

post에 가서 기존의 post객체에 태그값을 적어줍니다. 태그는 콤마(,)로 구분합니다.

![img_add_comma](https://lh3.googleusercontent.com/bJ1zdmhHOpFAoIyunFzUmnjnRvyBOJjBU-jGbUcTk9CuHps1Nvr9pzvay69lzIQjbbzmgSYv1U2S8f_cAoDPKBMXRxjAzJf0PL0H3Xci1cl_pw1-UhE160CzULSB7l3v7JmYUb5cIVEo2Qau-sR6Yhrmt_HN1L-3r4UWx13aolsD7ymhNLxRCEO5E2lPUkxtwvd8y_r3aISJynbMv3_Q5a7p34En1bsgNATMVqMR8Q3D1EST3HxZLiI7oxn1RTtxl67E0YuX4o18oYuXZOOk4_J1gNQV1lPgjLWYXwbP7jSpTFkVj2DcZ67LiqXSJhDo1mROM7uC3AGfYJo-YJ-0yuBDGhyStQlAgVsIm-PgDzY1iLfkf49jbjUkBgKMK_3ptsuxu8hg3uU0-_od1P7-yQitg0rqNYHNs6ihaCH_mxPwSb6EaXKUOzNL-CLfvI3yalMRVHthAY5wfCYBeZ-DgBtHHqZnq5n8YPg1L9LBzoXi6SC4Zjg0MIhbnICI4OhRmd09c_xuyfcJRJf5jT9LPYx2WtpsH0bo-ZDdSInYwKGLZ37GIZpLzlKdSYLg7Umrd6a_gHC7tz3F4Ol6qQcCjMfx30I3yKy61968A6NrNg=w2200-h1504-no)

<br>

## 템플릿 추가

<br>

### urls 추가

>mysite/blog/urls.py
{% highlight python %}
from django.conf.urls import url
from blog.views import *

urlpatterns = [
    # Example: /tag/
    url(r'^tag/$', TagTV.as_view(), name='tag_cloud'),

    # Example: /tag/tagname/
    url(r'^tag/(?P<tag>[^/]+(?u))/$', PostTOL.as_view(), name='tagged_object_list'),
]

{% endhighlight %}

[^/]는 /은 문자로 받지않겠다는 의미입니다.

(?u)를 쓰면 표현식을 유니코드로 인식하여, 한글도 인식가능하게 됩니다.

<br>

### views 추가
>mysite/blog/views.py
{% highlight python %}
from django.views.generic import ListView, DetailView, TemplateView
from tagging.models import Tag, TaggedItem
from tagging.views import TaggedObjectList


class TagTV(TemplateView):
    template_name = 'tagging/tagging_cloud.html'


class PostTOL(TaggedObjectList):
    model = Post
    template_name = 'tagging/tagging_post_list.html'

{% endhighlight %}

추가할 부분만 적었습니다.

TagTV는 모든 태그들 리스트만 보여주면 되므로, TemplateView를 상속받았습니다.

PostTOL은 TaggedObjectList를 상속받는데, 이름그대로 태그된 객체리스트를 템플릿에 넘깁니다.

URL에서 tag를 받고, 클래스뷰에서 model 값을 받아서

해당 테이블의 객체 중에서 tag값을 가지고 있는 리스트를 템플릿에 넘깁니다.

<br>

### 템플릿 추가

먼저 포스트 내용이 나오는 post_detail.html 부분에 태그값을 추가해야합니다.

>mysite/blog/templates/blog/post_detail.html
{% highlight jinja %}
{% raw %}
{% extends 'base_project.html' %}
{% block title %}post_detail.html{% endblock %}

{% block content %}

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

<div>
    <b>TAGS: </b>
    {% load tagging_tags %}
    {% tags_for_object object as tags %}
    {% for tag in tags %}
        <a href="{% url 'blog:tagged_object_list' tag.name %}">{{ tag.name }}</a>
    {% endfor %}
    <a href="{% url 'blog:tag_cloud' %}"><i>[ TagCloud ]</i></a>
</div>

{% endblock %}
{% endraw %}
{% endhighlight %}

가장 밑에 div부분이 태그를 추가한 부분입니다.

{% raw %}
{% load tagging_tags %}
- 먼저 tagging 패키지에 커스텀태그를 사용하기위해 tagging_tags 모듈을 로딩합니다.

{% tags_for_object object as tags %}
- detailview와 연결된 템플릿이기 때문에 post객체를 object로 접근합니다.
- object의 tag를 tags_for_object 커스텀태그로 접근하여 tags로 저장합니다.

{% for tag in tags %}
- tags의 모든 태그들을 출력하고 있습니다.

{% endraw %}

<br>

이번엔 모든 태그가 리스트되는 tagging_cloud.html을 작성하도록 하겠습니다.

django-tagging을 이용하는 앱이 blog이므로 blog/templates/tagging에 저장하도록 하겠습니다.

>mysite/blog/templates/tagging/tagging_cloud.html
{% highlight jinja %}
{% raw %}
{% extends 'base_project.html' %}

{% block title %}
    tagging_cloud.html
{% endblock %}

{% load staticfiles %}
{% block extrastyle %}{% static 'tagging/tag.css' %}{% endblock %}

{% block content %}
<div id="content">
    <h1>Blog Tag Cloud</h1>

    <div class="tag-cloud">
        {% load tagging_tags %}
        {% tag_cloud_for_model blog.Post as tags with steps=6 min_count=1 distribution=log %}
        {% for tag in tags %}
        <span class="tag-{{tag.font_size}}">
            <a href="{% url 'blog:tagged_object_list' tag.name %}">{{ tag.name }} ({{tag.font_size}})</a>
        </span>
        {% endfor %}
    </div>
</div>
{% endblock content %}
{% endraw %}
{% endhighlight %}

{% raw %}
{% load tagging_tags %}
- 이번에도 커스텀태그를 사용하기 위해 tagging_tags 모듈을 로딩하는 걸 볼 수 있습니다.

{% tags_cloud_for_model blog.Post as tags steps=6 min_count=1 distribution=log %}
- blog.Post: 태그를 추출할 대상은 blog앱의 Post모델입니다.
- steps=6: 태그의 폰트 크기를 6단계로 설정합니다.
- min_count=1: 태그가 출력되기 위해서는 최소 한번은 사용되야 합니다.
- distribution=log: 태그 폰트 크기의 분포는 로그분포를 따릅니다.

{% for tag in tags %}
- tags의 모든 태그들을 출력하고 있습니다.

{% static 'tagging/tag.css' %}
- blog/static/tagging에 tag.css를 만들 예정입니다.

{% endraw %}

<br>

이번엔 특정 태그를 클릭했을 때, 그 태그를 포함한 post가 리스트되는

tagging_post_list.html을 작성하도록 하겠습니다.

>mysite/blog/templates/tagging/tagging_post_list.html
{% highlight jinja %}
{% raw %}
{% extends 'base_project.html' %}

{% block title %}tagging_post_list{% endblock %}

{% block content %}
<div id="content">
    <h1>Posts for tag - {{ tag.name }}</h1>

    {% for post in object_list %}
        <h2><a href="{{ post.get_absolute_url }}">{{ post.title }}</a></h2>
        {{ post.modify_date|date:'N d, Y' }}
        <p>{{ post.description }}</p>
    {% endfor %}
</div>
{% endblock content %}
{% endraw %}
{% endhighlight %}

tag는 url에서 받은 값이고, object_list는 PostTOL 클래스뷰에서 넘겨받은 값입니다.

<br>

마지막으로 tagging_cloud.html에서 참조하는 tag.css파일을 생성하겠습니다.

static 태그로 접근하기 때문에 settings.py에 설정한대로

STATICFILES_DIRS를 먼저 뒤지고, 각 앱의 static폴더를 뒤집니다.

>mysite/blog/static/tagging/tag.css
{% highlight css %}
.tag-cloud {
    width: 30%;
    margin-left: 30px;
    text-align: center;
    padding: 5px;
    border: 1px solid orange;
    background-color: #ffc;
}

.tag-1 {
    font-size: 12px;
}

.tag-2 {
    font-size: 14px;
}

.tag-3 {
    font-size: 16px;
}

.tag-4 {
    font-size: 18px;
}

.tag-5 {
    font-size: 20px;
}

.tag-6 {
    font-size: 24px;
}
{% endhighlight %}

<br>

이제 로컬 서버를 켜고 localhost:8000/blog

에 들어가서 결과를 확인해보면 처음에 기획했던 대로 결과물을 볼 수 있습니다.

<br><br>

## 덧붙이는 말

static 파일인 css를 못읽는 경우가 있습니다.

(바로 제 경우...STATICFILES_DIRS만 뒤지고 해당 css를 못찾았다고 에러가 나버리는...)

한참을 검색해도 원인을 못찾았었는데, 그냥 로컬서버를 껏다키니

바로 앱의 static폴더도 잘 뒤져서 해당 css가 적용됬습니다.

역시 껏다 키는게 최고...