---
layout: post
title:  "[Java] Nested Class(클래스 안에 클래스)"
date:   2017-12-12 13:50:00
description: Nested Class
categories:
- programming
- java
banner_image: /programming/java/java-logo.jpg
comments: true
---

Nested Class

---

## Nested Class

<br>

Nested Class는 말그대로

클래스 안에 클래스를 의미합니다.

Nested Class를 사용하는 가장 큰 이유는 

소스의 가독성을 높이고, 유지보수를 용이하게 하기 위함입니다.

<br>

Nested Class는 3가지 종류가 있습니다.

<br>

>- static nested class
- local inner class(내부 클래스)
- anonymous inner class(익명 클래스)

<br>
<hr>
<br>

## static nested class

<br>

static으로 선언된 내부 클래스입니다.

예제를 살펴보겠습니다.

~~~ java
public class OuterOfStatic {
    static class StaticNested{
        private int value = 0;
        public int getValue(){
            return value;
        }

        public void setValue(int value){
            this.value = value;
        }
    }
}
~~~

OuterOfStatic 이라는 public 클래스 안에

StaticNested 라는 static 클래스가 정의되어 있습니다.

OuterOfStatic 클래스를 컴파일 하면

안의 내부 클래스도 컴파일 됩니다.

![img](https://lh3.googleusercontent.com/wHtPHTSStEKdy0vyLXfJzBMoOT_vbizBwppeLo3iC25uErxadpKxpZSftaz0X6cfDyl1YxI8GwYfo1P_-zKyuxMfpuuaGAzkjr2y5uKVZuyLQUxRkHHaxy497SlVLOjjb_6PKobRQJzkydPkoQv8B5-afxxCn4kg2RdxytMwCTjImTEHB100UEUfgUqA7sRFCKidajKczylbEEDd_pqh6NIrK4-lSm3IciV9N_Ex0NhiVyiGtdjJPJFQiorp3EqV63PUUy82tbVOOP9JlJ9FhpK5fSosN-AeSoim42TpYW4TfYpdB1NYeRuTglluwpIrhLwPMPx9PkD011SVEWUiBtO_TmrEy7toWt-fP0xVG7yrm5rgtQX8_IQa_zjBYrIThuHXQryJFPTxyfU8bAqPoWAx8EvThWeS9qqhiyIzCojI84lQi4M7ex-PjwXE9S0Sv8FtClZYwaiU1FlWGffuHBCzfI4U63EoFqiWsL25Yo7HmFCzgNINA96F3dH6i0kFUQjhsDAQa2n0Xm_hNYQaZLkBiTqvZR7YaWEbcCMEYloby7QSYrD7Rt6CCMlvIepaj0VRIeEW0jo5XqqXRs0aQLGBGmC8Ih5S2gVunWb9mA=w414-h574-no)

컴파일시 생기는 내부 클래스의 class파일은 위 그림에서 보이듯이

외부클래스명$내부클래스명.class 입니다.

<br>

이제 static 내부 클래스의 객체를 만들어 사용해보겠습니다.

~~~ java
public class NestedSample {
    public static void main(String[] ar){
        NestedSample ex = new NestedSample();
        ex.makeStaticNestedObject();
    }

    public void makeStaticNestedObject(){
        OuterOfStatic.StaticNested staticNested = new OuterOfStatic.StaticNested();
        staticNested.setValue(7);
        System.out.println("staticNested.getValue() = " + staticNested.getValue());
//        staticNested.getValue() = 7
    }
}
~~~

**외부클래스명.내부클래스명 객체명 = new 외부클래스명.내부클래스명();**

과 같이 객체를 만들어 사용할 수 있습니다.

<br>

이러한 static 내부 클래스는 언제 사용하면 좋을까요?

예를 들어 고등학교를 관리하는 HighSchool라는 클래스와

대학교를 관리하는 University 클래스가 있다고 가정하겠습니다.

두 학교 모두 학생이 존재하지만, 학생정보 사항은 다릅니다.

예를 들어 대학생은 학번이라는게 있지만 고등학생은 학년-반-번호 식입니다.

또, 대학생은 성적이 S, A+, A-... 이지만 고등학생은 원점수제 입니다.

<br>

이때 University의 대학생을 관리하는 Student클래스를 만들었다면

이 Student클래스는 고등학생용인지 대학생용인지 불분명합니다.

물론 HighSchoolStudent, UniversityStudent와 같이

이름에 명시적으로 나타내어 따로 클래스를 만들어도 됩니다.

하지만, static 내부 클래스를 사용하면 다음과 같이 개발할 수 있습니다.

HighSchool.java 에서는

~~~ java
public class HighSchool{
	static class Student{

	}
}
~~~

University.java 에서는

~~~ java
public class University{
	static class Student{

	}
}
~~~

이처럼 겉으로 보기엔 유사하지만, 내부적으로 다르게 구현해야할 때

static 내부 클래스를 사용할 수 있습니다.

<br>
<hr>
<br>

## local inner class(내부 클래스)

<br>

static 내부 클래스와의 차이점은 static으로 선언하지 않는다는 것입니다.

예문을 보겠습니다.

~~~ java
public class OuterOfInner {
    class Inner{
        private int value = 0;

        public int getValue(){
            return value;
        }

        public void setValue(int value){
            this.value = value;
        }
    }
}
~~~

static 내부 클래스와 똑같은데 static만 없습니다.

이제 내부 클래스의 객체를 만들어 사용해보겠습니다.

~~~ java
public class InnerSample {
    public static void main(String[] ar){
        InnerSample ex = new InnerSample();
        ex.makeInnerObject();
    }

    public void makeInnerObject(){
        OuterOfInner outer = new OuterOfInner();
        OuterOfInner.Inner inner = outer.new Inner();
        inner.setValue(77);
        System.out.println("inner.getValue() = " + inner.getValue());
//        inner.getValue() = 77
    }
}
~~~

static 내부 클래스와는 약간 다릅니다.

먼저 외부 클래스의 객체를 만들고, 그 객체를 이용해서

내부 클래스의 객체를 만드는 방식입니다.

<br>

이렇게 내부 클래스를 이용하는 이유는 캡슐화때문입니다.

예를 들어 A라는 클래스가 있습니다.

이 클래스에는 b라는 작업이 자주 쓰이고, 

이 작업은 B라는 클래스를 만들어 놓으면 간편하게 자주 사용할 수 있습니다.

근데 A이외에 다른 클래스에는 b라는 작업이 필요없다던가,

B라는 클래스를 노출시키고 싶지 않을 수 있습니다.

즉, 내부 구현을 감추고 싶을 때 내부 클래스를 사용하면 됩니다.

<br>

내부 클래스는 GUI(Graphic User Interface, 사용자 화면용 애플리케이션)을 개발할 때 많이 사용됩니다.

사용자가 버튼을 클릭하거나 키보드로 입력을 하면 항상 Event가 발생합니다.

(예: 인터넷 브라우저 주소창에 url을 입력하고 엔터를 치면 해당 웹페이지로 이동(Event)합니다.)

그런데 a라는 버튼이 눌렸을 때와 b라는 버튼이 눌렸을 때 발생하는 이벤트는 다릅니다.

이때는 별도의 이벤트용 클래스를 만들어 사용하는 것 보다는 

내부 클래스를 만드는 것이 훨씬 편합니다.

<br>
<hr>
<br>

## Anonymous inner class(익명 클래스)

<br>

내부 클래스와 비슷하지만 이름이 없는 클래스입니다.

버튼을 클릭했을 때 문자열이 프린트되는 예제를 만들어 살펴보겠습니다.

먼저 EventListener라는 인터페이스를 정의합니다.

>EventListener.java
~~~ java
public interface EventListener {
    public void onClick();
}
~~~

그리고, 실제로 사용자가 클릭했을 때 발생할 이벤트가 구현된 MagicButton클래스를 만듭니다.

>MagicButton.java
~~~ java
public class MagicButton {
    private EventListener listener;
    public void setListener(EventListener listener){
        this.listener = listener;
    }
    public void onClickProcess(){
        if(listener != null){
            listener.onClick();
        }
    }
}
~~~

setListener 메소드는 매개변수로 EventListener 객체를 받습니다.

클릭이 이루어지면 setListener에서 어떤 이벤트를 실행시킬지 정한다음

EventListener에 있는 onClick()메소드를 실행시키는 겁니다.

그런데 아직 EventListener 인터페이스가 구현되지 않았습니다.

MagicButtonListener.java에서 구현하겠습니다.

>MagicButtonListener.java
~~~ java
public class MagicButtonListener implements EventListener {
    public void onClick(){
        System.out.println("Magic button clicked!");
    }
}
~~~

이제 클릭이 됬다고 가정했을 때, 이벤트를 발생시키는 클래스를 만들겠습니다.

>AnonymousSample.java
~~~ java
public class AnonymousSample {
    public static void main(String[] ar){
        AnonymousSample ex = new AnonymousSample();
        ex.setButtonListenerWithNoAnonymous();
//        With outer class that implements EventListener
//        Magic button clicked!
        ex.setButtonListenerWithAnonymous();
//        With Anonymous class
//        Magic Button clicked!! with Anonymous class
        ex.setButtonListenerWithObject();
//        With object that implements EventListener
//        Magic button clicked with object
    }
    public void setButtonListenerWithNoAnonymous(){
        System.out.println("With outer class that implements EventListener");
        MagicButton button = new MagicButton();
        MagicButtonListener listener = new MagicButtonListener();
        button.setListener(listener);
        button.onClickProcess();
        System.out.println();
    }
    public void setButtonListenerWithAnonymous(){
        System.out.println("With Anonymous class");
        MagicButton button = new MagicButton();
        button.setListener(new EventListener(){
            public void onClick(){
                System.out.println("Magic Button clicked!! with Anonymous class");
            }
        });
        button.onClickProcess();
        System.out.println();
    }
    public void setButtonListenerWithObject(){
        System.out.println("With object that implements EventListener");
        MagicButton button = new MagicButton();
        EventListener listener = new EventListener(){
            public void onClick(){
                System.out.println("Magic button clicked with object");
            }
        };
        button.setListener(listener);
        button.onClickProcess();
        System.out.println();
    }
}
~~~

여기서 주의깊게 볼 사항은 MagicButton클래스의 setListener()를 실행시키는 부분입니다.

setListener()는 매개변수로 EventListener 객체를 받는데,

3개의 메소드에서 각기 다른 방식으로 EventListener 객체를 넘겨주고 있습니다.

<br>

첫번째 메소드인 setButtonListenerWithNoAnonymous()가 아까 정의했던

MagicButtonListener 클래스의 객체를 만들어서 넘겨주고 있습니다.

지금까지 쭉 해왔던 방법입니다.

<br>

두번째 메소드인 setButtonListenerWithAnonymous()가 **익명 클래스**를 사용하고 있습니다.

button.setListener()에서 소괄호 안에 원래 객체가 들어가야하는데

대신에 그 안에서 아예 EventListener() 객체를 만들고, 동시에 onClick()메소드까지 정의하고 있습니다.

클래스, 객체에 이름이 없습니다.

<br>

세번째 메소드인 setButtonListenerWithObject()에서는

EventListener 객체를 생성함과 동시에 onClick()메소드를 구현하고 있습니다.

그리고 만든 객체를 button.setListener()에 넘기고 있습니다.

<br>

두번째 방법을 사용하면 클래스 이름도, 객체 이름도 없으므로

해당 클래스 내에서 재사용할 수 없습니다.

재사용하고 싶으면 세번째 방법처럼 객체를 만들면 됩니다.

<br>

그렇다면 익명 클래스는 왜 사용할까요?

(뭐든지 존재 이유, 명분이 있어야합니다!)

![img_reason](https://lh3.googleusercontent.com/FkO4-2ImE-DTLp5UqwKpihULI7Xb6W5roP-4w83BAqDtRuJFwz9TvBfM0vPodHeRBmG12yLKjOo6T8e17_aZcNsSK-LDzS8-rQ9IS429OAopxvsrlYX0xriACg0yPFEcZCJ3HeN0D6imB66_6EaJLXO3bpo3yuDzHYnvNxeKp2u_40dl0KqlV_drCI_qkhOLREaeQrLqO9qY862th0PKzIDUTqAIcDsgE2HfhhFyve_XqJUMPh3fnpD_DoJrGK6BseLUJOwCzfNw82eKb4eMXOaJYng4rGA2YgAb8FnDIUC3h5Z_gChWmGAAzNf0IHN-gpVc2ysKG4sorB8XVOgIW0xiIZduev6o5ZpUrxjiG3IteyIkUYy6YfsXbTzdU0FmVO1-aDGrMmqXTEN8v3l80emKJ-PqGWB3kIDQBQod2Le11cP7i1SMFs2_w2L3kKWmkQ28P52zEPwI9Jfe2IVmOgIjKi1eqD2WuKD9rDRu54yV3ugfLpDFPTmOeM3O3h1fZ2wlN3jtM3nGTIXQX1ZyMdpk2Egjm545x6iTKCPs_Rv2qCVFTYN1T9K0vbjQ63cHMrwtJ7ny5cJzUnLdt_S9cixPfKuUXb6W6o2xKheVEQ=w700-h392-no)

<br>

일반 클래스를 만들고, 그 클래스를 호출하면 그 정보는 메모리에 올라갑니다.

즉, 클래스를 많이 만들면 만들수록 많은 메모리가 필요해지고,

애플리케이션을 시작할 때 더 많은 시간이 걸리게 됩니다.

즉, 두번째, 세번째 방법과 같이 별도의 클래스를 정의하지 않으면 로딩시간이 짧아지겠죠

<br>
<hr>
<br>

## Nested 클래스의 변수 접근

<br>

### - Nested 클래스에서 외부 클래스의 변수 접근

<br>

~~~ java
public class NestedValueReference {
    public int publicInt = 7;
    protected int protectedInt = 77;
    int justInt = 777;
    private int privateInt = 7777;
    static int staticInt = 77777;

    static class StaticNested{
        public void setValue(){
            staticInt = 33333;
        }
    }

    class Inner{
        public void setValue(){
            publicInt = 1;
            protectedInt = 11;
            justInt = 111;
            privateInt = 1111;
            staticInt = 11111;
        }
    }

    public void setValue(){
        EventListener listener = new EventListener(){
            public void onClick(){
                publicInt = 3;
                protectedInt = 33;
                justInt = 333;
                privateInt = 3333;
                staticInt = 33333;
            }
        };
    }
}
~~~

static nested 클래스에서는 외부 클래스의 변수 중

static으로 선언된 변수에만 접근할 수 있습니다.

내부 클래스와 익명 클래스에서는 모두 접근가능합니다.

<br>

### - 외부 클래스에서 Nested 클래스의 변수 접근

<br>

~~~ java
public class ReferenceAtNested {
    static class StaticNested{
        private int staticNestedInt = 7;
    }

    class Inner{
        private int NestedInt = 77;
    }

    public void setValue(){
        StaticNested ex1 = new StaticNested();
        ex1.staticNestedInt = 3;

        Inner ex2 = new Inner();
        ex2.NestedInt = 33;
    }
}
~~~

setValue() 메소드에서 확인할 수 있듯이,

static nested클래스든, 내부 클래스든

객체만 생성하면 그 객체를 통해 접근할 수 있습니다.

private으로 선언되 있다 할지라도 접근 가능합니다.

<br>
<hr>
<br>

Nested 클래스를 사용하면 가독성도 높힐 수 있고,

캡슐화도 할 수 있습니다.

하지만 Nested 클래스의 남용은 가독성을 해칠 수도 있습니다.

뭐든지 적정선을 지키는게 중요한 법...

<br>

## 過猶不及