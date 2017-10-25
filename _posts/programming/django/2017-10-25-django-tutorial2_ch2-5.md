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

![1.add_data](https://lh3.googleusercontent.com/buI0cbFq6WHF_HN0cnZB0wcDnHg4G3vc_kY-0TQw7Fww7twdSvBcSy6s949IXQwCmizz6bTm7lpH8TYXRvEBXcbF-yyQEJ4qVl0P3byHlc4z7LP9MyT-a-5uVMQ-T9XxWBUSc__safyy0Sn0wik4TM9xX7KFa_iy99zTZzvUUx72lYuF76bk7x0Yjy1_ayHuUxTF3nagWxjQ6k01CuMRs-itGjJ0AEF4MixfjqBwmKisDv9Uldf6tKnkKiTGKMtLzDLLYoArAtI0AAyKSbtUeVnT_yuqBWOfufpzXt1VeenHO2cE1ga1q-0gw9essoP6AJsqv7Z6ClspeUew9Q2n0QSCnDg5hakWIip0g5AodAlIkWS9eR7l-qsCpo6NsSqGM7nTJGY5e40O6zmI9igOw-DMRZtEl_vMyW0H7Ea24Zu5BWERCNkJoHh_cVnO6zz7Vyn3lAPyS-7aRSIVLq6qChjXTj8qO2F2Ny5YK6itXsC-cyiup8TFqmN79NCAfARKPVGyw6-AhT4E8cAkAg1cRTeTqk1JUlxLFalL_c_ceKdfjIZBHGGy6uIhvt4C5qvemM47zAhul-5qwuaHvP0RBchKD_d-Xz3FXAHZMjnwZQ=w2188-h924-no)

admin.py에서 list_display에 'img1'도 추가하면 그림과 같이

이미지가 저장된 위치가 하이퍼링크로 나옵니다.

<br>

하이퍼링크를 클릭하면

![2.error_img](https://lh3.googleusercontent.com/EX6p3jDEGqtfP0NjhhEWmwc_qpiufXIuWVBAfQGl3E2cexr_F2cYSils7Chlbc9SBjlc_TjYQC5Q7Ym5dGNhmk1t5aYMCTHvXC5z6G736f4kRhCvobdMprttMQ9dFHF5OicI5s_hOVyPPs22JY7ssmxSmohLkDhdGRyg8d32gWdlyGsBh7dDZwO2eH2oim6DJRl1nTWwVKfKNmaYnr8zg4p-N1nTWmt-xmM2TMKVRtYt-nzpTNYiEtcblOJH-SXXxYWyDL9MW1c7ICHXqAt1xdaIyqQyOIATPOSTnb11N-kDgUvDxU8cgveJwI2EvtTRm7YYYhUDP6LZxd83SJpg3KNvoAfecg8TNB6a7KknEkk0udhtHdheWM6OI_kFHETYXW35FiiXjFG6rQMYskxqhtxxvPZTLis5TtCOpIoLmUI1yNmSrcQ8n7sOBCqrPADbYQYYqlysfsvh-w8qeOAGApHMP4tFYMf4Wz96Lg1dVWcLvkUycfrHQRw00kXUKK4amgBA7n-7crZrxFHYVb3QKcKy3CcSa49F8SoBDKGjQ11xQl2jPEupEeRuUEbhudPXI3hAXT4lkKBM1H7TA8RkbYdGvXerR7SuucjydJ1OgQ=w2188-h924-no)

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

![3.success_img](https://lh3.googleusercontent.com/EjxhTu8-4lQEUZySGQgRSWPlB6UIOhAKTcR_ok5XWoheG107V6z_PU5db0Q5s4o_wapIM7OcIRAtGLTCCqD36Dse8ePoqg1WO9oNc1ZTlY_VRqZ585lHtyk2bEzr_icZXlh53nuQE00Qd4PJtF8bIZ9bFZSHFr_qesolxp9By0cUVXcLFzg6sqni1YI0Q46pXkv0eT2_0NlaVBnZsfKhMp1OS_E2-hXHwwAxXJ5Kh3OI6z-QMewAEZfv0uQRfbHbVHO8cnNxayjUu_3wIYNFxqVa_Vh_XmX5JaKWsj1xT8I-1uX04T-afkyIkDymsdEMYGas1C4QMRWAIW9DACcFy7RkHiXRgORklQcXPeB1mkui0v_6XBnWL4k2aiYiUSiDIAR1sBWflT2UFne3Ah_7NARVVRmwP3UHBpHeBM_zbpZ7F-lHFekeR-J7R4qwUakls-QYhCnaTexS5fMlgx3QJ2OE6sfqLZ62MaX3bv5Mfvps4dNiKreZndInh2Wl0Jg0b9G-EWndqNW6V_qr6oGv7jUUvH5onaquSNubhgYGmfP7zENSfJwQLE6r6f-IqZI5TAM1ItJgcC0Pn0JIJgDI8moN0Wg0qKRtUl_7iK4bKg=w1832-h1078-no)

<br>

실제 파일이 저장된 위치는 MEDIA_ROOT에서 설정했듯이 /media/경로인 것을 확인할 수 있습니다.

![4.img_dir](https://lh3.googleusercontent.com/9O-FimUo-Bgmt3XSUu3KkpZNksRi940UvzfvYA4ofkEwK4FpeJ3PF4HNznVCjEdoTKU2Arnqx4tVdzT86O0Qzlg3nTwm2G8t7-K5_VwLnPiYkeKtmOj82iKznh6bDiUdje6NkILuehk7FJ6xFrakJMUnBH1iELk63NbEkjjA8JVK9gTyqt-XNC5UPRXxjM677ghBOZgPFGDaUp8cv5Bblw_JGzKj0NfUkfGpoxPPLTyWU0IVj1pxyJjBp_RnOR_DUqbzCYhy7Rgf6klRlZXvf9YxXwvIuvyCHq5aox9Ez_J4dAS5tsTPZEz7fujiU5KEtf_cl5Fuv74Wxc-b52WRRVAs_jH2zvF4i1HadpRsjAXEX4wxlGiWC5_0KbHBhJPUl4gN6BVHpc8MBB-VhoIkhi-um-UXoSsTkOFRcOvgvh8E1evGlJSPbENViVvVa65UhbzNqtkN6vv8ficuYyhEr55eSWlhW5K4tFhW9xKb16ZwGgk5GDZjllgtxYzVGEli3RtBsZXkQeYXyCSI8S08Fh39IHtP41yIpLq5EYOdM4LH_eiJEM3NBttC5n8RXftuDWTb_y5c1bV2CEpXpqxOVqW_MCtdxhazgXtKpGIumw=w1726-h1078-no)

