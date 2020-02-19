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

![img_args](http://drive.google.com/uc?export=view&id=1DWZV5DgPFP5NBt3OJDQYjYhQ7hacl9e1)

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

![img_kwargs](http://drive.google.com/uc?export=view&id=1sX-Mrz_Gq1B2wQpaFTOXd_QnrwepugDj)