---
layout: post
title:  "[Java] 예외처리(Exception)"
date:   2017-12-02 13:50:00
description: 예외처리(Exception)
categories:
- programming
- java
banner_image: /programming/java/java-logo.jpg
comments: true
---

예외처리(Exception)

---

## 예외처리

<br>

예외란 쉽게 말해 코드를 다 짜고 실행시켰는데 에러가 발생하는 것입니다.

(엄밀히 따지면 자바에서는 에러와 예외를 구분짓지만, 여기서는 그냥 통상적인 의미의 에러를 의미합니다. 자세한 건 밑에서 설명하겠습니다.)

물론, 단순 오타로 인한 에러도 있습니다. 이런 경우엔 오타를 고쳐야겠죠.

다른 예를 들어, 크기가 5인 배열 intArray를 만들어놓고, intArray[5]에 접근하면 에러가 나겠죠.

이러한 예외(에러)를 처리하는 걸 예외처리라고 부릅니다.

<br>

자바에서 에러는 try-catch 구문으로 처리합니다.

<br>
<hr>
<br>

## try-catch

<br>

먼저 밑의 코드를 보겠습니다.

![img_error_without_try_catch](http://drive.google.com/uc?export=view&id=10H8_nHCSK24an9cqRQJPFe_DnF8NPId4)

intArray의 배열크기는 5인데 intArray[5]에 접근하니,

ArrayOutOfIndexBoundsException 예외가 발생합니다.

이렇게 예외가 발생하는, 또는 발생할 것이라 예상되는 부분을

try-catch로 처리할 수 있습니다.

<br>

~~~ java
public class ExceptionSample {
    public static void main(String[] ar){
        ExceptionSample ex = new ExceptionSample();
        ex.arrayOutOfBounds();
//        catch section
//        e = java.lang.ArrayIndexOutOfBoundsException: 5
//        out of try-catch section
        System.out.println("-------------------------------");
        ex.arrayOutOfBounds2();
//        catch section2
//        out of try-catch section2
    }

    public void arrayOutOfBounds(){
        try{
            int[] intArray = new int[5];
            System.out.println(intArray[5]);
            System.out.println("try section");
        }catch(Exception e){
            System.out.println("catch section");
            System.out.println("e = " + e);
        }
        System.out.println("out of try-catch section");
    }

    public void arrayOutOfBounds2(){
        try{
            int[] intArray2 = new int[5];
            System.out.println(intArray2[5]);
            System.out.println("try section2");
        }catch(Exception e){
            System.err.println("catch section2");
        }
        System.out.println("out of try-catch section2");
    }
}

~~~

기본적인 try-catch 구문입니다.

예외가 발생할 부분을 try로 묶어주고,

예외가 발생하면 catch(Exception e) 부분이 실행됩니다.

e는 출력결과에서 볼 수 있듯이 예외에 대한 설명입니다.

<br>

try문을 실행하면서 예외가 발생하자마자 catch문으로 넘어가서

System.out.println("try section")은 실행이 되지 않습니다.

try-catch 구문이 끝나면 그 아래 코드가 순차적으로 실행됩니다.

<br>

arrayOutOfBounds2()를 보면 catch부분에

System.out.println()이 아닌 System.err.println()으로 되어있습니다.

콘솔에서는 구분이 안되지만 IDE에서는 다른 색으로 출력되어 구분됩니다.

![img_System.err](http://drive.google.com/uc?export=view&id=1KJczK7yVlpPPJqAcmNCTsh7_pjUIuAg1)

이렇게 다르게 색이 나오면 예외가 더 명확히 구분될 것입니다.

그런데 순서가 조금 이상합니다.

순차적으로 실행이 됬다면

"catch section2"가 끝에서 두번째로 출력되어야합니다.

이상하니 똑같은 코드를 다시 실행해 보면

![img_System.err2](http://drive.google.com/uc?export=view&id=1dlTm_Mg8RWrpvunAdS86yXL7yIFwlLWG)

"catch section2"가 제일 위에 출력되어있습니다!

잘 살펴보면 System.out.println()은 순차적으로 출력이 되었는데

System.err.println()만 순서가 실행할때마다 뒤죽박죽입니다.

하지만 이걸 IDE(저는 IntelliJ)가 아닌 콘솔창에서 실행해보면

![img_System.err3](http://drive.google.com/uc?export=view&id=19zJypeNNV_MV-siBV5-znjW53LJyLVS6)

항상 코드 순서에 맡게 출력되는걸 볼 수 있습니다.

<br>

이유는 간단히 설명하자면, 

화면에 출력될 String들은 JVM(Java Virtual Machine)에 의해 일단

메모리 버퍼에 캐시(저장)된 후, 화면에 출력됩니다.

그런데 System.out.println()과 System.err.println()은 서로 다른 버퍼를 사용합니다.

이 때, 이 두개의 버퍼를 다루는 환경에 따라 출력 결과가 달라집니다.

제가 사용하고 있는 툴인 IntelliJ에서는 다른 두개의 쓰레드가 각자 out버퍼와 err버퍼를 맡아 

동시에 출력해서 순서가 뒤죽박죽이 됩니다. 아마도...

이클립스에도 똑같은 현상이 있습니다.([https://bugs.eclipse.org/bugs/show_bug.cgi?id=32205](https://bugs.eclipse.org/bugs/show_bug.cgi?id=32205))

아마도 콘솔에서는 두개의 버퍼를 처리하는데 하나의 쓰레드를 쓰든지,

두개의 쓰레드를 쓰지만 동기화(synchronization)를 하던지 할겁니다.

<br>

이게 이번 챕터의 메인이 아니기에 후딱 빠지겠습니다.

try-catch를 사용할 때는 변수 선언에 주의해야합니다.

밑의 코드를 보겠습니다.

~~~ java
public class ExceptionVariable {
    public static void main(String[] ar){
        ExceptionVariable ex = new ExceptionVariable();
        ex.checkVar();
        System.out.println("--------------------------------");
        ex.checkVar2();
    }

    public void checkVar(){
        int [] intArray = new int[5];
        try{
            System.out.println(intArray[5]);
        }catch(Exception e){
            System.out.println(intArray.length);
        }
        System.out.println("out of try-catch section");
    }

    public void checkVar2(){
        try{
            int [] intArray2 = new int[5];
            System.out.println("intArray2[5] = " + intArray2[5]);
        }catch(Exception e){
            System.out.println("intArray2.length = " + intArray2.length);
        }
        System.out.println("out of try-catch section");
    }
}
~~~

checkVar()은 아무 문제가 없고, 

checkVar2()는 예외가 발생합니다.

두 메소드의 차이는 변수 선언의 위치입니다.

<br>

checkVar2()처럼 try문 안에서 변수를 선언하면

try문을 벗어남과 동시에 변수도 소멸해버립니다.

그래서 catch문에서는 intArray2를 찾지 못하여 에러가 납니다.

<br>

보통 이런 문제를 해결하기 위해, catch문장에서 사용할 변수는 try-catch문 전에 선언해놓습니다.

~~~ java
public class ExceptionVariable2 {
    public static void main(String[] ar){
        ExceptionVariable2 ex = new ExceptionVariable2();
        ex.checkVar3();
//        intArray.length = 5
//        out of try-catch section
    }

    public void checkVar3(){
        int [] intArray = null;
        try{
            intArray = new int[5];
            System.out.println("intArray[5] = " + intArray[5]);
        }catch(Exception e){
            System.out.println("intArray.length = " + intArray.length);
        }

        System.out.println("out of try-catch section");
    }
}
~~~

이렇게 try-catch문 전에 선언해놓으면, 

intArray는 checkVar3()이 끝날때까지 살아있습니다.(메모리에 할당되어 있습니다.)

예외가 발생했다고해서 try문의 내용이 취소가 되는게 아닙니다!

<br>
<hr>
<br>

## try-catch-finally

<br>

finally는 try-catch 다음에 사용되어 예외가 발생하든 안하든 무조건 실행되는 구문입니다.

~~~ java
public class FinallySample {
    public static void main(String[] ar){
        FinallySample ex = new FinallySample();
        ex.finallyEx();
//        intArray.length = 5
//        finally section
//        out of try-catch-finally section
        System.out.println("--------------------------------------");
        ex.finallyEx2();
//        intArray2[5] = 0
//        finally section
//        out of try-catch-finally section
    }

    public void finallyEx(){
        int [] intArray = new int[5];

        try{
            System.out.println("intArray[5] = " + intArray[5]);
        }catch(Exception e){
            System.out.println("intArray.length = " + intArray.length);
        }finally{
            System.out.println("finally section");
        }

        System.out.println("out of try-catch-finally section");
    }

    public void finallyEx2(){
        int [] intArray2 = new int[5];

        try{
            System.out.println("intArray2[5] = " + intArray2[4]);
        }catch(Exception e){
            System.out.println("intArray2.length = " + intArray2.length);
        }finally{
            System.out.println("finally section");
        }

        System.out.println("out of try-catch-finally section");
    }
}
~~~

finallyEx()는 예외가 발생하여 catch가 실행되고,

finallyEx2()는 예외가 발생하지않아 try만 실행됩니다.

하지만 두 메소드 모두 finally문이 실행된 것을 볼 수 있습니다.

<br>
<hr>
<br>

## 두개 이상의 catch

<br>

위의 코드에서는 catch를 쓸 때 모두 catch(Exception e)를 썻습니다.

하지만 꼭 저렇게 써야하는 건 아닙니다.

~~~ java
public class MultiCatchSample {
    public static void main(String[] ar){
        MultiCatchSample ex = new MultiCatchSample();
        ex.multiCatch();
//        First catch section
//        e = java.lang.ArrayIndexOutOfBoundsException: 5
    }

    public void multiCatch(){
        int [] intArray = new int[5];
        try{
            System.out.println("intArray[5] = " + intArray[5]);
        }catch(ArrayIndexOutOfBoundsException e){
            System.out.println("First catch section");
            System.out.println("e = " + e);
        }catch(Exception e){
            System.out.println("Second catch section");
            System.out.println(intArray.length);
        }
    }
}
~~~

위의 코드에서 두가지를 알 수 있습니다.

먼저 catch()안의 소괄호에는 Exception이라고만 써야하는게 아니라

발생하는 예외명을 정해져 적어줄 수 있습니다.

여기서 계속 사용하고 있는 예외인 ArrayIndexOutOfBoundsException를 catch안에 쓰니

catch(ArrayIndexOutOfBoundsException e)만 실행됩니다.

<br>

더 자세히 설명하자면 ArrayIndexOutOfBoundsException은 catch안에서 쓸 수 있도록 정해진 단어? 가 아니라

밑에서 볼 수 있듯이

![img_error_without_try_catch](http://drive.google.com/uc?export=view&id=10H8_nHCSK24an9cqRQJPFe_DnF8NPId4)

<span style="color: red">java.lang.ArraryIndexOutOfBoundsException</span>

즉, java.lang 패키지에 정의된 예외클래스입니다.

java api에서 확인해보면,

![img_java_api_ArrayIndexOutOfBoundsException](http://drive.google.com/uc?export=view&id=1bDCclJsKFlIxIqzQ53AznyRBAAhF4jks)

주요 부분은 빨강 네모로 표시했습니다.

여기 나와있는 예외들을 catch 소괄호 안에 쓸 수 있습니다.

이 예외 클래스의 부모 클래스를 따라 올라가다 보면 Exception클래스가 나타납니다.

![img_java_api_Exception_class](http://drive.google.com/uc?export=view&id=1f-6c-Fk4s3DPyYkKS1ULlvQpDtTHaywt)

Direct Known Subclasses 부분에서 볼 수 있듯이, 

모든 예외 클래스의 부모클래스는 java.lang.Exception클래스 입니다.

그래서 catch(Exception e)를 통해 모든 예외를 처리할 수 있습니다.

즉, 위의 코드에서 try에서 발생한 ArrayIndexOutOfBoundsException은 두개의 catch문에서 둘다 처리할 수 있습니다.

다만, 위에 적혀진 catch문부터 순차적으로 내려가면서 처리할 수 있는 catch문이 걸리면 거기서 해결합니다.

<br>

try문에서 발생한 예외를 처리할 catch문이 없는 경우에는 다음과 같은 에러가 납니다.

![img_java_no_catch](http://drive.google.com/uc?export=view&id=18-47bf6e9EZ3S83yTIkp_LkS5AR1262E)

여기선 intArray가 null인데 배열로 접근하려했으므로 NullPointerException 예외가 발생하는데

이를 처리해줄 catch가 없는 상황입니다.

<br>

여기서 주의할 점이 있습니다. 아래의 코드를 보겠습니다.

![img_java_catch_order_miss](http://drive.google.com/uc?export=view&id=1UVWsVE1JoUNYppuPNDHmVmpEoJ0TFuao)

catch(Exception e)가 먼저 나오니 

뒤에 있는 catch(ArrayIndexOutOfBoundsException e)에 예외가 발생합니다.

어차피 catch(Exception e)가 ArrayIndexOutOfBoundsException까지 처리할껀데

뭐하러 썼냐면서 컴파일러가 친절하게 에러를 내줍니다.

이와같이 부모클래스가 자식클래스보다 먼저 catch에서 쓰이면 에러가 납니다.

<br>
<hr>
<br>

## 예외의 종류 3가지

<br>

### 1. Error
### 2. Unchecked Exception(Runtime Exception)
### 3. Checked Exception

<br>

관계도로 표현하면 다음과 같습니다.

![img_throwable_error_exception](http://drive.google.com/uc?export=view&id=1SCcGBgYK3WGxmlOnBb0QdjdaU3pCVUc0)

Error는 자바 프로그램 밖에서 발생한 예외입니다.

자바 코드에는 문제가 없지만 서버가 고장났다든가, 메인보드가 맛이 갔다든가...

<br>

Exception에는 두 가지 종류(Unchecked, Checked)가 있습니다.

Checked는 컴파일 시 예외가 발생합니다. 예를 들어

![img_java_catch_order_miss](http://drive.google.com/uc?export=view&id=1UVWsVE1JoUNYppuPNDHmVmpEoJ0TFuao)

IDE에 작성한 코드인데, 코드에 빨간줄이 뜹니다. 

IDE에서는 컴파일시 체크하는 사항을 미리 코드에서 보여줍니다.

<br>

Unchecked exception의 예를 보겠습니다.

![img_error_without_try_catch](http://drive.google.com/uc?export=view&id=10H8_nHCSK24an9cqRQJPFe_DnF8NPId4)

코드자체에는 빨간줄이 안뜨고 실행시키면 다음과 같이 에러가 납니다.

컴파일시에는 예외가 발생하지 않고 실행시 예외가 발생하는 유형입니다.

<br>
<hr>
<br>

## java.lang.Throwable

<br>

예외 관계도를 살펴보면 Throwable이 제일 위에 있는 걸 볼 수 있습니다.

Exception과 Error의 공통 부모 클래스는 java.lang.Throwable 입니다.

(위 이미지 중 java api페이지의 Exception 클래스를 보면 확인할 수 있습니다)

즉, Exception이나 Error를 처리할 때 Throwable로 처리해도 됩니다.

<br>

Throwable 클래스에 선언되어있고, Exception클래스에서 오버라이딩한 메소드는 10개가 넘지만

그 중 가장 많이 사용되는 3개 메소드를 살펴보겠습니다.

getMessage(), toString(), printStackTrace()

![img_Exception_api](http://drive.google.com/uc?export=view&id=1UWg-twh8wLKZU6772D2Ujo3bEgZ6fWEJ)

~~~ java
public class ThrowableSample {
    public static void main(String[] ar){
        ThrowableSample ex = new ThrowableSample();
        ex.throwable();
//        t.getMessage() = null
//        t.toString() = java.lang.NullPointerException
//        java.lang.NullPointerException
//            at ThrowableSample.throwable(ThrowableSample.java:11)
//            at ThrowableSample.main(ThrowableSample.java:4)
    }

    public void throwable(){
        int[] intArray = new int[5];
        try{
            intArray = null;
            System.out.println(intArray[5]);
        }catch(Throwable t){
            System.out.println("t.getMessage() = " + t.getMessage());
            System.out.println("t.toString() = " + t.toString());
            t.printStackTrace();
        }
    }
}
~~~

getMessage()와 toString()은 예외메세지를 String형태로 받습니다.

toString()이 더 자세히 나옵니다.

printStackTrace()는 예외메시지 외에 예외가 발생한 메소드들의 스택 트레이스를 출력합니다.

<br>

제일 자세한 메세지는 printStackTrace()로 볼 수 있지만,

로그양이 많아지므로, 꼭 필요한 곳에서만 사용하기를 추천합니다.

<br>
<hr>
<br>

## throws (예외던지기)

<br>

~~~ java
public class ThrowSample {
    public static void main(String[] ar){
        ThrowSample ex = new ThrowSample();
        ex.throwsException(13);
//        java.lang.Exception: Number is bigger than 12
//            at ThrowSample.throwsException(ThrowSample.java:10)
//            at ThrowSample.main(ThrowSample.java:4)
    }

    public void throwsException(int number){
        try{
            if(number > 12){
                throw new Exception("Number is bigger than 12");
            }
            System.out.println("number is " + number);
        }catch(Exception e){
            e.printStackTrace();
        }
    }
}
~~~

throwsException()은 숫자를 받는데, 12보다 크면 

throw new Exception을 통해 예외를 발생시킵니다.

throw는 지정된 예약어이므로 항상 똑같이 쓰면되고,

new는 새로운 객체를 만들때와 똑같은 new입니다. 

그 뒤에 발생시킬 예외 클래스 이름을 쓰면됩니다.

<br>

여기서는 Exception 예외를 발생시켰고, 이를 catch(Exception e)에서 잡아 

e.printStackTrace()가 실행됩니다.

<br>

이렇게 throw를 사용할 수도 있습니다.

~~~ java
public class ThrowSample2 {
    public static void main(String[] ar){
        ThrowSample2 ex = new ThrowSample2();
        try{
            ex.throwEx(13);
        }catch(Exception e){
            System.out.println("Exception comes here");
        }

    }

    public void throwEx(int number) throws Exception{
        try{
            if(number > 12){
                throw new Exception("number is bigger than 12");
            }
        }catch(ArrayIndexOutOfBoundsException e){
            e.printStackTrace();
        }
    }
}
~~~

여기서는 throwEx()가 13이라는 숫자를 받으면

try안에 if문이 실행되고 Exception예외를 발생시킵니다.

근데 Exception를 잡는 catch문이 없죠.

이때 메소드 선언 라인에 적혀진 throws Exception를 통해

Exception를 던져버립니다. 어디로 던지냐하면 이 throwEx()를 호출한

main()메소드의 ex.throwEx(13)으로 던집니다.

즉, ex.throwEx(13)은 필히 try-catch로 예외처리를 해야합니다.

<br>

사실 위의 코드는 아래같이 더 간단히 할 수 있습니다.

~~~ java
public class ThrowSample3 {
    public static void main(String[] ar){
        ThrowSample3 ex = new ThrowSample3();
        try{
            ex.throwEx(13);
        }catch(Exception e){
            System.out.println("error = " + e);
        }
    }

    public void throwEx(int number) throws Exception{
        if(number > 12){
            throw new Exception("Number is bigger than 12");
        }
        System.out.println("Number is " + number);
    }
}
~~~

throwEx()를 throws로 처리하는 경우에는 굳이 메소드 안에서는

try-catch문을 안써도 됩니다.

사실 ThrowSample2는 throwEx()의 예외처리를 2중(catch와 throws)으로 한거였고,

ThrowSample3은 throwEx()의 예외처리를 1중으로 한겁니다.

<br>

throws에서 여러 예외 클래스를 던지려면 콤마(,)로 구분하면 됩니다.

~~~ java
public void multiThrows() throws ArrayIndexOutOfBoundsException, NullPointerException, Exception){

}
~~~

<br>

ThrowSample3에서 ex.throwEx(13)이 받은 예외를 또 던져버릴 수도 있습니다.

~~~ java
public class ThrowSample3{
	public static void main(String[] ar) throws Exception{
		...
	}
}
~~~

즉, 여러번 throws할 수 있다는 건데,

이미 throws한 것을 다시 throws하는건 좋은 습관이 아니라합니다.

<br>
<hr>
<br>

## Custom Exception(나만의 예외 만들기)

<br>

기존에 java에 이미 내장된 예외 말고

커스텀하게 예외를 만들 수도 있습니다.

<br>

Throwable 클래스의 자식 클래스 중, Error는 손대면 안되지만

Exception클래스는 개발자가 임의로 손댈 수 있습니다.

Throwable이나 그 자식 클래스를 상속받으면 되는데요,

Exception을 처리하는 클래스라면 java.lang.Exception클래스를 상속받는게 좋습니다.

그럼 새로운 예외를 만들어보겠습니다.

<br>

~~~ java
public class MyException extends Exception{
    public MyException(){
        super();
    }

    public MyException(String message){
        super(message);
    }
}
~~~

<br>

이렇게 Exception클래스를 상속받아 생성자를 오버라이딩하고,

<br>

~~~ java
public class CustomException {
    public static void main(String[] ar){
        CustomException ex = new CustomException();

        try{
            ex.throwMyException(13);
        }catch(MyException mye){
            mye.printStackTrace();
//            java.lang.Exception: Number is bigger than 12
//                at ThrowSample.throwsException(ThrowSample.java:13)
//                at ThrowSample.main(ThrowSample.java:4)
        }

    }

    public void throwMyException(int number) throws MyException{
        if(number > 12){
            throw new MyException("MyException! Number is bigger than 12");
        }

        System.out.println("number = " + number);
    }
}
~~~

이렇게 MyException을 사용할 수 있습니다.

throw new MyException("MyException! Number is bigger than 12")을 통해

MyException 클래스에 두번째 생성자가 실행됬겠죠.

<br>

main()메소드의 catch에서는 MyException을 잡았지만, Exception을 잡아도 됩니다.

Exception이 MyException의 부모이기 때문이죠.
