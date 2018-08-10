---
layout: post
title:  "[Java] 변수(variable), 자료형"
date:   2017-10-31 13:50:00
description: 변수(variable), 자료형(data type)
categories:
- programming
- java
banner_image: /programming/java/java-logo.jpg
comments: true
---

[Java] 변수, 자료형의 분류와 종류

---

## 변수의 분류

<br>

변수에는 생명주기라는게 있습니다.

변수에 어떤 값을 할당하면 그만큼의 메모리가 할당됩니다.

그런데 모든 변수가 자바 프로그램이 끝날 때까지 메모리를 사용하게 되면 

메모리 사용에 있어서 비효율적입니다. 분명 잠깐만 필요한 변수도 있을 것이기 때문입니다.

그래서 변수의 생명주기에 따라서 4종류의 변수로 구분할 수 있습니다.

<br>

분류 | 설명 | 생명시작 | 소멸
:---:|:---:|:---:|:---:
지역변수(local variable) | 중괄호{} 내에 선언된 변수 | 중괄호 시작( { ) | 중괄호 끝 ( } )
매개변수(parameter) | 메소드에 넘겨주는 변수 | 메소드가 호출될 때 | 메소드가 끝날 때
인스턴스변수(instance variable) | 메소드 밖, 클래스 안에 선언된 변수 | 객체가 생성될 때 | 그 객체를 참조하고있는 다른 객체가 없을 때
클래스변수(class variable) | 인스턴스 변수 중 타입 선언 앞에 static이라는 예약어가 있는 변수 | 클래스가 처음 호출될 때 | 자바 프로그램이 끝날 때

{% highlight java %}
public class VariableTypes{
	int instanceVariable;
	static int classVariable;

	public void method(int parameter){
		int localVariable;
	}
}
{% endhighlight %}

위의 코드에선 변수명으로 각 변수를 분류/설명하고 있습니다.

<br>

**지역변수**를 좀 더 정확히 알아보겠습니다.

<br>

{% highlight java %}
public class VariableTypes{
	int instanceVariable;
	static int classVariable;

	public void method1(int parameter){
		int localVariable;
	}
	public void method2(int parameter){
		int localVariable;
	}
}
{% endhighlight %}

여기서 method1과 method2의 localVariable은 다른 변수입니다.

지역변수는 지역변수를 선언한 중괄호 내에서만 유효하기 때문입니다.

<br>

{% highlight java %}
public class VariableTypes{
	int instanceVariable;
	static int classVariable;

	public void method(int parameter){
		if(true){
			int localVariable;
		}
		if(true){
			int localVariable;
		}
	}
}
{% endhighlight %}

(if문은 뒤에 설명) 여기서도 두 localVariable은 다른 중괄호에서 선언되었기 때문에

다른 지역변수입니다.

<br>

{% highlight java %}
public class VariableTypes{
	int instanceVariable;
	static int classVariable;

	public void method(int parameter){
		if(true){
			int localVariable;

			if(true){
				int localVariable;
			}
		}
	}
}
{% endhighlight %}

여기서 두 localVariable은 같습니다. 둘다 첫번째 if문의 중괄호에 속하기 때문입니다.

이런 경우 컴파일 에러가 뜹니다. 이미 localVariable를 선언했는데 똑같은 중괄호 안에서 또 선언하고 있기 때문이죠.

<br>

## 변수 작명

<br>

변수를 작명하는데는 몇가지만 주의하면 됩니다.

<pre>
1. 첫 문자는 유니코드 문자, 알파벳, $, _ 만 올 수 있습니다. 근데 보통 $, _로 시작하지 않습니다.
2. 첫 단어는 소문자로 시작하고, 두번째 단어의 첫 알파벳만 대문자로 시작합니다.
3. 상수(constant value)의 경우 모두 대문자로 지정하며, 단어와 단어 사이는 _로 구분합니다.
</pre>

참고로 상수는 절대 변하지 않는 값입니다.

<br>

## 자료형

<br>

자바에는 두 가지 자료형이 있습니다.

분류 | 예
:---:|:---:
기본 자료형(Primitive data type) | int num = 7;
참조 자료형(Reference data type) | Calculator clac = new Calculator();

두 종류의 차이점은 자료형을 초기화 할 떄,

int는 바로 값을 적고, Calculator는 new라는 예약어를 사용합니다.

<br>

참조 자료형 중, 유일한 예외가 String입니다.

보통 String값을 초기화할 때,

{% highlight java %}
String name = "teemo";
{% endhighlight %}

이렇게 하지만, 원래 참조형이기 때문에

{% highlight java %}
String name = new String("teemo");
{% endhighlight %}

이렇게도 가능합니다.

<br>

## 기본 자료형(Primitive data type)

<br>

방금 살펴본 자료형의 종류 중, 기본 자료형을 자세히 살펴보겠습니다.

기본 자료형은 총 8가지가 있습니다.

>정수형(byte, short, int, long, char), 소수형(float, double), 기타(boolean)

<br>

### 정수형(byte, short, int, long, char)

<br>

먼저 정수형을 살펴보겠습니다.

분류 | 최소 | 최대 | 비고
:---:|:---:|:---:|:---:
byte | $$-2^7$$ | $$2^7-1$$ | signed
short | $$-2^{15}$$ | $$2^{15}-1$$ | signed
int | $$-2^{31}$$ | $$2^{31}-1$$ | signed
long | $$-2^{63}$$ | $$2^{63}-1$$ | signed
char | 0 | $$2^{16}-1$$ | unsigned(부호가 없음)

7, 15, 31, 63은 $$2^n-1$$에서 n=3, 4, 5, 6입니다.

이렇게 종류별로 크기가 다른 것은 메모리의 효율적인 할당을 위한 것입니다.

예를 들어 byte로 표현하기는 부족하고, int로 표현하기에는 공간낭비가 심하다고 생각되면

short를 사용하면 됩니다.

이렇게 낭비를 줄이게 되면, 제한된 공간에 더 많은 데이터를 저장할 수 있게 됩니다.

<br>

그리고 long을 선언할 때는 숫자뒤에 L을 붙여줘야합니다.

예를 들어

~~~ java
long bigNum1 = 99999999999;
long bigNum2 = 99999999999L;
~~~

이 경우에 bigNum1은 에러가 납니다.

자바에선 숫자를 기본적으로 int로 간주하기 때문에, 

int의 크기 범위를 넘어가는 수에 L을 붙이지 않으면 너무 크다고 오류가 납니다.

<br>

#### **각 타입의 크기에 대하여(byte기준)**

<br>

먼저 bit에 대해서 알아보겠습니다.

위키피디아의 bit에 대한 머리말에서는 bit를 이렇게 설명하고 있습니다.

>The bit (a portmanteau of binary digit) is a basic unit of information used in computing and digital communications. A binary digit can have only one of two values, and may be physically represented with a two-state device. These state values are most commonly represented as either a 0or1.

컴퓨터 세계에서 쓰이는 정보의 기본단위이고, 두가지 값 중 하나만 가질 수 있으며, 보통 0이나 1로 표현된다라고 써져있습니다.

<br>

그리고 1byte가 8bit라는 건, 검색해보면 쉽게 알 수 있는 사항입니다.

![data_size](https://lh3.googleusercontent.com/zmGZcvFtzK_6Rri-X2zcq29Cs_doxu8Lte9PsJfH-t8OAy9a8_3DADLtdnXtLbjfPZPcpSYgeVyuiuJOjGOjOKzU8ehhNlc8FPPH2vezD9nah0nG8l-rdOycGEZtjlJjRcfOhekgw-XJB9EIZ52ol3seQ-HjMI4I4nLJIYnQs_9Vga0ufetphwkI7Qvlbmr-v1RCLLKz56DxfWCeQQUKV4HfH_251Px2r_6LsXQP-lbwDG6iv5POVgsia0DGcEh0_0IZvpXMs7QqBbwjI1I1v_Uk76bOI_92DcXXE6K7_dNuaRDbejLuyyFXtolWRFe6VSHLnidzJ8Y7i7Zdc3tzzXyddW5UKFFM_IJpUwynpSjtKwqEWmwSypvuy8Okncs6Mzkq-ltYlPjmyxMpx8qYov7Jz6b7-wIqwoibs0GW_oXE__LDIVryUKHNfEyUgaHd6jJgPZTYqnZQ-VdfvyrqNY1KC3fQd5r8BV0nG1BihGjYy_Yl921zWfDKRSXttIAyFsrWkMPMcoBrpb-7XlKgsyTkDEU8YbFoWBW2gJ1m_Q9tD5-UUeMMYrYWH81tUAPeS-ptndi-NY-NlkLpUabGpMP2NPOfMkzYu1FarT3Jlw=w1258-h568-no)

위에서 byte의 크기를 $$-2^7$$~$$2^7-1$$라고 했습니다.

즉, 이 안에 있는 숫자를 모두 세보면 $$2^8$$개가 됩니다.

그럼 다음과 같이 byte에 숫자 1이 값으로 선언되었다면,

~~~ java
byte num = 1;
~~~

num이란 변수가 저장된 방식은 2진수로 00000001 입니다.

근데 bit가 저렇게 8개가 있으면 11111111 == 255이여야 하는데

왜 127까지며, 음수는 또 어떻게 표현하는 것일까요?

<br>

2진수에서 음수를 표현하는 방법은 맨앞의 숫자입니다.

맨앞의 숫자가 0이면 양수, 1이면 음수입니다. 즉,

10000001 == $$2^8$$x1 + $$2^0$$x1 이 아니라

맨앞의 1은 음수를 나타내므로 -127입니다.

<br>

그럼 왜 -1이 아니라 -127일까요?

이렇게 생각하면 됩니다. byte는 -128~127이었습니다.

양수(0포함) 중에서 가장 작은 수는 0으로 이진법으로 나타내면 00000000 입니다.

음수중에서 가장 작은 수는 -128인데 음수니까 맨앞에 비트는 1이 되고 나머지는 0이 되서 10000000가 됩니다.

즉, 양수든 음수든 가장 작은 수는 맨앞에 부호를 나타내는 비트를 제외하고 0000000이 되는것입니다.

<br>

같은 원리로 00000001은 양수중에 두번째로 작은 수인 1입니다.

10000001은 음수중에 두번째로 작은 수인 -127이 됩니다.

<br>

보다 쉽게 계산하는 방법이 있습니다. **보수**라는 개념이 있는데 예를 들어

1의 보수는 -1입니다. 1 + (-1) == 0 이기때문입니다.

사실 부호만 바뀐 건데요. 이를 이진법에도 적용할 수 있습니다.

이진법에서 보수를 구하는 방법은 원래 수에서 0을 1로, 1을 0으로 바꾸고 1을 더하는 것입니다.

예를 들어 00000001의 보수는 11111110 + 1 == 11111111입니다.

(위의 원리로 생각하면 맨앞에 비트를 제외하고 1111111은 각 부호에서 가장 큰 수를 의미하는데 11111111은 음수중에 제일 큰 수를 의미하므로 -1이 됩니다.)

00000001 + 11111111 == 100000000 가 되는데 8자리를 넘어가므로 맨앞의 1은 버려버리면 00000000 즉, 0이 됩니다.

<br>

요약하면 -1의 이진수를 구하기 위해서는 00000001의 보수값을 구하는 방식으로 알아내면 되고,

주어진 음수 이진수의 십진수값을 알기 위해서는, 보수를 구해 양수 이진수의 십진수 값을 알아낸 후, -만 붙이면 됩니다.

<br>
<hr>

마지막으로 이 코드를 생각해봅시다.

~~~ java
public class PrimitiveTypes{
	public static void main(String[] ar){
		PrimitiveTypes types = new PrimitiveTypes();
		types.checkByte();
	}
	public void checkByte(){
		// byteMin = -128
		byte byteMin = Byte.MIN_VALUE;
		// byteMax = 127
		byte byteMax = Byte.MAX_VALUE;

		// byteMinMinus = 127
		byte byteMinMinus = (byte)(byteMin -1);
		// byteMaxPlus = -128
		byte byteMaxPlus = (byte)(byteMax + 1);

		System.out.println("byteMin = " + byteMin);
		System.out.println("byteMax = " + byteMax);
		System.out.println("byteMinMinus = " + byteMinMinus);
		System.out.println("byteMaxPlus = " + byteMaxPlus);
	}
}
~~~

Byte.MIN_VALUE는 그냥 built-in으로 -128이고 Byte.MAX_VALUE는 127입니다.

여기서 알아보고자 하는 것은 byte의 최댓값인 127에 1을 더하면 어떻게 되는지,

byte의 최소값인 -128에 -1을 더하면 어떻게 되는지 알아보고자 함입니다.

그래서 byteMinMinus와 byteMaxPlus에 해당 값을 넣었습니다. 

여기서 (byte)라고 캐스팅(형변환)을 사용했습니다.

이유는 아까 long 설명하면서 언급했듯이 자바는 일단 숫자는 int로 간주합니다.

즉, byteMin-1은 일단 int로 간주하여 -129로 계산합니다. 

이 상태로 자료형을 변환안시키고 바로 byte인 byteMinMinus에 대입하려하면 

byte의 크기범위(-128~127)를 벗어나기 때문에 에러가 뜹니다. 

그래서 (byte)를 씀으로써 강제 형변환을 시켜주는 겁니다.

<br>

다시 본론으로 돌아가면 byte에서 -128 + (-1)은 127이 되고,

127 + 1은 -128이 되는걸 볼 수 있습니다.

이진수로 생각하면 이해하기 쉬운데,

-128은 이진수로 10000000이고 -1은 11111111입니다. 이 두 수를 더하면

~~~ jinja
  1 0 0 0 0 0 0 0
+ 1 1 1 1 1 1 1 1
-----------------
1 0 1 1 1 1 1 1 1
~~~

맨앞의 1은 8자리를 벗어나므로 버리면 01111111 즉 127이 됩니다.

<br>

127 + 1도 살펴보면

~~~ jinja
  0 1 1 1 1 1 1 1
+ 0 0 0 0 0 0 0 1
-----------------
  1 0 0 0 0 0 0 0
~~~

10000000 즉 -128이 됩니다.

<br>

이렇게 생각할 수도 있습니다. 원형 띠 형태로...

-128과 127이 연결되어 있고, 시계방향이 감소하는 방향입니다.

~~~ jinja
    -127 -128 127 126 125 124 ... 3
-126                               2
    -125 ... -6 -5 -4 -3 -2 -1 0 1
~~~

<hr>

<br>

### **char**

<br>

char는 short와 크기는 똑같지만 음수부분이 없어, 크기 범위가 $$0~2^{16}-1$$인 0~65535입니다. 

~~~ java
public void checkChar(){
		// charMin =    (값이 없는게 아니라 공백)
		char charMin = '\u0000';
		// charMax = ?
		char charMax = '\uffff';
		// charA = 97
		int charA = 'a';
		// char 98 = 'b'
		char char98 = 98;

		System.out.println("charMin = " + charMin);
		System.out.println("charMax = " + charMax);
		System.out.println("charA = " + charA);
		System.out.println("char98 = " + char98);
	}
~~~

다양한 char입력 방법을 나타낸 것입니다. 해당값은 주석으로 처리해놨습니다.

\u 다음에는 반드시 4개의 16진수값이 와야만 합니다.

그런데 int 'a'는 97이 나오고, char 98은 'b'가 나오는 것을 볼 수 있습니다.

ASCII(아스키) 코드번호 97이 a인데 int는 숫자로 변환해서 97이 나온 것이고,

b는 ASCII 코드번호가 98인데 char이므로 b로 출력이 되는 것입니다.

<br>

### 소수형(float, double)

<br>

float와 double모두 소수점 값을 처리하기 위해서 사용됩니다.

float는 32비트, double는 64비트로 표현된다고 합니다.

일반적으론 double을 많이 사용하는데, 소수점자리가 적은 데이터를 저장할 때는 float를 사용할 수 있습니다.

<br>

float와 double는 해당 비트 범위를 넘어서면, 해당 값의 정확성을 보장하지 못합니다.

그래서 돈계산과 같이 정확성이 중요할 때는 소수형 자료형을 사용해서는 안됩니다.

<br>

### Boolean

<br>

boolean은 true와 false 두개의 값만 가질 수 있습니다.

~~~ java
public void checkBoolean(){
		boolean flag1 = true;
		boolean flag2 = false;

		System.out.println("flag1 = " + flag1);
		System.out.println("flag2 = " + flag2);
	}
~~~

<br>

### 기본값 알아보기

<br>

기본 자료형에 값을 설정을 안해주면 해당 자료형의 기본값으로 설정됩니다.

~~~ java
public class CheckDefault{
	byte byteDefault;
	short shortDefault;
	int intDefault;
	long longDefault;
	float floatDefault;
	double doubleDefault;
	char charDefault;
	boolean booleanDefault;

	public void printDefault(){
		// byteDefault = 0
		System.out.println("byteDefault = " + byteDefault);
		// shortDefault = 0
		System.out.println("shortDefault = " + shortDefault);
		// intDefault = 0
		System.out.println("intDefault = " + intDefault);
		// longDefault = 0
		System.out.println("longDefault = " + longDefault);
		// floatDefault = 0.0
		System.out.println("floatDefault = " + floatDefault);
		// doubleDefault = 0.0
		System.out.println("doubleDefault = " + doubleDefault);
		// charDefault = 
		System.out.println("charDefault = " + charDefault);
		// booleanDefault = false
		System.out.println("booleanDefault = " + booleanDefault);
	}

	public static void main(String[] ar){
		CheckDefault check = new CheckDefault();
		check.printDefault();
	}
}
~~~

각 자료형의 기본값을 출력해보았습니다.

대부분 0이 나오고, charDefault는 \u0000 값인 공백이 나온 것입니다.

boolean의 기본값은 false인 것도 알 수 있습니다.
