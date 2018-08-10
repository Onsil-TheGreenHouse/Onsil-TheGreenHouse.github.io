---
layout: post
title:  "[Problem] 비트 연산자를 이용한 부분집합 구하기"
date:   2018-02-26 13:50:00
description: 비트 연산자를 이용한 부분집합 구하기
categories:
- programming
- problem
banner_image: /programming/algorithm/algorithm-logo.jpg
comments: true
---

비트 연산자를 이용한 부분집합 구하기

---

## 문제

<br>

다음과 같은 집합이 있습니다.

**data = {1, 10, 3, -3, -10}**

이 집합의 부분 집합 중, 요소의 합이 0인 부분 집합을 구하는 문제입니다.

정답부터 써보자면

[3, -3], [10, -10], [10, 3, -3, -10]

이렇게 3개의 부분집합 입니다.

<br>

그럼 프로그래밍으론 이 문제를 어떻게 해결할 수 있을까요?

모든 부분집합을 구해서 요소의 합을 구해야 겠죠.

부분집합을 구하려면 

data[0]을 포함할 때, 포함안할 때.

data[1]을 포함할 때, 포함안할 때.

...

그럼 정말 직관적으로 코딩을 한다면 다음과 같이 작성할 수 있습니다.

~~~ java
int[] data = {1, 10, 3, -3, -10}
int sum = 0;

// containCheck[n]==0 이면 data[n]값 미포함
// containCheck[n]==1 이면 data[n]값 포함
// 만약 containCheck가 {1, 1, 0, 0, 0} 이라면,
// 이때 만들어지는 부분집합은 {1, 10}
int[] containCheck = {0, 0, 0, 0, 0}

for(int a=0; a<2; a++){
	containCheck[0] = a;

	for(int b=0; b<2; b++){
		containCheck[1] = b;

		for(int c=0; c<2; c++){
			containCheck[2] = c;

			for(int d=0; d<2; d++){
				containCheck[3] = d;

				for(int e=0; e<2; e++){
					containCheck[4] = e;
					//부분 집합의 요소의 합 구하기
					for(int f=0; f<5; f++){
						sum += data[f]*containCheck[f];
					}
					//부분 집합의 요소의 합이 0일 때, 해당 집합 출력하기
					if(sum==0){
						for(inf g=0; g<5; g++){
							System.out.print((data[g]*containCheck[g]) + " ");
						}
						System.out.println();
					}
				}
			}
		}
	}
}
~~~

집합 요소의 개수가 5개 이므로 5단 for문을 써야합니다.

물론 각각의 for문당 2번씩밖에 안도므로, 실제로 돌아가는 연산은 얼마 안되지만

만약 집합의 요소 개수가 100개라면?

100단 for문을 쓰는건 쫌 아닌거 같습니다.

<br>
<hr>
<br>

## 비트 연산자 활용하기

<br>

어차피 요소의 합이 0이 되는 부분집합을 구하려면

모든 부분집합을 탐색해봐야합니다.

data의 부분집합의 개수는 $$2^5$$ 입니다.

그런데 이렇게 센 부분집합에는 공집합도 포함되어 있습니다.

공집합에는 아무 요소도 없으므로 이를 빼고 생각해주어야겠죠.

즉, 우리가 탐색해야 할 부분집합의 개수는 $$2^5-1$$개 입니다.

<br>

그 부분집합들은 1번 부분집합부터 $$2^5-1$$번 부분집합까지 미리 구해놨다고 가정하겠습니다.

다른 방식으로 표현 하자면 우리는

1번 부분집합 ~ $$2^5-1$$번 부분집합까지 요소의 합을 검사해야한다는 것이고,

이를 2진법으로 표현 하자면

00001번 부분집합 ~ 11111번 부분집합까지 검사를 해야합니다.

이때 다섯자리 2진법 숫자($$X_0 X_1 X_2 X_3 X_4$$)를 이렇게 생각합니다.

$$X_i$$가 0이면 data[i]를 부분집합에 안포함 시킨다는 것이고,

$$X_i$$가 1이몀 data[i]를 부분집합에 포함 시키는 겁니다.

즉, 00001번 부분집합은 실제로 {-10}이 되는 것이고

01001번 부분집합은 {10, -10}이 되는 것입니다.

<br>

이렇게 생각하고 00001~11111 까지 for문을 돌리면

한번의 for문으로 모든 부분집합을 검사할 수 있을 것입니다.

이렇게 for문을 쓰려면 비트 연산자를 알아야합니다.

여기서는 <<와 &를 씁니다.

~~~ java
public class BitOperation {
    public static void main(String[] ar){
        int a = 1;
        a = a << 2;
        System.out.println("a : " + a);
        System.out.println("a : " + Integer.toBinaryString(a));

        int b = 6;
        System.out.println("b : " + Integer.toBinaryString(b));

        int c = a & b;
        System.out.println("c : " + Integer.toBinaryString(c));

//        a : 4
//        a : 100
//        b : 110
//        c : 100
    }
}
~~~

<<는 비트를 해당 숫자만큼 왼쪽으로 밀고, 새로 생겨나는 부분은 0으로 채웁니다.

a<<2는 1<<2와 같은데 이진법으로 표현하면

001 을 왼쪽으로 2번 밀어서 100이 된것입니다.

즉, b = 1 << a 를 한다면 

$$b=1*2^a$$이 되는 것이죠. 즉, 2의 거듭제곱 값을 만들 수 있습니다.

<br>

&는 둘다 1일때만 1을 리턴하는 연산자입니다.

a&b를 보면 100&110으로 두 숫자 모두 0번째 자리만 둘다 1이고 나머지는 둘다 1이 아닙니다.

그래서 연산결과는 0번째 자리만 1이 되고 1번째, 2번째는 0이 되는 100이 됩니다.

<br>

이 연산자를 이용한 예제를 살펴보겠습니다.

~~~ java
import java.util.Random;
import java.util.ArrayList;

public class BitOpertaionSubset {
    public static void main(String[] ar){
        BitOpertaionSubset ex = new BitOpertaionSubset();
        Random rand = new Random();

        int arrayLength = 5;
        int[] intArray = new int[arrayLength];

        int temp;
        boolean dupCheck = false;
        for(int index=0; index<arrayLength; index++){
            do{
                temp = rand.nextInt(21) - 10;
                //중복된 숫자 있는지 체크
                dupCheck = false;
                for(int index2=0; index2<index; index2++){
                    if(intArray[index2] == temp){
                        dupCheck = true;
                        break;
                    }
                }
            }while(dupCheck);

            intArray[index] = temp;
        }

        System.out.print("intArray => ");
        ex.printArray(intArray);
        ex.calcSumZero(intArray, arrayLength);
    }

    public void calcSumZero(int[] inputArray, int inputArrayLength){
        int sum;
        ArrayList<Integer> subset = new ArrayList();
        int numSubset = 1 << inputArrayLength;

        for(int i=1; i<numSubset; i++){
            sum = 0;
            subset.clear();
            for(int j=0; j<inputArrayLength; j++){
                if((i & (1 << j)) != 0){
                    sum += inputArray[inputArrayLength-1-j];
                    subset.add(inputArray[inputArrayLength-1-j]);
                }
            }

            if(sum == 0){
                System.out.println(subset);
            }
        }
    }

    public void printArray(int[] array){
        for(int item: array){
            System.out.print(item + " ");
        }
        System.out.println();
    }
}

//intArray => -9 6 5 9 3
//[9, -9]
//[3, 6, -9]
~~~

-10~10 사이의 랜덤 숫자로

크기 5개의 배열을 만들고 있습니다.

알고리즘은 calcSumZero()를 보면 됩니다.

numSubset을 보면 비트연산자를 이용해 부분집합의 갯수를 구했고,

이를 for문에서 사용하고 있습니다.

<br>

또한 두번째 for문을 보면 (i & (1 << j)) != 0 이 나오는데요,

i = 01001 일때를 예로 들어보겠습니다.

그럼 data[1]과 data[4]값을 부분집합의 요소로 포함시킨다는 건데

이를 어떻게 확인할까요?

j값은 0~4이고 만약 

j==1이라면 

1 << j 는 1 << 1이 되서 00010이 되는 것이고

i & (1 << j) 은 01001 & 00010 으로 00000되죠

결과값의 모든값이 0이므로 아무일도 일어나지 않습니다.

<br>

j==3라면

1 << j 는 1 << 3가 되서 01000이 되는 것이고

i & ( 1 << j) 는 01001 & 01000 으로 01000이 됩니다.

결과값의 1번째 자리수가 1이므로 data[1]이 부분집합에 포함됨을 알 수 있습니다.

즉, 01001에서 첫번째 자리에 1이 있다는 것을 알아낸 셈이죠.

그리고 j==3일 때 1번째 요소가 들어가는, 즉 3+1==4 임을 감안해서

~~~ java
sum += inputArray[inputArrayLength-1-j];
subset.add(inputArray[inputArrayLength-1-j]);
~~~

와 같이 조정해서 요소값을 얻어내었습니다.

<br>

이런식으로 01001에 1번째, 4번째자리에 1이 있는지 알아내고,

이에 해당하는 부분집합의 합을 구해서 0이 되는지를 확인하는 방식입니다.

