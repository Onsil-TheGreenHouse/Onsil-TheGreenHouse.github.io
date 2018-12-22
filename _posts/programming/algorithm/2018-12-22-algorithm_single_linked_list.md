---
layout: post
title:  "[Algorithm] Single Linked List(백준 1158)"
date:   2018-12-22 03:00:00
description: Single Linked List
categories:
- programming
- algorithm
banner_image: /programming/algorithm/algorithm-logo.jpg
comments: true
---

Single Linked List, 링크드 리스트, 백준 1158

---

## <span style="color: blue">백준 1158</span>

<br>

https://www.acmicpc.net/problem/1158

이 문제는 이번에 다뤄볼 링크드 리스트를 안쓰더라도 다양하게 풀 수 있습니다.

예를 들어 이처럼 그냥 배열을 통해 풀 수도 있습니다.

~~~ cpp
include <stdio.h>

int n, m, arr[5007];

int main() {
	scanf("%d %d", &n, &m);
	int i, j;
	for (i = 0; i < n; ++i) arr[i] = i + 1;

	i = n - 1;
	int size = n;
	printf("<");
	while (size > 1) {
		i = (i + m) % size;
		printf("%d, ", arr[i]);
		--size;
		for (j = i; j < size; ++j) arr[j] = arr[j + 1];
		--i;
	}
	printf("%d>", arr[0]);

	return 0;
}
~~~

이 방식의 문제점은 한사람 한사람 죽을 때마다(ㄷㄷ...) 배열을 재구성 해야합니다.

예를 들어 총 7명이 있는데 3번 사람이 죽었으면, 4, 5, 6, 7 사람이 한칸씩 땡겨 앉아야 하죠.

이 문제에서는 최대 사람 수가 5000명이기 때문에 시간이 얼마 안걸리지만, 1억명이라면?

처음에 2번 사람이 죽는다면, 그 뒤에 있는 99999998명이 자리를 옮겨야 합니다. 

시간이 엄청 많이 걸릴 것입니다.

<br>
<hr>
<br>

## <span style="color: blue">Linked List</span>

<br>

이러한 문제점을 해결할 수 있는 자료구조가 바로 링크드 리스트 입니다.

링크드 리스트에는 여러 종류가 있지만, 지금은 가장 기본이 되는 **Single Linked List**에 대해 살펴보겠습니다.

![single_linked_list](https://lh3.googleusercontent.com/MtClX6kVHR-TGYrVLxK7MH1atDUzJcLcxzbQoEIFCFSRg80ygJ1wk4SqqdIg4NZzbH6PNzNJGX_cqkGGrtrmNeAfzW46NCEazONA-07jRzFv7D1T8szL6HEQf8f8u9MX3oizAdi8aClZeK9BpICFl3NIF5kCO__x76nhKZw0kHN7yAjKWXNUXqSvGnH38dt5aGbVIdYlx9M7zbniBROgHpLFCbkGeiAyc4vtpqIRHmBLRFTTw9CYrYLlJdoL2fzVkxJuzlIgiBCkYiip2e57uA1QUW4WHdA0933bD5oR46i4wGtGyPteWOPsEL0rk8uzVTiXsfB5rXfBYcUJUI4iqRnxqf5KGU0Ga818ELgtW4OLSnN4LxgL2Al1xzCaDyJQJ_3oa9AbEAEWGhQP4aV0L8pnK1ifDQ9UL1AjgKSTchgRoQ2hGglj9N8FI1-Tb6hlsd5ho--BScbjbhzIVxCH8s2k-ffq7GB-xOQjlfiR81ctXq1WzJ4dQ2WFxpZ2pokQXOXAF08IIlXw2Fb_FgqsEDN6jGBBFxh-3xo2LJK7nKy-pu4_Dy1V_82qGENNh38fN6pdWmpn15yUdrI2ascrrHO_jFlgXw-T1elBc384Zswul4__9PhLpijZ6UDCIOMo8Xl7usxocVrDbjeAk9Zytbe2=w1031-h568-no)

일단 노드(Node)는 데이터와 주소값으로 이루어진 구조체입니다.

저 노드로 이루어진 자료구조가 싱글 링크드 리스트 입니다.

예를 들어 위에서는 teemo, jax, gnar의 데이터를 링크드 리스트로 저장한 형태입니다.

teemo 노드를 살펴보면 다음 노드인 jax로 갈 수 있고,

jax 노드를 살펴보면 다음 노드인 gnar 노드로 갈 수 있습니다.

gnar노드를 살펴보면 next가 NULL이므로 데이터의 끝이라는 걸 알 수 있습니다.

<br>

다음과 같이 노드를 추가한다면 어떻게 해야할까요?

![linked_list_add1](https://lh3.googleusercontent.com/SMU3WekOC4EOx_tGkeouhOQ5f_OZ1GNbElF_umQyM7TOovh5svk0sN1pMyjuJpk6JnAjtBvVXyttJ5632xM4juUK5MV77za6lXxftAEjL3i4TX3WvNA-i0KSuLdfgp5t6jS1irJrakh5gzRt0B-7IOyjkzJ1SRCEUXEVTcNjFA1-gt-tgi_7KjtzlxkpcqcBBunlcb0JIBSpbZJ1JtpYE8z4voLkqslimbxsH-aas7Oc1DrAH7fYKKZBETgni8TMo9ecY5nT7uqTOfVHkkLSfZg2LqAbCNa7VES6L9De9LgZyZjRvJkUqE2yvzNhfhNvXY4UIVynu883Ure5-vSVmqgCK-FnNmm-vZh2SBYv4HaxgaStHd1ejsezqYBJGgWyuZpewKIUa19tR_quvSMO--Xnqet0pxJuJMp8RaPb5ZstNQTRdKdU_2tqTWGHDXib9P5rrNVBkthXU49X4ANCQ3GpJWeIjAbqzw3KN7YlM-X39Q4xcEZD8TzJeNbtl_5naOg62m222WCAlL_1zu7x76q2qPuogMDxZAFziah9Ev2KB2i36alqnugQXgeyk6fi7mssgKxQ5hduispgQYXCGy_bkyWbCB1uW0dcK-1iwjENCRlhzL632pmGACqEWpMSmqWDYUHiwWqWQ69-4Yn9ol3i=w1097-h598-no)

이때는 원래 jax 노드를 가리키고 있던 teemo 노드의 next를 malphite를 가리키게 하면 됩니다.

그리고 malphite 노드의 next를 jax를 가리키게 하면 의도한대로 malphite를 teemo와 jax 중간에 추가할 수 있습니다.

![linked_list_add2](https://lh3.googleusercontent.com/fMCCX_DqD16XnRvxxF0sNjjCPzAAp0DB5RBLIiXhzVX8AeKuqeTIFPxZVA2D3zqZhaGV92lhCR5eyn7m4t1YBxNkv06ZBKlBCgL91eOWuEFiqsPBtbeRCkrFL0MJ_niA4qt2CjlA0iKzrRMLt4DOPVS48l2IIxS4DobF12gWSIRp1hVOaEdPHZZSvSWQH_x2ChtAV9KFFh3z_5KzfJ3I9Blfh2PQOuXl5SzYgMHqEMyFF7z8QSsLMFWEAULD9W7GqIMbFt6AP1qo-TcwlQDfh4SfoN81gE5BrvL7IZLUaMrNNf7C2co8p4AN9phubLKkfNrenuxNtmEaUbJvxoz58Ev-cdKGe4I2S2sCN3WYm-VBnZYeyiR0TyAlnKmlu7ZYby9kat1Ef5AI92JekwfQB0u2F1MCJX_veLK5t5oQcl7_bpfBRge538Xmx322PCGgsGMi71EjsmRoOIKwjbccoK2eexAuBDm6k52HHllc_6UgzJVGDzN6Y977wEjisZSJUHtMRFVhAzKjoqETcZE6XJgtuAozNnV5UzjCjTqKSjA_RKhxDdKfLuH4lgALK1cpar6JIj2LTG3I0i4Qv1d8xkpBAPSecd7OsolIvLyYDcZ7LbEco24ztIhFJDvCZXPLb90ZyAyKRomJjY7j0awUAdVO=w1188-h602-no)

<br>

그럼 노드를 삭제한다면?

![linked_list_del1](https://lh3.googleusercontent.com/krExZnqx2G4NM5YKfJgcHquPJqhs2VOUL8ntCLKsPzhx_5391puzcu3oh5sdYlvfRRRrj0yVeGBCHb5Kt2g2vpEZtXGZJDLddpRi0Yy7ilxsK0bXB3n_T-3I9A96CDQfVRIIyrziBY3S7TpV6qy-58SXD-WtdtAaQic-9H_zlirPXePYyf1pRrtz2-QxIqRHjEsq5UudLeu_r-4ldps20sIfA40F8XDpXlefFlojtgqyFaqEkQQsqhm7nrsmJMF1tgEfO8JJJuIOviZzytXM9sqgG03G37GwyHiGNc--VkfrfJUKbtsKk4_izLV98bmVGETVZ20T_QJ0jpJC0QpcqfQQpkGVmjJ5BTByfKmJk96aCMoVKCqdtGHZmQnsrgyBdsZCRI-v0YIkxeJfZ-BtUdm1VkpIV8J1vsHc01sl49kbuxijndXwzWh6ekMndD3LcdR02mHs8E7xlkds_OWF5TdTb6c_p-MOmEm_cRdItzodQR71U8ayEMTtTsMYIgbfJiM_ya8HI3p9diYaOo047J1vvVeM6IDsyQAkwbxXQUqJQm4zbu8xH1uelhL59Sy5hTeljTaFNRASwtziDo4X2X86DbHc1-oB2Lkrp_Jvf0ITSY9PefPnO_EmSHfriF8dH3BsrrxBgMZgG1m65PVRWncG=w1084-h364-no)

jax 노드가 빠진다면 teemo 노드와 gnar을 연결 시켜야겠죠.

즉, teemo 노드의 next가 gnar 노드를 가리키게 하면 됩니다.

필요하다면 jax 노드와 gnar 노드의 연결까지 끊으면 됩니다.

![linked_list_del2](https://lh3.googleusercontent.com/fRpePfQOu-sjDWZ2ORXg0kqi2jxzRjbH-BfL2zvX_wH8rYvCppllvGLh74GVNwM5DjN0wGnht0gWS63VkOg6E6eYrPX81wM6B3uuHfYV3OKuD4oSdK_aVD57fthJX9SV3PxPPMD3YG875fV7CnzIyTMAxBDYTzKZTzCOc28WJJLjDDlOIyeVbLHpCP1P3ixaVlZCbFDjFPFh3n8pStVGyzUutfW2HoltavNbp4fmJ9Aq8CAk-6Q7lQ0iHz6XkNQVxykCim0TNj0M8rZ-FOHFYmvNtmx91cTiqlR19hObLWZ8mTdW7QEjBXD51wGgEyh6AEEG9uMA649_cGajZqhbBXwIEJMNHZvMjj3QvawMED9KHTlCu6noL8Rhw4ymfLCS5MRphQbHBqN8LdPNdwZXhhkKEj8JagJGYBNR2TYNrXQHZpWfGw7fOfkgJ52KveR5dymWV6pLONQ0o5oAx1rrqXHeZZ6K-Yjrl5z6tmECQsskBEgJ2wuH2MM5yVupATC4Q2oyNF9VPYbs1tYW0Nw2_PkG19sV01bOqCkIwI_npNumctO03HZppfUP5zPJobQRst3VPCwHCq_Izfuv2TFVVEgGsk_sNiFpZowXJYG_2FlbEvdUNA2roNPKI2xlicOB0Q2ArZLiIZEp9n_pzAfFWcTM=w1084-h436-no)

<br>

이처럼 링크드 리스트는 배열과 비교해서 데이터의 삽입, 삭제가 빠릅니다.

배열을 하나 삽입하거나 삭제면, 삽입/삭제하는 위치 뒤쪽의 모든 데이터를 옮겨야 하는데,

링크드 리스트는 삽입/삭제되는 위치의 연결고리만 조금 수정해주면 되기 때문입니다.

<br>

하지만, 배열에 비해 데이터 탐색은 느립니다.

예를 들어 777번째 데이터에 접근하겠다라고하면, 배열은 그냥 arr[777]로 접근하면 됩니다.

하지만 링크드 리스트는 맨 처음 노드(위 예제에서는 teemo 노드)에 가서 776번 next를 통해 하나하나 이동해야합니다.

<br>
<hr>
<br>

## <span style="color: blue">다시 문제로 돌아와서...</span>

<br>

이 문제를 링크드 리스트로 접근해보겠습니다.

1번부터 N번 사람들을 각각 노드로 만듭니다.

그리고 i번 노드의 next는 i+1번 노드를 가리키게 합니다.

그리고 마지막 n번 노드는 1번 노드를 가리키게 하는 것이죠.

<br>

n번 노드부터 시작하여 m-1번 이동 후, 도착한 노드의 다음 노드를 삭제합니다.

노드 삭제하는 방법은 위에 설명되어 있습니다.

<br>

~~~ cpp
#include <stdio.h>

const int MAX = 5000;
int n, m;

struct Node {
	int d;
	Node* next;

	Node* myAlloc(int d, Node* n) {
		this->d = d;
		next = n;
		return this;
	}
}buf[MAX + 7], *cur;

int main() {
	scanf("%d %d", &n, &m);
	int i;

	for (i = n; i > 0; --i) cur = buf[i].myAlloc(i, cur);
	cur = &buf[n];
	cur->next = &buf[1];

	printf("<");
	while (cur->next != cur) {
		for (i = 1; i < m; ++i) cur = cur->next;
		printf("%d, ", cur->next->d);
		cur->next = cur->next->next;
	}
	printf("%d>", cur->d);

	return 0;
}
~~~

