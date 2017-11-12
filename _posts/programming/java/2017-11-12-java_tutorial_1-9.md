---
layout: post
title:  "[Java] 패키지(package)와 접근 제어자(public, protected, package-private, private)"
date:   2017-11-12 18:00:00
description: 패키지(package)와 접근 제어자(public, protected, package-private, private)
categories:
- programming
- java
banner_image: /programming/java/java-logo.jpg
comments: true
---

[Java] 패키지(package)와 접근 제어자(public, protected, package-private, private)

---

## 패키지(Package)

<br>

자바로 애플리케이션을 개발할 때는 수많은 클래스를 만들 것입니다.

그런데 이 클래스들을 모두 한 폴더안에 넣어서 작업하면,

이름이 중복되거나 어떤 클래스가 어떤 일을 하는지 혼동되는 일이 발생할 것입니다.

<br>

패키지는 간단히 말해 이러한 클래스들을 폴더개념으로 분류해놓은 것입니다.

그럼 패키지를 만들어보겠습니다.

<br>
<hr>
<br>

## 패키지 생성하기

<br>

현재 자신이 작업하는 디렉토리가 c:\java_1-9 라고 가정하겠습니다.

즉 프로젝트 이름이 java_1-9 라고 가정합니다.

이 폴더 안에 c 라는 이름의 폴더를 만들고, 

그 c 폴더 안에 javapackage라는 폴더를 만듭니다.

방금 만든 c와 javapackage 폴더가 모두 패키지가 되는 겁니다.

그 후, c:\java_1-9\c\javapackage 안에 Package.java 를 만듭니다.

>java_1-9\c\javapackage\Package.java

~~~ java
package c.javapackage;

public class Package {
	public static void main(String[] ar) {
		System.out.println("Package class");
		
		Sub ex = new Sub();
		ex.subClassMethod();
	}
}
~~~

맨 위에 package c.javapackage; 가 패키지 선언문입니다.

패키지 선언을 할 때는 주의해야할 점이 몇가지 있습니다.
- 공백이나 주석을 제외하고 가장 첫 줄에 있어야 함
- 패키지 선언은 소스 하나당 하나씩만 있어야 함
- 패키지 이름과 위치한 폴더 이름이 같아야 함

<br>

패키지 이름을 지정할 때에도 주의할 사항이 있는데, java로 시작하면 안된다는 것입니다.

예를 들어 java_1-9 폴더 안에 java라는 폴더를 만들어 그 안에 JavaPackage.java을 다음과 같이 만든다면,

~~~ java
package java;
public class JavaPackage{

}
~~~

컴파일 후, 실행할 때 오류가 납니다.

오류에는 "Prohibited package name: java"라는 메세지가 포함되어 있습니다.

말그대로 임의로 java라는 이름으로 패키지를 만들면 안된다는 의미입니다.

안되는 이유는 다음과 같습니다.

패키지 시작 이름 | 내용
:---:|:---:
java | 자바 기본 패키지(Java 벤더에서 개발)
javax | 자바 확장 패키지(Java 벤더에서 개발)
org | 비영리단체(오픈소스)의 패키지
com | 영리단체(회사)의 패키지

즉, 저희들은 Oracle에서 자바는 만드는 사람이 아니므로

java로 시작되는 패키지를 만들면 안됩니다.

<br>

패키지 이름을 정할때 유의할 점이 몇가지 있습니다.
- 패키지 이름은 모두 소문자
- 자바의 예약어(int, static 등등) 사용 금지

<br>
<hr>
<br>

## import를 이용하여 다른 패키지에 접근하기

<br>

c\javapackage 안에 sub라는 폴더를 만듭니다.

(위의 말은 c.javapackage 패키지 아래에 sub라는 패키지를 만든다는 말과 같습니다.)

그리고 sub패키지 안에 Sub.java 파일을 만듭니다.

~~~ java
package c.javapackage.sub;

public class Sub {
	public Sub() {
		System.out.println("Default Constructor of Sub class run");
	}
	
	public void subClassMethod() {
		System.out.println("subClassMethod() method of Sub class run");
	}
}
~~~

이 Sub클래스를 아까 만든 Package클래스에서 접근하려면 import를 쓰면 됩니다.

~~~ java
package c.javapackage;

import c.javapackage.sub.Sub;
// import c.javapackage.sub.*;

public class Package {
	public static void main(String[] ar) {
		System.out.println("Package class");
		
		Sub ex = new Sub();
		ex.subClassMethod();
	}
}
~~~

만약 c.javapackage.sub 패키지안에 여러 클래스가 있고, 그 클래스를 한꺼번에 불러오고 싶다면
~~~ java
import c.javapackage.sub.*;
~~~
을 하면 됩니다.

<br>

import 하지 않아도 되는 패키지는 다음과 같습니다.
- java.lang 패키지
- 같은 패키지

지금까지 많이 사용해왔던 String과 System클래스도 import하지 않아도 됬었던 이유가

둘다 java.lang 패키지에 있기 때문입니다.

<br>
<hr>
<br>

## import static

<br>

import static은 static한 변수(클래스 변수)와 static 메소드를 사용하고자 할 때 편리합니다.

~~~ java
package c.javapackage.sub;

public class SubStatic {
	public final static String CLASS_NAME = "SubStatic";
	public static void subStaticMethod() {
		System.out.println("subStaticMethod() is called");
	}
}
~~~

static한 CLASS_NAME과 subStaticMethod()메소드가 정의된 클래스입니다.

패키지 선언문을 잘 보면 어느 경로에 만들어야 할지 알 수 있습니다.

~~~ java
package c.javapackage;

import static c.javapackage.sub.SubStatic.CLASS_NAME;
import static c.javapackage.sub.SubStatic.subStaticMethod;
// import static c.javapackage.sub.SubStatic.*;

public class PackageStatic {
	public static void main(String[] ar) {
		subStaticMethod();
		System.out.println("CLASS_NAME = " + CLASS_NAME);
	}
}
~~~

이렇게 import static을 사용하면 객체를 만들지 않아도 바로 사용할 수 있습니다.

<br>
<hr>
<br>

## 접근 제어자(Access Modifier)

<br>

자바에는 4개의 접근 제어자가 존재합니다.

아래의 표는 접근 가능 여부를 나타낸 것입니다.

 \ | 해당 클래스 안에서 | 같은 패키지 안에서 | 상속 받은 클래스에서 | import한 클래스에서
:---:|:---:|:---:|:---:|:---:
public | O | O | O | O
protected | O | O | O | X
(package private) | O | O | X | X
private | O | X | X | X

~~~ java
package c.javapackage.sub;

public class AccessModifier {
	public void publicMethod() {
		System.out.println("publicMethod() is called");
	}
	
	protected void protectedMethod() {
		System.out.println("protectedMethod() is called");
	}
	
	void packagePrivateMethod() {
		System.out.println("packagePrivateMethod() is called");
	}
	
	private void privateMethod() {
		System.out.println("privateMethod() is called");
	}
}
~~~

참고로 아무 접근제어자도 안적어 주는게 package private입니다.

이 클래스를 다음 클래스에서 사용해보겠습니다.

~~~ java
package c.javapackage;

import c.javapackage.sub.AccessModifier;

public class AccessCall {
	public static void main(String[] ar) {
		AccessModifier ex = new AccessModifier();
		
		ex.publicMethod();
		ex.protectedMethod();
		ex.packagePrivateMethod();
		ex.privateMethod();
		
//		Exception in thread "main" java.lang.Error: Unresolved compilation problems: 
//		The method protectedMethod() from the type AccessModifier is not visible
//		The method packagePrivateMethod() from the type AccessModifier is not visible
//		The method privateMethod() from the type AccessModifier is not visible
//
//		at c.javapackage.AccessCall.main(AccessCall.java:10)

	}
}
~~~

AccessCall 클래스를 컴파일하면 주석과 같은 오류가 뜹니다.

아까 표를 보면서 설명하자면,

public은 어디에서든 접근 가능하므로 오류가 나지 않았습니다.

나머지는 import한 클래스에서 접근 불가이기 때문에 오류가 났습니다.

<br>

이렇게 접근제어자를 통해 접근을 제어하는 이유 중 하나는 보안 때문입니다.

예를 들어 중요한 계산을 하는 메소드를 public으로 선언해놓았다면,

다른 사람들이 마음대로 호출해 써버릴 것입니다.

<br>

변수의 경우, 직접 접근해서 변수를 변경하지 못하게 하고

메소드를 통해서만 변경이나 조회할 수 있도록 할 때 접근제어자를 사용합니다.

~~~ java
package c.javapackage;

public class ChampionDTO {
	private String name;
	
	public ChampionDTO(String name) { //생성자를 통해서 name값 지정 
		this.name = name;
	}
	
	public String getName() { // 조회용 
		return name;
	}
}
~~~

<br>

마지막으로 클래스에 접근 제어자를 선언할 때 주의할 점이 있습니다.

한 클래스파일에는 여러 클래스가 들어가도 됩니다.

또한 public클래스가 있어도 되고 없어도 됩니다.

하지만 public클래스는 최대 하나만 존재할 수 있으며,

public으로 선언된 클래스의 이름은, 그 소스 파일의 이름과 동일해야 합니다.