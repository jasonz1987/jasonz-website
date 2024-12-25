---
title: 密码学学习笔记 - 凯撒密码
lastmod: 2022-10-06T14:26:00+08:00
tags:
  - 密码学
  - 凯撒密码
  - 频率分析
  - 加密
  - 古典密码
---


凯撒密码是一种古典加密算法。

## 加密原理

凯撒密码的加密算法的核心原理实际上就是替换加密。

将明文中的字母，通过偏移一定量，替换为新的字母生成密文。

假设偏移量为+3（即向后偏移），那么可以生成对应的明文和密文字母表：

明文字母表：ABCDEFGHIJKLMNOPQRSTUVWXYZ  
密文字母表：DEFGHIJKLMNOPQRSTUVWXYZABC

![Caesar cipher -
Wikipedia](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Caesar_cipher_left_shift_of_3.svg/1200px-Caesar_cipher_left_shift_of_3.svg.png)

实际使用中，直接替换，就可以进行加密和解密了，例如：

**明文**：THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG  
**密文**：WKH TXLFN EURZQ IRA MXPSV RYHU WKH ODCB GRJ

凯撒密码可以利用数学中的同余算法来进行计算，将字母用数字代替，A=0，B=1，...，Z=25。

其中 x 为明文/密文字母，n 为偏移量。

### 同余算法

两个整数共同除以一个整数，如果他们的余数相同，则两个整数称为同余。

## Python实现

### 加密代码

```python
# A python program to illustrate Caesar Cipher Technique
def encrypt(text, s):
    result = ""
    # traverse text
    for i in range(len(text)):
        char = text[i]

        # Encrypt uppercase characters
        if char.isupper():
            result += chr((ord(char) + s - 65) % 26 + 65)

        # Encrypt lowercase characters
        else:
            result += chr((ord(char) + s - 97) % 26 + 97)

    return result

# Check the above function
text = "ATTACKATONCE"
s = 4
print("Text  : " + text)
print("Shift : " + str(s))
print("Cipher: " + encrypt(text, s))
```

## 破解方法

在已知偏移量的情况下的破解方法在上面的破解原理里已经说的较为清楚了，我们直接上代码

```python
#A python program to illustrate Caesar Cipher Technique
def encrypt(text,s):
    result = ""
 
    # traverse text
    for i in range(len(text)):
        char = text[i]
 
        # Encrypt uppercase characters
        if (char.isupper()):
            result += chr((ord(char) + s-65) % 26 + 65)
 
        # Encrypt lowercase characters
        else:
            result += chr((ord(char) + s - 97) % 26 + 97)
 
    return result
 
#check the above function
text = "ATTACKATONCE"
s = 4
print ("Text  : " + text)
print ("Shift : " + str(s))
print ("Cipher: " + encrypt(text,s))
```

1）穷举法，实际我们的最大偏移量最多也就25，那么我们只要将密文分别进行1-25的偏移量解密，然后通过观察和分析解密后的明文的语义，基本上就能找出对应的偏移量。

2）频率分析法：正常情况下，对我们对明文中进行频率分析，会得出出现最高的单词应该为E，那么，我们同样对密文也进行频率分析，得出频率最高的单词，那么就可以计算出偏移量。

图例中为偏移量为1时，加密前后的字母频率分析对比。可以很清晰地看出之前为E，之后为F，从而推断偏移量基本为1.

![](https://miro.medium.com/max/1400/1*nZnP-Rpr-psKqSGoIXomvA.png)

当然，这种破解方法和密文的长度还是有关系的，密文长度越长，更接近自然语言，准确率越高。



## 参考文献

<https://en.wikipedia.org/wiki/Caesar_cipher>