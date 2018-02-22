---
layout: post
title:  "[Java] 자바의 자료구조 - Map(HashMap, TreeMap)"
date:   2018-02-22 13:50:00
description: Map(HashMap, TreeMap)
categories:
- programming
- java
banner_image: /programming/java/java-logo.jpg
comments: true
---

Map(HashMap, TreeMap)

---

## Map

<br>

영어단어 map의 뜻이 뭐냐고 아무사람에게 물어본다면

열에 아홉은 '지도'라고 답할 것입니다.

물론 '지도'도 맞지만 다른 뜻도 있습니다.

예를 들어 mapping 이라는 뜻은 matching과 뜻이 비슷합니다.

자바에서 이 자료구조를 Map이라고 이름지은 정확한 이유는 모르지만

여튼 match와 비슷하다고 보면 됩니다.

<br>

Map에 저장되는 데이터는 'key-value' pair라는 형식을 갖고 있습니다.

key와 value는 매칭되어 있죠.

이는 '주민등록번호 - 사람이름' 관계와 비슷하다고 보면 됩니다.

주민등번호는 한명도 똑같은 사람이 없죠. -> key는 중복 X

주민등록번호는 있는데 사람 이름이 없는 경우는 없죠. -> key없는 value는 없음

이름이 있는 사람이 주민등록번호가 없는 경우는 없죠. -> value없는 key는 없음

주민등록번호가 달라도 사람이름은 똑같을 수 있죠.(동명이인) -> value는 중복 가능

<br>

Map에서 특정 데이터를 찾을 때는 key를 이용해서 검색합니다.

즉, 주민등록번호로를 입력하면 그에 매칭되는 사람의 이름을 알 수 있다는 말입니다.

API에서 Map의 메소드를 찾아보면 다음과 같습니다.

![java_map_method](https://lh3.googleusercontent.com/lN3d-7-hifdk9OnXBos-Nt4ieuYICo-g10wRiVhPv9YsYVu7UxbCCOuJ3TnMUxno_ZtxEKgk8t6VuxXoTvCfAxmfOI5OeNFWlg-nMME3TJpt4wPAlJtwPhCI2zWWDEFsajEydnyineppAW2AacgNopcX081zRbq2aYgh5vcIsny6oUEKgLJkVAdvPIR2JhXSvuM2r38ib2MnJfySlbYFINMTadjZbIJVmqy7irhMsOdNoqVk-A0Ek7Y8J9p3XGRj3774xMpVRnqaEBE0jqFygVCDRAznXdQnSyOTrT9AhU-TGyDmL4rDJhvpodyKGKhLhD5sQUdTrNvZn1UadKTLzOFJHRBfJHvh7GIISlVVnLsV55gHhMTPjI88ivLIZjU-2p63PSymvpyhKWYmthJD5oYk_T20eGE93FJY5zgiGH9W5M5dcogRBNRy6u_EdJP7GaW5o4WRokvpj6x29cfZDq0FC_2sqU0isa9XDPT62Mx8Srsd_y3FSqQJdoBdONCkS9bWQta1h5jhDOh3oJ7WjsadI7y6fLurykvAxgZL405gk3Lj5KxwilDWQjUc8nsH_bCvovY8hdldHo7m0XTGK6n2ynZUmCa3k4b8Qxs=w1472-h1006-no)

이 중 가장 많이 쓰이는 건 put(), get(), remove()입니다.

예를 들어 map이란 Map의 객체가 있고, 그 안에 한국사람들의 

주민번호-이름 데이터가 저장되어 있다면

map.get("890716-1XXXXXX")

은 "Onsil"이라는 value값을 리턴합니다.

자세한 메소드 사용은 밑에서 알아보겠습니다.

<br>

Map은 인터페이스로 선언되어 있고, Map을 구현한 여러 클래스들이 있습니다.

API문서에서 All Known Implementing Classes를 보면 알 수 있죠.

![java_map_api](https://lh3.googleusercontent.com/JklYocHeOBQ7HxNisJqOqRzYfV6WkMXkDe0YF5ncuKSMLC8M2vsZ0bVhRZ35jMK_9GD1ytEjTS6obsWMJi5T0EyDrv8QR2h5beIZ2Uo53QX2kx5SagD4RN_aM_r3sNDuxXV5PotMOYlb9H_20gRu6_rpzuFsDidk63RnvQOzhwE2Rg2y9thxnGkIAR1n2L45c_JUmLB_brvbok72wruoI4p8V0ARF56_CwwyX2ULJyiTcBfkIE9MU9rp0Ska5xEo02uDOoKLuFRHcmWcPz4USocNK6-oVD225Ddtk1jTO5mPBOFDbZOKIjr-uek5Mbxs3AU2UMViqZ9V_Ezi3PVPUWUxAG0wl4aAIkwybmcpOJ0Eu4D8eFbFk2FC5Yfa660veHqVmB6QYzfqseSk3AO3yL026ay04-JH8hsPI6wRLY5dM5AH-hHJoqTXrNuc82c-Nk94AsTlMbi59stCKqljd8rXDOQvBasP8lzRWu6mHLu7WUFaHybPf7PLfNYYTiFHsdvu2oX6VKF8HsIvx_SjM8fQjlp5BbTMtNNvQYytE27UgQ43L1kV0jZzpElH7lFvN-HocI66qWBaq56YJDOyunYsglsIp7PKR3uPj8s=w1920-h410-no)

이 중 가장 많이 쓰이는 클래스는 HashMap, TreeMap, LinkedHashMap 입니다.

여기서는 HashMap에 대해서 자세히 알아보겠습니다.

넘어가기 전에 HashMap과 HashTable에 대해 간단히 살펴보겠습니다.

둘의 차이점은 다음과 같습니다.

<br>

기능 | HashMap | HashTable
:---:|:---:|:---:
키나 값에 null 저장 가능 여부 | O | X
여러 쓰레드 안전 여부 | X | O

<br>

이를 제외하면 이 둘은 거의 비슷합니다.

그래서 HashMap을 Thread safe하게 이용하려면 다음과 같이 선언해야만 합니다.

>Map m = Collections.synchronizedMap(new HashMap(...));

이에 대해서는 나중에 더 자세히 다루겠습니다.

<br>
<hr>
<br>

## HashMap

<br>

![java_hashmap_constructor](https://lh3.googleusercontent.com/RXHMozW7OT-PLjdnANdRTRLoUY3CIlufY2E327vOy7igubUGHjxuzcFc1a_OSTFk5OhZ5kkd1b3KJdyk8KVg4Q2IYNsxNXz0RQXgFd8hHHOSxVx2zYfCo9dBsl7QL7huqXywIeDJgl7v0yOPXgWlWkvtXM6wvT5vpg4EXhCZt8KLQc0po3TtMS5jD-I1ajyXm7FRJXcGizJCURaIHAlGnAcZYPq4KHF5-5wMvNgDNy0MVmbruntOH5WpjNV8DRUsWPGGKpje7UaZDaj3uSmv9NknTj_wTVcwdXKDaYHSsCHPQctOSX46-j8EQrpZuq1B2-tR6m5zUvVebqlDG_YyG2EtTgWOdQl102Rf_uUKkuSIyTupMWOps1C0RuQUtQNjfdnI1lJkj8Ewzz31DxeCjHGdKU9z-J6c3FvveJB-G4f8gKyHnyyvnvY8YlckEQ-ro3Viw1ShtSTeVSHj62pZqoa2upGM_YkMtkgA2i1rOBHxnKhabrGZ6SiIysIuP3f5TjHQjlBOLQ4gZeIXn2qd2arpW5GyFVjS2MhXl8OVcpRhzTZrXzECwx6sCnK99MJY4k0Q7_6helD5ZltOper5YHPHyve0r5iYQEDfV5Q=w1154-h550-no)

HashMap 클래스의 생성자입니다.

생성자에 보면 capacity와 load factor라는 용어가 나옵니다.

이에 대한 자세한 설명은 [>>여기<<](https://onsil-thegreenhouse.github.io/programming/java/2018/02/22/java_tutorial_HashMap_bucket/)에 있습니다.

일단 초보개발자에게 중요한 건, 담을 데이터 수가 많으면

2번째 생성자 사용해서 초기 저장 공간을 크게 설정해주는게 좋다는 것입니다.

<br>

> MapSample.java

~~~ java
import java.util.Collection;
import java.util.Set;
import java.util.Map;
import java.util.HashMap;

public class MapSample {
    public static void main(String[] ar){
        MapSample ex = new MapSample();
        ex.checkHashMap();
    }

    public void checkHashMap(){
        Map<String, String> map1 = new HashMap<>();
        map1.put("a", "A");
        map1.put("b", "B");
        System.out.println("map1 = " + map1);
//        map1 = {a=A, b=B}

        System.out.println("map1.get(\"a\") = " + map1.get("a"));
//        map1.get("a") = A

        System.out.println("map1.get(\"A\") = " + map1.get("A"));
//        map1.get("A") = null
        map1.put("b", "BitCoin");
        System.out.println("map1 = " + map1);
//        map1 = {a=A, b=BitCoin}

        Set<String> keySet = map1.keySet();
        System.out.println("KeySet = " + keySet);
//        KeySet = [a, b]

        System.out.println();
        for(String tempKey: keySet){
            System.out.println("map1.get(\"" + tempKey + "\") = " + map1.get(tempKey));
        }
//        map1.get("a") = A
//        map1.get("b") = BitCoin

        System.out.println();
        Collection<String> values = map1.values();
        System.out.println("values = " + values);
//        values = [A, BitCoin]
    }
}
~~~

checkHashMap()을 보면

map1이라는 객체를 만들고,

put()메소드를 이용해 key-value 를 집어넣었습니다.

<br>

get()메소드를 이용해 key에 해당하는 value값도 출력하고 있습니다.

해당 key가 없을 때는 null이 리턴되네요.

<br>

"b"-"B" 데이터가 이미 있는데 새로 "b"-"BitCoin" 데이터를 넣으니

key가 같으니 value값은 덮어쓰기가 됩니다.

<br>

keySet() 메소드는 해당 Map에 key들만 모아 Set으로 리턴합니다.

values() 메소드는 해당 Map에 value들만 모아 Collection으로 리턴합니다.

다음 예제를 살펴보겠습니다.

> MapSample2.java

~~~ java
import java.util.HashMap;
import java.util.Set;
import java.util.Map;

public class MapSample2 {
    public static void main(String[] ar){
        MapSample2 ex = new MapSample2();
        ex.checkHashMap();
    }

    public void checkHashMap(){
        HashMap<String, String> map = new HashMap<>();
        map.put("a", "A");
        map.put("b", "B");
        map.put("c", "C");
        map.put("d", "D");

        Set<Map.Entry<String, String>> entries = map.entrySet();
        System.out.println("entries = " + entries);
//        entries = [a=A, b=B, c=C, d=D]

        for(Map.Entry<String, String> tempEntry: entries){
            System.out.println("tempEntry.getKey() = " + tempEntry.getKey() + ", tempEntry.getValue() = " + tempEntry.getValue());
        }
//        tempEntry.getKey() = a, tempEntry.getValue() = A
//        tempEntry.getKey() = b, tempEntry.getValue() = B
//        tempEntry.getKey() = c, tempEntry.getValue() = C
//        tempEntry.getKey() = d, tempEntry.getValue() = D

        System.out.println();

        System.out.println("map.containsKey(\"d\") = " + map.containsKey("d"));
        System.out.println("map.containsKey(\"z\") = " + map.containsKey("z"));
        System.out.println("map.containsValue(\"B\") = " + map.containsValue("B"));
        System.out.println("map.containsValue(\"T\") = " + map.containsValue("T"));
//        map.containsKey("d") = true
//        map.containsKey("z") = false
//        map.containsValue("B") = true
//        map.containsValue("T") = false
    }
}

~~~

이번엔 HashMap 객체로 map을 만들어봤습니다.

entrySet()이라는 메소드는 출력결과에서 볼 수 있듯이

해당 객체의 데이터를 entrySet element로 가지는 Set을 리턴합니다.

<br>

Map.Entry 타입은 getKey()와 getValue()를 통해

key와 value값을 리턴받을 수 있습니다.

<br>

또한 containsKey()와 containsValue()를 이용해

해당 값이 map 객체 안에 있는지 확인하고 있습니다.

있으면 true, 없으면 false를 리턴합니다.

다음 예제를 살펴보겠습니다.

<br>

> MapSample3.java

~~~ java
import java.util.HashMap;
import java.util.Map;

public class MapSample3 {
    public static void main(String[] ar){
        MapSample3 ex = new MapSample3();
        ex.checkHashMap();
    }

    public void checkHashMap(){
        Map<String, String> map = new HashMap<>();
        map.put("a", "A");
        System.out.println("map = " + map);
//        map = {a=A}

        map.remove("a");
        System.out.println("map = " + map);
//        map = {}
        System.out.println("map.size() = " + map.size());
//        map.size() = 0
    }
}
~~~

이번 예제는 remove()와 size()메소드를 보여주기 위함입니다.

remove()를 하면 해당 key에 해당하는 key-value 데이터가 삭제됩니다.

삭제하고 나서 size()메소드를 통해 map객체의 크기를 살펴보는데

당연히 저장된 데이터가 없으므로 0이 리턴되네요.

<br>
<hr>
<br>

## TreeMap

<br>

HashMap은 데이터의 정렬이라는게 없습니다.

그런데 개발하다보면 데이터의 key를 기준으로 정렬할 경우가 생기는데

이 때 유용하게 쓸 수 있는게 TreeMap 클래스입니다.

참고로 정렬 기준은 "숫자 > 알파벳 대문자 > 알파벳 소문자 > 한글" 입니다.

예제를 살펴보겠습니다.

> TreeMapSample.java

~~~ java
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;

public class TreeMapSample {
    public static void main(String[] ar){
        TreeMapSample ex = new TreeMapSample();
        ex.checkTreeMap();
    }

    public void checkTreeMap(){
        TreeMap<String, String> map = new TreeMap<>();
        map.put("a", "A");
        map.put("b", "B");
        map.put("1", "one");
        map.put("2", "two");
        map.put("가", "ㄱ");
        map.put("나", "ㄴ");
        map.put("A", "a");
        map.put("B", "b");

        System.out.println("map = " + map);
//        map = {1=one, 2=two, A=a, B=b, a=A, b=B, 가=ㄱ, 나=ㄴ}
        Set<Map.Entry<String, String>> entries = map.entrySet();
        System.out.println("entries = " + entries);
//        map = {1=one, 2=two, A=a, B=b, a=A, b=B, 가=ㄱ, 나=ㄴ}
        for(Map.Entry<String, String> tempEntry: entries){
            System.out.println(tempEntry.getKey() + " = " + tempEntry.getValue());
        }
//        1 = one
//        2 = two
//        A = a
//        B = b
//        a = A
//        b = B
//        가 = ㄱ
//        나 = ㄴ

        System.out.println("map.firstKey() = " + map.firstKey());
//        map.firstKey() = 1

        System.out.println("map.lastKey() = " + map.lastKey());
//        map.lastKey() = 나

        System.out.println("map.higherKey(\"A\") = " + map.higherKey("A"));
//        map.higherKey("A") = B

        System.out.println("map.lowerKey(\"A\") = " + map.lowerKey("A"));
//        map.lowerKey("A") = 2

    }
}
~~~

map에 데이터를 무작위로 넣었지만 key값을 기준으로

정렬되서 출력되는 걸 볼 수 있습니다.

참고로 TreeMap은 순서가 중요한 클래스이므로, 순서와 관련된 메소드들이 있습니다.

저는 firstKey(), lastKey(), higherKey(), lowerKey()를 예제로 작성해봤습니다.