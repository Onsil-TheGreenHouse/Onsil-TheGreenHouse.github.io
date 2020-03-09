---
layout: post
title:  "[Java] String 클래스"
date:   2017-12-05 01:00:00
description: String 클래스
categories:
- programming
- java
banner_image: /programming/java/java-logo.jpg
comments: true
---

String 클래스

---

## String 클래스

<br>

저는 아직 JAVA로 개발일을 해보지 않았기 때문에 잘 모릅니다만,

제가 보는 책의 저자님께서 말씀하시기를

"한 애플리케이션의 객체를 조사해보면 String 관련 객체의 수가 엄청나게 많다"

고 하십니다.

그만큼 중요한 클래스이니, 자세히 살펴볼 필요가 있겠습니다.

<br>

JAVA API에서 String 클래스를 살펴보면 다음과 같이 나와있습니다.

>public final class String<br>
extends Object<br>
implements Serializable, Comparable<String>, CharSequence

어디에서든 접근이 가능하지만(public), 상속받을 수 없는(final) 클래스입니다.

자바의 클래스이므로 당연히 Objects클래스를 상속받구요.

<br>

3개의 인터페이스를 구현하는데, 여기서는 간단히 설명하겠습니다.

Serializable은 API에서도 볼 수 있듯이 구현할 메소드가 없는 특이한 인터페이스 입니다.

![java_Serializable](http://drive.google.com/uc?export=view&id=1c_66wm7aS2r7xpvRWzcM13xRw-00WJ0X)

이 인터페이스를 구현한다고 선언하면, 

해당 객체를 파일로 저장하거나 다른 서버에 전송 가능한 상태가 됩니다.

<br>

Comparable 인터페이스는 구현할 메소드가 compareTo() 하나 입니다.

![java_comparable](http://drive.google.com/uc?export=view&id=1h3PHHcVkf4X--V3lsVaZ6pv2RlDnz9cc)

객체의 순서를 비교하는 메소드로, 순서가 앞에 있으면 -1, 같으면 0, 뒤에 있으면 1을 리턴합니다.

객체의 순서를 처리할 때 유용합니다.

<br>

CharSequence 인터페이스는 문자열을 다루는 클래스가 구현합니다.

<br>
<hr>
<br>

## String 클래스의 생성자

<br>

![java_String_constructor](http://drive.google.com/uc?export=view&id=19d-K1I3TdvT1zIxNZZOJIz6M2Jttjtou)

JAVA API를 살펴보면 위와 같이 String 클래스의 생성자는 매우 많습니다.

우리가 지금까지 많이 써왔던 String 객체 생성방법은 다음과 같이 두가지입니다.

~~~ java
// 1. 리터럴(literal)
String championName1 = "teemo";
// 2. new 사용
String championName2 = new String("teemo");
~~~

리터럴 방식으로 객체를 선언할 때는 어떤 생성자를 사용할까요?

API문서를 보면 설명되어 있습니다.

![java_String_literal](http://drive.google.com/uc?export=view&id=1NJ6pSPm1Xm8Hm2UxiSInlfxrr0RU1Uzx)

char 배열이니 String(char[] value) 입니다.

<br>

new를 사용한 방법에서는 String 자체를 넣었으니, String(String original) 입니다.

하지만 이 방식 말고도 많은 방법이 있다는 것입니다.

그 중 많이 사용되는

>String(byte[] bytes)<br>
String(bytes[] bytes, String charsetName)

을 살펴보겠습니다.

<br>

### charset(캐릭터셋)

<br>

먼저 charset에 대해 간단히 설명하겠습니다.

컴퓨터에서 문자를 표현하기 위해서는 먼저 "문자 집합(Character Set)"을 정의해야합니다.

영어라면 (a~z + A~Z + 각종 특수문자)

한글이라면 (가, 각, 간, ... 힣 + 각종 특수문자)

이러한 문자의 집합을 코드형태로 나타낸 것을 "문자 집합(charset)"이라고 합니다.

예를 들어 '가'는 10001, '각'은 10002로 나타낼 수 있겠죠.

![java_charset](http://drive.google.com/uc?export=view&id=1SWhjT9Y1oWpBoSRN_7-zik7lj62jr6cT)

API에서 Charset 클래스를 보면 'A named mapping'이라고 정의하고 있습니다.

말그대로 각 문자를 코드와 맵핑한 방식입니다.

물론 이 방식이 한가지만 있는게 아닙니다.

컴퓨터가 탄생했을 때부터 미국인들이 한글을 포함한 다른 언어를 모두 고려해서 charset을 만들지는 않았을겁니다.

<br>

예를 들어, 맨 처음에 만들어진 문자 집합인 ASCII(American Standard Code for Information Interchange)는

이름에서도 알 수 있듯이, 알파벳과 각종 특수문자를 포함해서 0x00부터 0x7F까지 즉, 127개의 문자를 표현할 수 있었습니다. 미국인을 위한 거였죠.

컴퓨터는 유럽에도 알려지게 되는데, 기존의 ASCII로는 불어, 독일어 등을 표현할 수 없었습니다.

이때문에 각종 유럽어를 추가한 확장 ASCII(extended ASCII)를 제정하게 됩니다.

이런식으로 다양한 방식이 나오게 됩니다.

자바에서 한글을 처리하기 위한 charset으로는 EUC-KR, UTF-8, UTF-16 등이 있습니다.

최근에는 UTF-16이 제일 많이 쓰인다고 합니다.

<br>

### String(byte[] bytes), String(byte[] bytes) 생성자

<br>

~~~ java
import java.nio.charset.Charset;

public class StringSample {
    public static void main(String[] ar){
        StringSample ex = new StringSample();        
        System.out.println("JAVA Default Charset = " + Charset.defaultCharset());
        // JAVA Default Charset = UTF-8
        ex.convert();
        System.out.println("----------------------------------");
        ex.convertUTF16();
        System.out.println("----------------------------------");
        ex.convertVarious();
    }

    public void printByteArray(byte[] array){
        for(byte data:array){
            System.out.print(data + " ");
        }
        System.out.println();
    }

    public void convert(){
        String korean = "한글";
        byte[] array1 = korean.getBytes();

        printByteArray(array1);
//        -19 -107 -100 -22 -72 -128

        System.out.println();
        String korean2 = new String(array1);
        System.out.println(korean2);
//        한글
    }

    public void convertUTF16(){
        String korean = "한글";
        try{
            byte[] array1 = korean.getBytes("UTF-16");
            printByteArray(array1);
//            -2 -1 -43 92 -82 0

            String korean2 = new String(array1);
            System.out.println("korean2 = " + korean2);
//            korean2 = ���\�
            String korean3 = new String(array1, "UTF-16");
            System.out.println("korean3 = " + korean3);
//            korean3 = 한글
        }catch(Exception e){
            e.printStackTrace();
        }
    }

    public void convertVarious(){
        String str1 = "귀여운";
        String str2 = "티모";
        String str3 = "귀여운 티모";
        try{
            byte[] arrayUTF161 = str1.getBytes("UTF-16");
            byte[] arrayUTF162 = str2.getBytes("UTF-16");
            byte[] arrayUTF163 = str3.getBytes("UTF-16");
            byte[] arrayEUCKR1 = str1.getBytes("EUC-KR");
            byte[] arrayEUCKR2 = str2.getBytes("EUC-KR");
            byte[] arrayEUCKR3 = str3.getBytes("EUC-KR");
            System.out.print("귀여운 UTF-16 = ");
            printByteArray(arrayUTF161);
            System.out.print("귀여운 EUC-KR = ");
            printByteArray(arrayEUCKR1);

            System.out.print("티모 UTF-16 = ");
            printByteArray(arrayUTF162);
            System.out.print("티모 EUC-KR = ");
            printByteArray(arrayEUCKR2);

            System.out.print("귀여운 티모 UTF-16 = ");
            printByteArray(arrayUTF163);
            System.out.print("귀여운 티모 EUC-KR = ");
            printByteArray(arrayEUCKR3);

//            귀여운 UTF-16 = -2 -1 -83 -64 -59 -20 -58 -76
//            귀여운 EUC-KR = -79 -51 -65 -87 -65 -18
//            티모 UTF-16 = -2 -1 -46 -16 -70 -88
//            티모 EUC-KR = -58 -68 -72 -16
//            귀여운 티모 UTF-16 = -2 -1 -83 -64 -59 -20 -58 -76 0 32 -46 -16 -70 -88
//            귀여운 티모 EUC-KR = -79 -51 -65 -87 -65 -18 32 -58 -68 -72 -16

        }catch(Exception e){
            e.printStackTrace();
        }
    }
}

~~~

먼저 printByteArray()는 array를 받아서 프린트해주는 메소드입니다.

자주 쓰여서 외부 메소드로 하나 만들었습니다.

<br>

코드를 보면 getBytes("charsetName")이란 메소드가 사용된 곳은

try-catch로 묶어둔 걸 볼 수 있습니다.

![java_getBytes_api](http://drive.google.com/uc?export=view&id=1iqD5t2y_aUXCl-W5IyNGe0UpI2YbaEXO)

API문서에 나오는 것과 같이 소괄호안에 써진 charset을 지원하지 않을 경우,

예외를 발생시키기 때문에 반드시 예외처리를 해줘야 합니다.

(안하면 컴파일 에러!) 

<br>

convert()를 보면 "한글"이라는 String 객체를 만들고

getBytes()메소드를 이용해 "한글"이라는 String을 플랫폼의 기본 charset으로 변환시켰습니다.

플랫폼의 기본 charset은 Charset.defaultCharset() 메소드로 "UTF-8"임을 확인했습니다.

<br>

String korean2 = new String(array1); 를 써서

String(byte[] bytes) 메소드를 이용해 String 객체를 만들었고,

korean2를 출력해보자 그대로 "한글"이 나오는 걸 볼 수 있습니다.

<br>

convertUTF16()메소드에서는 convert()와 같은 작업을 하였는데,

charset을 "UTF-16"으로 한게 차이점입니다.

korean2를 보면 출력결과가 이상합니다.

이유는 array1은 "한글"이라는 String을 "UTF-16"방식으로 인코딩한건데

new String(array1)이라고만 하면 이를 기본 charset인 "UTF-8"로 디코딩하기 때문입니다.

korean3처럼 "UTF-16"방식으로 String 객체를 만드라고 선언하면 제대로 "한글" 이라는 객체가 만들어집니다.

<br>

convertVarious()에서는 각종 String을 "UTF-16"방식과 "EUC-KR"방식으로 인코딩해봤습니다.

"UTF-16"은 모두 -2 -1로 시작하고, 한글자당 2바이트, 스페이스(띄어쓰기)도 2바이트를 차지합니다.

"EUC-KR"은 한글자당 2바이트, 스페이스는 1바이트(32)만 차지합니다.

자바에서 한글이 몇 바이트를 점유하는지 알아 두는 것은 한국에서 개발하면서 매우 중요하다고 합니다.

<br>
<hr>
<br>

## null 체크하기

<br>

null 체크는 매우 중요합니다.

String뿐만 아니라 모든 객체를 처리할 때는 null체크를 해야합니다.

객체가 null상태인 것은 

초기화가 안되어 있으며, 고로 클래스에 선언된 어떤 메소드도 사용할 수 없다는 것을 의미합니다.

~~~ java
public class nullCheck {
    public static void main(String[] ar){
        nullCheck ex = new nullCheck();
        ex.isnull(null);
        System.out.println("-----------------------");
        ex.isnull("teemo");
//        text is null
//        -----------------------
//        text is teemo
    }

    public void isnull(String text){
        if(text == null){
            System.out.println("text is null");
        }else{
            System.out.println("text is " + text);
        }
    }
}
~~~

null 체크는 **text == null** 과 같이 등호를 이용해 할 수 있습니다.

만약 text가 null인데 text.length()와 같이 메소드에 접근하면 예외가 발생합니다.

<br>
<hr>
<br>

## String 클래스의 각종 메소드

<br>

String 클래스에는 수많은 메소드가 존재합니다.

책에 나와있는, 자주 쓰이며 중요한 메소드를 위주로 알아보겠습니다.

<br>

### length(), isEmpty()

<br>

~~~ java
public class StringCompare {
    public static void main(String[] ar){
        StringCompare ex = new StringCompare();
        ex.stringLengthCheck();
        System.out.println("----------------");
        ex.stringIsEmpty();
    }

    public void stringLengthCheck(){
        String text = "teemo";
        System.out.println("text.length() = " + text.length());
        String text2 = "cute teemo";
        System.out.println("text2.length() = " + text2.length());
//        text.length() = 5
//        text2.length() = 10
    }

    public void stringIsEmpty(){
        String text1 = "";
        String text2 = "teemo";
        String text3 = " ";

        System.out.println("text1.isEmpty() = " + text1.isEmpty());
        System.out.println("text2.isEmpty() = " + text2.isEmpty());
        System.out.println("text3.isEmpty() = " + text3.isEmpty());
//        text1.isEmpty() = true
//        text2.isEmpty() = false
//        text3.isEmpty() = false
    }
}
~~~

length()는 String의 길이를 리턴하는 메소드입니다.

text2.length()를 보면 스페이스(공백)도 센다는 걸 확인할 수 있습니다.

isEmpty()는 String이 빈 문자열인지 확인합니다. 즉 ""일때만 true를 반환합니다.

" "과 같이 공백만 있어도 false를 반환합니다.

<br>

### equals(), equalsIgnoreCase()

~~~ java
public class StringCompare2 {
    public static void main(String[] ar){
        StringCompare2 ex = new StringCompare2();
        ex.stringEquals();

    }

    public void stringEquals(){
        String text1 = "teemo";
        String text2 = "teemo";
        String text3 = new String("teemo");
        String text4 = "TeemO";

        if(text1 == text2){
            System.out.println("text1 == text2");
        }else{
            System.out.println("text1 != text2");
        }
//        text1 == text2

        if(text1.equals(text2)){
            System.out.println("text1.equals(text2) returns true");
        }else{
            System.out.println("text1.equals(text2) returns false");
        }
//        text1.equals(text2) returns true

        if(text1 == text3){
            System.out.println("text1 == text3");
        }else{
            System.out.println("text1 != text3");
        }
//        text1 != text3

        if(text1.equals(text3)){
            System.out.println("text1.equals(text3) returns true");
        }else{
            System.out.println("text1.equals(text3) returns false");
        }
//        text1.equals(text3) returns true

        if(text1.equals(text4)){
            System.out.println("text1.equals(text4) returns true");
        }else{
            System.out.println("text1.equals(text4) returns false");
        }
//        text1.equals(text4) returns false

        if(text1.equalsIgnoreCase(text4)){
            System.out.println("text1.equalsIgnoreCase(text4) returns true");
        }else{
            System.out.println("text1.equalsIgnoreCase(text4) returns false");
        }
//        text1.equalsIgnoreCase(text4) returns true
    }
}
~~~

이전 [포스팅](https://onsil-thegreenhouse.github.io/programming/java/2017/11/21/java_string_equal/)에서 설명했던 부분입니다. 참고하면 됩니다.

equalsIgnoreCase()는 대소문자가 다른건 무시하고 오직 철자만 비교해서 같은지 다른지 알려줍니다.

text1과 text4는 대소문자만 다르니 true를 반환합니다.

<br>

### compareTo()

~~~ java
public class StringCompare3 {
    public static void main(String[] ar){
        StringCompare3 ex = new StringCompare3();
        ex.stringCompareTo();
    }

    public void stringCompareTo(){
        String str1 = "a";
        String str2 = "b";
        String str3 = "c";
        String str4 = "B";

        System.out.println("str2.compareTo(str1) = " + str2.compareTo(str1));
        System.out.println("str2.compareTo(str3) = " + str2.compareTo(str3));
        System.out.println("str1.compareTo(str3) = " + str1.compareTo(str3));
        System.out.println("str4.compareTo(str1) = " + str4.compareTo(str1));
        System.out.println("str4.compareToIgnoreCase(str1) = " + str4.compareToIgnoreCase(str1));

//        str2.compareTo(str1) = 1
//        str2.compareTo(str3) = -1        
//        str1.compareTo(str3) = -2
//        str4.compareTo(str1) = -31
//        str4.compareToIgnoreCase(str1) = 1
    }
}
~~~

String 클래스가 구현하는 인터페이스 중 Comparable에 있는 유일한 메소드 입니다.

코드 결과에서도 알 수 있듯이, 알파벳 순으로 비교하여 int값을 리턴합니다.

b.compareTo(a)는 알파벳 순으로 a 바로 다음으로 b 가 있으므로 1이 리턴됩니다.

compareToIgnoreCase()는 알파벳 대소문자에 관계 없이 알파벳 순서를 비교합니다.

<br>

### startsWith(), endsWith(), contains()

<br>

~~~ java
public class StringCheck1 {
    public static void main(String[] ar){
        StringCheck1 ex = new StringCheck1();

        String[] name = new String[]{
                "teemo",
                "tristana",
                "tryndamere",
                "twitch",
                "rengar",
                "leona",
                "ashe",
        };

        ex.stringCheck(name);

    }

    public void stringCheck(String[] name){
        int startCount = 0;
        int endCount = 0;
        int containCount = 0;

        String startText = "t";
        String endText = "e";
        String containText = "na";

        for(String data:name){
            if(data.startsWith(startText)){
                startCount++;
            }
            if(data.endsWith(endText)){
                endCount++;
            }
            if(data.contains(containText)){
                System.out.println(data + " contains " + containText);
                containCount++;
            }
        }

        System.out.println("startCount = " + startCount);
        System.out.println("endCount = " + endCount);
        System.out.println("containCount = " + containCount);
//        tristana contains na
//        leona contains na
//        startCount = 4
//        endCount = 2
//        containCount = 2
    }
}
~~~

startsWith()는 소괄호 안에 있는 String으로 시작하는지 여부를 boolean(true, false)로 리턴합니다.

endsWith()는 소괄호 안에 있는 String으로 끝나는지 여부를 boolean으로 리턴합니다.

contains()는 소괄호 안에 있는 String의 포함여부를 boolean으로 리턴합니다.

<br>

### regionMatches()

~~~ java
public class StringCheck2 {
    public static void main(String[] ar){
        StringCheck2 ex = new StringCheck2();
        ex.stringRegionMatches();
    }

    public void stringRegionMatches(){
        String str1 = "Teemo, the cutest champion";
        String str2 = "The Cutest champion, Teemo";
        String str3 = "teemo bug";

        if(str1.regionMatches(0, str2, 21, 5)){
            System.out.println("str1.regionMatches(0, str2, 21, 5) returns true");
        }else{
            System.out.println("str1.regionMatches(0, str2, 21, 5) returns false");
        }
//        str1.regionMatches(0, str2, 21, 5) returns true

        if(str2.regionMatches(21, str3, 0, 5)){
            System.out.println("str2.regionMatches(21, str3, 0, 5) returns true");
        }else{
            System.out.println("str2.regionMatches(21, str3, 0, 5) returns false");
        }
//        str2.regionMatches(21, str3, 0, 5) returns false

        if(str2.regionMatches(true, 21, str3, 0, 5)){
            System.out.println("str2.regionMatches(true, 21, str3, 0, 5) returns true");
        }else{
            System.out.println("str2.regionMatches(true, 21, str3, 0, 5) returns false");
        }
//        str2.regionMatches(true, 21, str3, 0, 5) returns true

    }
}
~~~

이 메소드는 두 String을 부분별로 비교하여 일치여부를 boolean으로 리턴합니다.

첫번째 if문의 str1.regionMatches(0, str2, 21, 5)의 의미는

str1는 0번째 자리부터, str2는 21번째 자리부터 시작해서 5자리를 비교한다는 것입니다.

즉 str1의 0번째부터 5자리는 "Teemo", str2의 21번째부터 5자리는 "Teemo"로 똑같으므로 true를 리턴합니다.

<br>

두번째 if문의 str2.regionMatches(21, str3, 0, 5)는

str2의 "Teemo"와 str3의 "teemo"를 비교하는데 대소문자가 다르므로 false를 리턴합니다.

<br>

세번째 if문처럼 regionMatches()안에 첫 파라미터로 true를 적어주면 대소문자를 무시하고 알파벳만 비교합니다.

그렇게 비교하니 "Teemo"와 "teemo"여도 true를 반환합니다.

<br>

### indexOf(), lastIndexOf()

~~~ java
public class StringCheck3 {
    public static void main(String[] ar){
        StringCheck3 ex = new StringCheck3();
        ex.stringIndexOf();
    }

    public void stringIndexOf(){
        String str1 = "Teemo is the cutest champion in league of legends";

        System.out.println("str1.indexOf('e') = " + str1.indexOf('e'));
        System.out.println("str1.indexOf(\"e \") = " + str1.indexOf("e "));
        System.out.println("str1.indexOf('e', 4) = " + str1.indexOf('e', 4));
        System.out.println("str1.indexOf('z') = " + str1.indexOf('z'));
//        str1.indexOf('e') = 1
//        str1.indexOf("e ") = 11
//        str1.indexOf('e', 4) = 11
//        str1.indexOf('z') = -1
        System.out.println("===============================================================");
        System.out.println("str1.lastIndexOf('e') = " + str1.lastIndexOf('e'));
        System.out.println("str1.lastIndexOf(\"e \") = " + str1.lastIndexOf("e "));
        System.out.println("str1.lastIndexOf('e', 4) = " + str1.lastIndexOf('e', 4));
        System.out.println("str1.lastIndexOf('e', 19) = " + str1.lastIndexOf('e', 19));
        System.out.println("str1.lastIndexOf('z') = " + str1.lastIndexOf('z'));
//        str1.lastIndexOf('e') = 45
//        str1.lastIndexOf("e ") = 37
//        str1.lastIndexOf('e', 4) = 2
//        str1.lastIndexOf('e', 19) = 16
//        str1.lastIndexOf('z') = -1
    }
}
~~~

indexOf()는 소괄호 안의 String이나 char가 해당 String의 어느 위치에 있는지 반환합니다.

예로 str1.indexOf('e')를 보겠습니다. str1의 처음부터 살펴봐서 e가 가장 처음 나오는 곳은 1번째 자리 이기에 1을 리턴합니다.

<br>

그 밑에 str1.indexOf("e ")를 보겠습니다. 여기서는 그냥 "e"가 아니라 뒤에 공백까지 포함되어 있습니다.

이 String은 str1중에서 "the " 부분에 있습니다. 여기서 "e"가 시작되는 부분은

str1의 처음부터 셌을 때, 11번째 자리입니다.

<br>

여기서 주의해야할 점은 그냥 문자 하나로 된것은 ''도 써도 되고, ""도 써도 됩니다.

즉, str1.indexOf("e")도 된다는 의미입니다.

하지만 "e "처럼 문자 하나가 아니라 여러개 일때는 무조건 ""만 써야합니다.

이는 char와 String의 차이인데, 한문자로만 된건 char('')로 나타내도, String("")으로 나타내도 됩니다.

어느것을 써도 결과는 같습니다. 다만 실행되는 메소드가 다릅니다.

![java_indexOf_api](http://drive.google.com/uc?export=view&id=1O6SimlE_-jkfoMaBXNQ2ovdGrvYC0zLs)

API를 보면 char, String 둘다 받는 걸 알 수 있습니다.

하지만 두문자 이상인 것은 char가 될 수 없습니다. 무조건 String으로 써야합니다.

<br>

str1.indexOf('e', 4)는 str1의 4번째 자리부터 'e'를 검색하는 것입니다.

4번째 자리는 'o'이고, 여기부터 시작해서 젤 처음 나오는 e는 "the"의 e입니다.

이걸 str1의 처음부터 세면 11번째 자리이기때문에 11을 리턴합니다.

<br>

str1.indexOf('z')는 str1에서 'z'를 찾고 있지만, 그런 알파벳은 없습니다.

이런 경우엔 -1을 리턴합니다.

<br>

indexOf()는 처음부터 검색하는데, lastIndexOf()는 뒤에서부터 검색합니다.

str1.lastIndexOf('e')는 str1을 뒤에서부터 검색했을 때 가장 처음 나오는 'e'는

"legends"의 두번째 'e'입니다. 이걸 str1의 처음부터 세면 45번째 자리이기 때문에 45를 리턴합니다.

<br>

str1.lastIndexOf("e ")는 str1의 뒤에서부터 검색했을 때

가장 처음 나오는 "e "는 "league "의 "e "이고

이를 처음부터 세면 37번째 자리이기 때문에 37을 반환합니다.

<br>

str1.lastIndexOf('e', 4)는 str1의 4번째 위치는 "Teemo"의 'o'이고

여기서부터 앞쪽으로 검색했을 때, 가장 처음 나오는 'e'는 "Teemo"의 두번째 'e'입니다.

이는 앞에서부터 셋을때 2번째 자리이므로 2를 반환합니다.

<br>

str1.lastIndexOf('e', 19)는 str1의 19번째 위치는 "cutest"다음에 있는 공백입니다.

여기서부터 앞쪽으로 검색했을 떄, 가장 처음 나오는 'e'는 "cutest"의 'e'입니다.

이는 앞에서부터 셋을때 16번째 자리이므로 16을 반환합니다.

<br>

str1.lastIndexOf('z')는 str1에 'z'라는 알파벳 자체가 없으므로

-1을 반환합니다.

<br>

### charAt(), copyValueOf(), toCharArray()

~~~ java
public class StringCheck4 {
    public static void main(String[] ar){
        StringCheck4 ex = new StringCheck4();
        ex.stringCharAt();
        System.out.println("====================================");
        ex.stringValueOf();
    }

    public void stringCharAt(){
        String name = "teemo";
        System.out.println("name.charAt(3) = " + name.charAt(3));
//        name.charAt(3) = m
    }

    public void stringValueOf(){
        char [] values = {'t', 'e', 'e', 'm', 'o'};
        String name = String.copyValueOf(values);
        System.out.println("String.copyValueOf({'t', 'e', 'e', 'm', 'o'}) = " + name);
//        String.copyValueOf({'t', 'e', 'e', 'm', 'o'}) = teemo

        System.out.println();

        char[] reConverToChar = name.toCharArray();
        for(char data:reConverToChar){
            System.out.print(data + " ");
        }
//        t e e m o
        System.out.println();
    }
}
~~~

charAt()은 소괄호 안의 위치에 있는 char를 리턴합니다.

<br>

copyValueOf()는 char 배열을 String으로 만들어 리턴합니다.

이 메소드는 static이므로 static방식으로 접근하여 사용합니다.

![java_copyValueOf_api](http://drive.google.com/uc?export=view&id=173RdUau9TBJusV_2ab-xQRTifDOP11WH)

<br>

toCharArray()는 copyValueOf()와 반대로 String을 char 배열로 만들어 리턴합니다.

<br>

### substring(), subSequence() 

~~~ java
public class StringCheck5 {
    public static void main(String[] ar){
        StringCheck5 ex = new StringCheck5();
        ex.stringSubString();
    }

    public void stringSubString(){
        String str = "teemo, the cutest champion";
        String sub1 = str.substring(7);
        String sub2 = str.substring(11, 17);
        System.out.println("sub1 = " + sub1);
        System.out.println("sub2 = " + sub2);

        CharSequence sub3 = str.subSequence(0, 5);
        System.out.println("sub3 = " + sub3);

//        sub1 = the cutest champion
//        sub2 = cutest
//        sub3 = teemo
    }
}
~~~

두 메소드 모두 String에서 부분을 추출해서 리턴합니다.

substring()은 String으로 리턴, subSequence()은 charSequence로 리턴합니다.

숫자를 하나만 쓰면, 그 숫자의 위치부터 끝까지

숫자를 두개를 쓰면, 두 숫자 위치 사이의 부분을 리턴합니다.

<br>

### split()

~~~ java
public class StringCheck6 {
    public static void main(String[] ar){
        StringCheck6 ex = new StringCheck6();
        ex.stringSpilit();
    }

    public void stringSpilit(){
        String str = "Teemo is the cutest champion in league of legends";
        String[] strArray = str.split(" ");
        for(String data:strArray){
            System.out.println(data);
        }
//        Teemo
//        is
//        the
//        cutest
//        champion
//        in
//        league
//        of
//        legends
        System.out.println("--------------------------------------------------");
        String[] strArray2 = str.split(" ", 3);
        for(String data:strArray2){
            System.out.println(data);
        }
//        Teemo
//        is
//        the cutest champion in league of legends
    }
}
~~~

split()는 소괄호 안에 정규표현식에 맞춰 문자열을 여러개의 문자열의 배열로 나눠 리턴합니다.

여기서는 split(" "), 즉 공백을 기준으로 나눴습니다.

split(" ", 3)은 공백을 기준으로 문자열을 나누되, 배열의 최대 크기는 3으로 제한합니다.

<br>

### trim()

~~~ java
public class StringCheck7 {
    public static void main(String[] ar){
        StringCheck7 ex = new StringCheck7();
        ex.stringTrim();
    }

    public void stringTrim(){
        String[] strArray = new String[]{
            "    teemo ", "tee  mo", "teemo    ", "teemo",
        };

        for(String data:strArray){
            System.out.println("[" + data + "]");
        }
//        [    teemo ]
//        [tee  mo]
//        [teemo    ]
//        [teemo]
        System.out.println("------------------------------------");

        for(String data:strArray){
            System.out.println("[" + data.trim() + "]");
        }
//        [teemo]
//        [tee  mo]
//        [teemo]
//        [teemo]
    }
}
~~~

trim()은 문자열의 앞, 뒤의 공백을 없앤 문자열을 리턴합니다.

문자열 중간 중간에 있는 공백은 없애지 않습니다.

<br>

### replace(), replaceFirst()

~~~ java
public class StringCheck8 {
    public static void main(String[] ar){
        StringCheck8 ex = new StringCheck8();
        ex.stringReplace();
    }

    public void stringReplace(){
        String str = "Teemo is the cutest champion in league of legends";
        System.out.println(str.replace('c', 'k'));
//        Teemo is the kutest khampion in league of legends
        System.out.println(str.replace("Teemo", "Gnar"));
//        Gnar is the cutest champion in league of legends
        System.out.println(str.replace(" ", "|"));
//        Teemo|is|the|cutest|champion|in|league|of|legends
        System.out.println(str.replaceFirst(" ", "|"));
//        Teemo|is the cutest champion in league of legends
        System.out.println("str = " + str);
//        str = Teemo is the cutest champion in league of legends
    }
}
~~~

replace()는 주어진 첫번째 파라미터로 입력된 char나 String을 

두번째 파라미터로 입력된 char나 String으로 바꾼 문자열을 리턴합니다.

replaceFirst() 바꿀 사항이 여러개여도 젤 처음 것만 바꾸고 리턴합니다.

replace()나 replaceFirst()를 써도 원래 문자열은 변하지 않습니다.

![img_teemo_gnar](http://drive.google.com/uc?export=view&id=1GFOSIjFZWvY8vfA0DlHt4Ka_NcpNtCz6)

<br>

### format() 

~~~ java
public class StringCheck9 {
    public static void main(String[] ar){
        StringCheck9 ex = new StringCheck9();
        ex.stringFormat();
    }

    public void stringFormat(){
        String str = "%s is the cutest champion in league of legends. He/She has %d power. His/Her win rate is %.4f %%";
        String strInputed = String.format(str, "Teemo", 70, 77.7);
        System.out.println("strInputed = " + strInputed);
//        strInputed = Teemo is the cutest champion in league of legends. He/She has 70 power. His/Her win rate is 77.7000 %
    }
}
~~~

format()메소드는 문자열의 형식이 정해져있고, 그 안에 값들만 바뀌는 상황일 때 활용하면 좋습니다.

str처럼 바뀔 부분만 %s(String), %d(정수형 숫자), %f(소숫점 숫자)로 써주고 선언합니다.

그리고 strInputed처럼 format()을 써서 그 부분을 채워넣으면 됩니다.

참고로 %.4f 로 적으면 소숫점 4번째까지 나옵니다. %%는 %로 출력됩니다.

<br>

### toLowerCase(), toUpperCase()

~~~ java
public class StringCheck10 {
    public static void main(String[] ar){
        StringCheck10 ex = new StringCheck10();
        ex.stringCase();
    }

    public void stringCase(){
        String str = "Teemo is the Cutest Champion in League of Legends";
        System.out.println("str.toLowerCase() = " + str.toLowerCase());
        System.out.println("str.toUpperCase() = " + str.toUpperCase());
//        str.toLowerCase() = teemo is the cutest champion in league of legends
//        str.toUpperCase() = TEEMO IS THE CUTEST CHAMPION IN LEAGUE OF LEGENDS
    }
}
~~~

문자열을 모두 소문자로, 대문자로 바꿔 리턴하는 메소드 입니다.

<br>

### valueOf()

~~~ java
public class StringCheck11 {
    public static void main(String[] ar){
        StringCheck11 ex = new StringCheck11();
        ex.stringValueOf();
    }

    public void stringValueOf(){
        byte b = 1;
        String byte1 = String.valueOf(b);
        String byte2 = b + "";

        System.out.println("byte1 = " + byte1);
        System.out.println("byte2 = " + byte2);
//        byte1 = 1
//        byte2 = 1

        System.out.println();

        String str = null;
        String str1 = String.valueOf(str);
        String str2 = str + "";
        System.out.println("str = " + str);
        System.out.println("str1 = " + str1);
        System.out.println("str2 = " + str2);
//        str = null
//        str1 = null
//        str2 = null
    }
}
~~~

valueOf()는 기본자료형을 문자열로 바꿔 리턴합니다.

예를 들어, b값은 byte값 1입니다.

이를 String.valueOf(b)를 통해 숫자 1이 아닌 문자열 "1"이 리턴됩니다.

이는 b + "" 으로도 할 수 있습니다.

<br>

다만 기본자료형이 아니라 객체를 문자열로 바꿀 때는 ""를 더해주는 것보단

valueOf()를 쓰는게 좋습니다.

valueOf(객체)는 valueOf(객체.toString())과 같습니다.

객체가 null이 아닐 경우에는 ""를 더해줘도 상관없지만,

객체가 null일 경우에는 객체 + "" 는 객체.toString() + "" 와 같은데

이떄 null의 toString() 에 접근할 수 없으므로 NullPointerException이 발생합니다.

하지만 valueOf(null)은 "null"이라는 문자열을 반환해주므로 예외가 발생하지 않습니다.

객체가 null인지 아닌지는 아무도 모르는 것이므로 valueOf()를 쓰는게 좋습니다.

<br>

## StringBuffer, StringBuilder

<br>

String에 단점이 있다면 immutable 하다는 것입니다.

즉, 한번 선언하면 그 값을 바꿀 수 없습니다.

~~~ java
String name = "cute";
name = name + " teemo";
~~~

와 같이 한번 선언 후, 다른 문자열을 더해줬다면

단순히 name 이란 변수의 값이 바뀌는게 아니라

"cute"라는 String은 GC(Garbage Collection)의 대상이 되고(버려지고),

"cute teemo" 라는 새로운 String이 생성되는 것입니다.

GC가 많이 사용된다는 것 자체가 프로그램을 느려지게 합니다.

<br>

이러한 단점을 보완하기 위해 

StringBuilder, StringBuffer 클래스가 탄생했습니다.

이 두 클래스는 문자열을 더해줘도 기존 변수가 버려지거나 새로운 객체가 생성되거나 하지않습니다.

다만 더할 때는 아래의 코드와 같이 .append()를 써서 더해줘야 합니다.

~~~ java
public class StringBuilderBuffer {
    public static void main(String[] ar){
        StringBuilder sb1 = new StringBuilder();
        sb1.append("cute");
        sb1.append(", teemo");
//        sb1.append("cute").append(", teemo");
        System.out.println("sb1 = " + sb1);
//        sb1 = cute, teemo

        System.out.println("-----------------------------");
        StringBuffer sb2 = new StringBuffer();
        sb2.append("lovely").append(", Gnar");
        System.out.println("sb2 = " + sb2);
//        sb2 = lovely, Gnar
    }
}
~~~

여러 문자열을 더해줄 때는 맨처음 나오는 주석같이 여러번 .append()를 붙여줘도 됩니다.

<br>

참고로 JDK5 이상에서는 단순하게 String의 더하기연산을 하는 경우,

컴파일할 때 자동으로 해당 연산은 StringBuilder로 바꿔줍니다.

하지만 for문과 같은 반복연산에서 더하기연산을 하는 경우는 변환을 해주지 않으므로,

StringBuilder나 StringBuffer를 사용하는게 좋습니다.

<br>

두 클래스의 차이를 간단히 표로 설명하자면

🚸|StringBuffer | StringBuilder
:---:|:---:|:---:
Thread safe 여부 | O | X
속도 | 느림 | 빠름

하나의 메소드 안에서 문자열을 생성하여 더할 경우엔 StringBuilder를 사용해도 되지만,

문자열이 클래스의 인스턴스 변수로 선언되어 여러 쓰레드에서 동시에 접근하는 상황이라면 StringBuffer를 사용해야합니다.

StringBuffer와 StringBuilder에 대해서 자세한 건 이후에 포스팅 하겠습니다.