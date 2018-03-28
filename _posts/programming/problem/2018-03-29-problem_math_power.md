---
layout: post
title:  "[Problem] 어떤 수의 n제곱 구하기(백준 1629번)"
date:   2018-03-29 02:30:00
description: 어떤 수의 n제곱 빠르게 구하기
categories:
- programming
- problem
banner_image: /programming/algorithm/algorithm-logo.jpg
comments: true
---

어떤 수의 n제곱 빠르게 구하기

---

## 문제

<br>

<span style="color:blue">백준저지 1629번 문제</span>

<br>

예를 들어 다음과 같이 입력(A B C)이 주어지면

> 10 11 12

(10^11)%12 값을 출력하면 됩니다.

> 4

여기서 세 숫자(A, B, C)는 모두 2,147,483,647 이하의 자연수 입니다.

<br>
<hr>
<br>

## 너무 쉬운거 아닌가?

<br>

제가 처음에 문제를 보고 든 생각입니다.

일단 10의 11제곱을 먼저 하고 12로 나눈 나머지를 구해주면 됩니다.

> (10x10x10x10x10x10x10x10x10x10x10)%12

10을 열한번 곱하기 힘들다면 for문을 이용해도 됩니다.

~~~ java
long ans = 1;
for(int i=0; i<11; i++){
	ans *= 10;
}
ans %= 12;
~~~

물론 이미 만들어져있는 라이브러리를 사용해도 됩니다. 

자바의 경우에는 다음과 같습니다.

~~~ java
long ans = Math.pow(10, 11);
ans %= 12
~~~

여기서는 이런 라이브러리는 사용하지 않겠습니다.

<br>

문제는 세 숫자 중 B가 커질 때 있습니다.

지금은 B=11 로 비교적 작은 숫자입니다.

하지만 문제에서는 범위가 1 ~ 2147483647 이라고 나와있습니다.

2147483647은 int의 max값이기도 합니다.

만약 B가 2147483647이라면??

<br>

첫번째 방법처럼 노가다로 쓰는건 평생써도 안될 것 같습니다.

두번째 방법처럼 for문으로 작성한다면 코드자체는 그리 길지 않습니다.

하지만 실제로 연산은 2147483647번 일어나겠죠...

엄청나게 오랜 시간이 걸릴 것입니다.

<br>
<hr>
<br>

## 접근1: Recursive 

<br>

예를 들어 $a^7$을 보겠습니다.

이 숫자를 이렇게 나눕니다.

> $a^7 = a^6\cdot a$

여기서 $a^6$는 다음과 같이 생각할 수 있습니다.

> $a^6 = (a^3)^2$

밑에 식을 위에 식에 대입하면

> $a^7 = (a^3)^2\cdot a$

<br>

위에서 살펴본 바를 점화식으로 표현해보겠습니다.

pow(a, n) 메소드가 $a^n$을 계산해주는 메소드라 가정하면,

>$$pow(a, n) =
\begin{cases}
1, & \text{$n = 0$} \\
pow(a, n/2)^2, & \text{if $n$ is even}\\
pow(a, n/2)^2 * a, & \text{if $n$ is odd}
\end{cases}$$

<br>

먼저 n = 0 일때는 $a^0$이고, 모든 수의 0제곱은 1입니다.

n이 짝수일때는 두번째 식을 참고하면 됩니다.

n이 홀수일때는 세번쨰 식을 참고하면 됩니다.

<br>

### 코드

<br>

원래 문제와는 관련없이, 이 접근방법을 가지고 $a^n$을 구하는 프로그램을 작성했습니다.

~~~ java
public class MathPow {
    public static void main(String[] ar){
        MathPow mp = new MathPow();
        long a = 2;
        long n = 10;

        long result = mp.calcPow(a, n);
        System.out.print("result = " + result);
    }

    public long calcPow(long a, long n){
        if(n == 0){
            return 1;
        }else{
            long temp = calcPow(a, n/2);
            if(n%2 == 0) return temp*temp;
            else return temp*temp*a;
        }
    }
}
~~~

### 복잡도(Time complexity)

<br>

위 알고리즘은 n을 2로 나누고, 나온 몫을 또 2로 나누고...

이를 반복하고 있습니다. 즉,

> n = n/2

를 반복하고 있습니다. 그러다가 n이 0이 될 때 끝납니다.

우리는 이 반복이 몇번 지속되는지 알고싶습니다.

k번 반복된다고 한다면, 다음과 같이 식을 쓸 수 있습니다.

> $2^k \approx n$

정확히 같지는 않을 수도 있습니다.

저 반복을 하는 중 n이 홀수가 될 때도 있기 때문입니다.

하지만 우리는 복잡도를 구할꺼니 상관없습니다.

양변에 $log_2$를 씌우면,

> $k \approx log_2 n$

즉, 이 알고리즘의 복잡도는 $O(log_2 n)$ 입니다.

n이 2147483647라 할 때,

그냥 for문 돌려서 계산하는건 2147483647번 연산해야합니다.

하지만 이 알고리즘을 사용하면 

$log_2 2147483647 \approx log_2 2147483648 = log_2 2^{31} = 31$

즉, 31번 연산만에 값을 구할 수 있습니다.

<br>
<hr>
<br>

## 접근2: 비슷하지만 다른, no Recursive

<br>

몇가지 예를 들어보겠습니다.

먼저 $a^7$입니다.

> $a^7 = (a^3)^2 \cdot a$<br>
&nbsp; &nbsp; &nbsp;$= ((a^1)^2 \cdot a)^2 \cdot a$ <br>
&nbsp; &nbsp; &nbsp;$= a^{2 \cdot 2 + 2 + 1}$

<br>

다음은 $a^8$입니다.

> $a^8 = (a^4)^2$ <br>
&nbsp; &nbsp; &nbsp;$= ((a^2)^2)^2$ <br>
&nbsp; &nbsp; &nbsp;$= (((a^1)^2)^2)^2$ <br>
&nbsp; &nbsp; &nbsp;$= a^{2 \cdot 2 \cdot 2}$

<br>

이 두가지 예를 든 이유는 n이 홀수여서 a가 하나 튀어나올 때와 그렇지 않을 때를 비교하기 위함입니다.

n이 8일때는 반으로 나눠도 계속 짝수이기 때문에 계속 전체를 제곱합니다.

하지만 n이 7일때는 7일때와 3일때 a가 하나씩 빠져나오고, 그 결과는

지수 계산에 더하기가 생기게 합니다.

이때 지수계산의 규칙을 자세히 살펴볼 필요가 있어서

예시를 하나만 더 들어보겠습니다.

이번엔 $a^{24}$ 입니다.

> $a^{24} = (a^{12})^2$ <br>
$\;\;\;\;\;\;= ((a^6)^2)^2$ <br>
&nbsp; &nbsp; &nbsp; &nbsp;$= (((a^3)^2)^2)^2$ <br>
&nbsp; &nbsp; &nbsp; &nbsp;$= (((((a^1)^2) \cdot a)^2)^2)^2$ <br>
&nbsp; &nbsp; &nbsp; &nbsp;$= a^{2 \cdot 2 \cdot 2 \cdot 2 + 2 \cdot 2 \cdot 2}$

여기서 지수 계산 중 $2 \cdot 2 \cdot 2$가 어떻게 나왔냐를 잘 봐야합니다.

24를 2로 나누는 과정이 **세번** 있고나서,

3을 2로 나누는 과정에서 a하나가 밖으로 빠져나온 것입니다.

**세번** 전체 제곱된 후, a가 그 안에서 빠져나와서 $a^{2 \cdot 2 \cdot 2}$가 됩니다.

이 규칙을 프로그래밍 해보겠습니다.

<br>

### 코드

<br>

~~~ java
public class MathPow2 {
    public static void main(String[] ar){
        long a = 2;
        long n = 10;

        long result = 1;
        long multiply = a;
        while(n>0){
            if(n%2 == 1) result *= multiply;
            multiply = multiply*multiply;
            n /= 2;
        }
        System.out.print("result = " + result);
    }
}
~~~

result는 최종 값이 될 변수이고, multiply는 result에 곱해져갈 수입니다.

마지막 예처럼 24를 예로 들어보겠습니다.

while문을 살펴보면 이 반복문이 실행될 때마다 multiply는 제곱수가 됩니다. 즉,

n == 24 일때, multiply == $a^2$

n == 12 일때, multiply == $(a^2)^2$

n == 6 일때, multiply == $((a^2)^2)^2$

<br>

그리고 이제 n == 3 일때는 홀수므로, result == $1 \cdot ((a^2)^2)^2$가 되고,

이게 위에서 설명한 **세번** 전체 제곱되고 만들어 졌다는 $a^{2 \cdot 2 \cdot 2}$입니다.

그리고 multiply도 전체 제곱되므로, multiply == $(((a^2)^2)^2)^2$

<br>

n == 1 일때는 홀수이므로, result = $(1 \cdot ((a^2)^2)^2) \cdot (((a^2)^2)^2)^2$가 됩니다.

multiply는 여전히 전체 제곱되므로, multiply == $((((a^2)^2)^2)^2)^2$

<br>

그 다음 n은 1/2 여서 0이 되므로 while문을 빠져나갑니다.

이런 방식으로 $a^{24}$을 result값으로 구해냈습니다.

<br>

### 복잡도(Time complexity)

<br>

이 방식도 결국은

> n = n/2

를 n이 1이 될때까지 반복하는 것이므로, 

Recursive접근과 마찬가지로 $O(log_2 n)$이 됩니다.

<br>
<hr>
<br>

## 다시 원래 문제로 돌아와서...

<br>

이 포스팅에서 설명하고자 했던 부분은 끝이 났습니다.

원래 문제였던 백준 문제를 마치고 마무리하겠습니다.

위의 접근 방법으로 $A^B$를 구한 후, C로 나눈 나머지를 구하면 됩니다.

여기서 맞이하는 또 다른 작은 문제가 있습니다.

제일 처음에 걱정했던 것과 같이

A와 B가 2147483647과 같이 큰 수일때 입니다.

결과값이 너무 크게 나와 int나 long을 사용해도

각 변수의 max값을 벗어나, 값이 잘못 나올 수 있습니다.

<br>

다행히도 자바에서는 이런 큰 수들도 처리해주는 BigInteger라는 클래스도 있습니다.

하지만 될 수 있으면 이런 라이브러리를 안쓰고 처리해보겠습니다.

<br>

결론부터 말하자면 다음과 같은 정수론에서 나오는 공식이 적용됩니다.

A를 C로 나눈 나머지를 $R_A$, B를 C로 나눈 나머지를 $R_B$ 라고 하면 다음이 성립합니다.

> $A \cdot B \equiv R_A \cdot R_B \pmod C$

mod는 간단히 설명하자면, 예를 들어 $4 \equiv 7 \pmod 3$ 입니다.

4와 7 모두 3으로 나눴을 때 나머지가 같기 때문이죠.

<br>

위 공식을 간단하게 증명해보겠습니다.

> ### *pf)* <br>
A를 C로 나눴을 때 몫을 $Q_A$, 나머지를 $R_A$ 라 하고,<br>
B를 C로 나눴을 때 몫을 $Q_B$, 나머지를 $R_B$ 라 하면,<br>
$$A = C Q_A + R_A$$ <br>
$$B = C Q_B + R_B$$ <br>
$$AB = (C Q_A + R_A)(C Q_B + R_B)$$ <br>
$$\;\;\;\;\;\;\,= C^2 Q_A Q_B + C(Q_A R_B + R_A Q_B) + R_A R_B$$<br>
이고, $$ AB$$를 C로 나누면 앞의 두 항은 나누어 떨어지므로 <br>
결국 나머지만 생각한다면, $ R_A R_B $를 C로 나누는 것과 같다.

<br>

이를 컴퓨터 언어로 써본다면 다음과 같습니다.

> (A $\cdot$ B) % C = ((A % C)$ \cdot $(B % C)) % C

<br>

즉, 이 문제를 푸는데는 제곱계산을 해주면서 결과값(result)이

항상 나눠주는 수인 C보다 작도록, 매 계산마다

result = result%C 를 해주면 되는 겁니다.

아래는 제가 푼 해설 코드입니다.

<br>

~~~ java
import java.util.Scanner;

public class Main {
	public static void main(String[] ar){
		Scanner sc = new Scanner(System.in);
		int A = sc.nextInt();
		int B = sc.nextInt();
		int mod = sc.nextInt();
		
		long ans = 1; 
		long multiply = A%mod;
		
		while(B>0){
			if(B%2==1){
				ans *= multiply;
				ans%=mod;
			}
			multiply = ((multiply%mod)*(multiply%mod))%mod;
			B/=2;
		}
		System.out.print(ans);
	}
}
~~~

