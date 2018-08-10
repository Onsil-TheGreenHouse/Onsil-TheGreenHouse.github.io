---
layout: post
title:  "[Java] Interface와 abstract 클래스"
date:   2017-11-25 13:50:00
description: Interface와 abstract 클래스
categories:
- programming
- java
banner_image: /programming/java/java-logo.jpg
comments: true
---

Interface와 abstract 클래스

---

## interface와 abstract 클래스의 의도

<br>

인터페이스와 추상클래스는 간단히 말하면 본격적인 개발 전에 밑그림을 그리는 것입니다.

<br>

어떤 프로그램을 만들지 정리하는 설계 단계에서는 어떤 클래스, 메소드, 변수를 만들지 정리합니다.

이때 밑그림을 그려두면 개발할 때 메소드나 변수 등의 이름을 고민하지 않고,

오직 개발, 구현에만 집중할 수 있게 됩니다.

<br>

또 이런 상황을 가정해보겠습니다.

어떤 사람이 전자기기를 하나 샀습니다.

보통의 사람들은 이 기기에 어떤어떤 기능이 있고 어떻게 사용하면 되는지 알고싶어서 설명서를 봅니다.

하지만, 그 각각의 기능들이 어떤 원리로 작동하는지까지는 별로 궁금하지 않죠.

<br>

같이 작업하는 개발자들도, 다른 개발자가 만든 클래스의 메소드를 사용하고 싶다면

인터페이스에 있는 밑그림만 보고 어떻게 사용하면 되는지 알 수 있습니다.

굳이 그 메소드가 어떻게 구현되어 있는지까지는 알 필요가 없습니다.

<br>

이런 편의성을 위해 인터페이스와 추상클래스를 사용하게 됩니다.

굳~~이 사용하지 않아도 개발이 가능은 하겠지만, 사용하면 더 편리하겠죠?

(저도 자바 개발은 안해보긴 했습니다...)

<br>
<hr>
<br>

## Interface

<br>

먼저 다음과 같은 ChampionDTO 클래스가 있는 상태입니다.

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

이때 챔피언을 추가하고, 제거하고, 업데이트하는 메소드를 만드려고 기획을 했습니다.

이 때 인터페이스를 다음과 같이 구현할 수 있습니다.

파일명은 ChampionManager.java 로 클래스와 똑같이 하면 됩니다.

~~~ java
public interface ChampionManager {
    public boolean addChampion(ChampionDTO champion);
    public boolean removeChampion(String name, int power);
    public boolean updateChampion(ChampionDTO champion);
}
~~~

class대신에 interface란 단어가 들어갔습니다.

또한 메소드들을 선언만 해놓고 구현하진 않은 상태입니다.(말 그대로 밑그림)

인터페이스에서는 메소드를 중괄호를 열어서 구현하거나 하면 안됩니다.

구현은 다른 클래스에서 진행하게 됩니다.

~~~ java
public class ChampionManagerImpl implements ChampionManager{
    public boolean addChampion(ChampionDTO champion){
        return false;
    }

    public boolean updateChampion(ChampionDTO champion){
        return false;
    }

    public boolean removeChampion(String name, int power){
        return false;
    }
}
~~~

implements 라는 예약어를 통해 만들어놓은 인터페이스를 적용하고,

그 안에 메소드를 구현하면 됩니다. 인터페이스는 extends와는 다르게 여러개를 한번에 적용할 수 있습니다.

(implements ChampionManager, ChampionManager2)

이때 인터페이스안에 선언만 해놓은 메소드들을 ChampionManageImpl 클래스에서 구현하지 않으면 에러가 납니다.

<br>

근데 아까 인터페이스를 쓰는 의도에서,

A라는 개발자가 B라는 개발자가 만든 클래스의 메소드를 사용하고 싶을 때 인터페이스를 보면 된다고 했습니다.

즉, B라는 개발자가 만든 클래스의 객체를 만들때 인터페이스 객체를 만들어 사용합니다.

~~~ java
public class InterfaceExample {
    public static void main(String[] ar){
        ChampionManager champion1 = new ChampionManagerImpl();
    }
}
~~~

이렇게 ChampionManagerImpl()생성자를 ChampionManager 인터페이스 객체에 캐스팅해서 사용합니다.

<br>
<hr>
<br>

## 추상클래스(abstract)

<br>

먼저 추상클래스의 예제를 보겠습니다.

~~~ java
public abstract class ChampionManagerAbstract {
    public abstract boolean addChampion(ChampionDTO champion);
    public abstract boolean removeChampion(ChampionDTO champion);
    public abstract boolean updateChampion(String name, int power);

    public void printLog(String data){
        System.out.println("Data = " + data);
    }
}
~~~

추상클래스에는 abstract으로 선언한 메소드도 있고, 그렇지 않은 메소드(printLog)도 있습니다.

그리고 class앞에 abstract이라는 예약어를 써주게 됩니다.

정리하면

- 추상클래스는 선언시 abstract 예약어가 클래스 앞에 추가된다.
- 추상클래스 안에는 abstract으로 선언된 메소드가 0개 이상 있으면 된다.
- abstract으로 선언된 메소드가 하나라도 있으면, 그 클래스는 반드시 abstract으로 선언되어야 한다.
- 인터페이스와 다르게 구현된 메소드가 있어도 된다.

<br>

추상클래스는 말그대로 **클래스**이기 때문에

abstract메소드를 구현할 클래스는 추상클래스를 상속(extends)받아야 합니다.

~~~ java
public class ChampionManagerImpl2 extends ChampionManagerAbstract{
    public boolean addChampion(ChampionDTO champion){
        return false;
    }

    public boolean removeChampion(ChampionDTO champion){
        return false;
    }

    public boolean updateChampion(String name, int power){
        return false;
    }
}
~~~

abstract 메소드를 구현하지 않으면 에러가 납니다.

<br>

그럼 왜 인터페이스와 추상클래스를 구분해서 만들어 놓았을까요?

인터페이스를 만들다 보면, 어떤 메소드는 미리 만들어 놓아도 좋은 경우가 생깁니다.

특히 아주 공통적인 기능을 미리 구현해놓으면 좋은 경우가 있는데, 이때 추상클래스를 사용합니다.

<br>
<hr>
<br>

## 인터페이스, 추상클래스 비교 정리

<br>


🚸 | 인터페이스 | 추상클래스 | 클래스
:---:|:---:|:---:|:---:
선언 예약어 | interface | abstract class | class
미구현 메소드 포함 가능 여부 | O(필수) | O | X
구현 메소드 포함 가능 여부 | X | O | O(필수)
static 메소드 선언 가능 여부 | X | O | O
final 메소드 선언 가능 여부 | X | O | O
상속(extends) 가능 여부 | X | O | O
구현(implements) 가능 여부 | O | X | X
