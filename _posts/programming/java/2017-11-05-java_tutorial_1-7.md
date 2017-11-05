---
layout: post
title:  "[Java] 배열(Array)"
date:   2017-11-05 15:00:00
description: 배열(Array)
categories:
- programming
- java
banner_image: /programming/java/java-logo.jpg
comments: true
---

[Java] 배열(Array)

---

## 배열(Array)

<br>

이전의 byte, int같은 자료형은 한 변수에 하나의 값만 저장할 수 있었습니다.

배열은 하나의 변수에 여러 값을 저장할 수 있는 자료구조입니다.

<br>
<hr>

## 배열의 선언

~~~ java

public class ArrayLotto {
	public static void main(String[] ar) {
		ArrayLotto ex = new ArrayLotto();
		ex.init();
		ex.lotto();
	}
	
	public void init() {
//		int [] lottoNums1;
//		lottoNums1 = new int[7];
//		
//		int lottoNums2[];
//		lottoNums2 = new int[7];
		
		int [] lottoNums = new int[7];
		
		lottoNums[0] = 10;
		lottoNums[1] = 20;
		lottoNums[2] = 30;
		lottoNums[3] = 40;
		lottoNums[4] = 15;
		lottoNums[5] = 25;
		lottoNums[6] = 35;
		
		for(int lottoIdx=0; lottoIdx<7; lottoIdx++) {
			System.out.println((lottoIdx+1) + " position number is " + lottoNums[lottoIdx]);
		}
//		1 position number is 10
//		2 position number is 20
//		3 position number is 30
//		4 position number is 40
//		5 position number is 15
//		6 position number is 25
//		7 position number is 35
	}
	
	public void lotto() {
		int [] lottoNums = {10, 20, 30, 40, 15, 25, 35};
		
		int lengthOfLottoNums = lottoNums.length;
		
		for(int lottoIdx=0; lottoIdx<lengthOfLottoNums; lottoIdx++) {
			System.out.print(lottoNums[lottoIdx] + " ");
		}
//		10 20 30 40 15 25 35 
		System.out.println();
		for(int num: lottoNums) {
			System.out.print(num + " ");
		}
//		10 20 30 40 15 25 35 
	}
}

~~~

init()메소드를 살펴보면 배열을 선언하는 방법이 3가지 나와있습니다.

어느 것을 사용해도 됩니다.

new int[7]의 7이 배열의 크기를 설정해주는 것입니다.

이렇게 배열의 크기가 7이면, 배열은 0번째부터 6번째까지 총 7개의 저장공간을 가지게 됩니다.

배열이 가지게되는 값에 따라 int를 알맞게 바꾸면 됩니다.

<br>

lotto()메소드에서는 배열의 선언과 동시에 값을 넣어버리고 있습니다.

상황에 맞게 더 편한 방법으로 배열을 선언하면 됩니다.

<br>

.length는 해당 배열의 길이를 리턴합니다. 즉, lengthOfLottoNums는 7이 됩니다.

참고로 for문에서 조건문인 lottoIdx < lengthOfLottoNums는 

lottoIdx < lottoNums.length로 써도 됩니다. 

하지만 위의 코드처럼 배열의 크기를 따로 변수에 저장한 후 사용하는게 좋은데요,

그 이유는 for문에 .length를 사용하면, for문이 도는 내내 .length를 계산하기 때문입니다.

한번만 계산하면 될 껄 여러번 계산하면 당연히 속도가 느려지겠죠.

<br>

lotto()메소드의 마지막에는 배열을 출력하는 또다른 for문 사용법이 나와있습니다.

for(int num: lottoNums)는 lottoNums배열안의 값들을 num이라고 정의하는 것입니다.

<br>
<hr>

## 배열의 초기값

~~~ java

public class ArrayInitValue {
	public static void main(String[] ar) {
		ArrayInitValue ex = new ArrayInitValue();
		ex.primitiveTypes();
//		byteArray[0]: 0
//		shortArray[0]: 0
//		intArray[0]: 0
//		longArray[0]: 0
//		floatArray[0]: 0.0
//		doubleArray[0]: 0.0
//		charArray[0]:

//		배열 자체를 출력
//		byteArray: [B@3abfe836
//		shortArray: [S@2ff5659e
//		intArray: [I@77afea7d
//		longArray: [J@161cd475
//		floatArray: [F@532760d8
//		doubleArray: [D@57fa26b7
//		charArray: [C@5f8ed237
		
		System.out.println();
		ex.referenceTypes();
//		stringArray[0]: null
//		stringArray[1]: Cute Teemo
//		classArray[0]: null
//		classArray[1]: ArrayInitValue@2f410acf
//
//		stringArray: [Ljava.lang.String;@47089e5f
//		classArray: [LArrayInitValue;@4141d797
	}
	
	public void primitiveTypes() {
		// 기본자료형의 배열 초기값
		byte [] byteArray = new byte[1];
		short [] shortArray = new short[1];
		int [] intArray = new int[1];
		long [] longArray = new long[1];
		float [] floatArray = new float[1];
		double [] doubleArray = new double[1];
		char [] charArray = new char[1];
		
		System.out.println("byteArray[0]: " + byteArray[0]);
		System.out.println("shortArray[0]: " + shortArray[0]);
		System.out.println("intArray[0]: " + intArray[0]);
		System.out.println("longArray[0]: " + longArray[0]);
		System.out.println("floatArray[0]: " + floatArray[0]);
		System.out.println("doubleArray[0]: " + doubleArray[0]);
		System.out.println("charArray[0]: " + charArray[0]);
		System.out.println();
		System.out.println("byteArray: " + byteArray);
		System.out.println("shortArray: " + shortArray);
		System.out.println("intArray: " + intArray);
		System.out.println("longArray: " + longArray);
		System.out.println("floatArray: " + floatArray);
		System.out.println("doubleArray: " + doubleArray);
		System.out.println("charArray: " + charArray);
	}
	
	public void referenceTypes() {
		String [] stringArray = new String[2];
		ArrayInitValue [] classArray = new ArrayInitValue[2];
		
		stringArray[1] = "Cute Teemo";
		classArray[1] = new ArrayInitValue();
		System.out.println("stringArray[0]: " + stringArray[0]);
		System.out.println("stringArray[1]: " + stringArray[1]);
		System.out.println("classArray[0]: " + classArray[0]);
		System.out.println("classArray[1]: " + classArray[1]);
		System.out.println();
		System.out.println("stringArray: " + stringArray);
		System.out.println("classArray: " + classArray);
	}
}
~~~

primitiveTypes()메소드에서는 기본 자료형 배열을 선언만 해주고 값을 지정안해줄 때,

초기값이 어떻게 되는지 출력하고 있습니다.

기본 자료형의 초기값과 동일한 값들이 설정된다는 걸 알 수 있습니다.

<br>

배열 자체를 출력할 떄는 예를 들어,

System.out.println("byteArray: " + byteArray); 는

byteArray: [B@3abfe836 를 출력합니다.

[는 배열이라는 의미이고, B는 byte의 B입니다. @3abfe836는 해당배열의 고유값입니다.

<br>

referenceTypes()에서는 참조 자료형 배열을 선언만 해주고 값을 지정안해줄 때,

초기값이 어떻게 되는지 출력하고 있습니다.

두 배열 모두 0번째는 지정을 안해주고, 1번째 자리만 값을 지정해줬습니다.

그랬더니 0번째는 null(아무값도 없는 상태)이 나오는 걸 볼 수 있습니다.

<br>

배열 자체를 출력할 때는 예를 들어, 

System.out.println("stringArray: " + stringArray); 는

stringArray: [Ljava.lang.String;@47089e5f 를 출력합니다.

[는 배열이라는 의미, L은 참조자료형이라는 의미, java.lang.String은 String클래스를 표현하고 있습니다.

뒤의 @47089e5f는 해당 배열의 고유값입니다.

<br>
<hr>

## 2차원 배열

<br>

먼저 2차원 배열의 간단히 설명하면, 선언을

int [][] temp = { {1, 2, 3}, {2, 3, 4} };

이런 방식으로 []를 두번쓰면 됩니다.

이 때, temp[0]은 {1, 2, 3}이 되고, temp[1]은 {2, 3, 4}가 됩니다.

temp[0][1]은 2, temp[1][2]은 4

<br>

예제를 보면서 더 살펴보겠습니다.

~~~ java

public class twoDimensionArray {
	public static void main(String[] ar) {
		twoDimensionArray ex = new twoDimensionArray();
		ex.ex1();
		System.out.println();
		ex.ex2();
		System.out.println();
		ex.ex3();
		System.out.println();
		ex.ex4();
		System.out.println();
		ex.ex5();
	}
	
	public void ex1() {
		int [][] intArray1 = new int[2][3];
		intArray1[0][0] = 0;
		intArray1[0][1] = 1;
		intArray1[0][2] = 2;
		intArray1[1][0] = 3;
		intArray1[1][1] = 4;
		intArray1[1][2] = 5;
		System.out.println("intArray1: " + intArray1);
		System.out.println("intArray1[0]: " + intArray1[0]);
		System.out.println("intArray1[0][2]: " + intArray1[0][2]);
//		intArray1: [[I@6073f712
//		intArray1[0]: [I@43556938
//		intArray1[0][2]: 2
	}
	
	public void ex2() {
		int [][] intArray2 = new int[2][];
		intArray2[0] = new int[2];
		intArray2[1] = new int[3];
		
		intArray2[0][0] = 0;
		intArray2[0][1] = 1;
		intArray2[1][0] = 2;
		intArray2[1][1] = 3;
		intArray2[1][2] = 4;
		
		System.out.println("intArray2[0][1]: " + intArray2[0][1]);
		System.out.println("intArray1[0][2]: " + intArray2[1][2]);
//		intArray2[0][1]: 1
//		intArray1[0][2]: 4
		System.out.println("intArray2.length: " + intArray2.length);
		System.out.println("intArray2[0].length: " + intArray2[0].length);
		System.out.println("intArray2[1].length: " + intArray2[1].length);
//		intArray2.length: 2
//		intArray2[0].length: 2
//		intArray2[1].length: 3
	}
	
	public void ex3() {
		int [][] intArray3 = { {0, 1}, {2, 3, 4} };
		System.out.println("intArray3[0].length: " + intArray3[0].length);
		System.out.println("intArray3[1].length: " + intArray3[1].length);
//		intArray3[0].length: 2
//		intArray3[1].length: 3
	}
	
	public void ex4() {
		int [][] intArray4 = { {0, 1}, {2, 3, 4} };
		
		int lengthOfDim1 = intArray4.length;
		for(int index1=0; index1<lengthOfDim1; index1++) {
			int lengthOfDim2 = intArray4[index1].length;
			for(int index2=0; index2<lengthOfDim2; index2++) {
				System.out.println("intArray[" + index1 + "][" + index2 + "]: " + intArray4[index1][index2]);
			}
		}
//		intArray[0][0]: 0
//		intArray[0][1]: 1
//		intArray[1][0]: 2
//		intArray[1][1]: 3
//		intArray[1][2]: 4
	}
	
	public void ex5() {
		String [][] champions = { {"teemo", "jinx"}, {"Jax", "Rengar", "Fizz"} };
		
		int indexDim1 = 0;
		for(String[] championList: champions) {
			int indexDim2 = 0;
			for(String championName: championList) {
				System.out.println("champions[" + indexDim1 + "][" + indexDim2 + "]: " + championName);
				indexDim2++;
			}
			indexDim1++;
			System.out.println();
		}
//		champions[0][0]: teemo
//		champions[0][1]: jinx
//
//		champions[1][0]: Jax
//		champions[1][1]: Rengar
//		champions[1][2]: Fizz
	}
}
~~~

ex1()에서는 정의한 intArray1은 결국 { {0, 1, 2}, {3, 4, 5} }입니다.

그리고 밑의 println()에서 볼 수 있듯이, 

정확한 값에 접근하는게 아니면 해당배열의 주소값을 리턴합니다.

<br>

ex2()에서는

int [][] intArray2 = new int[2][]; 로 먼저 1차원만 크기를 설정하고,

intArray2[0] = new int[2];	intArray2[1] = new int[3];를 통해

2차원 크기를 각각 다르게 설정하고 있습니다.

intArray2는 { {0, 1}, {2, 3, 4} }입니다.

<br>

ex3()에서는 2차원 배열을 선언과 동시에 값을 정의해주고 있습니다.

<br>

ex4()와 ex5()에서는 2차원배열의 각 값들을 for문으로 출력하고 있습니다.

특히 ex5()에서는 위에서 설명한 배열을 위한 for문 문법을 사용해 출력하고 있습니다.

그런데 이 방법은 해당값의 배열에서의 위치를 확인하려면 따로 indexDim1, indexDim2같이 변수를 정의해야합니다.

배열안의 값만 출력할 때는 ex5()의 방법이, 값의 배열위치까지 알아야하면 ex4()의 방법이 편할 것 같습니다.

<br>
<hr>

## String args[]

<br>

자바 클래스의 main()메소드에는 항상 String[] args 가 들어갔습니다.

public static void main(String[] args) 와 같이요

지금까지는 생각없이 써왔는데 지금 와서 보니, String[] args는 배열입니다.

main()메소드가 실행될 때 String 배열을 파라미터로 받는다는 것입니다.

~~~ java

public class ArrayMain {
	public static void main(String[] args) {
		if(args.length > 0) {
			for(String argument: args) {
				System.out.println(argument);
			}
		}
	}
}
~~~

터미널에서 

{% highlight bash %}
$ javac ArrayMain.java
$ java ArrayMain Cute Teemo
{% endhighlight %}

이렇게 실행해봅니다.

{% highlight jinja %}
Cute
Teemo
{% endhighlight %}

와 같이 출력되는 것을 볼 수 있습니다.

<br>

이클립스에서 실행시 파라미터를 입력하기 위해서는

Run > Run Configurations에 들어가서

![img_eclipse_run_conf](https://lh3.googleusercontent.com/-GKh7DWjapxYwAQKMZHKVWiBlF_A1lijXdUPGAi2y6ZluQba5V_Zs3VraxNE6EWl6lw39kUIpbGcBTGqSQzK8tdi_uTPiWq0lue_oxkg2mWFTuOiC-la8mYWkBUzSulxAm1hoBfJM6gIdl-7-FQyjokMofLtAnzDOTJP8dyEedaZ8X97S2BT1sfddeuGxgW5npAMQBTXwmH5mDC8IPlWqaTa_Q32M4AVqCZO4tWnOQcPRWJYIdJkQQMzgbXV2x60oKH1O1VnmGZ4E3HLIfZx9Ayl_Qn45U62pSlxL3sBll7-sGC0I8B_uNczYrpQVfJx50TLYxHqgyXs5v9yStspXz-1QwcXlR-YTl78XpBoyiLh0zqmXZGiwp70l5c5lWqWhjVt3QtHuZseA_WlI0TbxeJy2iXK5MnMAOntEbjx2WBcqMmTp3QxH4jSFoxeI-ND0WjaDSGmmYy5zqmBwGPRZmPHC8Z7XF_Ws0sr5KlvI_qtCgxPEHlTWlqooi_rNOsGaKebAZcm6UhSb3WxKU4XEy7oEikfbqpG_yB5mYkMhfctnW6cGOovrOp6cbjnl8-8-puhlVtTFEJIIrUI1bW7xD49QJ8skKbAFr_mEnM5eA=w2616-h1634-no)

arguments탭에 들어가 Program arguments에 적고자 하는 arguments를 적고 Run을 클릭합니다.

![img_eclipse_run_with_arguments](https://lh3.googleusercontent.com/HSJQRyM8l9FzsBaF5SbDrx76WLDCLu5Xst1Q33xg5P28VA-iDK8q4PQ2ssuFjhidRahkDUBJ6mbItxy5PSsyjPTSuEqI4qM8Yp-RRmlxiWlaK7sNsw8TsqSrUWFnG2N1U5hwvsjqh-SVL7V1C_4VzxS2lR-ccv6s4Vrj8a5P93w0kJtrX2uOjUAbDII6VMcSGIUHdINsLMsGPAQUHJql-KZJLn7rAIuWBii2zZXqlFJM7B7DG7oVXIHyFAV1lYw_eqlIba6qOm9qwDfx3NqpBv__LiSEr_nCV4uUPyL7SQYJOk3SPorJKps96NTaY9RqsseGD2RLtNyhTUSnLm4Z_16uBf3m4cTO_N5sWpdjTNRjM9ctoaftNH1vlj1U8Go_kMc7o4KGszHHxY_aqDlsrMchtUxv4gwo84JpvZiXnwP1eZufUaok_XC1Wuf70k51ZYhNRYe1fWh2_CHLuwHv7L3vW3FN2Q9rm1wPd-n1zicoichTx_C8aT41CnaDi-vzDCOVVHNP2rKNDD2q40cirqdvdrRaThmQaY4eoLQToP-lbkunwgDcW_NNFppcni3XevM_3RZJHQY-uUfYrdpqvBrLLQJIoQhe6tPv914BCQ=w2788-h1634-no)

