---
layout: post
title:  "[python] defaultdict"
date:   2017-10-11 13:50:00
description: python defaultdict
categories:
- programming
- python
banner_image: /programming/python/python-logo.png
comments: true
---

[python] defaultdict

---

## defaultdict

<br>

>collections.defaultdict([default_factory[, ...]])

dict 클래스의 subclass로 dict와 거의 같습니다.

다만 이름에서도 알 수 있듯이,

defaultdict는 기본값이 존재하는 dict입니다.

그 기본값은 default_factory를 무엇으로 지정하느냐에 따라 달라집니다.

<br>

예를 들어 살펴보겠습니다.

다음과 같은 코드를 실행한다고 하면

{% highlight python %}
from collections import defaultdict

# default_factory를 입력안했을 때
dd1 = defaultdict()
print('dd1 = ', dd1)
print('dd1[key1] = ', dd1['key1'])

# 출력값
# dd1 =  defaultdict(None, {})
# KeyError: 'key1'
{% endhighlight %}

dd1의 default_factory는 아무것도 지정하지 않았기 때문에 None이 됩니다.

그런데 갑자기 정의한 적이 없는 dd1['key1']을 출력하라고 하니 오류가 납니다.

<br>

이번에는 이 코드를 실행해 봅니다.

{% highlight python %}
a = int()
print('a = ', a)

dd2 = defaultdict(int)
print('dd2 = ', dd2)
print('dd2[key1] = ', dd2['key1'])

# 출력값
# a =  0
# dd2 =  defaultdict(<class 'int'>, {})
# dd2[key1] =  0
{% endhighlight %}

먼저 a 출력값을 통해 int() 클래스의 기본값은 0임을 알 수 있습니다.

그리고 이번에는 dd2에 default_factory를 int로 설정했습니다.

그랬더니 따로 dd2['key1']을 정의해주지 않아도,

자동으로 기본값 0을 가진 key1값이 생성됩니다.

<br>

이는 숫자를 0부터 카운트하는데 유용합니다.

다음 코드는 'Teemo'안에 들어간 알파벳별 갯수를 구하고 있습니다.

{% highlight python %}
words = 'Teemo'
dd5 = defaultdict(int)
for alphabet in words:
    dd5[alphabet] += 1

print(list(dd5.items()))

# 출력값
# [('o', 1), ('e', 2), ('T', 1), ('m', 1)]
{% endhighlight %}

처음 생성될 떄, 기본값이 0으로 설정되니

만약 e를 살펴본다면, 처음에 dd5['e']가 생성될 때 0이었는데 += 1로 인해 1이 됩니다.

그리고 두번째 e는 기존에 dd5['e'] = 1 값이 있으므로,

새로 생성되는게 아니라 기존값에 1만 더해서 dd5['e'] = 2 가 됩니다.

<br>

이번엔 default_factory값을 list로 설정하여,

어떤 메뉴를 누가 골랐는지 요약해 보도록 하겠습니다.

{% highlight python %}
b = list()
print('b = ', b)

dd3 = defaultdict(list)
dd3['key1'].append(2)
print('dd3[key1] = ', dd3['key1'])

# (원하는 메뉴, 이름)
menu_select = [('비빔밥', '티모'), ('돈가스', '징크스'), ('메밀소바', '렝가'), ('비빔밥', '아무무'), ('돈가스', '초가스')]
dd4 = defaultdict(list)
for menu, name in menu_select:
    dd4[menu].append(name)

print('dd4 = ', dd4)
print('dd4.items() = ', dd4.items())
print('menu sum = ', list(dd4.items()))

# 출력값
# b =  []
# dd3[key1] =  [2]
# dd4 =  defaultdict(<class 'list'>, {'돈가스': ['징크스', '초가스'], '비빔밥': ['티모', '아무무'], '메밀소바': ['렝가']})
# dd4.items() =  dict_items([('돈가스', ['징크스', '초가스']), ('비빔밥', ['티모', '아무무']), ('메밀소바', ['렝가'])])
# menu sum =  [('돈가스', ['징크스', '초가스']), ('비빔밥', ['티모', '아무무']), ('메밀소바', ['렝가'])]
{% endhighlight %}

먼저 b출력을 통해 list() 클래스의 기본값이 [] 라는걸 알았습니다.

즉, dd3['key1'].append(2)는 [].append(2) 와 같겠죠?

<br>

default_factory를 set()으로 설정한 하면 위의 과정이 더 간소화됩니다.
{% highlight python %}
# (원하는 메뉴, 이름)
menu_select = [('비빔밥', '티모'), ('돈가스', '징크스'), ('메밀소바', '렝가'), ('비빔밥', '아무무'), ('돈가스', '초가스')]

dd7 = defaultdict(set)
for menu, name in menu_select:
    dd7[menu].add(name)

print('dd7.items() = ', dd7.items())

# 출력값
# dd7.items() =  dict_items([('돈가스', {'징크스', '초가스'}), ('비빔밥', {'티모', '아무무'}), ('메밀소바', {'렝가'})])
{% endhighlight %}

<br>

default값을 custom하게 정할 수도 있습니다.

다음과 같이 lambda 함수를 사용하면 됩니다.

{% highlight python %}
# custom 기본값
dd8 = defaultdict(lambda: 'asdf')
print('dd8["key1"] = ', dd8['key1'])

dd6 = defaultdict(lambda: 'teemo')
print('dd6 = ', dd6)
print('dd6["object"] = ', dd6['object'])
dd6.update(action='throws', what='mushroom', where='bush')
print('{asdf} {action} {what} into {where}'.format(**dd6))

# 출력값
# dd8["key1"] =  asdf
# dd6 =  defaultdict(<function <lambda> at 0x10205f840>, {})
# dd6["object"] =  teemo
# teemo throws mushroom into bush
{% endhighlight %}

key값을 무엇으로 하든 처음 생성될 때는,

lambda에서 정해준 값이 기본값이 되는 걸 볼 수 있습니다.
