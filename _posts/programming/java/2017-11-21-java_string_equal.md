---
layout: post
title:  "[Java] String의 equals()(String의 메모리 할당)"
date:   2017-11-21 13:50:00
description: String의 equals()(String의 메모리 할당)
categories:
- programming
- java
banner_image: /programming/java/java-logo.jpg
comments: true
---

String의 equals()(String의 메모리 할당)

---

## 궁금증의 발단

<br>

String은 참조자료형입니다.

참조자료형은 == 를 이용해 비교하면 객체의 주소값을 비교합니다.

그럼 만약 아래와 같은 코드가 있다면

~~~ java
String name1 = "teemo";
String name2 = "teemo";

if(name1 == name2){
  System.out.println("name1 == name2");
}
~~~

String은 참조자료형이기 때문에

두 객체는 주소값이 다를 것이므로 if문이 실행이 안되야 한다고 생각했지만

결과는 실행이 되는 것이었습니다.

<br>
<hr>
<br>

## String의 메모리 할당 방법

<br>

String을 선언하는 방법은 두가지가 있습니다.

1. 리터럴(literal)
2. new 연산자

<br>

밑의 예제를 통해 설명하겠습니다.

~~~ java
public class StringTest1 {
    public static void main(String[] ar){
        String name1 = "teemo";
        String name2 = "teemo";
        String name3 = new String("teemo");

        System.out.println("name1.hashCode() = " + name1.hashCode());
        System.out.println("name2.hashCode() = " + name2.hashCode());
        System.out.println("name3.hashCode() = " + name3.hashCode());
//        name1.hashCode() = 110237878
//        name2.hashCode() = 110237878
//        name3.hashCode() = 110237878

        System.out.println("name1.toString() = " + name1.toString());
        System.out.println("name2.toString() = " + name2.toString());
        System.out.println("name3.toString() = " + name3.toString());
//        name1.toString() = teemo
//        name2.toString() = teemo
//        name3.toString() = teemo

        System.out.println("System.identityHashCode(name1) = " + System.identityHashCode(name1));
        System.out.println("System.identityHashCode(name2) = " + System.identityHashCode(name2));
        System.out.println("System.identityHashCode(name3) = " + System.identityHashCode(name3));
//        System.identityHashCode(name1) = 453211571
//        System.identityHashCode(name2) = 453211571
//        System.identityHashCode(name3) = 796684896

        System.out.println();

        if(name1 == name2){
            System.out.println("name1 == name2");
        }else{
            System.out.println("name1 != name2");
        }
//        name1 == name2

        System.out.println();

        if(name1 == name3){
            System.out.println("name1 == name3");
        }else{
            System.out.println("name1 != name3");
        }
//        name1 != name3

        System.out.println();

        if(name1.equals(name3)){
            System.out.println("name1.equals(name3) returns true");
        }else{
            System.out.println("name1.equals(name3) returns false");
        }
//        name1.equals(name3) returns true
    }
}
~~~

주석이 각 println문의 실행 결과입니다.

name1, name2 처럼 선언한 방식이 리터럴 방식이고,

name3 이 new를 이용해 선언한 방식입니다.

<br>

JVM의 메모리는 여러 구역으로 나뉘어져있습니다.

그 중 Constant Pool, Heap 영역이 존재하는데요

name1 처럼 리터럴로 선언할 경우, "teemo"라는 값은 Constant Pool에 저장됩니다.

이후에 또 name2처럼 리터럴로 선언하면, 일단 자바는

Constant Pool에서 name2의 값인 "teemo"를 찾습니다.

만약 존재하면 name2를 따로 저장하는게 아니라, 기존에 저장된 "teemo"객체를 참조합니다.

즉, name1과 name2는 완전 똑같은 객체입니다.

그래서 name1 == name2 조차도 주소값이 같으므로 true가 나옵니다.

<br>

name3처럼 new를 이용해 선언하면 이 String객체는 Heap영역에 저장됩니다.

즉, Constant Pool에 저장된 name1, name2와는 주소값이 다릅니다.

그래서 name1 != name3 이 됩니다.

<br>

하지만 name1.equals(name3)은 true를 반환했는데요,

String 클래스에서는 해당 값에 따라 toString()과 hashCode()메소드를 오버라이딩합니다.

즉, 문자열 값이 같으면 toString()과 hashCode()도 같기때문에

equals()는 true를 반환하게 됩니다.

<br>

오버라이딩 되지 않은 때묻지않은(?) 주소값은 identityHashCode()를 통해 얻을 수 있습니다.

구해본 결과 name3만 다르게 나온 것을 알 수 있습니다.

<br>
<hr>
<br>

## intern()

<br>

자바 고수가 되기 전에는 절대 사용하면 안된다는

intern()메소드에 대해 알아보겠습니다.

~~~ java
public class internCheck {
    static String name1 = "teemo";
    static String name2 = new String("teemo");

    public static void main(String[] ar){
        if(name1 == name2){
            System.out.println("name1 == name2");
        }else{
            System.out.println("name1 != name2");
        }
//        name1 != name2

        System.out.println();

        String name3 = name2.intern();

        if(name1 == name3){
            System.out.println("name1 == name3");
        }else{
            System.out.println("name1 != name3");
        }
//        name1 == name3

        System.out.println();
        System.out.println("System.identityHashCode(name1) = " + System.identityHashCode(name1));
        System.out.println("System.identityHashCode(name2) = " + System.identityHashCode(name2));
        System.out.println("System.identityHashCode(name3) = " + System.identityHashCode(name3));
//        System.identityHashCode(name1) = 611437735
//        System.identityHashCode(name2) = 209813603
//        System.identityHashCode(name3) = 611437735
    }
}
~~~

name1은 리터럴 방식으로 선언했고, name2는 new를 이용해 선언했습니다.

앞서 본바와 같이 name1은 Constant Pool에 저장되고,

name2는 Heap영역에 저장되어 객체의 주소값이 다릅니다.

<br>

~~~ java
String name3 = name2.intern();
~~~
을 살펴보겠습니다.

intern()을 사용하면, 해당 문자열 값을 먼저 Constant Pool에서 찾습니다.

만약 존재하면 그 값을 그대로 참조하게 되고, 없으면 Constant Pool에 새로운 객체를 생성합니다.

여기서는 name1이 참조하는 "teemo" 객체가 이미 Constant Pool에 있으므로,

그 값을 그대로 참조합니다.

즉 name1과 name3는 완전히 같은 객체인 것입니다.

이는 identityHashCode()를 통해서도 확인할 수 있습니다.

<br>

intern()메소드를 자바 고수가 되기 전까지 사용하면 안되는 이유는 다음과 같습니다.

<br>

일단 Constant Pool의 특성에 대해 잠시 알고 넘어가자면

- 메모리 용량이 한계가 있음
- 용량을 따로 설정할 수는 있지만 앱이 실행되는 동안 자동으로 늘어나거나 하진 않음

<br>

옛날에 Java6 때까지는 Constant Pool이 Perm(Permanent)영역에 속해있었습니다.

Perm영역은 단어뜻 그대로 영구적이라 GC(Garbage Collection)가 작동하지 않습니다.

GC는 자바에서 안쓰는 메모리를 청소하는 역할을 합니다.

즉, 한번 저장되면 자바 프로그램이 끝날 때까지 지워지지 않았습니다.

그런데 Constant Pool 메모리 용량은 한계가 있기 때문에

용량이 다 찼는데 intern()메소드를 쓰면 OOM(OutOfMemory) Exception이 나왔다합니다.

(옛날 자바를 안써봐서... 보고 들은바...)

<br>

하지만 Java7부터는 Constant Pool의 위치가 Heap영역으로 옮겨졌고 GC의 대상이 되었습니다.

![img_contant_pool_from_perm_to_heap](http://drive.google.com/uc?export=view&id=1nHCqF3xjZo89xfbtj-4oO_UoIzuBfrE4)

즉, 저장 용량에 한계가 있기 때문에, intern()메소드를 통해 억지로 Constant Pool에 값을 할당하면

그 영역에 대해 별도로 메모리를 청소하는 단계(GC)를 거칩니다.

따라서, 작은 연산 하나를 빠르게 하기 위해 전제 자바 시스템이 느려지게 됩니다.

<br>

제가 보고있는 자바책에서 절대절대 쓰지말라고 강조하고있습니다.

말 잘 듣겠습니다.
