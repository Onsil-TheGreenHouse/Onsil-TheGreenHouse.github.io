---
layout: post
title:  "[Java] Java.Lang 패키지"
date:   2018-02-17 13:50:00
description: Java.Lang 패키지
categories:
- programming
- java
banner_image: /programming/java/java-logo.jpg
comments: true
---

Java.Lang 패키지 기본

---

## Java.Lang 패키지

<br>

Java에는 수많은 패키지가 있습니다.

이는 API 문서를 보면 알 수 있습니다.

그 중, Java.Lang 패키지가 제일 많이 쓰입니다.

얼마나 많이 쓰이면 Java.Lang 패키지의 클래스들은

import를 안해도 사용할 수 있습니다.

![java_classes](https://lh3.googleusercontent.com/-fAOlsh_PxKbk0wzGDLnhD8_2OIJtYP8vH5EkUbtWLXZ7DaICB8GuOjRLN71t_U4Ktq5ECenH1DJR02LFxi2Ed-O_5WYjDXFGg80dK33mTiZ4coUCZIbkwEUJGq3WwohX1lyGzyc3yT8Q3f9EsIGm4hcJZLdd_23Ec0Qp7VLhg3bNUauTWT4mMnnebpd1a53ThZD0ZtdfTzOl4x6HeY0nAhH7QM7ismJ9QHzio9u20czrBmFcqdG0vNOUjiLRbvlL_BHnpPgFwHx6OHl90uR7ODTPkMaqa6QL1qSrBanHlOwXaUKAkelAWbjYRvcYpP_Jn8hD2_eLTmSIujjxeCFeOEfDWH9B3AlBlsyb1UFgNXPKW-KlnAChJgjBDhSJpqkFc9q4-mFvYdURhJHVH5LZJ4M9XOgX3P5wub8IzOBSkvzPY9LU0BxIYWJv31hjSSFIF6vq2Eqxi_38o0DGiO_s_xVnXRECO682Woo6l6xsD5v2YOUv9vreLCabWpaJuqcLJ0ED9joe2fgi7y1xNyldlrhPC0V4wokLngwXn3ti7mE8mek_4dDxcYECg14Iv3er5FEjAb_KXuadpC9dCxCod3CBMnfNY4t7ZMt0L8=w386-h875-no)

클래스들을 언뜻 살펴봐도 매우 많이 쓰이는 String과 8개의 기본자료형이 보입니다.

Java.Lang 패키지를 중요한 부분을 중점으로 살펴보겠습니다.

<br>
<hr>
<br>

## 기본자료형 클래스들

<br>

원래 자바에서 계산을 할 때는 기본자료형을 사용합니다.

이 기본자료형들은 Heap영역이 아닌 Stack영역에 저장되어 연산 처리가 빠릅니다.

그런데 개발을 하다보면, 이러한 기본자료형의 숫자를 객체로 처리해야하는 상황이 생깁니다.

이때를 위해 기본 자료형 8개는 클래스로도 선언되어 있습니다.

>Byte, Short, Integer, Long, Float, Double, Character, Boolean

이것들은 참조자료형이지만 기본자료형으로도 사용할 수 있습니다.

자바 컴파일러에서 자동으로 형 변환을 해주기 떄문입니다.

<br>

이 클래스들 중 Character를 제외하고 공통적인 메소드가 있습니다.

parse타입이름()와 valueOf() 입니다.

<br>

### parse타입이름(), valueOf() 메소드

<br>

Integer 클래스를 예를 들어서 설명하겠습니다.

API를 보면 다음과 같이 설명되어 있습니다.

![java_parseInt](https://lh3.googleusercontent.com/x4DSGWH8wjN8Lvq1RBbqiXtSFrdSskcn31cPtJtwYgHkpxodrDKW7BNeYEQ-pOyAioxd14145af8M9sI6eolgBXdvR-qV82jVL9NICrHqDilRn4ZYBISVTKrEL8rANKL3Bcj6yOh8sgSswNdd9PjW4uFS9vZR5RQ6UJmGb_xeU5ArPZEiXKl2F0vAg5B1fXAUuYHXF5fT_GXZNvP6SgqvX2sBPUWGQsouP9vNC1R030opt1r-lgJyFGlqGuaKIYfoy5RTdPNscnrgBL8mV4Jufpsn4Yq1XoG9s5XJ60PNhpdsgpr7fNeG3KegWHPqJoIDjcOCtxRrJCe-QX_DQz1QIehqS3-C9I8ECcTBxqNfC1k7-FpZprYlLl5_doLBpJzHVLkT6o55YCWBVPkcwswRQQiB0yvQ194TBgsvdd4RQxlMf6gwuW1_hI42McUwNbER_RUEA1wMtRQzYisCy_VQfUKJRu3wSpzxMao5QDFB1lPCdWdVMhfo6ra5gGu8vUHnlot-c_vOBZ0WtYWUxpenpfyfA9d6bmtxV0KIo1jnYTlHiOXAx-to_XO_PeGv4Q9gZ-hMr7hIVhPeAWeVzb-YBndmYlIwSgp74HZKX0=w1335-h297-no)

![java_IntegerValueOf](https://lh3.googleusercontent.com/Co1RQSG4eicSjQUEPmvkGa7NDJ1NZEUJJMweKQYJvfXcf8Dbt6ZHYPqIfLtxpN-eZi4uQVFV9vejV8aG5nCR8Pl1Bfb27J-MamljT24e3QaeKzduhyOys-CcqX0waUGMHh6tjjhUx_rooPT1ETuW295r-6o9Sps9Llm2UQVYl1xrYibUlL5PvpHV3gtegaYWcVIC0tLigvxCH8wJqC20YhbW0TlDlPVUcgtAjITPv6UI1eTCAoVbxrlCFV7ittPa6HvtWmRuIXzRhYAV8Vz2Zbdl3VvQUEaBofaAxqzG06jWftSLnnI3V96CxJ1K3nH8Eb1NDWGIBqu664ku7jVrQuUKwBT0OqWzywBIzbluoZH1e9YYD83zVJSSTiQMYxM9IARMtRmbK0x1nfz0PFVyERo2KW0nbZNhye1O3hvth7tOZxHYydfM_QHjqTTeaw-RMPrnRiS2P9K82985nIm2PXCBKdZnsKpL0WiNm_3K52IiQRmXvaq1UGGMXTyl2lAkNs8FxkJ1JnKVDRjKLb3zXrm-5Hmmkw3rTNGzbx6kn8U8ikUJwU7d5mxhAKioxqB5_XBTHRyTZABO7Bc8Jt6NufMSHN7IAlXHmpva4dY=w1335-h353-no)

두 메소드 모두 String을 매개변수로 받아 숫자로 변환합니다.

차이점은 Returns를 보면 

ParseInt는 Integer value 즉, 기본자료형을 리턴하고

valueOf는 Integer object 즉, 참조자료형을 리턴합니다.

예를 들어보겠습니다.

>JavaLangNumber.java
~~~ java
public class JavaLangNumber {
    public static void main(String[] ar){
        JavaLangNumber ex = new JavaLangNumber();
        ex.numberTypeCheck();
        ex.numberMinMaxCheck();
    }
    public void numberTypeCheck(){
        String value1 = "1";
        String value2 = "2";
        byte byte1 = Byte.parseByte(value1);
        byte byte2 = Byte.parseByte(value2);
        System.out.print("byte1 + byte2 = ");
        System.out.println(byte1 + byte2);
//        byte1 + byte2 = 3
        System.out.println();
        Integer refInt1 = Integer.valueOf(value1);
        Integer refInt2 = Integer.valueOf(value2);
        System.out.print("refInt1 + refInt2 = ");
        System.out.println(refInt1 + refInt2);
//        refInt1 + refInt2 = 3
        System.out.println();
        System.out.print("refInt1 + refInt2 + \"7\" = ");
        System.out.println(refInt1 + refInt2 + "7");
//        refInt1 + refInt2 + "7" = 37
    }
    public void numberMinMaxCheck(){
        System.out.println();
        System.out.println("numberMinMaxCheck()");
        System.out.println("Integer min = " + Integer.MIN_VALUE + ", max = " + Integer.MAX_VALUE);
        System.out.println("Integer min(binary) = " + Integer.toBinaryString(Integer.MIN_VALUE));
        System.out.println("Integer max(binary) = " + Integer.toBinaryString(Integer.MAX_VALUE));
        System.out.println("Integer min(hex) = " + Integer.toHexString(Integer.MIN_VALUE));
        System.out.println("Integer max(hex) = " + Integer.toHexString(Integer.MAX_VALUE));
//        numberMinMaxCheck()
//        Integer min = -2147483648, max = 2147483647
//        Integer min(binary) = 10000000000000000000000000000000
//        Integer max(binary) = 1111111111111111111111111111111
//        Integer min(hex) = 80000000
//        Integer max(hex) = 7fffffff
    }
}
~~~

먼저 numberTypeCheck() 메소드를 살펴보겠습니다.

value1과 value2는 String이지만 parseByte()를 통해

byte1과 byte2에 기본자료형인 byte로 변환되어 대입됬습니다.

<br>

refInt1과 refInt2는 valueOf()를 사용했으므로 참조자료형입니다.

하지만 refInt1 + refInt2 = 3 으로보아 기본자료형처럼 사용 가능하다는 것을 알 수 있습니다.

refInt1 + refInt2 + "7" 은 먼저 앞에

refInt1 + refInt2 를 계산하여 3이 나오고 결국

3 + "7" 즉, 기본자료형 + String 형태가 되는데

이 때 연산은 String.valueOf(기본자료형) + String 이 되어 37이 됩니다.

([String 클래스 챕터](https://onsil-thegreenhouse.github.io/programming/java/2017/12/05/java_tutorial_1-15/) 참조)

<br>

numberMinMaxCheck()에서는 Integer의 최소값, 최대값을

10진수, 2진수, 16진수로 출력하고 있습니다.

저 MAX_VALUE, MIN_VALUE, toBinaryString, toHexString 메소드 모두 API에 나와있습니다.

![Integer_MAX_MIN_VALUE](https://lh3.googleusercontent.com/s_NlD-0Sp0Q4_wWkHLEZG0LRuEcEn2Ori--hfvs6C2wUApgfC2kX_0Yw_sULm2JwQSsUKUYjcuFIPyZwWVTKyKYBg2esiu0p9Gp3acRNYEd_fxAhuqunfPrI4fwkByup0YyWi-SyY6fNcd5MSMAkRuda_fVDHaq3ofl1HzPUuPEm7ecr6Vi-IiVZsyvngp21L8V4Bmnm3-YSDV5od4cA3sy0MI7MlviAeRZ7UtrVyZ9BUsZ9Q5UQRXUeMdUh_cM_MPgNMp_Pd8KilgQwgXyn7b0W7Jirwm8ALk7eU63Hknjs8W8HV3fDSqnkmu0hwf5d_J1HLFhuRRr4-YPKUL0w2jyYdiyBdQ9DlF9To9LxkgHWiGYIMSMB5oXFdHxpSXlP8AfGn4PZnzMl4uyJdxRnlb3fZkhYblh_en5bWmO6yEF3Irl2Z3udSSIKnVGbv7n9sTAwEgt3upsEr0cKGCB0nLuXsOqLPzmLYU0R3W4iVv1-jzEr2LzvhDZg_VaMMMh2lfOKu4ILJ6V-7n2O0HW_2FWFAOZkZLC1Yqkduo_nWWYbIGpQ4bjiLau2unL7CcCoqUhYdeQ4h2HpnYu1Xnvmyz1AN7s8i3ghsvC6UP0=w1335-h742-no)

모두 static이기 때문에 Integer. 으로 접근합니다.

다른 기본자료형 클래스도 가지고 있는 변수와 메소드입니다. API에서 확인할 수 있습니다.

<br>

이쯤에서 이렇게 숫자를 처리하는 참조자료형을 만든 이유를 정리해보면

>☽ 매개 변수를 참조자료형으로만 받는 메소드를 처리하기 위해서<br>
☽ 제네릭과 같이 기본자료형을 사용하지 않는 기능을 사용하기 위해서<br>
☽ MIN_VALUE나 MAX_VALUE와 같이 클래스에 선언된 상수 값을 사용하기 위해서<br>
☽ 문자열을 숫자로, 숫자를 문자열로 쉽게 변환하고, 2/8/10/16 진수 변환을 쉽게 처리하기 위해서

<br>
<hr>
<br>

## System 클래스

<br>

System 클래스는 자바 공부의 시작에서부터 지금까지 아무 생각없이 많이 써왔습니다.

>System.out.println("Hello Java!!!");

먼저 이 Hello Java 문장을 분석해보겠습니다.

Java.Lang의 System 클래스의 API를 살펴보면...

![JavaLangSystem](https://lh3.googleusercontent.com/JI42H2ZlvGv4xzp7__TOKjaqi63wRd3eH_reQjBldVLTOz7pk0MHOGQ0YUYwwX7AAyw1_bxcagYe-Hj_X5Adb6dOAOLhT9kjTE4oI0pvQu_KCTNXmG_mfQRSwnkwX4pHzZrJHTZfERALPFykUF8Ho5vlitZxDauu36G-j8KE9lkt0siqX_1obC-WUWhM9nhObPUsWufQ0_TvPRItGl1DrUe5g4OC9ekiU_oiyUXJ1NGkyMu-8kr2xbvmXtxlroGbo6HAYgVu8lP2gJ_LlNSOfPmPrkTkp1wscFYRQf7BrUss2BA77YiS4PO81xjJ6e3dRMJR-FLwc2UJVZmGzqXQiJ8Ej8I2vhxHV9zklS6IW7xFzvZJ288djLumri4tnkRpZD7Ng_cLzqP4n0Wyml4B60cPN7si4gjkwIvWWlXdDi144VsFI_0HedsMqIXOcFLxvE2j1PRVPYckxHAGRyOLXaenWjNuBZLKG-eavkUDw0T3_Aow9Dh1E4mkOavWAmSIoQiBV1nMSp0-Gd3B8HNfbnCDjCpz2lFKwXVihUkfzcXkdzz67iOY7xNo_EjL_rEU7cubEuJXUGTsSfo8pPHaSte5625yzyxdoH_2FVU=w1336-h555-no)

즉, out이라는 변수는 은 PrintStream 이라는 클래스였던 것이고

static이므로 System.out 으로 접근합니다.

<br>

PrintStream 클래스에 가보면 println() 메소드가 정의되어 있습니다.

그리고 이 또한 static 이기 때문에 out.println()으로 접근을 하는 것이죠.

System.out을 조금 더 자세히 알아보겠습니다.

<br>

### System.out

<br>

PrintStream 클래스에서 출력을 위한 주요 메소드들은

print(), println(), format(), printf(), write() 등이 있지만

이 중 가장 많이 쓰이는 건 print()와 println()입니다.

print()와 println()이 받는 매개변수를 살펴보면

![print_println](https://lh3.googleusercontent.com/dLKx1eBV9eNw5O0hSVW5vgo8Z5sZSt8XSIiULPAc8V4ZKpaSup3wB1ZpZQwwtvTfEozgLuWkEQZ1VCC268cuzIrrCrZfksMMOo3GpXU5LrGoIjUHrpyWyKwLCPiGre8JvFKtytLi4YhXFkEYHHkuIhqykT8AnnNt2SO0RVMMfwf0yLmi_aV5ZcU3IQYEu7dw5-8GcUhJO-b4LSXRc2kSocT5IfQS0BmUpfXqawL1WLJFm0Yt3mgkPWH6_cOhHpiUReOTzZ-IRosEu0y-nSxggnwj1Xvd17h_o6B_UAk4Bhy5uPEWaikmjwTE3ChBTDXz1es-P-YiwggoGpwrQ-TW7QeS-M1oWyDFX8ukhYoACZB2rSDiqQUJzN10CPeiwUH6DWgA0sQCVX6hvaJMZafcGZBu9g93IV3nDtd3Xhu5Mw1urycY_XQ4eEHoSCld89RPgi041m7dnlA41aF9BRenZ7uyH0t-Z74fFYRyae-YUOtJMs2eksYtIc5Zt76HYHqWtp5VtAzmBlrM2mn5FQ8I5M4tO_exCIFvZFYLIP9tGoqQSCFKYqd9QTslGWx9hGNECReBjsf7KNnLteLcG-D5wKlrTyDwtq58o-a8xPk=w1115-h875-no)

println()에는 아무 매개변수도 안받는 메소드가 있습니다.

이는 그냥 줄바꿈을 위한 메소드인데

System.out.println("");

을 쓰면 쓸데없는 ""라는 String객체가 생기므로 이를 방지하기 위함입니다.

<br>

그리고 두 메소드 모두 byte나 short를 매개변수로 받지 않습니다.

그래도 문제가 없는게, byte나 short를 매개변수로 넘기면 int로 여기고 처리합니다.

예를 들어 살펴보겠습니다.

>JavaLangSystemPrint.java
~~~ java
public class JavaLangSystemPrint {
    public static void main(String[] ar){
        JavaLangSystemPrint ex = new JavaLangSystemPrint();
        ex.printStreamCheck();
        System.out.println();
        ex.printNull();
        System.out.println();
        ex.printNullToString();
    }
    public void printStreamCheck(){
        byte b = 127;
        short s = 32767;
        System.out.println(b);
        System.out.println(s);
        printInt(b);
        printInt(s);
//        127
//        32767
//        127
//        32767
    }
    public void printInt(int value){
        System.out.println(value);
    }
    public void printNull(){
        Object obj = null;
        System.out.println(obj);
        System.out.println(obj + " is object's value");
//        null
//        null is object's value
    }
    public void printNullToString(){
        Object obj = null;
        System.out.println(obj.toString());
//        Exception in thread "main" java.lang.NullPointerException
//
//        at d.lang.JavaLangSystemPrint.printNullToString(JavaLangSystemPrint.java:34)
//        at d.lang.JavaLangSystemPrint.main(JavaLangSystemPrint.java:10)
    }
}
~~~

printStreamCheck()에서는 byte와 short를 println()에 넣었고 잘 출력이 됩니다.

그 다음엔 printNullToString()을 보겠습니다.

null인 객체의 toString()메소드를 출력하려고 하니 예외가 발생합니다... 너무 당연하죠

그런데 printNull()을 살펴보면 obj 객체가 null인데

System.out.println(obj)가 잘 실행됩니다.

[Object 클래스 챕터](https://onsil-thegreenhouse.github.io/programming/java/2017/11/19/java_tutorial_1-12/)에서 분명히

print(객체)는 print(객체.toString())와 같다고 했는데.. 이상합니다.

이유를 알아보기 위해 API 문서를 살펴보겠습니다.

![println_object](https://lh3.googleusercontent.com/EMZGeMYayZgi_YpuVoSYeHtgLVY-hPWCn5Fjo0fY8ZoDyUb0H2f58nkhy5ZqyQgFNdSy1hmrKCHV0ItPEEoaYevhKPgBFnERe9ae3XpZrJ0n_YMtha-fNRxPMeefl_ZTSwxENqzTbF7Ea6W8YJU89QZnGdftiJtAbTl9jmhIDQJSqw42aBJ5-04RhfV9127cV5wBPEPhYI9DYkDJgRBeZkOXnd_NLQq5JpFV5Iggtml3dFlSDYGw-sVyJ56VEf6avO5azodW-1s3CnAsYpy1_vMIfFRl8P5u3j5zs3J8HaGRbiBN2otRMA_m_YHTJBQ8HTADiMUw33jP4eJ9w-pRDnt48ToWtaQIkJUmIP9nizkLP4flu8mh9XMeF4wM9NlAQ4EKcXJNA2sLJbKnVc0dk9HGu-vjVhKlAOtMwaODm07JDs19AhEnL-DGwA_4PFlfWjbu18I64waXoNqTCB6qYBBfOQ8Pkxeq9nzkAhbDkJ-kaak0m_x1m7g9qV8iXwcjHIhpMRDnQDdTsve4oDpXR1_Dd-wIjhvKL1pNyT7zbQvUiOy5PjT-7bZLB7RwKnPTs641pQopRM6M8wt2XFXQHF4uWciQyv-_J0jNyik=w1335-h174-no)

먼저 println(Object x)를 살펴보았습니다. 처리 순서가

String.valueOf(x) -> print(String) -> println()

이라고 나와있습니다.

String.valueOf(x)도 API를 살펴보면

![String_valueOf](https://lh3.googleusercontent.com/pSC17oCpA1vAHP8QyFZFabi_IOuLNxPD5KKpBaYMo3cUkm5qPP60_-YD65wWUEFsfuLpVC8iH3yalKrUbnLVWRlGS8YACoufK6pyuwl-G29PVA8FCWbfql9L0RxOauqPoKzVbMqMY_D_Z5ND-1Az0zxqsl58evI6enLv5Dho08CYLEEvVDfhDSGVo4xj7YgX5MJ_oG-HBsvjmyMLWr2z_yqGsNAA9mAI3i2NnP4-OZjlNgN3rRkl6MU9Fo_286cRZexKMEkEW2L5I4DwyWsu-W7iyTeLHbfJAJ42fkEgWrHzfGRP6SvB_i2OIF2crbWYcb9TVuv0we8C4x-zGrmB2TY9HDaaPuLts30XLGgS0S2jw1DWUQsknp7P6_O9dFOz4Dx3d9AKBXTVEnCGiZgjaYaB8Z7IeQdGqFWhsB84A9GNOPsukKRdlPHCkRs9a6amRuD2HxtxTm60yu2DhKi5EWsC1j7wX46SROBpqa0jBPyI1ICWHOLFH4gQb00CajcwWxBURXMnMQV4o9td_gxPPrIBnXwJq2QlgX4509q8W9AqMERK-HQcIhYsipBzAQEywsucbpRQJ_Cea_fFwzXoUVzekqC0q3sdzgLkAdI=w1335-h270-no)

객체가 null이면 "null"을, null이 아니면 obj.toString()을 리턴한다고 되어있습니다.

즉, 위 코드에서 obj는 null이기 때문에 String.valueOf(obj)가 문자열 "null"이 돼서 잘 출력이 되는 거였습니다.

<br>

두번째 출력문인

System.out.println(obj + " is object's value")도 잘 실행이 되는데요,

소괄호 안이 null + String 인데 예외가 발생하지 않습니다. 그 이유는

이 코드를 컴파일 할 때, 컴파일러가 더하기 문장을 StringBuilder로 변환하기 때문입니다. 즉,

obj + " is object's value" 는 컴파일러에 의해

new StringBuilder().append(obj).append(" is object's value") 로 변환합니다.

StringBuilder 클래스의 append(Object obj) 메소드의 API도 찾아보면

String.valueOf(obj)를 append한다고 되어있기 때문에 문제없습니다.

<br>
<br>

문자열 출력 외에도 System 클래스에는 많은 메소드가 있습니다.

그 중 몇개를 살펴보겠습니다.

<br>

### getProperty(), getenv()

<br>

>JavaLangSystem.java
~~~ java
public class JavaLangSystem {
    public static void main(String[] ar){
        JavaLangSystem ex = new JavaLangSystem();
        ex.systemPropertiesCheck();
    }
    public void systemPropertiesCheck(){
        System.out.println("java.version = " + System.getProperty("java.version"));
        System.out.println("JAVA_HOME = " + System.getenv("JAVA_HOME"));
//        java.version = 9.0.1
//        JAVA_HOME = null
    }
}
~~~

출력결과에서 알 수 있듯이

getProperty()는 system property를 String으로 리턴합니다.

API를 살펴보면

>public static String getProperty(String key)

라고 되어있습니다. 여기서 key란 Map구조의 key, value를 뜻합니다.

Map 구조를 간단히 설명하자면 그냥 나열순서가 없는 사전이라고 보면 됩니다.

사전에서는 찾고싶은 단어를 찾으면 그에 해당하는 뜻이 있죠.

여기서 단어가 key이고 value가 뜻입니다. 단지 사전은 key를 손쉽게 찾기 위해

알파벳순, 가나다순 등등으로 나열을 해논것입니다.

여기서는 "java.version"이란 key에 해당하는 값 9.0.1이 나왔습니다.

<br>

getenv()메소드는 환경변수 값을 String으로 리턴합니다.

"JAVA_HOME"은 JDK가 설치되어 있는 경로를 뜻합니다.

윈도우에서는 자바 설치 후 보통 JAVA_HOME 환경변수값을 설정해주는데

저는 맥인데 설정안해줘도 잘되길래 안했더니 null값이 나오네요.

<br>

### currentTimeMillis(), nanoTime()

<br>

currentTimeMillis()는 UTC기준 1970.01.01 00:00와 현재 시간의 차이를 

ms(밀리초, 1/1000초)단위로 long으로 리턴합니다.

nanoTime()는 API문서를 보며 설명하겠습니다.

![nanoTime](https://lh3.googleusercontent.com/EnDhNardsJbOxFLjaUVsJ1shbmt8vs_i1i-rvUX6UxyeXNeYIuVa6PWRWpcWHXP1V1ZYianU3vmqnjG0mWl0njebDTiRgmN51ZxspXvnR6T4xcW_xAAu0uSXahf--clBag91gvOg9m9n1IcAQ2KIMTE3-rcgQBlgUyhULF8aud2-FUjNYisCM6uIaYHFyIYolpaD1QSCDH-rXETTd_f2ju4cWDCxc1wIhyhklc2nDn_copdfxyBy9NR-YrWZRWXXRO92shIxmBkbwa1tLGN8a1p2L1i_J3ue6yPJbP9UR929FGvCMOIBEgfZd6DmtcO0-IONZiIz30PkDaUGJfKTp41_K5LhNTdIpRjITshAzaQFzsji97cHkYFS3GgUla81VfYDBjJxz72L1-I69G9QP6U1zlagByFeneLiJlXwc4iWarBZuzTR_OBL5dNaEUeoLHga5AjKBuPuTd0YpAhV8cgRCKdx9qOAoGpJG3DxfHVOGJI7zljtGTqZSbl-CCIQZX_vlNt4SVOY0WqQZHckRAYwJByzIUpvkOK1v1d2hy4NVuVkb5wvGxSDC9CrfpzcEp-qtF5JEJS0y5yQYa7RireiUiUkzWdJUzps_WU=w1335-h579-no)

Returns를 보면 

>the current value of the running Java Virtual Machine's high-resolution time source, in nanoseconds

뭔지 모르겠으나 여튼 JVM의 시간을 nano(나노초, 1/1000000000초)단위로 long으로 리턴합니다. 참고로 10억분의 1초입니다.

그리고 두번째 단락의 첫번째 문장에 이렇게 나와있습니다.

>This method can only be used to measure elapsed time and is not related to any other notion of system or wall-clock time.

걍 경과시간을 알아볼 때만 쓰라고 합니다.

한번 사용해보겠습니다.

>JavaLangSystem2.java
~~~ java
public class JavaLangSystem2 {
    public static void main(String[] ar){
        JavaLangSystem2 asdf = new JavaLangSystem2();
        asdf.ElapsedTimeOfNumberMinMaxCheck();
    }
    public void ElapsedTimeOfNumberMinMaxCheck(){
        JavaLangNumber ex = new JavaLangNumber();
        long startTime1 = System.currentTimeMillis();
        long startTime2 = System.nanoTime();
        ex.numberMinMaxCheck();
        long endTime1 = System.currentTimeMillis();
        long endTime2 = System.nanoTime();
        System.out.println("Milli second check = " + endTime1 + " - " + startTime1 + " = " + (endTime1-startTime1));
        System.out.println("Nano second check = " + endTime2 + " - " + startTime2 + " = " + (endTime2-startTime2));
//        numberMinMaxCheck()
//        Integer min = -2147483648, max = 2147483647
//        Integer min(binary) = 10000000000000000000000000000000
//        Integer max(binary) = 1111111111111111111111111111111
//        Integer min(hex) = 80000000
//        Integer max(hex) = 7fffffff
//        Milli second check = 1518838978551 - 1518838978511 = 40
//        Nano second check = 84737765745589 - 84737725229164 = 40516425
    }
}
~~~

앞에서 썻던 numberMinMaxCheck() 예제를 실행하는데 걸리는 시간을 측정해봤습니다.

ms로 측정하면 40ms 걸린다고 나오는데

ns로 측정하면 40.516425ms로 더 자세하게 나옵니다.

