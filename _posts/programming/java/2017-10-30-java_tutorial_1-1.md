---
layout: post
title:  "[Java] 자바 설치와 'Hello, Java' 출력"
date:   2017-10-30 00:45:00
description: 자바 설치
categories:
- programming
- java
banner_image: /programming/java/java-logo.jpg
comments: true
---

[Java] 자바 설치와 'Hello, Java' 출력

---

## Java 설치 여부 확인하기

<br>

윈도우에서는 cmd창, 맥에서는 터미널을 띄우고,

{% highlight bash %}
$ java
{% endhighlight %}

를 입력해봅니다.

저는 맥환경인데, 자바가 설치가 안되있으면 다음과 같이 뜹니다.

![1.check_java](http://drive.google.com/uc?export=view&id=17U77wSfTTXCGWfKVve76BHZkE6RLU84g)

윈도우도 설치가 안되있으면 뭔가 오류가 뜰겁니다.

<br>

## Java 설치하기

<br>

오라클 홈페이지에 가서 Java SE 를 다운받습니다.

![2.java_homepage](http://drive.google.com/uc?export=view&id=1mOHSOyCQ3iNXlmRU1RYIs0rkuOp1WPsV)

클릭하면, 운영체제를 고르라고 하는데 자신에게 맞는 운영체제를 고릅니다.

저는 맥이니 3번째 macOS를 골라 다운을 받았습니다.

![3.down_java](http://drive.google.com/uc?export=view&id=1aigOPYZIjbQH61Zewt4VboMoHhq9lKRZ)

설치 파일을 더블클릭하고, 시키는 대로 해서 설치합니다.

여기서는 아이콘을 더블클릭 하라고 하네요

![4.install_java](http://drive.google.com/uc?export=view&id=1_SYnFl8cvUWI8WmX5nwn08OSNd8rM05l)

그리고 터미널에서 다시

{% highlight bash %}
$ java
{% endhighlight %}

를 입력하면 잘 설치된 증거로 자바 사용법이 나옵니다.

![5.terminal_java](http://drive.google.com/uc?export=view&id=1lKPykCTSVGRiN0XGSZn9217EDY1w-tiU)

java -version을 입력하면 설치된 자바의 버전이 나옵니다.

{% highlight bash %}
$ java -version
{% endhighlight %}

![6.java-version](http://drive.google.com/uc?export=view&id=1AghfgLYhoqRbRzKiNUuIID4_fUg-bDtJ)

<br>

(윈도우에서는 추가로 PATH 설정이 필요합니다! [여기](https://opentutorials.org/module/516/5556) 동영상의 4:00 부터 path설정이 나옵니다.)

<br>


## Hello Java 작성해보기

<br>

Java파일을 만드는데는 아무 텍스트 입력기나 사용해도 됩니다.

윈도우면 메모장, 맥이면 vi도 됩니다.

원래 이클립스라는 좋은 에디터가 있는데,

대부분의 책들이 처음 자바를 공부하는 사람들에게는 추천하지 않습니다.

<br>

저는 'sublime Text'를 이용했고, HelloJava.java 로 파일명을 정했습니다.

확장자는 필히 .java 여야 합니다.

>HelloJava.java
{% highlight java %}
public class HelloJava{
	public static void main(String[] args){
		System.out.println("Hello again, Java!");
	}
}
{% endhighlight %}

저는 약 9년전 수업으로 잠깐 공부해본적이 있어, 'Hello again'이라 붙였습니다.

<br>

## Java 파일 실행

<br>

자바 파일은 다음과 같은 과정을 통해 실행됩니다.

> 코드 작성 -> 컴파일 -> 실행

여기서 컴파일이란 것은, 작성한 코드를 컴퓨터가 이해할 수 있는 컴퓨터 언어로 변환하는 것을 말합니다.

자바의 컴파일은 javac 라는 명령을 통해 시행되고,

결과물로 .class라는 확장자를 가진 클래스 파일이 만들어집니다.

컴파일을 마친 클래스 파일은 JVM(JavaVirtualMachine)에서 읽어서 운영체제에서 실행됩니다.

<br>

그럼 HelloJava.java 파일을 컴파일 하고 실행해 보겠습니다.

![7.run_hellojava](http://drive.google.com/uc?export=view&id=1bleSTm24kqArMBnY1eJ9_2MRVtxSdvw_)

{% highlight bash %}
$ javac HelloJava.java
{% endhighlight %}

javac로 컴파일을 하자 class파일이 생긴걸 확인할 수 있습니다.

<br>

{% highlight bash %}
$ java HelloJava
{% endhighlight %}

java로 HelloJava를 실행하자 main()메소드가 실행되고,

코드에 있던 println이 실행되어

'Hello again, Java!' 문구가 출력되는 걸 볼 수 있습니다.

