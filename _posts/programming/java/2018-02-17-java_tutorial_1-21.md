---
layout: post
title:  "[Java] 제네릭(Generic)"
date:   2018-02-17 21:50:00
description: 제네릭(Generic)
categories:
- programming
- java
banner_image: /programming/java/java-logo.jpg
comments: true
---

제네릭(Generic)

---

## 제네릭(Generic)

<br>

generic의 뜻을 찾아보면 '포괄적인, 총칭의, 이름이 붙지않은'입니다.

자바에서의 Generic이 뭔지 대~~~충 설명하자면

예를 들어 String 값을 리턴해주는 메소드가 있다고 가정하겠습니다.

~~~ java
public String getValue(){
	return value;
}
~~~

근데 value의 값이 Integer일수도 있고 Boolean일수도 있고 String일수도 있고...

이런 상황이라면 Generic을 사용해 이렇게도 가능합니다.

~~~ java
public T getValue(){
	return value;
}
~~~

T가 각종 자료형이 될 수 있는 거죠.

물론 저렇게만 쓰면 안되고 클래스에 뭔가를 선언해줘야합니다.

좀 더 자세히 알아보겠습니다.

<br>
<hr>
<br>

## 명분쌓기

<br>

항상 모든 일에는 명분이 있어야합니다. 그게 억지든 뭐든 간에...

내가 이걸 왜 배워야하는가!

![MyeongBoon](https://lh3.googleusercontent.com/GXHlbAf4pDuLZtu8w0hNlkMii20QqWdG4BDE35xJIkkZ9tP3kv-MBmpfphQose3huuB4y7jRc26iCTSH7OuKFY3ONYGY8f_3i2qXOImdh7_UPYXacSuCZ6a8KXnnRqxQZifHhc4Sc1XW8lzkZZ0Xe-teu2Jw2XTD6dZhoHAQCv0ndCyY3wszCfdCgdyEj0cRe3_kcmVx1BcmnjuKPsbMKKw6a30Vf_3Qdl7YWEwTCZ-BMXGaLZar0GL3kWcHY8D5n0YnDW4Ax-UzcQT4h6QVB_TPMIEHAkqLtgZ1cUFVq7SztCy8ihNoVlSlHwCRIvLOD08shyAztS3r8oXemTDiynGpa-GM24W8nHVyfJTX_AMbFkrJkQSICO01DQovx7YrSxrLeCFQFT8ujJegAp7XXl6QcFOItB56yrPGSn1gY4ThNILBhtYNiuD8YLcAD8JptYShnZkeB1zjGQuOtQMk28d6quGX0j6Vw2JrJUeqhiCSqh83L2OpBBPNaFttpU4EnAh9M08v_REky7p-IGrNmFwlywcd4xeS6pkeviLKuMI50g-8AsUBKGR5G-BtW0RiBEyL7vrzlNTvi-9RSUlJHi-H9BAZJYth_lcHhPg=w855-h480-no)

다음과 같이 코드가 있다고 가정하겠습니다.

~~~ java
import java.io.Serializable;

public class CastingDTO {
    private Object object;

    public void setObject(Object object){
        this.object = object;
    }

    public Object getObject(){
        return object;
    }
}
~~~

그리고 이 CastingDTO를 사용하는 GenericSample.java 를 만듭니다.

~~~ java
public class GenericSample {
    public static void main(String[] ar){
        GenericSample ex = new GenericSample();
        ex.checkCastingDTO();
    }

    public void checkCastingDTO(){
        CastingDTO dto1 = new CastingDTO();
        dto1.setObject(new String());
        
        CastingDTO dto2 = new CastingDTO();
        dto2.setObject(new StringBuffer());
        
        CastingDTO dto3 = new CastingDTO();
        dto3.setObject(new StringBuilder());
        // hundreds of lines later
        // hundreds of lines later
        // hundreds of lines later
        String temp1 = (String)dto1.getObject();
        StringBuffer temp2 = (StringBuffer)dto2.getObject();
        StringBuilder temp3 = (StringBuilder)dto3.getObject();
    }

    public void checkDTO(CastingDTO dto){
        Object tempObject = dto.getObject();
        if(tempObject instanceof String){
            System.out.println("String dto");
        }else if(tempObject instanceof StringBuffer){
            System.out.println("StringBuffer dto");
        }else if(tempObject instanceof StringBuilder){
            System.out.println("StringBuilder dto");
        }
    }
}
~~~

dto1, dto2, dto3 객체가 setObject()를 이용하여

object 값을 설정하고 있습니다.

참고로 Object 클래스는 모든 다른 클래스들의 부모 클래스 이므로

String(), StringBuffer(), StringBuilder() 등을 대입할 수 있습니다.

<br>

그런데 수많은 코드 다음에 temp1, temp2, temp3에 다시 dto1, dto2, dto3를 대입하고 있습니다.

이때는 Object 객체 -> String, StringBuffer, StringBuilder이기 때문에

캐스팅을 적어줘야합니다.

안적어주면 다음과 같이 예외가 발생합니다.

![Casting_Exception](https://lh3.googleusercontent.com/oVTThIlb2j92vAe_jLDngV7UxsmMDRrFx9PErZ-et0bPCh-phjmDf0k7Bc2SoCUobUI7ztyEcCuF1c7A9Se64DBTenOyGiAcF_lKuSDoTS3AAWvJ1hnP0go3Q-P-J23xUgkYq9Zy7oZJD7RjkvPBkVvEvkPpqEFW1Chzpxh7mdy7Xf8mnmGoMh8_SqjDIV83FaJopIeTCwtQyZbd5WOLQDrZrc9lEMZ7XkjevHDbfI1Kx92Yf8f0DKGzoTKCBEPEBgd11zhRseIKvhxZzOe34wuBnqEE0-Hj0q958p0c9AP9GmwuR4tUrRSmAMv-YNkP39zQ3t7kZ41Ggibbrn-siLjVXkd4EYYt15ySycDDx5KlMIusJIQeIdgvu1eXSAdKFpxUX2iyRWh42taiPvAnKFed8wLpeZyUq28SDsMdXkEaFHFNaarPVQHzyEfhiRYrSwdu0Iz3m5aBuEVFYBqaMIZqdLPFNwbYUIdGvblYt6r1gJI0AcK0z-3I1NVUy2PPQg2Oxs-s9l7pG2-12mOyRPwY_BEMds1o3PdygOXoRbQagMajDSS7bfH7wg_lqxWd6T-oBqDc36zePXB5u57-4AHqcmMkNtNe1OwBY1k=w526-h547-no)

지금은 객체가 3개니까 그럴싸하지만 수십, 수백개로 늘어난다면?

적어줘야할 코드가 엄청나게 많아질 것입니다.

<br>

또 만약에 dto2가 StringBuffer인지 StringBuilder인지 헷갈린다면?

물론 checkDTO()메소드와 같이 판별해주는 메소드를 만들어 사용해도 됩니다.

그런데 사용하는 클래스 종류가 수십, 수백가지라면??

엄청나게 혼잡한 머리속과 코드가 될 것입니다.

그리고 혹여나 잘못 캐스팅을 해준다면?

예를 들어 dto2.object는 StringBuffer 객체인데

StringBuilder temp2 = (StringBuilder)dto2.getObject();

라고 적었다면, 컴파일에서는 예외가 발견이 안되고 실행시 발견이 됩니다.(Runtime Exception)

<br>

이제 이 난관을 Generic을 써서 헤쳐나가는 걸 알아보겠습니다.

새로운 CastingGenericDTO.java 를 만들어 봅니다.

~~~ java
import java.io.Serializable;

public class CastingGenericDTO<T> implements Serializable {
    private T object;

    public void setObject(T obj){
        this.object = obj;
    }

    public T getObject(){
        return object;
    }
}
~~~

아까 CastingDTO와 차이점을 비교해보면

클래스를 선언할 때 클래스명 다음에 ❮T❯가 붙었습니다.

또한 타입명을 적는 곳에도 Object 대신에 T가 적혀져 있습니다.

<br>

이제 GenericSample2.java 를 만들어 CastingGenericDTO를 사용해보겠습니다.

~~~ java
public class GenericSample2 {
    public static void main(String[] ar){
        GenericSample2 ex = new GenericSample2();
        ex.checkGenericDTO();
    }

    public void checkGenericDTO(){
        CastingGenericDTO<String> dto1 = new CastingGenericDTO<String>();
        dto1.setObject(new String());
        CastingGenericDTO<StringBuffer> dto2 = new CastingGenericDTO<StringBuffer>();
        dto2.setObject(new StringBuffer());
        CastingGenericDTO<StringBuilder> dto3 = new CastingGenericDTO<StringBuilder>();
        dto3.setObject(new StringBuilder());

        String temp1 = dto1.getObject();
        StringBuffer temp2 = dto2.getObject();
        StringBuilder temp3 = dto3.getObject();
    }
}
~~~

checkGenericDTO() 메소드에서 CastingGenericDTO의 객체를 만들어 사용하고 있습니다.

객체 만드는 부분을 자세히 살펴보면 ❮T❯에서 T대신에 자료형을 적어주고 있습니다.

이런 형식으로 객체를 만들어주면 다양한 자료형의 DTO를 만들 수 있습니다.

예를 들어 <String>으로 객체를 생성했다면 실제로 우리가 사용한 클래스의 형태는 다음과 같을 것입니다.

~~~ java
import java.io.Serializable;

public class CastingGenericDTO implements Serializable {
    private String object;

    public void setObject(String obj){
        this.object = obj;
    }

    public String getObject(){
        return object;
    }
}
~~~

그 다음 temp1, temp2, temp3 객체에 dto1, dto2, dto3을 넣어주고 있는데요,

제네릭 타입을 쓰니 캐스팅을 안해줘도 됩니다.

객체 생성시 타입을 선언해줬기 때문에 캐스팅이 아니고, 그냥 해당 타입에 넣어주는 식이 됩니다.

dto2가 StringBuffer였는지 StringBuilder였는지 헷갈려도 됩니다.

어차피 컴파일 단계에서 예외처리가 되기 때문입니다.

![casting_exception2](https://lh3.googleusercontent.com/4q04pq_XEk0kwm0afpkTAwBjyx_fVSOFgmp6ap-2oqb6NNLmkJQ9Y1ajtLqX0puj4ih5ywhYFaP_HtOYgc1ZFtK1IV5LL856QnsHjLxeFS-yIfDZfV9ABRtMZYd9EGXy--t9JCMTMH48i4OyIRI-ZjXZMH1Xu4ktFg9H7JHfYZcIuSycIU1WJWUVg3nDVZb4BWpXG0hC5iFpP87jjx3RTRh3PT7okHkObxARWX8j1bqYbMLMIMcyu7EEjArub2uC1DAa9GvMTl_EKpzxI-64d3Uh2rT2mtQwk3GZrFzkPun4xmPQCWUeRAMMs6okvPKoGO2JQ4H1cR4iOY1EeVF4MEySFI6NHVJvF-C1HOeI--N6dJCDbJr5HK2kWL18GIvmwNi1IK6hnuwHteJHEsSfV1g0m2n0V4WyZCHho7NG42ocrWXauV30EEMG-ZR8KZaJ2xUCOuo5U0Zi_mRYFCHLkX798f4H08niFiIJgDnNxbcb2qh4unEq_APU_WzsY8qWYGvXOliSqR30kLPYeC2yZy3PBl4AetPqupc8Vv-1--Z4wsPtX_lKZPrvwnyThcPr2FvtlY7reLKA6odz0nliFJmxo43QJWeqXi5WRiM=w625-h354-no)

<br>
<hr>
<br>

## 제네릭 타입의 이름

<br>

아까 예제 코드에서는 ❮T❯ 라고 T를 적었지만, 사실 아무 문자열이나 적어도 됩니다.

T대신에 ASDF라고 적어도 예외가 발생하지 않습니다.(그래도 ASDF는 너무 대충이죠...)

하지만 자바를 아는 그 어떤 이가 코드를 봐도 한눈에 이해가 가게 하려면

지켜야하는 규칙이 있습니다.

>E: 요소(Element)<br>
K: 키(Key)<br>
N: 숫자(Number)<br>
T: 타입(Type)<br>
V: 값(Value)<br>
S, U, V: 두번째, 세번째, 네번째에 선언된 타입

별로 어려운 영어도 아니니 지켜서 쓰면 되겠습니다.

<br>
<hr>
<br>

## <?>(wildcard type)

<br>

예를 들어 다음과 같은 WildCardGeneric.java 라는 파일이 있다고 가정하겠습니다.

~~~ java
public class WildCardGeneric<W> {
    W wildCard;

    public void setWildCard(W wildCard){
        this.wildCard = wildCard;
    }

    public W getWildCard(){
        return wildCard;
    }
}
~~~

그리고 이 WildCardGeneric 클래스를 사용하는 WildCardSample.java 라는 파일을 만듭니다.

~~~ java
public class WildCardSample {
    public static void main(String[] ar){
        WildCardSample ex = new WildCardSample();
        ex.callWildCardMethod();
    }

    public void callWildCardMethod(){
        WildCardGeneric<String> wildcard = new WildCardGeneric<String>();
        wildcard.setWildCard("A");
        wildcardStringMethod(wildcard);
        // A

        WildCardGeneric<Integer> wildcard2 = new WildCardGeneric<Integer>();
        wildcard2.setWildCard(777);
        wildcardStringMethod2(wildcard2);
        // 777

        wildcardStringMethod2(wildcard);
        // A
    }

    public void wildcardStringMethod(WildCardGeneric<String> c){
        String value = c.getWildCard();
        System.out.println(value);
    }

    public void wildcardStringMethod2(WildCardGeneric<?> c){
        Object value = c.getWildCard();
        System.out.println(value);
    }
}
~~~

일단 callWildCardMethod()를 보면

앞서 만들었던 WildCardGeneric 클래스를 String 타입으로 객체를 만들었습니다.

그리고 wildcardStringMethod()메소드를 불러서 해당 객체의 wildCard값을 출력하고 있습니다.

<br>

그런데 wildcard2와 같이 Integer타입의 WildCardGeneric 객체는 

String 타입의 WildCardGeneric 클래스 객체를 매개변수로 받는 wildcardStringMethod()에는 사용할 수 없습니다.

그러면 wildcard2의 wildCard값을 출력하기 위해선 또 다른 메소드를 만들어야 할까요?

이렇게 매번 타입이 달라질 때마다 메소드를 따로 만들어주는건 비효율적으로 보입니다.

<br>

이럴 때 사용하는게 wildcardStringMethod2() 메소드에서 쓴 것과 같은 

wildcard 타입입니다. 여기서는 매개변수에 WildCardGeneric 클래스의 타입으로

❮?❯ 라고 썻습니다. 이 ?에는 어떤 타입도 들어갈 수 있습니다.

대신 어떤 타입인지 모르기 때문에 값을 받을 때는 모든 클래스의 부모인 Object 클래스로 받아야 합니다.

코드를 보면 WildCardGeneric❮?❯에 wildcard와 wildcard2 모두 들어갈 수 있는 걸 볼 수 있습니다.

만약 넘어오는 타입이 두세가지로 정해져있다면 광범위한 Object 클래스를 쓰기보다는

instanceof 예약어를 사용하여 타입 판별 후 사용하면 됩니다.

<br>

이러한 wildcard는 매개변수로만 사용하는 것이 좋습니다.

예를 들어

WildCardGeneric❮?❯ wildcard = new WildCardGeneric❮String❯();

과 같이 사용하면 예외가 발생합니다.

<br>
<hr>
<br>

## 제네릭 선언에 사용하는 타입의 범위 설정

<br>

아까 wildcard인 <?> 에는 어떤 타입도 들어갈 수 있다고 했습니다.

<?>는 <? extends Object>라고 생각할 수 있습니다.

<? extends Object>의 의미는 

'Object 클래스를 상속받는 모든 클래스를 타입으로 사용할 수 있다'

입니다.

Object클래스는 모든 클래스의 부모이므로 모든 타입이 들어갈 수 있었습니다.

즉, 예를 들어 <? extends A> 라고 적으면

A 클래스를 상속받는 클래스만 타입으로 사용할 수 있고,

이런 방식으로 타입의 범위를 설정할 수 있습니다.

예제 코드로 살펴보겠습니다.

<br>

Car.java 가 있습니다.

~~~ java
public class Car {
    protected String name;

    public Car(String name){
        this.name = name;
    }
    public String toString(){
        return "Car name = " + name;
    }
}
~~~

버스는 차의 한 종류죠.

Car를 상속받는 Bus.java 가 있습니다.

~~~ java
public class Bus extends Car {
    public Bus(String name){
        super(name);
    }

    public String toString(){
        return "Bus name = " + name;
    }
}
~~~

아까 이용했던 WildCardGeneric.java를 다시 사용합니다.
~~~ java
public class WildCardGeneric<W> {
    W wildCard;

    public void setWildCard(W wildCard){
        this.wildCard = wildCard;
    }

    public W getWildCard(){
        return wildCard;
    }
}
~~~

이제 WildCardGeneric 클래스의 Car 타입, Bus 타입 객체를 만들어

객체 값을 출력하는 CarWildcardSample.java 를 만들어줍니다.

~~~ java
public class CarWildcardSample {
    public static void main(String[] ar){
        CarWildcardSample ex = new CarWildcardSample();
        ex.callBoundedWildcardMethod();
        ex.callBusBoundedWildcardMethod();
    }

    public void callBoundedWildcardMethod(){
        WildCardGeneric<Car> wildcard = new WildCardGeneric<Car>();
        wildcard.setWildCard(new Car("Mustang"));
        boundedWildcardMethod(wildcard);
        // Car name = Mustang
    }

    public void boundedWildcardMethod(WildCardGeneric<? extends Car> c){
        Car value = c.getWildCard();
        System.out.println(value);
    }

    public void callBusBoundedWildcardMethod(){
        WildCardGeneric<Bus> wildcard = new WildCardGeneric<Bus>();
        wildcard.setWildCard(new Bus("7777"));
        boundedWildcardMethod(wildcard);
        // Bus name = 7777
    }
}
~~~

boundedWildcardMethod()의 매개변수를 보면

<? extends Car>로 되어있어, ?가 가능한 타입은

Car클래스와 Bus클래스가 됩니다.

<br>

callBoundedWildcardMethod()와 allBusBoundedWildcardMethod()에서

각각 Car타입 Bus타입의 WildCardGeneric 객체를

boundedWildcardMethod()에 넘겨주어 값을 출력하고 있습니다.

<br>
<hr>
<br>

## 메소드를 제네릭하게 선언하기

<br>

지금까지 알아본 내용에서는 매개변수로 넘겨진 객체는 이미 값이 정해져있는 상태였습니다.

예를 들어 바로 위의 예제 코드에서는

WildCardGeneric❮Car❯ wildcard = new WildCardGeneric❮Car❯();<br>
wildcard.setWildCard(new Car("Mustang"));<br>
boundedWildcardMethod(wildcard);

과 같이 값("Mustang")을 정해준 뒤, 

다른 메소드에 매개변수로 wildcard 객체를 넘겼습니다.

그럼 매개변수로 사용된 객체에 값을 추가하려면 어떡해야 할까요?

바로 메소드를 제네릭하게 선언하면 됩니다.

예를 들어 설명하겠습니다.

GenericWildcardSample.java 입니다.

~~~ java
public class GenericWildcardSample {
    public static void main(String[] ar){
        GenericWildcardSample ex = new GenericWildcardSample();
        ex.callGenericMethod();
    }

    public <T> void genericMethod(WildCardGeneric<T> c, T addValue){
        c.setWildCard(addValue);
        T value = c.getWildCard();
        System.out.println(value);
        // Teemo
    }

    public void callGenericMethod(){
        WildCardGeneric<String> wildcard = new WildCardGeneric<String>();
        genericMethod(wildcard, "Teemo");
    }
}
~~~

genericMethod()의 선언부를 보면 ❮T❯를 써서 제네릭하게 메소드를 선언했습니다.

그리고 매개변수를 보면 T타입의 addValue객체도 받고 있습니다.

그리고 메소드 안에서 c의 값을 addValue로 정해주고 있습니다.

<br>

여기서 T 또한 범위를 설정해줄 수 있습니다.

public ❮T extends Car❯ void genericMethod(WildCardGeneric❮T❯ c, T addValue)

같이 적어주면 됩니다.

<br>

한 메소드에서 두개 이상의 제네릭 타입을 매개변수로 받을 때는 ,(쉼표)로 구분해주면 됩니다.

public <S, T extends Car> void genericMethod(WildCard Generic❮?❯ c, T addValue1, S addValue2)
