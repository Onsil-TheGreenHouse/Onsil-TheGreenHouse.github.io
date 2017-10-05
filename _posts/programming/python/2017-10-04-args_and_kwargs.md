---
layout: post
title:  "[python] *args 와 **kwargs 의 의미"
date:   2017-10-04 00:30:00
description: python args 와 kwargs 의 의미
categories:
- programming
- python
banner_image: /programming/python/python-logo.png
comments: true
---

[python] *args 와 **kwargs 의 의미

---

## *args ??

<br>

Arguments의 약자이다.

몇개의 인자를 받아야할지 모를 때 사용한다.

{% highlight python %}
def print_params(*args):
    print('args = ', args)
    for param in args:
        print(param)

print_params('Teemo', 'Jinx', 'Rengar')
{% endhighlight %}

![img_args](https://lh3.googleusercontent.com/UFyUpV2UTVVkVJ7I9ePC09bvXnLfnw2pLYFt5dOvSkVRM-RIeQZf3AXqZmT4zQK9hnIY5k2lXP1vfQKiOuEm9rLVCqxatqC3w-U54OM9P3PqHCKBWU55bwWyApbtcFi8jOkSdPu-2Qqjy7cUfxELItv-NTvzB-8y8s-UgTRX0M1ZtX16bNspjRUZXpbgWbMTxV0CAyo67ao5vy0Ny5O0YZ36Wqv3ORN9794Uc9gBg8_uFstkJ9WEyeQcS1kCaZ0Cr5bDIl_JUCQxK0cbpdNxTrM8Tv5zZRXsfbPlWZRRrxYQU7xwBencs_dS5q5qhWKRvOfP0Vv2NYcfn1md369w17aT6_McaDIeN56jXZ2W_dIzsZ3JNHqci6HZCe-bjTOnOIjldezkpqkc6LWreL0rZ5ZBeYvC34Vpsu3Tbc9ThMW-nrWHRqnheYBjtaE4M1-wt49ep5X1sXk5qssAFdmb2L-wIrSsMU2AMJoEDAYAG3EFvns21FFPf0GYsn1WbwMED6skRaumBpjxHIO6m_cMU7kZ5mzjb-Awtx8nZgiIGYyh7ksUpRKzrWOXbeXym_4zfzzPChnjtk7XsjJ94bd_eklXpPA03m3g2d1ZhtrjVw=w1420-h956-no)

<br><br>

## **kwargs ??

KeyWord Arguments의 약자이다.

args와 마찬가지로 몇개의 인자를 받아야할지 모를 떄 쓰는데,

KeyWorded 된 Arguments를 인자로 받는다. 예를 들어

>(탑 = '티모', 정글 = '마스터이', 원딜 = '베인')

{% highlight python %}
def print_kwargs(**kwargs):
    print('kwargs = ', kwargs)
    print('kwargs.keys() = ', kwargs.keys())
    print('kwargs.values() = ', kwargs.values())

    for key, value in kwargs.items():
        print('key : ', key, ' & value : ', value)

print_kwargs(Top = 'Teemo', Jungle = 'Master Yi', Middle = 'Yasuo', Bottom = 'Vayne', Supporter = 'Blitzcrank')
{% endhighlight %}

![img_kwargs](https://lh3.googleusercontent.com/HBGh_jEviuHMqxYVtJ9hexW4K0f88OENwxBhGcbIvGYH-BGp2CnXqmnPgWEDaoOSdN4H6Fp8nj4FlUCDV0NOq6ozNHIXLFqeD92zUgIMnzOaQPb7F9_na0XVIW6Bb5-MvbQg5wQlRdpHx65U-fH5Dclp7M_VklFcYYWpt4lpdEI8-_skMMq20R4rnoy3qL1PJUq7lQGMziCaRFxJpAyLwyPvHJ1J6NyJdmCT_lBcUE4bGF2TWH5eLLNMWnplv4z994GKQX4H7s2XqlDhLbji_DmFw-DmtRmys9PlAhE2f9wevHFMtHTYBUNxnoH8VHwizNll4pxBoSOMyyFFysvAbMiNUW3D55mzbCYGCmpCwvgvIXpih5n280ZdGzDLccUek1oLKn79IzFDFv8Y8LTWfj38p8sOBVgNySaBCxfD09B1OzADRzgKulbvtNQNMEw95Q2hp78mvot0Owd9tGkuF8trG0eTpyyG6iyXi1rqNksChuMTTaHxT7CaBXlO5WFvvFzzr5o41jtIx75wxzpwBEbcWs4SR2xbP2pRF0gALnxgRw26_dpe30IP3moPS4LMLxxExmf6xSUQo6tpZOzbmPyq_a8JtX80w6DVXAwA4g=w1896-h956-no)