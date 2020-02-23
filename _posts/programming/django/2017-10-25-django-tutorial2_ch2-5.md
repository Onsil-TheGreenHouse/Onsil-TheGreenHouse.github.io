---
layout: post
title:  "[Django Advanced Tutorial] Ch2-5. MEDIA 설정 with 이미지 업로드"
date:   2017-10-25 00:30:00
description: 2-5. 장고의 MEDIA 설정
categories:
- programming
- django
- web_programmig
banner_image: /programming/django/python-django-logo.jpg
comments: true
---

장고의 MEDIA 설정

---

이번에는 ImageField를 이용해 이미지 업로드 기능을 알아보며

장고의 media 설정에 대해 알아보겠습니다.

<br>

먼저 장고의 ImageField를 이용하려면

Pillow라는 패키지를 설치해야합니다.

{% highlight bash %}
$ pip install Pillow
{% endhighlight %}

그리고 아무 앱의 아무 테이블에 ImageField 하나를 만들겠습니다.

저는 테스트용으로 tests라는 앱을 만들고 그 안에 Test1이라는 테이블을 만들었습니다.

(INSTALLED_APPS에 추가, admin.py에 추가 등의 과정은 생략하겠습니다)

{% highlight python %}
from django.db import models

# Create your models here.


class Test1(models.Model):
    char1 = models.CharField(default='', max_length=200)
    img1 = models.ImageField(upload_to='test_photo/%Y/%m/%d', blank=True, null=True)

    def __str__(self):
        return self.char1

{% endhighlight %}

여기서 img1필드가 이미지 필드입니다.

upload_to는 이미지가 서버에 저장될 위치를 의미합니다.

<br>

이미지저장을 위해서는 설정을 하나 더 해야합니다.

바로 settings.py에서 다음을 설정하는 것입니다.

{% highlight python %}
MEDIA_URL = '/mediassss/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
{% endhighlight %}

MEDIA_ROOT는 실제로 파일이 저장될 위치입니다.

MEDIA_URL은 실제 파일의 저장위치는 아니고, 인터넷 브라우저에서 주소창에 접근할 url입니다.

즉, 만약 'asda.jpg'라는 이미지를 2017년 10월 26일에 Test1테이블을 통해 저장했다면,

>실제 저장위치: /media/test_photo/2017/10/26/asdf.jpg <br>
url 주소: /mediassss/test_photo/2017/10/26/asdf.jpg

가 됩니다.

<br>

보통은 MEDIA_URL도 MEDIA_ROOT와 같은 값을 설정하지만,

여기서는 차이점을 설명하기위해 다르게 설정했습니다.

그럼 이제 마이그레이션을 하고, admin페이지에 가서 Test1테이블에 객체를 하나 생성해보겠습니다.

![1.add_data](http://drive.google.com/uc?export=view&id=1JWlwbq0yGIeA9mrdJA_I6vI4THyo8dYo)

admin.py에서 list_display에 'img1'도 추가하면 그림과 같이

이미지가 저장된 위치가 하이퍼링크로 나옵니다.

<br>

하이퍼링크를 클릭하면

![2.error_img](http://drive.google.com/uc?export=view&id=1V3cxdzaFUzhuigeFUljRtwS0npfGSPgI)

주소를 살펴보면 MEDIA_URL에서 설정한대로 mediassss로 접근하는 걸 볼 수 있습니다.

하지만 urls.py에 mediassss로 연결되는 url을 설정을 안해놔서 에러가 납니다.

다음 코드를 추가해줍니다.

{% highlight python %}
from django.conf.urls import url, include
from django.contrib import admin
from mysite import views

from django.conf.urls.static import static  # 추가
from django.conf import settings  # 추가


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^polls/', include('polls.urls', namespace='polls')),
    url(r'^books/', include('books.urls', namespace='books')),
    url(r'^blog/', include('blog.urls', namespace='blog')),
    # url(r'^$', views.HomeView.as_view(), name='home'),
    url(r'^$', views.IndexView.as_view(), name='index_page'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)  # 추가

{% endhighlight %}

그리고 다시 이미지 하이퍼링크를 클릭하면 다음과 같이 잘 나오는 걸 볼 수 있습니다.

![3.success_img](http://drive.google.com/uc?export=view&id=16w1DLODMowFG-6rpaXFrAteHmX-5aEe_)

<br>

실제 파일이 저장된 위치는 MEDIA_ROOT에서 설정했듯이 /media/경로인 것을 확인할 수 있습니다.

![4.img_dir](http://drive.google.com/uc?export=view&id=11ub0uT9hJnNAWCijtgWeVwCDGBtXVMJW)

