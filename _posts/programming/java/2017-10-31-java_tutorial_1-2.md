---
layout: post
title:  "[Java] 클래스, 메소드, 생성자의 이해"
date:   2017-10-31 13:50:00
description: 클래스, 메소드, 생성자의 이해
categories:
- programming
- java
banner_image: /programming/java/java-logo.jpg
comments: true
---

[Java] 클래스, 메소드, 생성자의 이해

---

## 예제1

> Champion.java
{% highlight java %}
// 클래스 정의
class Champion {
    // 속성(변수) 정의
	String name;
	int power;
	int defense;

    // 생성자 정의
	public Champion(){

	}

    // 메소드 정의
	public void powerUp(){
		power += 5;
	}

	public void powerDown(){
		power -= 5;
	}

	public int getCurrentPower(){
		return power;
	}

}

{% endhighlight %}

예제를 보며 설명하겠습니다.

현재 Champion이라는 클래스를 정의한 상태입니다.

어떤 챔피언에는 여러 속성(변수)이 있겠지만

저는 이름(name), 공격력(power), 방어력(defense)를 정의했습니다.

<br>

생성자는 초기 클래스의 변수를 정해주는 역할을 합니다.

여기서는 생성자 내부가 텅텅 비어있는데, 이렇게 정의해줄게 없는 생성자를 기본생성자라고 합니다.

기본생성자는 정의해주지 않아도 javac로 컴파일할 때, 자동 생성이 되서 안적어줘도 됩니다.

예제3에서 매개변수를 받는 생성자를 다뤄보겠습니다.

<br>

챔피언은 좋은 무기를 들면 공격력이 상승할 것입니다.

여기서는 공격력을 올리는 powerUp()메소드와, 공격력을 내리는 powerDown(), 공격력 값을 리턴하는 getCurrentPower() 메소드를 정의했습니다.

여기서 살펴볼것은 public다음에 void, int 와 같이 리턴타입이 다르다는 것입니다.

void는 돌려주는 값이 없이 그냥 power의 값만 변경합니다.

int는 말그대로 int값을 return 해준다는 의미입니다.

<br>

그럼 이렇게 만든 Champion 클래스를 사용해보겠습니다.

Champion.java와 같은 폴더에 다음 자바 파일을 생성합니다.

>ChampionManager.java
{% highlight java %}
public class ChampionManager {
	public static void main(String[] args){
	    // Champion클래스의 객체(teemo) 생성
		Champion teemo = new Champion();
		System.out.println("teemo current power: " + teemo.getCurrentPower());

		teemo.powerUp();
		System.out.println("teemo current power: " + teemo.getCurrentPower());

		teemo.powerDown();
		System.out.println("teemo current power: " + teemo.getCurrentPower());
	}
}
{% endhighlight %}

컴파일은 ChampionManager.java만 하면됩니다.

ChampionManager 클래스에서 Champion 클래스를 참조하기 때문에,

ChampionManager 클래스를 컴파일 할 때 Champion 클래스도 같이 컴파일합니다.

물론 실행도 ChampionManager만 하면됩니다.

<br>

main()메소드는 자바 파일을 컴파일 하고 실행할 때, 실제로 실행되는 메소드입니다.

앞서만든 Champion클래스를 사용하기 위해서는 객체라는걸 만들어야합니다.

예를 들어, 이 세상에 챔피언은 하나뿐만이 아닙니다.

(슈퍼맨, 배트맨, 아이언맨, 티모, 티모, 티모...)

![champions](http://drive.google.com/uc?export=view&id=1WRf6ujfSGKZbaqz4cVCiUDJcsZ1Fa8Vi)

이 때, 슈퍼맨, 배트맨, 아이언맨, 티모의 이름, 공격력, 방어력 값을 저장한다고 한다면

### 1. 클래스를 안쓰는 경우
{% highlight java %}
String supermanName = "SuperMan";
int supermanPower = 80;
int supermanDefense = 70;

String batmanName = "Batman";
int batmanPower = 45;
int batmanDefense = 40;

String ironmanName = "IronMan";
int ironmanPower = 70;
int ironmanDefense = 60;

String TeemoName = "Teemo";
int teemoPower = 100;
int teemoDefense = 20;
{% endhighlight %}

뭔가 이름, 공격력, 방어력은 공통적으로 가지는 값인데

이렇게 챔피언에 따라 변수를 따로 지정해준다는게 효율적으로 보이진 않습니다.

<br>

### 2. 앞서 만든 Champion 클래스를 쓰는 경우
{% highlight java %}
// 챔피언별 객체 생성
Champion superman = new Champion();
Champion batman = new Champion();
Champion ironman = new Champion();
Champion teemo = new Champion();

superman.name = "SuperMan";
superman.power = 80;
superman.defense = 70;

batman.name = "BatMan";
batman.power = 45;
batman.defense = 40;

ironman.name = "IronMan";
ironman.power = 70;
ironman.defense = 60;

teemo.name = "Teemo";
teemo.power = 100;
teemo.defense = 20;
{% endhighlight %}

클래스를 쓰면, 챔피언마다 객체만 생성해주면

클래스 안에서 정의했던 변수(name, power, defense), 메소드 등을 계속 사용할 수 있습니다.

<br>

다시 ChampionManager로 돌아가면 객체명.변수명, 객체명.메소드명() 으로

클래스안에서 정의한 변수와 메소드를 사용할 수 있습니다.

<br>

## 예제2

<br>

>Calculator.java
{% highlight java %}
class Calculator {
	public static void main(String[] args){
		System.out.println("Calculator start");

		Calculator calc = new Calculator();

		int a = 10;
		int b = 15;

		System.out.println(a + " + " + b + " = " + calc.add(a, b));
		System.out.println(a + " - " + b + " = " + calc.subtract(a, b));
		System.out.println(a + " * " + b + " = " + calc.multiply(a, b));
		System.out.println(a + " / " + b + " = " + calc.divide(a, b));
	}

    // 메소드 정의
	public int add(int x, int y){
		return x + y;
	}

	public int subtract(int x, int y){
		return x - y;
	}

	public int multiply(int x, int y){
		return x * y;
	}

	public int divide(int x, int y){
		return x / y;
	}

}
{% endhighlight %}

이번에는 계산기 클래스를 만들어 보았습니다.

이번에는 기본생성자는 적지 않았습니다.

<br>

이번에 메소드들은 예제1과 달리 모두 매개변수를 받고 있습니다.

그래서 main()메소드에서 calc라는 객체의 메소드를 사용할 떄, 괄호안에 int값을 넣는 걸 볼 수 있습니다.

<br>

## 예제3 (매개변수가 있는 생성자인 경우)

<br>

>Calculator2.java
{% highlight java %}
class Calculator2 {
	int int1, int2;

    // 매개변수를 받는 생성자 생성
	public Calculator2(int num1, int num2){
		int1 = num1;
		int2 = num2;
	}

	public static void main(String[] args){
		System.out.println("Calculator start");

		int a = 10;
		int b = 15;

        // 객체정의
		Calculator2 calc = new Calculator2(a, b);

		System.out.println(a + " + " + b + " = " + calc.add());
		System.out.println(a + " - " + b + " = " + calc.subtract());
		System.out.println(a + " * " + b + " = " + calc.multiply());
		System.out.println(a + " / " + b + " = " + calc.divide());
	}

	public int add(){
		return int1 + int2;
	}

	public int subtract(){
		return int1 - int2;
	}

	public int multiply(){
		return int1 * int2;
	}

	public int divide(){
		return int1 / int2;
	}

}
{% endhighlight %}

예제1과 예제2에서는 생성자에서 아무것도 안하는 기본생성자였습니다.

기본생성자는 굳이 안적어줘도 되기에 예제2에서는 아예 적지 않았습니다.

<br>

이번에는 num1, num2라는 두개의 int값을 받아,

클래스 내에 정의된 int1, int2에 대입하는 생성자를 정의했습니다.

그래서 객체 정의를 할 때도, 전과 다르게 int값 두개를 넣어주는 걸 볼 수 있습니다.

<br>

만약 저렇게 매개변수를 받는 생성자가 있는데, 객체를 생성할 때 알맞은 매개변수를 안넣어주면

컴파일할 때 매개변수 넣으라고 오류가 뜹니다.

![no_parameter_in_object](http://drive.google.com/uc?export=view&id=1s_EaMmgODJTOV9CKNnRxEL0bFkMPwHUG)