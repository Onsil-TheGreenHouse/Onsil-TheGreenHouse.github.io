---
layout: post
title:  "[Java] final"
date:   2017-11-25 13:50:00
description: final
categories:
- programming
- java
banner_image: /programming/java/java-logo.jpg
comments: true
---

final

---

## final

<br>

클래스, 메소드, 변수에 선언할 수 있는 예약어입니다.

final의 의미(마지막) 그대로, **더이상 변경불가**의 의미입니다.

<br>
<hr>
<br>

### final 클래스

<br>

다음과 같은 final 클래스가 있습니다.

~~~ java
public final class FinalClass{

}
~~~

이때 FinalClass를 상속받는 FinalChildClass가 아래와 같이 있다면

~~~ java
public class FinalChildClass extends FinalClass{

}
~~~

컴파일시 오류가 뜹니다.

<br>

이유는 final클래스는 상속받을 수 없기 때문입니다.

클래스를 상속받으면 오버라이딩을 통해서 변수나 메소드를 변경할 수 있겠죠.

변경 가능성을 원천 봉쇄하기위해 상속조차 막아버립니다.

<br>
<hr>
<br>

### final 메소드

<br>

다음과 같이 final메소드가 있는 클래스가 있습니다.

~~~ java
public class FinalMethodClass{
	public final void printTeemo(){
		System.out.println("teemo");
	}
}
~~~

이 클래스를 상속받아 printTeemo()메소드를 오버라이딩하는 클래스가 아래와 같이 있다면

~~~ java
public class FinalMethodChildClass extends FinalMethodClass{
	public void printTeemo(){
		System.out.println("Super Teemo!");
	}
}
~~~

컴파일시 에러가 납니다.

final메소드이기 때문입니다.

이렇게 final로 선언해놓으면 다른 개발자가 오버라이딩해 변경해 쓰기가 불가능할 것입니다.

<br>
<hr>
<br>

### final 변수(기본 자료형)

<br>

다음과 같이 final변수가 있습니다.

~~~ java
public class FinalVar{
	//final int var1;
	final int var2 = 1;
}
~~~

var1처럼 선언하면 에러가 납니다.

즉, 인스턴스 변수나 클래스 변수에 final을 붙이려면 생성과 동시에 초기화를 시켜줘야합니다.

<br>

하지만 매개변수나 지역변수는 생성할 때 초기화를 시킬 필요는 없습니다.

~~~ java
public class FinalVar{
	final int var1 = 1;

	public void method(final int parameter){
		final int localVar;
	}
}
~~~

즉, 위의 코드는 에러가 나지 않습니다.

하지만 다음은 에러가 납니다.

~~~ java
public class FinalVar{
	final int var1 = 1;

	public void method(final int parameter){
		final int localVar;
		localVar = 2;
		localVar = 3;
		parameter = 4;
	}
}
~~~

에러가 나는 곳은 localVar = 3; 과 parameter = 4; 부분입니다.

둘다 이미 한번 초기화 된 곳인데 다시 값을 할당하려 하기 때문에 에러가 납니다.

<br>
<hr>
<br>

### final 변수(참조 자료형)

<br>

참조 자료형도 final로 선언되었으면 값을 두번 할당할 수 없습니다.

예로 다음과 같은 DTO클래스가 있다고 가정하겠습니다.

~~~ java
public class ChampionDTO {
    public String name;
    public int power;
    public int defense;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ChampionDTO that = (ChampionDTO) o;

        if (power != that.power) return false;
        if (defense != that.defense) return false;
        return name != null ? name.equals(that.name) : that.name == null;
    }

    @Override
    public String toString() {
        return "ChampionDTO{" +
                "name='" + name + '\'' +
                ", power=" + power +
                ", defense=" + defense +
                '}';
    }

    @Override
    public int hashCode() {
        int result = name != null ? name.hashCode() : 0;
        result = 31 * result + power;
        result = 31 * result + defense;
        return result;
    }

    public static void main(String[] ar){

    }
}
~~~

그리고 final로 객체를 만듭니다.

~~~ java
public class FinalReferenceType {
    final ChampionDTO dto = new ChampionDTO();

    public static void main(String[] ar){
		//dto = new ChampionDTO(); 이러면 에러!

        FinalReferenceType ex = new FinalReferenceType();
        ex.checkDTO();
//        dto = ChampionDTO{name='null', power=0, defense=0}
//        dto = ChampionDTO{name='teemo', power=0, defense=0}
    }

    public void checkDTO(){
        System.out.println("dto = " + dto);
        dto.name = "teemo";
        System.out.println("dto = " + dto);
    }
}
~~~

final 객체인 dto를 dto = new ChampionDTO();와 같이 재정의하면 에러가 납니다.

하지만 final 객체의 name값을 바꿨을 때는 아무 에러도 안나고 주석처럼 결과가 나오는 걸 볼 수 있습니다.

그 이유는 dto가 final객체이긴 해도 그 안에 선언된 name이란 변수는 final이 아니기 때문입니다.

