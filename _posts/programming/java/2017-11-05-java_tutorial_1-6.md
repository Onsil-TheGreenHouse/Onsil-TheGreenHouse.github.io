---
layout: post
title:  "[Java] 반복문(while, do while, for, label, break, continue)"
date:   2017-11-05 03:00:00
description: 반복문(while, do while, for, label, break, continue)
categories:
- programming
- java
banner_image: /programming/java/java-logo.jpg
comments: true
---

[Java] 반복문(while, do while, for, label, break, continue)

---

## 1. while

~~~ java

public class whileEx {
	public static void main(String[] ar) {
		whileEx ex = new whileEx();
		
		int monthIndex = 0;
		while (monthIndex < 13) {
			monthIndex++;
			ex.tellNumOfDay(monthIndex);
		}
//		1 has 31 days
//		2 has 28 or 29 days
//		3 has 31 days
//		4 has 30 days
//		5 has 31 days
//		6 has 30 days
//		7 has 31 days
//		8 has 31 days
//		9 has 30 days
//		10 has 31 days
//		11 has 30 days
//		12 has 31 days
//		13 is not a month
		
		System.out.println("================================");
		
		monthIndex = 0;
		while (monthIndex < 13) {
			monthIndex++;
			if(monthIndex == 6) {
				break;
			}
			ex.tellNumOfDay(monthIndex);
		}
//		1 has 31 days
//		2 has 28 or 29 days
//		3 has 31 days
//		4 has 30 days
//		5 has 31 days
		
		
		System.out.println("================================");
		
		monthIndex = 0;
		while (monthIndex < 13) {
			monthIndex++;
			if(monthIndex == 6) {
				continue;
			}
			ex.tellNumOfDay(monthIndex);
		}
//		1 has 31 days
//		2 has 28 or 29 days
//		3 has 31 days
//		4 has 30 days
//		5 has 31 days
//		7 has 31 days
//		8 has 31 days
//		9 has 30 days
//		10 has 31 days
//		11 has 30 days
//		12 has 31 days
//		13 is not a month
	}
	
	public void tellNumOfDay(int month) {
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

while는 '~~하는 동안에'라는 의미입니다.

Don't touch me while I'm playing teemo(내가 티모 플레이 하는동안 건들지마라)

<br>

자바에서 while는 소괄호 안의 조건이 true이면 중괄호안의 코드를 계속 실행시키는 문법입니다.

첫번째 while문을 보면, monthIndex가 13보다 작으면 안의 코드를 계속 실행시킵니다.

monthIndex++을 통해 계속 증가하다가 monthIndex == 12일때 

중괄호안에서 monthIndex++을 통해 13이 되고 println()이 실행됩니다.

그 후, 다시 monthIndex < 13의 검사를 받는데 이번엔 false가 되어 while문이 끝나게 됩니다.

<br>

두번째 while문은 monthIndex == 6일때 break;를 추가했습니다.

break는 if문의 중괄호({})를 제외한 중괄호를 벗어나는 역할을 합니다.

여기서는 while문의 중괄호를 벗어나므로, while문이 끝나게 됩니다.

그래서 5월달까지만 날짜가 출력이 됩니다.

<br>

세번째 while문은 monthIndex == 6일때 continue;를 추가했습니다.

continue는 if문의 중괄호({})를 제외한 중괄호로 이동하는 역할을 합니다.

여기서는 while문의 중괄호로 이동, 즉 다시 monthIndex < 13의 심판대에 오르게됩니다.

그래서 monthIndex == 6일때만 밑의 tellNumOfDay()메소드가 실행이 안되고,

나머지 달은 모두 tellNumOfDay()메소드가 실행된 걸 볼 수 있습니다.

<br>
<hr>

## 2. do while

~~~ java

public class doWhileEx {
	public static void main(String[] ar) {
		doWhileEx ex = new doWhileEx();
		ex.doWhile1();
		// num: 0 num: 1 num: 2 num: 3 num: 4 num: 5 num: 6 num: 7 num: 8 num: 9 num: 10 num: 11 num: 12 
		
		System.out.println();
		
		ex.doWhile2();
		// num: 0 num: 1 num: 2 num: 3 num: 4 num: 5 num: 6 num: 7 num: 8 num: 9 num: 10 num: 11 num: 12 
	}
	
	public void doWhile1() {
		int num = 0;
		do {
			System.out.print("num: " + num++ + " ");
		}while(num < 13);
	}
	
	public void doWhile2() {
		int num = 0;
		do {
			System.out.print("num: " + num++ + " ");
		}while(num > 0 && num < 13);
	}
}
~~~

do while은 while와 매우 흡사합니다. 차이점이라곤 일단 한번은 무조건 실행된다는 점입니다.

예를 들어 doWhile1()메소드를 살펴보겠습니다.

do {} while(검사) 에서 검사 == true이면 계속 안의 코드가 실행되는 것입니다.

안에서 print문과 그 안에 num++이 계속 실행되면서 num == 13이 되었을 때 끝나는 걸 확인할 수 있습니다.

<br>

doWhile2()메소드의 do while문을 보면 조건문에 num > 0 도 있습니다.

그럼 int num = 0이므로 false입니다. 그래서 while문이라면 실행이 안됬겠지만,

do while문은 먼저 실행 시키고 나서 조건을 따지는 순서이므로 'num: 0'도 출력됩니다.

<br>
<hr>

## 3. for

~~~ java

public class forEx {
	public static void main(String[] ar) {
		forEx ex = new forEx();
		
		ex.sumFromZero(10);
		// sum from 0 to 10 is 55
	}
	
	public void sumFromZero(int num) {
		int sum = 0;
		for(int loop=1; loop<=num; loop++) {
			sum += loop;
		}
		System.out.println("sum from 0 to " + num + " is " + sum);
	}
}
~~~

sumFromZero()메소드에서 for문을 사용하고 있습니다.

먼저 int loop=1 로 loop를 초기화하고, 

loop<=num이 true이면 안의 코드를 실행시킵니다.

단, 매번 코드가 실행될 때마다 loop++을 통해 loop를 1씩 증가시켜주고 있습니다.

<br>

sumFromZero(10)을 통해 num = 10이 됬을 때, for문은

sum += 1이 되고, loop++을 통해 loop==2가 된 후, 

loop<=num을 검사하고 true이므로, 또 안의 sum += loop를 통해 sum += 2가 되고...

이게 반복되어 sum값은 1+2+3+4+5+6+7+8+9+10이 됩니다.

<br>
<hr>

## 4. label

~~~ java

public class labelEx {
	public static void main(String[] ar) {
		labelEx ex = new labelEx();
//		ex.guGuDan();
//		1 * 1 = 1, 1 * 2 = 2, 1 * 3 = 3, 1 * 4 = 4, 1 * 5 = 5, 1 * 6 = 6, 1 * 7 = 7, 1 * 8 = 8, 1 * 9 = 9, 
//		2 * 1 = 2, 2 * 2 = 4, 2 * 3 = 6, 2 * 4 = 8, 2 * 5 = 10, 2 * 6 = 12, 2 * 7 = 14, 2 * 8 = 16, 2 * 9 = 18, 
//		3 * 1 = 3, 3 * 2 = 6, 3 * 3 = 9, 3 * 4 = 12, 3 * 5 = 15, 3 * 6 = 18, 3 * 7 = 21, 3 * 8 = 24, 3 * 9 = 27, 
//		4 * 1 = 4, 4 * 2 = 8, 4 * 3 = 12, 4 * 4 = 16, 4 * 5 = 20, 4 * 6 = 24, 4 * 7 = 28, 4 * 8 = 32, 4 * 9 = 36, 
//		5 * 1 = 5, 5 * 2 = 10, 5 * 3 = 15, 5 * 4 = 20, 5 * 5 = 25, 5 * 6 = 30, 5 * 7 = 35, 5 * 8 = 40, 5 * 9 = 45, 
//		6 * 1 = 6, 6 * 2 = 12, 6 * 3 = 18, 6 * 4 = 24, 6 * 5 = 30, 6 * 6 = 36, 6 * 7 = 42, 6 * 8 = 48, 6 * 9 = 54, 
//		7 * 1 = 7, 7 * 2 = 14, 7 * 3 = 21, 7 * 4 = 28, 7 * 5 = 35, 7 * 6 = 42, 7 * 7 = 49, 7 * 8 = 56, 7 * 9 = 63, 
//		8 * 1 = 8, 8 * 2 = 16, 8 * 3 = 24, 8 * 4 = 32, 8 * 5 = 40, 8 * 6 = 48, 8 * 7 = 56, 8 * 8 = 64, 8 * 9 = 72, 
//		9 * 1 = 9, 9 * 2 = 18, 9 * 3 = 27, 9 * 4 = 36, 9 * 5 = 45, 9 * 6 = 54, 9 * 7 = 63, 9 * 8 = 72, 9 * 9 = 81,
		
//		ex.guGuDan2();
//		1 * 1 = 1, 1 * 2 = 2, 1 * 3 = 3, 1 * 4 = 4, 1 * 5 = 5, 1 * 6 = 6, 1 * 7 = 7, 1 * 8 = 8, 1 * 9 = 9, 
//		2 * 1 = 2, 2 * 2 = 4, 2 * 3 = 6, 2 * 4 = 8, 2 * 5 = 10, 2 * 6 = 12, 2 * 7 = 14, 2 * 8 = 16, 2 * 9 = 18, 
//		3 * 1 = 3, 3 * 2 = 6, 3 * 3 = 9, 3 * 4 = 12, 3 * 5 = 15, 3 * 6 = 18, 3 * 7 = 21, 3 * 8 = 24, 3 * 9 = 27, 
//
//		5 * 1 = 5, 5 * 2 = 10, 5 * 3 = 15, 5 * 4 = 20, 5 * 5 = 25, 5 * 6 = 30, 5 * 7 = 35, 5 * 8 = 40, 5 * 9 = 45, 
//		6 * 1 = 6, 6 * 2 = 12, 6 * 3 = 18, 6 * 4 = 24, 6 * 5 = 30, 6 * 6 = 36, 6 * 7 = 42, 6 * 8 = 48, 6 * 9 = 54, 
//		7 * 1 = 7, 7 * 2 = 14, 7 * 3 = 21, 7 * 4 = 28, 7 * 5 = 35, 7 * 6 = 42, 7 * 7 = 49, 7 * 8 = 56, 7 * 9 = 63, 
//		8 * 1 = 8, 8 * 2 = 16, 8 * 3 = 24, 8 * 4 = 32, 8 * 5 = 40, 8 * 6 = 48, 8 * 7 = 56, 8 * 8 = 64, 8 * 9 = 72, 
//		9 * 1 = 9, 9 * 2 = 18, 9 * 3 = 27, 9 * 4 = 36, 9 * 5 = 45, 9 * 6 = 54, 9 * 7 = 63, 9 * 8 = 72, 9 * 9 = 81, 
		
		ex.guGuDan3();
//		1 * 1 = 1, 1 * 2 = 2, 1 * 3 = 3, 1 * 4 = 4, 1 * 5 = 5, 1 * 6 = 6, 1 * 7 = 7, 1 * 8 = 8, 1 * 9 = 9, 
//		2 * 1 = 2, 2 * 2 = 4, 2 * 3 = 6, 2 * 4 = 8, 2 * 5 = 10, 2 * 6 = 12, 2 * 7 = 14, 2 * 8 = 16, 2 * 9 = 18, 
//		3 * 1 = 3, 3 * 2 = 6, 3 * 3 = 9, 3 * 4 = 12, 3 * 5 = 15, 3 * 6 = 18, 3 * 7 = 21, 3 * 8 = 24, 3 * 9 = 27, 
//		5 * 1 = 5, 5 * 2 = 10, 5 * 3 = 15, 5 * 4 = 20, 5 * 5 = 25, 5 * 6 = 30, 5 * 7 = 35, 5 * 8 = 40, 5 * 9 = 45, 
//		6 * 1 = 6, 6 * 2 = 12, 6 * 3 = 18, 6 * 4 = 24, 6 * 5 = 30, 6 * 6 = 36, 6 * 7 = 42, 6 * 8 = 48, 6 * 9 = 54, 
//		7 * 1 = 7, 7 * 2 = 14, 7 * 3 = 21, 7 * 4 = 28, 7 * 5 = 35, 7 * 6 = 42, 7 * 7 = 49, 7 * 8 = 56, 7 * 9 = 63, 
//		8 * 1 = 8, 8 * 2 = 16, 8 * 3 = 24, 8 * 4 = 32, 8 * 5 = 40, 8 * 6 = 48, 8 * 7 = 56, 8 * 8 = 64, 8 * 9 = 72, 
//		9 * 1 = 9, 9 * 2 = 18, 9 * 3 = 27, 9 * 4 = 36, 9 * 5 = 45, 9 * 6 = 54, 9 * 7 = 63, 9 * 8 = 72, 9 * 9 = 81, 


	}
	
	public void guGuDan() {
		// firstNum * secondNum
		for(int firstNum=1; firstNum<10; firstNum++) {
			for(int secondNum=1; secondNum<10; secondNum++) {
				System.out.print(firstNum + " * " + secondNum + " = " + firstNum*secondNum + ", ");
			}
			System.out.println();
		}
	}
	
	public void guGuDan2() {
		// firstNum * secondNum
		for(int firstNum=1; firstNum<10; firstNum++) {
			for(int secondNum=1; secondNum<10; secondNum++) {
				if(firstNum == 4) {
					continue;
				}
				System.out.print(firstNum + " * " + secondNum + " = " + firstNum*secondNum + ", ");
			}
			System.out.println();
		}
	}
	
	public void guGuDan3() {
		// firstNum * secondNum
		here:
		for(int firstNum=1; firstNum<10; firstNum++) {
			for(int secondNum=1; secondNum<10; secondNum++) {
				if(firstNum == 4) {
					continue here;
				}
				System.out.print(firstNum + " * " + secondNum + " = " + firstNum*secondNum + ", ");
			}
			System.out.println();
		}
	}
}
~~~

앞서 continue는 if문을 제외한 중괄호({})로 이동시키는 역할을 한다고 했습니다.

label은 continue로 이동할 위치는 직접 지정해주는 것입니다.

일단 코드로 확인해보겠습니다.

guGuDan()메소드는 1단부터 9단까지 출력하는 메소드입니다.

guGuDan2()메소드는 firstNum == 4일 때 continue를 사용해 4단 출력을 건너뛰었습니다.

그런데 밑에 System.out.println()이 실행되어 출력결과를 보면 한줄 공백이 생긴 걸 볼 수 있습니다.

<br>

guGuDan3()은 guGuDan2()와 똑같은데 continue다음에 here을 붙였습니다.

그러면 continue는 **here:** 를 찾아 그곳에서 코드가 다시 실행되게 합니다.

이렇게 하면 System.out.println()이 실행되지 않아 출력결과에서 공백이 안생기게 됩니다.

