---
layout: post
title:  "[IPython] IPython을 이용한 데이터 분석 1"
date:   2017-10-09 13:50:00
description: IPython을 이용한 데이터 분석 예
categories:
- programming
- python
- ipython
- jupyter
banner_image: /programming/python/ipython_jupyter.png
comments: true
---

[IPython] IPython을 활용한 데이터 분석 예 1

---

저와같이 IPython이 처음이면 이 포스트를 위해 준비할게 두가지가 있습니다.

<br>

### 1. Jupyter설치하기
### 2. 실습할 데이터 파일(json)

<br>

IPython을 다루는데 Jupyter를 설치하라는건 뭐냐! 하면

Jupyter가 IPython을 커널로 사용하는 인터페이스이기 때문입니다.

예를 들면, Jupyter를 설치안하고 IPython만 설치를 했다면,

![img_Ipython_terminal](http://drive.google.com/uc?export=view&id=1heaW6OGAF3EX7zKI44ChWJBWlK7Iq-jd)

이렇게 터미널에서 작업을 해야합니다.

<br>

Jupyter를 설치하면 IPython도 자동으로 설치가 되는데요,

![img_Jupyter_use](http://drive.google.com/uc?export=view&id=1uBHpjumIW16n5Ho4kg2DzF9qSxksIwlL)

Jupyter를 사용하면 이렇게, 작업하기 편리한 환경을 제공해주고,

작업한 파일을 저장/관리 까지 가능하게 됩니다.

Jupyter설치는 [Jupyter 사이트](http://jupyter.readthedocs.io/en/latest/install.html)에 자세히 나와있습니다.

참고로 저는 다음과 같이 pip를 이용했습니다.

{% highlight bash %}
$ pip install jupyter
{% endhighlight %}

<br>

다음으로 실습할 파일이 필요합니다.

저는 [공공데이터포털](https://www.data.go.kr/)에서 '전국도서관표준데이터'의 json파일을 사용했습니다.

![img_find_data1](http://drive.google.com/uc?export=view&id=1LBlzrooR-KnqitF2p-xKOdm_hgAuGy12)
![img_find_data2](http://drive.google.com/uc?export=view&id=17rgc6Btfv3n4sxCbra6VYqkanZPeWzAj)

그리고 파일을 자신이 작업하고자 하는 폴더로 옮깁니다.

저는 파일명을 'library.json'과 같이 영어로까지 바꿨습니다.(혹시나해서)

그런데 데이터 준비가 끝난게 아닙니다.

사실 이 json파일은 조금 잘못된 부분이 있습니다.

파일을 살펴보면 쌍따옴표(")가 연속두번 있는 부분이 있는데, 원래 하나만 있어야합니다.

텍스트 편집기를 이용해 ""를 "로 치환해줍니다.

![img_wrong_json](http://drive.google.com/uc?export=view&id=1swBrzzB6AO8t_G6P5WWUrNXTXolDy0x5)

(공공데이터포털에서도 인정한...)

<br>

이제 터미널에 다음을 입력해 jupyter를 실행시킵니다.

{% highlight bash %}
$ jupyter notebook
{% endhighlight %}

![img_jupyter_notebook](http://drive.google.com/uc?export=view&id=1Bn-93vZpti83bqDxYhhECL9MminQrdsG)

그럼 브라우저에 jupyter tree가 뜹니다.

혹시 브라우저가 뜨지 않으면, 터미널에 적힌대로 http://localhost:8888 로 접속합니다.

json파일을 저장한, 즉 작업하고자 하는 경로에 가서 new를 눌러 python을 클릭해줍니다.

![img_notebook_make_new](http://drive.google.com/uc?export=view&id=1JOmCd_sKiAvTpXxpGtkOUPw-HtkLQhtK)

그럼 이제 작업할 새 notebook이 뜹니다.

위에 untitled를 클릭하여 이름을 지정해주고 디스크 버튼을 눌러 저장할 수 있습니다.

![img_notebook_untitled](http://drive.google.com/uc?export=view&id=1S-Zh8PpUKjd1SaUiGJO4bvWdm8J3d__R)

이 notebook에서는 파이썬의 문법과 동일하게 작업할 수 있습니다.

직접 1+2 같은 연산이나 print등 여러 작업을 해보세요

참고로 그냥 엔터를 누르면 줄바꿈이 되고, shift+enter를 눌러야 해당 cell이 실행됩니다.

<br>

본격적으로 시작하기 전에

이 notebook안에서 matplotlib 패키지 하나만 설치해보겠습니다.

>!pip install matplotlib

notebook안에서 pip를 사용하려면 앞에 !(느낌표)를 붙이면 됩니다.

앞으로 실습을 하면서 설치가 안됬다! 라는 오류가 뜨면,

!pip를 이용해 설치해주시면 됩니다.

예를 들어 'no module named pandas' 라는 에러가 났다면

>!pip install pandas

를 입력해 pandas를 설치해주시면 됩니다.

<br>

그럼 본격적으로 시작해보도록 하겠습니다.

![img_jupyter1-6](http://drive.google.com/uc?export=view&id=1HvBR7FrndpkgoLqmxpHoyf_I99Jf9XgX)

먼저

>ls

를 입력하여, 현재 경로에 데이터 파일이 잘 있는지 확인합니다.

그리고 json 라이브러리를 import하여, 준비한 json파일을 읽어보고 있습니다.

![img_jupyter7-11](http://drive.google.com/uc?export=view&id=1Zi4oxK8soCVlJjoG8WS2LlqpjcP0mSca)

각 도서관 데이터는 'records'에 있는걸 아까 확인했죠?

'records'안의 각 도서관 데이터를 for문을 돌며 시도명 데이터만 가져왔습니다.

그 다음, 각 시도명 별 도서관 수를 구하고있습니다.

![img_jupyter12-16](http://drive.google.com/uc?export=view&id=1b1DaVDaLKPtGdki27-0Xc_X2BnUrYGOR)

지역 중에서 도서관 수가 많은 top 10을 두가지 방법으로 구하고있습니다.

![img_jupyter17-20](http://drive.google.com/uc?export=view&id=1QXD6CSAakiP1tj6P-ObH8NiVuyxsj6Aj)

이번엔 pandas 패키지를 이용해서 구해봅시다.

DataFrame은 pandas의 주요 자료구조로서,

표나 스프레드시트 같은 형태입니다.

19번 cell과 같이 출력함으로써, DataFrame의 형태를 확인할 수 있습니다.

<br>

.info()를 이용하여 DataFrame의 정보도 확인할 수 있습니다.

예를 들어, frame은 4522개의 데이터(도서관)이 있지만,

건물면적에 대한 정보는 그 중 3714의 데이터(도서관)만 채워져 있네요.

(일 똑바로 안해!)

![img_jupyter21-26](http://drive.google.com/uc?export=view&id=1rbupSpr3ntE98_FB0I00EdRVmi0Ldme8)

.value_counts()를 통해, 아까 top_count 함수를 만들어 했던

지역별 도서관 수 작업을 간단히 마쳤습니다.

<br>

아까 건물면적과 같이 데이터값이 없는 경우도 있는데, 이때

.fillna('missing')를 사용하면 없는 값을 'missing'으로 바꿔줍니다.

<br>

region_count를 잘보면 '경기도 수원시'가 있습니다. 이 값은 '경기도'로 바꿔줍니다.

![img_jupyter27-32](http://drive.google.com/uc?export=view&id=1JC7W2GG3yqk7X8tJp8XH32QEX8BsuMud)

matplotlib를 이용해 상위 10개 지역을 그래프로 나타내 보았습니다.

근데 그래프에 한글이 나오질 않네요.

matplotlib.rc()에서 폰트를 한글지원 폰트로 바꿔주면됩니다.

![img_jupyter34-35](http://drive.google.com/uc?export=view&id=18r7wK4Eyb4W_4oZd-IWIXZTnyH_oraG9)

이번에는 도서관을 유형별로 구분해 보았습니다.

이번에는 Series라는 또다른 자료구조를 이용해 보았습니다.

dropna는 값이 없는 데이터(NA)는 제외시키는 메소드입니다.

![img_jupyter36-38](http://drive.google.com/uc?export=view&id=1ms--IdxiJTd9o_jkjGnQN5KhjaBwq3Yp)

Series 또한 .value_counts() 메소드를 사용할 수 있네요.

또한 각 도서관 데이터 중, '도서관유형'값이 null값이 아닌 데이터를 추출하고있습니다.

![img_jupyter39-44](http://drive.google.com/uc?export=view&id=1E-DjfOoE5NVuZ2alKT2OuS-SlkVMvEDk)

이제 공공도서관이냐 사립도서관이냐를 구분하고 있습니다.

numpy 패키지의 where()메소드를 사용하여,

'공공'이란 단어가 들어가있으면 공공도서관, 아니면 사립도서관으로 분류했습니다.

<br>

그 후, group_by()메소드를 이용해,

지역/도서관유형 별로 cframe 데이터를 그룹핑 했습니다.

.size()메소드를 이용해 도서관수도 카운트 했습니다.

![img_jupyter45-47](http://drive.google.com/uc?export=view&id=1TFQai5SnPUXqcSD8MW7ilWULZwl6OwTS)

여기서는 .sum(1)을 통해 지역별로 합산을 한다음

.argsort()를 통해 지역별 도서관 수 순위 indexer를 반환받았습니다.

무슨 말이냐면, 예를 들어

>강원도 10

이 의미하는 바는, 도서관 수대로 정렬을 하려면 강원도 자리에

10째(0부터 시작) 위치에 있는 '세종특별시'가 와야한다는 뜻입니다.

47번째 cell에서 볼 수 있듯이, argsort()에서 반환한대로 순서를 정하면

도서관 수대로 소트되는걸 볼 수 있습니다.

![img_jupyter48-49](http://drive.google.com/uc?export=view&id=1sVwDI4b1adjDRPZZsjcOvY_e051abgGm)

이제 frame값인 agg_counts를 .take()메소드를 통해 indexer 순서대로 정렬합니다.

47번 cell과 똑같은 순서대로 정렬이 된 걸 볼 수 있습니다.

![img_jupyter50-52](http://drive.google.com/uc?export=view&id=1X1VzzdHphUfMu9GfMBJ4UGPk_gRb5zpj)

stacked=True로 하면 지역별 공공도서관 수와 사립도서관 수가 Stack(쌓여서)되어

그래프로 나타납니다.

<br>

지역별 공공/사립 도서관의 비율을 보고 싶다면, .div()를 사용하여, 위와같이

각 데이터값을 count_subset.sum(1)값으로 나눈 값, 즉

비율값 데이터를 normed_subset으로 저장하여 그래프로 표현하면 됩니다.

<br>
<br>

## 덧붙이는 말

<br>

이번 포스트 쓰면서 고생한 점..

<br>

### 1. 책에서 쓰라고 한 자료가 없다!

![img_no_data_in_book](http://drive.google.com/uc?export=view&id=1YDSjAZwKDNophFAGhlEyzevvv25yalKG)

We have decided to deactivate the service !!!!!!!!!!!!!!!

그래서 다른 json 자료를 찾아다녔다...

<br>

### 2. json 파일이 잘못됬다니!!!

공공기관에서 운영하는 공공데이터포털의 json파일이!!!

형식조차 잘못됬다니...

이게 왜안되지..왜왜왜왜...하면서 많은 시간을 뺏겼다...

이 답변을 찾아내기 전까지...했던 수많은 삽질

![img_wrong_json](http://drive.google.com/uc?export=view&id=1swBrzzB6AO8t_G6P5WWUrNXTXolDy0x5)

<br>

### 3. docs이해 안되는 나만 바본가...?

책보면서 하다가 argsort() 메소드가 나왔는데 설명이 없다.

docs를 찾아보니 이렇다.

![img_argsort_docs](http://drive.google.com/uc?export=view&id=1M4NjYioVp-jSM748FR9BHR-4vrxB6-9n)

argsort()의 설명이 'Argsorts the value'라니! 이해 안되는 나만 바본가...

<br>

### 4. 어쩐지 어렵더라...

![img_difficult](http://drive.google.com/uc?export=view&id=1vlcghGRqUM6Jjeo4YnOxRN-EbPXrkZc0)

정식 튜토리얼은 다음챕터부터였다... 어쩐지 설명도 없고..어렵더라..