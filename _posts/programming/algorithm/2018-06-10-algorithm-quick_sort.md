---
layout: post
title:  "[Algorithm] Quick Sort, Quick Search(백준 11004)"
date:   2018-06-10 14:00:00
description: 퀵소트(Quick sort)와 퀵 서치(Quick Search)
categories:
- programming
- algorithm
banner_image: /programming/algorithm/algorithm-logo.jpg
comments: true
---

퀵소트(Quick sort)와 퀵 서치(Quick Search, 백준 11004)

---

## <span style="color:blue">계기</span>

<br>

퀵소트를 공부하게 된 계기는 

백준 11004를 풀면서 입니다.

https://www.acmicpc.net/problem/11004

<br>

문제는 정말 단순합니다.

주어지는 수열들을 정렬한 후, 

K번째 수를 출력하면 됩니다.

제가 처음에 작성한 코드는 다음과 같습니다.

~~~ java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] ar) throws Exception{
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        String[] temp = in.readLine().split(" ");
        int n = Integer.parseInt(temp[0]);
        int k = Integer.parseInt(temp[1]);

        StringTokenizer st = new StringTokenizer(in.readLine());
        int[] arr = new int[n];
        for(int i=0; i<n; i++) arr[i] = Integer.parseInt(st.nextToken());
        Arrays.sort(arr);
        System.out.print(arr[k-1]);
    }
}
~~~

Arrays클래스의 sort 함수를 이용해

주어진 수열을 정렬한 후, k번째 수를 출력하는 방식입니다.

이 코드의 결과는 다음 그림에서 가운데 입니다.

![11004_mycode](https://lh3.googleusercontent.com/IwBmfpzjBKdZ7Nojsc6L361fnI2IaXNkK0U_lYjK3XyJpdU0J7oDVH3cuwDfPZdVcbSWFn2UaQJGxrKfLsxEIt-ZIrzPGopckmLIfR4ACKpeNtQXIHa3RoWxVabLBPa4SUQTRDmNt-nTkA69jrlX3R4lzAEBXW6m2v-OWFYlU-TOcoF5LRxDMmHqAH0ZtCBPpE7rpjxItXHve-YgWIjz8cMoKmzn6KfIBsqD9E14Vp610CU21e7RJF6GUqRUZvgNr2PT9LYAxyGe8-Hjyp8HEMgeG-xpONC3UHdwuiXnVfaIjundt-CBTD8v55rVRZg1DD0UwFyJHyPUEvi4cpF505QB6HuLIHD8jNSRfoauoZqvjFtN3oQz-kYm_wZOPfDD-x9RImuN_KBjHdwcDkCvMz2NjPfOfAe29x5CMzFx-76Vm2bU59dO4ChI9pEfIebo7iUqE4kk2Fe2RkZmnn770LJSbQ89OxBTVmHC0WuVZWZ9XWluPemNTfbWLxQL9MblMWbDpflA56GBSL5nLreorL_IMN3sFxgUHUq9l3ig4kHZIk6SeTYCv_rswjsVi4oX9z16gnsMsy3l6Dm_GVyzuSe2pi5eCMSsKgI0ODo=w2320-h346-no)

2104ms가 걸렸습니다.

그리고 다른 사람들이 푼 결과를 확인해보았습니다.

![11004_result_others](https://lh3.googleusercontent.com/Fe1D5ZCeQ-4RdNmZtj23_p2eG3F6fNDv8uM_yYVdjULi0xxs71NWwyzTth9pAF-KNTINojijCWvhn2P0DXbi9lFIgnfGnC0MfI32ozGClyROVmbbv4Gl5-Dc-QMPfpqTxDwQYb7p2W0CLbe1M5SDmcGQsFmPAjbucYRSLj-rIYxqNqFb09odkh6VMo313cyogi004ElblrND9yaGV67HvE20kIkb7Ss8IpzpYSYUibiDLAnbb0r7ma7IYJ0G58LQZmEwiCTdzETCErlA2DEGK0ci221c3L0I9uLWM6P4gsUFQB6YIpurMltfzcL_bdYkXpB62MtcjhI4D3vFwuJiWea7PvkgOt1N6c0ER5JezEX0kg_H8YKVUHaBXW5_8bXs7AN2XV6KQOevNmC0Qo601oqHM7pbB-BGIGUFbaw8Ah5R35Q8KvfRcQ5yXm-bf-FY3GVUrQ4-yLDKP6ZLKWKRHBRCdeoR-rvZhxr1-tG1TRyr-wcUSFbn1hOXt9h4AUPFh1w0ZhDGgm1nglSEu52eTOrpCgTVRAoNmbd90ywjFkgiMBUK60NqRhumDx3HDrU9N5Zr37mok2aF1NTnI1a-JFK58HA1r270F8hd6nA=w1960-h1538-no)

빠른 코드들은 제 코드에 비해 시간이 절반 걸리는 것을 확인했습니다.

뭔가 더 이 문제를 푸는 더 효율적인 방법이 있는게 분명했습니다.

다른 분들의 코드를 살펴보니 quick search를 이용해 풀고 있었습니다.

<br>
<hr>
<br>

## <span style="color:blue">Quick Sort</span>

<br>

### <span style="color:green">Algorithm</span>

<br>

사실 6년전 학부생때 배웠던 내용이지만

까먹었다는 건 안비밀입니다.

학부때 수업 피피티를 오랜만에 다시 뒤져봤습니다.

![quick_sort_ppt](https://lh3.googleusercontent.com/4Qw_JfXBmAMm3VnnNQ-YJ6yDbO1i6bSNt2hlFDag7mXuDj8iarlHvDoJrb7woWfeEcMCEXD5lme-H4bohKJFeITYRq47f0yIwflUZARYi0KMuLlyIARqXf0Fy2hy7Jk-KuzmHBjgy3LtDXpm4mlHq1Omj1b8588UnFNT0gFm1TJ0x6NLGtrbXhDHo28ySk08CZK_xID8Zoq8KZ8mi1KQnKwTjNG8wf6AH6Lk1CXkfEIKI5Sc_suZ2YdFabzc2bVcos1VJswqGq58YGScwlqDez1yEjsx4RVZp-pqxwhGCdYjuRTaamY6uDcJAmeqTnMb9CQDjPGUP2-GGr_deSp_9HA-eFNvZGVw8zvZWubH8hAzU1i4ThtBfYcJsfqQBPrDA7hkdC7M3zZDuU7SXMf_7S698ERZxroZwkrJ7knQM8XVTxf4uLekSAOib3xe3JhkOnhHfkDJTV5GUlk9IU961V1jaesuwa3nrHmoCTE96RsDLmtt7D_W0wbOdQ4jEc94F3fiUPX9E5nFBXUs7O5R9XQP1CWOK6wDDanB7nPI_vekf5qjnXFElOMcV_ml59cSCyHPfH2tFg6xbMX3NdLZnUN_9aicnQNpBnzEZns=w1642-h1088-no)

두번째 줄에 **실질적으로 가장 효율적인 알고리즘** 이라고 나와있습니다.

세번째 줄에는 그림과 함께 알고리즘이 간단히 설명되어 있습니다.

<br>

먼저 pivot을 하나 고릅니다.(첫번째 그림)

pivot이라는 건 **기준**이라고 생각하면 됩니다.

아무 수나 pivot으로 골라도 정렬은 다 됩니다.

다만 어떤 수를 pivot으로 고르냐에 따라 알고리즘의 성능은 달라집니다.

이에 대해선 밑에서 설명하겠습니다.

<br>

그 다음, pivot보다 작은 수는 pivot의 왼편에

pivot보다 큰 수는 pivot의 오른편에 배치합니다.(두번째 그림)

그럼 1차 정렬이 끝납니다.

<br>

두번째 그림을 보면 4번째 수가 pivot인데,

이 pivot의 왼편과 오른편은 아직 정렬이 안된 상태입니다.

이 왼편, 오른편 각각을 또 지금까지 했던 방식으로 정렬합니다.

이 과정을 Recursive하게 계속 반복하다보면 

끝내는 모든 수가 정렬이 됩니다.(세번째 그림)

<br>

### <span style="color:green">Code</span>

<br>

~~~ java
public class QuickSort {
    public static void main(String[] ar){
        int[] arr = {50, 20, 10, 80, 60, 40, 7, 30, 100, 90, 70};
        quickSort(arr, 0, arr.length-1);

        System.out.println("\n=====final result=====");
        for(int i: arr){
            System.out.print(i + " ");
        }
        System.out.println("\n======================");
    }

    public static void quickSort(int[] arr, int start, int end){
        if(start < end){
            int t = partition(arr, start, end);
            quickSort(arr, start, t-1);
            quickSort(arr, t+1, end);
        }
    }

    public static int partition(int[] arr, int start, int end){
        int pivot = arr[end];
        int idx = start-1;

        for(int i=start; i<end; i++){
            if(arr[i] < pivot) swap(arr, ++idx, i);
        }

        swap(arr, ++idx, end);
        return idx;
    }

    public static void swap(int[] arr, int i, int j){
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
~~~

arr이 정렬하려는 수열입니다.

quickSort() 메소드를 살펴보면 됩니다.

t는 pivot의 위치입니다.

예를 들어 아까 피피티 화면 아래에 그림을 살펴보면

첫번째 그림에서 7번째 값을 pivot으로 골랐습니다.

이 pivot을 기준으로 정렬하면 두번째 그림이 나옵니다.

두번째 그림에서는 pivot이 4번째 수입니다.

즉, t값은 4가 됩니다.

정확히 말하면 배열은 0번째부터 시작하므로 t값은 3이 됩니다.

그리고 recursive하게

quickSort(arr, start, t-1)을 통해 왼편을

quickSort(arr, t+1. end)를 통해 오른편을 정렬합니다.

<br>

정렬이 이루어지는 partition() 메소드를 살펴보겠습니다.

첫번째 코드를 보면 pivot을 수열의 마지막 수로 설정하고 있습니다.

알고리즘 실행 흐름을 보면 대략 느낌이 오듯이

왼편과 오른편의 수의 갯수가 비슷하게 되도록 pivot을 설정하는게

알고리즘 성능면에서는 제일 좋습니다.(더 자세히는 아래에서...)

즉, pivot을 중앙값(median)으로 설정하면 최적의 성능을 낼 수 있습니다.

하지만 정렬이 아직 안된 상태에서 어떤 값이 중앙값인지 알 수 없습니다.

즉, 우리에겐 어떤 정보도 없으므로 

아무수나 pivot으로 선정할 수밖에 없습니다.

그래서 저는 코딩하게 쉽게 제일 마지막 수로 정한 것입니다.

<br>

그 다음 for문을 통해 start부터 end-1까지 모든 수를

pivot과 비교합니다.

잘 살펴보면 arr[i]가 pivot보다 작을 경우에만 idx값이 증가하고, 

idx자리에 해당 값이 들어가는 걸 볼 수 있습니다.

저 for문이 끝나면 start자리부터 idx자리까지는

pivot보다 작은 수들이 배치될 것입니다.

그럼 자연스럽게 idx+1자리부터 end-1까지는

pivot보다 큰 수들이 배치될 것입니다.

그리고 마지막 swap()을 통해, pivot을

왼편과 오른편의 중앙에 오게 합니다.

그럼 이제 두번째 그림이 완성되는 것입니다.

<br>

### <span style="color:green">Complexity</span>

<br>

$T(n)$을 n개의 수를 퀵소트를 적용하여 정렬하는데 걸리는 시간이라고 하겠습니다.

먼저 왼편과 오른편을 비슷한 수로 나눠주도록 pivot을 고른다고 가정하겠습니다.

그럼 다음과 같은 식을 쓸 수 있습니다.

>$$T(n) \ge cn + 2T(\frac{n}{2})$$

앞의 cn은 n-1개의 수를 pivot과 비교하는데 걸리는 시간입니다.

c는 상수가 되겠죠.

이 과정을 조금 더 반복해보면...

<br>

>$T(n) \ge cn + 2T(\frac{n}{2})$<br><br>
$\;\;\;\;\;\;\;\; \ge cn + 2(c\frac{n}{2} + 2T(\frac{n}{4}))$<br><br>
$\;\;\;\;\;\;\;\; \ge 2cn + 4T(\frac{n}{4})$<br><br>
$\;\;\;\;\;\;\;\; \cdots$<br><br>
$\;\;\;\;\;\;\;\; \ge kcn + nT(\frac{n}{n}), \;\;where \;\;2^k=n$

<br>

여기서 $2^k=n$이므로 $k = log_2 n$입니다.

또한 $nT(\frac{n}{n}) = nT(1) = c'n, \;\; where \; c' \; is \; constant$ 입니다.

그래서 마지막 식을 정리해서 다시 쓰면,

>$T(n) \ge cn log_2 n + c'n = O(n log_2 n)$

즉, 이상적인 퀵소트의 성능은 $O(n log_2 n)$입니다.

<br>

하지만, 이런 수열을 정렬한다고 생각봅니다.

{2, 1, 3, 4, 5, 6, 7, 8, 9, 10}

맨 앞에 2, 1만 정렬하면 끝납니다.

하지만 제 퀵소트 코드를 적용하면, 

처음에 pivot은 10이고,

앞의 9개의 수와 10을 비교합니다.

9개 수 모두 10보다 작으므로 모두 왼편에 배치됩니다.(변함이 없죠)

그 다음 pivot은 9입니다.

이 경우에도 마찬가지로 변화가 없습니다.

계속 진행되다가 pivot이 1일때만 정렬이 한번 이뤄집니다.

즉, 이떄의 복잡도는 각각의 원소를 pivot으로 설정할때마다

n개의 수와 비교하므로, 복잡도는 $O(n^2)$입니다.

<br>

이렇게 거의 정렬이 된 수열에 퀵소트를 적용하면

성능이 크게 발휘되진 않습니다.

정렬이 거의 안된 상태더라도 pivot을 괴상하게 잡아서

위와 비슷한 과정을 거친다면 그 또한 낮은 성능이 나올 것입니다.

그러므로 정렬해야할 데이터가 대략적으로 정렬이 된 상태라는 걸 안다면

굳이 퀵소트를 사용할 필요는 없습니다.

하지만, 그래도 worst case가 $O(n^2)$인 퀵소드는

좋은 성능의 알고리즘인건 맞습니다.

<br>
<hr>
<br>

## <span style="color:blue">Quick Search(백준 11004)</span>

<br>

다시 백준 문제 11004로 돌아와보겠습니다.

문제는 꼭 수열을 다 정렬할 필요는 없습니다.

k번째 숫자가 뭔지만 알면됩니다.

피티 자료의 그림을 다시 살펴보겠습니다.

![quick_sort_ppt](https://lh3.googleusercontent.com/4Qw_JfXBmAMm3VnnNQ-YJ6yDbO1i6bSNt2hlFDag7mXuDj8iarlHvDoJrb7woWfeEcMCEXD5lme-H4bohKJFeITYRq47f0yIwflUZARYi0KMuLlyIARqXf0Fy2hy7Jk-KuzmHBjgy3LtDXpm4mlHq1Omj1b8588UnFNT0gFm1TJ0x6NLGtrbXhDHo28ySk08CZK_xID8Zoq8KZ8mi1KQnKwTjNG8wf6AH6Lk1CXkfEIKI5Sc_suZ2YdFabzc2bVcos1VJswqGq58YGScwlqDez1yEjsx4RVZp-pqxwhGCdYjuRTaamY6uDcJAmeqTnMb9CQDjPGUP2-GGr_deSp_9HA-eFNvZGVw8zvZWubH8hAzU1i4ThtBfYcJsfqQBPrDA7hkdC7M3zZDuU7SXMf_7S698ERZxroZwkrJ7knQM8XVTxf4uLekSAOib3xe3JhkOnhHfkDJTV5GUlk9IU961V1jaesuwa3nrHmoCTE96RsDLmtt7D_W0wbOdQ4jEc94F3fiUPX9E5nFBXUs7O5R9XQP1CWOK6wDDanB7nPI_vekf5qjnXFElOMcV_ml59cSCyHPfH2tFg6xbMX3NdLZnUN_9aicnQNpBnzEZns=w1642-h1088-no)

두번째 그림이 한번 정렬을 거친 후입니다.

여기서 확실히 알 수 있는 한가지 정보가 있습니다.

pivot의 값은 4번째 위치라는 것입니다.

만약 문제가 정렬 후, 4번째 위치의 숫자를 출력하라 였다면

우린 퀵소트 과정을 전부할 필요가 없고,

한번의 과정만 하고 값을 출력한 뒤, 프로그램을 끝내면 됩니다.

그렇게 작성한 제 코드입니다.

~~~ java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] ar) throws Exception{
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(in.readLine());
        int n = Integer.parseInt(st.nextToken());
        int k = Integer.parseInt(st.nextToken());
        st = new StringTokenizer(in.readLine());
        int[] arr = new int[n];
        for(int i=0; i<n; i++) arr[i] = Integer.parseInt(st.nextToken());
        System.out.print(quickSearch(arr, 0, n-1, k-1));
    }

    public static int quickSearch(int[] arr, int start, int end, int k){
        int pivot = partition(arr, start, end);
        if(pivot == k) return arr[pivot];
        else if(pivot > k) return quickSearch(arr, start, pivot-1, k);
        else return quickSearch(arr, pivot+1, end, k);
    }

    public static int partition(int[] arr, int start, int end){
        int pivot = arr[end];
        int i = start-1;
        for(int j=start; j<=end; j++){
            if(arr[j] < pivot){
                i++;
                swap(arr, i, j);
            }
        }
        i++;
        swap(arr, i, end);

        return i;
    }

    public static void swap(int[] arr, int a, int b){
        int temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
}
~~~

퀵소트 코드와 달라진 점은 quickSearch()메소드에서

pivot값이 문제에서 요구하는 k번째 값이라면

바로 메소드를 끝내고 있습니다.