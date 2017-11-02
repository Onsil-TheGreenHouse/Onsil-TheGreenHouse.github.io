---
layout: post
title:  "[Java] 연산자(operator)"
date:   2017-11-02 21:30:00
description: 연산자(operator)
categories:
- programming
- java
banner_image: /programming/java/java-logo.jpg
comments: true
---

[Java] 연산자

---

## 연산자

<br>

대부분의 연산자는 기본자료형의 사칙연산 등의 계산을 하기위해 사용합니다.

기본자료형을 제외한 참조자료형은 연산자를 사용할 수 없습니다.

예외로 String 클래스는 + 연산이 가능합니다.

<br>

연산자의 종류를 예제를 통해서 살펴보겠습니다.

## +, -, *, /, %, +=, -=, *=, /=, %=

~~~ java
public class Operator{
	public static void main(String[] args){
		Operator operator = new Operator();
		operator.add();
		operator.subtract();
		operator.multiply();
		operator.divide();
		operator.remainder();
		operator.compound();
	}

	public void add(){
		int num1 = 10;
		int num2 = 20;
		int result = num1 + num2;
		System.out.println(num1 + " + " + num2 + " = " + result);
	}

	public void subtract(){
		int num1 = 10;
		int num2 = 20;
		int result = num1 - num2;
		System.out.println(num1 + " - " + num2 + " = " + result);
	}

	public void multiply(){
		int num1 = 2;
		int num2 = 3;
		int result = num1 * num2;
		System.out.println(num1 + " * " + num2 + " = " + result);
	}

	public void divide(){
		int num1 = 7;
		int num2 = 3;
		int result1 = num1 / num2;
		int result2 = num2 / num1;
		System.out.println(num1 + " / " + num2 + " = " + result1);
		System.out.println(num2 + " / " + num1 + " = " + result2);

		double num3 = 5;
		double num4 = 10;
		double result3 = num3 / num4;
		double result4 = num4 / num3;
		System.out.println(num3 + " / " + num4 + " = " + result3);
		System.out.println(num4 + " / " + num3 + " = " + result4);
	}

	public void remainder(){
		int num1 = 21;
		int num2 = 5;
		int result1 = num1 % num2;
		int result2 = num2 % num1;
	}

	// 대입연산자(Compound assignment operation)
	public void compound(){
		int num = 10;
		System.out.println("num = 10");
		num += 5;
		System.out.println("num += 5;  num == " + num);
		num -= 5;
		System.out.println("num -= 5;  num == " + num);
		num *= 5;
		System.out.println("num *= 5;  num == " + num);
		num /= 5;
		System.out.println("num /= 5;  num == " + num);
		num %= 5;
		System.out.println("num %= 5;  num == " + num);
	}
}

// 10 + 20 = 30
// 10 - 20 = -10
// 2 * 3 = 6
// 7 / 3 = 2
// 3 / 7 = 0
// 5.0 / 10.0 = 0.5
// 10.0 / 5.0 = 2.0
// 21 % 5 = 1
// 5 % 21 = 5
// num = 10
// num += 5;  num == 15
// num -= 5;  num == 10
// num *= 5;  num == 50
// num /= 5;  num == 10
// num %= 5;  num == 0
~~~

밑에 주석은 Operator 클래스 실행 결과입니다.

(참고로 // 는 해당 줄을 주석으로 만들어 코드에 아무런 영향도 미치지 않습니다)

<br>

말그대로 사칙연산을 위한 연산자입니다. 주의해야할게 몇가지 있습니다.

/ 는 나눗셈 후 몫만 리턴하고, %는 나머지만을 리턴합니다.

정수 / 정수 => 정수 가 나오는데요, 소수형 / 소수형 => 소수형 이 나옵니다.

num += 5; 는 num = num + 5; 와 같은 코드입니다. 즉, num = 10+5가 됩니다.

밑의 num -= 5;도 같은 원리인데 위에서 num는 15가 됬으니, num = 15-5가 됩니다.

<br>
<hr>

## ++, --

~~~ java
public class OperatorIncrement{
	public static void main(String[] ar){
		OperatorIncrement operator = new OperatorIncrement();
		operator.increment();
	}

	public void increment(){
		int num = 5;
		System.out.println("num == " + num);
		num++;
		System.out.println("num++;  num == " + num);
		num--;
		System.out.println("num--;  num == " + num);

		// num++과 ++num의 차이
		System.out.println("num++과 ++num의 차이");
		System.out.println("num == " + num);

		System.out.println("++num; num == " + ++num);
		System.out.println("num == " + num);

		System.out.println("num++; num == " + num++);
		System.out.println("num == " + num);
	}
}

// num == 5
// num++;  num == 6
// num--;  num == 5
// num++과 ++num의 차이
// num == 5
// ++num; num == 6
// num == 6
// num++; num == 6
// num == 7
~~~

++은 1을 증가시켜주고, --는 1을 감소시킵니다.

처음에 num은 5였는데, num++을 하자 6이 된 걸 볼 수 있습니다.

<br>

그런데 ++을 앞에 붙이느냐 뒤에 붙이느냐가 조금 다릅니다.

결국에 1이 증가하는 건 같은데 실행순서가 다릅니다.

예를 들어

System.out.println("++num; num == " + ++num);

는 먼저 num이 1증가하고, 그 후 println()메소드가 실행됩니다. 반면,

System.out.println("num++; num == " + num++);

는 먼저 println()이 실행되고 그 후에 num이 1증가하는 것을 볼 수 있습니다.

<br>
<hr>

## !

~~~ java
public class OperatorComplement{
	public static void main(String[] ar){
		OperatorComplement operator = new OperatorComplement();
		operator.complement();
	}

	public void complement(){
		boolean flag = true;
		System.out.println("flag = " + flag);
		System.out.println("!flag = " + !flag);
	}
}

// flag = true
// !flag = false
~~~

!(느낌표)는 boolean타입에서만 사용할 수 있는 연산자로

true를 false로, false를 true로 바꾸어줍니다.

<br>
<hr>

## ~

~~~ java
public class OperatorTilde{
	public static void main(String[] ar){
		OperatorTilde operator = new OperatorTilde();
		operator.tilde();
	}

	public void tilde(){
		byte num1 = 1;
		byte num2 = 127;

		System.out.println("num1 == " + num1);
		System.out.println("~num1 == " + ~num1);

		System.out.println("num2 == " + num2);
		System.out.println("~num2 == " + ~num2);
	}
}

// num1 == 1
// ~num1 == -2
// num2 == 127
// ~num2 == -128
~~~

~(tilde)는 비트연산자 중 하나로, 0을 1로, 1을 0으로 바꿉니다.

예를 들면 byte num1은 1입니다. 즉, 00000001입니다.

~num1은 ~00000001과 같고 이는 11111110인 -2가 됩니다.

<br>

byte num2는 127, 즉 01111111입니다.

~num2는 ~01111111인 10000000와 같고 이는 -128이 됩니다.

<br>
<hr>

## ==, !=, >, <, >=, <=

~~~ java
public class OperatorComparison{
	public static void main(String[] ar){
		OperatorComparison operator = new OperatorComparison();

		operator.equality();
		operator.relational();
	}

	public void equality(){
		int num1 = 1;
		int num2 = 1;
		int num3 = 2;

		System.out.println("num1 == num2 ? " + (num1 == num2));
		System.out.println("num1 == num3 ? " + (num1 == num3));

		System.out.println("num1 != num2 ? " + (num1 != num2));
		System.out.println("num1 != num3 ? " + (num1 != num3));

		char charNum = 'a';
		System.out.println("97 == charNum ? " + (97 == charNum));

		int intNum = 1;
		double doubleNum = 1;
		System.out.println("intNum == doublenNum ? " + (intNum == doubleNum));

		boolean flag1 = true;
		boolean flag2 = true;
		boolean flag3 = false;
		System.out.println("flag1 == flag2 ? " + (flag1 == flag2));
		System.out.println("flag1 != flag2 ? " + (flag1 != flag2));

		System.out.println("flag1 == flag3 ? " + (flag1 == flag3));
		System.out.println("flag1 != flag3 ? " + (flag1 != flag3));
	}

	public void relational(){
		int num1 = 1;
		int num2 = 2;

		System.out.println("num1 > num2 ? " + (num1 > num2));
		System.out.println("num1 < num2 ? " + (num1 < num2));

		System.out.println("num1 >= num2 ? " + (num1 >= num2));
		System.out.println("num1 <= num2 ? " + (num1 <= num2));
	}	
}

// num1 == num2 ? true
// num1 == num3 ? false
// num1 != num2 ? false
// num1 != num3 ? true
// 97 == charNum ? true
// intNum == doublenNum ? true
// flag1 == flag2 ? true
// flag1 != flag2 ? false
// flag1 == flag3 ? false
// flag1 != flag3 ? true
// num1 > num2 ? false
// num1 < num2 ? true
// num1 >= num2 ? false
// num1 <= num2 ? true
~~~

이번엔 비교연산자입니다.

==는 비교하는 두 대상이 같으면 true, 다르면 false를 리턴합니다. !=는 그 반대입니다.

나머지 부등호들은 수학시간에 배운 그대로입니다. 해당 명제가 맞으면 true, 틀리면 false를 리턴합니다.

주의할점은 >=, <= 처럼 =를 뒤에 써야합니다. (=>는 오류입니다)

<br>

눈여겨 볼점은, charNum = 'a'는 'a'가 ASCII 코드로 97이므로 같다고 true가 나옵니다.

intNum과 doubleNum은 자료형은 다르지만 값이 같기때문에 true로 나옵니다.

<br>
<hr>

## &&, ||, &, |

~~~ java
public class ConditionalOperator{
	public static void main(String[] ar){
		ConditionalOperator operator = new ConditionalOperator();
		operator.conditional();
		System.out.println("=====================================");
		System.out.println(operator.returnFalse() & operator.returnTrue());
		System.out.println(operator.returnFalse() && operator.returnTrue());

		System.out.println(operator.returnTrue() | operator.returnFalse());
		System.out.println(operator.returnTrue() || operator.returnFalse());
	}

	public void conditional(){
		boolean flag1 = true;
		boolean flag2 = false;

		System.out.println("flag1 & flag2 ? " + (flag1 & flag2));
		System.out.println("flag1 && flag2 ? " + (flag1 && flag2));

		System.out.println("flag1 | flag2 ? " + (flag1 | flag2));
		System.out.println("flag1 || flag2 ? " + (flag1 || flag2));
	}

	public boolean returnFalse(){
		System.out.print(" returnFalse method is run! ");
		return false;
	}

	public boolean returnTrue(){
		System.out.print(" returnTrue method is run! ");
		return true;
	}
}

// flag1 & flag2 ? false
// flag1 && flag2 ? false
// flag1 | flag2 ? true
// flag1 || flag2 ? true
// =====================================
//  returnFalse method is run!  returnTrue method is run! false
//  returnFalse method is run! false
//  returnTrue method is run!  returnFalse method is run! true
//  returnTrue method is run! true
~~~

일단 boolean 논리연산에서 &, &&과 ∣, ∣∣는 같은 결과를 낳습니다.

a & b와 a && b는 모두, a와 b 둘다 true일 때만 true값을 리턴하고, 그 외에는 false를 리턴합니다.

a ∣ b와 a ∣∣ b는 모두, a와 b 중 하나라도 true이면 true를, 그 외에는 false를 리턴합니다.

<br>

그럼 &와 &&는 무엇이 다를까요?

만약 temp1 = (false & true)가 있다고 가정해봅시다. 

사실 앞에 false가 있다는 사실 자체가 temp1의 값은 false로 정해져있습니다. 뒤에가 false든 true든 상관없습니다.

그런데 &는 굳~~~~~~~~~이 뒤에꺼까지 검사를 다 해보는 것이고, &&는 앞에가 false면 결과가 정해져있으므로 뒤에는 검사하지 않습니다.

<br>

∣와 ∣∣도 비슷합니다. temp2 = (true ∣ false)가 있다고 가정해봅시다.

앞에 true가 있기 때문에 temp2의 값은 true로 정해져있습니다. 뒤에가 false든 true든 상관없이요.

그런데 ∣는 굳~~~~~~~~~이 뒤에꺼까지 검사를 다 해보는 것이고, ∣∣는 앞에가 true면 결과가 정해져있으므로 뒤에는 검사하지 않습니다.

<br>

===================== 밑의 결과를 확인해보겠습니다.

System.out.println(operator.returnFalse() & operator.returnTrue()); 는

앞에 returnFalse()메소드를 실행시켰을 때, "returnFalse method is run!"이 실행되고 false가 리턴됬습니다.

이미 값은 정해져있지만, &이므로 뒤의 returnTrue()메소드까지 실행시켜, "returnTrue method is run!"까지 출력됩니다.

반면 System.out.println(operator.returnFalse() && operator.returnTrue());는

앞의 returnFalse()메소드를 실행시켰을 때, false가 나와 이미 값이 정해졌고,

&&를 사용하고 있으므로 뒤의 returnTrue()는 실행시키지 않아 "returnFalse method is run!"만 출력된 걸 볼 수 있습니다.

∣와 ∣∣도 같은 원리로 생각하면 됩니다.

<br>
<hr>

## ?

~~~ java
public class ConditionalQuestion{
	public static void main(String[] ar){
		ConditionalQuestion operator = new ConditionalQuestion();
		operator.question();
	}

	public void question(){
		int num = 5;
		boolean flag = (num > 3) ? true : false;
		System.out.println("flag == " + flag);
	}
}

// flag == true
~~~

?(물음표)는 조건에 따라 값을 달라지게 합니다.

boolean flag = (num > 3) ? true : false; 는

flag변수의 값을 정하는데, num > 3이 true면 앞의 값을 대입하고, false면 뒤의 값을 대입합니다.

num은 5이기 때문에 5 > 3은 true고 즉, flag는 true가 됩니다.

<br>
<hr>

## Casting(형변환)

~~~ java
public class OperatorCasting{
	public static void main(String[] ar){
		OperatorCasting operator = new OperatorCasting();

		operator.smallToBig();
		operator.bigToSmall();
	}

	public void smallToBig(){
		byte byteValue = 123;
		short shortValue = (short)byteValue;
		System.out.println("byte 123 -> short: " + shortValue);
	}

	public void bigToSmall(){
		short shortValue = 256;
		byte byteValue = (byte)shortValue;
		System.out.println("short 256 -> byte: " + byteValue);

		shortValue = 255;
		byteValue = (byte)shortValue;
		System.out.println("short 255 -> byte: " + byteValue);
	}
}

// byte 123 -> short: 123
// short 256 -> byte: 0
// short 255 -> byte: -1
~~~

타입을 변환시키는 걸 캐스팅이라고 합니다.

예를 들면 smallToBig()메소드에서 byte값이였던 byteValue변수를 앞에 (short)를 붙여 바꿔버린것처럼요.

주의할 것은 기본자료형->참조자료형 이나 참조자료형->기본자료형 으로 캐스팅은 불가능합니다.

<br>

캐스팅에는 두가지 경우가 있습니다.

### 1.작은 타입 -> 큰 타입

smallToBig()메소드의 경우입니다.

byteValue는 123이고, byte는 8bit이므로 이진수로 나타내면 01111011입니다.

그런데 short는 16bit라서 16자리 입니다.

이렇게 작은자리타입에서 큰자리타입으로 변환될떄는 그만큼 앞에 0만 붙여주면 됩니다.

즉, shortValue는 0000000001111011으로 값은 똑같이 123이 됩니다.

<br>

### 2.큰 타입 -> 작은 타입

bigToSmall()메소드의 경우입니다.

shortValue의 256는 16bit인 이진수로 표현하면 0000000100000000 입니다.

그런데 이 수를 byte byteValue = (byte)shortValue; 를 통해 byte로 바꾸려고 합니다.

그런데 byte는 8bit 크기의 변수입니다. 그래서 앞의 8개 bit를 그냥 날려버려야합니다.

그럼 남는건 00000000인 0이고 즉 byteValue의 값은 0이 됩니다.

<br>

그 밑에 shortValue가 255일 때를 보겠습니다. 255는 16bit 이진수로 표현하면 0000000011111111입니다.

이 값을 byte로 형변환을 하면 앞의 8개 bit가 날라가고 남는건 11111111입니다.

맨앞의 1은 음수임을 뜻하므로 이 값은 -1이 됩니다.

<br>

작은 타입 -> 큰 타입은 값이 변할 일이 없으니 신경을 안써도 되지만,

큰 타입 -> 작은 타입 변환은 값이 변할 수 있으니 주의해야합니다.

<br><br>
<hr>

## 덧붙이는 말

<br>

연산자중에 비트 연산자라는 것도 있습니다. bitwise(&, ∣, ^), bit_shift(>>, <<, ≻≻≻)

쓸일이 적어서 위에서의 설명은 제외했습니다만, 간단하게 코드로 예시를 들어보겠습니다.

코드안에 주석으로 설명을 다 넣었습니다.

~~~ java
public class BitOperator{
	public static void main(String[] ar){
		BitOperator operator = new BitOperator();

		operator.bitwise();
		operator.bitshift();
	}

	public void bitwise(){
		byte num1 = 1; // 00000001
		byte num2 = 7; // 00000111

		// 계산한 후 (byte)를 붙인 이유: 비트연산자로 연산될 때, int로 바껴서 계산되기 때문

		// &는 같은 자리수의 숫자가 둘 다 1일때만 1, 나머지는 0
		// 00000001
		// 00000111
		//---------
		// 00000001
		byte resultAnd = (byte)(num1&num2); // resultAnd = 1

		// |는 같은 자리수의 숫자가 둘다 0일때만 0, 나머지는 1
		// 00000001
		// 00000111
		//---------
		// 00000111
		byte resultOr = (byte)(num1|num2); // resultOr = 7

		// ^는 같은 자리수의 숫자가 다를때만 1, 나머지는 0
		// 00000001
		// 00000111
		//---------
		// 00000110
		byte resultXor = (byte)(num1^num2); // resultXor = 6

		System.out.println("resultAnd = " + resultAnd);
		System.out.println("resultOr = " + resultOr);
		System.out.println("resultXor = " + resultXor);
	}

	public void bitshift(){
		System.out.println("========= << =========");
		// << 는 비트를 왼쪽으로 해당 숫자만큼 밀어버리고, 새로 생겨나는 부분은 0, 밀려나는 부분은 없어짐.
		// a <<= b는 a = a<<b 와 동일
		byte num = 1; // 00000001
		num = (byte)(num<<1); // 00000010
		System.out.println("num == " + num); // num == 2
		num<<=2; // 00001000
		System.out.println("num == " + num); // num == 8
		num<<=4; // 10000000
		System.out.println("num == " + num); // num == -128
		num<<=1; // 00000000
		System.out.println("num == " + num); // num == 0
		num<<=1; // 00000000
		System.out.println("num == " + num); // num == 0

		System.out.println("========= >> =========");
		// >> 는 비트를 오른쪽으로 해당 숫자만큼 밀어버리고, 양수일 때는 새로 생겨나는 부분은 0, 밀려나는 부분은 없어짐
		num = (byte)127; // 01111111
		num>>=1; // 00111111
		System.out.println("num == " + num); // num == 63
		num>>=2; // 00001111
		System.out.println("num == " + num); // num == 15
		num>>=4; // 00000000
		System.out.println("num == " + num); // num == 0
		num>>=1; // 00000000
		System.out.println("num == " + num); // num == 0
		num>>=1; // 00000000
		System.out.println("num == " + num); // num == 0

		System.out.println("========= >> =========");
		// >> 는 비트를 오른쪽으로 해당 숫자만큼 밀어버리고, 음수일 때는 새로 생겨나는 부분은 1, 밀려나는 부분은 없어짐
		num = (byte)-128; // 10000000
		num>>=1; // 11000000
		System.out.println("num == " + num); // num == -64
		num>>=2; // 11110000
		System.out.println("num == " + num); // num == -16
		num>>=4; // 11111111
		System.out.println("num == " + num); // num == -1
		num>>=1; // 11111111
		System.out.println("num == " + num); // num == -1
		num>>=1; // 11111111
		System.out.println("num == " + num); // num == -1

		System.out.println("========= >>>= =========");
		// >>>는 >>와 같은데, >>는 부호에 따라 새로 생겨나는 부분이 달라졌으나, >>>는 무조건 0
		num = -128; // 10000000
		num>>>=1; // 01000000 
		System.out.println("num == " + num); // num == -64 ?? 설명대로라면 01000000으로 64여야하는데?? 
		num>>>=2; // 00010000
		System.out.println("num == " + num); // num == -16 ?? 이것도 예상과 다르다!
		num>>>=4; // 00000001
		System.out.println("num == " + num); // num == -1 ?? 이유는 밑에 있습니다.
		num>>>=1; // 00000000
		System.out.println("num == " + num); // num == -1 ?? 일단 가장밑에 int로 처리한 부분을 보세요
		num>>>=1; // 00000000
		System.out.println("num == " + num); // num == -1

		System.out.println("========= >>>= =========");

		num = (byte)127; // 01111111
		num>>>=1; // 00111111
		System.out.println("num == " + num); // num == 63
		num>>>=2; // 00001111
		System.out.println("num == " + num); // num == 15
		num>>>=4; // 00000000
		System.out.println("num == " + num); // num == 0
		num>>>=1; // 00000000
		System.out.println("num == " + num); // num == 0
		num>>>=1; // 00000000
		System.out.println("num == " + num); // num == 0

		System.out.println("========= >>>= =========");

		int numi = -2147483648; // 1000 0000 0000 0000 0000 0000 0000 0000
		numi>>>=1; // 01000000000000000000000000000000
		System.out.println("numi == " + numi); // num == 1073741824
		numi>>>=2; // 00010000000000000000000000000000
		System.out.println("numi == " + numi); // num == 268435456
		numi>>>=4; // 00000001000000000000000000000000
		System.out.println("numi == " + numi); // num == 16777216
		numi>>>=1; // 00000000100000000000000000000000
		System.out.println("numi == " + numi); // num == 8388608
		numi>>>=1; // 00000000010000000000000000000000
		System.out.println("numi == " + numi); // num == 4194304

		// int는 위에서 설명했던대로 >>>가 잘 작동합니다.
		// byte에서 안됬던 이유는 자바는 비트 쉬프트를 할때 일단 int로 다 바꾸기 때문입니다.
		// 즉 num = -128인 상태에서 num >>>= 1 을 한다하면
		// num >>>= 1은 num = num >>> 1과 같고 이때 우변에 num이 32bit인 int로 바껴버립니다.
		// -128의 32bit 버전은 1111 1111 1111 1111 1111 1111 1000 0000
		// 그래서 num >>> 1은 결국 1111 1111 1111 1111 1111 1111 1000 0000 >>> 1
		// 즉, 0111 1111 1111 1111 1111 1111 1100 0000 이 됩니다.
		// 이걸 다시 byte로 바꾸면 뒤에 8bit만 남으므로, 11000000가 되고 결국 -64가 됩니다.

	}
}
~~~

참고로 ≺≺≺ 연산자는 없습니다. <<는 음수건 양수건 결과가 똑같기 때문입니다.