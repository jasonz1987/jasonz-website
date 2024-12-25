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
