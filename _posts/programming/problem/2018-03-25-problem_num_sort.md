---
layout: post
title:  "[Problem] 숫자 정렬"
date:   2018-03-25 10:00:00
description: 빠르고 간단한 숫자 정렬 방법
categories:
- programming
- problem
banner_image: /programming/algorithm/algorithm-logo.jpg
comments: true
---

빠르고 간단한 숫자 정렬 방법

---

## 문제

<br>

입력값은 다음과 같습니다.

> $$N \; a_1 \; a_2 \; a_3 \; ... \; a_N$$

여기서 N은 정렬해야 할 숫자의 개수이고, 뒤에 나온 N개의 숫자들은 오름차순으로 정렬해야 할 숫자들입니다.

이때 N개의 숫자들은 중복이 없고, $$-1000000 \le a_i \le 1000000$$ 의 범위를 갖습니다. 

예를 들어 입력값이

> 5 5 1 3 2 4

라고 한다면 출력값은 12345가 되야 합니다.

<br>
<hr>
<br>

## 어떤 정렬 알고리즘도 사용하지 않는다!

<br>

정렬해야 할 숫자의 범위가 음수도 있으므로,

음수용 배열, 양수용 배열 을 만들어줍니다.

~~~ java
int[] negative = new int[1000001];
int[] positive = new int[1000001];
~~~

-1000000이나 1000000까지 저장하려면 배열의 크기를 1000001로 만들어야합니다.

정렬해야할 숫자를 순서대로 읽습니다.

만약 입력값이 

>3 2 0 -5

라고 하면 정렬해야 할 숫자는 2, 0, -5가 되고, 이를 순서대로 읽습니다.

<br>

현재 배열을 만들기만 했으므로, 모든 배열의 요소들의 값은 0입니다.

먼저 2를 읽고 양수이므로 positive[2]++ 로 저장합니다.

다음 0을 읽고 양수(음수가 아니면 양수로 간주)므로 positive[0]++ 로 저장합니다.

다음 -5를 읽고 음수므로 negative[-1\*-5]++ 로 저장합니다.


이제 배열을 읽고 순서대로 출력만 하면 됩니다.

먼저 음수가 더 작으므로 negative 부터 읽습니다.

다만 negative는 negative[1000000]부터 시작해서 negative[1]까지 읽어야합니다.

뒤에 있는 요소일수록 더 작을 것이기 때문입니다.

~~~ java
for(int i=1000000; i>0; i--){
	if(negative[i] > 0) System.out.print(-1*i);
}
~~~

다음 양수도 같은 방식으로 읽는데, positive는

positive[0]부터 시작해서 positive[1000000]까지 읽습니다.

앞에 있는 요소일수록 더 작을 것이기 때문입니다.

~~~ java
for(int i=0; i<1000001; i++){
	if(positive[i] > 0) System.out.print(i);
}
~~~

<br>
<hr>
<br>

## 응용

<br>

문제에서는 정렬해야할 숫자가 중복이 없다고 했지만,

만약에 중복된 숫자도 나온다면?

그땐 출력을 조금만 바꿔주면 됩니다. 

예를 들어서 negative를 출력한다면

~~~ java
for(int i=1000000; i>0; i--){
	for(int j=0; j<negative[i]){
		System.out.print(-1*i);
	}
}
~~~

<br>
<hr>
<br>

## 코드

<br>

~~~ java
import java.util.Scanner;

public class P2751_2 {
    public static void main(String[] ar){
        Scanner sc = new Scanner(System.in);
        int count = sc.nextInt();

        int[] negative = new int[1000001];
        int[] positive = new int[1000001];

        for(int i=0; i<count; i++){
            int temp = sc.nextInt();
            if(temp<0) negative[-1*temp] = temp;
            else positive[temp] = 1;
        }

        StringBuilder sb = new StringBuilder();
        for(int i=1000000; i>0; i--){
            if(negative[i]<0) sb.append(negative[i]+"\n");
        }
        for(int i=0; i<1000001; i++){
            if(positive[i]>0) sb.append(i+"\n");
        }
        System.out.print(sb);
    }
}
~~~

일단 정렬해야할 숫자가 중복이 없는 문제이기 때문에

positive[i]++ 대신 positive[i]=1 이라고 썻습니다.

큰 상관 없습니다.

또한 자바에선 System.out.print()가 속도가 느리므로 for문마다 쓰면 속도가 느려집니다.

그래서 StringBuilder 객체를 만들어서

거기다 출력할 숫자를 다 저장하고 한번에 출력하고 있습니다.

그걸 제외하곤 위의 설명과 같습니다.

<br>
<hr>
<br>

## 솔직한 생각

<br>

개발 경험이 적어서 그런지 모르겠지만, 이런 코드를 처음 봤습니다.

처음 딱 봤을 때 느낌은...

![sheep_a_chi](https://lh3.googleusercontent.com/Q_xREjy5MZfyxKvrhLWCUvNcXnW6UTo1X2MSxpvA-I4XaQx18i3kg2_maxOFWy8Lpv0tVUXxt2_CahDjNAogmNktBFQG8wsfaiLN0tn2Wg1wOE0EKGuIBMlcJogx8HbjgS3mKdNjiwlKUeG6nqgzwIUc9QM1NIjvCjjcrJt4EQ7rOY77iuYQzIrznMruoAB82UEb7iIW78yy4fMohbdDGdrCOcT-7LunZKvelQcKqZaWZvZqj_8m0HNncJfUUl8EvFFeFyNUQd0XVzrygCYEzu4xQp0ZMgEkx-16AXi1zmWxQlKp86h8wim2g3DdG2LxjH9pwlSFxvmByTDEARUdeMOTVNAsAO6WQOevAHFrOW6kBmvIqWbtFMDT7SjDs4Nj-tNb4IQnwoyHu1xQ5SLoHh-JPkpFTlxW196qSMzOXZi4VVJs5pozSMJyb_j2_jHgF39mh18nQcGrE_D6c2rYExjQsfnin3xg13BszawkQ_2gg7rbwGCgb5q930qck-Tk3yCAvjCtcTGZQestf87lhuvxnS9WK6j7Il8W89wdmq6a8qEqPpB0d-X3NWMrESNbqGGUjCFwdmTxSYMteGVlKundpNpIl4yVeyJNZ4E=w700-h378-no)

'레알 양아치처럼 풀었다...'

'잔머리 보소...'

물론 정렬해야할 숫자의 양이 적고, 숫자의 크기 범위만 클 때는

쓸데없는 메모리 낭비일수도 있지만... 문제 풀때는 꽤 좋은 방법인거 같습니다.

속도도 빠르고...