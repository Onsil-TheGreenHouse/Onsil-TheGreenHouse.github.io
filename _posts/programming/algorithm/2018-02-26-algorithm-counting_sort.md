---
layout: post
title:  "[Algorithm] Counting Sort"
date:   2018-02-26 03:00:00
description: Counting Sort
categories:
- programming
- algorithm
banner_image: /programming/algorithm/algorithm-logo.jpg
comments: true
---

Counting Sort

---

## Counting Sort

<br>

숫자로 된 배열을 오름차순으로 정렬하는 알고리즘입니다.

다만 숫자는 정수여야만 적용 가능합니다.

이 알고리즘의 또 다른 특징은 대부분의 정렬 알고리즘과는 달리

비교환 알고리즘이라는 것입니다.

예를 들어 bubble sort는 두 숫자를 크기비교 후, 교환하는 방식이였죠.

<br>

**{0, 4, 1, 3, 1, 2, 4, 1}**을 Counting sort를 통해 정렬해보겠습니다.

위의 배열의 이름을 data라고 하겠습니다.

먼저 배열에 들어있는 숫자 중에서 최대값을 찾고 k라 하겠습니다.

여기서는 k == 4 가 되겠죠.

사실 k는 최대값보다 큰 숫자 아무거나 사용해도 정렬이 되긴하지만,

최대값에 가깝게 설정할수록 적은 연산으로 정렬됩니다.

<br>

(k+1)크기의 배열 temp를 설정합니다. 여기서는 크기가 5인 배열입니다.

temp의 n번째 자리에는 data배열에서 숫자 n의 갯수가 들어갑니다.

여기서는

temp[0] = 1, temp[1] = 3, temp[2] = 1, temp[3] = 1, temp[4] = 2

즉 temp = {1, 3, 1, 1, 2} 가 됩니다.

왜 가장 큰 숫자를 구하고 그보다 1 큰 크기의 배열을 만들어야 하는지 아시겠죠.

<br>

이제 temp 배열을 조금 가공해줘야 합니다.

n == 1 부터 시작해서 4까지

temp[n] = temp[n] + temp[n-1], where $$0 \lt n \le k $$

같은 방식으로 바꿔줍니다.

여기서는

temp[1] = temp[1] + temp[0], 즉 temp[1] == 4

temp[2] = temp[2] + temp[1], 즉 temp[2] == 5

...

이런식으로 가공하면 temp배열은 {1, 4, 5, 6, 8}이 됩니다.

이렇게 가공을 한 목적을 알아야겠죠.

예를 들어서 **temp[1]**을 뜻하는 바를 알아보겠습니다.

data배열은 숫자가 8개밖에 안되니까 우리가 그냥 눈으로도 정렬할 수 있긴합니다.

그렇게 오름차순으로 정렬하면 {0, 1, 1, 1, 2, 3, 4, 4}가 됩니다.

숫자 1이 끝나는 지점이 3번째이죠.(0번째 부터 시작하므로)

**temp[1] == 4 가 의미하는 바는 1이란 숫자는 (4-1)번째 자리에서 끝난다**

를 의미합니다.

<br>

즉, 우리는 {1, 4, 5, 6, 8}만 보고도 data배열을 정렬할 수 있는 것입니다.

data배열을 오름차순으로 정렬한 배열을 sorted라 하고 현재 다 비어있는 상태라고 가정하겠습니다.

즉, sorted = {null, null, null, null, null, null, null, null}입니다.

temp[0] == 1 이고

숫자 0은 (1-1)번째 자리에서 끝나므로, sorted = {0, null, null, null, null, null, null, null}

숫자 1은 숫자 0다음부터 시작하고, (4-1)번째 자리에서 끝나므로, sorted = {0, 1, 1, 1, null, null, null, null}

숫자 2는 숫자 1다음부터 시작하고, (5-1)번째 자리에서 끝나므로, sorted = {0, 1, 1, 1, 2, null, null, null}

숫자 3은 숫자 2다음부터 시작하고, (6-1)번째 자리에서 끝나므로, sorted = {0, 1, 1, 1, 2, 3, null, null}

숫자 4는 숫자 3다음부터 시작하고, (8-1)번째 자리에서 끝나므로, sorted = {0, 1, 1, 1, 2, 3, 4, 4}

이렇게 정렬이 끝났습니다.

<br>

이 과정을 코드로 표현할 때는 다음과 같이 진행합니다.

temp가 {1, 4, 5, 6, 8} 인걸 구한 다음,

data배열의 뒤 숫자부터 계산을 시작합니다.

data배열의 맨 뒤 숫자는 1이고 temp[1]은 4입니다.

그럼 temp[1]을 3으로 조정한 후(1을 뺀 후), sorted[3]에 1을 대입합니다.

이 과정을 배열의 모든 요소에 대해서 진행하면 됩니다. 

<br>
<hr>
<br>

## 복잡도(Time Complexity)

<br>

data 배열의 크기는 n이라 하고, 

temp 배열의 크기를 k라 하겠습니다.

일단 처음에 data 배열을 돌면서 각 숫자의 갯수를 세야하므로 n번 돌아야합니다.

그 다음, temp 배열을 돌면서 각 숫자의 갯수값을 넣어야하므로 k번 돌아야합니다.

즉, $$O(n+k)$$ 가 되는 것이죠.

그래서 k의 값을 최대값에 최대한 가깝게 설정하는게 좋다고 한 것입니다.

bubble sort의 복잡도는 $$O(n^2)$$ 이므로, counting sort가 더 좋아보일 수도 있지만,

$$n+k \gt n^2$$ 인 경우에는 차라리 bubble sort로 정렬하는게 더 낫습니다.

<br>

극단적인 예를 들어 n == 10인데 k == 10000이면

버블소트 복잡도는 O(100)인데 카운팅소트 복잡도는 O(10010)이 되므로

k값을 다시 설정할 수 있으면 다시 설정하고, 아니면

다른 정렬 알고리즘을 쓰는게 나을 것입니다.

<br>
<hr>
<br>

## 예제 코드

<br>

>CountingSort.java

~~~ java
import java.util.Random;

public class CountingSort {
    public static void main(String[] ar){
        CountingSort ex = new CountingSort();

        int arraySize = 8;
        Random rand = new Random();
        int[] intArray = new int[arraySize];
        //배열에 값 설정
        for(int loop=0; loop<arraySize; loop++){
            intArray[loop] = rand.nextInt(10)+1;
        }

        System.out.print("New array => ");
        ex.printArray(intArray);

        System.out.println();
        System.out.println("sorting process START!!!");
        ex.doCountingSort(intArray);
    }

    public void doCountingSort(int[] inputArray){
        int inputArrayLength = inputArray.length;
        int[] counts = new int[11];
        int[] sortedArray = new int[inputArrayLength];

        // count 배열 생성
        for(int item: inputArray){
            counts[item]++;
        }
        System.out.print("counts => ");
        printArray(counts);

        // count 배열 작업
        for(int loop=1; loop<11; loop++){
            counts[loop] += counts[loop-1];
        }
        System.out.print("processed counts => ");
        printArray(counts);

        System.out.println("==========================");

        for(int loop=inputArrayLength-1; loop>=0; loop--){
            System.out.println((inputArrayLength-loop) + "th sorting process");
            sortedArray[counts[inputArray[loop]]-1] = inputArray[loop];
            counts[inputArray[loop]] -= 1;

            System.out.print("sortedArray => ");
            printArray(sortedArray);
            System.out.print("counts => ");
            printArray(counts);
            System.out.println();
        }

    }

    public void printArray(int[] inputArray){
        for(int item: inputArray){
            System.out.print(item + " ");
        }
        System.out.println();
    }


}
//New array => 2 5 3 3 5 5 8 1
//
//sorting process START!!!
//counts => 0 1 1 2 0 3 0 0 1 0 0
//processed counts => 0 1 2 4 4 7 7 7 8 8 8
//==========================
//1th sorting process
//sortedArray => 1 0 0 0 0 0 0 0
//counts => 0 0 2 4 4 7 7 7 8 8 8
//
//2th sorting process
//sortedArray => 1 0 0 0 0 0 0 8
//counts => 0 0 2 4 4 7 7 7 7 8 8
//
//3th sorting process
//sortedArray => 1 0 0 0 0 0 5 8
//counts => 0 0 2 4 4 6 7 7 7 8 8
//
//4th sorting process
//sortedArray => 1 0 0 0 0 5 5 8
//counts => 0 0 2 4 4 5 7 7 7 8 8
//
//5th sorting process
//sortedArray => 1 0 0 3 0 5 5 8
//counts => 0 0 2 3 4 5 7 7 7 8 8
//
//6th sorting process
//sortedArray => 1 0 3 3 0 5 5 8
//counts => 0 0 2 2 4 5 7 7 7 8 8
//
//7th sorting process
//sortedArray => 1 0 3 3 5 5 5 8
//counts => 0 0 2 2 4 4 7 7 7 8 8
//
//8th sorting process
//sortedArray => 1 2 3 3 5 5 5 8
//counts => 0 0 1 2 4 4 7 7 7 8 8 
~~~