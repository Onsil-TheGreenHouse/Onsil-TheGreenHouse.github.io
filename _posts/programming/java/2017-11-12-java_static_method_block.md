---
layout: post
title:  "[Java] static method, static block"
date:   2017-11-12 01:00:00
description: static method, static block
categories:
- programming
- java
banner_image: /programming/java/java-logo.jpg
comments: true
---

[Java] static method, static block

---

<br>

## static 메소드

<br>

지금까지 main()메소드에서 자신의 클래스나 다른 클래스에 있는 메소드를 호출하려면

반드시 객체를 생성했어야만 했습니다.

그런데 생각해보면 System.out.println()메소드는 System클래스 안에 있는 메소드인데

지금까지 객체한번 생성안하고 잘 사용해왔습니다.

그럴수 있었던 이유는 println()이 static 메소드 이었기 때문입니다.

예를 들어 다음과 같은 코드가 있다고 하면

~~~ java

public class staticEx {
	static String name;
	public static void main(String[] ar) {
		staticEx.staticMethod(); // This is a staticMethod
		staticEx.staticMethod2("Teemo"); // inputed champion: Teemo
	}
	
	public static void staticMethod() {
		System.out.println("This is a staticMethod");
	}
	
	public static void staticMethod2(String champion) {
		name = champion;
		System.out.println("inputed champion: " + name);
	}
}
~~~

staticMethod()와 staticMethod2()메소드는 둘다 static메소드이기 때문에

staticEx 클래스의 객체를 만들지 않고도 잘 사용한 것을 볼 수 있습니다.

<br>

static 메소드를 쓸 때 주의할 점은, 클래스 변수(static이 붙은 인스턴스 변수)만이

static 메소드에서 사용될 수 있는 변수라는 것입니다.

위의 코드에서 name변수를 정의할 때 static을 빼버리면 에러가 납니다.

<br>

하지만 static을 함부로 붙이면 안됩니다. 

클래스 변수가 되면 모든 객체에서 하나의 값을 바라보기 때문입니다.

~~~ java

public class staticEx2 {
	static String name;
	public staticEx2() {}
	public staticEx2(String name) {
		staticEx2.name = name;
	}
	
	public static void main(String[] ar) {
		staticEx2 ex = new staticEx2();
		ex.checkStaticVariable();
		
//		ex1.name: Teemo
//		staticEx2.name: Teemo
//		ex2.name: Jinx
//		staticEx2.name: Jinx
//		ex1.name: Jinx
	}
	
	public void checkStaticVariable() {
		staticEx2 ex1 = new staticEx2("Teemo");
		System.out.println("ex1.name: " + ex1.name);
		System.out.println("staticEx2.name: " + staticEx2.name);
		
		staticEx2 ex2 = new staticEx2("Jinx");
		System.out.println("ex2.name: " + ex2.name);
		System.out.println("staticEx2.name: " + staticEx2.name);
		System.out.println("ex1.name: " + ex1.name);
	}
}
~~~

위의 코드에서는 ex1.name을 "teemo"로 정의했지만, 

ex2.name을 "Jinx"로 정의하자 ex1.name도 "Jinx"가 되는 걸 볼 수 있습니다.

즉, 객체명.name 으로 접근하는 것은 크게 의미가 없습니다.

올바르게 클래스변수에 접근하는 방법은 클래스명.name인 staticEx2.name이 되겠습니다.

![img_static_right_way](https://lh3.googleusercontent.com/UNS_cqfFcHRy2K9cii_5EnxUOm2kaZ5VM5-n2AAQi1cHd8Rn4YrpcYQ6JKZzgp9L_thqkZjOWWAmVlEVrWDFPmI0qAxHGYiC8P1axQgutxiimIXQQwX8kDKLhL_p-GOI2DxKzqVAZrLl083Zp-OlEnVCUAjhQtqjjAef3lN3n5Wx2576jXY4nfyPvm2QmBGTEga7eZbUo-QkIAaFT_tmjzeF5Nl3CCbMysQAJAaE1aJYFDOfZKUr_KSiTikQezDkH92p3xpCfLxhkTWMZUazylBRIYlUmNJxpx-0Ftfnfa94UU9lJYDuvwG0ulpqVj_WiPKIT6y9ZkFlsh0zif8rb3VFD3iBGSAnFraIZNB9fM3bFQyFx5QWsoQaz5tl6PD0CrsqCGIMtnUTcFkB3am-ZxC5lLWxLF0bRkwOWX0PZoNIUZs8Qn9GmL22fV_kY43LnF2p7ZYO3-3Kb-AIcx68pus2oqXL1yAAZ4VttEIYZocUDFgfih3tLxU5QjVfDKufc2zEAYiyJocREEgwh5ZDgd_UU1GgTZP3ozd1e3bfzExXRccpmzocs4LYEEItOeqrEyjh7raO2Eo3q6LH1R9Ud0i24xDp7-H2xBR9yyglEQ=w1318-h390-no)

**The static field staticEx2.name should be accessed in a static way**
<br>
<hr>

## static 블록

<br>

static 블록은 어떤 클래스 객체가 생성될 때 딱 한번만 불러지는 코드입니다.

~~~ java
class staticBlock{
	static String name = "teemo";
	
	public staticBlock(){
		System.out.println("This is StaticBlock Constructor");
	}
	
	static {
		System.out.println("First static block");
		name = "Jinx";
	}
	
	static {
		System.out.println("Second static block");
		name = "Rengar";
	}
	
	public static String getData() {
		return name;
	}
}

public class staticEx3 {
	public static void main(String[] ar) {
		staticEx3 ex = new staticEx3();
		ex.makeStaticBlockObject();
//		Start creating first StaticBlock Object
//		First static block
//		Second static block
//		This is StaticBlock Constructor
//		Complete createing first StaticBlock Object
//		===========================================
//		Start creating second StaticBlock Object
//		This is StaticBlock Constructor
//		Complete createing second StaticBlock Object
//		===========================================
//		ex1.name: Rengar
//		ex2.name: Rengar
//		ex1.name: Jax
//		ex2.name: Jax
//		staticBlock.name: Jax
	}
	
	public void makeStaticBlockObject() {
		System.out.println("Start creating first StaticBlock Object");
		staticBlock ex1 = new staticBlock();
		System.out.println("Complete createing first StaticBlock Object");
		System.out.println("===========================================");
		System.out.println("Start creating second StaticBlock Object");
		staticBlock ex2 = new staticBlock();
		System.out.println("Complete createing second StaticBlock Object");
		
		System.out.println("===========================================");
		System.out.println("ex1.name: " + ex1.name);
		System.out.println("ex2.name: " + ex2.name);
		staticBlock.name = "Jax";
		System.out.println("ex1.name: " + ex1.name);
		System.out.println("ex2.name: " + ex2.name);
		System.out.println("staticBlock.name: " + staticBlock.getData());
		
	}
}
~~~

객체는 여러개를 생성하지만, 한번만 호출되어야하는 코드가 있다면

static 블록을 사용하면 됩니다.

<br>

static블록은 첫 객체가 생성될 때, 생성자보다 전에 실행됩니다.

그리고 그 이후에는 호출할 수 없습니다.

위의 코드를 보면 ex1 객체를 생성할 때 두개의 static블록이 실행되었고,

ex2 객체를 생설할 때는 실행되지 않았습니다.

<br>

static블록은 클래스 안에, 메소드 밖에 선언되어야 합니다.

그리고 static 블록 안에서는 static한 것들만 호출할 수 있습니다.

위 코드에서도 static 블록안에 사용된 name변수는 static입니다.

name이 static이기 때문에 staticBLock.name = "jax" 로 하자

ex1, ex2의 name이 모두 "Jax"로 바뀐 걸 볼 수 있습니다.
