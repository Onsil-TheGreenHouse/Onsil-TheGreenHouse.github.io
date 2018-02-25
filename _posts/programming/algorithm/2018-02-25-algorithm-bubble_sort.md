---
layout: post
title:  "[Algorithm] Bubble Sort"
date:   2018-02-25 23:00:00
description: Bubble Sort
categories:
- programming
- algorithm
banner_image: /programming/algorithm/algorithm-logo.jpg
comments: true
---

Bubble Sort

---

## Bubble Sort

<br>

숫자로 된 배열을 오름차순이나 내림차순으로 정렬하는 알고리즘입니다.

방식은 간단합니다.

<br>

만약 **{22, 39, 33, 21, 31}** 이 배열을 정렬한다면

0번째 숫자(22)와 1번째 숫자(39)를 비교합니다.

22 < 39 이므로 뒤의 숫자가 더 크니 아무일도 일어나지 않습니다.

<br>

다음으로 1번째 숫자(39)와 2번째 숫자(33)을 비교합니다.

이번엔 39 > 33 으로 앞의 숫자가 더 크네요.

이럴 때는 39와 33의 자리를 바꿔줍니다. 그럼 배열은

{22, 33, 39, 21, 31} 이 되겠죠.

<br>

다음으로 2번째 숫자(39)와 3번째 숫자(21)을 비교합니다.

39 > 21 로 앞의 숫자가 더 크므로 이번에도 자리를 바꿔줍니다.

{22, 33, 21, 39, 31} 이 되겠죠.

<br>

다음으로 3번째 숫자(39)와 4번째 숫자(31)을 비교합니다.

39 > 31 로 앞의 숫자가 더 크므로 자리를 바꿔줍니다.

{22, 33, 21, 31, 39} 가 되겠죠.

<br>

이게 한번 로테이션입니다.

한번 로테이션 결과를 보면 **가장 큰 숫자가 맨 뒤로 갔음**을 알 수 있습니다.

두번째 로테이션에서는 맨 뒤로간 39를 제외하고 {22, 33, 21, 31} 사이에서

앞의 방법과 같은 방법으로 정렬을 해줍니다.

그럼 두번째 로테이션에서 가장 마지막으로 가는 숫자는 33이 되겠죠.

<br>

이런 식으로 각 로테이션 마다 가장 큰 숫자를 맨 뒤로 보내는 방식이

**Bubble Sort** 입니다.

이렇게 자리가 바뀌는 과정이 거품이 움직인거 같다나 뭐라나...

<br>
<hr>
<br>

## 복잡도(Time Complexity)

<br>

위에서 설명한 예를 사용하겠습니다.

5개의 숫자가 있습니다.

첫번째 로테이션에서 비교 연산은 

0번째숫자-1번째숫자, 1번째숫자-2번째숫자, 2번째숫자-3번째숫자, 3번째숫자-4번째숫자

이렇게 4번 일어났습니다.

<br>

두번째 로테이션에서 비교연산은

0번째숫자-1번째숫자, 1번째숫자-2번째숫자, 2번째숫자-3번째숫자

이렇게 3번 일어났습니다.

<br>

같은 방식으로

3번째 로테이션에선 2번, 4번째 로테이션에선 1번 일어났습니다.

즉, 5개의 숫자를 정렬하는데 (4+3+2+1)번의 연산이 일어났습니다.

<br>

그럼 만약 n개의 숫자를 정렬한다면 연산 횟수는

$$1+2+3+ \cdots + (n-1) = \sum_{i=0}^n i = \frac{n(n-1)}{2}$$

즉, $$O(n^2)$$ 입니다.

<br>
<hr>
<br>

## 예제 코드

<br>

> BubbleSort.java

~~~ java
import java.util.Random;

public class BubbleSort {
    public static void main(String[] ar){
        BubbleSort ex = new BubbleSort();

        int arraySize = 5;

        int[] intArray = new int[arraySize];
        Random rand = new Random();

        for(int loop=0; loop<arraySize; loop++){
            intArray[loop] = rand.nextInt(50) + 1;
        }

        System.out.print("New array => ");

        ex.printArray(intArray);
        System.out.println();
        System.out.println("Bubble sort START!!!");
        ex.printArray(intArray);
        ex.doBubbleSort(intArray);
    }

    public void doBubbleSort(int[] inputArray){
        int[] array = inputArray;
        int arraySize = array.length;
        int temp;

        for(int loop=0; loop<arraySize-1; loop++){
            System.out.println((loop+1) + "th sorting process");
            for(int loop2=0; loop2<arraySize-loop-1; loop2++){

                if(array[loop2] > array[loop2+1]){
                    temp = array[loop2];
                    array[loop2] = array[loop2+1];
                    array[loop2+1] = temp;

                    // array 출력
                    printArray(array);
                }


            }

        }
    }

    public void printArray(int[] inputArray){
        for(int item: inputArray){
            System.out.print(item + " ");
        }
        System.out.println();
    }
}

//New array => 26 46 20 15 14
//
//    Bubble sort START!!!
//    26 46 20 15 14
//    1th sorting process
//    26 20 46 15 14
//    26 20 15 46 14
//    26 20 15 14 46
//    2th sorting process
//    20 26 15 14 46
//    20 15 26 14 46
//    20 15 14 26 46
//    3th sorting process
//    15 20 14 26 46
//    15 14 20 26 46
//    4th sorting process
//    14 15 20 26 46 
~~~

가장 밑에 주석으로 쓴 부분이 출력 결과(진행 과정)입니다.

1~50 사이의 숫자를 랜덤으로 받아 배열을 만들었고,

doBubbleSort()에서 버블소트를 진행하였습니다.

참고로 1st, 2nd, 3rd 인건 알지만,

그게 메인이 아니고, 그거까지 구현하면 코드가 지저분해질 것 같아서

대충 th로 통일하였습니다.