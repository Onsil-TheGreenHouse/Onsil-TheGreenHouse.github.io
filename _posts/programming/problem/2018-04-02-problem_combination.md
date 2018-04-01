---
layout: post
title:  "[Problem] 이항계수 구하기(백준 11401번)"
date:   2018-04-02 05:00:00
description: 확장 유클리드 알고리즘, 페르마의 소정리로 이항계수 구하기
categories:
- programming
- problem
banner_image: /programming/algorithm/algorithm-logo.jpg
comments: true
---

확장 유클리드 알고리즘, 페르마의 소정리로 이항계수 구하기

---

## <span style="color:blue">문제</span>

<br>

<span style="color:green">백준 저지 11401번</span>

<br>

자연수 N과 정수 K가 주어졌을 때, 이항 계수 $_NC_K$를 구하고

그 수를 1,000,000,007 로 나눈 나머지를 구하는 문제입니다.

여기서 범위는

$1 \le N \le 4,000,000\;, \;\; 0 \le K \le N$

입니다.

<br>

예를 들어 입력이 다음과 같다면,

>5 2

출력은 다음과 같아야합니다.

>10

<br>
<hr>
<br>

## <span style="color:blue">접근</span>

<br>

$_NC_K$를 구하는 방법은 여러가지가 있습니다.

먼저 $_NC_K$의 정의를 이용하는 방법이 있습니다.

>$_NC_K = \frac{N!}{K!(N-K)!}$

이 방법은 숫자가 적을 때 사용할 수 있습니다.

하지만 이 문제와 같이 N이 4,000,000과 같은 큰 숫자 이면

다 계산 해주고 1,000,000,007로 나눠줘야 합니다.

분수꼴이기 때문에 p=1,000,000,007이라 했을 때,

$\frac{N!}{K!(N-K)!} \% p$

를 분자, 분모에 나눠서 적용하지 못하기 때문입니다.

<br>

다른 방법으론 고등학교 때 배우는 이항계수 공식을 활용하는 것입니다.

>$$_NC_K = _{N-1}C_K + _{N-1}C_{K-1}$$

이 공식을 활용해서 Recursive하게 코드를 작성할 수 있습니다.

하지만 이 방법을 보면 N값 하나를 구하는데 N-1 값을 두개 연산해야합니다.

즉, 복잡도가 $O(N^2)$입니다.

우리는 숫자가 매우 크기 때문에 더 빠른 방법이 필요합니다.

<br>

이제 더 빠르게 $_NC_K \% p$를 계산하는 방법을 볼텐데,

그 전에 식이 복잡하기 때문에 다음과 같이 간단히 나타내겠습니다.

>$N! = A, \;\; K!(N-K)! = B, \;\; p=1,000,000,007 $

즉, 우리가 구하고자 하는 것은

>($\frac{A}{B}) \% p = (AB^{-1}) \% p$

입니다.

참고로

>$(AB^{-1}) \% p \neq ((A\%p)(B^{-1}\%p))\%p$

와 같이 %p를 분배할 수 없습니다. 분수 꼴이기 때문이죠.

<br>
<hr>
<br>

## <span style="color:blue">확장 유클리드 알고리즘</span>

<br>

확장 유클리드 알고리즘에 대한 설명은 [여기](https://onsil-thegreenhouse.github.io/programming/algorithm/2018/04/02/gcd/)에 나와있습니다.

다시한번 우리가 구하고자 하는 항을 써보자면 다음과 같습니다.

>$(AB^{-1})\%p \tag i$

문제를 살펴보면 p값이 소수인걸 알 수 있습니다.

즉, B와 p는 서로소 관계입니다. 그럼 gcd는 1이고 다음과 같이 베주 항등식을 쓸 수 있습니다.

>$Bx+py = 1$

그리고 확장 유클리드 알고리즘을 통해 정수해 (x, y)를 구할 수 있죠.

저 항등식에 %p를 취해주면, 다음과 같습니다.

>$Bx \equiv 1 \pmod p \tag {ii}$

(i)를 조금 변형해준 뒤, 안에 (ii)를 대입할 수 있습니다.

>$(AB^{-1}) \% p$<br>
$ = (AB^{-1} \cdot 1) \% p$<br>
$ = (AB^{-1} \cdot Bx) \% p$<br>
$ = Ax \% p$

즉, 베주 항등식에서 구한 정수해 $x$와 A를 곱한값을 p로 나누면

우리가 구하고자 하는 식을 구할 수 있는 것입니다.

<br>

### 코드

<br>

~~~ java
import java.util.Scanner;

public class P11401 {
    static long x, y, gcd, temp;
    public static void main(String[] ar){
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int K = sc.nextInt();
        long p = 1000000007;

        long[] factorial = new long[N+1];
        factorial[0] = 1;
        factorial[1] = 1;
        // factorial 구하기
        for(int i=2; i<=N; i++) factorial[i] = (factorial[i-1]*i)%p;
        long denominator = (factorial[K]*factorial[N-K])%p;

        euclidean(p, denominator);
        long result = ((factorial[N]%p)*(y%p))%p;
        if(result<0) result += p;
        System.out.println(result);
    }

    public static void euclidean(long B, long p){
        if(B%p>0){
            euclidean(p, B%p);
            temp = y;
            y = x - (B/p)*y;
            x = temp;
        }else{
            x = 0;
            y = 1;
            gcd = p;
        }
    }
}
~~~

여기서 몇가지 주의할 점이 있습니다.

먼저 코드를 보면 euclidean(p, denominator)로 p를 먼저 쓰고 그 다음 B를 썻습니다.

제 코드에선 B를 계산할 때부터 %p 연산을 해줘서 항상 p가 더 크기 때문입니다.

그리고 result를 계산할 때, x대신 y를 사용하고 있습니다. 

denominator에 곱해지는 해는 y이기 때문이죠. 즉, 이 코드에서 푼 것은

>$px+By=1$

입니다.

<br>

그리고 한가지 더 주의할 사항은 result값이 음수가 나올 수 있습니다.

y값이 음수가 나올 수 있기 때문인데요, 이때는 result값에 p만 더해주면 됩니다.

그 이유는 다음과 같습니다.

예를 들어 컴퓨터는 (-99)%8 을 다음과 같이 계산합니다.

>$(-99)\%8 = (-99) + 8 \cdot 12 = -3$

하지만 실제로 맞게 계산한 것은

>$(-99)\%8 = (-99) + 8 \cdot 13 = 5$

입니다. 즉, 음수가 나왔다면 p를 더해서 옳은 값을 구할 수 있습니다.

<br>
<hr>
<br>

## <span style="color:blue">Fermat's little Theorem(페르마의 소정리)</span>

<br>

페르마의 소정리를 통해서도 이 문제를 풀 수 있습니다.

페르마의 소정리는 다음과 같습니다.

>p가 소수이고 a가 p가 서로소이면, $a^{p-1} \equiv 1 \pmod p$가 성립한다.

증명을 보고 넘어가겠습니다.

>다음과 같은 (p-1)개의 수를 생각합니다.<br><br>
$1a, 2a, \cdots, (p-1)a$<br><br>
먼저 **위 수들을 p로 나눈 나머지는 모두 다르다** 라는 명제를 증명하겠습니다.<br>
p로 나눈 나머지가 같은 두 수 sa, ta가 있다고 가정하겠습니다.<br>
여기서 s, t는 $0< s < t < p$인 정수입니다. 그렇다면 다음과 같이 나타낼 수 있습니다.<br><br>
$ta = Q_tp + r \;\; \cdots (i)$<br>
$sa = Q_sp + r \;\; \cdots (ii)$<br><br>
(i)-(ii)를 하면<br><br>
$(t-s)a = (Q_t-Q_s)p$<br><br>
즉, $(t-s)a$는 p를 약수로 가지고 있다는 말이 되는데<br>
$(t-s)<p$이고, a와 p는 서로소 관계이므로 모순입니다.<br>
즉, **위 수들을 p로 나눈 나머지는 모두 다르다** 라는 명제는 참입니다.<br><br>
이 말을 다르게 바꾸면, (p-1)개의 수가 모두 나머지가 다르므로,<br>
나머지는 1~(p-1)까지 있는 것입니다. 이를 식으로 나타내면 <br><br>
$1a \cdot 2a \cdot 3a \cdots (p-1)a \equiv 1 \cdot 2 \cdot 3 \cdots (p-1) \pmod p$<br>
$\Rightarrow (p-1)!a^{p-1} \equiv (p-1)! \pmod p$<br><br>
여기서 p와 (p-1)!는 서로소 이므로, 양변에서 (p-1)!를 나눠줄 수 있습니다. 즉,<br><br>
$a^{p-1} \equiv 1 \pmod p$

<br>

즉, 우리가 구하고자 하는 식을 다시 쓰면

>$(AB^{-1}) \% p$

인데, 페르마의 소정리에 의해서 다음과 같은 식이 나옵니다.

>$B^{p-1} \%p = 1$

즉, 첫번째 식을 변형한 후, 두번째 식을 대입하면

>$(AB^{-1}) \% p$<br>
$ = (AB^{-1}\cdot 1 ) \% p$<br>
$ = (AB^{-1} \cdot B^{p-1}) \% p$<br>
$ = (AB^{p-2}) \% p$<br>
$ = ((A \% p)(B^{p-2} \% p)) \% p$

즉, 분모에 있는 부분이여서 분배를 못해줬던 식을

분수대신 정수로 바꿔줌으로써 분배를 하고 풀 수 있게 되었습니다.

여기서 $B^{p-2}$은 이전에 포스팅 했던 거듭제곱 빨리하는 방법을 이용하여([참고](https://onsil-thegreenhouse.github.io/programming/problem/2018/03/29/problem_math_power/))

$O(log_2 n)$의 복잡도로 문제를 풀 수 있습니다.

<br>

## 코드

<br>

~~~ java
import java.util.Scanner;

public class P11401_2 {
    public static void main(String[] ar){
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int K = sc.nextInt();
        long p = 1000000007;

        long[] factorial = new long[N+1];
        factorial[0] = 1;
        factorial[1] = 1;
        // factorial 구하기
        for(int i=2; i<=N; i++) factorial[i] = (factorial[i-1]*i)%p;
        long denominator = (factorial[K]*factorial[N-K])%p;

        // fermatNum(denominator의 K-2 제곱 구하기)
        long index = p-2;
        long fermatNum = 1;
        while(index > 0){
            if(index%2==1){
                fermatNum *= denominator;
                fermatNum %= p;
            }
            denominator = (denominator*denominator)%p;
            index /= 2;
        }
        long result = ((factorial[N]%p)*(fermatNum%p))%p;
        System.out.print(result);

    }
}
~~~


