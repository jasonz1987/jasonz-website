---
title: 密码学学习笔记 - 重合指数
lastmod: 2022-10-09T12:44:11+08:00
tags:
  - 密码学
  - 重合指数
  - 古典密码
---

## 原理

重合指数（Index of Coincidence, IC），又称Friedman测试，是通过分析文本中相同字母出现的频率来破解多表密码（例如，维吉尼亚密码）的一种常用方法。

### 数学公式

重合指数的数学公式为：

\[
\mathbf{IC} = \frac{\sum_{i=1}^{c} n_i (n_i - 1)}{N(N-1)/c}
\]

其中：
- \( N \) 是文本字符的总长度，
- \( n_i \) 是字母（1-26）出现的次数。

对于英文语言，结合英文字母的频率，我们可以将公式换算为：

![重合指数公式](https://www.jason-z.com/storage/tinymce/images/4b58ed95fefc71ca92feebe89b46ead06343f2eb7293a.png)

其中 \( d \) 为密钥的长度。

### 应用场景

通过重合指数，我们能够区分密文是单表代换密码还是多表代换密码。具体来说：

- **单表代换密码**：如果密文的重合指数较高（接近 0.0700），类似于纯文本，则消息可能已使用转置密码或单字母替换加密。
- **多表代换密码**：如果密文的重合指数较低（接近 0.0385），类似于随机文本，则消息可能已使用多字母密码加密。

例如，密钥长度为 4-8 的维吉尼亚密码，IC 指数一般为 0.045 ± 0.05。

## 示例分析

考虑以下密文片段：

```
QPWKA LVRXC QZIKG RBPFA EOMFL JMSDZ VDHXC XJYEB IMTRQ WNMEA
IZRVK CVKVL XNEIC FZPZC ZZHKM LVZVZ IZRRQ WDKEC HOSNY XXLSP
MYKVQ XJTDC IOMEE XDQVS RXLRL KZHOV
```

我们分别带入密钥长度 1-10 来计算重合指数（这里计算的是集合）：

| 密钥长度 | IC 重合指数 |
|----------|-------------|
| 1        | 1.12        |
| 2        | 1.19        |
| 3        | 1.05        |
| 4        | 1.17        |
| 5        | 1.82        |
| 6        | 0.99        |
| 7        | 1.00        |
| 8        | 1.05        |
| 9        | 1.16        |
| 10       | 2.07        |

从上表可以看出，密钥长度为 5 和 10 时，IC 指数显著高于其他长度，这提示我们密钥长度可能是 5 或 10。

---

## 参考文献

- [Index of Coincidence - Wikipedia](https://en.wikipedia.org/wiki/Index_of_coincidence)
- [Kasiski Examination Assignment](https://github.com/sdsunjay/kasiski/blob/master/asgn2.pdf)

