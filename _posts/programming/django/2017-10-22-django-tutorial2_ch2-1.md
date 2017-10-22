---
layout: post
title:  "[Django Advanced Tutorial] Ch2-1. pip freeze"
date:   2017-10-19 01:50:00
description: 2-1. pip freeze > asdf.txt
categories:
- programming
- django
- web_programmig
banner_image: /programming/django/python-django-logo.jpg
comments: true
---

가상환경 동일하게 설정하기

---

## pip freeze

<br>

상황 가정을 해보겠습니다.

기존에 A라는 프로젝트를 a라는 가상환경에서 진행하고 있었습니다.

a라는 가상환경에는 수십개의 파이썬 패키지들이 설치되어 있습니다.

이때 새롭게 A 프로젝트에 참여하는 사람이 생겼습니다.

그럼 그 새로 들어온 사람은 먼저 a와 똑같은 가상환경을 구성해야합니다.

근데 a에 설치된 수십개의 패키지를 하나하나 버전을 맞춰가며 설치하기는

번거롭고 시간이 매우 많이 걸릴 것입니다.

<br>

이때 사용할 수 있는게 pip freeze 기능입니다.

pip freeze를 사용하면 현재 사용하고 있는 가상환경에 설치되어 있는

파이썬 패키지 목록을 뽑아낼 수 있습니다.

<br>

먼저 가상환경(여기선 venv)에 들어간 후, 다음과 같이 명령어를 입력하면

{% highlight bash %}
(venv) $ pip freeze > requirement.txt
{% endhighlight %}

해당 디렉토리에 requirement.txt라는 파일이 생깁니다.

그리고 그 텍스트파일을 살펴보면, 해당 가상환경에 설치된 패키지와 그 버전이 적혀져 있습니다.

![1.img_requirement.txt](https://lh3.googleusercontent.com/lefZObTcSSO_aEDHiRopFSzxGnLvuUpaFdDdxMXX5MlW92Wfjgova4nQDy38OZNKFurGPWnSqCtwiSINlOQbh0vWhSWYUOs-EUIxICgEa5_SrmAwepeHG6_SH4NlDEQBMpd85jwve_FNstJbGDvqHqURmNku07gVy2_HApSCmTXysHQXnl-GGss752yVjRrlFnyEdhxa-dQ087WgOHs1xONsq-BEuxhwZ2aIRcqdmggP_alXlCB1wFzG7F5drXO5ICd1l-bsQ5fIPIN-E3BCIC0sn0DqyfyelOp5lKzgtJumMalRvePWHyO4NcbAPVCpiM3gBRVgoCYw_iJDCs7YPSK27u98J2cYfNAy2cK-ZvmEQSIECJEAIeNWWzudMN9Utsfz1Z0ceqQ4bWtlIOzI1MfZFYtrWtGWokCmvCbFLwsw8gLU39-p0p3EfuTXhNcsf4Id-NGpWM7o61rQkYbtRDQhSDZa2hayMrHuUfUJ_dpiAHlu7q5UVEjFhdTsX8xY9yCe1WAtYKJhz5bFl9oJHEpbLR5T5UYU_03DtdaQMxASxDmTpdDo4GI62Pz4Wbd9yGjqPaqsX32Ynmij8ESn3OFLgsvyRNbsoxXwJyAZ0g=w1014-h510-no)

<br>

그럼 이 패키지 목록을 그대로 설치하려면

설치하려는 가상환경(여기서는 venv1)에 들어가고,

해당 디렉토리에 requirement.txt를 복사해놓고

터미널에 다음과 같이 입력하면 됩니다.

{% highlight bash %}
(venv1) $ pip install -r requirement.txt
{% endhighlight %}

![2.pip_install_r](https://lh3.googleusercontent.com/AjEkZRPXbeiihXCNC0sbJwFdzFZxM39q9EioghTKucu9ey_AGQkrBiFWdpccdZX6H82dERvAQej781inpjm5zXtr_yu8owM6I9Ef5Rklvzq6e--yVFqkcYAIlZvwmseLTrRvY2rEO4eWLSv3JYSqSKXoZ6XV_H825ZclDXOsBwrhZ_LQmrKwJ4Y8r8rbKEcyDLlDTPhU3dj10luM-OZvbaJWEP8w9iGDUM_CoYb3M1VPNv3fLO1BGqaDVQ0NC_i5YYoTPmO2YbkVNYnnkQ56EALHVo7OVg_loNeKUzs99uCtB0RpRnPtaUelJ71dH4oHTzONWlCJaUrjxUIaEGn16QNOthLZbx5v_k3sorrlYkD0I_3LSMruPfjrYw_bfNnz03zt-RkmR7MsFfh9inyTZwAeri4Mz7K-TqwcPJhn72l4ylUZ4zOMH_nYaTIdZ9FlstlBVm5lE20LW0-HSaRFGLugEFN88r3ekHMZJlD7sDdxUqHCsiDezdzmodOLQRhVwnkWpe5JewXRooykEPXjV7_MEv4ugrvvwPxdXmKC0aZI1r4B0wA8wLZgf4KNppGME1YHENXdPtZRYSXiGnM2TDlHE84tN-SLbjo2n1OrRg=w1546-h862-no)

<br>

## 덧붙이는 말

<br>

pip freeze나 pip list명령어를 입력하면

해당 가상환경에 설치된 패키지 리스트들을 확인할 수 있습니다.

![3.pip_list](https://lh3.googleusercontent.com/m71mU4ryc_31yk4PMaJJ-krvJC67rD0edyle5_8yxlrk4D5lem0M6UWifRSYEeUDxH0sn2JJ0x7h8BU1jJ_rovkezi_w5wO0uHIzC7R-SVI4zSUpfntNYDOKkLs0_SupL8laE57OKBJUq86sDy4bjBPWuL_1-R8r3Py9HgzUvEAXVmbfcK2awZngfFLzpFqPwZPlu2r_1U6kAqk2IggdPvlzF8zo9Bksb0EZdKjq-yyVF8qrDfxdyQyx1OhnjUkSMskbyqYxqBx-wh_bq-o6yY4-Q0BsD4czkzYv0uopk3Zf-neeUzw8OLdF45Vj_kvs9FxXe19KRC0FlUbVmb0JvVAQsiEoP2fJCrvpgIqVEXHNS8D-upPqLKZMea1SUyNhC7o9XWnV1mEwd4m_N17O1ddlQGfFjWH33Wzhme_MH4JADZlwBczkBG3hfu9euCpqIn29U4VBnWZo8_zltO0HRIwsx6i9_UxThxZYi6nj4k1YL05XXzNVp_XD1wBoNWb8EV4ywk4vuiLsktl-ecsGcG9mQbmIBakhXKA0Z4eLsZHWePmaDVxeXOq2ITEysmXlCjRlKAW0mQfxwf23ajC2rSr6tnp__xTbF6RZbpjzWA=w1546-h750-no)