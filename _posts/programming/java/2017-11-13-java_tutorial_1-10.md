---
layout: post
title:  "[Java] 상속(extends, super)"
date:   2017-11-12 18:00:00
description: 상속(extends, super)
categories:
- programming
- java
banner_image: /programming/java/java-logo.jpg
comments: true
---

[Java] 상속(extends, super)

---

## 상속(extends)

<br>

"자식 클래스가 부모 클래스를 상속받는다" 라고 표현합니다.

이걸 클래스 다이어그램으로 나타내면 "Child -> Parent" 라고 표현합니다.

이렇게 부모 클래스를 상속받은 자식 클래스는

부모 클래스에 선언되어 있는 public 및 protected로 선언되어 있는

모든 변수와 메소드를 자기꺼인 마냥 사용할 수 있습니다.

<br>

예를 들어보겠습니다.

~~~ java
package c.inheritance;

public class Parent {
	public Parent() {
		System.out.println("Default Constructor of Parent class");
	}
	
	public void printName() {
		System.out.println("printName() of Parent class");
	}
}
~~~

이건 부모 클래스입니다.

~~~ java
package c.inheritance;

public class Child extends Parent{
	public Child() {
		System.out.println("Default Constructor of Child class");
	}
	
	public void printPower() {
		System.out.println("power: " + 100);
	}
}
~~~

이건 자식 클래스 입니다.

extends Parent를 통해 Parent 클래스를 상속받고 있습니다.

그럼 자식 클래스의 객체를 만들어 보겠습니다.

~~~ java
package c.inheritance;

public class InheritancePrint {
	public static void main(String[] ar) {
		Child childEx = new Child();
		childEx.printName();
		childEx.printPower();
		
//		Default Constructor of Parent class
//		Child Constructor
//		printName() of Parent class
//		power: 100
	}
}
~~~

childEx 라는 객체를 만들어 메소드를 실행시켰습니다.

Child 클래스의 객체를 만들 때, 부모 클래스인 Parent 클래스의 기본생성자도 실행됩니다.

Child 클래스에 printName()메소드는 정의되어 있지 않지만, 

Parent 클래스를 상속받음으로써, Parent 클래스의 printName()메소드가 실행됩니다.

<br>

상속받은 메소드 외에 새로 Child클래스에서 printPower()와 같이 메소드를 추가할 수 있습니다.

이렇게 하나의 클래스를 잘 만들어 놓으면, 그 클래스를 상속받아 추가적인 기능을 넣을 수 있습니다.

상속이라는 개념이 없었다면 Parent에 정의했던 printName()을 또 써야했을 것입니다.

<br>
<hr>
<br>

## super

<br>

이번에는 부모 클래스의 생성자에 넘겨줄 매개 변수가 있는 경우를 살펴보겠습니다.

먼저 부모 클래스를 정의합니다.

~~~ java
package c.inheritance;

public class ParentArg {
	public ParentArg(String name) {
		System.out.println("Constructor(" + name + ") of ParentArg class");
	}
	
	public ParentArg(InheritancePrint obj) {
		System.out.println("Constructor(InheritancePrint) of ParentArg class");
	}
	
	public void printName() {
		System.out.println("printName() of ParentArg class");
	}
}
~~~

그리고 자식 클래스를 정의합니다.

~~~ java
package c.inheritance;

public class ChildArg extends ParentArg{
	public ChildArg() {
		super("teemo");
		System.out.println("Default Constructor of ChildArg class");
	}
}
~~~

전에 예제에서 보면 자식 클래스의 객체가 생성될 때,

자동으로 부모 클래스의 생성자가 실행되는 것을 살펴보았습니다.

<br>

이번 예제처럼 부모 클래스에 생성자가 매개변수를 받는 다면

이때는 super()를 써서 부모 클래스의 생성자에 매개변수를 넘겨주면 됩니다.

"teemo"는 String이므로 그에 맞는 생성자가 실행됩니다.

코드로 확인해보면

~~~ java
package c.inheritance;

public class InheritanceArgPrint {
	public static void main(String[] ar) {
		ChildArg ex = new ChildArg();
		ex.printName();
//		Constructor(teemo) of ParentArg class
//		Default Constructor of ChildArg class
//		printName() of ParentArg class
	}
}
~~~

자식 클래스의 생성자에 super()를 안써주면, 

자바는 부모 클래스의 기본 생성자를 찾습니다.

이때 부모 클래스에 매개변수를 받는 생성자가 정의되어 있는데

기본 생성자가 정의되어 있지 않으면 오류가 나게 됩니다.

<br>
<hr>
<br>

## Overriding

<br>

상속을 사용하다 보면 이런 경우가 생길 수 있습니다.

부모 클래스의 100개의 메소드 중 99개는 마음에 드는데 1개만 마음에 안든다고 가정해봅시다.

그 마음에 안드는 1개 때문에 새로운 클래스를 생성한다는 건 조금 비효율적으로 보입니다.

그래서 부모 클래스에서 정의된 메소드를 자식 클래스에서 수정하는 걸 오버로딩이라 부릅니다.

<br>

예를 들어보겠습니다. 먼저 부모 클래스를 정의합니다.

~~~ java
package c.inheritance;

public class ParentOverriding {
	public ParentOverriding() {
		System.out.println("Constructor of ParentOverriding Class");
	}
	
	public void printName() {
		System.out.println("printName() of ParentOverriding");
	}
	
	protected void printPower() {
		System.out.println("printPower() of ParentOverriding");
	}
}
~~~

그리고 자식 클래스를 정의합니다.

~~~ java
package c.inheritance;

public class ChildOverriding extends ParentOverriding{
	public ChildOverriding() {
		System.out.println("Constructor of ChildOverriding class");
	}
	
	public void printName() {
		System.out.println("printName() of ChildOverriding class");
	}
	
	public void printPower() {
		System.out.println("printPower() of ChildOverriding class");
	}
}
~~~

자식 클래스에서 부모 클래스에서 이미 정의한 printName()과 printPower() 메소드를 재정의하고 있습니다.

자식 클래스의 객체를 만들어 이 메소드들을 실행해보면

~~~ java
package c.inheritance;

public class InheritanceOverriding {
	public static void main(String[] ar) {
		ChildOverriding ex = new ChildOverriding();
		ex.printName();
//		Constructor of ParentOverriding Class
//		Constructor of ChildOverriding class
//		printName() of ChildOverriding class
		
		ex.printPower();
//		printPower() of ChildOverriding class
	}
}
~~~

출력결과가 자식 클래스에서 재정의 한대로 나오는 걸 볼 수 있습니다.

<br>

오버로딩을 할 때 첫번째 주의사항으로는 "동일한 시그니쳐(signature)를 가지도록 재정의해야한다"입니다.

동일한 시그니쳐의 의미는 메소드 이름, 매개변수 타입/개수/순서, 리턴 타입 등이 동일하다는 뜻입니다.

중괄호 안의 내용만 바뀌어야 합니다.

<br>

두번째 주의사항은 "접근 제어자는 바뀌어도 되지만, 권한이 더 확대되거나 동일해야한다"입니다.

참고로 접근 제어자의 권한 순서는

public > protected > package-private > private

입니다.

<br>

위의 코드를 예를 들어 이야기하자면, 

부모 클래스의 printPower()는 protected입니다.

그리고 자식 클래스의 printPower()는 public입니다.

만약에 자식 클래스의 printPower()의 접근제어자가 package-private이거나 protected이면 에러가 납니다.

<br>
<hr>
<br>

## 참조 자료형의 형 변환(Casting)

<br>

예를 들어 다음과 같은 부모 클래스와

~~~ java
package c.inheritance;

public class ParentCasting {
	public ParentCasting() {
		System.out.println("Default Constructor of ParentCasting");
	}
	
	public ParentCasting(String name) {
		System.out.println("ParentCastring(String name) of ParentCasting");
	}
	
	public void printName() {
		System.out.println("printName() of ParentCasting");
	}
}
~~~

다음과 같은 자식 클래스가 있다고 가정해봅시다.

~~~ java
package c.inheritance;

public class ChildCasting extends ParentCasting{
	public ChildCasting() {
		System.out.println("Default Constructor of ChildCasting");
	}
	
	public ChildCasting(String name) {
		System.out.println("ChildCasting(String name) of ChildCastring");
	}
	
	public void printName() {
		System.out.println("printName() of ChildCasting");
	}
}
~~~

지금까지는 객체를 생성할 때,

~~~ java
ParentCasting parent = new ParentCasting();
ChildCasting child = new ChildCasting();
~~~

이렇게 "클래스명 객체명 = new 해당클래스의생성자"로 생성했습니다.

하지만 다음 코드처럼도 가능합니다.

~~~ java
package c.inheritance;

public class InheritanceCasting {
	public static void main(String[] ar) {
		InheritanceCasting ex = new InheritanceCasting();
//		ex.objectCast();
		ex.objectCast2();
	}
	
	public void objectCast() {
		ParentCasting parent = new ParentCasting();
		ChildCasting child = new ChildCasting();
		
		ParentCasting parent2 = child;
//		ChildCasting child2 = parent; <- Casting Error
		ChildCasting child2 = (ChildCasting)parent; // <- java 실행시 ERROR!
	}
	
	public void objectCast2() {
		ParentCasting parent = new ParentCasting();
		ChildCasting child = new ChildCasting();
		
		ParentCasting parent2 = child;
//		ChildCasting child2 = parent;
		ChildCasting child2 = (ChildCasting)parent2;
	}
}
~~~

objectCast()를 먼저 보겠습니다.

ParentCasting parent2 = child 에서 볼 수 있듯이, 상속관계가 성립되면

자식클래스의 객체가 부모 클래스의 객체로 정의될 수 있습니다.

<br>

하지만 ChildCasting child2 = parent 의 경우엔 컴파일 시 에러가 납니다.

예를 들어 ChildCasting에 ParentCasting에 없는 A()라는 메소드가 있다고 가정해봅시다.

child2는 ChildCasting의 객체이므로 child2.A() 이렇게 메소드를 사용할 수 있어야합니다.

하지만 parent의 경우엔 ParentCasting의 객체이기 때문에 A()라는 메소드가 없죠.

그래서 자식 클래스 객체에 부모 클래스 객체를 집어넣기는 좀 어색합니다.

하지만 바로 밑에 코드처럼 

childCasting child2 = (ChildCasting)parent;

이렇게 캐스팅을 하면 컴파일시는 에러를 피할 수 있습니다.

하지만 이 역시 java 실행시 에러가 납니다.

<br>

objectCast2()를 보면 ChildCasting의 객체인 child를 

ParentCasting의 객체인 parent2에 넣었다가,

다시 ChildCasting의 객체인 child2에 대입하고 있습니다.

ParentCasting parent2 = child; 를 살펴보면

겉으로 보기에는 parent2는 ParentCasting의 객체같지만,

실제로는 ChildCasting의 객체인 child가 대입됬으므로 ChildCasting의 객체입니다.

즉, 이런식으로 형 변환을 해줘도 이상이 없습니다.

<br>

이렇게 복잡하게 캐스팅을 하는 이유는, 여러 객체를 한번에 보낼 때 편리하기 위함입니다.

다음 예제를 보겠습니다.

~~~ java
package c.inheritance;

public class InheritanceCasting2 {
	public static void main(String[] ar) {
		InheritanceCasting2 ex = new InheritanceCasting2();
		ex.objectCastArray();
	}
	
	public void objectCastArray() {
		ParentCasting[] parentArray = new ParentCasting[3];
		parentArray[0] = new ChildCasting();
		parentArray[1] = new ParentCasting();
		parentArray[2] = new ChildCasting();
		
		objectTypeCheck(parentArray);
//		Default Constructor of ParentCasting
//		Default Constructor of ChildCasting
//		Default Constructor of ParentCasting
//		Default Constructor of ParentCasting
//		Default Constructor of ChildCasting
//		ChildCasting
//		printName() of ChildCasting
//		ParentCasting
//		ChildCasting
//		printName() of ChildCasting
		System.out.println("==================================");
		objectTypeCheck2(parentArray);
//		ParentCasting
//		ParentCasting
//		ParentCasting
	}
	
	public void objectTypeCheck(ParentCasting[] parentArray) {
		for(ParentCasting parentCastingObj:parentArray) {
			if(parentCastingObj instanceof ChildCasting) {
				System.out.println("ChildCasting");
				ChildCasting tempChildObj = (ChildCasting)parentCastingObj;
				tempChildObj.printName();
			}else if(parentCastingObj instanceof ParentCasting) {
				System.out.println("ParentCasting");
			}
		}
	}
	
	public void objectTypeCheck2(ParentCasting[] parentArray) {
		for(ParentCasting obj:parentArray) {
			if(obj instanceof ParentCasting) {
				System.out.println("ParentCasting");
			}else {
				System.out.println("Not ParentCasting");
			}
		}
	}
}

~~~

objectCastArray()를 보면 ParentCasting 객체를 배열로 만들어

0, 2번째에는 ChildCasting()을, 1번째에는 ParentCasting()을 넣고 있습니다.

일반적으로 여러개의 값을 처리하거나, 매개변수로 값을 전달할 때는 보통 부모 클래스 타입으로 보냅니다.

이렇게 넣으면, objectTypeCheck()와 objectTypeCheck2()에 매개변수로 보낼 때

매우 간편해집니다. 이렇게 하지 않으면 여러 값을 한번에 보낼 때,

각 타입별로 구분해서 메소드를 만들어야 합니다.

<br>

참고로 instanceof는 타입을 체크하여 true, false를 반환합니다.

objectTypeCheck()에서 parentArray의 0, 2번째는 if문이 참이 되는 반면,

1번째 객체는 else if문이 참이 됩니다.

<br>

그리고 objectTypeCheck2()에서 확인할 수 있듯이, ChildCasting객체는

ParentCasting 타입이기도 합니다. 즉 0, 1, 2 모두 if문에서 참이 됩니다.

즉, 타입을 점검할 때는 자식 클래스로 점검을 해야합니다.

<br>
<hr>
<br>

## Polymorphism

~~~ java
package c.inheritance;

public class InheritancePoly {
	public static void main(String[] ar) {
		InheritancePoly ex = new InheritancePoly();
		ex.callPrintName();
	}
	
	public void callPrintName() {
		Parent parent1 = new Parent();
//		Default Constructor of Parent class
		Parent parent2 = new Child();
//		Default Constructor of Parent class
//		Default Constructor of Child class
		Parent parent3 = new ChildOther();
//		Default Constructor of Parent class
//		Default Constructor of ChildOther class
		
		parent1.printName();
//		printName() of Parent class
		parent2.printName();
//		printName() of Child class
		parent3.printName();
//		printName() of ChildOther
	}
}
~~~

아까 캐스팅에서 봤던 것처럼, 부모 클래스 객체에 자식 클래스 생성자를 대입한게 두개 있습니다.

그리고 printName()을 부르면, 각 클래스에서 정의한 printName()메소드가 실행됩니다.

<br>

각 객체의 타입은 모두 Parent 타입으로 선언되어 있지만, printName()의 메소드 결과는 상이합니다.

이와 같이 "형 변환을 하더라도, 실제 호출되는 것은 원래 객체에 있는 메소드이다"라는 것이

Polymorphism(다향성)입니다.

