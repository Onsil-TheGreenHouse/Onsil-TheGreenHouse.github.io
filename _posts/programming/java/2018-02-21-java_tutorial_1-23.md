---
layout: post
title:  "[Java] 자바의 자료구조 - Set(HashSet), Queue(LinkedList)"
date:   2018-02-21 13:50:00
description: Set(HashSet), Queue(LinkedList)
categories:
- programming
- java
banner_image: /programming/java/java-logo.jpg
comments: true
---

Set(HashSet), Queue(LinkedList)

---

## Set

<br>

![java_data_structure_map](https://lh3.googleusercontent.com/HdoMZNUTnTsTRCktFr0YVIVVjATyPhSmy1aJfOUlHkmEOmwkwu0EPzO3_bKZpldlfzFdYQBzw3YyWvOpZ4n4Xiw2oK-n6g4w74hU2f_zPNrWHRULdHmFq7Ohww4cE7P37yeUvq1Xfv6jvYsLxnshMqy2Wv82k1DY2vf4lN3oYO-pEB91Tyziz5Foodrv61RfsF6hMjyRBEK4vKv_ZEoVfT2q3WFZk0cZUnoSEHRh1ueO3d3Hy10h_tFdJwP0Zcm2r5EL5uN36MVZSTww76jaEIo4bSpodnr8nx2IdAXEfieFe6E2s6L7AeqzX9bJ1tVpqLtYGH-9joTT47OF50jXJb7i8FSmsVw5rMBPUi_I_ecnP1QZKyInN1ZuQapStIBS6YAq6n4q9IfFbsW4p5GSJVVkSI09mnSSGC3ykhCzeYatGiJXpawzT--SEVqOzD9cmOt5QvDsP6dyPaR8dPcaIsH3jseAHCieOaYvac_TksogOPqdrHLM9TJ2RcZ8Gu-pIweGGqK6xXP1kYnDmVuiVbQSAlgC2FKRtfx-c2VS63G4NDEb9jxUKlf4vLeCIg03pGroydOmbsoUsFzLX1ZgbC8Ip9zjsZQMt_ascis=w632-h527-no)

이번에 알아볼 자바 자료구조는 Set, 그 중에서도 HashSet입니다.

저번 챕터에서 알아본 List는 순서를 중요시 여기는 자료구조였습니다.

Set은 순서를 신경쓰지 않습니다.

데이터가 존재하냐 안하냐만이 중요합니다.

<br>

이런 상황을 가정해보겠습니다.

어떤 웹 사이트에서 하루에 접속하는 사람들 수를 구하고자 합니다.

접속하는 IP를 세면 되겠죠.

근데 한사람이 여러번 접속하면 한 IP가 여러번 찍힐 것입니다.

이건 한번으로 카운트 해줘야 제대로 된 접속자 수를 구할 수 있습니다.

이럴 때 쓰는게 Set입니다.

그냥 수학에서 집합 이라고 보시면 됩니다.

![math_set](https://lh3.googleusercontent.com/p-jh8rawXGDaNRxflCgmNXyTJxu9wUGlk_exbVNdWvH9UffRQP3G5arL5q_hWnl3gizE7l1jMOeVL8GhzRflaWsPjCjcqWsNm0h05d-mmExKUO6VgPka-HoPlonuTdlcZfursWLmpQqy8SbvIzmAoC1SBfe7cq8vSOwtyRT3hRo9G82Lwk52-g_-f3xyg3_o_0xdjHiN3icBS7vkV4tVd0vkPuSdru1LxSsZgn3CCImPHF7eiXKVgsSLQuG2aOJ30PuSFBXU5y6ooY49mlf6wiUqdm2KXygd8_y3HnYR9XssOxrucV03ni2xUTCD5rHj1cdhacrDW7WlZhVw3pjU7qgUvE3tvXljWHMg1r_JBbuh-eRfZ037w3qLOTvMqj2pVabwfqZE_nVw_2Z8TZRQ4LF9JPK9gIUV3aoeImJfsmtEmsK_5w6C_HCp28f7ShQDJxlsl0i_NtM4n8pbFD4OYyfM_7wP3VIp5m31LEvJ2dZrRFNH9XYpgyoQbAFuZJR0xZ_Am6YVHkxLZBx2-iYbcOAkUN92l3il36LUfO7_Jc2N4fGcQk2EOr8Ln2QbLV-GVSfruRqTPg_LmGmMaYZOq6R7hWeH4bFvvw2qkk4=w711-h405-no)
(수학책 맨 앞단원에 있어 항상 제일 지저분했던 집합단원)

<br>

Set 인터페이스를 구현한 주요 클래스는 3개가 있습니다.

클래스 | 특징
:---:|:---:
HashSet | 순서가 필요없는 데이터를 hash table에 저장. Set 중에 가장 성능이 좋음
TreeSet | 저장된 데이터의 값에 따라 정렬됨. red-black tree 타입으로 값이 저장. HashSet보다 성능이 느림
LinkedHashSet | 연결된 목록 타입으로 구현된 hash table에 데이터 저장. 저장된 순서에 따라 값이 정렬. 셋 중 가장 느림

3개의 클래스가 성능 차이가 나는 이유는 데이터 정렬 때문입니다.

HashSet은 별도의 정렬 작업이 없어 제일 빠릅니다.

하지만 수백만 건의 데이터를 처리하는게 아니면 크게 체감하기는 힘들다고 합니다.

hash table이나 red-black tree 등의 자료구조에 대해서는

나중에 별도로 정리해보겠습니다.

일단 지금은 자바에서 이 자료구조의 사용법에 대해서 알아보겠습니다.

<br>
<hr>
<br>

## HashSet

<br>

![HashSet_Java_API](https://lh3.googleusercontent.com/OCR64m566K5ebEt89z-e8-Kna1vEaBIjZgGxlWnz51Jf7MuRVjuydPJBvuWWeyTjby3KqRHqX2Zpvtw9OC26QRNEaXbacNIVk7vjCa5TobD4YQXuBMYUk4HLB-H5d0Lobxjz46iCuaubHhGqciwocRL5x3MOA6fvsNpp2w2mOh67wERgwaFsAQvxa411-MTzA3hXZXg-Umn0dhGUZEClKpHm3buYrE3DvIrg_CuuG3Pqc9pHLEBvaaTG7iBBXF6xO0wIgN9K4r0tKiBZFgRgHeKu8LxVSX2_flYGQEtKJ5NLbx66MrL0i63dgPL3sDkdT115YqMYZiQ-t3NfQEieqX359wgWU6Te8bCDENN6llCv0I7pUc5-pwAix_hmb5su5d2X1AityoBf4z2gE_gvJ7jCqJFihyTLxXktCSqHJGHKisULSqNHXle_GczHw--vcOliK3CuwjwUPsK78aOTinSUujGjxXyARsQ_hGccwN5Je9Q4LXUBZxHPnOhCZnM8vDqko9N9AoP5Gf7IsUcUunaICo0Kh13jQ7DjssOLrCytLzrAeBJgi3DYxC65Lp4NKIJyBaP50vndogCXoSWAG-r10zpO-5yLB4ygKVo=w946-h604-no)

먼저 HashSet의 상속관계를 살펴보겠습니다.

AbstractCollection을 확장한 건 ArrayList와 같지만,

HashSet은 AbstractSet을 확장했습니다.

AbstractSet 문서에 들어가보면 구현되어 있는 메소드는

equals(), hashCode(), removeAll() 3개 뿐입니다.

Set은 순서가 필요없고, 중복을 허용하지 않으므로 

중복을 체크하는 equals()와 hashCode()는 필수인거 같습니다.

<br>

이번엔 HashSet의 생성자를 살펴보겠습니다.

![Java_HashSet_Constructor](https://lh3.googleusercontent.com/jXZdDU4U1LAsEe5nZbhqt4LYWFKsLJFL5957zR-hf1bAW2ADzVxchZyJCKpUocmzGBtzkXorPjW-Zm3xAzs096IFHU60GpwvskKMTYjbLjPl1QJWKlr9uakjZfs_b2iw4iPcJeCmn5VGTAJM_1nTqLzId3txrX7jifhA_rCowsPXFS58qrMpw8ce4AhnfEzfgSWp5IPiRuXoLjhY3VShVLjgU_iLPi4ZXvEKc8GXeX_YHVJ4z68t3X5lhzQoGTUbvbsP_BWdy9pKKq3qf8GpyMU-sUbrOIqXnDzc3zAT9q6fHeDsBn--3wLOAynOIoGA5YsTR-0xFniqycMvOJrb0P-qDG4KdRvB4J63mSoxsFMXJhpFL88fZYbDuXmb50Ry578MhR6NUDXOVX6f_DFz42kgjIXk_XyVRW190j0p5BW8z76nKmvtQ_kb3ZnzcI7Wlnv8Ie99diBvHgLHb3CplNjfSJf5LoidOKr8CL0Hhn97Q1_EAYOeYjpB1ghnNWF3pYcS3i2fPQk8H8d4frk4yFE5VjS6SF48bQbvsamlpIg5eMzJz74Fy8qp8FxSyYPosz9w_ZAyB_8SzrGIsCcbVHlHS7vVwGA7tDT6Q2Y=w1335-h283-no)

총 4개의 생성자가 있습니다.

여기서 load factor라는 용어가 나옵니다.

이에 대해 자세히 알려면 Hash Table이라는 자료구조에 대해서

알아봐야 하므로 여기서는 간단히 써보겠습니다.

HashSet() 생성자의 설명을 보면

초기 저장용량(initial capacity)가 16이고 load factor는 0.75라고 되어있습니다.

이 말은 HashSet 객체는 최대 16개의 key-value 값을 저장할 수 있다는 말입니다.

그런데 16 * 0.75 == 12 죠. 12개의 key-value 값을 저장하면

capacity가 16의 두배인 32로 증가합니다.

즉, 용량이 꽉차기 전에 알아서 용량을 늘리는데

그 시점을 결정하는게 load factor입니다.

<br>

용량을 왜 미리 늘려야하는지, 왜 하필이면 초기값이 0.75인지를 알려면

hash table에 대해 깊은 공부가 필요한 듯 합니다.

(짧은 시간 검색해보니, 수학적으로 계산했을 때 log2와 가까운 0.75가 많은 경우에 가장 optimal한 값이라고 합니다...)

추후에 공부해서 올려보도록 하겠습니다.

<br>

아무튼 그래서 (저같은) 초보 개발자들은 load factor를 건드리는

네번째 생성자는 사용하지 않아도 된다고 합니다.

<br>

HashSet의 메소드를 살펴보겠습니다.

![Java_HashSet_method](https://lh3.googleusercontent.com/oJOIcgGVlgUz0ItdpZn8Wm1ObMvpGA1quZlKTE-_bruR1N6hnMMavqb00xPaQA-5HnGIWW4v_vmiumFaoYGpan-aGXEdFv-Iyi86oBEVmV8Vv97wMXx7ETlU25CgemxTk1V600dm7PmWVzVbBNKc4mZ2-UW9VcGiSTMEGh-qJN5buNI1S2Ogc0IORwtEwM_U6-Vjz4cS9VXSolRb3t3KGLzXD_oH2Ly8VoM0C4uG1S54pczFhskzpzdbp3PIaW_qYDCz3msgeUPNoBAIUBe_DTmT9JrpJjOAu2hLMO26kHHuqefQ6Vza0HK1lOAZlMmUgbZa67PTJb0JuRmzyWnR9of9nsOl9BGar-OccK9koUuYc8vvR5Cl5EvBEFhJDk4zKtOYrpVyGUKSMgjmu9ylfhBWPPh5oE7KejudTL5sk3Wu73tYu7yOiK53xWcxmcXjJC1lP-v7x9-tQh1JT0ehgnqIU0EYS38YJl4AhultBcE3TkbM0eB5THMHY9ptHSqxwKmuSLe6GWVWD_EDo_vEFc43MrIHrP_1CJ4CI2HDd2WXXBBT8I0uCB_IYiqs32GnWn1uNc8Oa8Q0blBA89h_4ACQ-CX_VquM8OIHVJU=w1335-h612-no)

순서가 필요없어서 그런지 메소드가 적습니다.

예제를 살펴보겠습니다.

>SetSample.java

~~~ java
import java.util.HashSet;
import java.util.Set;

public class SetSample {
    public static void main(String[] ar){
        SetSample ex = new SetSample();
        String[] alphabet = new String[]{
                "A", "B", "A", "D", "C", "E", "F", "G", "E",
                "T", "M", "O"
        };
        System.out.println(ex.getAlphabetKinds(alphabet));
//        A B C D T E F G M O
//        10
        System.out.println(ex.getAlphabetKinds2(alphabet));
//        A B C D T E F G M O
//        10
    }

    public int getAlphabetKinds(String[] alphabet){
        if(alphabet == null) return 0;
        if(alphabet.length == 1) return 1;

        HashSet<String> alphabetSet = new HashSet<>();

        for(String spell: alphabet){
            alphabetSet.add(spell);
        }

        for(String item: alphabetSet){
            System.out.print(item + " ");
        }
        System.out.println();

        return alphabetSet.size();
    }

    public int getAlphabetKinds2(String[] alphabet){
        if(alphabet == null) return 0;
        if(alphabet.length == 1) return 1;

        Set<String> alphabetSet2 = new HashSet<>();

        for(String spell: alphabet){
            alphabetSet2.add(spell);
        }

        for(String item: alphabetSet2){
            System.out.print(item + " ");
        }
        System.out.println();

        return alphabetSet2.size();
    }
}
~~~

getAlphabetKinds()와 getAlphabetKinds2()모두 

String 배열을 받아 HashSet을 만들고 출력하고 있습니다.

두 메소드의 차이점은 객체 생성입니다.

~~~ java
HashSet<String> alphabetSet = new HashSet<>();
Set<String> alphabetSet = new HashSet<>();
~~~

사실 둘 중 아무거나 써도 상관없으나

두번째 방법이 많이 쓰인다고 합니다. 이유는...

Set을 구현한 클래스는 HashSet 말고도 여러 클래스가 있는데

종류에 상관없이 사용하려고 Set 객체로 구현합니다.

ArrayList도 마찬가지로 List로 구현하는게 좋다고 합니다.

<br>

String 배열에 중복되는 알파벳이 있는데도

HashSet 객체에 추가하니 중복 알파벳이 없어지는 걸 볼 수 있습니다.

<br>

다른 예제를 살펴보겠습니다.

> SetSample2.java

~~~ java
import java.util.Set;
import java.util.HashSet;
import java.util.Iterator;

public class SetSample2 {
    public static void main(String[] ar){
        String[] alphabet = new String[]{
                "A", "B", "A", "D", "C", "E", "F", "G", "E",
                "T", "M", "O"
        };
        SetSample2 ex = new SetSample2();
        ex.printHashSet(alphabet);
    }

    public void printHashSet(String[] str){
        Set<String> alpha = new HashSet<>();
        for(String item: str){
            alpha.add(item);
        }

        Iterator<String> iter = alpha.iterator();
        while(iter.hasNext()){
            System.out.print(iter.next() + " ");
        }
//        A B C D T E F G M O
        System.out.println();
        System.out.println();

        if(alpha.contains("Z")){
            System.out.println("alpha set contains \"Z\"");
        }else{
            System.out.println("alpha set does not contain \"Z\"");
        }
//        alpha set does not contain "Z"
        Iterator<String> iter2 = alpha.iterator();
        while(iter2.hasNext()){
            System.out.print(iter2.next() + " ");
        }
//        A B C D T E F G M O
        System.out.println();
        System.out.println();

        if(alpha.contains("A")){
            alpha.remove("A");
            System.out.println("\"A\" is removed from set alpha");
        }else{
            System.out.println("alpha set does not contains \"A\"");
        }
//        "A" is removed from set alpha
        Iterator<String> iter3 = alpha.iterator();
        while(iter3.hasNext()){
            System.out.print(iter3.next() + " ");
        }
//        B C D T E F G M O
    }
}
~~~

여기서는 HashSet의 출력을 Iterator 객체를 통해 구현하고 있습니다.

또한 contains()와 remove() 메소드를 사용하고 있습니다.

<br>
<hr>
<br>

## Queue

<br>

Queue는 FIFO(First In First Out)의 용도로 사용하는 자료구조입니다.

![fifo](https://lh3.googleusercontent.com/YD1X_eFuLW2yviaqoyu-leAeZgQ2F3YxtEQ5l3ymIEtJmz0cTQOh0TKZ5GLykDZ3CvOmvh5xHovIJKqtjxCWtv97Y481NX_ImnQyTUBfP7-ZPQtgn_rnOvSAUxVF2aqlUV9g6z93_uYOLV7TDm9DBkkSR7mnLyYHN1e4dhgYKotftjk8Y0ujLh1-XluqNKXGg10u9pSww2_Yq741KOMdm8QUZPUCMzXNX0MGDnJfcsxOi6E4DhXLWor5CqG3HQZ4ULNInb2iO5WtelmScVp3GtnIEysgFuHqjtfq3hfaTRLNNIbTzNPY41jr5xU9n3eqoCklKIQYVpid1DMS9UiHStNENozIcfR-0_m0M0Lq8rjCZ22ySf9yoVDL73TU8xUBBU9HM23_n3cZqbOorD2f7tYFR7CjHELyIDfIvxiUJCNspbX0yw88wBZIFfqzcZ1wqXPM-rvt3W1CTZ_Ch58j0i04w2VtW4rRzSHXCQ7pRCAWG_5QtWQot3JQnsW9WNe5XUJvi-gTfQMIaE84plSVPfcoHFSDvNS2eJh8ALOwmlaqZZjsDEVsx-PqNS7mQnLngDfL0D8DTmK9J76cA_HH0UYbRhrlfYrm5SzsCuQ=w576-h379-no)

먼저 들어간게 먼저 나온다!

한줄로 ATM을 사용하는 상황입니다.

먼저 온 사람이 먼저 ATM을 사용하고 나오는 형식입니다.

IT에서 FIFO의 상황을 찾자면...

![lol_waiting](https://lh3.googleusercontent.com/RD3k0TE2D6Ji-p--Nv7EGhh5VeZOtmLUlKvUYVgndZOaWFXMZaWdIksR-j6AaGY0YT6DPxDxqKIh765D4cBnFFREI-TpbqIQJI8aDFSgYC5Xae9WfdlXzoDbc4lP0P4mvsojV3Xa9oEozc1T5u6tThUncBhuYIdB4f-1S_fKxwGpCOT4RGDjC-AV5JaENGpWNLIL5CjLxmeRII4EKAClmSpSzHek7sWdpbtE4TG5c-5ctAn1qG5V-D21wSvrWVBeF-Oha6N5Z5T3p2fuSNqv585FrugpD8AsLAKRtF2o03X2ezqLFKfQjhyQQRke07LOdpRhs5mYE_ayqScK4a4HMb3lPnBRmhvq1I5TpudtryILzgOezda0YZruxyRRITn78YW2SiqL0py0kSvQpUmtKms2rNBPtMdQqwZTH5KR2_ygW97unMQhjsMMGPVaWdeFG813PiQRoNAEAIpIUhvEdgASIXpB5znx_4tSdLktnP9z7L9AhcpVk3iTVPDe8n8DY2yGduZ20qOg3TLi5QBscylS4SAjqwZds_4wP1lD6YNyhi57-VO4jBUO3-3MG6gflDnCfcpB7CI54lvDDbM9Lb8iPb261LZp3bjOZNc=w539-h417-no)

먼저 로그인을 시도한 9000명 이상이 접속이 되야

제 차례가 되서 로그인할 수 있는 것이죠

<br>

그럼 Queue 인터페이스를 구현한 LinkedList를 살펴보겠습니다.

<br>
<hr>
<br>

## LinkedList

<br>

먼저 LinkedList라는 자료구조에 대해서 간단히 살펴보겠습니다.

![LinkedList](https://lh3.googleusercontent.com/v8uwNW79AkHZqwQ544syfM18FT-0CW3Drla-hY3M90peVpencWJZ1b7tA5QKQ0uiihn_qZKL8IcR78FC6hnF1bEOXvFKbNZcxBtcPIiWaczQANc04cGnG4cAisMU8GafPCS5f4NtxlPMg5_Z1ujuCFQnseYNhV4_OsNfu4YKXusdyjqNcgK_VCDknUfaEOAqb8NfKQfz24OAuQsdvAlTNcIqhZPf4HO5V7exGuGnZF5KbAWN19GR3AeO9mVLpGB5ctXq1Z75gURP9a7eBW_YUu1XEGJ5oBLouPIDbn05dHOFT-bj6xcqpuLxgWrrRs_ZABAHCaajRi9dHBvlBM1uHjbPmiAy-3dzglX9ezzmnhEXxkR8dX-gCqGZ4t59mwTNpwGVBd43qrmM4DP35-AvFWnkkweqIFWsJAPA8KtiSqnQwtZe1kxqsK7Zs1Wlrf0tWvT1wvjLL5kdvi41YRxyAEFZyqgXIVKeMofMOahiJlZ7ijFx6cJnZM4VvBsxayZdnSYG2NUn_mOTHaIvJhKc9YC1lHYC7jITGGz8TGrWMmEkRLu6TB2KNZ5fLjWXmjrGNGzCglP8g7VF7MpEw7edqk3rmCHzloPOeYhwmEU=w728-h546-no)

각각의 데이터는 각각의 node란 곳에 저장이 됩니다.

node는 두 부분으로 나뉘어져 있는데

한곳은 데이터를 저장하고, 다른 한곳은 다음 노드의 주소를 참조합니다.

node A는 '내 다음 node는 B다!' 라는 건 알지만

C나 D의 위치, 존재여부도 모릅니다.

<br>

배열과 비슷하지만, 메모리 관리 측면에서 좀 더 효율적입니다.

예를 들어 크기 5의 배열이 있다고 가정하겠습니다.

1번째 위치의 값이 삭제된다면 2, 3, 4번째 위치의 값은

하나씩 앞으로 당겨져야 합니다.

LinkedList의 경우를 살펴보겠습니다.

5개의 값이 있는 LinkedList 객체가 있습니다.

0번째 노드는 1번째 노드를 참조하고, 1번쨰 노드는 2번째 노드는 참조하겠죠.

이 상황에서 1번째 노드를 삭제하면 2, 3, 4번째 노드의 위치가 다 옮겨지는게 아닙니다.

그냥 0번째 노드가 참조하는 노드를 2번째 노드로 설정하면 끝입니다.

즉, 중간에 있는 값이 삭제되거나 추가되는 상황에서는

배열보다 LinkedList를 쓰는게 메모리 관리 측면에서 더 효율적입니다.

<br>
이제 자바에서 LinkedList 클래스를 살펴보겠습니다.

![Java_api_LinkedList](https://lh3.googleusercontent.com/6hC6ZBfiW-jv9DKTSXjDQqqZCh5dOmAoWHv87wGniB0JcyJSF53XFRtNAR7y3eTwfcTe7uGSfyBWBLuGCb8nSIeI5DnLSfR5s6J_Z76-gnVkHTc4wXxgp0fX3M-UVuY_T7wNrBbjR4ORumMjs9KQ9cW9s1FUG9NdanBlx3f3JO4HwCJOryavDSVYcX2VJM300xU5CLChVYO7tLoS3f2iDos7uy0WBk2Tb7OyPTPqfylRT5WEytfibhULxZAawmGDo6x9iTV1d4_FSdPFZhSDoCKmelxsx4TmfDPl84wPB_VIqW2ti6jTtLrm8IKkZIL37RP7izZvqg16trRcy18eoQPynGxv9ldD9B7HCZgv9fH5GlHtphW6G59QQHW1OR5-sDPenEmzzGsiDaHmSnpaLHwMuFgCZtUo_nnpKjD9G39F0jJYgrm6_iDFdtKrICfgCxfpGewcLLjj-xIRBkPLALaBmVjh8WFBXhsu1wpv9q9wzqmY38_TOc1a4UOKMUErivPNuKIfXwIR-Ak_bKuKVSalvPl3PCbAiX42LmvOv6kbAZUdJkifqhRYc_4573rr63HzTvxHrEbdVCy4_vU_jwSBse8y00ZJUoulRZI=w1024-h524-no)

지금은 Queue를 구현하는데 사용하고 있지만 List도 구현하는 걸 확인할 수 있습니다.

<br>

LinkedList 클래스의 생성자를 살펴보겠습니다.

![Java_LinkedList_Constuctor](https://lh3.googleusercontent.com/Bv094kOEhnxlkuKohgpHn4vSOzw9Ex15usW8S1fNJCovNXa4N5ypsxHQ85ViDZOsHhjoAutJ0-Dh-tRp7A3W9aqjNsvjtHjigk6VbaoMTCMKEqorMAukqXjJ5RtfqgmnEto890207-N0QYUZCxEnmBHEStH3KENspE7KDs-A-CjqnRjOCCfQS9AnoZiHuu6VxsjByP8zi-Kn8FotBpp6JqOqMWG8GY38vQrKXLvlaFSaYZ83hlcciNhghnqoxkugC6Y4C2FvTR3Upu4gms95ihpCV3opG66pi1hog2yfq5SN8Ln0bAy25nmakpIkKaZX-jvfcHta68x2SoX4n6Qd-YiwwQ1Mn2ihMqbg2fZlt3diBkVgADxFYLTdT3DQKT_dp7cmeGDz9LwJj0YfMuZlT6y8RQYbdpA8oPWNlGVd8okWDMvILgVtgwVA-VvurVbWgmyBXOYy4UMgCOGZRVSzZE7d7QAJ-wICSuqCacccNxNDSUB4vPVTy2ft5FITbb1lt0Sv44GMVI5RNs_5dL5wqN5-mHS8lokSLpja8HoN_pxlu6B1UTpfcWd49Xmp2Pz8bLyMHRPHetUpx8VTUIKpL51Q5myvT2GphBY-s0s=w1335-h376-no)

LinkedList는 객체 생성시 크기를 지정하지 않는 걸 볼 수 있습니다.(empty list)

각 데이터들이 앞뒤로 연결되는 구조이기 때문에 미리 공간을 만들어 놓을 필요가 없습니다.

<br>

API 문서에서 LinkedList의 메소드를 살펴보면

여러 인터페이스를 구현한 만큼 메소드도 많습니다.

그런데 자세히 살펴보면 중복된 기능을 가진 메소드들이 많습니다.

예를 들어 add(), addLast(), offer(), offerLast()

이 4개의 메소드들은 모두 LinkedList 객체 가장 뒤에 값을 추가하는 역할을 합니다.

이렇게 중복된 메소드들이 많은 이유는 마찬가지로 여러 인터페이스를 구현했기 때문입니다.

저 메소드를 섞어서 쓰면 보는 사람은 더 혼동될 것이기 때문에

하나를 정해서 그것만 쓰는게 좋습니다.

저는 addLast()가 가장 명확하게 기능을 말해주고 있는거 같아 맘에 드네요.

<br>

예제코드로 몇가지 메소드를 사용해보겠습니다.

> QueueSample.java

~~~ java
import java.util.LinkedList;
import java.util.ListIterator;

public class QueueSample {
    public static void main(String[] ar){
        QueueSample ex = new QueueSample();
        ex.checkLinkedList();
    }

    public void checkLinkedList(){
        LinkedList<String> ll = new LinkedList<>();
        ll.add("Teemo");
        System.out.println(ll);
//        [Teemo]
        ll.add("Jinx");
        System.out.println(ll);
//        [Teemo, Jinx]
        ll.addFirst("Zed");
        System.out.println(ll);
//        [Zed, Teemo, Jinx]
        ll.add(1, "Rengar");
        System.out.println(ll);
//        [Zed, Rengar, Teemo, Jinx]
        System.out.println(ll.set(0, "Gnar") + " is changed to Gnar");
//        Zed is changed to Gnar
        System.out.println(ll);
//        [Gnar, Rengar, Teemo, Jinx]
        System.out.println("ll.getFirst() = " + ll.getFirst());
//        ll.getFirst() = Gnar
        System.out.println("ll.indexOf(\"Teemo\") = " + ll.indexOf("Teemo"));
//        ll.indexOf("Teemo") = 2
        System.out.println("ll.removeFirst() = " + ll.removeFirst());
//        ll.removeFirst() = Gnar
        System.out.println(ll);
//        [Rengar, Teemo, Jinx]

        System.out.println();
        ListIterator<String> li = ll.listIterator();
        if(li.hasNext()){
            System.out.println("li.next() = " + li.next());
        }
//        li.next() = Rengar
        System.out.println("li.next() = " + li.next());
//        li.next() = Teemo
        System.out.println("li.previous() = " + li.previous());
//        li.previous() = Teemo
        System.out.println("li.previous() = " + li.previous());
//        li.previous() = Rengar
    }
}
~~~

마지막 부분에 ListIterator 부분을 보겠습니다.

Iterator는 다음 데이터만을 검색할 수 있었습니다.

ListIterator는 이 단점을 보완해 이전 메소드도 검색가능한 인터페이스 입니다.

