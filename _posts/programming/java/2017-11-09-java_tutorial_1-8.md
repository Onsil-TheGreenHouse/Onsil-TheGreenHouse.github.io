---
layout: post
title:  "[Java] 참조 자료형(Reference type), 기본생성자, this, Overloading, pass by value, pass by reference, arbitrary number of arguments"
date:   2017-11-09 23:00:00
description: 참조 자료형(Reference type), 기본생성자, this, Overloading, pass by value, pass by reference, arbitrary number of arguments
categories:
- programming
- java
banner_image: /programming/java/java-logo.jpg
comments: true
---

[Java] 참조 자료형(Reference type), 기본생성자, this, Overloading, pass by value, pass by reference, arbitrary number of arguments

---

## 참조 자료형(Reference type)

<br>

자바의 자료형은 크게 기본 자료형과 참조 자료형으로 나뉘어집니다.

기본자료형은 byte, short, int, long, char, float, double, boolean,

그 외는 모두 참조 자료형입니다.

<br>

기본 자료형과 참조 자료형의 가장 큰 차이는 객체를 생성할 때, new의 사용여부이며

유일하게 new없이도 객체를 생성할 수 있는 참조 자료형은 String입니다.

<br>
<hr>

## 기본 생성자

~~~ java

public class ReferenceDefault {
	public static void main(String[] ar) {
		ReferenceDefault ex = new ReferenceDefault();
	}
}
~~~

기본 생성자는 만들지 않아도 자동으로 만들어지는 생성자입니다.

위의 코드에서 ReferenceDefault()가 생성자 입니다.

매개변수로 아무것도 넘길게 없을때가 기본생성자인데, 굳이 안적어줘도 컴파일할 때 만들어집니다.

<br>

하지만 생성자에 넘겨줘야할 변수가 있을 때는

생성자를 필히 정의해주어야 합니다.

~~~ java

public class ReferenceString {
	public ReferenceString(String argument) {
		System.out.println("ReferenceString constructor running");
	}
	
	public static void main(String[] ar) {
		ReferenceString ex = new ReferenceString("example");
		//ReferenceString constructor running
	}
}
~~~

String을 매개변수로 받는 ReferenceString(String argument)생성자를 생성한 코드입니다.

<br>

생성자는 여러개를 정의할 수 있습니다.

만약 클래스 객체를 만들 때, 매개변수가 없을 수도 있고 String을 매개변수로 받을 수도 있다면

다음과 같이 정의해주면 됩니다.

~~~ java

public class ReferenceString2 {
	public ReferenceString2() {
		System.out.println("Constructor with no parameter running");
	}
	public ReferenceString2(String argument) {
		System.out.println("Constructor with String argument running");
	}
	
	public static void main(String[] ar) {
		ReferenceString2 ex1 = new ReferenceString2();
		ReferenceString2 ex2 = new ReferenceString2("example");
//		Constructor with no parameter running
//		Constructor with String argument running
	}
}
~~~

ex1객체는 매개변수 없는 생성자를 이용했고, ex2는 String을 받는 생성자를 이용합니다.

<br>

보통 생성자의 위치는 인스턴스 변수를 선언한 후, 그리고 메소드 정의 전입니다.

~~~ java
public class Ex {
	String name; // 인스턴스 변수
	public Ex(){
		// 생성자
	}

	public static void main(String[] ar){
		// 메소드
	}

	public void method1(){
		// 메소드
	}

}
~~~

<br>
<hr>

## this

<br>

이번에는 자바의 예약어인 this를 살펴보겠습니다.

~~~ java

public class NoThisEx {
	public String name;
	
	public NoThisEx(String input_name) {
		name = input_name;
	}
}
~~~

위의 코드에는 파라미터로 String을 받는 생성자가 있습니다.

사실 파라미터 변수의 이름을 input_name으로 한 이유는 인스턴스 변수인 name과 구분하기 위함입니다.

input_name대신 그냥 name으로 파라미터를 받으면 생성자 안은

name = name;

이 될것이고, 그럼 좌변의 name이 인스턴스 변수인지 파라미터인지 알수가 없습니다.

그럼에도 불구하고 input_name대신에 name을 쓰고 싶으면

다음과 같이 this를 사용하여 인스턴스 변수와 파라미터를 구분할 수 있습니다.

~~~ java

public class ThisEx {
	public String name;
	
	public ThisEx(String name) {
		this.name = name;
	}
}
~~~

this.name은 객체의 변수(public String name)의 name을 의미하고,

우변의 그냥 name은 생성자가 받는 매개변수인 name을 의미하게 됩니다.

<br>
<hr>

## DTO(Data Transfer Object)

<br>

DTO는 자바 패턴 중 하나로, 

어떤 속성들을 쉽게 전달하기 위해, 속성들을 포함하는 클래스를 만드는 것입니다.

이번에는 챔피언 정보(이름, 공격력, 방어력)를 담는 DTO클래스가 있다고 가정하고,

상황에 따라 다른 생성자를 사용하는 예를 살펴보겠습니다.

~~~ java

public class ChampionDTO {
	public String name;
	public int power;
	public int defense;
	
	public ChampionDTO() {
		// 아무 정보도 모를 때
		System.out.println("no information");
	}
	
	public ChampionDTO(String name) {
		// 이름만 알 때
		System.out.println("known information: name");
		this.name = name;
	}
	
	public ChampionDTO(String name, int power) {
		// 이름과 공격력만 알 때
		System.out.println("known information: name, power");
		this.name = name;
		this.power = power;
	}
	
	public ChampionDTO(String name, int power, int defense) {
		// 모든 정보를 다 알 때
		System.out.println("known information: name, power, defense");
		this.name = name;
		this.power = power;
		this.defense = defense;
	}
}
~~~

생성자의 개수에는 제한이 없으나, 너무 많으면 관리가 힘들어집니다.

그럼 ChampionDTO를 사용하여 객체를 생성해보겠습니다.

~~~ java

public class ChampionObject {
	public static void main(String[] ar) {
		ChampionObject ex = new ChampionObject();
		ex.makeChampionObject();
//		no information
//		known information: name
//		known information: name, power
//		known information: name, power, defense

	}
	
	public void makeChampionObject() {
		ChampionDTO ex1 = new ChampionDTO();
		ChampionDTO ex2 = new ChampionDTO("teemo");
		ChampionDTO ex3 = new ChampionDTO("teemo", 100);
		ChampionDTO ex4 = new ChampionDTO("teemo", 100, 20);
	}
}
~~~

ex1은 아무 매개변수도 안받는 생성자를 이용해서 "no information"이 출력되었고, 

ex2는 String만 받았기 때문에 "known information: name"이 출력되었습니다.

즉, 입력된 매개변수의 타입과 갯수에 따라, 그에 맞는 생성자를 이용하는 것입니다.

<br>
<hr>

## Overloading

~~~ java

public class OverloadingEx {
	public static void main(String[] ar) {
		OverloadingEx ex = new OverloadingEx();
		ex.print();
		System.out.println();
		ex.print("teemo");
		System.out.println();
		ex.print("teemo", 100);
		System.out.println();
		ex.print(200, "teemo");
//		print() with no paramter
//
//		print() with string parameter
//
//		print() with string, int parameters
//
//		print() with int, string parameters
	}
	
	public void print() {
		System.out.println("print() with no paramter");
	}
	
	public void print(String str) {
		System.out.println("print() with string parameter");
	}
	
	public void print(String str, int num) {
		System.out.println("print() with string, int parameters");
	}
	
	public void print(int num, String str) {
		System.out.println("print() with int, string parameters");
	}
}
~~~

print()메소드는 총 4가지 종류로 정의되어 있습니다.

이렇게 메소드명은 같지만, 매개변수만 다르게 정의하는 걸 오버로딩이라고 합니다.

<br>

주의할 것은 매개변수의 순서, 타입에 따라 다른 메소드로 인식된다는 것이고

순서, 타입이 같은데 변수이름만 다른건 같은 메소드로 인식한다는 것입니다.

예를 들어

![img_wrong_overloading](https://lh3.googleusercontent.com/BizZ2z3M9LXAUZ6v0CWgVdVe8RbpAZ4MJIjJG8zKTI2sa9MwSsfNOcjRmjk_S4VgiFJZ9_MAniNt_Gx5imlxsl1GpU40Hu10hMbe7Ay4WwGmDc4C8-0l45frxgQxU0NokU4aWnH222rhp3zCMG-usQwBddu-gEM11mKYJCjJfZV3VqJtuVu5Ai4IaZDZ1LLypQnr0eyuiz8YiQLWqm2vT7sjPT3fd5QBCnxezbsy2rz1hTK2nWxGNnxkOUZoyN1qkf2knvsb2J5B2bTFP2yWIO0Q8KgydsYonSPgkA6m-szENmW9NOxfr7YTMbG1PQgyAiiEidRc6qhgY0R-O5M8bpaveI4oKqOI22tTUGCwBKNPP20_BLpCqs9zzgKi9jycfd3lMxted_raTnoKPjo2BQlVFxH_QDARbgoa4fTMlPtviadvLCcJfPcaUqdQkcty55i7wkZ89YGvUHV0wFuOd4qqolxZUq-OaAOJiwydaQwERm2SqzXwkQ91Bc1dC-cUzKVts-yqrpHtBEh29YCilOS_haW2nITnkHrc_9lqT2mE3RdD7IPcVyXjwWqlwiContgrOEKiHL75lDYY0d2qBMYPjzid-Pw4_xswYg34Wg=w1362-h972-no)

은 마지막 두개 메소드가 이름, 변수타입, 변수순서가 같고 파라미터 이름만 다릅니다.

이렇게 정의하면 이미 정의된 메소드를 또 정의한다고 에러가 납니다.

<br>

오버로딩은 개발자를 편하게 하려고 만들어졌습니다.

대표적인 예가 System.out.println()메소드 입니다.

이 메소드는 괄호안에 byte, short, int, long, String 등 아무거나 들어가도 됩니다.

오버로딩을 활용하지 않았다면...

byte를 프린트할때는 System.out.printByteln();

short를 프린트할때는 System.out.printShortln();

String을 프린트할때는 System.out.printStringln();

...

등 매우 불편했을 것입니다.

<br>

생성자도 같은 이름을 사용하는데 받는 매개변수의 순서, 타입에 따라서

다른 생성자로 인식하기 때문에, 일종의 오버로딩이라고 볼 수 있습니다.

<br>
<hr>

## 메소드의 리턴

<br>

메소드가 종료되는 조건은 다음과 같습니다.

- 메소드의 모든 문장이 실행되었을 때
- return에 도달했을 때
- 예외를 발생(throw)했을 때

이 중 여기선 return에 대해서 다뤄보겠습니다.

~~~ java

public class returnEx {
	public String name;
	public int power;
	public int defense;
	
	public returnEx() {
		
	}
	
	public returnEx(String name, int power, int defense) {
		this.name = name;
		this.power = power;
		this.defense = defense;
	}
	
	public static void main(String[] ar) {
		returnEx ex = new returnEx();
		System.out.println(ex.intReturn()); // 0
		System.out.println(ex.intArraryReturn()); // [I@6073f712
		System.out.println(ex.stringReturn()); // returnEx@43556938
		System.out.println(ex.DTOReturn()); // returnEx@43556938
		System.out.println(ex.DTOReturn().name); // IronMan
		System.out.println(ex.DTOReturn().power); // 70
		System.out.println(ex.DTOReturn().defense); // 80
	}
	
	public int intReturn() {
		int num = 0;
		return num;
	}
	
	public int[] intArraryReturn() {
		int [] nums = new int[10];
		return nums;
	}
	
	public String stringReturn() {
		String str = "Teemo";
		return str;
	}
	
	public returnEx DTOReturn() {
		return new returnEx("IronMan", 70, 80);
	}
}
~~~

위의 코드에서는 메소드에서 리턴가능한 각종 타입의 예제가 나와있습니다.

여기서 빠진 void는 아무것도 돌려주지 않는다는 뜻입니다.

이외에 자바에서는 모든 타입을 한 개만 리턴 타입으로 넘겨줄 수 있습니다.

위에서는 int, int[], String, returnEx이라는 객체를 리턴하고 있습니다.

<br>

return은 메소드를 끝마치는 부분입니다.

그래서 메소드 내에서 return 다음에는 어떤 문장도 있어서는 안됩니다.

이러한 return의 특성을 활용하여, 어떤 조건일 때 메소드를 마칠 수도 있습니다.

~~~ java

public class returnEx2 {
	public static void main(String[] ar) {
		returnEx2 ex = new returnEx2();
		ex.returnEnd(false);
//		0
//		1
//		2
//		3
//		4
//		5

	}
	
	public void returnEnd(boolean flag) {
		for(int i=0; i<=10; i++) {
			System.out.println(i);
			if(i == 5 && flag == false) {
				return;
				//System.out.println("이렇게 return뒤에 뭘 쓰면 안됩니다.");
			}
		}
		
		System.out.println("This method run after return!");
	}
}
~~~

위의 코드에서는 i==5 일 때 return; 을 이용하여 메소드를 끝내고 있습니다.

<br>
<hr>

## Pass by value / Pass by reference

<br>

자바에서는 변수를 넘겨줄 때 두가지 종류가 존재합니다.

간단히 말하면 기본자료형을 넘길 때는 Pass by value

참조자료형을 넘길 때는 Pass by reference 입니다.

<br>

### Pass by value

~~~ java

public class passByValue {
	public static void main(String[] ar) {
		passByValue ex = new passByValue();
		ex.callPassByValue();

//		before passByValue
//		name: Teemo
//		power: 100
//		in passByValue
//		name: Jinx
//		power: 90
//		after passByValue
//		name: Teemo
//		power: 100

	}
	
	public void callPassByValue() {
		String name = "Teemo";
		int power = 100;
		
		System.out.println("before passByValue");
		System.out.println("name: " + name);
		System.out.println("power: " + power);
		
		passByValueMethod(name, power);
		System.out.println("after passByValue");
		System.out.println("name: " + name);
		System.out.println("power: " + power);
	}
	
	public void passByValueMethod(String name, int power) {
		name = "Jinx";
		power = 90;
		System.out.println("in passByValue");
		System.out.println("name: " + name);
		System.out.println("power: " + power);
		
	}
}
~~~

먼저 pass by value 입니다.

변수가 아닌 '값 자체'를 전달하는 방식입니다.

<br>

callPassByValue()에서 passByValueMethod()에 name과 power를 넘겼고,

passByValueMethod()에서는 그 값을 바꿨습니다.

그리고 다시 callPassByValue()에서 name과 power값을 출력하자

원래의 값인 Teemo와 100이 나오는 것을 볼 수 있습니다.

사실 callPassByValue()에서 passByValueMethod()에 name과 power를 넘긴게 아니라,

"Teemo"와 100 이라는 값 자체를 넘긴 것입니다.

<br>

이렇게 기본 자료형을 넘겨주면 원래 변수의 값은 변하지 않습니다.

사실 String은 참조 자료형이지만 값이 변하지 않았습니다.

name = "Jinx"는 name = new String("Jinx")와 같죠.

참조 자료형도 호출된 메소드(passByValueMethod())에서 다른 객체로 대체하여 처리되면

기존 값은 변하지 않습니다.

<br>

### Pass by reference

<br>

~~~ java

public class passByReference {
	public static void main(String[] ar) {
		passByReference ex = new passByReference();
		ex.callPassByReference();

//		known information: name
//		Before passByReference
//		teemo.name = teemo
//		in passByReference
//		champion.name = Jinx
//		After passByReference
//		teemo.name = Jinx
	}
	
	public void callPassByReference() {
		ChampionDTO teemo = new ChampionDTO("teemo");
		System.out.println("Before passByReference");
		System.out.println("teemo.name = " + teemo.name);
		passByReferenceMethod(teemo);
		System.out.println("After passByReference");
		System.out.println("teemo.name = " + teemo.name);
		
	}
	public void passByReferenceMethod(ChampionDTO champion) {
		champion.name = "Jinx";
		System.out.println("in passByReference");
		System.out.println("champion.name = " + champion.name);
	}
}
~~~

이번에는 아까 만들었던 ChampionDTO 클래스를 사용했습니다.

teemo라는 객체를 만든 후, passByReferenceMethod()메소드에 객체 자체를 넘겼습니다.

passByReferenceMethod()메소드에서는 객체의 name변수를 바꿨는데요

다시 callPassByReference()에서 teemo.name을 확인해보니 값이 바뀌어있습니다.

<br>

이처럼 메소드의 매개변수로 참조 자료형을 넘기면, 

메소드 안에서 객체의 상태를 변경한 결과에 영향을 받습니다.

<br>
<hr>

## 임의 개수의 매개 변수(Arbitrary Number of Arguments)

<br>

지금까지는 매개변수의 개수가 정확히 정해져 있는 경우만 알아보았습니다.

그렇다면 호출할 때마다 매개변수의 갯수가 달라질 때는 어떻게 하면 될까요

~~~ java

public class ArbitraryArguments {
	public static void main(String[] ar) {
		ArbitraryArguments ex = new ArbitraryArguments();
		ex.getArray(new int[] {1, 2, 3});
		ex.getSeveralNums(1, 2, 3, 4);
//		numbers is int[]
//		numbers is array!
//		sum = 10
		ex.getSeveralVars("teemo", 100, 20);
//		name = teemo
//		100
//		20
		
		// ... 방법이 쓰이는 예(print) 소개
		ChampionDTO ironMan = new ChampionDTO("IronMan", 80, 90);
		System.out.printf("Name: %s, Power: %d, Defense: %d", ironMan.name, ironMan.power, ironMan.defense);
//		known information: name, power, defense
//		Name: IronMan, Power: 80, Defense: 90
	}
	
	public void getArray(int[] numbers) {}
	
	public void getSeveralNums(int...numbers) {
		System.out.println("type of numbers: " + numbers.getClass().getName());
		if(numbers instanceof int[]) {
			System.out.println("numbers is int[]");
		}
		if(numbers.getClass().isArray()) {
			System.out.println("numbers is array!");
		}
		int sum = 0;
		for(int num:numbers) {
			sum += num;
		}
		System.out.println("sum = " + sum);
	}
	
	public void getSeveralVars(String name, int...numbers) {
		System.out.println("name = " + name);
		for(int num:numbers) {
			System.out.println(num);
		}
	}
}

~~~

위의 코드에서는 다양한 방법의 예가 나와있습니다.

<br>

getArray(int[] numbers)처럼 배열로 받아도 됩니다.

이 방법의 단점은 int를 넘겨줄 때, 배열로 만들어 넘겨줘야 한다는 것입니다.

<br>

하지만 getSeveralNums(int...numbers)처럼 정의하면, 

매개변수를 넘길 때, int자체로 3개든 4개든 자유롭게 넘길 수 있습니다.

받은 매개변수는 array로 저장됩니다.

instanceof와 isArray()는 해당 타입이 맞으면 true 아니면 false를 반환합니다.

<br>

이 ... 방법의 주의 사항은

- 하나의 메소드에서 한번만 사용 가능
- 여러 매개 변수가 있다면, 가장 마지막에 선언해야 함

<br>

이 ...이 쓰이는 대표적인 예는 printf()메소드 입니다.

위 코드에서 보면

System.out.printf("Name: %s, Power: %d, Defense: %d", ironMan.name, ironMan.power, ironMan.defense);

가 있습니다. %s는 문자열, %d는 숫자를 받겠다는 의미입니다.

즉, 몇개의 매개변수를 받을지 모르는 상황입니다.