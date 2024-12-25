---
title: 密码学学习笔记 - 频率分析
lastmod: 2022-10-09T14:26:00+08:00
tags:
  - 密码学
  - 频率分析
  - 破解
---



频率分析是理论上是统计学中的一种方法，而应用在密码学历可以研究密文中字母或字母组的频率。并且可以做为作破解替换密码，凯撒密码，维吉尼亚密码的辅助工具。

## 原理

频率分析实际上的工作就是统计字母或者字母组合在文本中出现的次数，并通过和样本中的字母频率次数进行对比，然后找出对应的规律。

## 代码实现

我们可以借助于`python`的`Counter`方法来进行字母的统计。

```python
from collections import Counter
  
initializing string
test_str = "THIS IS A TEST STRING"
using collections.Counter() to get
count of each element in string
res = Counter(test_str)
printing result


print ("Count of all characters is :\n " +  str(res))
```

运行脚本，最终的运行结果是：

> Count of all characters is :
> Counter({'T': 4, 'S': 4, ' ': 4, 'I': 3, 'H': 1, 'A': 1, 'E': 1, 'R': 1, 'N': 1, 'G': 1})



当然，为了更直接的显示，我们可以借助 `Matplotlib` 这里图形绘制工具，将其绘制为图表。


```shell
python3 -m pip install matplotlib
```


然后，将上面的代码稍微修改下：


```python
from collections import Counter
import matplotlib.pyplot as plt
initializing string
test_str = "THIS IS A TEST STRING"
using collections.Counter() to get
count of each element in string
res = Counter(test_str).most_common()
x, y = zip(*res)
plt.bar(x, y)
plt.show()
```





重新运行，就可以生成可视化图表。



PS:

这里因为我的`python`能力有限，所以只做了一些简单的图表演示，实际上也可以参考这篇文章，把图表进一步丰富化。



另外一个，在实际进行频率分析的时候，我们可能不仅仅会对单字母分析，还可以对BIGRAMS（2个字母），TRIGRAMS（3个字母），甚至N-GRAM（多字母）的情况进行分析，同样，我可以修改代码可以达到这一目的。


```python
from collections import Counter
import matplotlib.pyplot as plt
initializing string
test_str = "THIS IS A TEST STRING"
Using Counter() + generator expression
res = Counter(test_str[idx : idx + 2] for idx in range(len(test_str) - 1))
printing result


print("The Bigrams Frequency is : " + str(dict(res)))
```



运行结果

> The Bigrams Frequency is : {'TH': 1, 'HI': 1, 'IS': 2, 'S ': 2, ' I': 1, ' A': 1, 'A ': 1, ' T': 1, 'TE': 1, 'ES': 1, 'ST': 2, 'T ': 1, ' S': 1, 'TR': 1, 'RI': 1, 'IN': 1, 'NG': 1}



当然，细心的同学也可能会发现，这里输出的双字母情况下还包含了空格的情况，所以实际应用中大家可以对上面的代码进行完善到达自己的目的。



这里，我自己也在工具匠上实现了一个在线的[频率分析工具](https://www.toolkk.com/tools/frequency-analysis)，大家有兴趣的也可以试试。



## 参考文献：

https://en.wikipedia.org/wiki/Frequency_analysis

https://jrinconada.medium.com/cracking-caesar-cipher-8fe79226aabd

https://realpython.com/python-counter/


