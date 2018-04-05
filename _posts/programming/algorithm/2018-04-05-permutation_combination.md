---
layout: post
title:  "[Algorithm] 수열의 순열과 조합 출력하기(nPr, nCr)"
date:   2018-04-05 14:00:00
description: 수열의 nPr, nCr 출력하기
categories:
- programming
- algorithm
banner_image: /programming/algorithm/algorithm-logo.jpg
comments: true
---

수열의 nPr, nCr 출력하기

---

## <span style="color:blue">순열(nPr)과 조합(nCr)</span>

<br>

문제가 따로 있는건 아니고,

어떤 수열이 있으면 그 수열의 nPr에 해당하는 수열과, nCr에 해당하는 수열을 출력하려고 합니다.

간단하게 순열과 조합을 설명하겠습니다.

<br>

순열은 Permutation의 앞글자를 따서 P로 나타냅니다.

nPr의 의미는 n개의 숫자에서 r개를 뽑아 정렬하는 가짓수 입니다.

예를 들어 {1, 2, 3} 이란 수열이 있고, 여기서 두개를 뽑아 정렬하고자 합니다.

이때 n = 3, r = 2 입니다. 가짓수는 $_3P_2$가 됩니다.

가짓수를 출력해보면 다음과 같습니다.

>{1, 2}, {2, 1} <br>
{1, 3}, {3, 1} <br>
{2, 3}, {3, 2}

순서도 고려하므로 {1, 2}와 {2, 1}은 다르게 취급합니다.

<br>

조합은 Combination의 앞글자를 따서 C로 나타냅니다.

nCr의 의미는 n개의 숫자에서 r개를 뽑는 경우의 수 입니다.

그냥 뽑기만 하면 되서, 순서가 달라도 내용물이 같으면 같은 수열입니다.

예를 들어 {1, 2, 3} 이란 수열이 있고, 여기서 두개를 뽑는다면,

n = 3, r = 2 입니다. 경우의 수는 $_3C_2$ 입니다.

경우의 수를 출력해보면 다음과 같습니다.

>{1, 2} <br>
{1, 3} <br>
{2, 3}

위에서 구한 순열의 결과와 비교해보면

{1, 2}와 {2, 1}을 같다고 취급해서 {1, 2}만 써줬습니다.

뽑기만 하면 되는 것이기 때문에 순서는 상관이 없는 것입니다.

<br>
<hr>
<br>

## <span style="color:blue">조합 구현하기</span>

<br>

먼저 조합을 구해보겠습니다. 코드를 보며 설명하겠습니다.

~~~ java
public class Combination {
    public static void main(String[] ar){
        Combination ex = new Combination();
        int[] arr = { 1, 3, 5, 7, 9 };
        int n = arr.length;
        int r = 3;
        int[] combArr = new int[n];

        ex.doCombination(combArr, n, r, 0, 0, arr);
    }

    public void doCombination(int[] combArr, int n, int r, int index, int target, int[] arr){
        if(r == 0){
            for(int i=0; i<index; i++) System.out.print(arr[combArr[i]] + " ");
            System.out.println();
        }else if(target == n) return;
        else{
            combArr[index] = target;
            doCombination(combArr, n, r-1, index+1, target+1, arr); // (i)
            doCombination(combArr, n, r, index, target+1, arr); //(ii)
        }
    }
}
~~~

크기가 5인 수열 arr에서 r인 3개를 뽑는 경우는 출력하는 코드입니다.

원리는 arr[0]부터 arr[4]까지 돌며 뽑는 경우, 안뽑는 경우를 모두 조사합니다.

combArr은 빈 배열인데요, 뽑은 원소를 여기에 저장합니다.

(i) 코드가 arr[target] 원소를 뽑는 경우이고,

(ii) 코드가 arr[target] 원소를 안뽑는 경우입니다.

<br>

즉, 이렇게 매번 doCombination 메소드를 돌 때마다

arr[target]을 뽑는 경우, 안뽑는 경우를 모두 진행해 나갑니다.

그러다 끝이 나는 경우는 두가지가 있습니다.

<br>

첫번째는 다 뽑았을 때 입니다. 즉, r = 0 이 됩니다.

이때는 r개를 다 뽑았으니 출력만 해주면 됩니다.

<br>

두번째는 r개를 다 못뽑았는데 arr의 모든 원소를 다 검사했을 때 입니다.

r개를 다 못뽑았는데 arr의 끝까지 갔으므로 이런 경우는 실패이고

아무것도 안하고 끝납니다.

<br>
<hr>
<br>

## <span style="color:blue">순열 구현하기</span>

<br>

nPr을 구현하기 전에 nPn을 구현해보겠습니다.

즉, r = n 인거고, 수열 그 자체를 정렬한 모든 경우를 출력합니다.

~~~ java
public class Permutation {
    public static void main(String[] ar){
        Permutation ex = new Permutation();
        int[] arr = { 1, 2, 3, 4 };
        ex.doPermutation(arr, 0);
    }

    public void doPermutation(int[] arr, int startIdx){
        int length = arr.length;
        if(startIdx == length-1){
            for(int n: arr) System.out.print(n + " ");
            System.out.println();
            return;
        }

        for(int i=startIdx; i<length; i++){
            swap(arr, startIdx, i);
            doPermutation(arr, startIdx+1);
            swap(arr, startIdx, i);
        }
    }

    public void swap(int[] arr, int n1, int n2){
        int temp = arr[n1];
        arr[n1] = arr[n2];
        arr[n2] = temp;
    }
}
~~~

arr 배열 자체를 doPermutation() 메소드에서 정렬하는 코드입니다.

원리는 다음과 같습니다.

먼저 swap()을 통해 (startIdx)번째 자리의 수가 1일때, 2일때, 3일때, 4일때를 조사합니다.

(startIdx)번째 자리를 선택한 후, Recursive를 통해 (startIdx+1)번째 자리를 선택하고...

이게 반복되다 startIdx가 arr의 마지막 자리를 가리킬 때 끝이 납니다.

<br>

재귀함수 후에 다시 swap()으로 바꿔준 값을 원상복귀 해야합니다.

그래야 제대로 각 자리 수가 1일때, 2일때, 3일때, 4일때를 모두 조사할 수 있습니다.

<br>

이 코드를 이해했다면, nPr은 쉽습니다.

이 코드와 nCr을 합친게 nPr 출력 코드이기 때문입니다.

즉, 먼저 nCr을 통해 n개 중에 r개를 뽑은 후,

그 r개 수로 이루어진 수열을 doPermutation()으로 정렬해주면 됩니다.

~~~ java
public class Permutation2 {
    public static void main(String[] ar){
        Permutation2 ex = new Permutation2();
        int[] arr = { 1, 3, 5, 7, 9 };
        // nPr 구하기
        int n = arr.length;
        int r = 3;
        int[] combArr = new int[r];
        ex.doCombination(combArr, arr, n, r, 0, 0);
    }

    public void doCombination(int[] combArr, int[] arr, int n, int r, int index, int target){
        if(r == 0){
            //to-do: combArr permutation
            doPermutation(combArr, 0);
            System.out.println("------------------");
        }else if(target == n) return;
        else{
            combArr[index] = arr[target];
            doCombination(combArr, arr, n, r-1, index+1, target+1);
            doCombination(combArr, arr, n, r, index, target+1);
        }
    }

    public void doPermutation(int[] arr, int startIdx){
        int length = arr.length;
        if(startIdx == length-1){
            for(int item: arr) System.out.print(item + " ");
            System.out.println();
            return;
        }
        for(int i=startIdx; i<length-1; i++){
            swap(arr, startIdx, i);
            doPermutation(arr, startIdx+1);
            swap(arr, startIdx, i);
        }
    }

    public void swap(int[] arr, int n1, int n2){
        int temp = arr[n1];
        arr[n1] = arr[n2];
        arr[n2] = temp;
    }
}
~~~