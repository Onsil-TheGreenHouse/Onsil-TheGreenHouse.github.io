---
layout: post
title:  "[Java] 자바의 자료구조 - ArrayList, Stack"
date:   2018-02-18 13:50:00
description: ArrayList
categories:
- programming
- java
banner_image: /programming/java/java-logo.jpg
comments: true
---

ArrayList

---

## 자료구조(Data Structure)란?

<br>

하나의 데이터가 아닌 여러 데이터를 담을 때 사용하는게 자료구조입니다.

배열도 여러 데이터를 담으므로 자료구조라고 말할 수 있습니다.

자바의 자료구조는 크게 4가지로 분류할 수 있습니다.

- List
- Set
- Queue
- Map

<br>

이 클래스들의 관계를 그림으로 나타내면 다음과 같습니다.

![java_data_structure_map](https://lh3.googleusercontent.com/HdoMZNUTnTsTRCktFr0YVIVVjATyPhSmy1aJfOUlHkmEOmwkwu0EPzO3_bKZpldlfzFdYQBzw3YyWvOpZ4n4Xiw2oK-n6g4w74hU2f_zPNrWHRULdHmFq7Ohww4cE7P37yeUvq1Xfv6jvYsLxnshMqy2Wv82k1DY2vf4lN3oYO-pEB91Tyziz5Foodrv61RfsF6hMjyRBEK4vKv_ZEoVfT2q3WFZk0cZUnoSEHRh1ueO3d3Hy10h_tFdJwP0Zcm2r5EL5uN36MVZSTww76jaEIo4bSpodnr8nx2IdAXEfieFe6E2s6L7AeqzX9bJ1tVpqLtYGH-9joTT47OF50jXJb7i8FSmsVw5rMBPUi_I_ecnP1QZKyInN1ZuQapStIBS6YAq6n4q9IfFbsW4p5GSJVVkSI09mnSSGC3ykhCzeYatGiJXpawzT--SEVqOzD9cmOt5QvDsP6dyPaR8dPcaIsH3jseAHCieOaYvac_TksogOPqdrHLM9TJ2RcZ8Gu-pIweGGqK6xXP1kYnDmVuiVbQSAlgC2FKRtfx-c2VS63G4NDEb9jxUKlf4vLeCIg03pGroydOmbsoUsFzLX1ZgbC8Ip9zjsZQMt_ascis=w632-h527-no)

Set, List, Queue는 Collection 인터페이스를 구현하고 있고,

Map은 별도의 인터페이스로 선언되어 있습니다.

이번에 알아볼 자료구조는 ArrayList와 Stack이므로, Collection에 대해 알아보겠습니다.

<br>
<hr>
<br>

## Collection

<br>

Collection 인터페이스는 java.util 패키지에 선언되어 있고,

여러개의 객체를 하나의 객체에 담아 처리할 때 공통으로 사용되는 

여러 메소드들을 선언해 놓았습니다.

Collection의 메소드를 API에서 살펴보면 다음과 같은데요,

![collection_Method](https://lh3.googleusercontent.com/Djaj8t9xsDrHrurtCYznPKBcA4doRslMneEVUyi5dC6KJctJF0xDOHU_6uMnUnt336tdG2Bv8HTyGPB0NQoSLvqbJYfQRfcaLOIdOf5n_WS0wHSJUvlLderl5SnlKflDSGaSNKjSrJt-uvQHV98lU5cV3s1HjpgLr8cSwWykydCGZPu-q549F1KIBGAQ8CrHELMr--6046HK5Bldwo1b0HPuuucwoIInSLZADoUs4bQnI_nkxTeG2cXGGYlLyUgO2kKtCGzse6pwJ7O4HObBpPFGrotmkhfZTDYFyvAtDPJFVKFRTdRweOTC25lJznUS19XzEFdEJJpiEHoCKA1eGJ3hS3ml9Na2dLn7TdFK_O1lx2-0coyyrMlPkDQ7giYt6g6z56Ii7XfTYrXmLDkRwijkquXtbw7zEPnLujLrs4WvFzYS6m6zYauo_vPu9HQfXWaEMoyWuqnw3L3sq9dYzymz1Qfx9gzH-bc0pG5P-Ni37ImFas9xXxBy9qQxZydeCM9AChfebMXBBgWjjd_BO_HvvCv9joeOrTl1YBQHynL5dBhHXtGc57mP9TurkHqwn3ssL2qcujbG0ILXgE8wbfxdp4NDVdIp-HgPUDk=w1335-h697-no)

위의 맵 그림을 보면 Set, List, Queue는 Collection을 구현하고 있으므로

이 Collection의 메소드들을 사용할 수 있습니다.

<br>

Collection을 살펴보면

~~~ java
public interface Collection<E> extends Iterable<E>
~~~

라고 선언되어 있습니다. 즉, Iterable이라는 인터페이스를 확장했는데요,

Iterable 인터페이스의 API문서를 확인해보면 메소드가 하나밖에 없습니다.

![java_iterable](https://lh3.googleusercontent.com/3XOOR4LEcY2LKWZ_MdRVFYFcnwlCLs38TCmbayWdkP2_BxMAPbrETItcCaH54AeELF2_l5qDAKYFKm0WRy0Au1va3HAbITCn1-0x4Z-J4VLKMUwAbP7Kmy6_-3XiFt8c8hm3BcSKubwDgn_taRzZr5n2fLhvoiH7kuRV7buhxKcEg9Q79Cpk8Gv6Fj9QmefeFkIn96T1S14_5-_LhNAXWPL7fUq1juS82oiomSVVVlX_hcRibl2edjCP3y0ybJbSFrJb-p4GAmvr-EVZVfJhRdFhJE-qqTgIUcESx4-MTa0T4X8yPTwZs3NR2xJchQDh6fpgz0pwlANFg-9LONw6JIDLpF4x6k9xzaxTEKSJ8oF6ycauUZQDBFdPXYSnaITWrz7XzVkE9YxvJQhdd-PFWYINzopru0NQQ7tM-ywaFmG2-wNzfMykRYVVV09iM2efh_4MKkmWqq56-zXHMyuB1DutJ5OkcY8K9tIAkTdvEg5MY-XMDKUWwOdgJY-N0ToXwTT3frv_HmOCnuBYw1F0qWx2ZpwMNQHThVLZhHC8zTJCPb9JzVplxKBCxxcdB8FundWlVBVwzju4YEnWNHRY3zt4y43ptkCmH6hoY08=w1335-h636-no)

딱 하나 있는 메소드인 iterator()를 살펴보겠습니다.

Iterator를 리턴한다니까 Iterator 인터페이스의 API문서를 또 확인해보면

3개의 메소드가 있는걸 볼 수 있습니다.

![java_iterator](https://lh3.googleusercontent.com/fsXVCem3avmNpwT46H9avXjwGAC5TBnxWiE2MCYzl93g7Hzuy39CNh-d5CebbhABim9A6c-avlvYKywSxJIETGJK2Uc9I5LHqv7XJfuOtq3nQ9Esovaoan3XeXuz8JtYmrnxEFyBpL1Wldgas3TPG4fsuePZJRjD_mAmcfYW213rTFFtkA1DCKxgIeQ1jsFBTE9yYqFRIJk-3iHGen5HZTWfbkKufWJRK-8qiv5ml5O4MZ9qxlmmCwYc9CNKF3TAxcperLAFB90iJG8Rn3jyJRhgEqbK3rw7Wk7JZWMUZK3N5ihQT9Kv3W94JbkiKd2qjBXxXyrXrbUVVVYCffStk0_6lCVxM58KUNrVszLCFDXUNlfU01ry6m8yeLwei8A6wJjS0ZaWLh1LHPgZLbRDXJOmu0khIo7tPzur4JBoUqqGjUdnEQF7iC91cky1dZTMSrd74XdLa1DodGdj-ZCr29mv9OnB9dOQeg2t6P2TrfSRrO91XhjTePam_XySg94v40slc9I-B7M43hxDrHwA7uKbKVYri9lA4YQ24JQQ10i1wm9KD-FoAzi8axTeisr6MowxPDbOjY9xbfaZGQnSUlYynN5zdx7Ehe9zQmI=w1336-h725-no)

- hasNext(): 추가 element가 있는지 확인하는 메소드
- next(): 다음 element를 리턴하는 메소드
- remove(): element를 삭제하는 메소드

<br>

즉, Collection 인터페이스가 Iterable 인터페이스를 확장했다는 것의 의미는

Iterator 인터페이스를 사용하여 데이터를 순차적으로 가져올 수 있다는 것입니다.

<br>
<hr>
<br>

## List 인터페이스

<br>

위의 클래스 맵 그림에 나온 List 인터페이스를 구현한 자료구조는

ArrayList, Vector, Queue 클래스가 있습니다.

다른 클래스도 있지만, 제일 많이 사용되는 3개입니다.

<br>

이번에 알아볼 ArrayList와 Vector 클래스는 매우 유사합니다.

두 클래스 모두 '확장 가능한 배열'이라고 생각하면 됩니다.

차이점이라면 Vector는 Thread safe하고 ArrayList는 그렇지 않다는 것입니다.

<br>

또한 Stack클래스도 알아볼 건데, Vector 를 확장한 클래스입니다.

이 클래스를 쓰는 가장 큰 이유는 LIFO(Last In First Out)을 지원하기 위함입니다.

말그대로 '마지막에 들어온게 먼저 빠져나간다' 라는 의미입니다.

![lifo](https://lh3.googleusercontent.com/OWWnlvGh6BU7FvYfgJ7qmC20-3RW2obhKo1I2K8aTCZe_IJc5e7seD8GNpS1Gayb6hxPplmtTH6OFWiNA9KSgE-cyZ9w482tCfrWkwF2HPh_QNsESAtl_hTzlDh0VJP6ApzB-rX8XPP_e1B56oy45zVvs4TT_pCAPTs44c_Ck92IC9IFH14w_8c0jLhrx9vnQFRpLBWspXza6wAORZdKqZ7QRrflP9aaUOewkEYf3MaO6BZ3FmptzpmI5yrtdo8rnn4roy8mo24b4SxilOPtN_wCO8CQxkPLwrBKYpXdsez-IElqdGiFYDttn_dyocMiz5ihO0InnTTn9Efd5I4njm1y9aZg6C2iINGC_zMZlCbG5DaoWM-U1PJLu1MePwLzmGgBGRZrU0hvrGSG85yt3GucaKHdqMNDrK3EV2gljUF0WIqHdUPvcEqaF1BUmqEYD5gm_MlH7qnTlSZdyg6tJV9Rm5a8rxGQzCSSTZYwZfe7BlKi5kRPOxoz1eWx8GqyuyjJxOc-2wuvYAgn7f4R3aEWWG7AYR3atj5xEWWwEcOxOIXPt0JMAyKSNLGyvRS1Za_e4ADlXIKH1DT1v-yOn80ctyU4BAGw6OezLCc=w577-h485-no)

위의 그림은 LIFO를 설명한 것입니다.

지금 3번까지 쌓여있는데 push()를 통해 새로 집어 넣으면 4번으로 쌓입니다.

pop()을 이용하면 가장 나중에 들어온 4번이 빠지고,

또 pop()을 쓰면 그다음으로 나중에 들어온 3번이 빠지게 됩니다.

참고로 프로그래밍 언어에서 '스택'이라는 의미는 

보통 메소드가 호출된 순서를 기억하는 장소를 말합니다.

프로그램이 종료가 돼서 호출된 메소드들이 종료돼야하는 상황이라면

가장 최근에 불러온 순서대로 종료가 되겠죠.

<br>
<hr>
<br>

## ArrayList

<br>

ArrayList 클래스의 API문서를 살펴보면 다음과 같습니다.

![ArrayList_API](https://lh3.googleusercontent.com/ZGU2pFK_LHuEqXMw-vgWcMuIontY2L1uuU_mQOGqfBANGfds7kimAFOyZBVJFuyntLvVUHtNb9B0eW5MhuBB3IjHrt2DPMvkGNFqFO0yNOrZv6vTjko_U4w6ur-q17JWx9SkghIDNHzpb2RO_DjvVMhZPvgTLFkHDsOs0TaoNYhPmaQUGsra-XDAUpCx6rMRfeqMwmNCMtqVq1BTcj5xAhzMYnZSkWjT0e2S0f9AVzlLxbREeg4oVvyQ54hyJIherN0R3Q_yh7sP_bmMchBwJKfH9iVXqw49nZA0C0ByfJ69h_miWiLdZPKHWH3jjKdIvAC8X9Q34G0GWP-SoH4nbU0G6dO04K1BtdT__3JXmK1kZrv0oAnKyCXr-Zi5WIb2K03a7VDzkFBwSti1DrXd_d9F3PLbxqTSOxhY2AFUam31r2-arfZZNAU7wZD_fHPX9aRM8vJY9W8HG-iQkV1dWkP5tARmCs2BQKw870eNNiz_jwVarrVJ8KlBkDS4fC4_CuJz6DWeUs2Ux12L8Fq5Pw4HZb-Tuxh5gT4dbMRXMm84ndZ0BQO1ZzuYtrLPkyHXrkPS5hAr2vPdfVauzOsJ7tv_LZ0VDZSL8LeOwAs=w1008-h646-no)

구현한 인터페이스가 6개가 있는데요, 각각의 용도를 간단히 살펴보면 다음과 같습니다.

<br>

인터페이스 | 용도
:---:|:---:
Serializable | 원격으로 객체를 전송하거나, 파일에 저장할 수 있음을 지정
Cloneable | Object 클래스의 clone() 메소드가 제대로 수행될 수 있음을 지정. 즉, 복제가 가능한 객체임을 의미
Iterable | 객체가 "foreach" 문장을 사용할 수 있음을 지정
Collection | 여러개의 객체를 하나의 객체에 담아 처리할 떄의 메소드 지정
List | 목록형 데이터를 처리하는 것과 관련된 메소드 지정
RandomAccess | 목록형 데이터에 보다 빠르게 접근할 수 있도록 임의로 접근하는 알고리즘이 적용된다는 것을 지정

<br>

이와 같은 인터페이스를 ArrayList가 구현했다는 것은 

각 인터페이스에서 선언한 기능을 ArrayList에서 사용할 수 있다는 말입니다.

<br>

### ArrayList의 생성자

![ArrayList_Constructor](https://lh3.googleusercontent.com/HDz0CLrBe7rT3oIPba8w0ujt_NwzyfYxQdzidjZaqTVRuPWbsHkB0YSNEOJDo9bi3tb67ohoX-how1wG9ac7Yn7yHfgGeMpYbG7AeojyjwsTynslwwsD2XWUXAmMZ3rsOiWZkmtPxdYmzQdUJEg-UWz9W-fGYkcjBdYPpPgQb96z8-zBWSso8ziezt-4GYHmaWQHKQfqdpLC0jHxrptidwLaJxSIJtS2qTerFadCHfpXk4Uat0mxAGg0RA0sA5yduuXS9KDritpJ96SMVtzfc5wBKbOCl5QY3PtlndFb-J3ttqe8zjdTKt0hubIyn3bqqQSSiT7LWv3mzi6aonPne-2AsadP94PxspR1G82nQ-aNcZKOlEEWbfM5NWT75ub7U-SVmC2GFZbAzWs9reXedI0IEKJHDiafMIFBm-JRVFDxWffAIBb0oVkvj0zrWYmG1DpUJ3eqn3Ouem4Hq6BVzk1rLaGqOM5JYppEOgfrPri2-U_4NYYlJuFIbHq4wOAyyd3BiNhZYZ7Uli0vg2Q6ePGe2W-j-nQqr6ryLyti6UF54VC-UVX-Pq6vE2AYMrf-UUcpUtmEscN6E22F3G5eur2jMgLzyzBdYjV1egY=w1335-h460-no)

ArrayList의 생성자는 3개가 있습니다.

예제를 통해 ArrayList를 사용해보겠습니다.

>ListSample.java

~~~ java
import java.util.ArrayList;

public class ListSample {
    public static void main(String[] ar){
        ListSample ex = new ListSample();
        ex.checkArray();
    }

    public void checkArray(){
        ArrayList list1 = new ArrayList();
        list1.add(new Object());
        list1.add("Teemo");
        list1.add(777);

        for(Object obj: list1){
            System.out.println(obj);
        }
//        java.lang.Object@2471cca7
//        Teemo
//        777
        System.out.println();
        ArrayList<String> list2 = new ArrayList<>();
        // ArrayList<String> list2 = new ArrayList<String>();
        System.out.println("list2.size() = " + list2.size());
        // list2.size() = 0
        list2.add("cute Teemo");
        list2.add("super Teemo");
        System.out.println("list2.size() = " + list2.size());
        // list2.size() = 2

        for(String str: list2){
            System.out.println(str);
        }
//        cute Teemo
//        super Teemo
        System.out.println();

        ArrayList<String> list3 = new ArrayList<>(3);

    }
}
~~~

일단 ArrayList를 사용하려면 java.util.ArrayList를 import 해야합니다.

checkArray()를 살펴보겠습니다.

list1은 첫번째 생성자로 만든 객체입니다.

여기에 add()메소드를 이용해 값을 넣고 있습니다.

그런데 보통 ArrayList를 이렇게 사용하지는 않습니다.

위에서는 서로 다른 타입의 객체를 하나의 list1에 다 넣고 있는데, 

보통은 한가지 종류의 객체만 저장합니다.

서로 다른 타입의 객체를 담을 때는 DTO 객체를 하나 만들어서 담는게 좋습니다.

<br>

list2는 제네릭을 사용하여 만든 String 객체만을 받는 ArrayList입니다.

> ~~~ java
ArrayList<String> list2 = new ArrayList<>();
~~~
와
> ~~~ java
ArrayList<String> list2 = new ArrayList<String>();
~~~

는 똑같은 말입니다. JDK 7부터 위와 같이 더 간편하게 쓸 수 있게 됬습니다.

그래서 list2에서는 add()메소드를 이용해 String값만 받고 있습니다.

size()는 해당 객체에 들어가있는 값의 개수를 리턴합니다.

list2에는 "cute Teemo"와 "super Teemo" 이렇게 두개 값이 있으므로 2가 나옵니다.

<br>

그러면 여기서 생기는 궁금증이 이렇습니다.

'이렇게 한 종류의 타입만 쓸꺼면 배열이랑 다른게 뭐지?'

String[] strArray = new String[]{"cute Teemo", "super Teemo"};

로 써도 되는데 말입니다. 차이점이라 하면

배열은 초기화할 때 크기를 미리 정해주어야 합니다.

하지만 ArrayList는 크기가 유동적입니다.

<br>

예를 들어 이런 상황을 가정해보겠습니다.

현재 저장해야할 문자열이 10개가 있습니다. 지금은 그렇지만

나중에는 저장해야할 문자열이 100개가 될지 1000개가 될지 모릅니다.

이런 상황에서 배열을 사용한다면 먼 미래를 위해 크기가 1000인 객체를 만들어야합니다.

그러면 현재는 990만큼의 메모리가 낭비가 되는거죠.

하지만 ArrayList는 다릅니다. 첫번째 생성자를 보면 처음에 생성되는 객체는

10개의 저장공간(an initial capacity of ten)을 갖는 걸 알 수 있습니다.

10개의 공간이 다 찬 상태에서 add()를 이용해 문자열을 더 추가해도

저장공간이 자동으로 늘어납니다.

<br>

이제 ArrayList를 사용해야하는 상황이 명확해진 것 같습니다.

하지만 자바 프로그램이 돌아가는 동안 ArrayList 객체의 크기를 늘려주는

작업이 진행되면 프로그램의 성능이 저하됩니다.

그렇기 때문에 저장될 데이터의 크기가 어느정도 예상이 되면

3번째 생성자를 사용하여 초기 생성 크기를 정해주는게 좋습니다.

예제 코드에서는 list3이 3의 크기를 설정해서 생성된 객체입니다.

<br>

### ArrayList에 데이터 담기

<br>

![ArrayList_add](https://lh3.googleusercontent.com/VG9c3hETI0hIQJRk7_LefrZUiyhxue8jcsBA5qADHb9ycby4yJm8sPc1V6ES8T9gVOQOLZoiJjESMIrktPBTP-UODm5xkwk4YPsTit-IuCceef9gwKoZbi1_T-i83gRmipvbbgpn_uW-KaHHr0EXfEUNzdlYC0aVffiO7n1CwTjDsAw8IPPPt0bJUfYkkGtj8zsm7HFz5FxRmkvDunOOmXg_LIDzQn_041eE1BSOX1nGs-YyFV_wqiTcz-igsaYcwKuTi1CWOlvEreyIDKb1QKAAvKSW1709Z_1S2NAF5nkGLaArQYkXWUYMm4U7qhJZN_6vWtoNErHPAIss_MxbHqhlRh6Vpej1krCO_JLWckT-BrcHOQBdPv6UppjK3FIa1SW0DOri70NN_KxUuXK18Enb3emhzWorTgZBSF-_iOZS_CmLf2D6e_MohHLdUfn7PflExlirhcO9HONrjjhqts_fD-Jo68KMin3fHgSJNqJ6MK5TxHDMjOz3x1H6BGcc0bUbiqFBVE7RKHaBY4ZaGVeOLUAlNfc4itAbCNo-RuBgMOK98oOrTQzrazJQchbnwJs2fFg1E8r6jqb8lTP64xm-f4xJSI0C-aWuBWs=w1335-h238-no)

위에 나와있는 4개의 메소드가 ArrayList 객체에 데이터를 담을 때 사용되는 메소드 입니다.

예제를 통해 알아보겠습니다.

> ListSample2.java

~~~ java
import java.util.ArrayList;

public class ListSample2 {
    public static void main(String[] ar){
        ListSample2 ex = new ListSample2();
        ex.checkArray();
    }

    public void checkArray(){
        ArrayList<String> list1 = new ArrayList<>();
        list1.add("T");
        list1.add("E");
        list1.add("E");
        list1.add("O");
        list1.add(3,"M");

        for(String str: list1){
            System.out.println(str);
//            T
//            E
//            E
//            M
//            O
        }
    }
}
~~~

checkArray()를 보면 list1 객체를 만든 후,

첫번째 메소드를 이용해 4개의 문자열값을 넣었습니다.

그 다음 두번째 메소드를 이용하여 3번째 자리에 "M"을 넣었습니다.

그러면 원래 list1은 T, E, E, O 가 있었는데

원래 3번째 자리였던 "O" 자리에 "M"이 들어가고

"O"는 그 다음으로 밀려납니다.

ArrayList의 값을 for문으로 출력하는 건 배열출력과 똑같습니다.

출력 결과를 보니 역시 TEEMO 순서대로 저장되어 있는 걸 확인할 수 있습니다.

<br>

다음 예제를 살펴보겠습니다.

> ListSample3.java

~~~ java
import java.util.ArrayList;

public class ListSample3 {
    public static void main(String[] ar){
        ListSample3 ex = new ListSample3();
        ex.checkArray();
    }

    public void checkArray(){
        ArrayList<String> list1 = new ArrayList<>();
        list1.add("T");
        list1.add("E");
        list1.add("E");
        list1.add("M");
        list1.add("O");

        ArrayList<String> list2 = new ArrayList<>();
        list2.add("Cute ");
        list2.addAll(list1);

        int list2Size = list2.size();

        for(int index=0; index<list2Size; index++){
            System.out.println(list2.get(index));
        }
//        Cute
//        T
//        E
//        E
//        M
//        O
    }
}
~~~

checkArray()를 보면 list1에 저장된 문자열은 순서대로

"T", "E", "E", "M", "O" 입니다.

다음에 list2를 만들어 "Cute "문자열을 넣고

addAll()메소드를 이용하여 "Cute "값 다음 순서에

list1을 통째로 넣었습니다.

이번에 list2의 값을 확인하기 위해 for문에서는 get()메소드를 이용했습니다.

<br>

다음 예제를 살펴보겠습니다.

> ListSample4.java

~~~ java
import java.util.ArrayList;

public class ListSample4 {
    public static void main(String[] ar){
        ListSample4 ex = new ListSample4();
        ex.checkArray();
        ex.checkArray2();
    }

    public void checkArray(){
        ArrayList<String> list1 = new ArrayList<>();
        list1.add("Super ");

        ArrayList<String> list2 = new ArrayList<>();
        list2 = list1; // shallow copy
        list1.add("Teemo");

        for(String str: list2){
            System.out.println(str);
        }
//        Super
//        Teemo
    }

    public void checkArray2(){
        ArrayList<String> list1 = new ArrayList<>();
        list1.add("Panda ");

        ArrayList<String> list2 = new ArrayList<>();
        list2.addAll(list1);
        list1.add("Teemo");

        for(String str: list2){
            System.out.println(str);
        }
//        Panda
    }
}
~~~

먼저 checkArray()를 살펴보면

list1객체를 만든 후, "Super "라는 문자열을 넣었습니다.

그 다음, list2 객체를 만들고 여기에 list1 객체를 넣었습니다.

그 후, list1에 "Teemo"라는 문자열을 추가로 넣었습니다.

이 때, list2의 값을 출력해보니 list2에는 추가하지 않았던

"Teemo"도 나오는 걸 볼 수 있습니다. 

즉, list1의 값이 바뀌면 list2의 값도 따라 바뀌는 거죠.

list2 = list1; 과 같이 대입해줬기 때문인데요,

이와 같은 copy를 shallow copy라 부릅니다.

<br>

list2 = list1; 의 의미는 

list1의 주소값을 list2에 대입하겠다는 것입니다.

그래서 결국 list1의 값이 바뀌면 list2도 list1의 주소를 참조하기 때문에

값이 따라 바뀌게 됩니다.

list1의 내용만 그대로 복사하고 싶다면

다른 메소드(System.arraycopy())를 써서 Deep copy를 하든지

아니면 checkArray2()에 나온 것처럼 addAll()을 사용해야 합니다.

checkArray2()에서는 list1의 값이 바껴도 list2는 변함없는 걸 볼 수 있습니다.

<br>

### ArrayList 객체에 있는 데이터를 배열로 추출하기

<br>

이때는 다음의 두 메소드를 사용하면 됩니다.

![toArray](https://lh3.googleusercontent.com/3EoVcPmmpDcPC-qiEVFCV40dut8kDFy8020XTycr2vJYSfzvpCDkTdR85Wc8cWoXI3wMJmCHIh6s3jli_vAvWAe90DnE_dosZ6IZFlHot5b9nCezhmIkwl8nAS7-OqJh9viwV8v-E6rQ4bHzDxhtobN2h1E4-EDHvpLI2x3k4tWUcCPE3WTEdyvOcKBZUkYB_qzSuqP4VA2dWBCiDGKUcv_mEqSdXrFcHycO4aYrbdlZypPhRhUT_hkiPJr_2RVbT1bew2vZQvlHkPDcb0oQccETwm3ZlYQ3GC1Vnb_Oa_Qdgcpr89AF4E7Z1g5Ce7qaZvGt-_mp4S74J0bAUnk-mFjl0wTN8RmivMKfEmleq59jFthWBP_JXqrxuTmw9fE6K0-AEBCU2UNyDbZyWV7fzLNP3BbhF-eQ917yBQZ0srxtCFoqciy4N5obrLzhDb3ioUJgan7rGEmE7TPjAyRurT7A1j6QCT_SWt5aO77lgjoabdXLMdmuf_AAfEA31pZEp8UoPTrLmk2-Rk3dkudF4IA7fZ0LnV-RHUnZ8vpWCwRPECWfpVgukeIN4_1xDjjYlqeQxVxiiA9nUmUqf6qbzuEq_Pyq7I_3Z8XmnMM=w1335-h79-no)

그런데 첫번째 메소드는 매개변수가 없고 Object 배열로만 리턴합니다.

즉, 제네릭을 사용하여 만든 ArrayList 객체를 배열로 추출할 때는

두번째 메소드를 사용하는 것이 좋습니다.

<br>

예제 코드를 살펴보겠습니다.

> ListSample5.java

~~~ java
import java.util.ArrayList;

public class ListSample5 {
    public static void main(String[] ar){
        ListSample5 ex = new ListSample5();
        ex.checkArray();
    }

    public void checkArray(){
        ArrayList<String> list1 = new ArrayList<>();
        list1.add("Little");
        list1.add("Devil");
        list1.add("Teemo");

        String[] tempArray1 = new String[0];
        String[] strList1 = list1.toArray(tempArray1);
        System.out.println("String str: strList1 print");
        for(String str: strList1){
            System.out.print(str + " ");
        }
        System.out.println();
        System.out.println("String str: tempArray1 print");
        for(String str: tempArray1){
            System.out.print(str + " ");
        }
        System.out.println();
//        String str: strList1 print
//        Little Devil Teemo
//        String str: tempArray1 print


        String[] tempArray2 = new String[2];
        String[] strList2 = list1.toArray(tempArray2);
        System.out.println("String str: strList2 print");
        for(String str: strList2){
            System.out.print(str + " ");
        }
        System.out.println();
        System.out.println("String str: tempArray2 print");
        for(String str: tempArray2){
            System.out.print(str + " ");
        }
//        String str: strList2 print
//        Little Devil Teemo
//        String str: tempArray2 print
//        null null
        System.out.println();
        System.out.println();

        String[] tempArray3 = new String[5];
        String[] strList3 = list1.toArray(tempArray3);
        System.out.println("String str: strList3 print");
        for(String str: strList3){
            System.out.print(str + " ");
        }
        System.out.println();
        System.out.println("String str: tempArray3 print");
        for(String str: tempArray3){
            System.out.print(str + " ");
        }
//        String str: strList3 print
//        Little Devil Teemo null null
//        String str: tempArray3 print
//        Little Devil Teemo null null
    }
}
~~~

checkArray()를 살펴보면 list1이라는 객체를 만들었고

여기에는 "Little", "Devil", "Teemo"라는 3개의 문자열 값이 있습니다.

그리고 이 list1을 총 3번 배열로 추출했는데요,

strList1에서는 toArray()메소드의 매개변수로 

크기가 0인 String 배열(tempArray1)을 넣었습니다.

strList2에서는 toArray()메소드의 매개변수로

크기가 2인 String 배열(tempArray2)을 넣었습니다.

strList3에서는 toArray()메소드의 매개변수로

크기가 5인 String 배열(tempArray3)을 넣었습니다.

주석으로 각각의 strList와 tempArray를 출력한 결과를 볼 수 있는데요,

<br>

일단 공통적으로 strList에는 list1이 배열로 추출되어 잘 들어갔습니다.

tempArray1은 애초에 크기가 0이였으니 출력할 값도 없습니다.

tempArray2는 크기가 2로 list1에 있는 데이터의 개수(3개)보다 작습니다.

그러니 다 null로 된 String 배열이 되버립니다.

tempArray3은 크기가 5로 list1에 있는 데이터의 개수(3개)보다 큽니다.

그러니 0번째 자리부터 시작해서 값을 채워나가고 남는 자리는 null로 채웁니다.

<br>

정리해보면 배열을 추출할 ArrayList 객체에 들어가있는 데이터의 수를 A라 하고

toArray()의 매개변수로 들어간 배열의 크기를 N이라 하면

N < A 일때는 배열의 모든 값은 null이 됩니다.

N == A 일때는 배열에 A개의 데이터가 모두 들어가게 되고,

N > A 일때는 배열에 A개의 데이터가 모두 들어가고, 남은 (N-A)개의 자리는 null로 채워집니다.

<br>

복잡하게 알아봤지만 결론은 이겁니다.

어차피 strList1, strList2, strList3같이 

추출된 배열을 넣을 변수를 선언해주는 식이라면

매개변수로 넣어지는 배열은 무의미하므로,

메모리 차지하지 않게 크기가 0인 배열을 넘겨주는게 젤 좋다는 겁니다.

<br>

### ArrayList객체에 있는 데이터 삭제

<br>

![clear()](https://lh3.googleusercontent.com/x-qYm35Noeg__J8tN9HtT0VsdI_JRdVhCX0-XQe0JAvtESURP_KBfcAY7NYP75y77_mOzPaUIni_BTK2zG2x9HyGBes-zWodfPKC-q4Jbp8QywUhw6QfCvz4tNNN0j3rWBeSBufwjWaDvHMgYqIFBwsN4d6XyOQ03rF_LCWdPcxd8oyB8pmI3O5jFhCqFzxyJeHAk1eMsfBzCDwONQS9yNJeTJ2B8SKl4-_sGA8O6Ok_Md4WLxnRY5K7rPTucwAGh3jBnoYe18SpIZ5-LnBawqgkzXxW36ciFIF6Q4kFfCWnqfaQ1IvaiwePDYmI7VLkE4Ds6kDu0m36Ro9N0Nn5StBDlidzolYweCcpLM7QNqczkJK9ZzaqXFjESdikWvUmLYz0CgN_AgwHFGFheHE5OfKhVYjl1Hf2zLvBUE6tCNYC2t4otEJH-5berMHQ5J80advENkxKWGRZsYJUlKK79YGYV2erGa9TqvSHrEKmxKrz4gfDCrH40WwOWCvdOeivCMu4UQa2GRYzuJIIv5Jb-nhFyPR6RVHY454nKyW9_BYjDDfrXQylkWEs8lNYoqACTQ9KvQEYALieBpKEImJ5eTXiT0jTHTZJNMBLA6Q=w1335-h39-no)
![remove()](https://lh3.googleusercontent.com/G65XZtd2aWlsn8rq_cTApuIimOqFVjd85VzWCZyYAbpfCWwDu9FliCatvzlSp_3UYTAaLGSD-9UuriiuvPScCGWd1yJlgn3VKNHeqT01ASC9RTTZbWPPgyZQimSrC75uZpvPVfAHiIdjyzyyOvmfGtkOmDZd0J6t_oGsT4ay2DuuOaXiv9zjLJE2oRjnof-oHw5Jy6tRPnkwLuFXM9VLihbjewR32JcTw26657k5LK-hNFDmA-pHC0-35KbsaCo1bbyneKZSnquGlBgf-LTq_jBrAEsrqtFao40DajSWZKTTBUbqfxudqMChMDtHdEINa4RyJHabZMADFl0AigguN5S0n6IUidG-SSIGjypiR0r72m_Ch-6-_vbk-LYb3pjLxa6bMUYh1Re_NvKAZLZBi6A5l2Kds-rJEv_EcHeTgdbvs-aE-mPThd7t5oJJkgXLtDK48PonwSdaIdGXF86yr2uyv022OOapQyzM2wEt-8FM-GwLRwKMKQZcr6RCIWvNow5Lmwltg915DVKsuvWUUWKiB2uTy3Xw4pG48G9UjpnnrSYYLP8Wy5Czzt6-HJLLCZLC5giUnx6L8CMCRP_qqJaIiSg3E0LtUDyDKw8=w1335-h119-no)

ArrayList 객체에 있는 데이터를 삭제하는 메소드는 위와 같이 4개가 있습니다.

예제로 살펴보겠습니다.

> ListSample6.java

~~~ java
import java.util.ArrayList;

public class ListSample6 {
    public static void main(String[] ar){
        ListSample6 ex = new ListSample6();
        ex.checkArray();
    }

    public void checkArray(){
        ArrayList<String> list1 = new ArrayList<>();
        list1.add("Teemo");
        list1.add("Gnar");
        list1.add("Jinx");
        list1.add("Teemo");
        System.out.println("Removed " + list1.remove(0));

        int list1Size = list1.size();
        for(int index=0; index<list1Size; index++){
            System.out.println("list1.get(" + index + ") = " + list1.get(index));
        }
//        Removed Teemo
//        list1.get(0) = Gnar
//        list1.get(1) = Jinx
//        list1.get(2) = Teemo

        System.out.println("Remove success ? " + list1.remove("Teemo"));
        list1Size = list1.size();
        for(int index=0; index<list1Size; index++){
            System.out.println("list1.get(" + index + ") = " + list1.get(index));
        }
//        Remove success ? true
//        list1.get(0) = Gnar
//        list1.get(1) = Jinx
    }
}
~~~

list1.remove(0)을 하니 list1의 0번째 자리 데이터인

"Teemo"가 지워집니다.

이때의 리턴값은 위의 API에서 볼 수 있듯이 element네요.

<br>

list1.remove("Teemo")를 하면 list1의 element중에서

"Teemo"를 찾아 처음으로 나오는 element를 지웁니다.

이때의 리턴값은 boolean 값입니다.

<br>

다음 예제를 살펴보겠습니다.

> ListSample7.java

~~~ java
import java.util.ArrayList;

public class ListSample7 {
    public static void main(String[] ar){
        ListSample7 ex = new ListSample7();
        ex.checkArrary();
    }

    public void checkArrary(){
        ArrayList<String> list1 = new ArrayList<>();
        list1.add("Teemo");
        list1.add("Gnar");
        list1.add("Jinx");
        list1.add("Teemo");
        list1.add("Jax");

        ArrayList<String> temp = new ArrayList<>();
        temp.add("Teemo");

        System.out.println("remove success ? " + list1.removeAll(temp));
        int list1Size = list1.size();
        for(int idx=0; idx<list1Size; idx++){
            System.out.println("list1.get(" + idx + ") = " + list1.get(idx));
        }
//        remove success ? true
//        list1.get(0) = Gnar
//        list1.get(1) = Jinx
//        list1.get(2) = Jax
    }
}
~~~

여기서는 list1.removeAll(temp)를 이용해

list1에 있는 "Teemo"라는 값을 가진 element들을

한꺼번에 지워버리고 있습니다.

<br>

### ArrayList 객체의 값 변경

<br>

![set()](https://lh3.googleusercontent.com/AUH18sA2ypEW_YX1ZJkqjCaclJppQi_pbB1auBJwUFELeKYfl62vLpgcMqHqDdgeOBT21jfu6kWC1KnigONfIL2H3SjbhHbfIfahHL7ospuMNmB6cnqjXBE29Ig9Z3c_EAUFcOscowZEf_LWgA_CB0aSfLt8tzQBKLF65SUf2grZlPzCvS-stRCh7vARhx0YMElElyc7QlJrNmiG8Nchp7o4j4qTYKwWEkzt2rzfZZJ1UtEdQVxsf_yzLv-vUKCI7hOUfQ8ebmXZn3EhGihxE3u3jFOB4f5wanW5OhNc7PBOqe6ck23BoJcsRrpecJSjxOl6CMZ0_m8ZOok1Qtlv4-5BPE4q6PiV1UFRCuC-DlCirIZenEjnr8EWQSeJ5zXG8pSQusrqxnYaE0zwF_zBKMbZAK6Ivm5tnacsRTr2RoxvIXxaGE4p9vMt2aH62sDscvMySDRUusfvixMMVsTwDAuy-eLyf-2kItJmq1ygGQKGXeQOvILifuoUGqLW8cdOKMInKyoK-pk_oIp-ce4V-3fY8kpu8cbflPxfXb-Yxy3TXFi3rBRQ7N7Ws5DQYWZ9DDA1DpUmU-dcIwQuO9I4PZ5fQ5eteGkqZkfqgMs=w1335-h35-no)

ArrayList 객체의 값을 변경할 때는 set()이라는 메소드를 씁니다.

예제를 살펴보겠습니다.

> ListSample8.java

~~~ java
import java.util.ArrayList;

public class ListSample8 {
    public static void main(String[] ar){
        ListSample8 ex = new ListSample8();
        ex.checkArray();
    }

    public void checkArray(){
        ArrayList<String> list = new ArrayList<>();
        list.add("Teemo");
        list.add("Gnar");
        list.add("Jax");
        list.add("Teemo");

        list.set(2, "Jinx");

        for(String str: list){
            System.out.print(str + " ");
        }
//        Teemo Gnar Jinx Teemo
    }
}
~~~

list.set(2, "Jinx")를 이용하여

원래 list의 2번째 자리에 있던 "Jax"를 "Jinx"로 바꾸고 있습니다.

<br>
<hr>
<br>

## Stack

<br>

Stack 클래스에서 대해서는 위에서 간단하게 설명하였습니다.

생성자와 메소드를 살펴보겠습니다.

![stack_API](https://lh3.googleusercontent.com/nTF89HdbEJNBzgH7t929dsUaacAZXzpktwIeclnPmwVbapqenOnamihHPDXLmxgNxUaVrK3sGrspC4yOJuF5_I5rgoUIxfROVp9mwa2i7SuCc8an8P0K2eKmCmlmp5XXc-1i3b7OFoxH-AxaKypg9f6iCeW9695hnMWUSs849EQb4BmqgD-JRPVJHb8UW3IgCRwRL2OzXdhed817BKDN0_rrUEUnhpKrC7bD6_miSJHEC66dU0D1e-cd8m_LKlh8lSU0tvlGlzesP_0WhJDejuVKx3crwgK4zVZ-mXUnrfhtoVGtuCUVT-x03ol_AcvGdOIDFkTJOnhHXxwcjyS_zhkn-GuAVWNyq-kLCd29FMVlMl-OYJzOCMVZ8aC7ru3aybbTms6tO0gBFmH4FebCg0Acfv1jQAmoqX6Jo89q-WS0q0VC7mBuqLZ4K_SXUbv5avQWrYK_zXAXFRG6Ur1hLT7Bc18V2XVehisoFK25Fd67yIQ7Wy7qsTNWdYd57bngY7hu_61w04_GvZPg86SKawpwxyInHzgG-R2jzPjzsmRzpfQmZd3R0js1dw9BH7aswiLV4WrIIsztPPxFXiPrUzjqkNfFxMPgZb3Kvpg=w1335-h486-no)

그럼 생성자를 이용하여 객체를 만들고

메소드를 사용해보는 예제를 살펴보겠습니다.

> StackSample.java

~~~ java
import java.util.Stack;

public class StackSample {
    public static void main(String[] ar){
        StackSample ex = new StackSample();
        ex.checkStack();
    }

    public void checkStack(){
        Stack<Integer> intStack = new Stack<>();

        for(int index=0; index<5; index++){
            intStack.push(index);
            System.out.print(intStack.peek() + " ");
        }
//        0 1 2 3 4
        System.out.println();

        System.out.println("intStack.size() = " + intStack.size());
//        intStack.size() = 5
        System.out.println("intStack.empty() = " + intStack.empty());
//        intStack.empty() = false

        System.out.println("intStack.pop() = " + intStack.pop());
//        intStack.pop() = 4
        for(int item: intStack){
            System.out.print(item + " ");
        }
//        0 1 2 3
        System.out.println("intStack.size() = " + intStack.size());
//        intStack.size() = 4

        System.out.println("intStack.pop() = " + intStack.pop());
//        intStack.pop() = 3
        for(int item: intStack){
            System.out.print(item + " ");
        }
//        0 1 2
        System.out.println("intStack.size() = " + intStack.size());
//        intStack.size() = 3

        System.out.println("intStack.search(1) = " + intStack.search(1));
//        intStack.search(1) = 2

    }
}
~~~

checkStack()을 보면

먼저 intStack 이라는 객체를 생성했습니다.

그리고 for문을 이용해 값을 넣고있습니다.

여기서 사용하는 메소드는 push()입니다.

peek()는 가장 마지막에 push()된 element를 리턴합니다.

size()를 통해 intStack에 몇개의 element가 있는지 확인하고,

empty()를 통해 intStack이 텅빈 객체인지, element가 있는 객체인지 확인합니다.

아까 size()를 통해 5개의 element가 있다는 걸 확인했으니 당연히 false입니다.

pop()은 가장 마지막에 push()된 element를 리턴하며 삭제합니다.

(뽑아낸다는 표현이 적절할 것 같습니다.)

처음에 pop()을 쓰니 맨 마지막에 들어갔던 4 가 뽑혀져 나오네요

그리고 intStack은 0 1 2 3 의 element를 갖게됩니다.

이 상태에서 또 pop()를 쓰니 마지막 element인 3이 뽑혀져 나옵니다.

intStack.search(1)은 intStack의 element 중에서

1이라는 값을 갖는 element가 몇번째 자리인지를 리턴합니다.

특이하게 이때 자리를 세는건 1-based입니다.(위의 메소드 설명에도 나와있듯이...)

보통 프로그래밍에서는 0-based인데 말이죠.

어쨋든 그래서 1은 두번째 자리에 있으므로 2가 리턴됩니다.