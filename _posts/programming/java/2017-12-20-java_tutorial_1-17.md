---
layout: post
title:  "[Java] Annotation(Override, Deprecated, SuppressWarnings)"
date:   2017-12-20 03:50:00
description: Annotation(어노테이션)
categories:
- programming
- java
banner_image: /programming/java/java-logo.jpg
comments: true
---

Annotation(Override, Deprecated, SuppressWarnings)

---

## Annotation

<br>

어노테이션은 클래스나 메소드 등의 선언시에 **@**를 붙여주는 것입니다.

클래스, 메소드, 변수 등 모든 요소에 선언할 수 있습니다.

어노테이션을 선언하는 목적은 다음과 같습니다.

>- 컴파일러에게 정보를 알려주기
- 컴파일할 때와 설치시의 작업을 지정하기
- 실행할 때 별도의 처리하기

<br>

미리 정해져있는 어노테이션은 3개(Override, Deprecated, SuppressWarnings)가 있고,

커스텀하게 만들 수도 있습니다.

여기서는 미리 정해진 3개의 어노테이션에 대해서만 알아보겠습니다.

<br>
<hr>
<br>

## Override

<br>

해당 메소드가 부모클래스의 메소드를 Override했다는 것을 명시적으로 선언합니다.

예를 들어보겠습니다.

일단 다음과 같이 부모 클래스가 있습니다.

>Parent.java
~~~ java
public class Parent {
    public Parent(){
        System.out.println("Default Constructor of Parent class");
    }
    public Parent(String name){
        System.out.println("Constructor with string parameter of Parent class");
    }
    public void printName(){
        System.out.println("printName() method of parent class");
    }
}
~~~

그리고 이 Parent 클래스를 상속받는 자식클래스를 만듭니다.

>AnnotationOverride.java
~~~ java
public class AnnotationOverride extends Parent {
    @Override
    public void printName(){
        System.out.println("printName() method that is overridden in AnnotationOverride class");
    }
}
~~~

이렇게 @Override를 printName()앞에 선언하면,

이 printName()메소드는 Parent 클래스의 printName()을 상속받는 것이다 라고 명시적으로 나타내는 것입니다.

안써줘도 되지만, @Override를 써주면 한눈에 어떤 메소드가 오버라이딩 했는지 알 수 있습니다.

<br>

만약 오버라이딩을 잘못했으면 다음과 같이 예외가 발생합니다.

![img_java_exception_override](https://lh3.googleusercontent.com/hkpvkD-Z7YmqhCyIELRFaW6D1-q3Sy65thbra0TckGVu67BemXrNUlSz7_GlnkN6_koEp38gfO_-jtBo42d01mXTaX31RMVWFK56unLtKTD07SxJeuQjMvqm2Q-LDkYwAR_M0sVwPKongrLSnEcJxQ_rB2ruFMdgxAaqTEPIBifei50qQoHNd7dnqSTdOHi8IcST_E5JwFgAJES1S9gzvpqp857OcZ69DPhxtKmCEP8NzECKYa7_XpztxoZOYhBfhtHeJ9g8eOHVoWI2y27zSpwOtIQgWocwe7mfRKPe1wPXUCF7vlWVPjWLZW7_qlppE7ZpmKFSUDfaTpo7Fw0viO00-Xc7ik4rBaljqjZRr6GoJB91XFiMxcj0nIGlveLCKbyJRFwsGHwTMii40_O7YqS-quzN3qHHvsOMs6ROgzM7mZHMkzryIp8-AgrB_72fUN0rwCO6IPebHIWUhPlofxx196kxfDnSNCg9TEWclnya3l3K2SUIy8f4bug23q3PbjLqJEYOxrZ1SCZJY9t8XH9F0mEpX8-3Gs4gp2ywqKuGPw7NQRsLCSeTMtirlXvD_Z4RHXFaWQTIMn0I2S5j3G0CsPTs6nM1NQVbp8g=w781-h144-no)

위 코드에서는 printName(String name)과 같은 메소드가 Parent 클래스에 없는데

오버라이드 한다고 명시했으므로 예외가 발생합니다.

<br>
<hr>
<br>

## Deprecated

<br>

Deprecated는 더이상 사용하지 않는 클래스나 메소드를 선언하는데 사용됩니다.

다음과 같이 @Deprecated를 선언한 메소드가 있다고 가정하겠습니다.

>AnnotationDeprecated.java
~~~ java
public class AnnotationDeprecated {
    @Deprecated
    public void noMoreUse(){
    }
}
~~~

그리고 이 noMoreUse() 메소드를 다음 코드와 같이 참조하는 클래스가 있습니다.

>AnnotationDeprecatedSample.java
~~~ java
public class AnnotationDeprecatedSample {
    public void useDeprecated(){
        AnnotationDeprecated ex = new AnnotationDeprecated();
        ex.noMoreUse();
    }
}
~~~

이 코드를 IDE로 보면 다음과 같이 중앙 선이 그어집니다.

![img_java_deprecated_ide](https://lh3.googleusercontent.com/1MHl6DoC59xO7K5nh1kHbnp1n-mwsTmmMvIl3vT90jT2hP8cp0iNyHx5xLxjVeqLXqzfSUxGO_SLDYVu3hKfGlP2JUE986PERZwQKJVoXcbrT0LXeUBbMJfkpl_wMhU-_kPpoULJFsO0H7RFnNg7u-prI8GfBzs7_eINdvwlUAj90YvqUMcju741y5qZ9cxT7EC50lIkCIb7LtCh9y6zynewPiTjAx9yu1-tO0ike22EpCphRuCjXExx6w7_H-YeZ0jBushK18eLZNLQ_benTDMIZGLzDTqWq1WeOOFsH3fbEsU3E_HhmyAViGhK-WQWyTJALnN6wbs_WjKvd84lBcM9XFH_LNJP090jJ23qW5Cn2BeqodUwex7dnhqAU-sEPYW8MRaSz1scCwt6RiMQTOH-WtQRxdiJOuvhaCjcPoxDbMnE_jbnq-op758ApmiHLuaKEWEBAxuuYke5dwTej9i8a_7P_05ciU08oJ_xZB43PHPsEOFhmtx0WyasiDW6ML0DwYvxZYy9k_uwXtOA1GaXZcYv-sBxTfwTqEpaEdcq13XEgY6haDkHmLP6FQoY5PFyj05ZM7j2oDzxQi-YCjgzszrVQNNOmkTdo0E=w722-h150-no)

콘솔창에서 컴파일을 해보겠습니다.

![img_java_deprecated_console_terminal](https://lh3.googleusercontent.com/11zTepFWOi7pXKlS1r6jYF4JOcR5ngU1A0p8J7uzsEVy_b-m0hVyAWxST2oKWR9Sr7LQibU_GEV3LB87muG_-rPgHtU6i6RsvMnxmF__e0QjbVTwLPOCVrubDb8Xn8wPTymFNeEiBiONuj3MRcQVbmu2THug4fW_vSAKv9eg836afvvbQta72laWDCLeY8-s9qoAFrC3ZJzXmMMwErw74RsT7BzKFW4isfRPMe258AgRhGM9mHaSeCVfBmclR6UGwdesF8vo0tbm6rQV9dA80VB5y-iNIFjn9QmzR8n0GSUEo1nO5QJEfINkuiOetGJBYULGezagJ5dmjnc4UgIkraSTHbm8D6kVd3NGxQEEp4VGFmZv-zdZHwjyUn_JTUIM0nOEv0o6p8gyAo7XxK2d8I42k4aW8E2DYk4tsh9WGXbVadln0FWKlHe5gJ7gNPmn_xN3rslRE5D5as8YXFj3nnXxzJKbd7uJpXBBXpC2RTPP_TKFNfoZpRATehk909t7VBgDiEHp84bLuMAM-pOnuEHghKj8WFLmkLx7K6rH4hGczU8WDj2C48o346ziob2hGhDukzAY7kf8lQMqbnipJzL9c1z9pQzbpJCvGwc=w1231-h420-no)

처음에 

{% highlight bash %}
$ javac AnnotationDeprecatedSample.java
{% endhighlight %}

를 했을 때, Note 두개가 나옵니다.

첫번째 Note는 deprecated된 API를 사용하고있다고 말해주고 있고,

두번째 Note는 -Xlint:deprecation 을 이용해 다시 컴파일(recompile)해보라고 합니다.

그래서 pwd로 현재 위치 경로를 확인한 뒤,

{% highlight bash %}
$ javac -Xlint:deprecation /User/onsil/programming/java/intellij_default/ch17/src/AnnotationDeprecatedSample.java
{% endhighlight %}

로 다시 컴파일 하니, 어떤 부분이 deprecated인지 나옵니다.

다만 이것은 warning이지 예외나 에러가 아니므로, 실행은 됩니다.

<br>

자바 API에서도 Deprecated를 발견할 수 있습니다.

![img_java_api_deprecated](https://lh3.googleusercontent.com/H_sk-5yBn4hlCgTpo5LDV5QChH2KN0TKlbd7ie04i-dXDrnhWYEZAWPyXgL0HGMEVXk4ZNWQ80_waFxafvahzPJRPGZDgQS-58HEvGPpI6TVqgoMze5nHiPzgBnqbBGx6Nbol6Kw1sz13oOzc40ILY1jhNFicBDu6O1jNygFxDjNw0wHc2xR6B9D8dtfG6YkQVcbUNxnU6pgsVXTpeiN6Ti5rQXBUXdLzHH10OofAVt09mnXr5s8kjLyO0Wh46BhNdiNQXysuupQV1Kooki_uyCgtHzItRaeotsUKGUd61KqlC6U3VRTOp_Gjv_pXgXZZZurxf6LNaAJqr41ipupnpC6nuynmCzuxJOST-nfTopq1ag375zTsU26cik82Gokgl7u9b2dXvqMg9mtAxMfAqA1iGYrEenLowU35SBF2WH3bLqF4O6BSuXUrFegDpFXqn-ogqt5uDgz8X5dCw8sc2D2IiDyB0PCJw--3vCw2Kdope6q4axxT-5kU0sGLtywwI7ajxrbNh5ud4OiKh_477CdiDFfn-zkIogJzsd5zMXG5xNFiZSvglcimhHosg5u0Ah6bsY_bbDKLqsmmAwgWa5qb2kjKYqZvF1L5ZU=w1100-h905-no)

이렇게 API에서 Deprecated된 메소드나 생성자들은,

자바의 버전이 올라가면서 불필요하게 된 것입니다.

이것들을 그냥 삭제하지 않고 그대로 두면서 Deprecated라고 명시하는 이유는,

하위 버전 호환성 때문입니다.

만약 불필요하게 된 메소드를 새 버전 자바에서 바로 삭제했다고 가정하면,

이전에 작성된 자바 코드들은 새 버전 자바 환경에서 제대로 실행되지 않을 것입니다.

<br>

자바의 built-in 메소드 말고, 개발자가 작성한 메소드도 나중에 불필요하게 될 수 있습니다.

특수한 경우를 제외하고는 대부분 직장에서 다른 개발자들과 같이 일을 하게 되는데요,

A라는 사람이 작성한 a라는 메소드를 B라는 사람이 개발할 때 참조했다고 가정해보겠습니다.

만약 A가 a메소드가 불필요해졌다고 생각하고 막 지워버린다면, 

B가 작성하고 있는 프로그램은 갑자기 에러가 발생할 것입니다.

<br>

그렇게 막 지워버리는 대신에 @Deprecated를 선언한다면

위에서 보았듯이, B라는 사람이 IDE를 사용하든 콘솔을 사용하든

자기가 사용하는 메소드 중에 deprecated된 메소드가 있다는 warning을 보게됩니다.

보면... 고치겠죠??

이렇게 다른 사람이 deprecated 메소드를 수정할 시간을 주고나서

나중에 삭제하는 것이 바람직합니다.

<br>
<hr>
<br>

## SuppressWarnings

<br>

SuppressWarnings은 deprecation과 같은 warning을 무시하라고 선언하는 어노테이션입니다.

예문을 보겠습니다.

>AnnotationSuppressWarning.java
~~~ java
public class AnnotationSuppressWarning {
    @SuppressWarnings("deprecation")
    public void useDeprecated(){
        AnnotationDeprecated ex = new AnnotationDeprecated();
        ex.noMoreUse();
    }
}
~~~

위 코드에서 볼 수 있듯이, SuppressWarnings()의 소괄호안에

무시하고자 하는 경고를 직접 쓰면 됩니다.

여기선 noMoreUse()라는 deprecated된 메소드를 사용하고 있는데요

@SuppressWarnings("deprecation")으로 인해 나와야할 경고가 안나옵니다.

![img_suppressWarnings_ide](https://lh3.googleusercontent.com/snMBJeF77O8E64fh-gwjLL-8iPGiQxQuDe6-knxJB1xgWK6zUibztja43PmZnpxfoK90qCCeZqzN0wRxS0Y_5DVOqkcyUQ5ORfaWUdp1FnVX6FBG_k38cNuG_IDGMCrwfOVD4eA8bb9VkrW0x_eLq1ZjVjIPOYKVTRJPb0hvYWNebuYTC9NnYpHCuq52JUjxK2gkM2NnqHVoHbbrNLBoMi3OHqkkg48xe-0y1GEpGgSVjGT4GWpIkysz47ZN9CyF2UhjxijKRS1vM_9XIAgd8-PDulwQ4tbQ6NPwu9Z_FltLIltv3AWOT5-KC39WJ1ga-g_9mujLrfLusj2S3jO32U37jd2ZDeVWY9ouFx42YlFceSs88rajEaBPI9GxXh-C0dmAf1ByggS2ORuOPN7COIhlurQOi4QUkHVeu12w1MAnxYHsiJfoOvfqGstqQBkNXfkyNFz7K8QP0AM52Pj1pOp-nB1jZFpSj88iewFrQUTihVAG0hmMzXXgtNrNYqk3yiy2XGbWJYrXQejkAo-IHBm9tUOYJ7Yn-DISCwTrUimmOj2-6pShyHyFmQ47LOGUifdXkvvXM3Bo_mUVCZgGzoOOQ8ByzoM2cmRNZD8=w894-h158-no)

![img_suppressWarnings_console](https://lh3.googleusercontent.com/MGtVdj_f8MS3galhmhqSx_E6vTDCcSbXHUnGPR5hRtsTDmh4Yj-lRtyZ5CDqx5d-vGxkseAGFgYs5ZjT78VI2OPDcEIxD2ndtF_MXZGzp7aF65d6XsuB7f3mmAlYzsmjbZfHS-ncUohWA0ZvckPEjhdYxN0aQZPKE9CiqGK5ve5s6F0hGu6OpsojxF9YkwwY8ku5veb8zQ4yXni451GtaELCf5cmYJN2MvdWTXKmOag4IuGsGJ2rED33V7_Msh0UDJfoFH2AzpM6Pqd1fDcoE08vdEWrHATbxQX73zccVC9GmorWY5T243DdXMXVhdfsSDiXxM2DN-63fJ6ocTCWCixKVINfR97FIctS4sUs_lvPXH0znIcvBM6dsQ_VO9uUiBZwKxtO7eepEHMTdi0ageDB-gQ0gjKm8_s8mdMl5a8y0dWRQNslWcoYqtSanysiEUoD2-8v2yW_RS2mOE34MfQ6AuHUXDrwnGOI45aZZyb-d0ksi0yAbmo28s7k__OpuooVlcdUhY-CmU-LA0e62iSQxtiu-Wn645qYUAdxw7obUuBRB9DbxXVrzv3V-XMWvm4mUJVUsv6ukanW0gTfkOGpbqI1R7-pRt47HEM=w1231-h420-no)

Deprecated의 예문과는 달리 어떤 경고도 안뜨는 걸 볼 수 있습니다.

<br>
<hr>
<br>

제가 보고있는 책에서는 커스텀한 어노테이션을 선언하는 법도 나와있습니다.

하지만 책에서 저자는

"대부분의 개발자들은 어노테이션을 선언할 일이 별로 없다."

"이미 선언되어 있는 어노테이션을 사용하기에도 벅찬 것이 현실이다."

라고 나와있습니다.

<br>

나중에 실전에서 자바를 이용해 개발하게 되면

커스텀한 어노테이션을 선언하는 방법에 대해 포스팅 하겠습니다.