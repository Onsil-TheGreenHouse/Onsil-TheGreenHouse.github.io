---
layout: post
title:  "[Django tutorial] Ch2-3. 간단한 Poll(투표) 앱 만들어보기 - Template과 URL연결"
date:   2017-09-24 13:50:00
description: 2-3. Template과 URL연결
categories:
- programming
- django
- web_programmig
banner_image: /programming/django/python-django-logo.jpg
comments: true
---

간단한 Poll(투표) 앱 만들어보기 - 템플릿과 URL연결

---

## 템플릿(Template)이란?

<br>

브라우저를 통해 사용자에게 보이는 화면, 즉 html 파일입니다.

처음에 프로젝트를 설계할 때, 우리는 다음과 같이 UI를 설계했습니다.

![builtUI](https://lh3.googleusercontent.com/gQ6gCxMIu1mqCgTYwkA1vee1uhkLPnal7Y5B2swi3T_fbw6oxm1vU2jgb7ZCZa4NpJgV2Y11UzYjTI3EMozLfEGIFfoU8s06-dPR0mtUWv4XVgyo-2X4y7SDimNOmrlCdM-h8eNLfPsThPJoPYQ2MSVUmJSLpq2s9wdOFCde9gDGkafoT8x1-gUx_okNTSQfMh6ncyZD4C0szgYIqCqVzl9osCCa2lK3vp74Y2zTwV7v0hJQOVvQ8zUE1Sp1i5aX7PUvsB9HFgfcq_6Iqaa9z-5WuuZMfOPUnW_Oygz1vU7nszstlhxaWDNlmUiqDUMZ-81oOtOvaG8kzuV8aXv_pnk2pR6tUt_kPN1ddu6fcCOi5KODyajuX3Q7WgZZYv7xYIAQUF0z7jk8SawjDY1-qI4VH6lXb1_YG0K8efBfzrFJyDNtJDd0pH0GcZoyfVC2fydzEMRybLpfeHGFT0KFFf4au4k5N-xIomHAztgwPMVEPs3IHkr2oLelDVSWB7isWAB__NG3rYKRoDARX7TCaBBQxB_Gw_XHXu0vEHPeNEUquMU8hjGpbV3q_5rcz_kzRN8-chcTMNjanBaycqMyazsf42F5ev5F7otofRzbxg=w761-h283-no)


설계한 대로, 3개의 html 파일을 만들겠습니다.

가운데 detail.html은 vote.html로 이름을 바꾸겠습니다.

(그게 더 명확한 거 같아서...)

<br>

일단 템플릿은 polls/template/polls 경로에 만들겠습니다.

굳이 이 경로에 만드는 이유는...맨 밑에 덧붙이는 말에 설명하도록 하겠습니다.

(내용이 좀 길고, 글의 흐름에 안맞아서..)

<br>

윈도우 탐색기나 파인더에서 만들어도 되지만

다음과 같이 pycharm에서도 폴더를 만들 수 있습니다.

![pycharm_mkdir](https://lh3.googleusercontent.com/4cVzDawG5tnYJM2GSAP9L8qxm4DlsGm6qn016SPFifxqyjGnRC8Y00EJpwpvo42xBYKfI6zEdhOKGOJkTDjZZbcv7bLruuHpWCBAsd0tCCVNZ3-Kdm6lPOOLWPZlEzfecGyQaeohYsUxw5qDME75tWZLa_-UoOe1s5Zlf5nrFb-I5RdML0BrI8QGUauKRzwE8k35jH9KVjYeD55_ytGjOnYByqb7wNJmi_GFPh6_okKL1Jjudep1FQcBheZh5VU_yJ5snSP_Sc_tXqHg0jOm2wkVRUDu9FNYyRJmmrFG8pKITEApSqC7LSQmRpKnlXijj4UlYwQFt2oVOHk2zO-Jsng9pjayRkrnMA61RkTxu6EpKG3-bu1AkU1WjcKPZuQQCl54zZgou9J8JuEpt_XzIQnLOGY8cghvaRTLUE98V60efmp_bfqwlycEjomDhC8aeGVsRsmE0Driw_-NEn1Yk0LOUPVNGETucYz2Rvwh3B7WNLWGf7OuuSjhkT2VEztZK0gCF7c9HiHw-vxAcYvq8BGum3Q87C9rKVxw6D4NqCnWEM0JgyIsKeZ0sDTTnB0uxjXgugK1relylAwSYbt4VYSi-d_kvAKGgpBVp0mx9g=w1620-h1510-no)

밑의 이미지는 polls/template/polls 경로를 만들고,

3개의 템플릿을 만든 후, index.html에는 아무 글이나 쓴 상태입니다.

![make_3_htmls](https://lh3.googleusercontent.com/yhAbUUK4d3OgM0yu79HaUVLhtJ2PLu99FayTlTCFso41-ZRS9lb6pAXs4v7w5EIqUjXVZyhcEkPLrijvzMNth0Ra0Ah5ll3zKKcBoZ5pRopyST7oV9_r8rJxCeZQwL_cGlBvnCe_ydaMuOioKFjoAD5jS1f2uJHGt8htO2bpkyftHFSJ-5UCoeyHY4HPXCY5pKMVZrN7VWLD9RzHXWKOVMk3FBFz82wHYHQ_qguJsZKS31n7Rl9fn7M_D9jv9w1KAsMNXri1Y_Z3Rsdzde5kkY2aVOtcIXGzhGJ0Yuw6eJzDcSHUOnNIdJ3bwpSnY7s8W645y-O2u7qa0n4y5uoNfexFKLIR6JWu-rnk1r4WBG_UZC4QxF-INuyC4WtlcmqrAk4rXPm2XDS3MtFr2Xzwe2LGolFjiZGhSEXKHrn0w9okL7ybNK3z4rzThQtXQg2wKsH8qPiFCNMi51ai1iiJ2CY3uuzfCdjtMM9g5wbNk39JWskDvc_sY_JYjFnT6-m1ownrvNxhf2plxEHgFtlEook5KNbjqwCJy7X5Zku56IW_IFAyXz5JWJRcI7QMkbadtX7QhizfVQomI7puXQUYE1zrcMPxx1dn1ydZLM5pWQ=w1328-h914-no)

<br>

이제 템플릿을 연결할 차례입니다. 두가지 방법이 있습니다.


<br>

## 1. 프로젝트 urls.py에서 모두 관리하기(원리 이해용)

<br>

일단 그대로 따라해보세요

polls/views.py에 다음과 같이 코드를 추가합니다.

![polls_views_test](https://lh3.googleusercontent.com/kpgDqvULlIxwTPJE6VMevptxJNXdhbmLS8yPLjzwLrPlhyxV7_k-DWTxuyTqEQPT1bCrFRT23omOSvv1QL2bUyqt06Z1DR7R3Pv5-j8bfsnU0RPiv4IWZlJp2n5vn3IaFK8dtKWZUtO8ZYwQhMCQSSvvjnRw15ntUi4XItZJvfPLCikkkvq9jHGjxJ9wXDuXlSFVPncC6kCdSG4jWLLU4p_uZWgWM8dT5AiHicsODV_pODtenZUOrEXs0ItaPaSE_L3RJ9PNMr8Rfb7E58Q3lGU1uQubJgL2O7va513zvQ7NC3wEkcBDEr3nkLvHSTK7LPn4-_N8KZD_xeXaDb6n1pXIkXkm8GkURjtsnyKptU97E4vlcLD9y4ORt-adVkS9H19KwpR2TkrMzbET3Y1YJLNb04YAH605Br1ppUw-kPbatNJqrhaNooQZOUlcO1XDHkN08Lk_vAPEdgkh3t0x_biWp_qyWUSOmJftmULRuYcRlBaqogWROBNHz0xAqWHJSKsJxUALokOcgDQYrCVAlaoQRKWSlPXOsdpU70z1SfiU5qkHqhUpt7sieGJOSkx2LVmwU1QxWW4uXRNSovhgM0to6YkEeyGkn7Vn_CYlPg=w1290-h952-no)

그리고 프로젝트 폴더에 urls.py, 즉 mysite/urls.py 에 가서

다음과 같이 코드를 작성합니다.

![urls_test](https://lh3.googleusercontent.com/2RQGr2WJzsR1ck-PtVL1q5fh6EoiVGyywgMzt57d84Ju0ygVL1uoQ4Y0apFcsMHVO3jza1pnjWAX6xwL6prpbRrc6qnxZZaEdv9gVjRtl0Mv95haH2xVKtq88ebahM1Yc1yJ-0B_WwWP6o60WpdYizaPBS1wq4dzYmHlaE0_X-4k-BgAg7Fwp4YOhMZFpl_lWs4bS02fWXOWP3snRE15O31cbe8UDZdMwzs4ycQ_32QPkQvEAo4VX_Di0h4v6bFSIJ_cr0QWVVDXxtytHxOkX99-Qp6zfpYYvfRnuFsOIwDN1DlFJ9E2loGwygGzcZRIML6Nc3PKv_JPSBM18wd_uUbUaFlE6pGXWfMM4lwVD-fg93rdV4DrBwjRkXqFt53sElPO-xjTrP5Z63tH8muGsNJ0-zr50Dk-rc9TyOK9SfTVrrwWh1p4hjysjsE9VPgvfSVHDnUPDl1OkSGi545fqTgRGBwe94waxmxXeus5Od6tqgFej7yAu2rah6xcDbQ0rwARHhMmJXnk_GFtXHxTcMga1fwa-d4zZpSvSlsb6NxqrqyznQBRZ3TGq7GqCx88HtRXokDpbivRYIX5sibP-dsNCEnMfnnp19i05bQW8w=w1698-h942-no)

그리고 브라우저에 127.0.0.1:8000/asdf 를 입력하면

(127.0.0.1은 localhost 와 같습니다!)

![test_index_page](https://lh3.googleusercontent.com/dduWBUZY9FqrtkOfgWTOxuv52tKWdz-KypXOB744Oc8Np0tKpc9bxLv-y24ieXH3V5HpONvgctp948h4OMAgxhl57la4R8szxTu3Q4N7kcCabJE_K4D0I0MHXXvUM29gDe1Wns2VZvdUsrnhBcTNDnnGpZXRePW69VJxBWAF3Zs7QLxah1Pl6TPK9GeMSizNtQXKMcoj2M_PloIFbEz5tQowlehwh4-d06QyViMq_APEzuobeeBaCUjvcZSlsM0Ze5NiWxk9z7GPpLVbtgv6_9fhNm6_tCChXgJnJ_-_2cV6H5bbErrTZPFzTG2KdPzpls9_OZWLfEgFSvEEay9cWAoGYO2VWmIZsfgwOaLQgiM48USfx1LZaMcQvNypk3SvoY5-M8ldjUmblSHzr7JSl7c4zS8TX44mbIkRhtr-yoU36AZG7VqE9rX71mJ1MKt1Eee8Mr-igBEHPqVTxnfNJPqN27rwgE01zZI6QSBbm2N5paWF74S8yPsYHiXH4H9H3J3_32Lp10AEvyA63h-Rpm3IsymLuaf2H-JhbO4shgKpIUpc0Q2K_lJrxXiH4f_ri4PGXA0rz9RkpGRgyTl_iJErMJFnsrpn9byKp0sCIw=w1802-h558-no)

index.html에 썻던 내용이 그대로 나오는 걸 볼 수 있습니다!

<br>

과정을 설명하자면,

브라우저에 127.0.0.1:8000/asdf 를 입력하면

django는 프로젝트 폴더에 urls.py에서 해당 url을 찾습니다.

지금은

{% highlight python3 %}
url(r^'asdf/$', views.test)
{% endhighlight %}

에 매칭되었고, 옆에 적어진 views.test로 접근하게 됩니다.

<br>

views는 다음에 의해 polls에서 가져온 것이기 때문에,
{% highlight python3 %}
from polls import views
{% endhighlight %}

polls/views.py에 가서 test 함수를 실행시킵니다.

<br>

test함수를 살펴보면 print 문장이 있죠

터미널을 보면 다음 문자열이 그대로 출력됨으로써,

test 함수의 실행을 확인할 수 있습니다.

{% highlight bash %}
function test in polls/views.py is run
{% endhighlight %}

![terminal_view_text](https://lh3.googleusercontent.com/8-0njP8IGAOSY7oYlSQYN7Aze0ELSXT26WbIr6b5Qb3qf28lmEmyUsWXa9zIQlYXxthQGnVV1MZd7MoOJUIrva70yn572_IWJyPJFSiDD8V83xkX21CSYgKcWCZIho22EhsUc7JBAFOmWqUs412GQuw8-byme942pCTjlQApAyEfSnEmMDKGrgD_3OqYk153ohuC-87HeJOYwBkwSc9M7kZ3V_xU9GN-StpjOLFtVcvx9iHge8gRFzGhlo4etma57J2QiG4XsT5hx-R1cq2UOuw1vBO7kBOitT7jwde9hdBYN7QL21AToU5vH_h0U6AfXYjvDKuhdKKcuE79tXAqLNOapowzNJzLqRAFuNGrSOo-0n54FFpw_-pbIW9k3FkBblejlUPWoed6aWpsPx7PgOW1L9imJgMDOWOJ7nlpVMKwhwJrJlkYzZ4qg6K2LgfIwSjG2FJYA4nNICc9U4Ofl9XDjEClFgFrUkDMJnnUVu5AvH2MBF5a09oGHRKnRx-XrXKBh40qvaG2ae1CN9gCFjm-c_RIy5LFiTyetq-OVgikovH4mjYAc-AVUond6lz_O-Ah5_3X8w4mpJZYTjQOJgLSZlF9ruUnbiPPzyv7_A=w1364-h1002-no)

그리고 밑의 render 함에 의해, 'polls/index.html'을 연결시켜 브라우저에 출력합니다.

<br>

그런데 앱이 polls이외에 엄청나게 많이 있다고 생각해봅시다.

모든 앱의 템플릿 url이 프로젝트 폴더에 urls.py 하나에서 모두 관리 된다면

파일 및 url 관리가 매우 어려울 것입니다.

때문에 이렇게 연결시키는 것보단 다음 방법을 추천합니다.

<br>

## 2.앱 별로 urls.py 관리하기(무조건 이거 쓰기)

![url_divide](https://lh3.googleusercontent.com/NbBD2qRmpUDwxSTKdB41WDNpAO8FmJHpyXPRW5s67ISe7-Eby7vcgYT_a1EBJGwReEnMkpiWv31yaNRH8w0BWXlmYkR_wT-zlHRfZHuryMoe8x8uSSUoM6lL0yE148CGRELL-rPR-JW1xJvcIiHrG2GsftEaz9AY347KF4ndOlcxGizHllzVChiOxEKhGYN9OqzaGsHVwJMjxm0J0iXC9rv_k0DE_rzSiO5zQtQ9KKJw6AM0-yb_aAVvxGGTIc6LcH-oRX4PIG9Br3cQ040z-s13fiRUi7UyGSA3YPOuWLXwslWxuZ47FLsLNnX7H0rHAGCzd5eW4rTSEx_V7Nmn4uLiL-djRPkQzoQbG_tAXT0KG7gPcqf2UxDwJgQuJpeo4dqljqaT-uD_zcrOjAppJOeicdgrb3ES91Jf6aw3bYLVjbdkvwDp5TgNuAu2c7GYmfEopRpTtfbYt7QUebnjXbfd8NQCQADdJ-l_f3fE8kdFTAZkBquvSs67AY9hCF4IDMrQnxflM_ejMRvEWR-1AmbxkC_rkTMsJZMs_S6uw_coBXJT2mqA_VlfsNEOd_nTWVbzsWVGR-sZH_3SOxXVOcdAX8IJYx0iqvokvn7YDg=w3354-h1020-no)

프로젝트 폴더의 urls.py에는 include함수를 사용해 위와 같이 작성하고,

polls 폴더안에 새로 urls.py를 생성하여 위와 같이 작성합니다.

<br>

그리고 브라우저 주소창에 127.0.0.1:8000/polls/asdfasdf 을 입력하면

![polls_asdfasdf](https://lh3.googleusercontent.com/dSpQwxRRhZFLHY2q1uPiKBJ8nqVJ1EweSAnBuPaEOghcwdjBTQYIBDvTVIiNJmkAalfsA1kzZsJ__89n7X6U3z2jcVktP2-FeVaMhZFknTaP4maFlyJrQvMd-XOf6C1Yru-vBC-_7qkGSO6-fqWe-_OzIvI6P06jgZ-37-Agd51pIP7ixsaJWIm7fDqHx4VZqvdraylk62pCk0eGRrRridk3ZIbpbXp6_qxk-qWRuRQTRh4nytSbhKn7Ivi_eeQAEp2nix4oMEbpQOIlttcauIhmB-Ez-F0IEy19MlXDMF7o_6J2hsuVtLV01LrsAuGLZyOPIP-jUcvWhbAoDXNVcetY_HsQ-_93mNrx9mlu82gi6hpWrwtNPCN4742UzU_n-GWM4-FB_4T1IKIBLLszL7-I-VGOVpIaENEiBUt3wrYrbUchSCvddyw0rctRC4kNTkTsHxLlP_Wf_qakuFJX_NQBBK7h7k8YcW60Rlp-2OTWvWFYUZ5i7XmO-3jRI6ZXeArL45v68koNTsFGxaZhxv19bFVhGu8jIFQcmhXcBFRb9mFqG9t4UkjHyQYOzWc_hseJ7pXQkthm6s0VlKcWIwzbKXmb5iJ-RGnmdNLgpA=w1802-h442-no)

다시 index.html에 연결됩니다.

<br>

과정을 설명하자면

주소창에 127.0.0.1:8000/polls/asdfasdf 을 프로젝트 urls.py에서 매칭 시도합니다.

그럼

{% highlight python3 %}
url(r'^polls/', include('polls.urls'))
{% endhighlight %}

에 매칭이 되고, 옆에 적힌 include함수에 의해

polls/urls.py로 가서 나머지 세부사항을 매칭시도합니다.

그럼 polls/urls.py에서

{% highlight python3 %}
url(r^'asdfasdf/$', views.test)
{% endhighlight %}

에 매칭되고 옆에 적힌 views.test에 접근합니다.

{% highlight python3 %}
from polls import views
{% endhighlight %}

에 의해 polls/views.py 로 가서 test함수를 실행시킵니다.

<br>

이제 설명을 다 드렸으니, 함수명도 제대로 고치고

템플릿 3개를 모두 url 연결 후, 마치겠습니다.

![polls_views_final](https://lh3.googleusercontent.com/-IEc4Bv_rot_tq3Bl1MrzxVll3W6tQyO423UoJ181h7Mr7idvxjkBTa2z-Tl5oZ382VD_JL0qY89VjXQSlCs1ZtkhEzfxMuwyP9cEx5kbt9WkD33QvmRT6C6ZztTH6XYCyLj3eccPcm2o6FMNdVL-whWjYmN4DZdmzvawTHFkOQs_MnPxnwRdjSBpEEVQralN0rztkSSpZs6nOoBUOws6l2_bmE3gzy6I7qESs1cWJ8Ph3hizUw-hNEMrvJSFjV3t_7o_nSGV-qN-kroLbaKO20ATNowCAjcUhxeh5ItV_5SD4F6-bppB3dEjZBknr995EHxyTE1I6Glgtn-Qz7oLYPbhe4_8sSWBkkkKxf76veMvA_CRJPM_pENQp0kGcn13B5yWdowK-Q_Blw3mZULUNFMVpm-t3WnSipiNTqsCSyihlMQEAEChA_BHypZ1EPucmvS4oXTKNQgYNjFaa2nilMwgSsf9fK1R_M3_7NEfuOKgiodZ7hWr7KhL7a86ehL80ibwPTEyWc8DsnnKmYDfVgvg4r_N6kHYdv3liwVVGAaPhjYxJYRKk4XCPQak3-Fj2TYSDD40RjxNLAuKzBtpWB-mfqh4B8o4O6XLUvHGA=w1450-h784-no)
![polls_asdfasdf](https://lh3.googleusercontent.com/xzYwl1k0b42SuVrI3_piD-NSoBoNqCn6wS1MeEYwiEQPwsRgbXH9FEm-bQOpgWA8C2SZKa4iqNBvDmg0ukvA0wLGhjZAQb_WXsuijIWsvENXbuuAAB1UklHT3P6nrAMPwEy9FViv27oso8EHygEFKn8ncmQ2Y-bXM8p0rB-cehR8xfvGCjFpJGDxtx_Q0I438c5oJUk_0YFgf11PjV_3SAfoAKZLGcz756GWVTmRVZKg5vzVSQRcCp3WEt4c5CB9mucSZId2tHdypaX9bvv9LahqblyKO4mWjkBPdVL4xZ-LAZgMoyI8ppUtUZU9PXZImf2LZTd2P_G7TesTj24MndmRhhxCENK0OD-PlY2AE_BCX_YiJR25kQL89MmgQyuQ3ZKouwQK42ip64JpKcLNHlDrzH5o8WkLfLT-K1RIDwjF1IJc1dXK4X9q3h4aYUDPNpBoiixWCS8REwRRl4sy0KJ16OxhOwwSwItBO3gqW5BLVaMZXuTiKDEANuVLnEqwHR8uTuO8v6WfQYUjHzZZ9qezYEO5wQuM-Lgaoq2iptSVXQHC_GJyGl5Pb7ZmBcrsBzLqwwb73B-v5mRavhx-vyqBOtrrJzRUIp32kcNOsw=w1538-h826-no)

<br>

### 덧붙이는 말(템플릿 저장 위치에 대하여)

프로젝트 폴더에 settings.py를 살펴보면

INSTALLED_APPS와 TEMPLATES에 DIRS가 있습니다.

![template_position](https://lh3.googleusercontent.com/m9A3ohI-0MKnvL7qpm8nZIwCzfIlewELPljTn8FBOMeeYcKDgf0CbS71xswfwodqaGjihpuKSp3RnBOn0m7EuRHwmWdB-SVI02Bgh0do4m1167N8Qc8v-aOcTzQMVnLE9Dx9oLUovqG8vS94KxCtOThfCNEoCkPo3f7nsNvl0zrZk9SvXTplPmTNXrKiO9TMPWcg6k-CDnHngyDu7GqelW209nw9SMAidtxiov-0QqR4mi2yowU2t73kOLWG7QBdo73Bgc-K1AQsHI1qMQzgD0Ww3w-GWf-OkD-M2TnEfz-65P0Ay_XjbBVxBiDHXCxHKqPrc4ciCq-FTyAExMcxBIfUu-w3u5cay0Uwa-PdR8MWhcIIPebojmsFqiZAaZrg-3yoZHGS1nwibSxPFvVC-uzbseyyrbnlKK8zR044a3swFUh4eYEG-HyCmEgnnGaV-CNTAyw2JcNscMGkGwHMHpHa5DjMNIS05_2hrCXtjYxSMj-kAYJkKWbtUG3ny9JSHYNs0wYZAXCWCfPK8XtjChMud5bX6i9PIpMp-OhFuXsAA-CRxJ9epPfaEz_-YoiPX3ZGzUp0P15lQ24BjbcFJ-qU-70uw1L5RIyo5FvSsw=w1640-h1344-no)

원래 DIRS=[] 이지만 제가 설명을 위해 임의로 넣었습니다.

그럼 만약에

{% highlight python3 %}
return render(request, 'vote.html')
{% endhighlight %}

에 의해 vote.html을 찾는 상황이 온다면

Django는 DIRS -> INSTALLED_APPS 순서대로 경로를 뒤지며 vote.html을 찾습니다.

이 순서대로...

<br>
### I. DIRS에 직접 입력한 경로 먼저
#### 1. /asdf1/asdf2/templates
<br>
### II. INSTALLED_APPS에 기본세팅된 패키지
#### 2. (가상환경이름)/lib/python3.4/site-packages/django/contrib/admin/templates
#### 3. (가상환경이름)/lib/python3.4/site-packages/django/contrib/auth/templates
#### 4. (가상환경이름)/lib/python3.4/site-packages/django/contrib/contenttypes/templates
#### 5. (가상환경이름)/lib/python3.4/site-packages/django/contrib/sessions/templates
#### 6. (가상환경이름)/lib/python3.4/site-packages/django/contrib/messages/templates
#### 7. (가상환경이름)/lib/python3.4/site-packages/django/contrib/staticfiles/templates
<br>
### III. 우리가 직접 만들고 추가한 앱
#### 8. mysite/polls/templates

<br>

밑의 이미지같이 직접 가상환경 폴더를 뒤지며 눈으로 확인해보세요

![template_installedapps](https://lh3.googleusercontent.com/2pWO-cJ4KyoOyV62CPOrkIXBSj7UbR3yxHFJLcU1y3k-CyG8RF5u4r6G9dRTy0k3FYqyXiURwxjnEciq31Y3-2YpjNSkogX6dOmLK1-hZUNFfjWpyzOWPVjeQsOseQ7k4RX77XONroUd-f81OkbjMQQntKeImvg3i9F7zrYgOl45UJMdwQ17TDHNMyTbcZ-o-cEaGQnMQIUw34MGEF1gMUdjDD9FwNRZH5eitftAnpJI0YZMlS1AsYfAoGyAxLu_Tf-cGx4IDgTqJC1fhdUggtn2m-N1NUIxvVNgOcX8KSSAJTJXQj3x7NfWahkRLhw0xp0SfJtDxPyZbkEsZZqCPJCBMkP36dIvEXSohC_LNQ-kE8GXcLSItCQtCuerqf-Dc4ecO9TnrMgb7OELoxbcPC7VI2_2BciW6M6sUGearJ36uOyYNONbuI0oN-fSBBEQ_YniyJkuF4EIfVC9clMUCHcEeTzzCu_lyvA6_KaxMs-V3pXdKgSDnyIgnG2kPzZT2IiDzvxTCiJLfEmXAyIrSmJTcbohy69Vh2n7ETDmdMSBFManmO21eja4X5tOSpAtqrz8PAaIntRXaft7Ra0hYrJFPSA6pnmEmH6EFPpGcw=w3360-h690-no)

(윈도우는 경로가 약간 다를 수 있습니다. 가상환경 폴더를 잘 뒤져보세요~)

<br>

이점 기억한 상태에서 이러한 상황을 가정해봅시다.

현재는 polls 앱밖에 없지만, 나중에 polls2 라는 앱을 만들었습니다.

그리고 두 앱 모두 이름은 똑같은 vote.html 템플릿이 있습니다.

그리고 Django가 (앱이름)/templates 경로에서 템플릿을 찾는다니깐,

mysite/polls/templates/vote.html

mysite/polls2/templates/vote.html

이렇게 vote.html을 저장했습니다.

<br>

이 때, 만약 polls2 앱의 vote.html에 접근하고 싶어서

{% highlight python3 %}
return render(request, 'vote.html')
{% endhighlight %}

을 작성했다고 하면, Django는 저 코드를 보고

어디에 있는 vote.html에 접근할까요?

templates/vote.html 을 뒤지고 다닐테니,

<br>

mysite/polls/templates/vote.html

mysite/polls2/templates/vote.html

<br>

둘 중 하나를 택할 겁니다.

즉, 개발자가 원하지 않은 vote.html을 선택할 수 있다는 겁니다.

(아마 템플릿을 순서대로 뒤지다 제일 먼저 발견된 vote.html에 접근하겠죠)

<br>

이런 상황을 방지하기 위해, templates폴더안에 앱이름의 폴더를 한번더 만들고,

그곳에 템플릿을 저장하며

{% highlight python3 %}
return render(request, 'polls2/vote.html')
{% endhighlight %}

라고 코드를 작성하여 접근을 합니다.

<br>

그럼 예를 들어,

polls/templates/polls2/vote.html 은 존재하지 않고

polls2/templates/polls2/vote.html 은 존재하니

개발자가 의도한대로 polls2에 접근을 하게 됩니다.
