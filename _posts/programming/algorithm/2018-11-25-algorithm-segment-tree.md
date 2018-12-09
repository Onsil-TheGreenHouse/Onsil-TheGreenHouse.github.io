---
layout: post
title:  "[Algorithm] segment tree(백준 2042)"
date:   2018-12-09 03:00:00
description: Segment Tree
categories:
- programming
- algorithm
banner_image: /programming/algorithm/algorithm-logo.jpg
comments: true
---

Segment Tree, 세그먼트 트리, 백준 2042

---

## <span style="color: blue">Segment Tree</span>

<br>

어떤 순서있는 정보가 있을 때, 그 정보의 특정 구간의 정보를 빠르게 탐색할 수 있는 자료구조입니다.

예를 들면 [4, 1, 3, 2]라는 배열이 있습니다.

이때 2 ~ 4 구간에 있는 수의 합을 구하고자 한다고 가정해보겠습니다.

현재는 배열의 길이가 짧으므로 빠르게 1 + 3 + 2인 6이 정답이라고 말할 수 있습니다.

하지만 배열이 수억, 수입억 길이가 되면 O(n)이 걸려 시간이 많이 걸리게 됩니다.

또한 이러한 정보를 물어보는 쿼리가 많다고 하면, 이렇게 정보를 알아내는 방법은 더욱 비효율적이 됩니다.

이때 segment tree라는 자료구조를 사용할 수 있습니다.

다음은 segment tree의 설명입니다.

![segment_tree1](https://lh3.googleusercontent.com/E90SrQcvSaDos8kBGsiW2J65X5vs9xMyLH3R6MCabRmPYD2nyRdXkw2OsHrRuN2M0dUG5yDzVA9B9cfTgtxzh1TIS15AP4YCTYoh2XBymQkNYxA76V-NvTHFO4x3ZOMyXvP4My2SMbPVHlXVYiihjFEunswzEaXulsFr6hCKwsKK6xYhsWcaCyOql9gZnoygVQREYsTp5RKRi8ZElS6IcaNQTKO1e7NsSiU7ZSauo2AQQF77M8a_WtbyMwM7_WWjYjEf-nSYl3haneqWoQAEo2HHQc7dxGhI1R95shF-R-9B1R8FOd1Bf8BxS8_5u7eOkuiDgq6vs-lCnqq8oaTorUMFfbNkkYcUs25-7yB9waSBHzXKpGaZ0V7nYxubcWOI9B0JG016gtVv6vmsPmuiI6ISev5sTXiD83htQTieP35ZRHqtjvCXAQwQ3NcPgkhnJ3UE9cA08dGaXuGsRjWuoh1QZb3aArElAWT-5idXXFCDdIUwfKGWTHCIrIRYW3ZZdcB8w60eOHSuANwi1TeO7zTLTEleskdG6-xxKfIw0a4qmYQgqgW_gkNdvsA2m0v0IPB3CqXyIBIjA_3PSAi45nb0FP6GLJ4cXqHqp0QaCvZT8vpiomWpd26xDQC34l5zqt_K1CgZmaf7lcRX2GmCzMwm=w925-h517-no)

처음에 정보를 가지고 segment tree를 만들때는 제일 하단 노드부터 채워갑니다.

즉, tree[4] ~ tree[7] 을 먼저 채운 후, 그 부모노드들을 채워나갑니다.

<hr>

![segment_tree2](https://lh3.googleusercontent.com/3j85Ep_6JJK8PTf1aWFg5FcIuPBL1JyBTPbZgaoLFdiFj2tkaYbgQMLKJAp0mxghePCk4KwCPdlawBVQr7Pfux90CQ6_BCsuv6nlOcfa8I_x9NN7uDZXnanSfBpJErhGkQapbnBXkS5bN0AbkQq3YHA7MqY_HQHpE_mMVpJHB21k0rLz7FlPKDDlixOEueuIzOO7lGAVFRe5ev_Jwdk8w8BZIO6LoPaDDMMzYMBIFCxehF_xIGrGI-AO52ov6wUoUx3-fxAwuGG8ZUDjNQlP-ZheBFu9NT8bW-CiFENpt-BBEfZpmahxJacCvIn6uvG5EUzJtGjyXrlq1qYV0ml3cAX6YGo4s2xtA66GJJpOsWFdWXNCnLl7HUWe8obQyvF_k52pPoSrqchXwoMu-XoRXiOKiq2D7ZOX7eCZaxwbUtnV4Q3REPaEHjYs4LksAWk7piYGPX1S2jQh5zRv6t-gge27upxbFkFoQPzNVh0bgnr7LpzNGVVtE9nia3Y-LpiWVKaM-Jj5DtumujiMTT0rqLxFc5XcvhViUY3SnU64njKOpSm_ZqZsVYJik0-WttWzhfva4CGPiFNMxC3f8a4basMaqJ_6CNgHYIf_68p7GsxkkYx7NZ5MT9dtLLK_3AVDU-fS0icb6IcbUOICqI_MmU9O=w905-h503-no)

정보를 바꿔야 하는 일이 생기면, 가장 밑단의 노드를 바꾼 후,

부모노드를 따라가서 수정해 나갑니다.

<hr>

![segment_tree3](https://lh3.googleusercontent.com/77uajH50quizhD7zNgP5qgrFekOXEIh-7lMPXSmDfKniZqADrlw2zZZ94RTC5k0_XINX7-yCcqvL4myMWPkjem0V_utG55hBIo_kUag95SDS6ob7qB7hPmL_N61_J0e_4uANgN7Wx1dugAu7OHXArKX5P4a41qydGKB6UpkAGiL3DhK9iUrv2CWwDvG-_JBr0Aw5tWkJ_LI0nXZ4HwNTYJlZ4V5f0LNXczKIKAfGXnO6228VEv2eyKiJMhkkS81VDCEk9f6OyqtM6WLY4Z5Fsc4k9J1b3ZRJ46Kl6LzVNAUTL7jbqgKoZPDvvFNOC6hfE7Qtf41SbMG0K_LOy_kDQCf3q0JGQH4wo9PMWBvsXZy1gLCYQ6VtFnyBqQQaY0ZU0u0NLphGi2MEn05nf9nSd-S76U__ASwOrSkYGgv4iAqbC6n5amKlY4xF4CbcwvYLKLi80DzbLxCgwxhvwo7hpOW6RcwgWI-7UXiOnOHHayPoDnNvai0YyfMTqqXhzCeWOon6IJmMRtCco1jGZY57QixvG_kCn-BgtaooahFdfTYl8fbjd6BQpsvzG5uuirCtOOzODe9b-1wRJ8hzttCqtW_okJKzxxmbdKr3iN0mVQenwSkdRnhDjWfUmsApefbrDyr0BKDswOooSzhreKY42hFH=w1161-h629-no)

구간의 합을 구할 때는, 루트 노드부터 시작해서 밑으로 차근차근 탐색해 나갑니다.

<br>

위의 예제에서는 구간의 합을 예로 들었지만,

구간의 곱, 구간의 최대값, 구간의 최솟값 등등 다양하게 변형할 수 있습니다.

<br>
<hr>
<br>

## <span style="color: blue">백준 2042</span>

https://www.acmicpc.net/problem/2042

위의 예제에서 설명했던 구간 합 문제입니다.

~~~ cpp
#include <stdio.h>

const int NMAX = 1e6;
int n, m, k;
long long arr[NMAX + 7], tree[NMAX * 10];

void buildTree(int root, int s, int e) {
	if (s == e) {
		tree[root] = arr[s];
		return;
	}

	int m = (s + e) / 2, left = root * 2, right = left + 1;
	buildTree(left, s, m);
	buildTree(right, m + 1, e);
	tree[root] = tree[left] + tree[right];
}

void update(int root, int s, int e, int idx) {
	if (s == e) {
		tree[root] = arr[idx];
		return;
	}

	int m = (s + e) / 2, left = root * 2, right = left + 1;
	if (idx <= m) update(left, s, m, idx);
	else update(right, m + 1, e, idx);
	tree[root] = tree[left] + tree[right];
}

long long query(int root, int s, int e, int qs, int qe) {
	if (qs <= s && e <= qe) return tree[root];
	if (qe < s || e < qs) return 0;

	int m = (s + e) / 2, left = root * 2, right = left + 1;
	long long leftValue = query(left, s, m, qs, qe);
	long long rightValue = query(right, m + 1, e, qs, qe);
	return leftValue + rightValue;
}

int main() {
	scanf("%d %d %d", &n, &m, &k);
	int i;
	for (i = 1; i <= n; i++) scanf("%lld", arr + i);
	
	buildTree(1, 1, n);

	int a, b, c1, mk = m + k;
	long long c2;
	while (mk--) {
		scanf("%d %d", &a, &b);
		if (a == 1) {
			scanf("%lld", &c2);
			arr[b] = c2;
			update(1, 1, n, b);
		}
		else {
			scanf("%d", &c1);
			printf("%lld\n", query(1, 1, n, b, c1));
		}
	}

	return 0;
}
~~~