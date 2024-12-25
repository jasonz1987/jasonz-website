---
title: 密码学学习笔记 - 卡西斯基测试
lastmod: 2022-10-09T06:19:00+08:00
tags:
  - 密码学
  - 古典密码
  - kasiski
---

## 原理

卡西斯基测试（Kasiski Examination）是一种用于分析多表替换密码（如维吉尼亚密码）的方法。它通过寻找密文中重复出现的子串来推断密钥长度。

### 重复子串分析

由于一些较短的常用单词（例如英文单词 "THE"）在明文中频繁出现，它们极有可能被同样的密钥字母加密，从而在密文中重复出现。例如：

**明文**：
```
THE APPLE IS THE PEN
```

**密钥**：
```
ABCDEABCDEABCDEA
```

**密文**：
```
TIG DTPJF LW TIG SIN
```

可以看到，明文中的两个 "THE" 被加密成了相同的字符串 "TIG"。对于更长的段落，此方法更为有效，因为通常密文中重复的片段会更多。

### 示例分析

考虑以下密文片段：

```
DYDUXRMH TVDV NQD QNW DYDUXRMH ARTJGW NQD
```

其中，两个 "DYDUXRMH" 的出现相隔了 18 个字母。因此，可以假定密钥的长度是 18 的约数，即长度为 18、9、6、3 或 2。而两个 "NQD" 则相距 20 个字母，意味着密钥长度应为 20、10、5、4 或 2。取两者的交集，则可以基本确定密钥长度为 2。

---

## 代码实现

以下是卡西斯基测试的 Python 实现代码：

[源码链接](https://github.com/nytr0gen/kasiski/blob/master/kasiski.py)

```python
# https://github.com/sdsunjay/kasiski/blob/master/asgn2.pdf
# usage: python kasisky.py [ -v ] [ -m length ] [ infile [ outfile ] ]
# python kasiski.py krypton4.in | awk '{print $4}' | tail -n+3 | sort -nu | factor

from sys import argv
import re
import math

is_debug = False
debug = lambda *args, **kwargs: is_debug and print(*args, **kwargs)

def normalize(s):
    s = s.strip().upper()
    s = re.sub(r'[^A-Z]+', '', s)
    return s

def kasiski(s, min_num=3):
    s = normalize(s)
    out = ''

    matches = []
    found = {}
    for k in range(min_num, len(s) // 2):
        found[k] = {}
        shouldbreak = True
        for i in range(0, len(s) - k):
            v = s[i:i+k]
            if v not in found[k]:
                found[k][v] = 1
            else:
                found[k][v] += 1
                shouldbreak = False

        if shouldbreak:
            break

        for v in found[k]:
            if found[k][v] > 2:
                matches.append(v)

    out += "Length  Count  Word        Factor  Location (distance)\n"
    out += "======  =====  ==========  ======  ===================\n"
    keylens = {}
    for v in matches:
        k = len(v)
        p = []
        for i in range(len(s)):
            if s[i:i+k] == v:
                p.append(i)

        # assuming len(p) > 1
        factor = p[1] - p[0]
        for i in range(2, len(p)):
            factor = math.gcd(factor, p[i] - p[i - 1])

        locations = ""
        for i in range(len(p)):
            locations += f"{p[i]} "
            if i > 0:
                locations += f"({p[i] - p[i-1]}) "

        out += f"{k:6d}  {found[k][v]:5d}  {v:10s}  {factor:6d}  {locations}\n"

    return out

i, k = 1, 0
min_num = 3
infile, outfile = None, None
while i < len(argv):
    if argv[i] == '-v':
        is_debug = True
        debug(f"debug: {is_debug}")
    elif argv[i] == '-m':
        i += 1
        min_num = int(argv[i])
        debug(f"min_num: {min_num}")
    elif argv[i][0] != '-':
        if k == 0:
            infile = argv[i]
            debug(f"infile: {infile}")
        elif k == 1:
            outfile = argv[i]
            debug(f"outfile: {outfile}")
        k += 1
    i += 1

s = None
if infile is None:
    s = input()
else:
    with open(infile, 'r') as f:
        s = f.read()

out = kasiski(s, min_num)
if outfile is None:
    print(out)
else:
    with open(outfile, 'w') as f:
        f.write(out)
```

---

## 参考文献

- [Kasiski Examination - Wikipedia](https://en.wikipedia.org/wiki/Kasiski_examination)

