---
layout: post
title:  "[python] list, set, dict comprehension"
date:   2017-10-21 16:30:00
description: python list, set comprehension
categories:
- programming
- python
banner_image: /programming/python/python-logo.png
comments: true
---

[python] comprehension

---

## comprehension

python의 comprehension은

set, dictionary, list를 쉽고 간편하게 만들 수 있도록 도와주는 기능입니다.

python2에서는 list만 지원하고

python3에서는 list와 set, dictionary 모두 지원합니다.


<br>

## list comprehension

{% highlight python %}
ex3 = [i**2 for i in range(1, 10)]

print('ex3 = ', ex3)

# ex3 =  [1, 4, 9, 16, 25, 36, 49, 64, 81]
{% endhighlight %}


{% highlight python %}
[print(i, ' is smaller than 5') if i < 5 else print(i, ' is greater than or equal to 5') for i in range(1, 10)]

# 1  is smaller than 5
# 2  is smaller than 5
# 3  is smaller than 5
# 4  is smaller than 5
# 5  is greater than or equal to 5
# 6  is greater than or equal to 5
# 7  is greater than or equal to 5
# 8  is greater than or equal to 5
# 9  is greater than or equal to 5
{% endhighlight %}

<br><br>

## set comprehension
{% highlight python %}
ex5_list = [1, 2, 'asdf', True, ]

ex5_set = {i**2 for i in ex5_list if type(i) == int}

print('ex5_set = ', ex5_set)

# ex5_set =  {1, 4}
{% endhighlight %}

ex5_list의 엘리먼트 중 type이 int인 엘리먼트만 제곱하여 저장하고있습니다.

<br><br>

## dictionary comprehension

{% highlight python %}
ex6_dict1 = {'top': 'teemo', 'jungle': 'master yi', 'mid': 'zed', 'ad': 'vayne', 'supporter': 'alistar'}

ex6_dict2 = {x:y for y, x in ex6_dict1.items()}

print('ex6_dict2: ', ex6_dict2)

# ex6_dict2:  {'teemo': 'top', 'alistar': 'supporter', 'vayne': 'ad', 'zed': 'mid', 'master yi': 'jungle'}
{% endhighlight %}

ex6_dict1의 key와 value값을 바꿔서 ex6_dict2에 저장하고 있습니다.

<br>

{% highlight python %}
isodd = lambda x: x % 2 == 1

ex7 = {x:x**2 for x in range(1, 10) if isodd(x)}

print('ex7: ', ex7)

# ex7:  {1: 1, 3: 9, 9: 81, 5: 25, 7: 49}
{% endhighlight %}

1부터 9까지 숫자 중 홀수인 것만 제곱하여 dict로 저장하고 있습니다.
