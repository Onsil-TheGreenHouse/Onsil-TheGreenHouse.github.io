---
layout: post
title:  "[Algorithm] 순차 탐색(Sequential Search)와 이진 탐색(Binary Search)"
date:   2018-02-26 22:00:00
description: Sequential Search, Binary Search
categories:
- programming
- algorithm
banner_image: /programming/algorithm/algorithm-logo.jpg
comments: true
---

순차 탐색(Sequential Search)와 이진 탐색(Binary Search)

---

## 문제

<br>

**data = {1, 12, 8, 7, 2, 11, 5, 81, 29, 10}**

이란 배열이 있습니다.

여기에서 숫자 7이 몇번째에 있는지 알아내고자 합니다.

<br>
<hr>
<br>

## 순차 탐색(Sequential Search)

<br>

순차탐색은 말그대로 순차적으로 비교해가면서 찾는 것입니다.

data[0]부터 값을 살펴봐서 7인지 아닌지 하나하나 확인하는 것이죠.

data[0], data[1], data[2] 는 계속 아니다가

data[3] == 7 이므로 여기서 탐색을 멈춥니다.

<br>
<hr>
<br>

## 복잡도(Time Complexity)

<br>

만약 data 배열에서 1을 탐색하면 1번만에 찾아낼 것입니다.

12를 탐색하고자 한다면 2번만에 찾아낼 것이고,

8을 탐색하고자 한다면 3번만에 찾아낼 것이고, 

...

10을 탐색하고자 한다면 10번만에 찾아낼 것입니다.

그럼 탐색하는게 걸리는 평균 연산 횟수는

$$\frac{1+2+3+\cdots+9+10}{10}$$

이 되겠죠.

<br>

그럼 data 배열의 크기가 n이라면 탐색에 걸리는 평균 연산횟수는

$$\frac{1+2+3+\cdots+(n-1)+n}{n} = \frac{n+1}{2}$$

즉, 복잡도는 O(n)이 됩니다.

<br>
<hr>
<br>

## 예제 코드

~~~ java
public class SequentialSearch {
    public static void main(String[] ar){
        SequentialSearch ex = new SequentialSearch();
        int[] data = {1, 12, 8, 7, 2, 11, 5, 81, 29, 10};
        int key = 7;
        int dataLength = data.length;

        for(int i=0; i<dataLength; i++){
            if(data[i] == key){
                System.out.println(key + " is in the " + i + ex.ordianlNumber(i) + " position");
            }
        }

//        7 is in the 3rd position
    }

    public String ordianlNumber(int num){
        if(num == 1){
            return "st";
        }else if(num == 2){
            return "nd";
        }else if(num == 3){
            return "rd";
        }else{
            return "th";
        }
    }
}
~~~

<br>
<hr>
<br>

## 이진 탐색(Binary Search)

<br>

이진 탐색을 위해서는 data값이 오름차순으로 정렬이 되어있어야합니다.

그 이유는 이진탐색의 탐색 방법에 있습니다.

위의 data 배열을 오름차순으로 정렬하면

data = {1, 2, 5, 7, 8, 10, 11, 12, 29, 81}

입니다. 여기서 7을 찾는다 하면

일단 이 배열의 가운데 값을 봅니다.

배열의 크기가 홀수면 딱 가운데가 존재하겠지만 여기선 짝수네요.

별 상관 없습니다. 배열 전체를 봤을 때

시작은 0번째, 맨 마지막은 9번째 이므로

$$\frac{0+9}{2} == 4.5$$ 이므로 4번째 수인 8을 봅니다.

8은 7보다 크죠. 그럼 8을 포함한 위의 값은 탐색할 필요가 없어집니다.

<br>

{1, 2, 5, 7}에서만 검색하면 되죠.

즉, 이제 시작은 0번째, 맨 마지막은 3번째 가 되고,

가운데 값은 1번째 값인 2입니다.

2는 7보다 작으므로 {1, 2}는 이제 탐색할 필요가 없습니다.

<br>

즉, {5, 7}만 탐색하면 되죠.

시작은 2번째, 끝은 3번째이고

가운데 값은 (2+3)/2 == 2, 즉 2번째 값인 5입니다.

5는 7보다 작죠. 


즉 5는 탐색할 필요가 없고 나머지 7만 탐색하면 됩니다.

시작은 3번째, 끝도 3번째. 즉 가운데 값은 3번째인 7입니다.

찾으려고 하는 숫자를 찾았습니다!

<br>
<hr>
<br>

## 복잡도(Time Complexity)

<br>

탐색하는 배열의 크기가 n이고, k번의 연산을 통해

원하는 값을 찾았다고 가정을 하겠습니다.

한번 연산을 하면 탐색해야 할 n개의 숫자가 반으로 줄어듭니다. 즉,

$$(\frac{1}{2})^1 n$$

두번 연산을 하면 탐색해야 할 n개의 숫자가 1/4이 되겠죠. 즉,

$$(\frac{1}{2})^2 n$$

k번 연산 후, 원하는 값을 찾았으므로,

k번 연산 후 탐색해야 할 숫자의 개수는 한개입니다. 이를 식으로 나타내면

$$(\frac{1}{2})^k n = 1$$

양변을 n으로 나눠주고, 양변의 분모 분자를 뒤집어주면

$$2^k = n$$

입니다. 양변에 $$log_2$$를 씌워주면,

$$k = log_2 n$$

입니다. k가 연산 횟수이기 때문에, 이진탐색의 복잡도는

$$O(log_2 n)$$ 이 됩니다.

<br>
<hr>
<br>

## 예제 코드

<br>

~~~ java
import java.util.Random;
import java.util.Arrays;

public class BinarySearch {
    public static void main(String[] ar){
        BinarySearch ex = new BinarySearch();
        Random rand = new Random();
        int arrayLength = 10;

        int[] intArray = new int[arrayLength];
        for(int i=0; i<arrayLength; i++){
            intArray[i] = rand.nextInt(20) + 1;
        }

        Arrays.sort(intArray);
        System.out.print("array = ");
        ex.printArray(intArray);
        int key = rand.nextInt(20) + 1;
        System.out.println("key = " + key);
        ex.doBinarySearch(intArray, key);

    }

    public void doBinarySearch(int[] inputArray, int key){
        int inputArraySize = inputArray.length;
        int upperBound = inputArraySize-1;
        int lowerBound = 0;
        int median;

        while(true){
            if(upperBound < lowerBound){
                System.out.println(key + " is not in the inputArray");
                break;
            }

            median = (upperBound+lowerBound)/2;

            if(inputArray[median] == key){
                System.out.println(key + " is in the " + median + " position");
                break;
            }else if(inputArray[median] > key){
                upperBound = median-1;
            }else{
                lowerBound = median+1;
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
~~~

1 ~ 20 사이의 숫자를 랜덤으로 받아

크기 10인 배열을 만들고, 오름차순으로 정렬한 후에

doBianrySearch()에서 key값을 찾습니다.

<br>

이진 탐색은 Recursive하게도 많이 구현합니다.

~~~ java
import java.util.Random;
import java.util.Arrays;

public class BinarySearchRecursive {
    public static void main(String[] ar){
        BinarySearchRecursive ex = new BinarySearchRecursive();
        Random rand = new Random();
        int arrayLength = 10;

        int[] intArray = new int[arrayLength];
        for(int i=0; i<arrayLength; i++){
            intArray[i] = rand.nextInt(20) + 1;
        }

        Arrays.sort(intArray);
        System.out.print("array = ");
        ex.printArray(intArray);
        int key = rand.nextInt(20) + 1;
        System.out.println("key = " + key);
        int result = ex.doBinarySearchRecursive(intArray, key, 0, arrayLength-1);

        if(result == -1){
            System.out.println(key + " is not in the array");
        }else{
            System.out.println(key + " is in the " + result + " position");
        }

    }

    public int doBinarySearchRecursive(int[] inputArray, int key, int start, int end){
        int upperBound = end;
        int lowerBound = start;
        int median;

        while(true){
            if(upperBound < lowerBound){
                return -1;
            }
            median = (upperBound+lowerBound)/2;

            if(inputArray[median] == key){
                return median;
            }else if(inputArray[median] > key){
                return doBinarySearchRecursive(inputArray, key, lowerBound, median-1);
            }else{
                return doBinarySearchRecursive(inputArray, key, median+1, upperBound);
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
~~~

이진탐색을 recursive하게 구현할 때는 받는 매개변수 값으로

탐색의 시작위치와 마지막 위치도 받아야합니다.
