---
layout: post
title:  "[Problem] 피보나치(Fibonacci) 문제(백준 저지 10870, 2749, 11444)"
date:   2018-03-29 14:00:00
description: 피보나치 문제를 푸는 다양한 방법(백준 저지 10870, 2749, 11444)
categories:
- programming
- problem
banner_image: /programming/algorithm/algorithm-logo.jpg
comments: true
---

피보나치 문제를 푸는 다양한 방법(백준 저지 10870, 2749, 11444)

---

## 피보나치(Fibonacci) 수열

<br>

피보나치 수열을 다음 점화식을 만족하는 수열입니다.

>$$fibo(n) =
\begin{cases}
0, & \text{$n = 0$} \\
1, & \text{$n = 1$}\\
fibo(n-1)+fibo(n-2), & \text{$n \gt 1$}
\end{cases}$$

0번째 항부터 차례대로 써보면 다음과 같습니다.

> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

<br>
<hr>
<br>

## 문제 1

<br>

<span style="color:blue">백준 저지 10870번 문제</span>

n번째 피보나치 수를 구하는 문제입니다.

예를 들어 10번째 피보나치 수는 55 입니다.

여기서 n은 20이하의 자연수입니다.

<br>

피보나치 문제 중 가장 기본이 되는 유형입니다.

보통 이런 문제는 Recursive 또는 DP(Dynamic Programming)으로 풉니다.

<br>

### Recursive

<br>

위에 써진 점화식을 그대로 구현하는 방식입니다.

바로 코드로 살펴보겠습니다.

~~~ java
public class Fibo1 {
    public static void main(String[] ar){
        Fibo1 ex = new Fibo1();
        int n = 10;

        System.out.print("F(" + n + ") = " + ex.fibo(n));
    }

    public int fibo(int n){
        if(n == 0) return 0;
        if(n == 1) return 1;
        return fibo(n-1) + fibo(n-2);
    }
}
~~~

이 방법의 문제는 중복 계산입니다.

다음은 f(5)를 계산하는 과정입니다.

![fibo_5_graph](https://lh3.googleusercontent.com/bw7AE2bMHCCyueQrijo25iDQFZSuA93BUib_4h0-T-3zBA-j9ioSY7_b8CTRgwU6MahAuYzO5Ru4xEgqd54m_zKbk6TQKmrwCvz-6JxI5aCyVnK_UYU9FEa9f0sTNkXqSGQwsVdI4wr1G1M7CdRv1K53FJadECS2MR-SvAEfXIIhE_Rm79l5241SQm6YPEnYD28pG0kypU91Sle6vJ8Sot1Qf-3mifWLJo3nkB-VCl2VsTKkJKt09iWWB9BB0d124v4x3FZUaWhEAT4PNxUAhbQ2-SmF2P1m1ShzvtFvwRC55ck5ntEutnq4vbA1RJWUJNX8q-O1ZIFHVxn4mJaFZKiOJe9O0Yn1Qj1oCVTxwZnI3VMXDfltTmqaaXUokKl9W87DCiJB-71pJGhquVr9x3buximZuNVrXZkdWoHypKOXYfwqqTd8EW75V1Jnk30tQ7E8ykJvNXNi7Q36ZNfqgazjYso-RptpLrSOURWCHQiH-pyJ0s9ZReL4RJgK6OdmsQvwtDDtr0gGlg3pSHWDXQkPCOfm_5RR5pF3FHjpFOUBmRYYg3zlRKsf1U36ZrncAVIIxW3ilrWWm3sw0MKw0ARMZPD7Tl_Zbpf-4QY=w1013-h554-no)

맨 위에 f(5)를 제외한 모든 노드가 연산이고,

똑같은 연산이 여럿 보입니다.(예를 들어 f(2) 계산은 3번)

n이 커질수록 중복계산은 더 많아집니다.

<br>

복잡도를 간단히 살펴보면

n이 0과 1일때를 제외한 모든 수는 2번의 연산과정을 거칩니다.

위의 그림을 살펴보면, n=5인데 한 숫자당 2번 연산이 되서

약 $2^{n-1}$의 연산이 일어난걸 볼 수 있습니다.

즉, 복잡도는 $O(2^n)$입니다.

<br>

### DP(Dynamic Programming)

<br>

이런 중복계산을 방지하는 방법입니다.

일단 Recursive와 다른 점은 

Recursive는 숫자의 뒤에서부터(n) 계산합니다.

DP는 숫자의 앞에서부터(0) 계산합니다.

그리고 계산한 값을 저장합니다.

예를 들어 fibo(4)를 구한다면

fibo(2) = fibo(1) + fibo(0);

다음 fibo(3)을 구할때 쓰는 fibo(2)와 fibo(1)은

앞에서 계산한 값을 저장해놓고 가져다 씁니다.

이렇게 구한 fibo(3)도 저장하고 마지막 f(4)를 계산하는 방법입니다.

코드입니다.

~~~ java
public class Fibo2 {
    public static void main(String[] ar){
        Fibo2 ex = new Fibo2();
        int n = 10;
        int result = 0;
        if(n>0) result = ex.calcFibo(n);
        System.out.println("F(" + n + ") = " + result);
    }

    public int calcFibo(int n){
        int[] fibo = new int[n+1];
        fibo[0] = 0;
        fibo[1] = 1;

        int index = 2;
        while(index <= n){
            fibo[index] = fibo[index-1] + fibo[index-2];
            index++;
        }

        return fibo[n];
    }
}
~~~

DP의 복잡도는 그냥 순서대로 2부터 n까지 계산 1번씩 진행하므로,

$O(n)$이 되겠습니다.

<br>
<hr>
<br>

## 문제 2

<br>

<span style="color:blue">백준 저지 2749번 문제</span>

이번에도 문제 1과 같이 n번째 피보나치 수를 구하는 문제입니다.

그런데 여기서 n은 1,000,000,000,000,000,000 이하의 자연수입니다.

이 n번째 피보나치 수열을 1,000,000 으로 나눈 값을 출력하는 문제입니다.

예를 들어 n = 1000 이면 정답은 228875 입니다.

<br>

문제1과 다른점은 n의 범위가 매우 크다는 것입니다.

n이 만약 max값인 1,000,000,000,000,000,000 라면?

그에 해당하는 피보나치 수는 long으로도 안담길것 같습니다.

연산 횟수도 1,000,000,000,000,000,000번 해야하니 매우매우 오래 걸릴 것입니다.

<br>

### 피사노 주기(Pisano Period)

<br>

처음에는 n에 큰 수를 넣었을 때 시간이 너무 오래걸리길래

다른 방법을 생각하면서 그냥 아무 생각없이 무의식적으로

n에 아무 수나 집어 넣어넣고 돌리고를 반복했습니다.

(공부하면서 펜 돌리듯이...)

그런데 결과값에 봤던 숫자가 자꾸 보이는을 발견했고,

이는 n이 $10^k, where \; k > some \; number$ 일때였습니다.

k가 10이상이었나 11이상이었나...

<br>

아무튼 '설마 피보나치 수열에 주기가 있다고??' 라는 의심을 하고

주기가 있는지 살펴보니 있었습니다!

정확히는 피보나치 수열이 주기가 있는게 아니고, 이론은 다음과 같습니다.

> 피보나치 수열을 어떤 자연수 k로 나눈 나머지로 이루어진 수열은 주기를 가진다.

이 주기를 **피사노 주기**라 부릅니다. 예를 들어 

> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

이와 같은 피보나치 수열을 2로 나눈 나머지로 이루어진 수열은 다음과 같습니다.

> 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, ...

수열을 살펴보면 0, 1, 1 이 반복되는 걸 볼 수 있습니다.

<br>

이 성질이 k가 어떤 수이든 간에 성립한다니까 증명을 찾아봤는데...

이 증명을 이해하려면 미리 알아야 하는 수학 용어, 이론 등이 많습니다.

그거 다 공부하는데 시간이 많이 걸리기도 하고, 

이걸 수학 상식같이 이해하고 있다는 것도 (저에겐)말이 안되는 것 같습니다.

(저는 천재가 아니기에... 궁금하신 분은 [여기](https://en.wikipedia.org/wiki/Pisano_period)로)

그렇다고 이유도 모른채(증명도 못하면서) 

'해보니까 주기가 있네?'라고 사용하는 것도 제 스타일은 아닙니다.

일단 이런게 있구나 정도로 알아두고 코드 함 짜보고 다른 방법을 알아보겠습니다.

~~~ java
import java.util.Scanner;
public class Main {
	public static void main(String[]v){
		long n = new Scanner(System.in).nextLong();
		int f0=0, f1=1, f2=1, d=1000000, repeat=0;
		for(int i=2; i<=n; i++){
			f2 = (f1+f0)%d;
			if(f2%d==1 && f1%d==0){
				repeat = i-1;
				break;
			}
			f0 = f1;
			f1 = f2;
		}
		if(repeat>0){
			int newN = (int)(n%repeat);
			f0=0;
			f1=1;
			f2=1;
			for(int i=2; i<=newN; i++){
				f2 = (f1+f0)%d;
				f0 = f1;
				f1 = f2;
			}	
		}
		System.out.print(f2);
	}
}
~~~

첫번째 for문에서 주기를 구해서 repeat에 저장합니다.

피보나치 수열의 처음은 0, 1 로 시작하기에

0, 1로 시작되는 곳이 있는지 탐색하는 방식입니다.

<br>
<hr>
<br>

## 문제 3

<br>

<span style="color:blue">백준 저지 11444 문제</span>

2749문제와 거의 같은 문제입니다.

n번째 피보나치 수를 1,000,000,007 으로 나눈 나머지를 출력하는 문제입니다.

n은 1,000,000,000,000,000,000 이하의 자연수입니다.

<br>

문제2와 다른점은 피보나치 수를 나눠주는 수가 

1000000에서 1000000007로 커졌다는 것입니다.

해보면 알겠지만, 나눠주는 수가 커지면 그만큼 주기의 cycle도 커집니다.

실제로 1000000 일때 피사노 주기의 cycle은 1,500,000입니다.

하지만 1000000007 일때 피사노 주기의 cycle은 2,000,000,016 이라고 합니다.

일단 주기를 알아내려면 해당 cycle길이만큼은 피보나치 계산을 해야합니다.

f(1500000)은 비교적 빨리 구할 수 있지만, f(2000000016)은 오래 걸립니다.

그렇다면 피사노 주기 말고 다른 방법을 알아봐야합니다.

<br>

### 행렬(matrix) 이용

<br>

행렬을 이용한 방법입니다.

일단 피보나치 수열의 점화식인

> $f(n) = f(n-1)+f(n-2), \; where \; n>1$

를 조금 변형합니다. 다음과 같이!

> $f(n+2) = f(n+1)+f(n)$ <br>
$f(n+1) = f(n+1)$

이걸 행렬로 나타내면 다음과 같습니다.

>$$
    \begin{pmatrix}
    f(n+2) \\
    f(n+1) \\
    \end{pmatrix}
    =
    \begin{pmatrix}
    1 & 1 \\
    1 & 0 \\
    \end{pmatrix}
    \begin{pmatrix}
    f(n+1) \\
    f(n) \\
    \end{pmatrix}
$$

우변에 f(n+1) f(n)도 풀어서 써보면

>$$
    \begin{pmatrix}
    f(n+2) \\
    f(n+1) \\
    \end{pmatrix}
    =
    \begin{pmatrix}
    1 & 1 \\
    1 & 0 \\
    \end{pmatrix}
    \begin{pmatrix}
    f(n+1) \\
    f(n) \\
    \end{pmatrix}
$$<br><br>
$$
    \;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;=
    \begin{pmatrix}
    1 & 1 \\
    1 & 0 \\
    \end{pmatrix}
    \begin{pmatrix}
    1 & 1 \\
    1 & 0 \\
    \end{pmatrix}
    \begin{pmatrix}
    f(n) \\
    f(n-1) \\
    \end{pmatrix}
$$<br><br>
$$
    \;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;=
    \begin{pmatrix}
    1 & 1 \\
    1 & 0 \\
    \end{pmatrix}^2
    \begin{pmatrix}
    f(n) \\
    f(n-1) \\
    \end{pmatrix}
$$

이걸 우변의 피보나치 값이 f(2) f(1)이 될때까지 반복하면 다음과 같은 식이 나옵니다.

>$$
    \begin{pmatrix}
    f(n+2) \\
    f(n+1) \\
    \end{pmatrix}
    =
    \begin{pmatrix}
    1 & 1 \\
    1 & 0 \\
    \end{pmatrix}^n
    \begin{pmatrix}
    f(2) \\
    f(1) \\
    \end{pmatrix}
$$

만약 다음과 같다면

>$$
    \begin{pmatrix}
    1 & 1 \\
    1 & 0 \\
    \end{pmatrix}^n
    =
    \begin{pmatrix}
    a & b \\
    c & d \\
    \end{pmatrix}
$$

정리하면

>$$
    \begin{pmatrix}
    f(n+2) \\
    f(n+1) \\
    \end{pmatrix}
    =
    \begin{pmatrix}
    a & b \\
    c & d \\
    \end{pmatrix}
    \begin{pmatrix}
    f(2) \\
    f(1) \\
    \end{pmatrix}
$$<br><br>
$$
    \;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;=
    \begin{pmatrix}
    af(2)+bf(1) \\
    cf(2)+df(1) \\
    \end{pmatrix}
$$<br><br>
$$
    \;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;=
    \begin{pmatrix}
    a \cdot 1 + b \cdot 1 \\
    c \cdot 1 + d \cdot 1 \\
    \end{pmatrix}
$$<br><br>
$$
    \;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;=
    \begin{pmatrix}
    a + b \\
    c + d \\
    \end{pmatrix}
$$

여기서 행렬의 제곱수를 구할때는 [이전 포스팅](https://onsil-thegreenhouse.github.io/programming/problem/2018/03/29/problem_math_power/)에서 설명했듯이,

복잡도가 $O(log_2 n)$ 입니다.

즉, f(2000000016)을 구한다고 하면

DP로 풀면 2000000016번 연산을 해야하는 반면

행렬 방법을 사용하면 $log_2 2000000016 \approx 31$, 즉 31번 연산만에 끝납니다.

제 코드 입니다.

<br>

~~~ java
import java.util.Scanner;

public class Main {
	static long mod = 1000000007;
	public static void main(String[] ar){
		Scanner sc = new Scanner(System.in);
		long n = sc.nextLong()-1;
		long originalN = n+1;
		
		
		long[][] matrix = { {1, 1}, {1, 0} };
		long[][] ansMatrix = { {1, 0}, {0, 1} };

		while(n>0){
			if(n%2==1) ansMatrix = matrixMultiply(ansMatrix, matrix);
			matrix = matrixMultiply(matrix, matrix);
			n/=2;
		}
		if(originalN<3){
			System.out.print(1);
		}else{
			System.out.print((ansMatrix[1][0]+ansMatrix[1][1])%mod);
		}
	}
	
	public static long[][] matrixMultiply(long[][] matrix1, long[][] matrix2){
		int m1 = matrix1.length;
		int n1 = matrix1[0].length;
		int m2 = matrix2.length;
		int n2 = matrix2[0].length;
		long[][] temp = new long[m1][n2];
		
		for(int i=0; i<m1; i++){
			for(int j=0; j<n2; j++){
				for(int k=0; k<n1; k++){
					temp[i][j] += matrix1[i][k]*matrix2[k][j];
				}
				temp[i][j]%=mod;
			}
		}
		return temp;
	}
}
~~~

ansMatrix는 기본 행렬인

>$$
    \begin{pmatrix}
    1 & 0 \\
    0 & 1 \\
    \end{pmatrix}
$$

입니다. 여기서는 위의 식에서 n값을 조금 변경하여 다음과 같이 사용했습니다.

>$$
    \begin{pmatrix}
    f(n+1) \\
    f(n) \\
    \end{pmatrix}
    =
    \begin{pmatrix}
    1 & 1 \\
    1 & 0 \\
    \end{pmatrix}^{n-1}
    \begin{pmatrix}
    f(2) \\
    f(1) \\
    \end{pmatrix}
$$

이 식을 사용하면 f(n)값을 구하는데 행렬곱셉은 n-1번만 하면 되므로,

n을 입력 받을 때 1을 빼줬습니다.
