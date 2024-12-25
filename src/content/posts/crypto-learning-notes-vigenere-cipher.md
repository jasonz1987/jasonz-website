---
title: 密码学学习笔记 - 维吉尼亚密码
lastmod: 2022-10-09T14:26:00+08:00
tags:
  - 密码学
  - 维吉尼亚密码
  - 古典密码
  - 加密
  - 破解
---



凯撒密码对于每个字母都会使用相同的偏移量进行偏移，从而造成了偏移量很有限（1-25），通过一些频率分析和穷举法就可以轻易破解，而维吉尼亚密码为了改进这一问题，使用了一系列的凯撒密码生成密码字母表（首次提出密钥的概念）来进行加密，我们也称之为多表密码。

我们还是先了解一下原理。

## 算法原理

首先，为了生成密码/密钥，我们需要借助表格法。这一表格包括了26行字母表，每一行都由前一行向左偏移一位得到，如图所示：

例如，假设明文为：

```
ATTACKATDAWN
```

我们随机选择某一关键词并重复而得到密钥，如关键词为LEMON时，密钥为：

```
LEMONLEMONLE
```

对于明文的第一个字母A，对应密钥的第一个字母L，于是使用表格中L行字母表进行加密，得到密文第一个字母L。类似地，明文第二个字母为T，在表格中使用对应的E行进行加密，得到密文第二个字母X。以此类推，可以得到：

明文：ATTACKATDAWN
密钥：LEMONLEMONLE
密文：LXFOPVEFRNHR

解密的过程则与加密相反。例如：根据密钥第一个字母L所对应的L行字母表，发现密文第一个字母L位于A列，因而明文第一个字母为A。密钥第二个字母E对应E行字母表，而密文第二个字母X位于此行T列，因而明文第二个字母为T。以此类推便可得到明文。

我们同样可以讲维吉尼亚密码的加密算法利用同余算法转换为数学公式。

## 代码实现：

* 加密

```python
import re
import string



alphabets = "abcdefghijklmnopqrstuvwxyz" # this is the english letters
def encrypt(p, k):
    c = ""
    kpos = [] # return the index of characters ex: if k='d' then kpos= 3
    for x in k:
       # kpos += alphabets.find(x) #change the int value to string
        kpos.append(alphabets.find(x))
    i = 0
    for x in p:
      if i == len(kpos):
          i = 0
      pos = alphabets.find(x) + kpos[i] #find the number or index of the character and perform the shift with the key
      print(pos)
      if pos > 25:
          pos = pos-26               # check you exceed the limit
      c += alphabets[pos].capitalize()  #because the cipher text always capital letters
      i +=1
    return c
```
* 解密：

```python
import re
import string


def decrypt(c, k):
    p = ""
    kpos = []
    for x in k:
        kpos.append(alphabets.find(x))
    i = 0
    for x in c:
      if i == len(kpos):
          i = 0
      pos = alphabets.find(x.lower()) - kpos[i]
      if pos < 0:
          pos = pos + 26
      p += alphabets[pos].lower()
      i +=1
    return p
```


## 破解方法：

维吉尼亚密码因为引入了密钥的概念，所以可能密文相同的字母可能在明文中代表不同的明文，因此简单的统计字母出现的频率并不能破解。

但是这里大家再回头看一下算法原理的时候，会发现密钥生成规则时会发现，密钥的生成是通过关键词循环重复生成的，所以我们只要知道关键词的长度，就可以破解他。 而著名的卡西斯基试验和弗里德曼试验就是为了得到密钥的长度。



## 参考文献：

https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher



