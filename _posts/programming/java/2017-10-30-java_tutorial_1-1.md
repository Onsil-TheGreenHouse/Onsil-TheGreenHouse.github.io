---
layout: post
title:  "[Java] 자바 설치와 'Hello, Java' 출력"
date:   2017-10-30 00:45:00
description: 자바 설치
categories:
- programming
- java
banner_image: /programming/java/java-logo.jpg
comments: true
---

[Java] 자바 설치와 'Hello, Java' 출력

---

## Java 설치 여부 확인하기

<br>

윈도우에서는 cmd창, 맥에서는 터미널을 띄우고,

{% highlight bash %}
$ java
{% endhighlight %}

를 입력해봅니다.

저는 맥환경인데, 자바가 설치가 안되있으면 다음과 같이 뜹니다.

![1.check_java](https://lh3.googleusercontent.com/9GiyAuJ0_pLEV4XsXvi4FpENbUmc4Q8KVeI6FICXFZlslIloAkMTqKvSF1Iw8iXAmvM5ciysTUtlQZIwwJmFQtaffZJ3zYG-IKNAHuormhOJcUbbwe_otzfxL-JTNv9leYIyBAQRLTEoG1XTGMyU1NtGvGJsITWITiauokWNXICKtvylCqYua6Jy0ChIQRZ4qH2bvNI-ntIkvPx3DNrC1xHSu7VZb8aS4wlGKrvKHa2ZNrS2rO3vM9jch5oSMeFsTYKjcaUWvs3y9VhCVgewzKHe7XfE3Dwht0fu9dsuEPuIW43wXpwTXuwayubK2VLAKG5-drPC9rkbQqtc91F5Mxr1xJHB2RfGMi5q4L9I05m42H3vm4gy9enU_ZFdDe6jCD7SOQA1_tRbjpRQhEat1pG8UD6S0SWVdV0NRSZSO3VGmk8PeQQkXun0ONXA3FteOFPnZQmnNH2BxgTnR-TxTUWD1kg1pnINoIMeEm5DNGCBIzkf_N0mEMhE0TvPFGIE3oHwXdGN8kXpzGWrqVPzWUswX0KU42K-F72lM-kVnyqSWJFhRmaVO47EC6TofsUuhqmAH4pD9SvtxlDr7G0X0dEs7JZ-LVmrc7i63QSKMA=w1138-h724-no)

윈도우도 설치가 안되있으면 뭔가 오류가 뜰겁니다.

<br>

## Java 설치하기

<br>

오라클 홈페이지에 가서 Java SE 를 다운받습니다.

![2.java_homepage](https://lh3.googleusercontent.com/3Qh1n_kRmVcDteu1uR31MRLKRF-cR8Mft8PciwNm-vB6RcyIZ1H8hPF5t61PSeL8yTVn3s-Azj3E2fOOXzGprADLNFqZ25kVsXRrxkGma7h_L8Y9G91lHmHnGSwBRzn8sx67o_O7UiAnQAzBhppyyNpFYtoD5DBePpqNXxuLiIqoGOHZy-IC10f8dI2MqiBB4y2Ki_cRSEeNKKMh8XoLsVZjYxq1VN8AMO2M6eo1H8gqFUtG6XIW0ytDsCL5U1z0peioQ-2YSPCrx2neYo6c7pcDsbV8dwjHyUH0Sh2mW4-uEhfVDFNfXnDG4fwaLDDknbP_2IBZqrCD13Mr05K4oplnL6A5o9gO7vr6p_2JsE7nvXRUFuVpCq7rnUlmdZKkDhMhn0u_44ojC_5FRqFL-tT8_fry1MBhDhX5AhxJIl0o1mldFxaogLBonwlR54ML6bE1sMj_06Dnl--_Relvvxtlkg3PoIXzcYf92LqqqTGNbtstO8NgVwDohqfvyMBCrKLdDOaJtoYrISmHp755NTmCFMGBzKaa5_rjlpdfDZU94AtphrfYur7FcBueos9MhGMF1aq5Dg0e_s9TOnPcgtK5ydsYdYVQegOjjVgjjQ=w634-h405-no)

클릭하면, 운영체제를 고르라고 하는데 자신에게 맞는 운영체제를 고릅니다.

저는 맥이니 3번째 macOS를 골라 다운을 받았습니다.

![3.down_java](https://lh3.googleusercontent.com/6DbH5DSpnK1j9nC41lKCET_0NIQDgahLq7ldJyXO3U_ipfqEOwBU8DWorrafOGetWij4i8wpccksfsapNJp2OZkNGITKB7eGaWzyXYcgU0PJbvlUL1DJLlvUifYwQMKKpbiviT7YZEakbjFtHHmBo6n00z4jmkF-fwR0kKczNl2svx42G0FrtyTw1d9bD4_9V_QBjWtnlHDcRzTGHgLSKG66EHcCA7XDQpVnZ3SvObKh52S_O55DstZ7IUaAjiH4IA4Je274pcnftVdk-vRY2x4U42Qd0r6LAcffcTW5AkVjZTTbTk1xd_qmt4H7dITuF5625OOsJTAJvMsmrXH14crsQukmRaEMvsV9ldu6tskeYC5oCzXnJUG54Hz3st4h4hW6sd06IUlr_Z9ngs7VBaCRujy2Dxqga3RODm7mxUJvlZbtvLIfsOx9GWQpuodu_aCsIbXB6Mf76h8utohaMPUMwQfI8-Vx0Y_TgDOJfxTZs7oB2r8GijCiU_n-VK6j2MgoT0Bx8CaI445_g-WSB2_hA5yk0FNNQbEazGMXvSw6rmzsyCxqkIdfPiGImSovirNOt298W3HHfstDW4RV0al9a2iEs9XD-5Ns7qwcMQ=w2282-h1458-no)

설치 파일을 더블클릭하고, 시키는 대로 해서 설치합니다.

여기서는 아이콘을 더블클릭 하라고 하네요

![4.install_java](https://lh3.googleusercontent.com/qKSxHMgy7NXiohfsxL1JMfKQpKb1_KDx-vq8nMPacYeGwt6pod2EwOtjprilNQO620_qLX71nbPEU3WncJoLWsMj1DVwIgnDe9KbNEV4wck1Sbpw6YRLxNFKWrDMvhsN7qCPpktwt5YWi4rem_VnicEw7erpao_vcBhfRL2FoJtW0gvxhpGfVsNLOtWjf2sJQr4muC3RCiBEI_csjw6ncMXogS0EbWzho8kMTA-SA-G4aQQUepZ97pifwtkDvgVAxWr-Mnfg-z5SVPJ9zgPraIG5fDpwTMvhFMQAIDRYoLgJwr7FoxVHTHRJVDmjrkvqNwVNedC_EnZdvkuXLLtMj9b7x5WeJTleH6ucSEsahJsA8uTFEq4rcfXH4s9rY3tvvMAPPtCgxigCHYSJkqZRoNkEzDN7W7l3Bdj_4c11h_PkTSw7go63YbHuTJ3JUnC8iA9fCbg2M-hyys5Y3_HY-csxmBv-IBvMIn4EorMU_uDvWpyjcHhgYbS5DpMPZBKkqbmZ6RPFh7IsrKuclp_9eFeK1prlRiDuaaUgp-mKfN0y1M2Pcc8fuwRm-pudGCCykqLt4Sxr4MVal7bDHzaj7lIoeEs47A9xx4tePGkl5g=w1128-h910-no)

그리고 터미널에서 다시

{% highlight bash %}
$ java
{% endhighlight %}

를 입력하면 잘 설치된 증거로 자바 사용법이 나옵니다.

![5.terminal_java](https://lh3.googleusercontent.com/bNLMH-NqRxRmV39kQ0OmvSEWbIeEKtZggaqgDz442j0YXMRvqj6NpZjIGLFESuMN4NUGB1dEBSkxKZajtTu9gCL8k2sMRTO9s4w92OlAK7d_dj35XlxYky1XRTnFgRAKokz5vyybhh-9V-ivD3n0XCYsEKd5pgcKkpMgTZQfYthZoUiCbkUWBe1YJccbxdqcUkbgdTJa7kQRmm2Tjnch723X2gnMnGb2GV4Y3YsKHG9sTVcz4zqb4DMWC_FAYqYi6NqWnh53sHnOjc17Um0yv1KaAbWvuHQvRd4wCNsCrtwJLVnD8CikZKGQHcR9DwjMQsItMAI_hX6i8f3c8ZOwjipw4hic_x75Cl8CBomgognnxf4kWopy1v3Q-8vVIYo6CCSOELeQnzvk5E5T1uiB299HxFQZ1nWnMgyhVRYUtLNFKeVyv1oK2Pa0NZN93A52KdUP3csVyX2hyXYW09BakufEpza9IPcHWIqNoDUSFb30fg861QJr4Kk7Y_7l7wBBCw9HxQncDPof9dZ-gXGCei2e2oex8ddgJWeKoBhfDjUOZTsOmwEeUqcY3pp-GmeFV_C9RtR13Yecz6FrCVyEaMZvw2_4LUB91MUhPa3lCA=w1686-h1292-no)

java -version을 입력하면 설치된 자바의 버전이 나옵니다.

{% highlight bash %}
$ java -version
{% endhighlight %}

![6.java-version](https://lh3.googleusercontent.com/YcGfD66TN_Ca_2XK2FpZm9Ny-R9P7LEeY6h4dew7rv_RsuRouE7--e9r39w-QLRnCaVgWbg8RxGxSCv78GmOWOzpBXbJY5kofYshg2fitHms2MqYys5wZvxQeNmIuSS0uLq6SRrI_ENsS2eFBGA0s0OAkFuLhIglbEXA9XaxpfdDHmC40aeG1gdWbQJNx6qvf0SBkU85ozmi9X76YEqH6ChvrAOSX7fdsQuyja6LzVakHXZCDXDLE_PJtbCzcGpQgTIhp5yV-qTC8Z8aC8neufMu8xoGd5JhuMS1YueXi_cM4_aqf9MifkbJQa9y23GSKUA1TwL8orxkgR01j_NGh6b7-dDvd3UnrsBl3MywiRiaangtm_t46U3i8pcqhIf6QIhfA1eHcGyW70HLK_pd3yMiXklVr6xriCwGk54SVlUfA5SaO1rk5DhuVQpwg_iPnZLD0hx5V1d8I97Vjju4WpT9FjRZXvB81WlZu9bNiYin33JG8NSgv_t60fmcCz16RmYSrauN4YgUB0xTbye34uO7n6hFy-YwA_zUIPnrx536bMbOzkSJZYdw6xBjF5WbtrKbMoDGSSFX4ahm76bQhDkYDcZ51pg9Rifo7B8ZvA=w1294-h564-no)

<br>

(윈도우에서는 추가로 PATH 설정이 필요합니다! [여기](https://opentutorials.org/module/516/5556) 동영상의 4:00 부터 path설정이 나옵니다.)

<br>


## Hello Java 작성해보기

<br>

Java파일을 만드는데는 아무 텍스트 입력기나 사용해도 됩니다.

윈도우면 메모장, 맥이면 vi도 됩니다.

원래 이클립스라는 좋은 에디터가 있는데,

대부분의 책들이 처음 자바를 공부하는 사람들에게는 추천하지 않습니다.

<br>

저는 'sublime Text'를 이용했고, HelloJava.java 로 파일명을 정했습니다.

확장자는 필히 .java 여야 합니다.

>HelloJava.java
{% highlight java %}
public class HelloJava{
	public static void main(String[] args){
		System.out.println("Hello again, Java!");
	}
}
{% endhighlight %}

저는 약 9년전 수업으로 잠깐 공부해본적이 있어, 'Hello again'이라 붙였습니다.

<br>

## Java 파일 실행

<br>

자바 파일은 다음과 같은 과정을 통해 실행됩니다.

> 코드 작성 -> 컴파일 -> 실행

여기서 컴파일이란 것은, 작성한 코드를 컴퓨터가 이해할 수 있는 컴퓨터 언어로 변환하는 것을 말합니다.

자바의 컴파일은 javac 라는 명령을 통해 시행되고,

결과물로 .class라는 확장자를 가진 클래스 파일이 만들어집니다.

컴파일을 마친 클래스 파일은 JVM(JavaVirtualMachine)에서 읽어서 운영체제에서 실행됩니다.

<br>

그럼 HelloJava.java 파일을 컴파일 하고 실행해 보겠습니다.

![7.run_hellojava](https://lh3.googleusercontent.com/xweaVfnJG6x5iS_oPzpjjjfHjlaqeR2WapZZ6CGRcT_557uduXJMZR_cjT-wtU5lr-_kVNA8PzwyEUMtRlEHdBABAgXcfjAViRtukW3fE3BFo_ozTd6BYLQULhpsrBM1XelEWxOA8QTehPsHns-i_QZpztRvyJPr_p5GEMc5wM_1RaCCifL4PTxXOqDWqjvCjdXRCCmYJwRNXmoe3vMBMKiJEyUzIHk9s5eDIL2bcVyLHWgW9A0sQ_1h8QN4JJMxZcDNBGeF549k2q_zFoNe3GFC9CmV0d9CKi1r26DW-S38IvITzXcly26hvbqeip71WPT5CtnwrvZSUpUjDY21vvC3em74BJnhthOQtRjwp1nhwZJhATT5B6mLD5zVZJ53-6SJBto0dbN1wUx0WsWptki5ZUW20BXSXNcgHHEUC2CipXPPlVi2CkyyWgZ_NaIEZPCZwUP4HwNa-V0l5DHECHH-Y3dzUBcFHTR_fP3FKbHlZ_oU80-CirD7UQ-nWXEnmt3u26b2jSvTTI9Hh3sO-dxXW8LBOwQ9u0Ajm7sTtlzCJqQ5uTbSMeUmfLu40uolxRD3Oj-lxLMHlniTCKnuMW4Qa-YfbbVdIATQ3pJFtQ=w1364-h816-no)

{% highlight bash %}
$ javac HelloJava.java
{% endhighlight %}

javac로 컴파일을 하자 class파일이 생긴걸 확인할 수 있습니다.

<br>

{% highlight bash %}
$ java HelloJava
{% endhighlight %}

java로 HelloJava를 실행하자 main()메소드가 실행되고,

코드에 있던 println이 실행되어

'Hello again, Java!' 문구가 출력되는 걸 볼 수 있습니다.

