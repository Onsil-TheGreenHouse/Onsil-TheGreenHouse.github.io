---
layout: post
title:  "[Django Advanced Tutorial] Ch2-3. django-disqus"
date:   2017-10-22 13:50:00
description: 2-3. django-disqus
categories:
- programming
- django
- web_programmig
banner_image: /programming/django/python-django-logo.jpg
comments: true
---

장고의 댓글달기 기능

---

이번에는 포스트 화면에 댓글 기능을 추가하도록 하겠습니다.

![img_disqus_first](https://lh3.googleusercontent.com/bW_G-mVb-AoxiXOm3vV80hsyshM7byGgwoBFzWwqZoBPcNRDK32GlJMY6FvHjfd_cIltOo-b-ytiG2GVeTRbbZw46LlN4rSMDbhttnOzAnD7uf82iYzcmmAFo6LLpUk3wGy0ZIc4S2mZvu8kg54SHV40krsjnjlETND2MHKBapn2osnxfakwWdU3CuhaIxRiOL53I1s8NSJac9CjufXAepVkWSVrT_UvbUZZD5nhSjP_XoDg9TUEYBqafkIOvWgWpRSAFpvSU4T93Sqaj5qs3lezj8ycjD1pjktUzO_gnYXRrK93h6grRCGU74q2-7V-qnSiwqS5JCp0KqYvViriQO0j337AOiPgT3-HZaxEboNk7isuUVetgMw_vc-XfKS30hQuOcVLMM-z47G-_nK8jx2AhIpJWY3Xk804jb6f0eOEepWs8fMPDyzgxnZp-fW2s08LJ9LIg8ZWLSuFPxF_pJAB49GsKD9zBryJ36jJ0tTXCYlrvfgeoRattTppkB9CxrYNtbOFSX3zTnPoToWQQwRo5xtSJj8MdEHFlfa2Fyq5NY2MlGcNX1jpJB39kf0McCvTDYQ87PdhNLvNTp0SqPzLCJnl2Azu28EKH_8KgQ=w1350-h1320-no)

이번에 필요한 패키지는 django-disqus 입니다.

원래 disqus는 댓글기능을 제공하는 API인데, 이를 django와 연동시킨 것입니다.

<br>

## disqus 가입 후, site생성하기

<br>

django-disqus는 댓글을 로컬에 저장하는게 아니라 disqus서버에 저장을 합니다.

그래서 disqus에 계정을 만든 후, 자신의 웹페이지에서 사용할 disqus shortname을 받아야합니다.

disqus에 가입 후, 로그인을 하면 다음 화면이 뜹니다.

![disqus_main](https://lh3.googleusercontent.com/IRjjgZ_denVD5SPLbgfdTC0vr1jANzwyIWRvXJQZWRUhsns-Lqx7ihd7fFgyFyTWX-3lufJLi5nsHKKxF232uqVUTbuk80XUMDfCYxZYpx5uaCkIUgkatYxiFwGMSFmwOSg1k9J2gH_NhV9gveFokNXOhXl5gJ3gIuL0YfTPo3Fe6T0qZ-p2BujzZ0mP7AV-vCBCpLINeSDJHr67VLinyY54aWgRGxQEF71dgjJZvTCWouFdDtOLebofQgwdxT7x0mP63vuvEiVScAsvGAY7FXUSBfxFJwtzzBomptQlcPSVQv00wQ-2TGKdPJOdjAem5DGmrd2N5sxmqtJjv42VtsIfE6_MIQulFlUhqap788VGmNG36kYjMdkOSCXCUpuePE_IAYljVlh_jfjhzEGt8crDzA22cJFmkoAJ__uz39wqGQPa00vI7IOo7LvvR93VS3fIK4-HsuTvCOpSUCM1tOGlNbLfdS4XdXGJEqHYCwe8vl5497i_W-D_pc76V1Ov3tG1-MaTcdCzk0yULCAaWuvg7ZBPf4H2sbDmMtri-7DfbE-Lrz2I50LZPR3MIxXsZSjgKD4cum0TakMaIyT_G8MrU4abIMn21mHN2-uiVw=w2054-h1106-no)

여기서 우측상단에 admin에 들어가 다음 그림과 같이 새 site를 만들 수 있는 버튼(+ New)이 있습니다.

![disqus_new](https://lh3.googleusercontent.com/T6Z-qJLBQUrg3y30Amnics9eB48lo-m1yG2NfTaskfhcsoqVmHk6jmMbTkqE6zVnkM39QyV1r2q2pg2LJu7z4ulNVJwy9fluQ6-PvrZmsZQCaJ7yFB4vOc3BRj9ddDs_38ASVcenVzB3zauRUk5B9s0m-fwa_g1ly2Pfk3t8qpQsp-3UYiTiMegSFOAkz4maWdgDkgamgqd_uLXAKEECfNP9mEaWJV8g4opXFppbLZ1XKpaJbxhADNvJq7h446rl5654CURzqs3NnimgW2MxgFjtDMhsue9UX4vuC3ERjInUSEjyk-0lA9G7quKswVEB_WLCqPrVlbV_1j31HUdQpo-XmP9tMYVfyon6fWQPIUu3LZivB_hVWYxQgKiA3NbTE-t0cAGiFsV6Ty8WbleOQi5Wdkr2ujE-CK1WdbIrT1o9nrV0R0wJH52Ev34WhncABfsVTeVNWcvpKLFRCne-wYrdkt4JYQHPLbXm2-aVj5z3UvSOW5TT54Nqha7AkMcz0nr1AH8HsTyOjWyZ5421LlWu1Xy6YXxSyY8XD6cu5rRkX_j38PaeDWCvYvdiZokU22BL3l5kKGa0rbcx5pjNYUtEDabtY7B_1uvd9Unxbw=w2054-h1106-no)

그 버튼을 눌러서 새 site를 만들어줍니다.

![disqus_make_new](https://lh3.googleusercontent.com/0VCeCrzEkNtaaUYxCJf14IAXcYm6haHo1v9w819DL9fd8SiWdKTXvPQRVCXAqLOuaFARQB006E0lgwwKP4eus6Hv-tuQz6ry6tmdqROSfeYST7zE-Kk1W8arQC2J0Z0yZxt2UE_xKGt0yn5xbEkYjJc1nCmkJpuKCvBvC7rv5o5gpTUaNcZZabc8S6GslmWJjGSPA5nSIGQUKlEloOYsYfO8gYBDU58X9ZkK_Cep64tBjObEar0sHGK7AGGHRYGzZrFIQMs84jBG53ffimsi_b9uxmS7ipVazMPfwxFHnPwx519UjvqZPysC8Mq2MWkAziapfynvOc51X1GRLQfh4Xc5_8qqsqiVZVDNYHopKRtlki7Wyzt85RRATPYAWVufr_grMRo7K_2WfqpdU3PxcJQAMg7EHqWgvJwFqnZ6mzs0ED1k3bbsPmxoGo-tCor-vUu1_JNGnqgg--IF0Tc6Qv1SDFp-5tCHrLqeVjKD6_akliQCGgAf1k2OoW0fSTzGJ--AmFVahJSmyYiuew-O7s8i4ZSdb2sdnwW737XPPNUHbIs9JiQ7R_LX5GAmTxIFSa09B_5ZYLI5wlQn9ERzojbiZiIDvsSNBL6YJ3EbKw=w2038-h1320-no)

website name쪽에 보면 'unique disqus url' 부분을 볼 수 있습니다.

settings.py에 적을 사항입니다.(여기선 django-tutorial1)

만든 후, 뭐 고르라고 나오는데 무시하고 다시 메인페이지가서 admin에 들어간 후, Edit Settings에 들어가면

![disqus_edit_settings](https://lh3.googleusercontent.com/eLnjm17XUYTsisoJP0aM0GnjUkzNJjcLdv-dhVU7NorxOSzN0FPgF29L3t5hnumNNptfFgvYqHLVrgiktGlgR0ciBSlJxLPPvqbW0ueQwyP8cuKk9AdbLhLrmeLiMv-ZigOwUhSaH-NmXYm5HMmoyG6z-rWoCCfrKW6NPR0iYwLBeS3up-NB6M4YacaMAlybDczXhZlRpStUwF8lNkG-YWVHHdKCixGIN_I8pH5M1ZK5OH66EHqrgM7irPg_X-Yd5K8aRwC5vOaWTOkMmNlvVhs4ESE4OXgPB5q3lyK9knDM_TQrPcb-x1sTdtjtxwgTscX5WlIkc70h3VM5CAS3fmvAlqcfltw6u3zesag7aTeyPljLu1r47Y1rEJ-Df0cdzLOLjGrA3kXQIxog2DhSZMXXJQ6tZkhwDDEywgyVUv19RtGR5rGnosZ2QKSMz-NYPu0gsJUmoE9L-yGE8-5fBMm3QmkR0kk91OtZizOxEWLhVNae3lLL0-utvpBCOXMH9GO1VoJxtpIqXKQhBWXQsIElKUajiJXI8B0ePqDyXCUclDAEthufvjV0aRLCt8WFqGW2ltEKCSJp39JRRaMtegq7hlZTNp81F2_tLZpq6Q=w2038-h1320-no)

다음 화면과 같이 해당 site의 정보가 나오는데 여기서 아까 말한

settings.py에 적을 shortname을 다시 확인할 수 있습니다.

![disqus_check_shortname](https://lh3.googleusercontent.com/sUs_EjSfitVSnRWXfim7JxlxLQkOarKboeq3JPOMxPSkfJohs9XBOFMfi9gybeeKoOz6APbBLeZjfLPrzU4ANvspf1_6v6Ep5ldy_qPe1GetBxBe211ukxj7Tqof_tata2T5QKwCb9PVJ85ei2n1q1PbjiNBejwYKe3dvZ-reOG2Ap9Gkss-ey-Jl_mCCgcsgZxmp-F_dY3wOMipBM-1alK26rgPExypXOdrgTrSfXhzBt5ME0mmN3dRVOZjQgs_WstCM9tNsd23MJV-Yw4T52fmZVQ0HqAYt2v49h15ZCiMWVklC6WIrdCuzGwNSdr2CMd1O46xZ0Jotcqfl3xgund6MagoTk6oWZ0n0g3ZltdvfrcoELQh3hT0FCb2hJaH6CppSmFzAct-qQQRyJhxkLqJxcY-20Fd00hrl74CXL920Sp00JJ4BqeqhvZqCaqJEpCA3j5CAbau4dyth6kD-iTVT_QMEa97CZPVJiAHu18HeUO3yrcq-5ahBJmObRm7OcvbR7hKda_in0aXJT83ZPkgaXD5qEDu53eloVXEm2c9NLwnkvpf9bx5SWHZrKLF0aCxsUdBIdKMK1jXCQu8BdPDLT5M6fxs9R0YEfcPuQ=w1778-h1320-no)

<br>

## django-disqus 설치하기

<br>

{% highlight bash %}
$ pip install django-disqus
{% endhighlight %}

가상환경에서 pip를 이용해 django-disqus를 설치합니다.

그 후, INSTALLED_APPS에 추가를 해야하는데요

django-disqus는 apps.py가 없으므로, [docs](https://django-disqus.readthedocs.io/en/latest/installation.html)에 나온대로 'disqus'만 추가해줍니다.

<br>

그리고, 여기선 docs와 다른 방법으로 세팅을 하겠습니다.

disqus에서는 각 사이트를 구별하기 위해 API_KEY와 short_name을 적으라 했지만,

여기서는 django의 sites 프레임워크를 사용하겠습니다.

INSTALLED_APPS에 'django.contrib.sites'를 추가합니다.

그리고 SITE_ID값과 DISQUS_WEBSITE_SHORTNAME을 적어줍니다.

DISQUS_WEBSITE_SHORTNAME은 아까 disqus 사이트에서 확인했던 shortname입니다.

SITE_ID는 임의값을 적으면 되지만 중복되면 안됩니다.

{% highlight python %}
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'polls',
    'books',
    'blog.apps.BlogConfig',
    'tests.apps.TestsConfig',
    'tagging.apps.TaggingConfig',
    'disqus',
    'django.contrib.sites',
]

DISQUS_WEBSITE_SHORTNAME = 'django-tutorial1'
SITE_ID = 1
{% endhighlight %}

그리고, makemigraions와 migrate를 진행해야합니다.

모델을 바꾼게 없는것 같지만, 새로 추가한 'django.contrib.sites'를 보면

내장 테이블이 존재합니다.

결국 테이블이 새로 생성되는 것이니 마이그레이션이 필요합니다.

<br>

## 템플릿에 댓글입력 기능 구현하기

<br>

댓글입력 기능을 구현할 템플릿에 들어가 다음을 입력해줍니다.

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

<!--여기만 추가-->
<div>
    {% load disqus_tags %}
    {% disqus_show_comments %}
</div>

{% endblock %}
{% endraw %}
{% endhighlight %}

제일 밑에 마지막 div태그 부분만 추가한 것입니다.

<br>

이제 로컬서버에 들어가서 제대로 댓글기능이 구현이 됬는지 확인해봅시다!

![img_disqus_complete](https://lh3.googleusercontent.com/cW6qFc3U4as_9XGIj66iheWDsJ-M4kyKjraP9lFi8MEMyS71LiDArl8mPBbC7oEV5eNNOxtujpgOPXEjwUgpHVuH_msisMrr_FQSUQrYEJuEBjYx-s_svK8szm-d2qfSzUeMIbffZCNrIUe3R4byfnQDjC2xPoS7Rpz4IYFTN7LkhWDDwP-4F1NV8pq3P3fmHc4yMQXQ01CmBQ9Shvc4TOoARCkbRWfzHMx8PrA5HMy6lrLC19_hnkvwWaM45lyGyROqQvTljMzHbGyEcmXOAmcwbkKZDlApbBI1gsrLM2KjaUUUluMRUfaTJScqietUt-f48kgoar39r2deigZDR78EBkYVkumCRl1cBT_qAB8--WiYwBWgFrv8vilqldlu58EcKUkfzSXODBWFf5emMAtIf4uTBiG8RWFUU57OfN5QMOgOiwM6a4xpuy9O1PX2KFNFSAR7ctNu5YHTLih9iFyrxFPI78Q_SFVVYbJGqXz_eky2DT5M0GCRfgbY2ISERbYHvmiG6jL3vfFli-ngh_ZtGJ1ZRrx-L_nANy8Qg2MfphggqsdF6jMX7Meobok9T0xvMNVqLIB9ts6o-NCoxEHyDlm82y7ocxyy90nJUw=w1350-h1320-no)
