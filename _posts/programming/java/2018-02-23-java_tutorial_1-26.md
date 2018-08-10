---
layout: post
title:  "[Java] File(파일 읽고 쓰기)"
date:   2018-02-23 13:50:00
description: Java의 IO(File, FileWriter, FileReader, BufferedWriter, BufferedReader, Scanner)
categories:
- programming
- java
banner_image: /programming/java/java-logo.jpg
comments: true
---

File, FileWriter, FileReader, BufferedWriter, BufferedReader, Scanner

---

## I/O

<br>

I/O는 Input/Output의 줄임말 입니다.

자바에서 I/O관련 패키지는 java.io 입니다.

그 중에서도 File 클래스가 중심이 됩니다.

java.io 패키지 외에 java.nio 패키지도 있긴 하지만

그건 추후에 다뤄보겠습니다.

<br>

이번에는 File 클래스를 이용해서

파일의 속성을 알아보고, 새로 생성하고 삭제하기 등을

해보겠습니다.

<br>
<hr>
<br>

## File 클래스

<br>

File 클래스의 변수와 생성자를 먼저 살펴보겠습니다.

![java_File_Field_Constructor](https://lh3.googleusercontent.com/QZ-qrGB0QGVBlW4TUTFFq9xbQZDWgseEOIWoy71d_FMko5cK28lk0lwERYk_1WZj_zTJXQRHUUNeHzNS1GSyolRD0GvKc_QttGJQ5LOOL3aAYU14xFbzBag1mGO8Cc9aaF10CzSEith1exCqgNHyG2gz0HQ42lC8cY3Dy4dOivD9W0-CwplvCxZ3POJbE-1n9QZaSoBDo5cyMH19tEIv5wJMNijHj6IVjjq1l-Pyv9bbWwQHkFfpn1PSjFVQ98EFEus24mNF8r8ciz5gbQYnqrKkJUQ2n_NDH2h5QqX3NSWodQs7ij0Wm93LCx-b_wROoLu0hOTFhnxJ-N8rZD4aGbSy1FklxSEd2DfCkPgs85KS5knSbHKQlBpr-FtZVJu8xP4y2UKcRaaEUccXN1_t56kFwScBtIkEahyUerOSph-nfL9P_tGBeiq3AYFWWBvLZFWfSmNn1VxbMmwWQmzoCrXdFOqxe-kJGDIEQzJV_jHfQMNJMy3EgP1IS8qWK7_iiXBe-nKr1S6qP6AJEHcvPgaCIBM9eUzm_jFh3LaWOjwJWi9YbbNpjbkUs5wQMhR5KICuNQSxVT9QCL20Yg3EO06BIEEk5WSjSwe6NNs=w1335-h831-no)

그럼 이 생성자를 이용해서 객체를 만들고 사용해보겠습니다.

> FileSample.java

~~~ java
import java.io.File;

public class FileSample {
    public static void main(String[] ar){
        FileSample ex = new FileSample();
        String pathNameWindow = "C:\\onsil\\programming";
        String pathName = "/Users/onsil/game";
        String pathName2 = "/Users/onsil/programming";
        ex.checkPath(pathName);
//        /Users/onsil/game is exist ? false
        ex.checkPath(pathName2);
//        /Users/onsil/programming is exist ? true
    }

    public void checkPath(String pathName){
        File file = new File(pathName);
        System.out.println(pathName + " is exist ? " + file.exists());
    }
}
~~~

main()메소드에서 파일 경로를 String으로 저장하고 있습니다.

pathNameWindow는 실제로 사용하지는 않았지만,

윈도우에서 파일 경로를 어떻게 쓰면 되는지 써봤습니다.(저는 맥환경이라..)

<br>

checkPath()에서 파일경로를 매개변수로 받아

그걸로 File 객체를 만들고, 그 파일(경로)이 실제로 존재하는지를

exists() 메소드로 출력해봤습니다.

(다행히?)game폴더는 없기에 false가 나오고,

programming 폴더는 존재하기에 true가 나옵니다.

<br>

그런데 윈도우와 맥의 파일경로를 보면, 경로를 구분할 때

윈도우는 역슬래쉬( \ )를 사용하고, 맥은 슬래쉬( / )를 사용합니다.

이렇게 OS마다 경로 구분자가 달라 모호한 상황이 발생하기도 하는데

이를 위해 File 클래스에서는 separator라는 변수를 가지고 있습니다.

위의 File 클래스 생성자 그림 부분 나오면 보입니다.

그럼 이를 활용한 예제를 보겠습니다.

> FileSample2.java

~~~ java
import java.io.File;

public class FileSample2 {
    public static void main(String[] ar){
        FileSample2 ex = new FileSample2();
        String pathName = File.separator + "Users" + File.separator + "onsil";
        System.out.println("pathName = " + pathName);
//        pathName = /Users/onsil
        ex.checkPath(pathName);
//        /Users/onsil is exists? true
    }

    public void checkPath(String pathName){
        File file = new File(pathName);
        System.out.println(pathName + " is exists? " + file.exists());
    }
}
~~~

separator를 포함한 File 클래스의 변수는 모두 static 하므로

File.separator 로 접근할 수 있습니다.

아무튼 이걸 사용하여 pathName을 선언하고 출력하니 슬래쉬( / )로 잘 나옵니다.

<br>

이번에는 File 클래스의 여러 메소드를 한꺼번에 사용해보겠습니다.

그전에 먼저 현재 제 자바 코드가 저장되어 있는 폴더를 보여드리겠습니다.

![no_temp1](https://lh3.googleusercontent.com/ILaUrMAWa1aJWj1jxVOoIVrD049ptuerYrHzIjXRgRyH_9of4ADAxWPWJyHXM5v9d_mn8-n8x7poNQyYPL5iLoQ0QW3k-fyc1hMQZcKM-eWPPMYALYtsDFQqCqy2WxTWjFjshnTH2Qt2ClJqklIfPPgHi2VxHjtXR7LS1iBCmykCiAuGw4k5iRr1HKe4PTaxU9BM6sKXGjWv67n71qN0dgosgDatZk9GZCw3iRrfeSQuSp4QWbfLE3YQUUijA_bJBGDCDTZ8d77MmaUXFIR2CEGBNfizDKVrOFq4lc4lexoDohX-hf9FPND_K05rhOeRB0hjpLWKB_zHY2BODh0kAsanH8Tzx4J-Uu8a7EGYQixXicYwEH7sUFcg0KSs9PX6GDWFT-Kwt2Mjt1c1b-1cgLarHZ_36gNF98tpc77IQ-cAKJM_FFI-Orw0ed3p6XM1FJysVr-1L80nOfrSd6A1KnC8JE0cYBpuDHCRkThekhbkJz3aUNePprcnYXmdN6o4xhLp3ad1SnC2i1rU8PI-SGDlNxotLckeGjuQYDA_79vSQkyT_C-Thr2VU8tNhH7VemlG7xFt_kixyeHKtxASoW3aUrkphmrLC2waONY=w1335-h836-no)

여기서는 **src 폴더에 temp1이란 폴더가 없다** 는 것만 기억하시면 됩니다.

> FileSample3.java

~~~ java
import java.io.File;

public class FileSample3 {
    public static void main(String[] ar){
        FileSample3 ex = new FileSample3();
        String pathName = "src" + File.separator + "temp1";
        ex.checkPath(pathName);
//        src/temp1 is exists ? false
        ex.makeDir(pathName);
//        Make /Users/onsil/programming/java/intellj_default/ch26/src/temp1 -> true
        ex.checkPath(pathName);
//        src/temp1 is exists ? true
        ex.checkFileMethod(pathName);
        // 메소드 내용부분에 주석으로 출력값 적어놓음

//        ex.deleteFileMethod(pathName);
    }

    public void checkPath(String pathName){
        File file = new File(pathName);
        System.out.println(pathName + " is exists ? " + file.exists());
        System.out.println();
    }

    public void makeDir(String pathName){
        File file = new File(pathName);
        System.out.println("Make " + file.getAbsolutePath() + " -> " + file.mkdir());
        System.out.println();
    }

    public void checkFileMethod(String pathName){
        File file = new File(pathName);
        System.out.println(file.getAbsolutePath() + " is directory ? " + file.isDirectory());
        System.out.println(file.getAbsolutePath() + " is file ? " + file.isFile());
        System.out.println(file.getAbsolutePath() + " is hidden ? "  + file.isHidden());

        System.out.println(file.getAbsolutePath() + " can read ? " + file.canRead());
        System.out.println(file.getAbsolutePath() + " can write ? " + file.canWrite());
        System.out.println(file.getAbsolutePath() + " can execute ? " + file.canExecute());

        System.out.println(file.getAbsolutePath() + " last modified ? " + file.lastModified());
        
//        /Users/onsil/programming/java/intellj_default/ch26/src/temp1 is directory ? true
//        /Users/onsil/programming/java/intellj_default/ch26/src/temp1 is file ? false
//        /Users/onsil/programming/java/intellj_default/ch26/src/temp1 is hidden ? false
//        /Users/onsil/programming/java/intellj_default/ch26/src/temp1 can read ? true
//        /Users/onsil/programming/java/intellj_default/ch26/src/temp1 can write ? true
//        /Users/onsil/programming/java/intellj_default/ch26/src/temp1 can execute ? true
//        /Users/onsil/programming/java/intellj_default/ch26/src/temp1 last modified ? 1519386789000

        System.out.println();
    }

    public void deleteFileMethod(String pathName){
        File file = new File(pathName);
        System.out.println("delete " + file.getAbsolutePath() + " ? " + file.delete());
    }
}
~~~

일단 main()메소드에 pathName 선언부터 보겠습니다.

이번에는 처음 시작할 떄 File.separator로 시작하지 않았습니다.

File.separator로 시작하면 파일 경로가 정말 파일 시스템의 루트 디렉토리부터 시작합니다.

윈도우로 치면 "C:\\", "D:\\" 처럼 되겠죠.

맥의 루트 디렉토리는 그냥 "/"입니다.

File.separator로 시작하지 않으면 현재 위치에서 시작합니다.

제가 저 FileSample3.java 를 작성한 프로젝트는 ch26 폴더입니다.

즉, 저 pathName으로 만든 File 객체는 

현재위치(/Users/onsil/programming/java/intellj_default/ch26)/src/temp1

을 참조하게 됩니다.

<br>

처음에 checkPath() 메소드를 호출했을 땐, temp1폴더가 없었으므로 false가 리턴됩니다.

다음에는 makeDir() 을 호출하여 temp1을 만들고 있습니다.

잘 만들어졌다는 의미로 true가 리턴됩니다.

![make_temp1_folder](https://lh3.googleusercontent.com/CX-z5CL1FGKutwa2VtrMBsPiDPZvSGE3abqgCSv8jqAZdcB_Sh32X7cSWrGXTsPDJNmb9L09_0s-q791PJCJcmEE-SZeBotRgIByQQTMda3RfDQ4tCF-VgEKZErcWIdNde_tKEhF-KjMDZWYgvLUQoBVKm_rlSvNEmDz_vyQ10qgihDMiSMEDmUx0YI1GyRWCA2lFydnX2jd4ywbI_qAYle-e3yKSxkPgr8waCEiC63ylDPlsQgteJegspof9P6l3h_RH9ZJsPLa6rt-Lz2kVfWnlYreCluPaNlhtnJktXIokE-gxlXC9LLq0Xz98d7v_TSNWzur2jksCvPtiANiPD3s5Qk6KCCT5wHXKCwa-0BMf0XekE3JAXPRkcA3Aynpf94yzD6AUGeNkRF7zQsaDQatHHqUqqKhe80-a6AUrdW_3mmYiRSjL7IY_8fSSOOF57np2bwJN3y7s6OzJtSLIxqwh36jRmiQq-oOcR4WDNXvmChjRT9qOBN86SdHtYVjtDlzsrXMUH3l7z4iJWCpC6E3dnlrzqYro4iI71tdff8TBwIgtFJ712kV7bs1UqJs8R8tXP9bBtPojcIgZ3hUmzYsjnHmxSiPGVwNkKA=w1335-h836-no)

그 후 checkPath()를 다시 호출했더니, 이제는 temp1 폴더가 존재하므로 true가 리턴됩니다.

<br>

checkFileMethod()에서는 File 객체의 속성을 알아보는 메소드를 호출하고 있습니다.

폴더인지, 파일인지, 숨김파일인지, 읽기가능인지, 쓰기가능인지, 실행가능인지, 언제 마지막으로 수정됐는지...

API를 보면 자세한 설명이 나와있습니다.

<br>

마지막으로 deleteFileMethod()는 delete()를 이용하여

파일이나 폴더를 삭제하는 메소드 입니다.

main()에서는 이 메소드 호출을 주석처리 해놨습니다.

<br>

이번에는 폴더가 아닌 파일을 처리해 보도록 하겠습니다.

> FileManageClass.java

~~~ java
import java.io.File;
import java.io.IOException;

public class FileManageClass {
    public static void main(String[] ar){
        FileManageClass ex = new FileManageClass();
        String pathName = "src" + File.separator + "temp1";
        String pathName2 = "src" + File.separator + "temp2" + File.separator + ".." + File.separator + "temp1";
        String fileName = "test.txt";

        ex.checkFile(pathName, fileName);
//        Create result = true
//        Absolute path = /Users/onsil/programming/java/intellj_default/ch26/src/temp1/test.txt
//        Absolute file = /Users/onsil/programming/java/intellj_default/ch26/src/temp1/test.txt
//        Canonical path = /Users/onsil/programming/java/intellj_default/ch26/src/temp1/test.txt
//        Canonical file = /Users/onsil/programming/java/intellj_default/ch26/src/temp1/test.txt
//        getName() = test.txt
//        getPath() = src/temp1/test.txt
//        Parent = src/temp1
        System.out.println("-----------------");
        ex.checkFile(pathName2, fileName);
//        Create result = false
//        Absolute path = /Users/onsil/programming/java/intellj_default/ch26/src/temp2/../temp1/test.txt
//        Absolute file = /Users/onsil/programming/java/intellj_default/ch26/src/temp2/../temp1/test.txt
//        Canonical path = /Users/onsil/programming/java/intellj_default/ch26/src/temp1/test.txt
//        Canonical file = /Users/onsil/programming/java/intellj_default/ch26/src/temp1/test.txt
//        getName() = test.txt
//        getPath() = src/temp2/../temp1/test.txt
//        Parent = src/temp2/../temp1

    }

    public void checkFile(String pathName, String fileName){
        File file = new File(pathName, fileName);
        try{
            System.out.println("Create result = " + file.createNewFile());
            getFileInfo(file);
        }catch(IOException e){
            e.printStackTrace();
        }
    }

    public void getFileInfo(File file) throws IOException{
        System.out.println("Absolute path = " + file.getAbsolutePath());
        System.out.println("Absolute file = " + file.getAbsoluteFile());
        System.out.println("Canonical path = " + file.getCanonicalPath());
        System.out.println("Canonical file = " + file.getCanonicalFile());

        System.out.println("getName() = " + file.getName());
        System.out.println("getPath() = " + file.getPath());

        System.out.println("Parent = " + file.getParent());
    }

}
~~~

일단 main()메소드에서 ex.checkFile(pathName, fileName)만 보시면 됩니다.

pathName은 아까 생성한 temp1 폴더의 경로를 나타내고 있고, 

fileName은 새로 생성할 텍스트 파일을 나타내고 있습니다.

checkFile()메소드에서는 이 두 매개변수로 File객체를 만들고 있습니다.

매개변수가 String, String이니 3번쨰 생성자를 사용한게 됩니다.

이 File 객체는 결국 

/Users/onsil/programming/java/intellj_default/ch26/src/temp1/test.txt

이 경로를 참조하게 됩니다. 두 매개변수가 더해진 격이네요.

<br>

그 다음 try-catch문에서 createNewFile() 메소드를 호출해

해당 경로에 test.txt를 생성하고 있습니다.

굳이 try-catch로 묶은 이유는... API에도 나와있듯이

예외처리를 하기 위함입니다.

![java_createNewFile](https://lh3.googleusercontent.com/NDVwl4hm1uBihrXLjASMnLTECMPSPWoPVvLgIdVwZsJO2aJkl4cC3gkQhEWwV8OQqlT9RANLtqlkOt1ktjwUVHljU_isWG7u_qli8j2EXEIKmmmZ1GTxo0on-qarEcr65phLC21JypwcLhp8ZsYcC6dM7dNfDOcb18Eqg-0Vrgd4uaqQBcjlCthwe1P7obrdGuGZh2wO_lSkaEuWMQevUYfs2OOE3MUrlrrFv6n89VzB9Nb_aR8I0ofPQ8cBt3edjqMydzTWrLQmULYp3hlpe9OhPQm7zOZUgr2SNlhBYq-n3za0KgOm-FxMx6Btfr3nK6I7z6zAGo30z8fglXaLdTc9XBwdY499w2KPS3vPEwCN2i6_rE63EsTxWhrgoE82KN5TNfCiQhi9QYDjPhU_t8qRWsPeH0WCvD9imUvqa0oYYyEmkUEWmj4X2olFF2TM89v1GW47y09Yg5sdu5-PqzmwM5q2-a134XXyExXhm7aigm2rqADIeUrfq1XlDFd55vz28ukfX9BfuZev-BP7AMWFs6UAp0s7ug0FA-FnFyC1W7Pt38GhPf9O69bONfKpcZpijLLG9OavSLWZKxA1qq2z3vIom89XB_eKZNI=w1335-h344-no)

예외처리를 안해주면 안해줬다고 예외가 발생합니다.

그 다음엔 getFileInfo()를 호출해서 각종 정보를 출력하고 있습니다.

각 메소드에 대한 자세한 설명은 API 문서에 나와있습니다.

<br>

다시 main() 메소드를 보면, 그 다음엔 ex.checkFile(pathName2, fileName)을

실행하고 있습니다.

여기서 pathName2를 보면 temp2폴더인척 하다가 .. 으로 뒤로가기 후, 다시 temp1을 가리키고 있습니다.

그니까 결국엔 pathName과 똑같은 말입니다.

하지만, 이미 temp1 폴더에는 아까 생성한 test.txt가 있으므로,

createNewFile()은 false를 리턴합니다.

그럼 왜 굳이 pathName2로 똑같은 메소드를 또 실행했냐 하면

getAbsolutePath()와 getCanonicalPath()의 차이점을 보여드리기 위함입니다.

pathName 같이 그냥 **절대경로**인 경우에는 둘다 똑같은 값은 리턴합니다.

하지만 pathName2는 경로에 .. 이 들어가는 **상대경로**입니다.

이때 getAbsolutePath()는 상대경로를 그대로 리턴하지만,

getCanonicalPath()는 절대경로로 바꿔서 리턴하는 걸 볼 수 있습니다.

<br>

그리고 참고로 getAbsolutePath()와 getAbsoluteFile()이

출력값이 같아서 뭐가 다른지 모를수도 있는데, 

Path는 String을 리턴하고, File은 File 객체를 리턴합니다.

<br>

이번에는 File 클래스의 메소드를 이용해서

해당 경로에 있는 파일 리스트를 뽑아보겠습니다.

> FileListSample.java

~~~ java
import java.io.File;

public class FileListSample {
    public static void main(String[] ar){
        File[] fileList1 = File.listRoots();
        for(File tempFile: fileList1){
            System.out.println(tempFile + ", ");
        }
//        /,

        String pathName = "src";
        File file1 = new File(pathName);
        String[] strList1 = file1.list();
        for(String tempStr: strList1){
            System.out.print(tempStr + ", ");
        }
//        temp3, temp2, .DS_Store, ManageTextFile.java, FileSample.java, FileListSample.java, FileListSample2.java, FileSample3.java, temp1, FileManageClass.java, FileSample2.java, JPEGFileFilter.java, ManageTextFile3.java, JPEGFilenameFilter.java, ManageTextFile2.java,

        System.out.println();

        File[] fileList2 = file1.listFiles();
        for(File tempFile: fileList2){
            System.out.print(tempFile + ", ");
        }
//        src/temp3, src/temp2, src/.DS_Store, src/ManageTextFile.java, src/FileSample.java, src/FileListSample.java, src/FileListSample2.java, src/FileSample3.java, src/temp1, src/FileManageClass.java, src/FileSample2.java, src/JPEGFileFilter.java, src/ManageTextFile3.java, src/JPEGFilenameFilter.java, src/ManageTextFile2.java,
    }

}
~~~

일단 fileList1은 listRoots() 즉, 아까 잠깐 이야기했던

파일 시스템의 루트 디렉토리 목록을 리턴합니다.

저는 맥을 사용하고 별다른 설정을 안해놔서

기본 루트 디렉토리인 / 만 나왔습니다.

<br>

strList1과 fileList2에 쓰인 list()와 listFiles()는 모두 

해당 경로에 있는 폴더, 파일들을 배열로 리턴합니다.

다만 list()는 String[], listFiles()는 File[]을 리턴합니다.

<br>

그런데 이런 경우가 생길 수 있습니다.

한 폴더에 있는 많은 파일들 중에서

특정 문자열이 들어간 파일만 리스트로 뽑고싶다거나,

특정 확장자를 가진 파일만 리스트로 뽑고싶은 경우!

이떄는 이 두 메소드를 사용하면 됩니다.

![Java_FileFilter_FilenameFilter](https://lh3.googleusercontent.com/6CuOhoYbJ7R2HWi-of3u6hLB4BpuTW_Lr-9ShL23KcdUPb--XyVwUOHqmccizvbeLuo8wR80vDjRHlfgh2Urp4X5beX-SRgRo9kr9mHiqYWPYvFq41KeylZ8nwrXoPqJi5-zMOFESpbTVE0qnZ2e-OPsvzR5_Y_58kwR7D-5G6DIEGPxWBxaWNSndc-5jiTwTHJrygfhgkX26SYnGBPt_GQTocMypJmPi6wMEYDORaq_iqZfDdrX3o0h2B5d0W1InRmDrb5OslwGiAEpQDx8w3HVRzAfYUE0W8CJWPrHkZ-RV7bpQ4kz8-f18QYeqHFh2RTfQ5LwKdMMdYKh1WC9e9-9xVwGo6hWerdwNx13NZ2rFKIOIAXZGIz5D2lLc2BSdFLuDB_I4j0-kABH2F4MGAc1NvDLdbs_HpJR-Z-DLEVl24tpAoazTJZHhHMbr6WTOujkXGJuR6MpEPHqBHlljRLYqc_xR3cTwmHp7kXa0kXAUJXybF10wOcnQYfhsu97TWhyXNtuk2VIaS7llbRomDVgZw6sco7TgY-y1MEQTaUoE0V4myjuGZkAmtxC8tUTu5quM_PyF4CTr_6erdRM-iJkb-r6Vtmcy5Uwezk=w1335-h114-no)

매개변수로 FileFilter 객체와 FilenameFilter 객체가 들어갑니다.

이름에서도 감이 오듯이 FileFilter가 특정 확장자로 필터링을 시켜주고

FilenameFilter가 특정 문자열을 가진 파일들을 필터링합니다.

먼저 FileFilter 문서에 들어가보면 accept()라는 메소드 하나가 있는 인터페이스입니다.

즉, FileFilter를 이용하려면 우리가 직접 accept()를 구현해야합니다.

다음으로 FilenameFilter 문서에 들어가보면 여기도 상황은 같습니다.

즉, FilenameFilter를 이용하려면 우리가 직접 accept()를 구현해야합니다.

<br>

제가 이 두 클래스를 테스트해볼 폴더는 이곳입니다.

![temp2](https://lh3.googleusercontent.com/aaN7dsTvQUguPl8zm4sLSMj0sBItcp4SLQwa5GcGMbf2jtiovkEZQtjR2yMmSwuUv1OB8L9sv-ug-_sv6_dXPk2vFo7irb59c4v1W6w0O7QPxqg_cyWGH-MACTatKM8qnkoaVKmCCnwhkvaFBln2JKCVyp2d0_d_ZEpS0H4_JCuQwq5JvWDovXQefenhZDTCM0PuxipzDylLeRg-xaBLM6Dw48rl4RWLe1seCvD4kdq3EQPDbMbKksUnlLMrwAkjOdjri2CCUxYtqHCeJ-x7o7hWeep5ClZdPTA-MdLo7SiYVg7Y6yFu9D3f99AZ8J-TdC7jpFqJvvY2VZh5JulJxEyYgNMFFruKxBCFBHi35IxQyFlRJDWIu23DxbNqJZ5Ybm_i3N874gy3yU5UAtXhLW4oq9Z4S_6rcbbkU4FOpKE1vfwTz1z5FXzMIORfW3xIBRMMbG6hDYbCNqWvy6gxH_1qRNLvemQ9d2q2QFhHxc22eKzQx7Ai6ZAa0I9ORnN3zX3rBwGNLu8bzOHCPygLcEnStFOfcf0hnymJaHRehteXMQWzXb_YEd317qqEwwQmI9wzRj3sxpFe41ABlnQouRn2wcIcyOV5rnJ7X9I=w1335-h836-no)

1개의 폴더와 2개의 jpeg, 1개의 jpg, 1개의 png 파일이 있습니다.

여기서 jpeg만 뽑아내도록 accept를 구현해보겠습니다.

>JPEGFileFilter.java

~~~ java
import java.io.File;
import java.io.FileFilter;

public class JPEGFileFilter implements FileFilter{

    @Override
    public boolean accept(File pathName){
        if(pathName.isFile()){
            String fileName = pathName.getName();
            if(fileName.endsWith(".jpeg")){
                return true;
            }
        }
        return false;
    }
}
~~~

매개변수로 받은 File 객체가 폴더가 아니라 파일인지 먼저 확인하고

파일명이 .jpeg로 끝나면 true를 리턴하도록 작성했습니다.

<br>

>JPEGFilenameFileter.java

~~~ java
import java.io.File;
import java.io.FilenameFilter;

public class JPEGFilenameFilter implements FilenameFilter{

    @Override
    public boolean accept(File dir, String name){
        if(name.endsWith(".jpeg")) return true;
        return false;
    }
}
~~~

여기서는 매개변수로 받은 File 객체가 뭐든간에

파일명인 name이 .jpeg로 끝나기만 하면 true를 리턴하도록 작성했습니다.

이제 jpeg 파일만 뽑아보겠습니다.

> FileListSample2.java

~~~ java
import java.io.File;

public class FileListSample2 {
    public static void main(String[] ar){
        FileListSample2 ex = new FileListSample2();

        String pathName = "src" + File.separator + "temp2";
        ex.checkList(pathName);
    }

    public void checkList(String pathName){
        File file = new File(pathName);
        File[] fileList1 = file.listFiles();
        for(File tempFile: fileList1){
            System.out.print(tempFile + ", ");
        }
//        src/temp2/.DS_Store, src/temp2/folder.jpeg, src/temp2/merry&milk.jpeg, src/temp2/no_reason.jpg, src/temp2/milkOnTheTable.jpeg, src/temp2/no_reason2.png,
        System.out.println();

        File[] filelist2 = file.listFiles(new JPEGFilenameFilter());
        for(File tempFile: filelist2){
            System.out.print(tempFile + ", ");
        }
//        src/temp2/folder.jpeg, src/temp2/merry&milk.jpeg, src/temp2/milkOnTheTable.jpeg,
        System.out.println();

        File[] filelist3 = file.listFiles(new JPEGFileFilter());
        for(File tempFile: filelist3){
            System.out.print(tempFile + ", ");
        }
//        src/temp2/merry&milk.jpeg, src/temp2/milkOnTheTable.jpeg,
        System.out.println();
    }
}
~~~

첫번째 fileList1은 그냥 listFiles()를 사용했습니다.

그랬더니 숨김파일 하나 포함해서 모든 폴더와 파일들이 리스트로 리턴됩니다.

<br>

두번째 filelist2는 listFiles(new JPEGFilenameFilter())를 사용했습니다.

그랬더니 .jpeg로 끝나는 폴더도 리스트로 리턴됩니다.

<br>

세번째 filelist3는 listFiles(new JPEGFileFilter())를 사용했습니다.

그랬더니 이번에는 .jpeg로 끝나는 파일만 리스트로 리턴됩니다.

아까 accept()구현할 때 파일인지 폴더인지 확인 먼저 했기 때문입니다.

<br>
<hr>
<br>

## Reader, Writer

<br>

이번에는 텍스트 기반의 파일을 다루는

Reader와 Writer 클래스를 알아보겠습니다.

Reader와 Writer는 char 기반의 문자열을 처리하기 위한 클래스 입니다.

<br>

먼저 Reader 클래스부터 살펴보겠습니다.

![Java_Reader](https://lh3.googleusercontent.com/cOMnAq-62aghhACJG6ngyPaIa1C0VQuc0K808hyiGGRDytBkYMeUEqBR04lKAbbtJhnjz9EtgYeM46cgbpG3fqeKWkFL4tg3mwYI7jQIxRKIBUtBOg5F3A00-VIZJfaZC_i12vNyROn1RrGdXDjHS3yzrGtvkmZDVTK1Fp9iLuZPJmnY1yH_FOSa743tpc_nTf1e1stpokZvsvi5yz44ZVuxgUROrdvDo74M94ZDeHDoYjAxard8i4P7aTXfi89I8X8B2X1ebgn-wgJRUl0AUDRjsbIZyLpWVsTL4BfsoQSXDdldiERmVHljXVDShRUI1--DlYF2IDznM40WlwsYcZk6V3JYdjM14OYvZMw0-vL1M2Wo-W8Sksar68_SS6Dm0nlgy2CeYPzGSwLYNSIxaNjguEH9iPdBiT3UaqMGBrK0YmdaovH9dFozeuARhtcrxvO4107wWtHuwMGPybb-pqy69pnIyshu95G7np-mZZoV6tIMfznqmlizw4CLW6vUtJ5GZGWO1jJh1nym_QVy4Y6fVA_XyFm6vVKgq4qgheGX1onw8uvrVdDFLIlr54sXB-a8gaP22K0OUhGWYgjp9Q92qAlSb4hkAhuMeuU=w1202-h582-no)

위에서 볼 수 있듯이, Reader 클래스를 확장한 클래스들은 6개가 있습니다.

이 중, 가장 많이 쓰이는건 BufferedReader와 InputStreamReader이고

여기서는 BufferedReader을 살펴보겠습니다.

<br>

다음으로 Writer 클래스를 살펴보겠습니다.

![Java_Writer](https://lh3.googleusercontent.com/cfWvtbcQIXkGRjoHGcfMlFk-J0jiCbCSkg12ZQObNB0mX83ZJcQHDnOvAVYTJVZNG2ojj2fU-0_Osjwv5hE8E-ZiRDIbqlX7mZ63zF8z1fIWJ5faPL7fW59ktl8qgzzgkEuBl0OcZgjmkfyuY2BI-aKk9k8qmmIxEHb9CWNhHxFE3S7H1Ibko8Ni9tqQQXHiA-67WpYvEdefDmi0aLzZ0U7-rtqohthRN0ehY1nEqtKWiK6cuKx3ESc0Z9YbkNiY7imdm9xt9aRZaIHkgE0pCJpPmuzyPQV4TH0R8MXy7L9bIrgT6K_Ck2qmMKXDQBZTPb0rR3pE7sRKVisW7ruFlhcWI1GwxpQAeaC8MNzxIBM6zZFNYlz6jTAQtLX-qbztX1_FVqBjtuxrzq1OS_H8TVD1jXCmP6bi9HvtV3RuuQZKISPOgqGiGYHxcmfUYdoBMDURwSbGzqNWA82R0P4IKAUrG8fx6g_tT05nSRk7Cu3ybLoRSyRIZNaVIt46G2odVf_a2Mc57tvA1fOsuAibRXmOy5x2jJHF4MDXKgimgb-k_w7s_veG6uxM0YvWlD_OQFMgRLtESPteJSRjIIovU78VneXglocHhd-RZLI=w1228-h584-no)

Writer 클래스를 확장한 클래스 중에서는 FileWriter 클래스가 많이 쓰이고,

여기서도 이에 대해 알아보겠습니다.

구현한 인터페이스를 보면 Flushable과 Appendable이 있습니다.

먼저 Flushable에 대해 알아보겠습니다.

예를 들어 어떤 파일에 쓰기 작업을 할 때,

쓰기작업을 요청할 때마다 파일에 쓰고 저장을 하면 효율이 안좋아집니다.

한꺼번에 모아놨다가 한번에 쓰고 저장하는게 훨씬 낫겠죠.

이를 위해 자바에서는 쓰기 요청이 들어오면

이를 buffer라는 공간에 저장을 해놓다가

buffer가 어느 정도 차면 그때 저장된 데이터를 한꺼번에 파일에 씁니다.

그런데 Flushable 인터페이스에 선언된 flush()라는 메소드는

현재 buffer에 저장된 내용을 바로 파일에 쓰게합니다.

여러 상황에서 flush()를 사용할 수 있을 것 같습니다.

<br>

Appendable은 파일에 append() 메소드를 이용하여

CharSequence를 추가하기 위함입니다.

CharSequence를 구현한 클래스로는 StringBuilder와 StringBuffer가 있었죠.

String으로 된 문자열을 파일에 쓸 때는 write() 를 사용하면 되지만

StringBuilder나 StringBuffer로 된 문자열을 쓸 때는

append()메소드를 이용하는게 좋습니다.

<br>

그리고 Reader와 Writer 모두가 공통으로 구현한 인터페이스가 있는데

Closeable, AutoCloseable

입니다. 이름만 봐도 AutoCloseable은 

자동으로 Closeable 해주는 거 같습니다.

Closeable 인터페이스를 들어가보면 close() 메소드 하나가 선언되어 있습니다.

이 Closeable 인터페이스를 구현한 클래스를 사용할 때는

작업이 끝나면 무조건 close() 메소드를 이용해 닫아주라는 말입니다.

<br>

이제 Reader와 Writer에 대해 알아봤으니

실제로 파일을 쓰고, 읽어보겠습니다.

<br>

### 텍스트 파일 쓰기(FileWriter, BufferedWriter)

<br>

바로 예제를 살펴보겠습니다.

> ManageTextFile.java

~~~ java
import java.io.File;
import java.io.FileWriter;
import java.io.BufferedWriter;
import java.io.IOException;

public class ManageTextFile {
    public static void main(String[] ar){
        ManageTextFile ex = new ManageTextFile();
        int numberCount = 10;
        String pathName = "src" + File.separator + "temp3" + File.separator + "numbers.txt";
        ex.writeFile(pathName, numberCount);
//        Write Success
    }

    public void writeFile(String fileName, int numberCount){
        FileWriter fw = null;
        BufferedWriter bw = null;
        try{
            fw = new FileWriter(fileName);
//            fw = new FileWriter(fileName, true);
            bw = new BufferedWriter(fw);

            for(int loop=0; loop<=numberCount; loop++){
                bw.write(Integer.toString(loop));
                bw.newLine();
            }
            System.out.println("Write Success");
        }catch(IOException e){
            e.printStackTrace();
        }catch(Exception e){
            e.printStackTrace();
        }finally{
            if(bw != null){
                try{
                    bw.close();
                }catch(IOException e){
                    e.printStackTrace();
                }
            }

            if(fw != null){
                try{
                    fw.close();
                }catch(IOException e){
                    e.printStackTrace();
                }
            }
        }
    }
}
~~~

writeFile() 메소드를 살펴보겠습니다.

try문을 살펴보면 fw라는 FileWriter 객체를 만들고

bw라는 BufferedWriter 객체에 매개변수로 fw를 넣고있습니다.

그리고 bw를 이용해 텍스트를 입력하고 있습니다.

이는 위에서 Writer가 구현한 Flushable 인터페이스를 볼 때 설명했던 방식입니다.

<br>

pathName에서 설정한 대로 temp3 폴더에 numbers.txt가 만들어졌습니다.

참고로 try문에 주석처리된 fw = new FileWriter(fileName, true); 같이

true를 매개변수로 넘겨주게 되면 이 numbers.txt에 또 뭔가를 쓸 때,

기존에 저장돼 있는 데이터가 날라가지 않고, 그 다음에 또 써내려나가게 됩니다.

<br>

그리고, fw = new FileWriter(fileName) 부분이나

bw.write() 부분에서 IOException이 발생할 수 있으므로,

꼭 예외처리를 해줘야 합니다.

finally부분에서는 위에서 설명한 close()를 통해 

열었던 객체를 닫아주고 있습니다.

bw에 fw를 매개변수로 넣어줬으니, 먼저 bw를 닫고 fw를 닫아줘야겠죠.

<br>

이번엔 방금 쓴 numbers.txt를 읽어보겠습니다.

> ManageTextFile2.java

~~~ java
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

public class ManageTextFile2 {
    public static void main(String[] ar){
        ManageTextFile2 ex = new ManageTextFile2();
        String filePath = "src" + File.separator + "temp3" + File.separator + "numbers.txt";
        ex.readFile(filePath);
    }

    public void readFile(String filePath){
        FileReader fr = null;
        BufferedReader br = null;

        try{
            fr = new FileReader(filePath);
            br = new BufferedReader(fr);

            String data;

            while((data=br.readLine()) != null){
                System.out.print(data + " ");
            }
//            0 1 2 3 4 5 6 7 8 9 10
            System.out.println();
            System.out.println("Read success");
//            Read success
        }catch(IOException ioe){
            ioe.printStackTrace();
        }catch(Exception e){
            e.printStackTrace();
        }finally{
            if(br != null){
                try{
                    br.close();
                }catch(IOException ioe){
                    ioe.printStackTrace();
                }
            }
            if(fr != null){
                try{
                    fr.close();
                }catch(IOException ioe){
                    ioe.printStackTrace();
                }
            }
        }
    }
}

~~~

파일을 읽을 때도 쓸 때와 마찬가지로

buffer를 이용해서(BufferedReader) 읽어주면 됩니다.

<br>

while문을 보면 ((data=br.readLine()) != null)이라고 되어있는데 

이는

data = br.readLine();

data != null

이 두줄과 같은 말인데, while문의 조건문에는 한줄밖에 못쓰므로

이렇게 줄인 것입니다.

<br>

여기도 유의할 점은 예외처리와 close()를 통해 

객체를 닫아줘야 한다는 것입니다.

<br>

파일을 읽을 때, BufferedReader 대신

java.util.Scanner 클래스를 사용할 수도 있습니다.

Scanner 클래스를 사용하면 코드의 가독성이 조금 더 높아집니다.

> ManageTextFile3.java

~~~ java
import java.io.FileNotFoundException;
import java.util.Scanner;
import java.io.File;

public class ManageTextFile3 {
    public static void main(String[] ar){
        ManageTextFile3 ex = new ManageTextFile3();
        String filePath = "src" + File.separator + "temp3" + File.separator + "numbers.txt";

        ex.readFileWithScanner(filePath);
    }

    public void readFileWithScanner(String filePath){
        File file = null;
        Scanner scanner = null;
        try{
            file = new File(filePath);
            scanner = new Scanner(file);

            while(scanner.hasNext()){
                System.out.print(scanner.nextLine() + " ");
            }
//            0 1 2 3 4 5 6 7 8 9 10
            System.out.println();
            System.out.println("Read success !!");
//            Read success !!
        }catch(FileNotFoundException fnfe){
            fnfe.printStackTrace();
        }catch(Exception e){
            e.printStackTrace();
        }finally{
            if(scanner != null){
                scanner.close();
            }
        }
    }
}
~~~

사용법은 BufferedReader와 거의 비슷합니다.