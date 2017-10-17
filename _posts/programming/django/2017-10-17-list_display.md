---
layout: post
title:  "[Django] admin.py의 list_display에 대하여"
date:   2017-10-17 22:00:00
description: admin.py의 list_display에 대하여
categories:
- programming
- django
- web_programmig
banner_image: /programming/django/python-django-logo.jpg
comments: true
---

필드명의 중요함

---

일단 이런 상황을 가정하겠습니다.

>tests/models.py
{% highlight python %}
from django.db import models

# Create your models here.


class Test1(models.Model):
    char1 = models.CharField(default='', max_length=200)

    def __str__(self):
        return self.char1

{% endhighlight %}

>tests/admin.py
{% highlight python %}
from django.contrib import admin
from tests.models import Test1

# Register your models here.


class Test1Admin(admin.ModelAdmin):
    list_display = ('id', 'char1')


admin.site.register(Test1, Test1Admin)

{% endhighlight %}

<br>

이 상태에서 admin페이지를 보면 admin.py에서

list_display에서 설정한대로 id와 char1 필드가 보입니다.

![1.img_admin_normal](https://lh3.googleusercontent.com/SLZSxjqhNwm4CQGq4pH7VSruPYExChtSiKnC0bLej0M2K03TtllDGam3heXmftSW2-QQOExqu4HlLt5MNEBW3I_iuFdVHUBbv-8XlQpjgOI-RSzrV28KweZFFYQVdKzStgV1Waf6hRQhBDU3szBYKmg4LCfY2Ecj5EyylBiPX4LtlutMPd4MtTvuHwz7_V1zRKavUb5OTuUXPbOjG1Y_p70JXa2f9XWi8mC9g4dDitRkncJir-sIsCLqRM0DhjKOF7LrBgilVKOs2l-rZmtyiRhdjA3jsLzWa9Y8UWaIbqiKiEf85mJ5qCflMSDsUBKPKWctafGLT6GivF6thJO4D6K6gH7rwQMnLtUJUfMZPCzBPvt3YoiRQAZgWeHRScnaQxFSss0XP-kvq6hPqYd6zi6_fRWl58NU1wx8n7qnLfrKT_zL4zVKxL3FOa6Kbn5TJjnTEl_c1L8qZ-eGd7KUrZmsYjYY8briDxPtlKQOdPTvI-ELA7eIndc1qujnjN9m7VLEc6tfWJknhwk7TgFwrRotXHE1Q-_JHvQGFcJo-SzqdEUQGoaWaZ3QeiJCyk_UgIWq_Z3BKzQcwozYnseZtPT0FXjOLB3SNdj1SGH_Tw=w2170-h1424-no)

4개의 객체가 있는 걸 확인한 상태에서, 다음과 같이

list_display에 'delete'를 추가해봅니다.

>tests/admin.py
{% highlight python %}
from django.contrib import admin
from tests.models import Test1

# Register your models here.


class Test1Admin(admin.ModelAdmin):
    list_display = ('id', 'char1', 'delete')


admin.site.register(Test1, Test1Admin)

{% endhighlight %}

그리고 admin페이지에서 객체 있는 화면을 새로고침하면...

![2.img_admin_del1](https://lh3.googleusercontent.com/IGVyAzzfs4-6fHIPfjJiW8LGAWJ0CBRzw9AgkMaH-UQIPwteaLIDHQWFaiv41jXjKTUjKt1kACHLdPNQ7QvMUE6xgvFIQX-OJdZ-0kFrZxkIMT5xr-1yvNBjSqlQgOWCtN8EClbKY6nKTNwNAwKmVHe4K_fZ5dgA-JADhSNJarVWvX15gkMjjMH9-2Suaxv-wq9F4ILsvitCppyQLrRxVjBWaRRweBomj0q2cBLQRGg_K7d7mt4kOyXOLQMIM_jowCwTozDZ6zPQI4P6n5RgxuFfg7ulL7hyo4C36fXp5JKJZwTRETnddiNO96rZ1906KtVLwd3A865JeiZwP5hvT2cusdpRAeLpYqNS0cuKWK5yLzPsvmk5LT-okvF9mPMIpLSEGD_cu8xKjrs3aR7lNKGMzYE6PVIzUTOWLw28f9x8okAI55xfyTtj98Wu1pwATJXv6MRXEPqDiZLG-rTsuYCDxIM7GjlHANRpQORGmf_xdrt-5d8B3vq8Czb2VqVi_ZE1lzqfxNg99siCEWzVDxdGLc5VYffVp871F0UGna8yI9NneLd06ddWk2PPRICub4TEn_fEsGEXg2UxNC1H1mA7-JCoqo0YKCMMs38lcg=w2170-h1424-no)

갑자기 DELETE 컬럼이 생깁니다.

이 상태에서 다시 새로고침을 하면...

![3.img_admin_del2](https://lh3.googleusercontent.com/Zmfi2Q36r_EHwZML-Si3eN2ZXIIajG92PPWm4wAc99w4NWJQ3avQGLb1JJ4Y4CEWJYRWv9wMhvSD8y_O9igHM_e9_NHofSQuzN1G_OLq7IlZ-4Hp6nvfpzPhq7Sp6F4x_VnU-Ca3x7r6s_frlfDadu7fAwaK7LAo9I3jlcQRV0-mnNcZhGelCiWNMuXX4ZNEt7-mjQzcyJq5WcwfhwdcgL9yBqF38E8wWEx2UwKXl1O5rpKKhee5cr6wN0ZnUIGvrr97FOdoL69bZEEGUfYmibGWbfrhoyr_pkpI0lp5ChmuC5O1ZQQZ0FAEPrvh0TnA9-_wfRP6RqKGVqjEDRnBrQyTzZX0qZkRUg4XHDn9AmfuvhnspAWGrq9MCIh6ySPx_9H3QY5McJNp9p5nPVdicpLxCcnblyD9Meg6zMzUKokYZw-gaCMx4bqzP7rtYKArRbrG8GSVELnORzEtQzDXjYtvqBAR7JvnAUYdMV2rMvoDvuE2t422u2bV3-IzeSfSYmDR3nWXdRWsHP8Qr6L__xZ8OHYJ3hCwzOJltdytOzCVYnYMxnZjWPTZDJqhI-ZMqwkBip0btc3BkVXRIEgRSxj6XFptrxOv9ZbPhyKiEg=w2188-h1016-no)

데이터가 fly하는 마술을 보게 됩니다...

<br>

docs와 구글링을 해봤지만... 정확한 논리는 찾지못했지만...

객체.delete() 라는 메소드가 있는 걸로 봐선

list_display안에 'delete'가 포함돼 있으면 delete 메소드가 실행되는 듯합니다.

<br>

여기서 얻는 가장 큰 교훈은

### built-in으로 네이밍 금지!!

<br>
<br>

## 덧붙이는 말(날려먹게 된 경위)

<br>

제가 실제로 이 케이스의 데이터 fly를 경험했습니다.

몇개월전 제가 완전 초짜일 때, 어떤 테이블의 필드명으로 delete를 사용한적이 있습니다.

뒤늦게서야 bulit-in 변수명, 메소드명 등을 사용하지 사용하는 건 매우 아니 좋다라는 걸 알았고,

이 delete필드의 이름을 바꾸고자 했습니다.

<br>

models.py에서 필드명을 바꾸고 migration했습니다.

그때 분명 터미널에서 이 글귀가 나왔고

{% highlight bash %}
Did you rename 테이블명.delete to 테이블명.show? [y/N]
{% endhighlight %}

그리고 admin페이지에 가서 위와 같이 날렸습니다.

<br>

원인이 list_display인걸 발견하는데는 한참이 걸렸습니다.

변수명에서 보이는 대로, 저기 적인 건 display할 필드명만 참조하는 줄 알았습니다.

이전부터 계속 list_display에 'delete'가 있었지만,

필드명으로 delete가 있을때는 delete()메소드가 실행되는게 아니라

그냥 필드 delete의 값을 보여줬기에 문제가 없었고,

<br>

사실... delete() 메소드의 존재조차 모르고 있었습니다.

꺼진 필드명도 다시봅시다...조심조심조심조심