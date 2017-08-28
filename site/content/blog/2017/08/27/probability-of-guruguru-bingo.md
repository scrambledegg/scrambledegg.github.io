+++
author = "もい"
categories = ["mabinogi"]
date = "2017-08-27"
description = "ぐるぐるビンゴカードのコインってどのくらいいるの？"
featured = "feature.jpg"
featuredalt = ""
featuredpath = "/img/2017/08/27"
linktitle = ""
title = "ぐるぐるビンゴカードが埋まる確率"
type = "post"

+++
# いんとろ
「ぐるぐるビンゴ」イベント始まって
ちょろちょろしかINしてなくてコインが全然ありません。  
もいです、こんばんは。

なかなかカードが埋まらないので、
[改造石の個数と成功率を求めた記事]({{< ref "blog/2016/05/08/probability-of-special-upgrade.md" >}})
を少しいじって、何枚コインを使うと何マス位埋まるのかの確率を求めてみました。

# 計算する

ビンゴカードが$i$マス埋まった状態を $S\_{i}$ とすると、
例によって遷移確率行列とかいう $S\_{i}$ から $S\_{j}$ への遷移確率を$(i, j)$成分に持つような26次正方行列 $P$ を書きます。
今回行列 $P$ の成分の添字は、埋まったマスの数との対応が取れて都合が良いので $0$ から始めることとします。
すると例えば$P\_{01}$ は、マスの埋まってない状態 $S\_0$ から$1$マス埋まった状態 $S\_1$ への遷移確率を表します。

{{<raw>}}
$$
P = \left(
    \begin{array}{cccccc}
          0      & 25/25  & 0      & \ldots & 0      & 0       \\
          0      & 1/25   & 24/25  & \ldots & 0      & 0       \\
          \vdots & \vdots & \vdots & \ddots & \vdots & \vdots  \\
          0      & 0      & 0      & \ldots & 24/25  & 1/25    \\
          0      & 0      & 0      & \ldots & 0      & 25/25   \\
    \end{array}
    \right)\\
$$
{{</raw>}}

実際は$S\_{23}$と$S\_{24}$の時は土曜日と日曜日にもらえる「ぐるぐるビンゴスペシャルスタンプ」を使うと思うので、
$S\_{23}$になっている確率とビンゴを回す回数の関係を求めます。  
このために$P$の不要な次元を落としつつ、$S\_{23}$ から $S\_{24}$ に遷移しないようした
24次正方行列 $P'$ にします。

{{<raw>}}
$$
P' = \left(
    \begin{array}{cccccc}
          0      & 25/25  & 0      & \ldots & 0      & 0      \\
          0      & 1/25   & 24/25  & \ldots & 0      & 0      \\
          \vdots & \vdots & \vdots & \ddots & \vdots & \vdots \\
          0      & 0      & 0      & \ldots & 22/25  & 3/25   \\
          0      & 0      & 0      & \ldots & 0      & 1      \\
    \end{array}
    \right)\\
$$
{{</raw>}}


このうち、$S\_{0}$から始めて$S\_{23}$に遷移する確率、
すなわち$(0, 23)$成分の確率が求めたい成功率になると思います。
この$P'$を$n$乗してあげれば$n$回ビンゴを回したときの確率になります。

ちなみに $(23, 23)$ 成分を1にしてあげることで、
$P'^n$の$23$列目の確率は$n$回ビンゴを回したときに23マス埋まっている累計の確率になります。

さて、この$P'^n$の指数$n$を増やしながらビンゴカードを何回回すと、
どのくらいの確率で23マス埋まるのか計算した結果、次のグラフのようになりました。

<canvas id="chart" class="chart"></canvas>

これによると75回ビンゴを回せば90%を超えます。

したがって、1週間で1枚完成するつもりで1日に回さないといけない回数は、
{{<raw>}}
$$
75 / 7 \fallingdotseq 10.7 [回]
$$
{{</raw>}}
から、大体11回!

1日の放置時間は……
{{<raw>}}
$$
(11-1) \times 3 / 2 = 15 [時間]
$$
{{</raw>}}

なので半日以上!

ちなみに1日3時間くらい遊ぶとすると、1週間に回せる回数は
$3 \times 7 = 21$ [回]で、この程度じゃ23マスなんて埋まらないです……。

6時間寝てるとしてこの間中も電源つけてるとすると、
1週間に
$7 \times 7 = 49$ [回] ビンゴを回すことができて、こ
の時の確率は……$27.5\%$ 位!

低い……  
日中も電源入れっぱなしにしないとまずそう……。


---
以下確率計算に使ったソース(間違ってるかも)
```python
#!/usr/bin/env python3
import numpy as np

# 試行回数
NUM = 100

# マス目の数
ITEM_NUM = 25
# 24, 25マス目の分を除く次元数
DIMENTION = ITEM_NUM - 1

# 遷移確率行列
trans_prob = np.zeros((DIMENTION, DIMENTION))
for i in range(DIMENTION):
    trans_prob[i,i] = i / ITEM_NUM
    if i+1 < DIMENTION:
        trans_prob[i,i+1] = (ITEM_NUM - i) / ITEM_NUM

trans_prob[DIMENTION-1,DIMENTION-1] = 1

# 初期状態
initial_prob = np.zeros(DIMENTION)
initial_prob[0] = 1

power_prob = initial_prob

for i in range(NUM):
    power_prob = power_prob @ trans_prob
    print(power_prob[-1] * 100)
```

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.6.0/Chart.bundle.min.js"></script>
<link rel="stylesheet" href="/css/chart.css">
<script src="/js/2017/08/27/script.js"></script>
<script type="text/x-mathjax-config">
{{<raw>}}
  MathJax.Hub.Config({ tex2jax: { inlineMath: [['$','$'], ["\\(","\\)"]] } });
{{</raw>}}
</script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS_HTML"></script>
