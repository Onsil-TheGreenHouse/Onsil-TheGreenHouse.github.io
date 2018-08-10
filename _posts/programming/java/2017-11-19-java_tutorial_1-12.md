---
layout: post
title:  "[Java]모든 클래스의 부모클래스인 Object클래스(toString(), hashCode(), equals())"
date:   2017-11-19 13:50:00
description: 모든 클래스의 부모클래스인 Object클래스(toString(), hashCode(), equals())
categories:
- programming
- java
banner_image: /programming/java/java-logo.jpg
comments: true
---

모든 클래스의 부모클래스인 Object클래스(toString(), hashCode(), equals())

---

## java.lang.Object

<br>

자바에서 어떤 클래스를 상속받으려면 클래스에 extends를 붙여주면 됩니다.

(자바의 상속은 [여기](https://onsil-thegreenhouse.github.io/programming/java/2017/11/12/java_tutorial_1-10/) 참고)

<br>

그런데 extends를 붙여주지 않아도 자바의 모든 클래스는 기본적으로

java.lang.Object를 상속받습니다.

만약

~~~ java
public class class1 extends class2
~~~

이렇게 코드를 작성해서 class2라는 클래스를 상속받는다면,

자바는 이중 상속이 불가능하기 때문에, class1은 object를 직접적으로 상속받지는 않지만

class2가 object클래스를 상속받으므로, 결과적으로 class1도 object클래스를 상속받게 됩니다.

즉, class1 -> class2 -> object 인 셈입니다.

<br>

이는 JAVA API에서도 확인할 수 있습니다.

구글에서 검색해 JAVA API를 들어갑니다.

![img_google_java_api](https://lh3.googleusercontent.com/4AcNjXwkyIbO9b5eRvo9xQyZoAqYxLLnVq9emMGIRrCcjRC3d_VpEeppnSEi2_CidRO40pJGUC6CZY5V_J0t4j9Rhgx2PXC58imnZUyQLZdSJpyo9MF4JLsDYyPFktnEyBqiGsn0wQUDr0_VQ4Xz_o9n58-hU7b3gEX3MYnGrGQw-mYKTA81lTVDuqfGjrKoKc7SMdy32Z9_2_UYd-C2ZIrZAL5tuwywi-0dG0mJsTk9sTnHPqcqM2ramxJ3viq4XJCA4vTIh0htbEDNPZ65HeTkxwNRwoXiq5YuU5fEnCZGRhzYCxXB6FeWsrZvQaeK6m160XbYdaG6EA-XyzdHSmGR8KEmW27f8I-W-VvSqZRPnzsCqWHroMN_VJ20Kbs3_wHFQjPnebgcbJw9TmNxaLQmLvh7ZwEwesg_lzP4H4u2WQGQIPXju5co6whxgpYnLdBYFX5rV9HDl5wMROef3CEoAdQNOfHnkzQpjdaNubbD__3QQ5ikkLG6-OAEOIOb_5eDqiynyk_-DEEgrBDNcHSthCOaBAa_oGJsFwgyXv7yn9ZPHsLsHSSm2pq56yXn0WZt5ZfFLtIJWodSS8ucAR4Ka_FitYJrtYz2zcG7lw=w1620-h864-no)

Java API - Oracle Help Center 입니다.

들어가서 아무 클래스나 클릭해봅니다.

저는 자바에서 제일 많이 사용하는 java.lang 패키지에서

제일 처음에 있는 Boolean클래스를 클릭했습니다.

![img_java_api_boolean](https://lh3.googleusercontent.com/7qxCvoPz0iG6hOmTsP2QvbWg9zyjsc0K9M6Dhi82QqxG3YqNb23p94yuWmxIXEatUMm_Qzm3k4dYFjSL1Dc8lJxN5kiwTkiEvq02cm1c0EvW7DppAcc9a9UJaXQhlFk4gd1kJgoyTmG-wCITmOhbgztnMT_20eqbC4Nk62hHl7EwKXQlT8AfOluxUPYRG0sq14V4H_hbtWI2oxYeGwdpSC3gEY6ax9XgkCudgmfZbS6tnC4Z5jG58k3yfMVI3l9ihuH1oxafHtpFjNtluFvV3-XV16qsqDbZI2efgj7U8Aia6Z-q29Q30zuM4ke0pcHPJEzPANaqcsp8IPg3DhhP_kqa6RijfNBxLPs-SBAecumwSV6P0JIt4UnwGDrydqNN-gKe1qELw2JWx0Ux09tjNETJV2KXMEuMpqB3U4WDKwZbX-8UdIqpJ7TBvDCemGs5q8a69zqlSlmGYXC2xhFQ-0s26C5MnMhvltu4T-FQG4x0IZwxCYkfGU1cJmWDCEL6zWSTj3oVFNVsQP_jsr0ja4GMgVJuE4wCddnD5Y7rrNEDZjWevqPvs30ufduvqIL1llq3uC6Y-n5J4XE6Oa5SlNuS1e6yuXrlPwhWq1d7SA=w2178-h1594-no)

빨간 테투리 안을 보면 Boolean클래스도 Object클래스를 상속받는 걸 확인할 수 있습니다.

<br>

그런데 어떤 클래스는 Object클래스를 확장하지 않는것도 있습니다.

예를 들어 Float클래스를 클릭해보면,

![img_java_api_float](https://lh3.googleusercontent.com/P_3k8kjE01EWDI2bmRCbGB3TS3T74dBOnrKpSRFkl90LER1NhLjm4Dno4zpyJzwDrDIB8f8KIuJ_M63gdzCZtRFD-TpBVoAY1v7kH1uNP_lsT4jy5TwxtSE1N40qwDonDoCFn4FcbCkoiMallUBfcKUhUShDzGHTwxiGZuw2NiPLW4GZaWnkifwQQrMJsBdguBWOJ7HlNuU9EIdM3zUn1Bq3J_H4S33JnlPB5YS27xM29e21nfyN_yDXmL4YHPxUXwZ_yl0HECVS6YtQNwms_baq8VhnjMgItasqgPI5FZGxXGQfEhinkczBLByNK1gYWzcrv4y08MQKT_azV7fAa1KwE9uGC8j4LpZ99JksBSGY9B4amnmHnasSq_KseqVsvI-8H2Ssfd-9OEEYfWyLt6poVsSVgDFvIc9v5rzmAwZtYwJ_0n4zg57EVv9rqTiFKViM6WJ_NzH8OF1b5jI_8BFPcQas_wSOGSm1mhF4XIGbuNeLvKC_XyTgPTfAuSceFvDtFUzCGLczLz1xTKUO455L5XNbX-zuTR6cq4M8R2J9DAuHgi-Gm49znFmGQpJPmt4SBzKeGFSk9-USN6LWHTEocs7t3-V-RbPDJmtSvg=w2178-h1594-no)

Number클래스를 상속받는다고 나옵니다.

하지만 이 Number클래스를 클릭해서 어떤 클래스를 상속받는지 살펴보면

![img_java_api_number](https://lh3.googleusercontent.com/TbOlch3nPIfTB8AT3Fm1P4BjDD9gU-7pIR7nXC0NdJ7jz6mDsq3SHa2G3VSSoTehcd68reMhexMm5OBHe4LxllnWqpnOs_IToQeloW9lNmDzACzF02H6oWy8un9LhVkAo756rhrIlOEzthHWhESzhNwvqZRdSd7K-clIAz0mzNfF-8JIFXVZfBv7Fav5A5WEoR1KCZ9A7qWXnPCS-7tUGi3wdHH6hArsVTS6YNmtd9eejvGgNNU-Xng7Xh1AXSLSG0DxDzIld7mAL28wSAbxXK9tUvcaJbVVUXUevjpQPTIsAq1AYdNWs0dzJM9RQf7U7Au8p43IH94G2G5zAqtbZbMY4Q2QCDYMXBWD6x-igoZHmLOf8mj9snbJB8fVvtRuK73MhHcf1ZLe4aPD9ukueJcUfG0sUE8SRmzkhnOk4CRR-yFAwIGaex_IOReoAeZGDJWW19T1ISpzKRGdySSCmJfDRju9ForOfw6L4h_Ze1jmoKX-agl3JWWTNimdnC-FR5sS92pxpZ-0-q948ZeRUazRju2JbmzPDseierflf2Nva9qfo9DF-XMhepmh-SsxLkSJ0-E5iWVpYhBeZuu9ZKcmhix35ecpxG6INQYGaw=w2178-h1594-no)

결국에는 Object클래스를 상속받는 걸 확인할 수 있습니다.

<br>

이렇게 모든 클래스가 Object클래스를 상속받는 이유는

Object클래스에 있는 메소드들을 통해서 클래스의 기본적인 행동을 정의할 수 있기 때문입니다.

<br>

전화기로 비유해 보겠습니다.

전화기에는 여러 종류가 있습니다. 유선전화기, 폴더폰, 스마트폰, 탱크폰...

![img_tank_phone](https://lh3.googleusercontent.com/O43JHDd7IpSAQK_WLulpJon-YANRP6Q4ndPiMLxrSFAZH6Fv8tqi__pGRqvIt8rrQU6XlwPVjT2b7pKz9VzXqvc37W1UG7AcwBIJqXPpeKFSWD-xsVSmHBouag2gepl6Mk4NUYk9znu8p3vKuJSSS9QxFY5v7gKjTlxHMJ6NRHAYscPhZRTPPdqb27rJ-nQyWW0vOkS8aJ0yx1furCRrLV3Xf4aRzctgWWi6Zgwx9yiVHOn48MtsmIISGt6rJ5bxOpvJ_C8ntQ77PBOtEBoUw4WX5mXOhSaGarP4mmYXLf18WMBnwDvNgWl0BlX7C46XmEvQz_THgwZqLN0sliF12JEHZpIvy5KJPI8bg1XaNfrFfLm4dTHAIOdszzUg_RQMLxAmfZzCjdR-ezB8qUkQkLFvu53uJzltGxuXusNyEGD_1VEDKTFVYjFBo1RO1kwu0sMTl54TANMJp01MfvUp8vUU0UzRzFldwTqdKrn3mYCMbBIUmPiD5bhrUNd4dJM-W06njaSsuL6YOhJ7pZxhkmdSAdQ-uIYsWR395gGYf6wkOi3I2Acr2AYW3uJKLwqr4I4cF6KnUUd_Tzmod0-HrdPPwp3igzehHzf8-aKZIg=s996-no)
(어렸을때 집에서 봤었던 모토로라 탱크폰...)

전화기는 종류마다 특색이 다르지만, 전화기의 메인 기능은 **통화기능**입니다.

이 통화기능이 없으면 전화기라고 부를 수 없죠

전화기(Object) 클래스는 통화 메소드를 가지고 있는거고,

다른 유선전화, 폴더폰, 스마트폰 클래스들은 전화기 클래스를 상속받아

전화기의 한 종류라는 타이틀을 가질 수 있게 되는 것입니다.

<br>

Object클래스에는 여러 메소드들이 존재하는데,

이 중, toString(), hashCode(), equals()만 알아보겠습니다.

(아직 초짜라서..)

<br>
<hr>
<br>

## toString() 메소드

<br>

toString()은 객체의 이름이라고 볼 수 있습니다.

~~~ java
package c.inheritance;

public class ToString {
    public static void main(String[] ar){
        ToString ex = new ToString();

        ex.toStringMethod(ex);
//        c.inheritance.ToString@2471cca7
//        c.inheritance.ToString@2471cca7
//        plus c.inheritance.ToString@2471cca7
        System.out.println();
        ex.toStringMethod2();
//        c.inheritance.ToString@2471cca7
//        c.inheritance.ToString@2471cca7
//        plus c.inheritance.ToString@2471cca7
    }

    public void toStringMethod(Object obj){
        System.out.println(obj);
        System.out.println(obj.toString());
        System.out.println("plus " + obj);
    }

    public void toStringMethod2(){
        System.out.println(this);
        System.out.println(toString());
        System.out.println("plus " + this);
    }
}
~~~

toStringMethod를 먼저 살펴보면 객체를 받아서

객체, 객체.toString(), 문자열+객체

이렇게 출력하고 있습니다.

그냥 객체를 출력하면 해당 객체의 부모 클래스인 Object클래스의 toString()메소드가 실행됩니다.

문자열+객체 로 출력하면 문자열+객체.toString()이 출력됩니다.

<br>

toStringMethod2()에서는 toStringMethod()를 더 간단히 만든 것입니다.

여기서 this는 자신의 객체 즉, ex.toStringMethod2()에서 ex를 참조합니다.

<br>

출력 결과(주석)을 바탕으로

toString()이 Object클래스에 어떻게 구현되어 있는지 살펴보겠습니다.

실제 Object클래스에는 toString()메소드가 다음과 같이 구현되어 있습니다.

> **getClass().getName() + "@" + Integer.toHexString(hashCode())**

c.inheritance.ToString@2471cca7 이렇게 나왔는데요

getClass().getName()이 패키지이름.클래스이름 으로 나오는 걸 볼 수 있습니다.

뒤에 hashCode()는 객체의 고유값을 리턴합니다.

이 hashCode()를 Integer.toHexString()으로 16진수로 변환하고

여기서는 그 결과값으로 2471cca7이 나왔습니다.

<br>

이 toString()메소드를 그대로 사용하는 것보단

오버라이딩해서 쓰는게 좋습니다.

예를 들어,
~~~ java
package c.inheritance;

public class ChampionDTO {
    public String name;
    public int power;
    public int defense;

    public String toString(){
        return "name: " + name + ", Power: " + power + ", Defense: " + defense;
    }

    public ChampionDTO(String name, int power, int defense){
        this.name = name;
        this.power = power;
        this.defense = defense;
    }

    public static void main(String[] ar){
        ChampionDTO teemo = new ChampionDTO("teemo", 90, 20);
        System.out.println(teemo);
//        name: teemo, Power: 90, Defense: 20
    }
}
~~~

이렇게 toString()을 오버라이딩하여

해당 객체의 변수를 확인하는 용도로 쓰면 편의성이 증대됩니다.

이렇게 안쓰면 해당 객체의 변수를 확인하려면

teemo.name, teemo.power, teemo.Defense

이런식으로 확인해야하기 떄문에 매우 번거롭습니다.

이렇게 toString()을 오버라이딩해서 일일히 써주는 것도 번거롭기 때문에

보통 개발툴에서는 자동으로 오버라이딩 해주는 기능이 있습니다.

([여기](https://onsil-thegreenhouse.github.io/programming/java/2017/11/19/java_IDE_make_equals_hashcode/)에 설명되어 있습니다.)

<br>
<hr>
<br>

## equals() (동일 객체인지 확인하기)

<br>

다음과 같은 ChampionDTO가 있고,

~~~ java
package c.inheritance;

public class ChampionDTO {
    public String name;
    public int power;
    public int defense;

    public String toString(){
        return "name: " + name + ", Power: " + power + ", Defense: " + defense;
    }

    public ChampionDTO(String name, int power, int defense){
        this.name = name;
        this.power = power;
        this.defense = defense;
    }

    public static void main(String[] ar){
        ChampionDTO teemo = new ChampionDTO("teemo", 90, 20);
        System.out.println(teemo);
//        name: teemo, Power: 90, Defense: 20
    }
}
~~~

동일한 ChampionDTO 객체를 두개 만들어 비교하는 코드를 작성합니다.

~~~ java
package c.inheritance;

public class Equals {
    public static void main(String[] ar){
        Equals ex = new Equals();
        ex.equalMethod1();
//        teemo1 != teemo2
        ex.equalMethod2();
//        teemo1.equals(teemo2) returns false
    }

    public void equalMethod1(){
        ChampionDTO teemo1 = new ChampionDTO("teemo", 95, 20);
        ChampionDTO teemo2 = new ChampionDTO("teemo", 95, 20);

        if(teemo1 == teemo2){
            System.out.println("teemo1 == teemo2");
        }else{
            System.out.println("teemo1 != teemo2");
        }
    }

    public void equalMethod2(){
        ChampionDTO teemo1 = new ChampionDTO("teemo", 95, 20);
        ChampionDTO teemo2 = new ChampionDTO("teemo", 95, 20);

        if(teemo1.equals(teemo2)){
            System.out.println("teemo1.equals(teemo2) returns true");
        }else{
            System.out.println("teemo1.equals(teemo2) returns false");
        }
    }
}
~~~

teemo1과 teemo2 객체는 속성값이 동일하지만,

결과는 주석에 나온대로 모두 다르다고 나옵니다.

<br>

==는 참조자료형일 경우, 객체의 주소값을 비교하기 때문에 당연히 다르다고 나옵니다.

Object클래스에 equals()메소드는 두 객체의 해쉬코드값을 비교합니다.

해쉬코드 역시 각 객체별로 고유한 값이므로 teemo1과 teemo2는 다른 값을 가지며

즉, teemo1.equals(teemo2)는 false를 리턴합니다.

<br>

하지만 저는 같은 속성값(name, power, defense)를 가지면

equals()값으로 true를 리턴받고 싶습니다.

이때는 equals()과 hashCode()를 오버라이딩 받아주면 됩니다.

equals를 오버라이딩한 ChampionDTO3을 새로 만들어서 비교해보겠습니다.

~~~ java
package c.inheritance;

public class ChampionDTO3 {
    public String name;
    public int power;
    public int defense;

    public ChampionDTO3(String name, int power, int defense){
        this.name = name;
        this.power = power;
        this.defense = defense;
    }

    public boolean equals(Object obj){
        // 주소값이 같으면 true
        if(this == obj) return true;
        // 비교대상 객체가 null이면 false
        if(obj == null) return false;

        // getClass() 출력해봄...
        System.out.println("getClass(): " + getClass());

        // 두 객체의 클래스가 다르면 false
        if(getClass() != obj.getClass()) return false;

        // 같은 클래스이므로 캐스팅 가능
        ChampionDTO3 other = (ChampionDTO3)obj;

        // 각 인스턴스 변수 값 비교
        // name은 String(참조자료형)이므로
        // null check, equals로 비교
        if(name == null){
            if(other.name != null) return false;
        }else if(!name.equals(other.name)) return false;

        if(power != other.power) return false;

        if(defense != other.defense) return false;

        return true;
    }

    public int hashCode(){
        final int prime = 31;
        int result = 1;
        result = prime * result + ((name == null)? 0: name.hashCode());
        result = prime * result + power;
        result = prime * result + defense;

        return result;
    }
}
~~~

이제 비교하는 코드를 작성하겠습니다.

~~~ java
package c.inheritance;

public class Equals2 {
    public static void main(String[] ar){
        Equals2 ex =  new Equals2();
        ex.equalMethod1();
//        getClass(): class c.inheritance.ChampionDTO3
//        teemo1.equals(teemo2) returns true
    }

    public void equalMethod1(){
        ChampionDTO3 teemo1 = new ChampionDTO3("teemo", 95, 20);
        ChampionDTO3 teemo2 = new ChampionDTO3("teemo", 95, 20);

        if(teemo1.equals(teemo2)){
            System.out.println("teemo1.equals(teemo2) returns true");
        }else{
            System.out.println("teemo1.equals(teemo2) returns false");
        }
    }
}
~~~

오버라이딩한 equals() 메소드를 살펴보면 체크하는 순서는 다음과 같습니다.

1. 두 객체가 주소값이 같은지
2. 비교하는 객체가 null인지
3. 클래스가 같은지
4. 속성값이 모두 같은지

자세한 설명은 코드 안에 주석으로 남겨놨습니다.

그리고, Equals 클래스에서 비교하자 true로 나옵니다.

<br>

여기서 제가 공부하다가 생긴 궁금점 두가지는

1. 비교는 equals()로만 하는데 hashCode()는 왜 오버라이딩하지?
2. equals() 오버라이딩 코드에서 name은 참조자료형(String)이라서 equals를 썻는데, 그럼 이때도 this.name과 other.name의 해쉬코드 값이 다르므로 false가 리턴 되는거 아닌가?

<br>

먼저 1번의 답은 다음과 같습니다.

현재 속성값이 같은 객체인지 확인하기 위해 equals()메소드를 오버라이딩해서 수정했지만,

hashCode()의 값은 다르기 때문에 진정으로 같은 객체인 상태는 아닌겁니다.

그래서 진정으로 같은 객체로 만들어주기 위해서 hashCode()도 오버라이딩해서 수정해줍니다.

<br>

2번의 답은 다음과 같습니다.

자바에는 객체를 재사용하기 위해 Constant Pool이라는 것이 존재합니다.

예를 들어

~~~ java
String name1 = "teemo";
String name2 = "teemo";
~~~

이렇게 두 String변수의 값이 같다면,

String은 참조자료형이지만 예외적으로 Constant Pool을 사용하여

name1을 선언할 때 "teemo"라는 값이 Constant Pool에 저장되고,

name2를 선언할 때는 Constant Pool에 "teemo"라는 값이 있는지 확인하고

있으면 그걸 그대로 참조하는 겁니다.

그래서 equals를 쓰면 true값이 반환됩니다.

이에 대해서는 차후에 포스팅하겠습니다.

<br>

사실 equals()와 hashCode()를 오버라이딩해서 구현할 떄는

지켜야할 조건이 좀 있기 때문에 직접 구현하는 건 권장하지 않습니다.

조건에 대해서는 **덧붙이는 말**에 더 자세히 적어놓겠습니다.

<br>

아무튼 그래서 직접 작성하는 것보다는 개발툴에 있는 기능으로 하는걸 추천합니다.

하는 방법은 [여기](https://onsil-thegreenhouse.github.io/programming/java/2017/11/19/java_IDE_make_equals_hashcode/)에 있습니다.

<br>
<hr>
<br>

## 덧붙이는 말
<br>

### equals()메소드를 오버라이딩할 때 반드시 지켜야할 다섯가지 조건
- 재귀(reflexive): null이 아닌 x라는 객체의 x.equals(x)는 항상 true를 리턴해야한다.
- 대칭(symmetric): null이 아닌 x, y객체에 대해서 x.equals(y) == y.equals(x)이여야 한다.
- 타동적(transitive): null이 아닌 x, y, z객체에 대해서 x.equals(y)가 true이고 y.equals(z)가 true이면, x.equals(z)도 true여야 한다.
- 일관(consistent): null이 아닌 x, y객체에 대하여 두 객체가 변동사항이 없으면 몇번을 호출해도 x.equals(y)의 결과는 같아야한다.
- null과의 비교: null이 아닌 x객체에 대하여, x.equals(null)은 항상 false이여야 한다.

복잡해 보이지만 자세히 살펴보면 당연한 말들입니다.

<br>

### hashCode()메소드를 오버라이딩할 때 반드시 지켜야할 세가지 조건
- 자바 앱이 실행되는 동안 어떤 객체에 대해 이 메소드가 호출될 때는 항상 동일한 int값을 리턴해야한다. 하지만 자바 앱을 실행할 때마다 같은 값일 필요는 없다.
- 어떤 두 객체 x, y에 대하여, x.equals(y)가 true이면 hashCode()값도 같아야한다.
- 어떤 두 객체 x, y에 대하여, x.equals(y)가 false라고해서 hashCode()값이 무조건 달라야하는 건 아니다. 하지만 값이 다르면 hashtable 성능을 향상시키는데 도움이 된다.
