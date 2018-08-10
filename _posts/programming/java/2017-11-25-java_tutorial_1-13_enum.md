---
layout: post
title:  "[Java] enum 클래스"
date:   2017-11-25 13:50:00
description: enum 클래스
categories:
- programming
- java
banner_image: /programming/java/java-logo.jpg
comments: true
---

enum 클래스

---

## enum 클래스

<br>

어떤 클래스가 상수(constant)만으로 만들어진 경우에는

반드시 class로 선언할 필요는 없습니다.

이때 class대신에 enum으로 선언하면, 

이 객체는 '상수의 집합'이라는 것을 명시적으로 나타냅니다.

<br>

다음에 예제를 살펴보겠습니다.

OverTimeValues.java 로 만들면 됩니다.

~~~ java
package c.enums;

public enum OverTimeValues {
    /*
    야근수당
    평일 3시간 이상 && 5시간 미만 수당 != 평일 5시간 이상 수당
    주말 4시간 이상 && 8시간 미만 수당 != 주말 8시간 이상 수당
     */
    THREE_HOUR,
    FIVE_HOUR,
    WEEKEND_FOUR_HOUR,
    WEEKEND_EIGHT_HOUR;
}
~~~

enum 클래스에 있는 상수들은 지금까지 살펴본 변수와 다르게

별로도 타입을 지정할 필요도, 값을 지정할 필요도 없습니다.

상수들의 이름만 콤마로 구분하여 나열하면 됩니다.

<br>

이번엔 이 enum클래스를 사용해보겠습니다.

~~~ java
package c.enums;

public class OverTimeManager {
    public int getOverTimeAmount(OverTimeValues time){
        int amount = 0;
        System.out.println("time = " + time);

        switch(time){
            case THREE_HOUR:
                amount = 18000;
                break;
            case FIVE_HOUR:
                amount = 30000;
                break;
            case WEEKEND_FOUR_HOUR:
                amount = 40000;
                break;
            case WEEKEND_EIGHT_HOUR:
                amount = 60000;
                break;
        }

        return amount;
    }

    public static void main(String[] ar){
        OverTimeManager ex = new OverTimeManager();
        int amount = ex.getOverTimeAmount(OverTimeValues.THREE_HOUR);
        System.out.println("amount = " + amount);
        //time = THREE_HOUR
		//amount = 18000
    }
}
~~~

main()메소드를 살펴보면, 객체도 안만들고 OverTimeValues.THREE_HOUR 와 같이 사용했습니다.

객체를 만들어서 사용해도 됩니다.

주의할 점은, System.out.println("time = " + time); 이

time = THREE_HOUR 로 출력됬다고 해서, THREE_HOUR이 String인 것은 아니라는 것입니다.

즉, getOverTimeAmount("THREE_HOUR")로 넘기면 에러가 납니다.

<br>

다른 예를 들어보겠습니다.

~~~ java
package c.enums;

public enum OverTimeValues2 {
    THREE_HOUR(18000),
    FIVE_HOUR(30000),
    WEEKEND_FOUR_HOUR(40000),
    WEEKEND_EHIGHT_HOUR(60000);

    private final int amount;

    OverTimeValues2(int amount){
        this.amount = amount;
    }

    public int getAmount(){
        return amount;
    }
}
~~~

이렇게 enum클래스를 만들고,

~~~ java
package c.enums;

public class OverTimeManager2 {
    public static void main(String[] ar){
        System.out.println(OverTimeValues2.FIVE_HOUR); // FIVE_HOUR
        System.out.println(OverTimeValues2.FIVE_HOUR.getAmount()); // 30000

        OverTimeValues2 value1 = OverTimeValues2.FIVE_HOUR;
        OverTimeValues2 value2 = OverTimeValues2.THREE_HOUR;

        System.out.println(value1.compareTo(value2)); // 1
    }
}
~~~

이렇게 enum클래스 만들 때, 아예 각 상수의 값을 정할 수도 있습니다.

대신 이때는 생성자를 꼭 적어줘야합니다.

enum클래스의 생성자는 접근제어자로 public, private는 안됩니다.

즉, 각 상수를 enum클래스 내에서 선언할 때에만 이 생성자를 사용할 수 있습니다.

<br>

첫번째 예와 두번째 예의 장단점이 있습니다.

예를 들어, 3시간 근무할 경우 야근 수당(THREE_HOUR)이 18000원에서 20000으로 올랐습니다.

그럼 첫번째 예는 원격서버에서 값을 읽어오도록 하면 됩니다.

그런데 두번째 예는 코드 안에 값이 저장되있기 때문에, 

실행중인 자바 프로그램을 중지하고 코드를 수정하고, 다시 실행시켜야 하는 단점이 있습니다.

<br>

하지만 값을 원격서버에서 읽어오는 것보단 프로그램 내에 있는걸 읽는게 더 빠를 것입니다.

<br>
<hr>
<br>

## enum 클래스의 부모는 무조건 java.lang.Enum

<br>

소제목 그대로입니다.

enum클래스에서는 다른 클래스를 상속받을 수 없습니다.

또한 다른 enum클래스를 상속받을 수도 없습니다.

<br>

Enum 클래스의 부모 클래스는 Object클래스이기 때문에

Object 클래스의 메소드들은 1개 빼고 모두 사용할 수 있습니다.

<br>

일단 Enum클래스에서 사용하지 못하는 메소드에는 clone()이 있습니다.

java api 문서에 Enum클래스를 보면 clone()이 다음과 같이 설명되어 있습니다.

![enum_clone](https://lh3.googleusercontent.com/5PMv7Q5MvlqTQoZkumzK-oP9p9ZydRmR5-K7SP38K_F-RRJfhFqV8VbPVSVP514DQImV77TzKlhL5xdE2QkeJXVSR8u9t3kVDboaRE-0pbua78MMSgPJVUEFp2rJ96EUyA6p2c8fKh4Iz5jCf2O2QmI2mWygrCetiQAbRg_pX0Hx6k0x09Q5Ahr2rIQ-ZbsqGjvM8tEkkOIsLg2dPMXJTY3b1QAy_8woAKRLLIrDRCIjM6Pd3c4tartsOAS52pTJAN2J-7MCjwY1jAdThWsItS2ycZTiUYR_kRfwnthM_Miky9kfS0FG3MCchuUXP4BDj1-lTjOtjPwTi2tnQNCYjOHVxri5NmYhjEpjxpY-TC7imOMmE40f2yOmLOAzKQkZ0-SeDuPDkw9RiHlKp7pmThWk4WCIOa2Y-r-x_M4-vlwMa8HyHY7-L4bauenohb7_39eEAKJlGa0Ke0viot1DtG8VpC5lkiIHkEsnvjUWhg0xbuQO0jXTy9J6IUW4aiwUKGCq8y3T4irqqnEm5YS9MM_1Wv_o2OZjOW6Wh5cUmdGYRIH8VgXf5wl4x0WWTILu-RLS0ugJr8qDMNE6-Qn2vVPd-KiAEq20UIrlVZwn9Q=w1816-h648-no)

'singleton' 상태를 유지하기 위해 clone()을 Enum에서 못쓰게 했다고 나와있습니다.

<br>

Enum클래스에서 오버라이딩 못하는 Object클래스의 메소드는 4가지가 있습니다.

아까 못쓴다고 한 clone()과 final로 선언된 finalize(), hashCode(), equals() 입니다.

<br>

finalize()는 GC(Garbage Collection)과 관련된 메서드이므로

자바 개고수가 되기 전까진 사용금지입니다.

(고수분들이 제 글 볼 일도 없겠죠)

즉, hashCode()와 equals()는 사용해도 되지만, clone()과 finalize()는 사용해선 안됩니다.

<br>

나머지 Enum 클래스에 선언되어 있는 메소드에는 

compareTo(E e), getDeclaringClass(), name() 등등이 있습니다.

자세한 설명은 API문서에 나와있습니다.

여기서는 compareTo()와 API에 비공식적으로 설명되어 있는 values()메서드를 살펴보겠습니다.

<br>

### compareTo()

<br>

아까 두번째 예시의 코드에 compareTo()를 사용했습니다.

~~~ java
package c.enums;

public class OverTimeManager2 {
    public static void main(String[] ar){
        System.out.println(OverTimeValues2.FIVE_HOUR); // FIVE_HOUR
        System.out.println(OverTimeValues2.FIVE_HOUR.getAmount()); // 30000

        OverTimeValues2 value1 = OverTimeValues2.FIVE_HOUR;
        OverTimeValues2 value2 = OverTimeValues2.THREE_HOUR;

        System.out.println(value1.compareTo(value2)); // 1
    }
}
~~~

결과가 1값이 나왔는데요, OverTimeValues2를 살펴보면

value2(THREE_HOUR)이 value1(FIVE_HOUR)보다 한단계 먼저 선언되있기 때문에 1이 리턴됩니다.

<br>

### values()

<br>

API문서를 보면 values()는 다음과 같이 설명되어 있습니다.

![java_enum_values](https://lh3.googleusercontent.com/kMeLd-3Vt_6lik35rwmQ-LESF1IxdsSGO0vivMoUBkv5H6zcyTPZxXYsayRF_UJrr-WCv9JDis5B-Sf4rtIynEGq82wiYEc5jZ25Tx3DX710XOqpykzL0cX5iAjVIB_qHUBG0onf15VNS_JzNRwx6vS1PXMrymKRlrFHZUlZESrlCnMh6PqjsbY9HoBk9zWoF4hV1btKVgykmYajQb8v6pCQt8CQNBEcVwWMMMXoH5ZfpOLP6LaEiMVw5QuL-FF8CufKrzugrFpInuv1r0CmXiCbU2cv0ptPFB4WNVVppxp0fqC3UoMJR89DMXlMacVDxdPkyg_bJcskGtaHkGb5yRZS-emnSqdPHJ89vL2j2MGDxjoo18S8173W4gYfyz-Itz-AwFWBOC-xd_nnzRcTawtnAChOkOVLLZVnrYyaX241CtS0yQFyzUu_0YnkPM-TJB3oIFwCInvAUcBvHK49naEfqL_UOF6pHKLyPUI2K9vJ-LQQjyX7viH6d8o5q1CU14kIYZxgTL7XekNjrvggzw5tD-uvkTBUfxg6tsGOQ-R0eLv8a3W_Cdg_AX3P0TYOkDxyKebeTz_wHMqElUeE-Kbbs_VmsiGV_iJTv-DOyA=w1832-h976-no)

사용법은 다음과 같습니다.

~~~ java
package c.enums;

public class OverTimeManager3 {
    public static void main(String[] ar){
        OverTimeValues2 [] valueList = OverTimeValues2.values();

        for(OverTimeValues2 value:valueList){
            System.out.println(value);
//            THREE_HOUR
//            FIVE_HOUR
//            WEEKEND_FOUR_HOUR
//            WEEKEND_EHIGHT_HOUR
        }
    }
}
~~~

OverTimeValues2의 모든 상수들을 배열로 리턴하는 걸 볼 수 있습니다.


