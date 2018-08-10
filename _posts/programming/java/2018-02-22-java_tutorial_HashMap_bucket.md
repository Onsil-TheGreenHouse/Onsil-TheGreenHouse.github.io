---
layout: post
title:  "[Java] HashMap의 element 저장 방식(bucket)"
date:   2018-02-22 13:50:00
description: HashMap의 element 저장 방식(bucket)
categories:
- programming
- java
banner_image: /programming/java/java-logo.jpg
comments: true
---

HashMap의 element 저장 방식(bucket)

---

## Bucket, Load factor

<br>

HashMap의 API 문서를 읽어보면 생성자 부분에

capacity와 load factor라는 용어가 나옵니다.

일단 지금은

>- capacity == bucket의 크기<br>
>- 한 HashMap 객체에 저장된 데이터의 수 == capacity * load_factor

라고 암기하고 다음의 코드를 보겠습니다.

<br>

> SimpleEx.java

~~~ java
import java.util.HashMap;
import java.util.Set;
import java.util.Map;

public class SimpleEx {
    public static void main(String[] ar){
        SimpleEx ex = new SimpleEx();
        ex.HashMapEx();
    }

    public void HashMapEx(){
        HashMap<Integer, Integer> map = new HashMap<>();
        map.put(16, 14);
        map.put(17, 3);
        map.put(34, 8);
        map.put(1, 9);
        map.put(36, 20);
        map.put(49, 25);
        map.put(18, 37);

        System.out.println("map = " + map);
//      map = {16=14, 17=3, 1=9, 49=25, 34=8, 18=37, 36=20}

        Set<Map.Entry<Integer, Integer>> entries = map.entrySet();
        for(Map.Entry<Integer, Integer> entry: entries){
            System.out.println(entry.getKey() + " = " + entry.getValue());
        }
//        16 = 14
//        17 = 3
//        1 = 9
//        49 = 25
//        34 = 8
//        18 = 37
//        36 = 20
    }
}

~~~

HashMapEx()를 살펴보면

HashMap 객체 map을 만들고

put()메소드로 7개의 key-value 데이터를 넣었습니다.

<br>

map이라는 객체를 선언할 때, 별도의 설정을 안해주면

API에 나온대로 capacity == 16, load_factor == 0.75 값을 가지고

bucket이라는 ArrayList가 만들어집니다.

그림으로 설명하겠습니다.

![java_HashMap_bucket](https://lh3.googleusercontent.com/hsdqyP4mSoVqkVTevD-fxiF2q83_6Irt4MOcH53SPNAjtHuaZijiZWNZhKL-YCFK77SIetRfooGMwnt9wjxsHlqguFu5MYJUeCBTTlkRey3s5KWjOWhLn_Qyi_3SK7DGx9kaI8u0WpeGi3-oTSNQuruMweh1i5Yw-06-BaPlPUeDDcM-2xzCEEIp338gO9mmw9sHUjXtV_tJOUc9T97thzoTDGxDPtyjV5c-lFpKIs9sjVfevpKQDMJpKfNXp4BehJtEwcBhK1Pe7Ge-eOUQa85W63L5jWG8WM0Nkz8T9UrKwJLxB6EXLcXE6SORNKti2a-wnvVvFZu_f5k8PTThBOvV7ENblTNpPmOCU8MPM3RizqiGQtU4qxjd7xJ5GBQf09ec54xIt7VBvlbPhg0wW-ef-2kpyq3kxqhP0jyEmhO7M__cfAkJKqwnmg0gsP1UU3Iaz-YvrI_qkrYb4tFrqGVJ5FvpuIOR_crS1kMZZ-kZhHyiuyeah5_ZfXwCEp0hOHCUyioJf0au3F1aKmvc939g4kXYYz-yyvY5N_3TpUDA2YkiPISTNqtAf3q8BOoV14wkRQ6Lkyfme4do_A96s3leBKqohOJcfb66XHM=w1023-h861-no)

bucket의 크기는 16으로 0번째 1번째 2번째 3번째 ... 15번째 공간이 있습니다.

처음에 16-14 데이터를 넣으면 map은 먼저 다음 연산을 통해 index를 구합니다.

>int index = key.hashCode() % capacity;

여기서 key는 Integer인 16이고, Integer 클래스의 hashCode()는 해당 int값을 그대로 반환합니다.

즉, 여기서 index는 16 % 16 == 0 이 됩니다.

그럼 16-14 데이터는 0번째 공간에 3개의 값(key, value, next)을 가진 노드형태로 저장이 됩니다.

다음으로 추가한 17-3 데이터도 마찬가지 방식으로 1(17%16)번째 공간에 저장이 되죠.

다음으로 추가한 34-8 데이터도 마찬가지 방식으로 2(34%16)번째 공간에 저장이 됩니다.

그 다음 1-9 데이터를 추가할때 보면 index값은 1이 됩니다.

근데 1번째 공간에는 이미 17-3 데이터가 있죠. 이럴 땐

17-3 데이터 앞에 1-9 데이터를 저장하고 1-9 노드의 next값이 17-3 노드를 참조하도록 설정합니다.

즉, LinkedList 형태로 노드들이 저장되는겁니다.

아무 데이터도 들어가지 않은 공간은 당연히 null입니다.

이런 방식으로 데이터가 저장되는 걸 Separate Chaining이라고 합니다.

<br>

이 상황에서 get()메소드를 사용한다고 가정해보겠습니다.

만약 get(16)을 실행한다면 16의 hashCode를 계산해서 바로 0(16%16)번째 공간을 살펴봅니다.

0번째 공간엔 저장된 노드가 하나밖에 없으므로, 바로 그 노드의 value값을 리턴합니다.

get(17)을 실행하면 17의 hashCode를 계산해서 바로 1번째 공간을 살펴봅니다.

2개 이상의 노드가 있으니 첫번째 노드부터 시작해서 key값이 같은지 equals()로 비교합니다.

첫번째 노드가 아니니 첫번째 노드의 next가 가리키는 다음 노드로 가서 또 equals()로 살펴봅니다.

이 과정을 반복하다 해당 key값을 가지고있는 노드를 발견하면 해당 노드의 value를 리턴합니다.

이번에는 get(17) 메소드 한번 실행에 equals()가 3번 실행이 됬네요.

<br>

데이터를 추가추가 하다가 16만개가 추가 됬다고 가정해보겠습니다.(요새 빅데이터가 핫하니...)

근데 bucket의 크기가 그대로 16개다 하면, 대략 평균적으로

한 공간당 만개의 데이터 노드가 저장되게 됩니다.

그럼 get() 한번 실행에 평균 5000번의 equals()가 실행되어야 합니다.

엄청나게 느려지겠죠.

그래서 이를 방지하고자 HashMap은 자신의 capacity에 얼마이상 데이터 수가 차면

자동으로 bucket의 크기를 늘려버립니다.(약 두배)

이때 bucket 크기를 언제 늘리냐 하면

>load_factor == 저장된 데이터 수 / capacity

가 되는 시점입니다.

저 식을 해석해보면 load_factor는 한 공간에 저장된 데이터 의 수 입니다.

그럼 load factor의 기본값이 0.75라는 말은

'한 공간에 저장된 데이터의 평균 수가 0.75개, 즉 1도 안되어서 버킷의 크기를 늘려버린다.'

라고 해석할 수 있습니다.

잘 이해가 안될 수도 있습니다. 한 공간에 들어가있는 데이터 수가 1 이하면

get()메소드를 실행해도 equals()를 호출할 필요가 없으니 성능이 빠를 것입니다.

그럼 굳이 이렇게 빨리 bucket의 크기를 안늘려도 될꺼 같습니다.

하지만, 이건 평균의 함정입니다.

위의 그림을 예로 들어보겠습니다.

<br>

16개의 공간이 있으니 데이터들이 이 공간에 균등하게 퍼져서 저장되서

한 공간에 저장된 데이터 수 <= 1

이면 get()메소드도 빨리빨리 진행될 것입니다.

equals()메소드가 쓰일 필요가 없기 때문입니다.

(참고로 조금 더 균등하게 퍼뜨리기 위한 보조해쉬 함수라는 것도 있습니다.)

근데 HashMap에 데이터를 넣을 때는 이런 것까지 신경써서 key를 설정하지 않습니다.

그림에서도 보면 총 저장된 데이터 수는 7개, capacity는 16이므로

이때 load factor를 계산해보면 7/16으로 0.5도 되지 않습니다.

하지만 벌써 1번째, 2번째 공간에 저장되 있는 5개의 노드들이 성능 저하를 느낍니다.

총 7개의 노드중에 5개가 성능이 느려지니 대부분의 데이터를 처리할때 성능이 저하되는 거라고 볼 수 있습니다.

<br>

그렇다고 처음부터 capacity를 왕창 크게 잡는 것도 능사는 아닙니다.

빈 공간이 많을테니 메모리가 낭비되겠죠.

게다가 Iteration(객체의 모든 데이터를 조회해봐야 하는) 상황에서는 성능이 저하됩니다.

Iteration의 부하는 (capacity + 저장된 데이터 수)와 비례하기 때문입니다.

<br>

load factor를 기준으로 살펴보면

load factor가 작으면, 그만큼 capacity가 커지므로 메모리는 많이 차지하지만, 검색 속도가 빨라집니다.

load factor가 커지면 그만큼 capacity가 덜 커지므로 메모리는 적게 차지하지만 검색 속도는 느려집니다.

API에서는 가장 이상적인 값을 0.75라고 말하고 있습니다.

이 값은 메모리와 실행성능을 모두 고려했을 때 최적의 값입니다.

하지만 만약 자신이 개발하는 애플리케이션이 '메모리는 좀 많이 잡아먹어도 괜찮으니 검색속도가 빨랐으면 한다'

라고 하면 load factor를 작게 설정하면 됩니다.

<br>

마지막으로 매우 중요한 사항이 있습니다.

HashMap에 저장될 데이터의 수가 짐작 가능하다면

될 수 있으면 객체를 생성할 때 capacity를 그 값에 맞게 설정해주는게 좋습니다.

만약 들어올 데이터 수는 16만개인데 초기 capacity를 기본값 그대로 16을 쓴다면

capacity 증가 작업이 매우 많이 일어날 것입니다.

근데 이 capacity 증가가 bucket의 크기만 증가 시키고 끝나는게 아닙니다.

capacity 값이 변경됬으니, 기존에 저장되어 있던 모든 데이터의 

hashCode() % capacity 값을 다시 계산하고, 

그 값에 따른 공간 배치를 새로 다 해야합니다. 이 과정을 rehashing이라고 하는데

이 과정이 부하가 엄청납니다.

그러므로, 초기 capacity 값을 설정해주는 건 매우 중요하다고 볼 수 있습니다.