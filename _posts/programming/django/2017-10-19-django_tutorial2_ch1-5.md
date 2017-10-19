---
layout: post
title:  "[Django Advanced Tutorial] Ch1-5. load staticfiles"
date:   2017-10-19 01:50:00
description: 1-5. 템플릿 상속과 staticfiles를 통한 첫 페이지 작성
categories:
- programming
- django
- web_programmig
banner_image: /programming/django/python-django-logo.jpg
comments: true
---

template 상속과 staticfiles

---

이번 챕터에서는 템플릿 상속과 staticfiles를 이용하여

첫 페이지를 작성하도록 하겠습니다.

사실 [django tutorial]에서 템플릿 상속만을 이용해 간단한 첫페이지를 만들었었습니다.

이번엔 staticfiles 기능까지 사용하여 첫 페이지를 바꿔보겠습니다.

<br>

즉 이번 챕터에서 메인으로 설명하는건 **staticfiles**입니다.

나머지 html작성, css 등은 Django의 메인이 아니므로 코드만 적도록 하겠습니다.

<br>

이번에 만들 첫페이지는 index.html이고,

상속받을 부모템플릿은 base_project.html입니다.

먼저 프로젝트 urls.py에 첫페이지 url을 views에 연결시켜줍니다.

>mysite/urls.py
{% highlight python %}
from django.conf.urls import url, include
from django.contrib import admin
from mysite import views


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^polls/', include('polls.urls', namespace='polls')),
    url(r'^books/', include('books.urls', namespace='books')),
    url(r'^blog/', include('blog.urls', namespace='blog')),
    # 전에 만들었던 첫 페이지 url 주석화
    # url(r'^$', views.HomeView.as_view(), name='home'),
    url(r'^$', views.IndexView.as_view(), name='index_page'),
]
{% endhighlight %}

<br>

이제 views.py에 IndexView 클래스뷰를 작성해줍니다.
>mysite/views.py
{% highlight python %}
from django.views.generic.base import TemplateView

class IndexView(TemplateView):
    template_name = 'index.html'
{% endhighlight %}

<br>

그럼 'index.html'을 작성하기 전에 부모템플릿인

'base_project.html'을 만들겠습니다.

>mysite/templates/base_project.html
{% highlight jinja %}
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
        <li><a href="#">Search</a></li>
        <li><a href="#">Admin</a></li>
    </div>

    {% block content %}{% endblock %}
    {% block footer %}{% endblock %}

</body>
</html>
{% endraw %}
{% endhighlight %}

부모템플릿의 상태를 보기위해 'index.html'을 만들어서 상속을 받고,

로컬서버로 들어가서 화면을 확인하겠습니다.

>mysite/templates/index.html
{% highlight jinja %}
{% raw %}
{% extends 'base_project.html' %}
{% endraw %}
{% endhighlight %}

이제 로컬서버를 켜고 localhost:8000에 접속하면

![1.raw_base_project](https://lh3.googleusercontent.com/NPNYYKWKIqFdpzkZ_2jnErhk1QZCYNbf6n1_PXezCY9ApnmPt0msbEuyTEjNDfpVwMJEByZ3XXi2QLQoLRbiEGtds8cRmVLARsYcWp-gZ3bSbq8KK-WQ3GxFhXETB73C-6KhJcgtLOC75BeroD-4S0GsDWbd4GjVKYg4jwAPpl3Gfcw5gOKS7bOuMIqzSJH9qjVtdv8BB-PLELbUDSWcqgPpKtHs56BGOjo0EEeYi1cO3nB6fNGZeVBR_m3QVtrgnB0orl0jezohC6h-pqCfcXVO6NeE5k6RcyjIZnseElUymNuExVwYXrb4kvP9Srf1bDPudfjDRSMEibVmJ4DZEkTiBW6BUI1dAECoHiHvRAlsw1vHtymM4mO5hyn5lCFRFsaH6Yu2HooJpUM3sXsDOTjb6rbBS08dhIBAcEa4VIxPBQ-d8xn2XdPs-tUT-ysxQ-Shu-xUlo60GWYRL9HM-0AZ2lv79G6FOBmtn6JXLZaScni1kg8mUHAdxIl8RKVb_LppIESWFIKBim2j0lNwGZUBSMpTPaVssyVv5la2rZfyhG2FIshP8WewxWJTMtiTgaiF4xcTKXZqlx9tkxF7Rlygmd1_m6pokeEqirmV0w=w1820-h1302-no)

아무 css가 적용되지 않은 상태입니다.

'base_project.html'에는 'css/base_project.css'를 로드한다고 되어있습니다.

그럼 base_project.css를 어디다 만들어야 로드할 수 있을까요?

<br>

{% raw %}
css를 로드하는데 {% static %}이 쓰인 걸 볼 수 있습니다.

그리고 이 static 문법을 사용하려면 {% load staticfiles %}를 먼저 작성해야합니다.

그리고 staticfiles에 대한 설정은 settings.py에서 합니다.

settings.py에 다음과 같이 작성합니다.
{% endraw %}

>mysite/mysite/settings.py
{% highlight python %}
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.11/howto/static-files/

STATIC_URL = '/static/'

# 위의 부분은 원래 있는 부분이고, 밑의 한줄만 추가하면 됩니다.
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]
{% endhighlight %}

settings.py에 써진대로 CSS, JavaScript, Images 등의 파일은 Static files라 부릅니다.

Django에서 static 파일을 찾는 방식은 템플릿을 찾는 방식과 유사합니다.

즉 STATICFILES_DIRS의 경로를 먼저 검색하고,

그 뒤에 STATIC_URL에 써진대로 각 앱의 static폴더를 뒤집니다.

{% raw %}
즉, 'base_project.html'에 {% static 'css/base_project.css' %}는

제일 먼저 뒤지는 장소가 '프로젝트폴더/static/css/base_project.css'입니다.

여기 기준으론 'mysite/static/css/base_project.css'가 되겠죠
{% endraw %}

<br>

그럼 이제 static과 css폴더를 만들고 그 안에 base_project.css를 작성하겠습니다.
>mysite/static/css/base_project.css
{% highlight css %}
body {
    font-family: 'Lucida Grande', Arial, sans-serif;
    font-size: 12px;
}

div#header {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 30px;
    width: 100%;
    display: table;
    background: orange;
}

div#menu {
    position: absolute;
    top: 30px;
    left: 0px;
    height: 20px;
    width: 100%;
    display: table;
    table-layout: fixed;
    border-spacing: 40px 0px;
    background: #ffa;
    font-size: 8px;
}

div#content {
    position: absolute;
    top: 70px;
    left: 50px;
    right: 50px;
}

div#footer {
    position: absolute;
    bottom: 20px;
    left: 50px;
    right: 50px;
    height: 30px;
    border-top: 1px solid #ccc;
}

.maintitle {
    display: table-cell;
    vertical-align: middle;
    padding-left: 20px;
    color: #ffc;
    font-weight: bold;
    font-size: 16px;
}

.welcome {
    display: table-cell;
    vertical-align: middle;
    text-align: right;
    padding-right: 20px;
    color: #ffc;
    font-weight: normal;
    font-size: 12px;
}

.welcome a:link, .welcome a:visited {
    color: white;
}

div#menu a:link, div #menu a:visited {
    color: #36c;
}

div#menu > li {
    display: table-cell;
    vertical-align: middle;
    border: 2px solid #bbb;
    border-radius: 25px;
    text-align: center;
    font-weight: bold;
}

div#menu li ul {
    display: none;
    position: absolute;
    margin: 0;
    padding: 10px 10px 5px 10px;
    list-style: none;
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    background: white;
    z-index: 1;
}

div#menu li:hover ul{
    display: block;
}

a:link, a:visited {
    color: #369;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

table {
    border-collapse: collapse;
}

td, th {
    line-height: 18px;
    border-bottom: 1px solid #eee;
}

{% endhighlight %}

이제 다시 index.html을 살펴보면 css가 적용된 걸 볼 수 있습니다.

![2.base_project_with_css](https://lh3.googleusercontent.com/XmX5ILDNFNQEkH6ge3S_8aXN4QziJcdK8FQGTGyR3ahxzN3Ud85dnyoFzw_cG2M9H2mIPL67zRa4Vmam_wOiu8Iy9y_wamGm-3eMUg94C9frR5Vr7y1ajCL42drPYGRqycWmgAwZETOx4DngDxRuH0g7I9oU_frUTlys8o4Kz-7s946ILRf152a9CbPIO_pJ7ayurFJhgeMRMMu7z-VOziUIYtH0mYmImfpyv9y6VqCjJM4CqnV2GiZNPE4mFunDFANHJ5Wn2BTKQhUBPADAWVOYTiTLvdwILwBJZkDT6TCF1SG4ol6EYFloeBv4WxDPAMgnrvbdfbSUE8Ov_lluKNMdKyzdII4ocvKAhBduwO087mkZamaPdLruSrvJW8DaEWUAB3R-VrVIEfL6Nqj9_bFLHN4kpSb0SzNuYlL4LJXYgnOjoDnuXGkEf9S6R_S1sXGgpbms3l1ZSwGQZ6bl4jI__Q4d_TUp_YOVmktO9qEC_itn_3XzTBvwSNV6Imn8AxbVWedcByuJFHA1IEQk9uxa5ukTXanuerIV8jaiMnoF4C_O2hn16i8chy43I_GKCwSmZNIC9Vwb1mIUO8lc07wDjbtPvusZwWhNeID9yw=w2068-h816-no)

<br>

이제 index.html을 작성해보도록 하겠습니다.

일단 간단하게 다음과 같이 코드를 작성하고 index.html을 보면

content와 footer부분을 확인할 수 있습니다.

>mysite/templates/index.html
{% highlight jinja %}
{% raw %}
{% extends 'base_project.html' %}

{% block title %}index.html{% endblock %}

{% block content %}
    <div id="content">
        This is CONTENT area.
    </div>
{% endblock %}

{% block footer %}
    <div id="footer">
        This is FOOTER area.
    </div>
{% endblock %}
{% endraw %}
{% endhighlight %}

![3.raw_index](https://lh3.googleusercontent.com/d6e7u3IyjNBT2BqPlCj1umCbU8kKcBMMMPt17WkiMlPIMkJ_QsxT9Gjz8wggwyTjUG36HZFWmVPQgHwFFhQSJQMp5ANJW2zvVDJKEXnHjO1vWcVwHThuu1bXletc-GyFwaueePpN2QVZoSzx6ThYU9Vccnj_mdF3RrnlX2qvVDdRuDoedH2Bd5XeP2891Yb4sl5YZZ_NoOjDT4g-pH_Qqs4OBYtktSIuVbgMRxC5QXib4rWmwPU3eQCdahgNApjv3UtMRJePnGuGC2tH5lU_bXf245D52yhyJE7FQU12FJ7oGQklsYELY8lZxIuzRlgVgi-RvDd_X1Jh0ptNKPP_kWh1LPLHLJHTKsMgbM2hnFjHJbruSGOS_blZmWy7dqo6Se-SjR7sAt5wBOQUD9ZtxDSzYnNJ1iAl_pKT4fIeej2MlWLYpEGKBHrqEWEDP8r04Ug-oDe6AsC-uvB-IAgi-5RmQm_enSKuQmv9ECyCYUK2D_leaEHVqlre4qSXyVWL66S7Mo4yKRUip--wYdLdgmIsYWXawBdJOn8cLBF2oN1jhsUJ98lNYHoP5upMjwjO8VH_04zan_cXvyYYCfURAQomQC8U9RkHldKmNKYuhg=w2068-h990-no)

확인 후, index.html을 본격적으로 작성하겠습니다.

{% highlight jinja %}
{% raw %}
{% extends 'base_project.html' %}
{% load staticfiles %}

{% block title %}index.html{% endblock %}
{% block extrastyle %}
    {% static 'css/index.css' %}
{% endblock %}

{% block content %}
    <div id="content_home">
        <div id="homeimg">
            <a href="/">
                <img src="{% static 'img/cute_owl.jpg' %}" style="height: 256px;"/>
            </a>
            <h4 style="margin: 0;">This is Django Powered web site.</h4>
        </div>

        <hr style="margin: 5px 0px;">

        <h2>Select Application</h2>
        <table id="applist">
            <tr>
                <td>
                    <b><i><a href="#">Book</a></i></b>
                </td>
                <td>
                    You can write your own post and share to others
                </td>
                <td class="Edit">
                    <i><a href="#">Add</a></i>
                </td>
                <td class="Edit">
                    <i><a href="#">Change</a></i>
                </td>
            </tr>

            <tr>
                <td>
                    <b><i><a href="#">Blog</a></i></b>
                </td>
                <td>
                    You can write your own post and share to others
                </td>
                <td class="Edit">
                    <i><a href="#">Add</a></i>
                </td>
                <td class="Edit">
                    <i><a href="#">Change</a></i>
                </td>
            </tr>

            <tr>
                <td>
                    <b><i><a href="#">Photo</a></i></b>
                </td>
                <td>
                    You can write your own post and share to others
                </td>
                <td class="Edit">
                    <i><a href="#">Add</a></i>
                </td>
                <td class="Edit">
                    <i><a href="#">Change</a></i>
                </td>
            </tr>
        </table>
    </div>
{% endblock content %}

{% block footer %}
    <div id="footer">
        &copy; onsil
    </div>
{% endblock footer %}
{% endraw %}
{% endhighlight %}

일단 이 상태의 화면을 확인하면

![4.index_without_css](https://lh3.googleusercontent.com/BpCjRzBjimyPlp2vT48l54J9k5GbEtbHRF_adQ_GJ4v9mmvzqnjmoAXBJzB2syYI5GgsP2Ep3BABI3N9nfSVK27_dCZ7yDGtT8Qwx4Zkf-f-mkjcGnvmlXX_UEG3FjrWORIu8365P7uX7CtPIdNDBPrJI4t4R-6BsNAL8BV_5wJR0M66CBnAY0osOSWCu1VCU0c0ftyuHJdJl4CfxdXv2dEiTaX__vu2rAHUsmJxWlgEsfp5DZNsc781cQcagbcHzZS94QaL9VSFq9kqJtZ5aFLR15ibTzegX1CqQkNYEuLLbuDXHf4aDx_Z8gVwqMpgxrmvB4QYa24Z50FvEdKXphPuXmCS2il0vC4HXSUPB56_3geNuVQwf7LJsnYchXZudVPAJR9gKCva5KdUEIruYXXXqT2y-1Ny_Srv0TFJx9kAqnJOPilXoRAgeBDjgqKmdMHv6sGnWUKzGjKeIlaQJS-OLF_1F_DjDPgfSg_QUx5m2XcDtVngTHrDgjDcDY_O9B5yBsJJ7tFYaemfxWCGOee6mwJzg1EBrz-rNV6gKfs8zEqUxBWe9n3Ip5yVlGZLrDYyPQGcEoYVtMMnRgWsymLXvesbBWZZvuCGeWusMw=w2240-h1480-no)

'index.html'도 static으로 css와 이미지를 로드하는걸 볼 수 있습니다.

이미지는 아무 이미지나 넣으시면 되고,

(mysite/static/img 디렉토리를 만들어서 이름 맞춰서 이미지를 넣으면 되겠죠)

'index.css'는 지금 작성하겠습니다.

>mysite/static/css/index.css
{% highlight css %}
div#content_home {
    position: absolute;
    top: 80px;
    left: 110px;
    right: 110px;
}

div#homeimg {
    background: #ddd;
    padding: 5px 0px 1px 0px;
    text-align: center;
}
{% endhighlight %}

이제 다시 로컬서버를 켜고 localhost:8000에 접속해

'index.html'을 살펴보면 다음 화면을 볼 수 있습니다.

![5.img_index_with_css](https://lh3.googleusercontent.com/UpTMWn7bDpmi-Yj3bv5LnL6SO_vxItiyWURaRph7PXtqr9PUCXDIeUentIH6lu5AxJiTUISxjGJLsYFxwdf3wJ5GI32QpBg13ZysY0uddqvKNotusnqgzwROMVjeW5ammoC1QQBB5Eu9yjU1taGLbuKpPuW7MQ37UBfrAiWWP0Z0qmd5UvYop8DBvOC4WL82KS-SKLRTLEOa5cIwzlzghwtbV3HMgNtHVxZK11ZRAEBgf9eXaGGXcT-WPdtHj1if1rnSVDl_OZepLLyAHBy8pi9omxgBlArlYVSVDdiXo3Siqn3GCRJcSkYazs0pEs4DVNFO_3lZ9w7pE5FPaWG8ldQG0QD3sVAhlHdXcaSmfPtmsSXOaVzKRTwiTlr5Mv7HyjIgWeg409DcPpFS2CvZwn3HYw6titE8C1BLXF0vdiKvUcHY9QIUiS7XUKqGhGZjhwIZcN3IdRfiQDvH8aqTD_YKOdeQs5vzkZrOSFLHi5Q-L4NgGn6Go3mYdVgBfLJkgZqTxM74uTKVozYdkAjL8Waf6h2BQnl3U0_QB776I_5e3f2nELObhUOA0iQKDrVILTY7gENLDtTm7KRbUBalc2TxgX_JNUestb_5zD6dZw=w2240-h1480-no)

<br>
<br>

일단 첫페이지는 아무런 기능 없이 화면만 구현한 것입니다.

차차 기능 구현하겠습니다.
