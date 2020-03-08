---
layout: post
title:  "IntelliJ IDEA 설치와 HelloWorld 출력"
date:   2017-11-16 02:00:00
description: IntelliJ IDEA 설치와 HelloWorld 출력
categories:
- programming
- java
banner_image: /programming/java/java-logo.jpg
comments: true
---

IntelliJ IDEA 설치와 HelloWorld 출력

---

## IntelliJ IDEA

<br>

![img_intellij_logo](http://drive.google.com/uc?export=view&id=1Cn72vJj_Li3SSJTYAmmRsZ60fvRwAez1)

jetBrain사에서 만든 JAVA용 IDE(Integrated Development Environment)입니다.

사실 자바 초짜라 쓰고있는 이클립스로도 충분합니다. 아마 이클립스 기능의 10%도 못쓰고 있었을 겁니다.

이클립스도 충분히 좋은 툴입니다. 하지만...

개발일을 시작하면서 써온 개발툴이 PyCharm뿐인지라 파이참에 비해 이클립스는...그냥

전체적인 느낌? 디자인? 이런게 성에 덜차긴 했습니다.

<br>

그러던 중, 파이참을 출시한 회사인 jetBrain사의 IntelliJ를 추천받았고,

설치하기 전 많이 알아봤습니다.

같은 회사 제품이라 그런지 전체적인 느낌이 파이참과 매우 비슷해서 맘에 들었습니다.

그리고 IntelliJ는 무료버전과 유료버전이 있는데, 유료버전의 가격이...

![intelliJ_price](http://drive.google.com/uc?export=view&id=1StT2zRrMADRiCo1_jVfcHWVPyrZfu_lR)

무려 1년에 $499!!(외국도 뭔가 싼느낌을 주려고 우리나라 홈쇼핑 29900원 전략을 쓰는가봅니다)

한화로 약 55만원입니다...

물론~ 훌륭한 프로그램이니 이만한 돈을 내고 써야하는 건 당연하나...

나중에 돈 많이 벌면... 당당하게 돈을 지불하겠나이다.

<br>

그렇다고 제가 이상한 짓을 하겠다는 건 아니고,

대학교 메일 계정이 있으면 무상으로 jetBrain사의 모든 유료버전 툴을 사용할 수 있습니다.

이때는 툴을 상업적 용도로 사용해서는 안된다고 명시되어 있습니다.

<br>

유료버전이 무료버전에 비해서 뭐가 좋은건지도 잘 모르지만,

일단 디자인도 맘에 들고, 유료버전도 쓸 수 있다기에 설치해서 써보기로 했습니다.

<br>
<hr>
<br>

## 가입 및 학생 인증 받기

<br>

[https://www.jetbrains.com/](https://www.jetbrains.com/)

jetBrains사 홈페이지에 들어갑니다.

![img_hp_jetbrains](http://drive.google.com/uc?export=view&id=1gkf2OdPWPpqoTQveRzvRsU8OBHc75Af0)

우측 상단에 사람 상체 아이콘을 클릭하면 로그인 / 회원가입 페이지로 넘어갑니다.

![img_sign_up](http://drive.google.com/uc?export=view&id=17cHn8yhdmDmO0UXj90U7is7qIGHDh5oK)

메일계정을 쓰고 Sign Up 버튼을 누르면, 해당 메일로 확인 메일이 갔다는 화면이 나옵니다.

![img_sign_up_email](http://drive.google.com/uc?export=view&id=17Vz6ularJGydNpovRB4akvnqTgU5eRuE)

메일로 가보면 메일이 와있고, Confirm your account를 클릭합니다.

그러면 다음과 같이 구체적인 계정을 만드는 화면이 나옵니다.

![img_confirm_account](http://drive.google.com/uc?export=view&id=1f_u7r_5Q-28sl21Oic_YLl0AnX0VVE3D)

쓰라는대로 다 쓰고 Sumbit을 누르면 가입이 완료됩니다.

그러면 이 화면으로 넘어가게 되는데요

![img_no_license](http://drive.google.com/uc?export=view&id=1R_um-gocg3XAnFiDLhDVhVf1ygnIHAHz)

여기서 유료버전 안쓰고 무료버전(Community)을 사용하실 분들은 좌측상단에 JET BRAINS 로고를 클릭하여 메인페이지로 가서

IntelliJ 다운로드 섹션을 찾아가 커뮤니티 버전을 다운받으시면 됩니다.

하지만 저는 학생 인증을 받고 유료버전을 무료로 사용하겠습니다.

Apply for a free student or teacher license를 클릭합니다.

![img_apply_student](http://drive.google.com/uc?export=view&id=10oi8UVaJJLO6wwm44SfIJGHhx_ZB4FRf)

어쩌고저쩌고 영어... APPLY NOW를 클릭합니다.

![img_student1](http://drive.google.com/uc?export=view&id=1Y9l-wx6KL8fNl-uNIq6EmwwvkC8g-Zlc)

이 화면이 뜨면 빈칸을 채우고 APPLY FOR FREE PRODUCTS를 클릭하면 됩니다.

참고로 세가지 방법이 존재하는데, 메일인증이 제일 간편합니다.

메일 주소는 .edu 또는 .ac.kr 같이 교육기관 메일이여야합니다.

APPLY버튼을 누르면 입력했던 학교 메일로 메일이 날라옵니다.

![img_mail_student](http://drive.google.com/uc?export=view&id=19sBlW21hnLQgSJsavBltJMLUZh78xw4b)

메일을 클릭하면 그 안에 또 뭔가 동의하는 페이지로 이동하는 링크가 있고,

그 링크에서 동의를 하면 또 메일이 날라오는데 거기서도 또 다른 페이지로 이동하는 링크가 있습니다.

시키는 대로 다 하고 마지막으로 온 메일 안에 링크를 클릭하면

![img_after_student](http://drive.google.com/uc?export=view&id=1N-NKLErJuI0rSQ1qTk8ied3-zq_2tCg2)

무상으로 사용할 수 있는 jetBrains사의 툴들이 나옵니다.

<br>
<hr>
<br>

## 설치 및 HelloWorld 작성

<br>

저는 제일 처음에 있는 IntelliJ IDEA Ultimate를 클릭했습니다.

![img_choose_intelliJ](http://drive.google.com/uc?export=view&id=12QChBQ_JGFeifFGA-DNcK2SBapAo8f6H)

당연히 Ultimate를 다운받아 실행합니다.

실행하면 라이센스 활성화를 요구하는 창이 뜹니다. 자신의 계정을 입력합니다.

![img_activate_license](http://drive.google.com/uc?export=view&id=1aCG0Xr1aaqw2rDM4qi8nr6v8gVVdLq2S)

그 다음에 뭔가 세팅을 요구하는 창들이 여러개 뜹니다.

그 중 몇개를 살펴보면

![img_never_used](http://drive.google.com/uc?export=view&id=1Uw9IPsiCoC12JJPIOSEVVdbhIbyoilxj)

뭔가 키 설정과 관련되 보입니다. 저는 처음 설치하는 것이니 I've never used IDEA를 선택했습니다.

![img_install_plugins](http://drive.google.com/uc?export=view&id=1_UnKwVccDtKlfhaiBoG6OBWnVipDw30g)

플러그인 설치하고 싶은거 설치하라고 합니다. 없는 것보단 있는게 좋을테니 경고창 있는거 제외하고 다 설치했습니다.

다 세팅하고 나면 드디어 첫 화면이 뜹니다.

![img_first](http://drive.google.com/uc?export=view&id=1yJ2BllOKBgCVLXQNSmO2DtYTY8_9NtkY)

HelloWorld를 작성해보겠습니다. 먼저 Create New Project를 클릭합니다.

![img_select_project](http://drive.google.com/uc?export=view&id=1k1CUi-cxSGd7iSEeDDe-7fmLgYTWSC7k)

좌측에서 Java를 골라줍니다. 우측 상단에 Project SDK가 java로 설정되있는걸 확인한 후, Next!

![img_template](http://drive.google.com/uc?export=view&id=1bH54uoVDgZV7SVs6c2TCrnHiBb21CbKF)

코드 좀 써줄까...? 하는 창인데 전 선택 안했습니다.(공부 중이라 제가 처음부터 다 씁니다!) Next!

![img_location](http://drive.google.com/uc?export=view&id=16cloVl5a1PcJewRPmriRqFUTLZ_MFkqO)

프로젝트 저장 위치 설정입니다.

만드려는 프로젝트 이름을 쓰고, Project location에서 가장 끝에 ... 을 눌러 경로를 설정해줍니다. Finish!

![img_check_finder](http://drive.google.com/uc?export=view&id=1MqaGjhaGD13v9tvrEmpClVTgyHNZTqIG)

finder(탐색기)에서 의도한대로 잘 만들어졌는지 확인합니다.

![img_create_class](http://drive.google.com/uc?export=view&id=1KS9O5j-CsmLua68HotpX0yBT4TxARSbi)

드디어 IntelliJ 창이 떳습니다. 프로젝트 폴더의 src폴더에서 오른쪽 클릭을 하여 Java Class를 만들어줍니다.

![img_run](http://drive.google.com/uc?export=view&id=1z5DDzHyXEGovlC2K1JpO7MWpVGPi4GDJ)

만들어진 java파일에 간단한 "Hello" 코드를 작성하고 Run을 클릭하면

![img_result_run](http://drive.google.com/uc?export=view&id=1qU8tZ1hf1P-QS77KsVGcVddBA1GCCxWU)

하단 콘솔에 결과가 뜹니다.

<br>

실행시 인자를 받는 것까지 해보겠습니다.

먼저 코드를 다음과 같이 작성해줍니다.

![img_get_ar_code](http://drive.google.com/uc?export=view&id=1DLiFlqW83HcOZzQFmJ3TOzuywbrP-6GH)

그리고 우측 상단에 Run버튼(▶︎)옆에 프로젝트명을 클릭해 Edit Configurations...로 들어갑니다.

![img_edit_conf](http://drive.google.com/uc?export=view&id=1yWeIXkQP8Yw5qf1EdVCpIb60B0uB4XqA)

Program Arguments 부분에 원하는 인자를 써줍니다.

그리고 다시 실행을 하면

![img_result_ar_run](http://drive.google.com/uc?export=view&id=1JiBXk2tUVZnpHf8v3-gKOB5fL7ikA8nC)

인자가 잘 출력되는 것을 볼 수 있습니다.



