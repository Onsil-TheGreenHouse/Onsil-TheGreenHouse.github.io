---
layout: post
title:  "[Django tutorial] Ch3-2. Django의 Form 기능"
date:   2017-10-01 00:00:00
description: 3-2. Django의 Form Class
categories:
- programming
- django
- web_programmig
banner_image: /programming/django/python-django-logo.jpg
comments: true
---

간단한 Poll(투표) 앱 만들어보기 - 장고의 Form 클래스

---

## Form 기능이란?

<br>

일단 Form이란 것은 html에서 Form 태그를 생각하시면 됩니다.

우리는 polls앱 구현을 통해,

vote.html에서 form 태그를 사용하여 데이터를 입력받았고,

이 Form데이터를 vote_process 함수에서 처리했었습니다.

<br>

이러한 Form데이터의 적절한 예가 회원가입 페이지 인데요,

아이디(char), 비밀번호(char 혹은 integer), 생년월일(integer 혹은 date)...등등

여러 가지 타입의 데이터의 입력칸을 만들거나, 입력된 데이터를 받아야합니다.

<br>

장고는 이러한 폼 기능들을 단순화하고 자동화 해줍니다.

다음은 장고가 폼 처리를 위해 제고하는 3가지 기능입니다.

>1. 폼 생성에 필요한 데이터를 폼 클래스로 구조화
2. 폼 클래스의 데이터를 렌더링하여 HTML 폼 만들기
3. 클라이언트(사용자)로부터 제출된 폼과 데이터를 수신하고 처리

<br>

그럼 간단한 장고의 폼 클래스 예제를 만들어보겠습니다.

views.py에 다음을 추가해줍니다.

>polls/views.py
{% highlight python %}
from django import forms


class NameForm(forms.Form):
    # Char 필드를 생성, 기본위젯은 TextInput
    favorite_name = forms.CharField(label='Favorite Name', max_length=100)

    # 기본 위젯을 바꾸려면 아래와 같이 widget을 변경
    # favorite_name = forms.CharField(label='Favortie Name', max_length=100, widget=forms.Textarea)


def form_class_ex(request):
    # POST 방식이면, 데이터가 담긴 제출된 폼으로 간주
    if request.method == 'POST':
        # request에 담긴 데이터로, 클래스 폼 객체를 생성
        form = NameForm(request.POST)

        # 클래스 폼 객체의 데이터가 유효한지 체크
        if form.is_valid():
            # 폼 데이터가 유효하여 is_valid()가 True를 리턴하면,
            # 유효한 폼 데이터는 form.cleaned_data에 dictionary형태로 저장됨
            new_name = form.cleaned_data['favorite_name']
            print('new_name = ', new_name)

            # 새로운 url로 리다이렉션
            return HttpResponseRedirect('/polls/form-class-ex-thanks/')

    # POST 방식이 아니면 (보통 GET)
    # 빈 폼을 브라우저에 보여줌
    else:
        # 위에서 작성한 NameForm() 폼 클래스 객체를 랜더링
        form = NameForm()
        context = {'form': form}

    return render(request, 'polls/form_class_ex.html', context)
{% endhighlight %}

먼저 django.forms.Form 클래스를 상속받아,

NameForm이라는 폼 클래스를 작성합니다.

<br>

form_class_ex 함수에서는 method에 따라 다르게 작동합니다.

꼭 그런건 아니지만 request.method는,

데이터를 읽을 때는 GET

데이터를 생성할 때는 POST

데이터를 수정할 때는 PUT

가 됩니다.

즉, POST방식이라는 것은 데이터를 생성하기 위해

사용자가 입력한 Form데이터가 수신된 상태이고,

GET방식일 때는 데이터를 입력받기 위해

어떤 데이터를 입력받으면 될지에 관한 정보를 읽는 상태입니다.

<br>

랜더링하는 템플릿인 'polls/form_class_ex.html'을 만들고, 다음과 같이 작성해봅시다.

>polls/template/polls/form_class_ex.html
{% highlight jinja %}
{% raw %}
{{ form }}
{% endraw %}
{% endhighlight %}

아까 from_class_ex함수에서 context로 보낸 form만 보여주는 것입니다.

<br>

이제 이 웹사이트에 접속하기 위해 적당한 url을 추가해줍니다.

>polls/urls.py
{% highlight python %}
urlpatterns = [
    url(r'^form-class-ex/$', views.form_class_ex),
]
{% endhighlight %}

<br>

이제 로컬 서버를 켜고, localhost:8000/polls/form-class-ex/ 에 접속하여

템플릿에 적었던 {%raw%}{{ form }}{%endraw%} 이 어떻게 나오는지 살펴봅시다.

![1.only_written_form_in_html](https://lh3.googleusercontent.com/ZcYLFepPcG-9W-LhMRLZHvifvXHr846tP1F37Jbm4I0DmTncBvB0IE7On4aV7g0FvDeI-mr3lJj8d5KAC5JBZTRHg2Z1yc8-_5cqvnmvABrrZobeynalR8vKMVo7euFvg4jOSOG2CwyRUYnZhYdBcXbdBSYdm3_6jJATKX3tohhecLo_HTLvB_85AKhq0ZQ4xNpmIKN_QHy9q6_e6VzHysBcqV-qOtLXc4pjFWIBfQqRiUUuTkLatawNs5RaV-v6y5M5FKtcIzd4UMkxd9Y4ZyIHyfBcCYuhRWgH7fhzPg4TBnMcZLzEO4J7cfbfpWnZ6kVap4DwvH8FHFpIoY_agxxN9PfxdYRItGc3YcaP_DRLF35u33AFhDeoCloq2E7AUi4uP04bP5MZYuWtMVLBz43Y9E43cg_S0tH1WZDO-HVN7IV2QsuPzFJJC0xjGoVASKAeLNVWO95qopv1Fe-thUgazX87vUVDwxyADTJ6UhHLmD8b3-F0LHtfOz_dZvz2ZNl2lF3gFNHFasM_emJ5awiTLeNTJMS6QHdzqxvV2_mdFJxxqYDI0Zxk3EKADBQKqAtRsDgj6iRxc6_Wan124kbqFREKvRvkb3EeAz2cKA=w1208-h408-no)

그리고 소스보기를 통해 소스를 확인해보면

{% highlight jinja %}
<tr>
    <th>
        <label for="id_favorite_name">Favorite Name:</label>
    </th>
    <td>
        <input type="text" name="favorite_name" maxlength="100" id="id_favorite_name" required />
    </td>
</tr>
{% endhighlight %}

정확히 NameForm() 클래스 폼에서 작성했던 favorite_name필드를 입력하는

코드가 생성이 된걸 볼 수 있습니다.

거기다 CharField의 기본 위젯인 input type='text'로 만들어진 걸 볼 수 있네요

<br>

근데 값을 입력하는 부분만 있지, 제출하는 버튼이 없네요.

그런 버튼은 직접 만들어줘야 합니다.

다음과 같이요

>polls/templates/form_class_ex.html
{% highlight jinja %}
{% raw %}
<form action="/polls/form-class-ex/" method="POST">
    {% csrf_token %}
    {{ form }}
    <input type="submit" value="Submit" />
</form>
{% endraw %}
{% endhighlight %}

페이지를 새로고침하면 제출버튼이 생겼습니다.

![2.after_add_submit](https://lh3.googleusercontent.com/LtAFRs2ez1TIxSygZJ2cjW_JQA8ksZs-2BEVQxXLpBWla5eYcIjobcfK_2XOaEVt15Zr9b95MB88g9OQeLU3CnVA6Uw87HsggR6NGAkBIvclZSSTEdBusmLqd-OzimjwQvZBGiD-j5zSQkwOMR7x1Hpiu9sT4BnwTEtP56OtYM85FsbuuC8uHLjG_sTrRMUgVFw9doXEBuWXGuatrq4ogXBkXY1oRIXSVqt0evnDWYvR4AF11r-xMYiLcTjKU3V6EoT6-8K9Ja65KMAJei0ls6_hUmZCiy5nVR0_SKOu4i1Eb6Fl4j47xc75La0lNjKxZrCEAs-CntYortLPj5_imWGqroc0aPtU9_cZgYTxuenATbvzLNX_zNje2XMt7vPXfxc1PgB8VAvBeMjFG9_xr8YQZWP5lT8Lyt3jBonXnojKM5sM_9oNXn4t7YID-fIjX7RZqbGT2v5FTG_Ac3L4bL2xXF4LOdJHNltAEPAEBRkJWQPykGHYMyq9O-FYYXgZ2Rus1LhSc9VXxCA5IhZvtmAljrFHN04-0FD2aC2KUySBuxotEUGXaWdDSn8tFCrmIXIi1TOxgt-UNcy3fKgjIEFOV5Xw3v7QSmvuGPToDA=w942-h424-no)

Submit 버튼을 누르면, 폼데이터가 action의 url을 통해

다시 form_class_ex 뷰함수로 넘어가는 걸 볼 수 있습니다.

그럼 이번엔 입력된 데이터가 넘어갔으니 request.method는 POST가 되겠죠

POST방식일떄 리다이렉션하는 템플릿인 form_class_ex_thanks.html을 만들어봅시다.

>polls/templates/form_class_ex_thanks.html
{% highlight html %}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    thanks page after form_class_ex
</body>
</html>
{% endhighlight %}

그리고 리다이렉션한 url을 이 템플릿에 연결시켜줍니다.

>polls/urls.py
{% highlight python %}
urlpatterns = [
    url(r'^form-class-ex-thanks/$', TemplateView.as_view(template_name='polls/form_class_ex_thanks.html'))
]
{% endhighlight %}

이제 다시 브라우저에 localhost:8000/polls/form-class-ex/ 로 접속하여

아무 이름을 입력한 후, submit버튼을 누르면 form_class_ex_thanks.html로 연결되는 걸 볼 수 있습니다.

<br>

지금은 간단한 예를 들었기때문에, 받은 데이터를 가공도 안했지만,

장고의 클래스를 사용함으로써,

입력받고 처리하고자 하는 데이터들을 더 명확히 할 수 있고,

입력받고 처리받는 뷰함수를 하나의 함수에서 처리할 수 있습니다.

<br>
<br>

## 덧붙이는 말

<br>

다음 챕터에서 배울 클래스형 뷰에서 폼을 처리할 수도 있습니다.

물론 권장되는 부분이고, 코드도 훨씬 간단 명료해집니다.

<br>

일단 위에서는 form클래스를 views.py에 작업했지만,

보통 앱폴더에 forms.py 라는 파일을 하나 더 만들어서 관리합니다.

forms.py를 만들고 코드를 form클래스를 입력해봅시다.

<br>

>mysite/polls/forms.py
{% highlight python %}
from django import forms


class NameForms(forms.Form):
    favorite_name = forms.CharField(label='Favorite Name', max_length=100)
    # favorite_name = forms.CharField(label='Favortie Name', max_length=100, widget=forms.Textarea)
{% endhighlight %}

views.py에 작업했던 NameForm과 구분하기 위해 뒤에 s를 붙였지만,

안의 내용은 같습니다.

<br>

그리고 views에서 클래스형 뷰에서 이 클래스 폼을 처리해봅시다.

>mysite/polls/views.py
{% highlight python %}
from django.views.generic import View
from .forms import NameForms


class MyFormView(View):
    form_class = NameForms
    initial = {'favorite_name': 'Sherlock'}
    template_name = 'polls/form_class_ex.html'

    # GET요청 받았을 경우,
    # 즉 처음 해당 URL로 접속할 때,
    def get(self, request, *args, **kwargs):
        form = self.form_class(initial=self.initial)
        context = {'form': form}
        return render(request, self.template_name, context)

    # POST요청 받았을 경우,
    # 즉, POST데이터를 받았을 경우,
    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST)
        if form.is_valid():
            new_name = form.cleaned_data['favorite_name']
            print('new_name = ', new_name)

            return HttpResponseRedirect('polls/form-class-ex-thanks/')

        # request.POST의 데이터가 유효하지 않으면
        return render(request, self.template_name, {'form': form})
{% endhighlight %}

일단 import 부분에 .forms의 의미는

현재 작업하는 views.py와 같은 경로에 있는 forms를 의미합니다.

<br>

MyFormView에서는 View클래스를 상속받는 걸 볼 수 있습니다.

그리고 원래 함수형 폼에서는 if문으로 get과 post를 구별하는 반면

클래스형 뷰에서는 메소드로 구분합니다.(def get, def post)

<br>

또 하나의 새로운 점은 initial을 이용하여 초기값을 설정해준다는 것입니다.

<br>

이제 urls.py로 가서 폼을 처리하는 이 클래스형 뷰에 url을 연결해봅시다.

>mysite/polls/urls.py
{% highlight python %}
urlpatterns = [
    url(r'^form-class-ex2/$', views.MyFormView.as_view()),
]
{% endhighlight %}

로컬 서버를 켜고, localhost:8000/polls/form-class-ex2/ 로 접속해봅니다.

![3.img_class_based_form1](https://lh3.googleusercontent.com/4ZInnl4H-BARgfLtrpPzZ260gYEu6meJATtUPEFFeShxthlkeXgxPVzGoL9ykcktM6Slagl5SDaXBAIXsPFOUHd7icwUBEzK2uvowYFsJ6zgZ1a4f59Vw-fv-yFghV0MUdER0ck_2FKpB9RN9AXCSJjhPBXd_yvhCmgoGDw-3sd5eeA4uFVvuwZC2x17T10DGci4qmKqHF85fn8g5y2OwL3meSpZaLBVhp4p6yWfpw-G_2sTQnjmo3B4cC0r57Jty6b_u9jFtpEnQj_rViOYarEDPrbXbUukQHKaLDTB2kyMLD75MG46mL-VqpacLNhqBmQLtgIKJ821wfskydKG8L3W3ip2aUFvqjoolFsHFOqb3xLAApxXyHYlnXEUSPIlipV9jqYj3_P25rAxQcXGRVeMH_fb7JTZQolfEdCrFy5mR_If8_7vz4qEXwUuSwRbpC1YDYTVgEyBqKjqKxGWLc7dDybWgwxY3Zg88sylQVDOtDOkBawsl4Z0eRS-R5gIuo6-zUm0W_NK3V4YZ2qJt3c_0EbtBY9kx3Lco7oisOumjnd-ZcRGdxv0czmasGMRZX5bjZN_h483FypMfls5Qu7r0iGnylIQpDYaauaHkQ=w1506-h440-no)

함수로 처리한 폼과 동일한 것을 볼 수 있습니다.

다만 initial로 인해 처음화면에 기본값이 적혀져 있네요.

<br>

지금은 View를 상속받았지만,

FormView를 상속받으면 코드가 더 간단해집니다.

FormView를 상속받아 폼을 처리해보겠습니다.

>mysite/polls/views.py
{% highlight python %}
from django.views.generic.edit import FormView


class MyFormView2(FormView):
    form_class = NameForms
    initial = {'favorite_name': 'Homes'}
    template_name = 'polls/form_class_ex.html'
    success_url = 'polls/form-class-ex-thanks'

    def form_valid(self, form):
        new_name = form.cleaned_data['favorite_name']
        print('new_name_of_MyFormView2 = ', new_name)

        return super(MyFormView2, self).form_valid(form)
{% endhighlight %}

urls.py에서 이 클래스형 뷰에 url을 연결해줍니다.

>mysite/polls/urls.py
{% highlight python %}
urlpatterns = [
    url(r'^form-class-ex3/$', views.MyFormView2.as_view()),
]
{% endhighlight %}

이제 localhost:8000/polls/form-class-ex3/ 으로 접속해봅니다.

![4.img_class_based_form2](https://lh3.googleusercontent.com/u-8N2XA7kUIUkJygcs_hbL6YQ9sWSNrvLTGnkdYfM5Ho7hMrO9NW73BspEAMqkRk33XQeNyDqRmO4AlfjIK6UcbT6ue3k_LMsncgVEUjx0hA6Hx_zuHNznN-YhhqBV_HI5yU795zcdTYUdRy9aRnucWiL6Fha0amJPj698FrWb_rxnbySG43YmXSxe6AQ8bwGXOYVFZ5uCsor2UGHWa78w15-rOf_ML_4LxUxwHgsGkHqPa8XFk0Kv-sNQ4qUl29rhJkLjRMAXOv2tGGU_P5rGbf2OMP3YcNjPmk2Tf5PmUpRoENkl1MTSir2wD1gutDiqxeSBW1RT9E8W5srgSj-IdX-E1t7evH4tXWct4Q-aWLYTNVhqrDRD4JHeBgyhBwpC51qkdsL0mhW2UMpyijqdgsWMilaqWernUqgkF6PtsWxGAVL4dp4GbT-AldHHFaVhZYz6Xlb8t9JwP9-vYICm3mk0dQOSjF_-YGnLS1VP0o2QOvPC98abqktRn3g-6jvpvBRiX1kWOk4kCqo6i5qn_S1Wx7SWiM24wqoIS-g8aVXYSnymxcf5e11o6EE7rVZtXPLf7obqKz06DteBt-QNOZ3XsV2_rM71ZQi6ftnw=w1520-h528-no)

함수로 처리한 폼과 동일하게 나오는 걸 볼 수 있고,

initial을 설정한대로 homes가 초기값으로 적혀져 있는 걸 볼 수 있습니다.

굳이 get일땐 뭐해라 post일땐 뭐해라 안써줘도

일아서 다 하네요

그대신 그에 필요한 success_url은 받는 걸 알 수 있습니다.

코드가 훨씬 간단해졌네요 ㅎㅎ
