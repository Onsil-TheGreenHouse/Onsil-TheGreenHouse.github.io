---
layout: post
title:  "[Java] 쓰레드(Thread)"
date:   2018-05-23 04:00:00
description: 쓰레드(Thread)
categories:
- programming
- java
banner_image: /programming/java/java-logo.jpg
comments: true
---

쓰레드(Thread)

---

## <span style="color: blue">쓰레드(Thread)?</span>

<br>

혹시 ThreadRipper란 이름을 들어본적이 있나요?

AMD사에서 출시하는 고급 CPU인데, 

괴물같은 성능으로 유명한 제품입니다. (2018. 5. 기준)

![Threadripper](https://lh3.googleusercontent.com/S5mVppPVud3SpLl2s3-xU0YmnMxGmVZ6dla3xQznpo5a7Vaq6lgtoKk859-SeOCED2k6_Tzam9Q5dgVb40GFrXcpjEsnsHzorxuQjV_fvZ64kVgEjsCZ8TqAAy0Nf-msqHqiPqp3_GUPjvEY955reGVBJZM6x-LgW_4CPOQLTaN3bvQgm-NpyhFHbkNHPXhpeqQD9G4UnGjVHCyh39JRQm7wcTngV6SUszLDcH6kgKa7_MUfx3LxMwjNiKs9y8BJREqqA64ygV91VUxz-v-gtJxOFrykbkDnRAgVCqOKtzVbgpXlY8yQ1LBdxwxojjy582-fK8bO00s8REgN27vv43htdkuSKLO20a6zWKvGYZY994dW_1pmh-HQ5OPCAh5Hq5JKsoMdpnmLidSS1-jpZeurwrvUhzzsHt4NZJ2aAFggPwy0jvgS9xVJmt1AEwamp7F3tmQewcusgSA-gvRuERi4HBTlMu9RJr-Zcc42rWJ_1snmMZQDbkXaT6ckKMtKqYcOns-vofhHnKlZde2SZ76pceQtOjWGTp74Y23aKcOLro-ABwaliegBi5Fy5HEaWlV7zOlPRdR81YwLjGAawWDO3LO_aXCMTTpNlqg=s500-no)

가격도 100만원이 넘어갑니다.

그럼 이 괴물같은 제품에 이름은 왜 ThreadRipper일까요?

일단 Rip 이란 단어를 검색해보면 '(거칠게)찢다', '(거칠게)떼어 내다'라고 나옵니다.

뭔가 상남자 느낌이 나는 단어입니다. 해석해보면 Thread를 찢어버리는 제품??

말을 다듬어 보면 여러 쓰레드를 나눠서 처리하는 제품이라는 말입니다.

<br>

쓰레드(Thread)는 CPU에서 작업을 수행하는 가장 작은 단위입니다.

프로그램 하나를 실행시키면 하나 이상의 쓰레드가 실행됩니다.

예를 들어 'Hello, World!' 라는 자바 프로그램을 실행시키면,

문자열을 출력하는 쓰레드가 실행됩니다.

하지만 실제로는 다른 쓰레드도 같이 실행이 됩니다.

예를 들어 메모리 작업을 해주는 GC(Garbage Collection)관련 쓰레드가 있습니다.

<br>

다른 예를 들어보겠습니다.

두가지 연산을 수행하는 상황을 가정해보겠습니다.

하나는 1부터 50까지 합을 구하는 연산입니다.

다른 하나는 1부터 10까지의 곱을 구하는 연산입니다.

지금까지 공부한 자바 지식으로 다음과 같이 간단하게 프로그램을 작성할 수 있습니다.

~~~ java
public class Ex1 {
    public static void main(String[] ar){
        int calc1 = 1;
        int calc2 = 1;

        for(int i=2; i<=50; i++) calc1 += i;
        for(int i=2; i<=10; i++) calc2 *= i;

        System.out.println("calc1 = " + calc1);
        System.out.println("calc2 = " + calc2);
    }
}
~~~

<br>

프로그램이 실행되는 과정을 살펴보면,

먼저 calc1을 계산한 후, calc2를 계산합니다.

그런데 연산1과 연산2는 독립적인 관계입니다.

아무 관계가 없는 두 연산을 굳이 이렇게 순서대로 할 필요가 없습니다.

두 연산을 한꺼번에 해도 상관없다는 뜻입니다.

앞으로 살펴볼 쓰레드를 통해서 두 연산을 동시해 진행해 보면

~~~ java
class C1 extends Thread{
    public void run(){
        int result = 1;
        for(int i=2; i<=50; i++) result += i;
        System.out.println("calc1 = " + result);
    }
}

class C2 extends Thread{
    public void run(){
        int result = 1;
        for(int i=2; i<=10; i++) result *= i;
        System.out.println("calc2 = " + result);
    }
}

public class Ex3 {
    public static void main(String[] ar){
        C1 c1 = new C1();
        C2 c2 = new C2();

        c1.start();
        c2.start();
    }
}
~~~

c1과 c2라는 쓰레드 객체를 만들어서 동시에 실행시키는 모습입니다.

c1.start()로 c1을 먼저 실행했지만,

아마 출력 결과는 calc2가 먼저 나올 것입니다.

왜냐면 c1과 c2 연산이 동시에 실행되는데,

c2는 i가 10까지밖에 안가므로 더 빨리 끝나기 때문입니다.

<br>

지금은 이렇게 생각할 수 있습니다.

'어차피 쓰레드를 쓰든 안쓰든 순식간에 끝나는데 코드만 더 길어지고 별로네'

하지만 이렇게 예를 든것은 매우 간단한 것이고,

만약 두개의 연산이 1시간씩 걸린다면,

쓰레드를 안쓰면 1번 연산을 끝내고 2번 연산을 수행하므로 2시간이 걸릴 것이고,

쓰레드를 쓰면 1번 연산과 2번 연산을 동시에 수행하므로 1시간이 걸릴 것입니다.

<br>
<hr>
<br>

## <span style="color: blue">쓰레드 생성<br>(Runnable 인터페이스와 Thread 클래스)</span>

<br>

쓰레드를 생성하는 방법은 두가지가 있습니다.

하나는 Runnable 인터페이스를 사용하는 것이고,

다른 하나는 Thread 클래스를 사용하는 것입니다.

Thread 클래스가 Runnable 클래스를 구현한 것이므로 별 차이는 없습니다.

<br>

둘다 java.lang 패키지에 있으므로 별도의 import가 필요없습니다.

그리고 Runnable 인터페이스에는 구현할 메소드가 run()밖에 존재하지 않습니다.

즉, run()메소드만 구현하면 되는 것입니다. 그럼 예제를 살펴보겠습니다.

~~~ java
class UseRunnable implements Runnable{
    public void run(){
        System.out.println("UseRunnable run() method.");
    }
}

class UseThread extends Thread{
    public void run(){
        System.out.println("UseThread run() method.");
    }
}

public class ThreadSample {
    public static void main(String[] ar){
        UseRunnable t1 = new UseRunnable();
        UseThread t2 = new UseThread();

        new Thread(t1).start();
        t2.start();

        System.out.println("ThreadSample program end");
    }
}
~~~

코드 설명을 시작하겠습니다.

먼저 실제로 실행되는 부분은 run()메소드란 점입니다.

그리고 이 부분을 실행시키는 메소드는 start()입니다.

<br>

그리고 Runnable을 구현해서 만든 쓰레드는 바로 실행할 수 없습니다.

new Thread(t1)처럼 Thread클래스의 생성자를 통해 객체를 만들어 사용해야합니다.

언뜻봐도 Runnable을 사용하는게 Thread클래스 사용하는 것보다 번거로워보입니다.

그럼 Runnable을 이용한 방법은 언제 사용할까요?

예를 들어 A, B 클래스가 있습니다.

B클래스는 A클래스를 상속받아야하는 상황입니다.

그런데 A클래스는 Thread를 상속받지 않았고, B는 쓰레드를 구현해야합니다.

하지만 클래스는 하나의 클래스만 상속받을 수 있고,

B는 A를 상속받아야 하므로 Thread 클래스는 상속받지 못합니다.

이 때 Runnable 인터페이스를 구현하여 사용할 수 있습니다.

인터페이스는 여러개를 구현해도 되기 때문입니다.

<br>

그런데 위의 코드를 여러번 실행시켜보면

아마 출력 순서가 뒤죽박죽일 것입니다.

쓰레드를 start() 메소드를 통해 시작했다는 것은,

하나의 쓰레드를 JVM에 추가하여 실행한다는 것입니다.

new Thread(t1).start()로 t1쓰레드가 JVM에 추가되고,

t2.start()를 통해 t2쓰레드가 JVM에 추가됩니다.

사실 t1이 t2보다 먼저 JVM에 들어갔지만, 미세한 차이이고,

두 쓰레드가 함께 실행되고, 같은 연산을 실행한다해도

CPU상태에 따라 실행시간에 또 미세한 차이가 있을 수 있습니다.

거기다 t1, t2는 ThreadSample 프로그램과 별개로 진행되므로,

t1, t2가 진행중이면서 그 밑에 코드인

System.out.println("ThreadSample program end");

가 실행됩니다. 이때문에 결과는 뒤죽박죽이 됩니다.

뒤죽박죽의 다른 예를 보겠습니다.

~~~ java
class UseThread1 extends Thread{
    public void run(){
        System.out.println("UseThread1 run() method");
    }
}

class UseRunnable1 implements Runnable{
    public void run(){
        System.out.println("UseRunnable1 run() method");
    }
}

public class RunMultiThread {
    public static void main(String[] ar){
        UseRunnable1[] r = new UseRunnable1[5];
        UseThread1[] t = new UseThread1[5];

        for(int i=0; i<5; i++){
            r[i] = new UseRunnable1();
            t[i] = new UseThread1();

            new Thread(r[i]).start();
            t[i].start();
        }

        System.out.println("RunMultiThread program end");
    }
}
~~~

위 코드를 여러번 실행시켜봐도

완전 뒤죽박죽의 결과값을 볼 수 있을 것입니다.

<br>
<hr>
<br>

## <span style="color: blue">Thread 클래스의 생성자</span>

<br>

java api에서 Thread 클래스의 생성자를 살펴보면

다음과 같이 8개의 생성자가 있습니다.

![Thread_Constructor](https://lh3.googleusercontent.com/iiUBVpGYJENyntu2d96KTvM52i1ofyG2422OdVMtxdH04cb53tUfG6Wp1HnjMaMan1PxYMnfonTjJnI0lVW1ozAzPEEifNls0tjdyk_PTe7RpAX0DenbqClm7Bjwhk_0qa-SU2pwxqjoj9XyrPa8NFqhsYxMzPbblcJT_gQnUwPj7R1RdQmf4SJjfBm7-7zmyRxv3UEjObqqm-2cDRipgWDGuyz59A-F0hfswceghcWZCxrKZc0uDgHpydueIg9VxBlOwgDu4qwBuNCZR9T3LdSApRn_mHLzj-405X2eM7Y4nigXwBZq_03f6Ea0DpLE8KRteps-tytbkZnyGcB0gU-2p4ZV9VqAx9UjIcMqfegznMW-V80GPRL9EqOVoAE2UP70tMK4hq3bAEouhAyxxKLmoQ45Y0SGXODs850V5-cyANxx367Bh_BWyM25Oeo7h_TOvUmDdkxDfUXxACImqqh5tdttRk2hNTfVYWl4i2S6Bj9ql8-I-lMQK57qXV3G3wTO8_NEKduA633NsLvsSnAr5OEryqgyYVLD76pGP0dM_gnG3kR-JgVYGfhrTc01_1ghGmB5ZLwKIGykiZn4waGlERuPmtJdq2CVpFc=w1920-h630-no)

지금까지 예제에서 Thread 클래스를 상속받아 사용했을 때는

별도로 생성자를 작성해주지 않고, run()메소드만 작성해줬었습니다.

즉, 기본생성자를 사용한것이고 첫번째 생성자를 사용한 것입니다.

Runnable 인터페이스를 구현하여 사용했을 때는

new Thread(r).start()

와 같이 사용했습니다. 두번째 생성자를 사용한 것입니다.

<br>

4번째 쓰레드를 살펴보면 매개변수로 String을 받습니다.

변수명대로 쓰레드의 이름을 지정하는 것입니다.

모든 쓰레드에는 이름이 있고, 따로 지정해주지 않으면 기본값으로

'Thread-n'이 이름이 됩니다.

쓰레드 이름을 지정해줘서 사용해보겠습니다.

~~~ java
// 기본 생성자 사용
class Thread1 extends Thread{
    public void run(){
        System.out.println("running Thread1, Thread1's name: " + this.getName());
    }
}

// 쓰레드 이름 지정
class Thread2 extends Thread{
    public Thread2(String name){
        super(name);
    }
    public void run(){
        System.out.println("running Thread2, Thread2's name: " + this.getName());
    }
}

public class ThreadNameEx {
    public static void main(String[] ar){
        Thread1 t1 = new Thread1();
        Thread2 t2 = new Thread2("asdf");

        t1.start();
        t2.start();

        System.out.println("In ThreadNameEx, t1.getName() = " + t1.getName() + ", t2.getName() = " + t2.getName());
    }
}

// 출력값
//running Thread1, Thread1's name: Thread-0
//running Thread2, Thread2's name: asdf
//In ThreadNameEx, t1.getName() = Thread-0, t2.getName() = asdf
~~~

getName() 메소드는 해당 쓰레드의 이름을 반환합니다.

<br>

5~8 번째 생성자를 살펴보면 매개변수로 ThreadGroup이 있습니다.

ThreadGroup는 쓰레드 관리를 쉽게 하도록 도와주는 클래스입니다.

하나의 프로그램을 실행하면 여러 쓰레드가 생성될텐데,

이 쓰레드들을 개발자가 원하는대로 그룹화하여 관리하기 쉽게 해줍니다.

간단한 예를 보겠습니다.

~~~ java
class Thread3 extends Thread{
    public void run(){
        System.out.println("Thread3 running");

        try{
            Thread.sleep(5000);
        }catch(Exception e){
            e.printStackTrace();
        }
    }
}

class Thread4 extends Thread{
    public void run(){
        System.out.println("Thread4 running");

        try{
            Thread.sleep(5000);
        }catch(Exception e){
            e.printStackTrace();
        }
    }
}

public class ThreadGroupEx {
    public static void main(String[] ar){
        ThreadGroup tg = new ThreadGroup("Group1");
        Thread t1 = new Thread(tg, new Thread3());
        Thread t2 = new Thread(tg, new Thread4());

        t1.start();
        t2.start();
        int activeThreadCount = tg.activeCount();

        System.out.println("Group name: " + tg.getName());
        System.out.println("실행중인 쓰레드 갯수: " + activeThreadCount);

        // 쓰레드 리스트 출력
        tg.list();

        Thread[] threadList = new Thread[activeThreadCount];
        // threadList 라는 배열에 tg그룹에서 실행중인 쓰레드 입력하고, 그 갯수 반환
        int result = tg.enumerate(threadList);
        System.out.println("result = " + result);

        for(Thread th: threadList){
            System.out.println(th);
        }
    }
}

// 출력값
//Thread3 running
//Thread4 running
//Group name: Group1
//실행중인 쓰레드 갯수: 2
//java.lang.ThreadGroup[name=Group1,maxpri=10]
//    Thread[Thread-1,5,Group1]
//    Thread[Thread-3,5,Group1]
//result = 2
//Thread[Thread-1,5,Group1]
//Thread[Thread-3,5,Group1]
~~~

코드 설명을 시작하겠습니다.

먼저 Thread3과 Thread4에 run()메소드를 살펴보면

try-catch구문을 통해 Thread.sleep(5000)을 실행하고 있습니다.

Thread.sleep(n)은 말그대로 해당 쓰레드를 n/1000초 동안 잠자게 합니다.

잠시 멈춰지는 것입니다. 예외처리를 꼭 해줘야합니다.

잠시 멈추게 한 이유는, ThreadGroup의 각종 메소드를 사용할 때

실행중인 쓰레드들이 필요하기 때문입니다.

그리고 main()메소드에서는 'Group1'이라는 이름을 가지는

ThreadGroup객체 tg를 만듭니다.

그리고, t1과 t2를 tg그룹의 쓰레드로 만듭니다.

그리고 그 밑에는 ThreadGroup의 몇몇 메소드를 사용해봤습니다.

만약 여러 그룹이 있는데, 그 중 tg그룹에서 활성화된 쓰레드만 처리해주고싶을 때

이런 방식으로 작성할 수 있습니다.

참고로 마지막 출력값인 Thread[Thread-3, 5, Group1]은

순서대로 쓰레드명, 쓰레드의 우선순위 값, 속해있는 그룹의 이름 입니다.

<br>
<hr>
<br>

## <span style="color: blue">Thread 클래스의 여러 메소드들</span>

<br>

Thread 클래스에는 쓰레드를 제어하는 여러 메소드들이 있습니다.

먼저 위의 예제에서 사용한 sleep()를 살펴보겠습니다.

<br>

### sleep()

<br>

sleep()는 위에서도 살펴봤듯이 해당 메소드를

주어진 시간만큼 잠시 멈춥니다.

매개변수로 들어온 숫자의 단위는 1/1000 초입니다.

sleep() 메소드를 이용해서 5초간 1초마다 현재 시간을 출력하는 프로그램을 작성해보겠습니다.

~~~ java
import java.util.Date;

class PrintTime extends Thread{
    public void run(){
        int i=0;
        while(i<5){
            try{
                Date today = new Date();
                System.out.println(today);
                Thread.sleep(1000);
                i++;
            }catch(InterruptedException ie){
                ie.printStackTrace();
            }
        }
    }
}

public class SleepEx {
    public static void main(String[] ar){
        PrintTime t = new PrintTime();
        t.start();
    }
}
~~~

<br>

### 쓰레드의 속성을 제어, 확인하는 메소드들

<br>

java api에서 Thread 클래스의 메소드를 살펴보면 매우 많습니다.

이 중, 몇가지만 사용해보겠습니다.

~~~ java
class Thread5 extends Thread{
    public void run(){
        System.out.println("Thread5 run() method");
    }
}

public class ThreadMethodEx {
    public static void main(String[] ar){
        Thread5 t1 = new Thread5();
        Thread5 t2 = new Thread5();
        Thread5 daemonThread = new Thread5();

        System.out.println("t1.getId() = " + t1.getId());
        System.out.println("t2.getId() = " + t2.getId());

        System.out.println("t1.getName() = " + t1.getName());
        System.out.println("t2.getName() = " + t2.getName());

        System.out.println("t1.getPriority() = " + t1.getPriority());
        System.out.println("t2.getPriority() = " + t2.getPriority());

        daemonThread.setDaemon(true);
        System.out.println("t1.isDaemon() = " + t1.isDaemon());
        System.out.println("daemonThread.isDaemon() = " + daemonThread.isDaemon());
    }
}

//출력값
//t1.getId() = 13
//t2.getId() = 14
//t1.getName() = Thread-0
//t2.getName() = Thread-1
//t1.getPriority() = 5
//t2.getPriority() = 5
//t1.isDaemon() = false
//daemonThread.isDaemon() = true
~~~

getID()와 getName()은 말그대로 해당 쓰레드의 ID와 이름을 반환합니다.

ID값과 이름은 현재 상태에 따라 다르게 나올 수 있습니다.

getPriority()는 해당 쓰레드의 우선순위 값을 반환합니다.

모든 쓰레드에는 우선순위가 존재하고, 5가 기본값, 10이 최댓값, 1이 최솟값입니다.

우선순위를 조정해서 쓰레드들의 실행 순서를 제어할 수 있겠지만,

초보 개발자에겐 쓸 일도 없고, 권장하지도 않는다고 합니다.

마지막 부분을 보면

setDaemon(true)를 통해 daemonThread라는 쓰레드 객체를 데몬쓰레드로 만들었습니다.

데몬쓰레드가 뭔지 살펴보겠습니다.

<br>

### 데몬 쓰레드

<br>

여러 쓰레드들로 이루어진 자바 프로그램은

모든 쓰레드들이 종료되어야 JVM이 종료되고, 프로그램이 종료됩니다.

하지만 JVM이 신경쓰지 않는 쓰레드도 있는데 그게 데몬 쓰레드입니다.

즉, JVM은 데몬 쓰레드가 아닌 일반 사용자 쓰레드들이 모두 끝날때까지 기다립니다.

하지만 만약 일반 쓰레드들은 다 실행이 끝났고,

데몬 쓰레드만 실행되고 있으면 JVM은 프로그램을 종료시켜버립니다.

예제를 살펴보겠습니다.

먼저 SleepThread 클래스를 만들고 이를 사용하겠습니다.

~~~ java
public class SleepThread extends Thread{
    long sleepTime;

    public SleepThread(long sleepTime){
        this.sleepTime = sleepTime;
    }

    public void run(){
        try{
            System.out.println("Sleeping " + getName());
            Thread.sleep(sleepTime);
            System.out.println("Stop Sleeping " + getName());
        }catch(Exception e){
            e.printStackTrace();
        }
    }
}
~~~

~~~ java
public class DaemonThreadEx {
    public static void main(String[] ar){
        SleepThread t1 = new SleepThread(1000);
        SleepThread t2 = new SleepThread(5000);
        t2.setDaemon(true);

        t1.start();
        t2.start();
    }
}

//출력값
//Sleeping Thread-1
//Sleeping Thread-0
//Stop Sleeping Thread-0
~~~

SleepThread 클래스는 객체를 만들 때

잠잘 시간을 입력받습니다.

즉, t1은 종료되는데 1초가 걸리고, t2는 종료되는데 5초가 걸립니다.

만약 둘다 일반 쓰레드였으면

Stop Sleeping Thread-1 까지 출력하고 프로그램이 종료됬을 것입니다.

하지만 t2는 데몬으로 설정되었고,

1초후 t1은 끝나고, t2만 남아있을 때

JVM은 가차없이 프로그램을 종료시킵니다.

<br>

이와 같은 데몬쓰레드는 어디에 사용될까요?

예를 들어 A, B, C 쓰레드가 있고

C는 A, B를 모니터링 하는 역할입니다.

A, B가 잘 작동된 후 끝났고 프로그램 종료만 하면 되는데

C가 일반 쓰레드면 종료되지 않겠죠.

이때 C를 데몬 쓰레드로 설정하면 A, B가 끝나자마자 프로그램도 종료될 것입니다.

<br>
<hr>
<br>

## <span style="color: blue">synchronized</span>

<br>

synchronize(싱크로나이즈)는 '동기화하다' 라는 의미가 있습니다.

외국 영화를 자막과 함께 보는데, 영상과 자막이 안맞으면 '싱크가 안맞다' 라고 말합니다.

영상과 소리가 맞지 않을 때도 '싱크가 안맞다' 라는 표현을 씁니다.

뭔가 타이밍을 맞추는 걸 '싱크를 맞춘다'라고 합니다.

여기서 이 이야기를 하는 이유를 다음 예제로 확인해 보겠습니다.

먼저 CommonCalculate라는 클래스를 만듭니다.

~~~ java
public class CommonCalculate {
    private int value;

    public CommonCalculate(){
        value = 0;
    }

    public void plus(){
        value++;
    }

    public int getValue(){
        return value;
    }
}
~~~

value값을 더해주는 메소드와 값을 반환하는 메소드만 있는 간단한 클래스입니다.

그 다음 CommonCalculate 클래스를 다루는 ChangeValue라는 클래스를 만듭니다.

~~~ java
public class ChangeValue extends Thread{
    private CommonCalculate calc;

    public ChangeValue(CommonCalculate calc){
        this.calc = calc;
    }

    public void run(){
        for(int i=0; i<10000; i++) calc.plus();
    }
}
~~~

calc의 value값을 1 증가 시키는 작업을 만번 수행합니다.

그리고 이 두 클래스를 사용하는 SyncEx 클래스를 만듭니다.

~~~ java
public class SyncEx {
    public static void main(String[] ar){
        CommonCalculate calc = new CommonCalculate();
        ChangeValue t1 = new ChangeValue(calc);
        ChangeValue t2 = new ChangeValue(calc);

        t1.start();
        t2.start();

        try{
            t1.join();
            t2.join();
            System.out.println("calc.value = " + calc.getValue());
        }catch(Exception e){
            e.printStackTrace();
        }
    }
}
~~~

main()메소드가 있는 실제 실행되는 클래스입니다.

코드를 자세히 살펴보면 calc라는 CommonCalculate 객체를 만들었고,

이 하나의 객체를 t1, t2가 모두 사용합니다.

그리고 t1, t2가 실행이 됩니다.

try-catch문에 있는 join()메소드는 해당 쓰레드가 끝날때까지 기다립니다.

즉, t1, t2 쓰레드가 모두 끝날때까지 기다렸다가

calc객체의 value값을 확인하는 것입니다.

정상적으로 생각하면 t1 쓰레드가 실행되면서 value값에 10000이 더해지고

t2 쓰레드가 실행되면서 value값에 10000이 더해지므로,

결과값은 20000이 나올 것 같습니다.

하지만 실행해보면 99.99%의 확률로 20000보다 작은 수가 나올 것입니다.

그것도 매번 실행할 때마다 값이 다르게 나옵니다.

이유는 무엇일까요...?

<br>

원인은 t1와 t2가 함께 진행되는데, 같은 객체값을 가지고 연산하기 때문입니다.

plus() 메소드의 value++을 살펴보겠습니다.

사실 value++은 value = value+1 입니다.

이 연산을 수행하려면 3단계를 거쳐야합니다.

>1단계: 현재 value값 읽기<br>
2단계: value+1 계산하기<br>
3단계: value값에 (value+1)값을 대입하기

만약 value의 값이 5인 상황이라고 가정해보겠습니다.

t1 쓰레드의 연산이 1단계를 거쳐 2단계까지 왔습니다. 즉, 대입하는 일만 남았습니다.

그런데 이때 t2 쓰레드가 1단계인 현재 value값을 읽는 단계를 진행한다면, t2가 읽은 value값은 5입니다.

t2가 value값을 5라고 읽은 후에 t1이 3단계를 진행하면 value값은 6이 됩니다.

하지만 t2는 value값을 5라고 읽은 상태로 나머지 2, 3단계를 진행할 것입니다.

그럼 t2가 3단계까지 진행한 다음에 value값은 6이 됩니다.

t1이 진행되는 도중에 t2가 끼어들지 않았으면 value값은 7이 됬겠죠.

물론 이런 경우만 있는건 아닙니다.

t1연산이 끝난 다음에 t2연산이 진행될 수도 있습니다.

이런 경우가 뒤죽박죽 섞이기 때문에 value값이 10000초과 20000미만 값이 나오는 것입니다.

이런 경우를 '싱크가 안맞다' 또는 '쓰레드에 안전하지 않다'고 표현합니다.

자바에서는 synchronized라는 예약어로 이런 상황을 방지할 수 있습니다.

문제가 되는 plus()메소드에 다음과 같이 synchronized 예약어를 써줘봅니다.

~~~ java
public synchronized void plus(){
        value++;
    }
~~~

그리고 다시 SyncEx 클래스를 실행시켜보면

몇번을 실행해도 value값은 20000이 나옵니다.

이 synchronized는 해당 메소드가 하나의 쓰레드에서만 호출되도록 합니다.

즉, t1이 먼저 plus()를 호출했다면 그게 끝날떄까지 기다린 후, t2가 호출하도록 합니다.

이런 경우는 '쓰레드에 안전하다'고 표현합니다.

<br>

하지만 저렇게 synchronized를 사용하면 문제점(비효율)이 발생할 수 있습니다.

위의 plus()메소드는 안에 연산이 하나밖에 없었습니다.

하지만 예를 들어 여러개의 연산이 존재하고, 싱크를 고려해야할 연산은 하나뿐이라고 가정하겠습니다.

그런데 위와 같이 메소드 자체에 synchronized를 붙이면 

메소드 안에 있는 모든 연산이 한번에 하나의 쓰레드만 접근할 수 있으므로 비효율적입니다.

그런 경우에는 다음과 같이 싱크를 고려해주고싶은 연산에만 synchronized를 사용할 수 있습니다.

~~~ java
public void plus(){
    synchronized(this){
        value++;
    }
}
~~~

소괄호 안에 this가 있는 부분에는 잠금처리를 하기 위한 객체를 선언합니다.

일반적으로는 다음과 같이 별도의 객체를 선언하여 사용합니다.

~~~ java
Object plusLock = new Object();
public void plus(){
    synchronized(plusLock){
        value++;
    }
}
~~~

<br>
<hr>
<br>

## <span style="color: blue">쓰레드를 제어하는 메소드들</span>

<br>

수많은 메소드 중 예제를 통해 몇가지를 살펴보겠습니다.

아까 작성했던 SleepThread 클래스를 그대로 사용합니다.

~~~ java
public class SleepThread extends Thread{
    long sleepTime;

    public SleepThread(long sleepTime){
        this.sleepTime = sleepTime;
    }

    public void run(){
        try{
            System.out.println("Sleeping " + getName());
            Thread.sleep(sleepTime);
            System.out.println("Stop Sleeping " + getName());
        }catch(Exception e){
            e.printStackTrace();
        }
    }
}
~~~

~~~ java
public class ThreadMethodEx2 {
    public static void main(String[] ar){
        SleepThread t = new SleepThread(2000);

        try{
            System.out.println("thread state = " + t.getState());
            t.start();
            System.out.println("thread state(after start) = " + t.getState());

            Thread.sleep(1000);
            System.out.println("thread state(after 1 sec) = " + t.getState());

            t.join();

            // 실행중인 쓰레드를 InterruptedException 예외를 발생시키며 종료
            t.interrupt();
            System.out.println("thread state(after join) = " + t.getState());
        }catch(InterruptedException ie){
            ie.printStackTrace();
        }
    }
}

//출력값
//thread state = NEW
//thread state(after start) = RUNNABLE
//Sleeping Thread-0
//thread state(after 1 sec) = TIMED_WAITING
//Stop Sleeping Thread-0
//thread state(after join) = TERMINATED
~~~

일단 getState()는 쓰레드의 현재 상태를 반환합니다.

java api를 살펴보면 getState()는 Thread.State를 반환한다고 나와있습니다.

Thread.State의 api를 살펴보면 다음과 같습니다.

![Thread_State](https://lh3.googleusercontent.com/e_gFDEvDBqazYNz7iXnY4bE2ndV5qwPi7aZodl_Z9N6QA5w30L-EclHtxMLOt45OTDzTh8SnarJq9E-MQLB8e1ljvR4tSFLh05w75EqeKTR7CBJyVMlvhGvjeOBqZuIuLsUwx4rRWi7SsX_vNbhvTCdwKeGy3HmRUXvJEx6cG2hCgXCyTLbj--dIm0rAmxbgipUO5cpGy_mec2dZ4yHaWEnxcPobW-aISBM2n75vR3v8HukD6nD4cwSknH-HvMzIpupkirvWsOEkTvj7dAGO1I2OhD38i_Mtcxo36UDioLXHkIFlXIAcTDYbo9rIUvUHCfi6ZDwAsQRc398OAbufHR1jEhm4TX291fX3xH6BTBRncemlqp6MMumJOmemFxWdcMcGNe4uez5JCsbTzYxCLszqVAUOje6GyxjDIKLYAdCpJLv1LQoXKreM1bycD1RXYcOKzJxrlFER0kB49nxDzuCksrcqeCrEV-P5a3bGDMrK6JIAaGljZee0CBq3ujFW1Llb4sen2-XcFLBAH2BdDrCiv2x89A_xp6_hntOU73TaaA0dKCGZX3ExQafoOcmNnNTOUWAKcXwN6AVZ2baJDVbOM5R9KWpcJMlnHUc=w1309-h961-no)

Enum 클래스인 걸 알 수 있고, 6개의 상수가 있습니다.

각 상수들의 설명은 나와있는 대로입니다.

다음은 각 상태에 대한 그림 설명입니다.

![Thread_State_diagram](https://lh3.googleusercontent.com/ybl5pha_sipm9vqSXWmh5zNu6iEeJVpGSPRxUZj3Qm8ov66-hKWkgGJ9ueDx68x09P77zSYbv3KLaL4HWM8lTSAkbLpWZMuzNxP0R0rGZ38dNES9fjSzCHtxNycoYQUlqwXihIwA_-xI8yrKVAAYu9Ow8JDplc3mRpDayzr4WXJ1Q-OuluDrBRQxoAMswrkbj-D1bWC6CFN1a9DUL-fEeXa0kl64F7WQRawp5FSOm5l-ukbFfAwTKgv-rVEduuFqMvY81WyxIZb0tzg0ntR1CIEZQ8pH7MU0d5D7k_bNS-hVWpfiNwY_iUNgsk0GKkQ-SY44dnmOqU5l6MKsmf5aISqpXPBnGsEvZegakUbn_-_Hkrc-nVGKJ9gefhNmZzbiUcvUruE2c3iNZEayUKvX4t0GCCISRIJ2OzTPV0uVs35xnPYdJyjQ4VObHSB-fZ6v1ytSJrd_pSu14x0WfVWn1PBYtC9ujyxN9y-TvUqZFvYF0ow3WOrQWEge6biq5eUlE4iKtHTnVaL-qR4O9GayLYq_TNNezPiivigPRK34SyyYqmbWb2JIPUJbJRJ4_kqpRDwCff9lJMaId59Kv_JE228dO_o-S7O0LpCNdww=w960-h757-no)

출처: https://www.uml-diagrams.org

<br>

모든 쓰레드의 시작은 NEW이고, 끝은 TERMINATED입니다.

그림을 조금만 설명해보면, NEW에서 시작한 쓰레드 t는

t.start()를 통해 RUNNALBLE 상태가 됩니다.

여기서 wait()나 join()을 통해 WAITING상태가 되는 것이고

notifyAll()이나 notify()을 통해 BLOCKED 상태를 거쳐 다시 RUNNABLE 상태로 갈 수 있습니다.

<br>

다시 ThreadMethod2의 출력값을 살펴보면

처음에 start()전에는 실행 전이므로 NEW가 출력됩니다.

start() 후에는 그림에 나오는 것처럼 RUNNABLE 상태가 됩니다.

Thread.sleep(1000)을 통해 1초 있다가 다시 t의 상태를 확인해보면

t는 총 2초를 sleep()해야하고, 아직 약 1초의 sleep()시간이 남아있으므로,

TIMEWAITING 상태가 됩니다.

t.join()은 t 쓰레드가 끝날 때까지 기다리는 메소드입니다.

t.interrupt()는 코드에 설명된 대로 입니다. 사실 여기선

이미 t 쓰레드가 끝난 후에 이 라인이 실행되므로 아무일도 발생하지 않습니다.

여하튼 쓰레드가 끝나게 되니, TERMINATED 상태가 됩니다.

<br>

그렇다면 중간에 실행중인 쓰레드를 interrupt()로 멈춰버리면 어떻게 될까요?

~~~ java
public class ThreadMethodEx3 {
    public static void main(String[] ar){
        SleepThread t = new SleepThread(2000);
        try{
            t.start();
            t.join(500);
            t.interrupt();
            System.out.println("t.getState() = " + t.getState());
        }catch(InterruptedException ie){
            ie.printStackTrace();
        }
    }
}

//출력값
//Sleeping Thread-0
//t.getState() = TIMED_WAITING
//    java.lang.InterruptedException: sleep interrupted
//    at java.base/java.lang.Thread.sleep(Native Method)
//    at SleepThread.run(SleepThread.java:11)
~~~

예외가 뿜뿜 뿜어져나옵니다.

join()안의 수를 2000보다 큰 값으로 넣는다면

역시 예외가 발생하지 않을 것입니다.

<br>
<hr>
<br>

## <span style="color:blue">쓰레드와 관련된 Object 클래스의 메소드</span>

<br>

Object 클래스는 모든 클래스의 부모이죠.

Thread 클래스도 예외는 아닙니다.

즉, Object 클래스의 메소드를 사용할 수 있는데

이 중 쓰레드와 관련있는 메소드를 살펴보겠습니다.

~~~ java
public class StateThread extends Thread {
    private Object monitor;

    public StateThread(Object monitor){
        this.monitor = monitor;
    }

    public void run(){
        try{
            for(int i=0; i<10000; i++){
                int j=0;
            }
            synchronized(monitor){
                monitor.wait();
            }

            // wait() 상태를 깨우려면 notify() 했을 것
            System.out.println(getName() + " is notified");

            // 1초후 종료
            Thread.sleep(1000);
        }catch(InterruptedException ie){
            ie.printStackTrace();
        }
    }
}
~~~

~~~ java
public class RunObjectThreads {
    public static void main(String[] ar){
        RunObjectThreads ro = new RunObjectThreads();
        ro.checkThreadState();
    }

    public void checkThreadState(){
        Object monitor = new Object();
        StateThread t = new StateThread(monitor);

        try{
            System.out.println("t state = " + t.getState());
            t.start();
            System.out.println("t state(after start) = " + t.getState());

            Thread.sleep(100);
            System.out.println("t state(after 0.1 sec) = " + t.getState());

            synchronized(monitor){
                monitor.notify();
            }
            Thread.sleep(100);
            System.out.println("t state(after notify) = " + t.getState());

            t.join();
            System.out.println("t state(after join) = " + t.getState());
        }catch(Exception e){
            e.printStackTrace();
        }
    }
}

//출력값
//t state = NEW
//t state(after start) = RUNNABLE
//t state(after 0.1 sec) = WAITING
//Thread-0 is notified
//t state(after notify) = TIMED_WAITING
//t state(after join) = TERMINATED
~~~

StateThread 클래스에 run()메소드를 보면

wait()메소드를 사용한걸 볼 수 있습니다.

아까 Thread.State 설명 그림을 보면

wait() 메소드를 통해 WAITING 상태가 되고,

그 상태를 벗어나려면 notify() 메소드를 사용해야 합니다.

RunObjectThreads 클래스의 checkThreadState() 메소드를 보면

0.1초 후에 상태가 WAITING으로 나오고

StateThread에 있는

System.out.println(getName() + " is notified");

가 실행 안된것을 볼 수 있습니다.

이를 notify() 메소드를 통해 monitor객체를 깨우고

다시 정상적으로 실행되는 걸 알 수 있습니다.

<br>

그렇다면 이 코드를 실행해봅니다.

~~~ java
public class RunObjectThreads2 {
    public static void main(String[] ar){
        Object monitor = new Object();
        StateThread t1 = new StateThread(monitor);
        StateThread t2 = new StateThread(monitor);

        try{
            System.out.println("t1 state = " + t1.getState());
            System.out.println("t2 state = " + t2.getState());

            t1.start();
            t2.start();

            System.out.println("t1 state(after start) = " + t1.getState());
            System.out.println("t2 state(after start) = " + t2.getState());

            Thread.sleep(100);
            System.out.println("t1 state(after 0.1 sec) = " + t1.getState());
            System.out.println("t2 state(after 0.1 sec) = " + t2.getState());

            synchronized(monitor){
                monitor.notify();
            }

            Thread.sleep(100);
            System.out.println("t1 state(after notify) = " + t1.getState());
            System.out.println("t2 state(after notify) = " + t2.getState());

            t1.join();
            System.out.println("t1 state(after join) = " + t1.getState());
            t2.join();
            System.out.println("t2 state(after join) = " + t2.getState());
        }catch(Exception e){
            e.printStackTrace();
        }

    }
}

//출력값
//t1 state = NEW
//t2 state = NEW
//t1 state(after start) = RUNNABLE
//t2 state(after start) = WAITING
//t1 state(after 0.1 sec) = WAITING
//t2 state(after 0.1 sec) = WAITING
//Thread-0 is notified
//t1 state(after notify) = TIMED_WAITING
//t2 state(after notify) = WAITING
//t1 state(after join) = TERMINATED
~~~

예외는 발생하지 않지만 잘 보면

일단 프로그램이 끝나지도 않았고,

두개의 쓰레드 중 하나만 깨어나서 종료된 걸 알 수 있습니다.

notify()는 한번에 하나씩만 깨워주기 때문입니다.

두개를 다 꺠워주려면 두가지 방법이 있습니다.

~~~ java
synchronized(monitor){
    monitor.notify();
    monitor.notify();
}
~~~

와 같이 두번 notify() 해주든지

~~~ java
synchronized(monitor){
//  monitor.notify();
//  monitor.notify();
    monitor.notifyAll();
}
~~~

notifyAll() 메소드로 monitor 객체를 모두 깨워주는 방법이 있습니다.
