---
layout: post
title:  "[Algorithm] Double Linked List(백준 5397)"
date:   2019-01-06 03:00:00
description: Double Linked List
categories:
- programming
- algorithm
banner_image: /programming/algorithm/algorithm-logo.jpg
comments: true
---

Double Linked List, 더블 링크드 리스트, 백준 5397

---

## <span style="color: blue">백준 5397</span>

<br>

https://www.acmicpc.net/problem/5397

이 문제는 이번에 설명할 더블 링크드 리스트를 안쓰더라도 풀 수 있습니다.

예를 들어 char 배열로 풀 수 있습니다.

char str[1000000] 배열에 문자를 하나하나 집어넣으면서

'<'가 나오면 str의 idx를 -1해주고, '>'이 나오면 idx를 +1 해주면 됩니다.

문제는 '-'가 나와 삭제할 때입니다. 삭제를 할 때, 삭제하는 위치 뒤에 있는 문자열을

모두 한칸씩 땡겨야 합니다. 삭제가 빈번하게 이루어지면 당연히 프로그램 속도도 느려질 것입니다.

이를 해결할 수 있는 방법이 더블 링크드 리스트 자료구조입니다.

<br>
<hr>
<br>

## <span style="color: blue">더블 링크드 리스트(Doubly linked list)</span>

<br>

더블 링크드 리스트는 [여기](https://onsil-thegreenhouse.github.io/programming/algorithm/2018/12/22/algorithm_single_linked_list/)에서 설명한

싱글 링크드 리스트와 유사합니다. 

다만 싱글 링크드 리스트에서 노드에 다음 노드의 주소값만 저장했다면

더블 링크드 리스트는 이전 노드의 주소값까지 저장한다는 것입니다.

<br>

다음 그림이 더블 링크드 리스트의 형태 입니다.

![doubly_linked_list1](https://lh3.googleusercontent.com/8ew2bXDzA6gQ5y01yOoRt1vEHzhmAv94--tkaHc5pEFj5N-hAZhIkouENkI3uRstlweJtWG3MH33e0pbXFL7fy9m0ikCtmZG50px6pOKr5us_jADner5ZozLoBDfHZFpLfcaUSgwZ6tHcJ1MuXlfjglZjXIQtEMs35El-E9Mp305wX3h1TpYX-fH5oin4nzvohT38iM5Mw_4omWq53SprZCDqae4mT8cBm9qdjetpTZqk414leBRLEpkd_AWVyBMNCoqEKN4kxemigc5GMqWNjOrvPU4v95PNnUtLqQM-hctMjcAuHzST5pf3XOJcfk9d96a6VJLzVQ9dUgbRRYprNIGntAqSuFnr5FldddeSco_8vJ2MvI5WIEOazYw6TrWeuNzXrL4UWQmLgbc9woB53LkR9UkaKWWMbVoUmF33SJ3AjzS2u4JtJUwYS4ogwYbKJ-O_sNfN0SP3UGt9kMd84-Qp2MxXWQhyxUGADtnC2GhqTM_2GSpr2QA7-xtVQuQPjQprcwglP2HwUhBTfqq4KwbA3mnqBWHGA6e7RhpbXa9BFstPLWmuhuy-sNduGOyNTTOvH0kEu9h4X8Zb8tg8z7PUv49_21C0umn8hPo_495lzlghaE7CCCPkdo9cPjbz1IZ8nrmoNDDmajxOVVqhK0V=w1014-h635-no)

첫 노드인 teemo 노드는 연결된 이전 노드가 없으므로 prev가 NULL입니다.

마지막 노드인 gnar 노드는 연결된 다음 노드가 없으므로 next가 NULL입니다.

<br>

그렇다면 새 노드를 특정 위치에 추가하려면?

![doubly_linked_list_push](https://lh3.googleusercontent.com/TJyj9G-E6xnrJH2VvYDD5f6PxNTB472TDX80OhqnZb7z0qVFhgOodeIy_F3tQsxmuS2MxzVwc2kYMXzHZcgR6PoKsCi1Mj3iv_yjloSaDxeYIC6Fk-carf3UuE3piGlXk3qkv3rGqMTVySqAguJ2f4PylpP06F1I0DIIAkGuudPWhdbZ4awHdFYlYMA-yGRp6wGiD625TdlZQ24Ois5iJCNeL1zQwvDXMrwelnElG9rRhYVnTMZY21kIiDBfBe7qaz3WeXrem0o2chP3UfuNupbbI4nlTuYQ3WU5aydZGltVHj8Jp2dR60ZLZ3NjSFMwtMqbf0na7xj6JaUmFN_4V1iqgilR45dXSaFvVLa9Bzf2-qGGOAMRXuBPbejTmnQW-3mw8XLM5tshKhCTouKzGLd8WROTC2Q4qCOjgXHmEc2UvvE8LreArawhz9XzcfHH4rY6hmoCVHuO51UFu9_r5NzkDymcawCAX6p2R4dX9vFpaKva3gryHRWFBFvsoQtIg-T-YC1n5eImeLLWpiEF_iUgtICw8bwlpjYADYszJSVRU-8BZH8Y8b8_K0sxnDqSVACXeiaSld2XcAC9VW_yryBqTvz2g_TWjygC1eJ66uloH-wtkjugVGeaHZGHzE8x_iplJMf-hiA0BTwPId3eOZwS=w1080-h639-no)

결론적으론 새 노드를 추가함으로써 영향을 받는 노드들의 prev와 next를 바꿔주면 됩니다.

![doubly_linked_list_push2](https://lh3.googleusercontent.com/qjfr_9d30FnxUA9xV5zMZ7BA4VgWKf5JHpNgRoAf5usdvUUUhi87VZGH79osyLmc4trK0d6HpVvlLiJUmD9TZu2NY2R4KXECgJM3pHlU6OHrHwykD_dNF9Fq4FvgEdS_r1zpT191cuK4izVWpdPGTgDlAURxYsBwHZZLxWbpkNvfmaMaFEVN18xmIu_jg2TGl6XYM1m9xkDLjTZqq9eWseFeCDv7ykD3pZ2mTLcZNh1kPBeP1ayaqQu8jz8wOTI5m_dQk7q4DRlTph8OWusP-peoNMQou4o20NcVOv6ccXxscE9gRa0enT0iS-j1MIqmV91UbXDH70lwnRvqBStNih5GP_Q8S2ZZZ7-WfpvnEGKHUU-rpP2bj4L-sBDJjnYRtDtmuYLz-JKIyrUHp4UvlD97LTHELrxaNq301MfBaO5Uj2u1AWROtLMb9wWVDNt2jgCU2V5bEdiv8HttI266UdoKLAk4B0JWpes_PMroRAXAJhhEF9dnp3x_xGIa1De2HOgTAHjNBs3GA3ObKPsIVstpc8q2Mvuut_40nz55h1OpXo7RuZMz3KPQbqF7jGrLGt9mnOvR0ZFwWUCIM8x7xqmz-flbXulxojdptfN9ofd0vAY5e56u_LrMgSdDGVZqZ9YRFjCSJzhHBFQYdEF66emS=w1082-h653-no)

<br>

그렇다면 특정 노드를 살제할 때는?

![doubly_linked_list_del1](https://lh3.googleusercontent.com/UKXmEZul_6B8fJ68TSaMyDOa3I2jrMi1jBYEBCZwjaPARndm_5itshjMoZYyLCV5x33prQnktnSb9bPJ3ZjDZIBu9M_SNzR3p6pwK2PalJhixPKKTsSfFTRkvalboikAFjQmlpQAtfb3dHR5MuMlO9HIuuq00q2Ij6u-uQXb4Gmdtq6zvtycoRNaXVvst4rDS6W2xQTk7FmAKaaqPhGY2aIaBqWDjYR2e28RclJ_0g49jlm3z2528TMlWyo1iVzQH0pZ0KxoCvpISfu7vUCdAEydClAImRaGyFAZumrwU1HdgJqemgPbUE-99k-NE0ozyCJ_eE94X27p04qelHCIfkCLcoR99sUvbSqm0ZdBNxdv4vFodpiL73uKT64YWi3tBRhhUptxeoivXs0EYsdTmdCHCxxlopn2XiNZ19RTofFNmRf_GbWHqP_gPEtuelJRpQtfGaisQkcK1sgCfQLc3PBLnewljCSsDY5l7Yhijrdi8jFEefywCBciwEV4lmWTg7xEB-s_a9N0yatDG-gs4s_VeOVxZXQ3jQRGtodNoftMtrl1zRAsx7PKv2Rrl1FAdtjeaFR0tkQFvn0L_fiV3wNActqivunGuE89LSC7mxEy_1GrSSTY4ASzBUopg4dDkL03TIDleaIDohD95lrTnpmU=w1081-h399-no)

이것도 마찬가지로 기존 노드를 삭제함으로써 영향을 받는 노드들의 prev와 next를 바꿔주면 됩니다.

![doubly_linked_list_del2](https://lh3.googleusercontent.com/FwCfYVbvqbufAx4Buuv3ot2Cstxwax-nGgj9_YlmTuLTKnU0a-fP6CGwkOVVlqnHLXKSi-kBiYt85Asa-wcXxcfw4g4LhTsQ0MqmF6HRGblZC4Cp2zbU34p5_qH24oudF-pA3KtP_dFIjkxw6wkAksg31CAsDSHioTsm0kxKDbC5Qjqf1BdUUwsB_Et8_CTiR5w6XZWc5YzMpcT3zy4Ui919wpFmYAm6aHJ_IRmnAmKXK6YRmKBo_LsX4GQkCfn-ubBbGSRVy3sWBsbatfPigvlPFTpZJCz9IQ751ck-ni9tlZTiGZPocZ_XQIHBUUVyhJRyYKR3Ns1250xw6FvH4xuJ5LDYz-q9JL4V2PPPqedvkGKY9izIXbkHJ6wQocyHb4_ojZGl8VTeuxlQ3xi1MQIkUiWkfUOi6zsQMJdkCDpYuqf4EYdRURboTSi31xzKigN_5rS4OY9zLxfffqcTF2ZVYVWI67jEG8HfUxiXH0delMUUDAxXskQt201tRczjqTwASHgfr40GjOGF6AvX2DeRf4mFGb2LQHkixwokZnLohWSpUDe7v7P8tJr3pjvIQFOSgx88LzkODBej6kghj4d4zcNyRzvHPtob0WKY2FQ3eHT7fLc5b9fP5akjb7qa-YOxWX6yewPm2AQAfuAdHTxG=w1079-h600-no)

그림이 너무 복잡하니 없어지는 연결링크를 다 지우고 보면 다음과 같습니다.

![doubly_linked_list_del3](https://lh3.googleusercontent.com/SkiY6gd0mGi9DbUHn39taXYjz-rtYXT0xdsAa_2OcUles4EwJLuklBiOubJEYsqgypF5Ca2GyQpKzPTJa9grA6CLt8jh_Xk7u78zfV44T1nJGJ1peMo5DGKg5APnviZMe5reOBZtBkjhqbnJjSqFofJ4_YMGFX4_zJQDUAJ9K99o-7dFL9eQ9z6hvgRyn5OutTlV-HZeVDzYjhaXfpB7_CHSaR2A-r0g5uPvffFPbEnc-TGnTSdBuslSsF8aegFKS0gxpOThdXUW9oLD9XZ8pggybiaRWapV-9Oi8v3yl0TdMfiQPL03qq_-77EEIORBLBb6BSecqzCRp5s2yz9WfFuvVKA6BAJ3i2wKh3zgbfxoSmoiSDj3gulcCq0TW5EPV9WCIyRy-l_FA34rOOXviTEslPh3weszykqLsQ0SfRsK7PnxN5rE5853kqLlZTWdRYRJiYZBgsKgUF3zRT66XYb589gk8mNgwdj9OLILkuKR7ek7R0biya8X1F59I94EsB_xCaHZGLE7YhtlbA1IBf8mrsMq0zTcJ_VWW7RAqbXb6C43mTcNSmBmClN4CnIFErfLZXtG6myAh16hfVH02iiyPDUUrP1tM1eEt-o8FV-_exR5XFDQ-U1SAUdpVZK2sVXuCgfatx7eJnQ97hPFNL_L=w768-h473-no)

teemo 노드와 gnar 노드가 서로 연결되어 있고, jax 노드는 나가리가 된 걸 볼 수 있습니다.

알고리즘 문제를 풀 때는 정답만 나오면 되므로, jax 노드를 그냥 냅두고 무시하면 되지만,

실제로 서비스 되고 있는 어떤 앱에서 이 더블 링크드 리스트를 쓴다면 jax 노드는 삭제해야 메모리를 절약할 수 있을 것입니다.

<br>
<hr>
<br>

## <span style="color: blue">다시 문제로 돌아와서...</span>

<br>

다음은 제 코드입니다.

~~~ cpp
#include <stdio.h>

const int LM = 1e6 + 7;
char str[LM];
int cnt;

struct Node {
	char c;
	Node *prev, *next;

	Node* myAlloc(char ch, Node* p, Node* n) {
		c = ch;
		if (p) p->next = this;
		prev = p;
		if (n) n->prev = this;
		next = n;
		return this;
	}
}buf[LM], *head, *cur;

void left() {
	if (cur != head) cur = cur->prev;
}

void right() {
	if (cur->next) cur = cur->next;
}

void del() {
	if (cur == head) return;
	if (cur->next) cur->next->prev = cur->prev;
	cur->prev->next = cur->next;
	cur = cur->prev;
}

void init() {
	cnt = 0;
	cur = head = buf[++cnt].myAlloc(0, NULL, NULL);
}

int main() {
	//freopen("input.txt", "r", stdin);
	int tc;
	scanf("%d", &tc);

	for (int t = 0; t < tc; ++t) {
		init();
		scanf("%s", str);
		char* c = str;
		while (*c) {
			if (*c == '<') left();
			else if (*c == '>') right();
			else if (*c == '-') del();
			else cur = buf[++cnt].myAlloc(*c, cur, cur->next);
			++c;
		}

		Node *tmp = head->next;
		for (; tmp; tmp = tmp->next) printf("%c", tmp->c);
		printf("\n");
	}

	return 0;
}

~~~

Node 구조체 정의 부분을 보면 Node 포인터 변수로 prev와 next를 선언했습니다.

<br>

init()를 보면 Node 구조체의 포인터 변수인 head와 cur를 초기화하고 있습니다.

head는 제가 임의로 dummy tail로서 넣은 것입니다. cur은 현재 커서의 위치를 의미하고,

커서가 맨 앞에 있으면 cur는 head를 가리킬 것입니다.

<br>

각 테스트 케이스의 진행은 main()함수의 for문에서 이루어집니다.

문자열을 읽은 후, 문자열의 문자를 하나하나 살펴봅니다.

left()를 살펴보면, 커서가 맨 앞이 아니면, 즉 cur이 head가 아니면 cur의 위치를 prev로 변경합니다.

right()도 비슷하게 진행하였습니다.

<br>

del()을 할 때는 먼저 커서가 맨 앞에 있으면 할 게 없으므로 바로 return 입니다.

그리고 연결된 다음 노드가 있다면, 다음노드의 prev를 현재 노드의 prev에 연결하고,

이전 노드의 next노드를 현재 노드의 next노드로 연결합니다.

그리고 cur을 이전 노드로 설정해줍니다.

<br>

사실 이렇게 까지만 하면 위에서 jax를 삭제할 때와 조금 다릅니다.

jax를 예로 들면 jax의 prev와 next는 건드리지 않았기 때문입니다.

하지만 문제를 푸는데는 큰 상관은 없습니다.

이미 cur은 jax의 이전 노드인 teemo를 가리키고 있고, teemo의 next는 gnar이기 때문에

더이상 jax 노드로 갈 수가 없기 때문입니다.

하지만 문제풀이가 아닌 현업에서 더블 링크드 리스트를 개발할 때는

메모리 낭비를 막기위해 위에서 설명할 때처럼 jax의 prev, next도 NULL로 설정해주고

jax 노드 자체도 삭제를 해야합니다.