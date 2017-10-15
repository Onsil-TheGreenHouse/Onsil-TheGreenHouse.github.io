---
layout: post
title:  "[Django Advanced Tutorial] Ch1-3. 테이블 작성"
date:   2017-10-14 01:50:00
description: 1-3. 블로그 테이블 만들기
categories:
- programming
- django
- web_programmig
banner_image: /programming/django/python-django-logo.jpg
comments: true
---

각종 모델 필드에 대하여

---

이제 테이블을 작성할 순서입니다.

블로그 앱에서 필요한 앱은 일단 Post뿐입니다.

그럼 Post에 필요한 필드들을 생각해보겠습니다.

<br>

>- 제목(title)<br>
- 간단한 설명(description)<br>
- Post의 내용(content)<br>
- url에 필요한 슬러그(slug)<br>
- Post 작성날짜(create_date)<br>
- Post 수정날짜(modify_date)<br>

<br>

slug에 대해서만 간단히 설명하겠습니다.

블로그(https://ex_blog.com)를 만든 후,

'how to play teemo'라는 제목의 Post를 작성했다고 가정하겠습니다.

그럼 저 Post가 나오는 페이지의 url은 어떻게 되야할까요?

<br>

정의하기 나름이지만, url에 저 제목이 포함돼 있으면

url만 보고도 무슨 포스트일지 알 수 있고,

검색엔진도 더 빨리 페이지를 찾아주고, 검색 정확도가 높아집니다.

<br>

그런데 url에는 space, 쉼표, 마침표 등이 들어갈 수 없습니다.

그래서 사용하는게 slug인데, 예를 들면 'how to play teemo'의 slug는

'how-to-play-teemo'가 되서 아래와 같이 url에 사용될 수 있습니다.

>https://ex_blog.com/post/how-to-play-teemo

<br>

그럼 테이블을 작성하도록 하겠습니다.

>blog/models.py
{% highlight python %}
from django.db import models
from django.core.urlresolvers import reverse

# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=100, verbose_name='TITLE')
    # unique=True: 특정 포스트 검색 시, pk대신에 사용하기 위해 유니크하게..
    # allow_unicode=True: 한글처리 가능
    slug = models.SlugField(unique=True, allow_unicode=True, help_text='one word for title alias')
    description = models.CharField(max_length=100, blank=True, help_text='simple description text',
                                   verbose_name='DESCRIPTION')
    content = models.TextField(verbose_name='CONTENT')
    # auto_now_add=True: 데이터가 생성될 때 생성시각 자동 입력
    create_date = models.DateTimeField(auto_now_add=True, verbose_name='Create Date')
    # auto_now=True: 데이터가 수정될 때마다 수정시간 변경
    modify_date = models.DateTimeField(auto_now=True, verbose_name='Modify Date')

    class Meta:
        # 테이블의 단수 별칭 설정
        verbose_name = 'post'
        # 테이블의 복수 별칭 설정
        verbose_name_plural = 'posts'
        # DB에 저장되는 테이블 이름을 'my_post'로 설정
        # 디폴트값은 '앱명_테이블명' (이 경우엔 'blog_post')
        db_table = 'my_post'
        # 모델 객체 리스트 출력시 정렬 기준 설정
        ordering = ('-modify_date',)

    def __str__(self):
        return self.title

    # 정의된 객체를 지칭하는 URL 반환
    def get_absolute_url(self):
        # namespace=blog, name=post_detail인 url을 reverse함수를 통해 생성
        return reverse('blog:post_detail', args=(self.slug,))

    # modify_date를 기준으로 이전 포스트 반환
    def get_previous_post(self):
        # get_previous_by_필드명()은 Django의 내장함수
        return self.get_previous_by_modify_date()

    # modify_date를 기준으로 다음 포스트 반환
    def get_next_post(self):
        # get_next_by_필드명()은 Django의 내장함수
        return self.get_next_by_modify_date()

{% endhighlight %}

대부분의 설명은 코드안에 있습니다.

get_absolute_url함수안에서 쓰인 blog라는 namespace와

post_detail라는 name은 나중에 urls.py 작업 때 정의할 것입니다.

<br>

get_absolute_url, get_previous_post, get_next_post 메소드도 다음 챕터에서

사용하도록 하겠습니다.

<br>

다음으로 admin페이지에서 Post테이블을 관리할 수 있도록,

admin.py에 Post 테이블을 등록해줍니다.

>blog/admin.py
{% highlight python %}
from django.contrib import admin
from blog.models import Post

# Register your models here.


class PostAdmin(admin.ModelAdmin):
    # Post 객체를 보여줄 때 출력할 필드 설정
    list_display = ('id', 'title', 'modify_date')
    # 필터링 항목 설정
    list_filter = ('modify_date',)
    # 객체 검색 필드 설정
    search_fields = ('title', 'content')
    # slug는 title로 자동입력되도록 설정
    prepopulated_fields = {'slug': ('title',)}


admin.site.register(Post, PostAdmin)

{% endhighlight %}

<br>

이제 Post 테이블을 새로 생성했으므로, migration 해줍니다.

{% highlight bash %}
$ python manage.py makemigrations blog
$ python manage.py migrate blog
{% endhighlight %}

이제 로컬서버를 켜고 admin페이지에 들어가서 작성한 Post테이블이

잘 나오는지 확인해봅니다.

>localhost:8000/admin

![1.admin_first](https://lh3.googleusercontent.com/Swm2t3U2dKZNh4h_BB_vjyVHEOCI_QjBktVXxNRaNaC8sjzfTymoxtcbVYCkg3q0xpVyGJE3KJYDnK0-qlmOPIkd_in9eixyQcg0gXqcpBbVIiJDlo0FXknrhYg2cg2JyFbq7L5uEWTSvLRBY7k71PmXtKrHGd33SG4HfVl12T0B0B8aG6dftfBasyHVHP0X9IWaZ8MQ-WmmRbqszrBgUzCyMmDM-zoC2GmtRsAzXqn0YB2ofSTH-hDFOpwq-2AmCv_QFLxN1uYO905rVmXYvkXA1ftaP0MWWHfBCJaF1-fcMPVeuKhWWhv1UWK8cLdJDpq2tZ7qGSapPblRcHiFLTDzNroyerFmihcVYEs3JdK8wWsivKf2wxs95_FagW5SRySSJyM6ZbNeuDcK7XCT7FMr38qY94tzn8nYVQkp6Amkxs4hkCbm5QD0R_yqBZbbiJj7cUTkw-SwOlZhKX8E8CR8ESmoZWomG19Ky2iPHMiZjrQTKdm8cQF-_l_n9g0O53NxRIGm_lGDL1gWep0YeF3RwraipUnvealH_kuFz2wkICGorMPf7320S-w7RVOqLmpyHmgl82pvR44c-GA0YuoT7WZfttGDFdU2eXFFtg=w2510-h1492-no)

설정한대로 검색바가 생겼고, modify_date로 필터링 기능이 생긴 걸 확인할 수 있습니다.

ADD POST+를 눌러 포스트 하나를 작성해보겠습니다.

![2.add_post](https://lh3.googleusercontent.com/gIcHjJ-k4VMAI3AhCZTBKDER9iv6nPiQAFi0wRK6cA6GuceiJ8MmXeM0MHtMhisU_P19klqOd0fAlMHdIKyUvRxY2IeKK-RPoj0xzz1AkR7tcFvnJKjV7DrSttDaun2p8mrQkYPU7szXtFdczk9y4KawZweR9JsgwXtbgxiBROCVb_n4AK-p3BFrpRVP_bjJMaSwL0hU84Mi_SJOVNJlvKnALB6nX0R5Gm2pUjJjEp_vYorVhawxWAxgsoJJbOESbfOlCpteE7OP7JMrVgEah1qpbK7QJumQpxWHVlfqp_nlQuXj-PSQ-aS0u5ZfT1DJaSNcc4iEqycD6BdOfwOR_1oPxpWlVYoW_lsUExSjLBrJDP6sLpJwYFktbgIft8HBywiHRmUasn9qz-hrumd_xXYt53rwKgHHwB7x7myuuVND7rCw7X8-jdHgvpQ5Egf6Bk-9DEl_fhDyHS_c_ssLUhTSzM8X1FKkYOmtN7VIb7LOorkSARG7cAzHeHv7ZpXF3fGM9oySdobSGtB6dz-b3c2L1hnXb57UnfTvMlO3HV3UFqYw3_ybhfkPXC1-09aiLUjNZ5MZARk1IyH3BN1BxG7QZx1Z0-H6OpIP1SG7pw=w2348-h1670-no)

verbose_name, help_text 등이 설정한대로 잘 나오는 걸 볼 수 있습니다.

TITLE에 뭔가를 써보면 Slug가 자동으로 채워지는 걸 볼 수 있습니다.

<br>

저는 다음 챕터를 위해 아래와 같이 5개의 Post 객체를 생성했습니다.

![3.add_5_posts](https://lh3.googleusercontent.com/-eP6yYGbV7_qK61cPcNtgIzgC1b7VnC_HEX01i76_1J6aUK-sATy4EFo_yux7yl_qg63uWogdzjhRDPlB_u7K9l5iQRR5Ot7GOklW1JiZqiLUWLCpt8tEFGY_j1BwMFLbyTBMA3Sb8d5uI1NDF4jGLp8P6Wz20e8IFUeZGd9838jYHblqJZWbZhIm7Nc37utmJN4zdDexne5iHl5uirTpnTzZf5Bsl03k3HhR7wkagThW72qq1iEQICnI6Z0ZCsyZcitWY_YJ3-_5X5KY5tSQEnY9y4TjnBdpDimh0OpgOpBbHqEtE0R7NFxpPOC9V2F1WN6uK2FxwmBL-i8-X0Evo8ELbdnr-ncS3Ejunr4LtgFGZxrI8guHRwq4l0dxaJQ_H4CMhG9e-45ivs4ph7odi7UvtWDykMD8nHT4cXb_zKqTgvdlH-Ehxx5QIy9kkQt8pvfYpb1ZnE23qzOBSXyc4SipNnpup6ozZ1h83UEHMqSVSrmhlWpA5dd1Zafrg3GXW_vPtwcaWfPu80ImfSzBL4M7SLDe2Ni3s5d1bLk6cOp8onPhSe2wTxBVRcHbXEZuzZUrvPPph2VwVYVpmZ-MYlKAZfGhd7M_rwOLusI3A=w2612-h1084-no)