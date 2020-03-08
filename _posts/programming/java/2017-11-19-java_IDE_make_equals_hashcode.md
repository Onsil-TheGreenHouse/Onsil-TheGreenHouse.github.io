---
layout: post
title:  "IDE(Eclipse, IntelliJ)에서 toString(), equals(), hashCode() 오버라이딩"
date:   2017-11-19 13:50:00
description: IDE(Eclipse, IntelliJ)에서 toString(), equals(), hashCode() 오버라이딩
categories:
- programming
- java
banner_image: /programming/java/java-logo.jpg
comments: true
---

IDE(Eclipse, IntelliJ)에서 toString(), equals()와 hashCode() 오버라이딩

---

## equals()와 hashCode() 작성하기

<br>

equals()와 hashCode()는 자바에서 객체가 같은지 체크하기 위해서

Object클래스에서 오버라이딩 해야하는 메소드입니다.

여러 IDE에서는 자동으로 이 두 메소드를 오버라이딩 해주는 기능이 있습니다.

자바의 대표적인 IDE인 Eclipse와 IntelliJ를 살펴보겠습니다.

---

## Eclipse

먼저 다음과 같은 코드가 있습니다.

![img_eclipse_make_equals_hashcode_1](http://drive.google.com/uc?export=view&id=1Llo8GAXzNPI4Xev-nfgf0XYgOxMUKw93)

상단 메뉴 중 Source를 보면 **Generate hashCode() and equals()**가 있습니다.

![img_eclipse_make_equals_hashcode_2](http://drive.google.com/uc?export=view&id=1K25jxc14joSEzKF96uHTk6cyzhOZlxlI)

클릭하면 다음과 같이 두 메소드가 생성됩니다.

![img_eclipse_make_equals_hashcode_3](http://drive.google.com/uc?export=view&id=1wNMi6FISy_uqachfCgbCBM8KgkoepEnJ)

---

## IntelliJ IDEA

<br>

먼저 다음과 같은 코드가 있습니다.

![img_intelliJ_make_equals_hashcode_1](http://drive.google.com/uc?export=view&id=1GDN6tXKo6rZuo0VEEtRvBve8TjTC-a3C)

상단 메뉴중 Code에서 Generate에 들어갑니다.

![img_intelliJ_make_equals_hashcode_2](http://drive.google.com/uc?export=view&id=1YC8ZZxAZQcR32Ao_QZ1gOx8Fcmk6qU2D)

그러면 코드 작성공간에 다음에 같이 어떤걸 생성할 껀지 고르는 창이 뜹니다.

![img_intelliJ_make_equals_hashcode_3](http://drive.google.com/uc?export=view&id=1oKJPtf4M7Go7g8tnaNb2WsLyEYZVvwkH)

equals()와 hashCode()를 고르면

![img_intelliJ_make_equals_hashcode_4](http://drive.google.com/uc?export=view&id=1OVep0GspY22XqeYNEVha15EQ2iPHA9u4)

두 메소드 코드가 생성됩니다!

---

## toString()

Eclipse와 IntelliJ에서 equals()와 hashCode()를 선택하는 창을 잘 보면

toString()도 있습니다! 클릭해주면 됩니다!

(절대 까먹고 안했다가 귀찮아서 이렇게 적는겁니다...)
