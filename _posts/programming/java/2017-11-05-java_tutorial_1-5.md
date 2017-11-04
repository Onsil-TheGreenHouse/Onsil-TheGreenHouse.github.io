---
layout: post
title:  "[Java] 조건문(if, switch)"
date:   2017-11-05 02:00:00
description: 조건문(if, switch)
categories:
- programming
- java
banner_image: /programming/java/java-logo.jpg
comments: true
---

[Java] 조건문(if, switch)

---

## 1. if

<br>

~~~ java

public class IfElse {
	public static void main(String[] ar) {
		IfElse ex1 = new IfElse();	
		ex1.ifElseEx();
		// num is bigger than 5
		// ========================
		// num is not smaller than 5
		// ========================
		// it's real teemo!
		// ========================
		// grade: C
	}
	
	public void ifElseEx() {
		int num = 10;
		// if
		if (num > 5) {
			System.out.println("num is bigger than 5");
		}
		
		System.out.println("========================");
		
		// if else문
		if (num <= 5) {
			System.out.println("num is smaller than 5");
		}else {
			System.out.println("num is not smaller than 5");
		}
		
		System.out.println("========================");
		
		// 여러 조건들이 포함된 if문
		String championName = "teemo";
		int championPower = 100;
		boolean championCute = true;
		
		if((championName == "teemo" && championPower == 100) && championCute == true) {
			System.out.println("it's real teemo!");
		}else {
			System.out.println("it's not teemo.");
		}
		
		System.out.println("========================");
		
		// else if
		int score = 77;
		if(score > 90) {
			System.out.println("grade: A");
		}else if(score > 80) {
			System.out.println("grade: B");
		}else if(score > 70) {
			System.out.println("grade: C");
		}else if(score > 60) {
			System.out.println("grade: D");
		}else {
			System.out.println("grade: F");
		}
	}
}

~~~

if문은 단어뜻 그대로 만약 조건이 맞으면 중괄호({})안의 코드를 실행시키는 문법입니다.

처음에 num == 10이었는데 if(num >5)의 조건이 맞아서 안의 println()이 실행됬습니다.

<br>

else문도 단어 뜻 그대로 앞의 if문의 조건이 아니면 중괄호({})안의 코드를 실행시키는 문법입니다.

if(num <= 5)에서 조건이 false이기 때문에 if문은 실행이 안되고 뒤에 else문이 실행되는 걸 볼 수 있습니다.

<br>

if문에는 위의 코드와 같이 여러 조건이 붙을 수 있습니다.

진짜 teemo인지 확인하기 위해, 이름과 공격력 귀여움여부(?)까지 확인해서 모두 true이면 진짜 티모라고 외치고 있습니다.

![img_cute_teemp](https://lh3.googleusercontent.com/lrfUKNvQQ1c6fb9a1rOn-R6qaiD2CfRmD5IPJ7VUonltuJANhRp0L4hQ2btocwWTwwioQAO8ySIXE3nR8NruVacl2ttuD-HJ4KiEV--9qZr247ywFzcYjKOUyGBCwjMd_vjn8_5lFtubt4ZK15BURngNlIHFMsJ_yL2DU6614awDOfayiohOJ9fognfQ626_AlvtrcL16LzVPJ-m9g8bzZ9Rgm_md7N9mn42yjRaJVHXd0PWKNRAutUlEh-bB0m1bzlSK-r4hNq4cbrr3EBoZf5LC8bki96NX8PDSWfJN7G1WAKg4F2AcPBpl50i63hlcTBeyxHqPTDlGnW-hzQomXv8eSq6UZpXHt0jqETIsDYYDahn0USSM_CG-HbHSebkQ-_szsiZ7slFrO__hswL3sFDb2f1W4TpE3gDSE46Fi-gPTdxwv-QomeVHVN5APK3k0xjwuWh9CPXb5LJ27v67_tMwcWK9XtAK8TJdFyAeAPwUeEuKdpWSrPxUXSMR0Vj8SjzQCK9EyMLXX__4CLq47fIc0iC8TVL81DxespT1tDDlNqqQheVk3b8R6IE11ZH5C054KFVQ-5Odu6P6Nb0TwC9nsgi8jHV5GEoNTLJ1A=w500-h393-no)

<br>

마지막 예제에선 else if를 통해 성적을 매기고 있습니다.

90점 이상이면 A이지만 90점보다 낮으므로 else if(score > 80)에 갑니다.

근데 80점 이상도 아니므로 그 밑에 else if(score > 70)코드에 갑니다.

이젠 조건에 맞으므로 grade가 C로 책정이 되고 if문이 끝나게 됩니다.

<br>
<br>

## 2. switch

<br>

~~~ java

public class switchEx {
	public static void main(String[] ar) {
		switchEx ex = new switchEx();
		ex.simpleEx1(1);
//		num is 1
//		num is 2
//		num is 3
		ex.simpleEx1(2);
//		num is 2
//		num is 3
		ex.simpleEx1(10);
//		num < 1 or num > 4
		
		ex.simpleEx2(1);
//		num is 1
		ex.simpleEx2(2);
//		num is 2
		ex.simpleEx2(10);
//		num < 1 or num > 4
		
		ex.tellNumOfDay(2); // 2 has 28 or 29 days
		ex.tellNumOfDay(12); // 12 has 31 days
		ex.tellNumOfDay(13); // 13 is not a month
		
		ex.tellNumOfDay2(2); // 2 has 28 or 29 days
		ex.tellNumOfDay2(12); // 12 has 31 days
		ex.tellNumOfDay2(13); // 13 is not a month
	}
	
	public void simpleEx1(int num) {
		switch (num) {
			case 1:
				System.out.println("num is 1");
			case 2:
				System.out.println("num is 2");
			case 3:
				System.out.println("num is 3");
				break;
			case 4:
				System.out.println("num is 4");
				break;
			default:
				System.out.println("num < 1 or num > 4");
				break;
		}
	}
	
	public void simpleEx2(int num) {
		switch (num) {
			case 1:
				System.out.println("num is 1");
				break;
			case 2:
				System.out.println("num is 2");
				break;
			case 3:
				System.out.println("num is 3");
				break;
			case 4:
				System.out.println("num is 4");
				break;
			default:
				System.out.println("num < 1 or num > 4");
				break;
		}
	}
	
	public void tellNumOfDay(int month) {
		switch (month) {
			case 1:
				System.out.println(month + " has 31 days");
				break;
			case 2:
				System.out.println(month + " has 28 or 29 days");
				break;
			case 3:
				System.out.println(month + " has 31 days");
				break;
			case 4:
				System.out.println(month + " has 30 days");
				break;
			case 5:
				System.out.println(month + " has 31 days");
				break;
			case 6:
				System.out.println(month + " has 30 days");
				break;
			case 7:
				System.out.println(month + " has 31 days");
				break;
			case 8:
				System.out.println(month + " has 31 days");
				break;
			case 9:
				System.out.println(month + " has 30 days");
				break;
			case 10:
				System.out.println(month + " has 31 days");
				break;
			case 11:
				System.out.println(month + " has 30 days");
				break;
			case 12:
				System.out.println(month + " has 31 days");
				break;
			default:
				System.out.println(month + " is not a month");
				break;
				
		}
	}
	
	public void tellNumOfDay2(int month) {
		switch (month) {
			case 1:
			case 3:
			case 5:
			case 7:
			case 8:
			case 10:
			case 12:
				System.out.println(month + " has 31 days");
				break;
			case 4:
			case 6:
			case 9:
			case 11:
				System.out.println(month + " has 30 days");
				break;
			case 2:
				System.out.println(month + " has 28 or 29 days");
				break;
			default:
				System.out.println(month + " is not a month");
		}
	}
}

~~~

스위치는 입력받은 값을 비교하여 매칭되는 케이스에 구문을 실행시키는 문법입니다.

simpleEx2()메소드부터 보겠습니다.

ex.simpleEx2(2) 를 실행하면 switch의 num를 조사합니다.

입력받은 값이 2 이므로, case 1은 지나가고 case 2에서 멈춰 해당 코드를 실행합니다. 

<br>

ex.simpleEx2(10) 를 실행하면, 입력받은 값은 10인데 switch에는 1, 2, 3, 4만 처리합니다.

해당되는 값이 없을 땐 default가 실행이 됩니다.

<br>

여기서 각 케이스마다 break;를 볼 수 있습니다.

break;는 해당 switch문의 중괄호({})를 벗어나겠다는 의미입니다. 즉, 끝내겠다는 의미죠.

break를 안쓰면 어떻게 되는지는 simpleEx1()메소드에서 확인할 수 있습니다.

ex.simpleEx1(1)을 실행하면 case1에서부터 시작되어 case3까지 실행되는 걸 볼 수 있습니다.

즉, switch는 매칭되는 case부터 시작해서 break를 만날 때까지 밑의 코드를 모두 실행합니다.

<br>

왜 이렇게 만들었는지는 

각 달의 날짜 수를 말해주는 tellNumOfDay(), tellNumOfDay2()메소드를 비교해보면 됩니다.

tellNumOfDay()는 모든 달의 케이스에 대해 코드를 적어야하지만,

tellNumOfDay2()는 같은 코드를 가지는 case를 묶어서 쓸 수 있어 훨씬 코드가 간결해집니다.