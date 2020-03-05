---
layout: post
title:  "Eclipse(이클립스) 설치"
date:   2017-11-05 03:30:00
description: Eclipse(이클립스) 설치
categories:
- programming
- java
banner_image: /programming/java/java-logo.jpg
comments: true
---

Eclipse(이클립스) 설치

---

## 1. 다운 & 설치

<br>

최종 목표는 Eclipse IDE for Java EE Developers를 설치하는 것입니다.

<br>

이클립스 홈페이지 [http://www.eclipse.org/](http://www.eclipse.org/)에 접속합니다.

이 링크를 클릭해도 되고, 구글에서 검색해서 들어가도 됩니다.

들어가서 Download Package페이지에 들어갑니다.(잘 찾아보세요)

그럼 다음과 같은 화면이 뜹니다.

![1.eclipse_homepage](http://drive.google.com/uc?export=view&id=1dZLO3z7Vnrsxi4S0V_J9Lm-QTswe-57E)

여기서 Eclipse Installer를 다운 받습니다.

밑에 바로 Eclipse IDE for Java EE Developers를 다운받는 링크도 있긴합니다.

하지만 나중에 다른 이클립스 버전을 다운받을 경우 편하도록, 전 Installer를 받겠습니다.

<br>

다운받았으면 그 파일을 설치합니다.

윈도우는 잘 모르겠지만, 맥은 tar.gz파일로 받아서 압축을 풀고 나온 .app파일로 설치합니다.

![2.install](http://drive.google.com/uc?export=view&id=1sk9q92VxdrCx5BFYd5sMskMpcD409t_T)

설치할 때, 어떤 이클립스 버전을 설치할꺼냐고 물어봅니다. 여기선 자바용으로 사용할 것이므로

Eclipse IDE for Java EE Developers를 선택합니다.

![3.select_version](http://drive.google.com/uc?export=view&id=1Nl4Uc6ird9GJWEX2-laKDnQ2mL3V4qzU)

<br>
<hr>

## 2. 실행 - workspace설정

설치한 후, 실행하면 처음에 다음과 같이 workspace설정하라고 나옵니다.

![4.set_workspace](http://drive.google.com/uc?export=view&id=1969J4NCE4UpRsKm2k0lUuxqPcmfm7-Jr)

workspace는 이클립스로 작업할 때, 프로젝트/파일이 저장될 공간입니다. 편한 곳으로 설정해줍니다.

언제든지 다시 설정할 수 있습니다.

<br>
<hr>

## 3. 실행 - 코드작성하기

workspace를 설정하면 첫 화면에 welcome이 뜹니다.

![4.1.welcome](http://drive.google.com/uc?export=view&id=1Uk5BGGYvXjp3vpz_axET2_2mrMNaarK0)

이클립스에 대한 설명이 있는 부분입니다. 일단 끕니다.

<br>

이클립스에서 작업하기 위해서는 프로젝트를 생성해야합니다.

File > New > Project 에 들어갑니다.

![5.mk_new_project](http://drive.google.com/uc?export=view&id=1eN1QiMu_GeWcQnlmqTst2MF0TiOC8n8R)

들어가면 밑의 화면이 보이는데, 여기서 Java Project를 선택합니다.

![6.select_javaproject](http://drive.google.com/uc?export=view&id=1BhekYzTdb4Xt6XHv-ieec0Ve827jS22-)

그리고, 해당 프로젝트의 이름을 지정해줍니다. 프로젝트는 지금부터 작업할 공간(폴더)입니다.

프로젝트는 처음에 세팅한 workspace폴더에 만들어집니다.

![7.set_name_project](http://drive.google.com/uc?export=view&id=1H4YYYUUkdVwrwdlGZg8562CyqVZO4P6y)

그럼 아래와 같이 프로젝트 화면이 나옵니다.

![8.after_mk_project](http://drive.google.com/uc?export=view&id=1rNKAjlSSZXzBFQX-YDQHOGSHQJy1XE9k)

작업하고자 하는 프로젝트를 왼쪽에 Navigator에서 선택하고,

왼쪽 상단에 new아이콘을 클릭합니다. 그럼 아래 창이 뜹니다.

![9.select_class](http://drive.google.com/uc?export=view&id=10rjOuncFBYaGJFW4kcLE8gQBhLIFpFSL)

여기서 class를 선택합니다.

![10.set_class_name](http://drive.google.com/uc?export=view&id=1oygkz2g_ZtZAIWPdipZV4d7tY33otH3-)

클래스 이름을 설정하고 Finish 버튼을 누르면, 이제 코딩을 할 java파일이 만들어집니다.

![11.after_mk_class](http://drive.google.com/uc?export=view&id=1U4qvTclAQFfstC6iheeOGQ8IyFeL2rdj)

코드를 작성한 후, 가운데 상단에 벌레 모양 옆에 ▶︎ 를 클릭하면, 이클립스가 알아서 컴파일(javac)후, java파일을 실행시킵니다.

![12.code](http://drive.google.com/uc?export=view&id=15ijO-G8TZ6tquIyadN7bxlKXQj502-LM)

![13.check_run](http://drive.google.com/uc?export=view&id=1ptsIiyiU5DlvH9Zz1myEGEajK1J4u-z-)

OK 를 누르면

![14.result](http://drive.google.com/uc?export=view&id=1a-tVMLnkX-vn-LfEGXYQ3c1jns3lL3yu)

밑에 Console에 실행결과가 뜹니다.
