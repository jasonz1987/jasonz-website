---
title: jimp 转换gif格式错误的解决办法
lastmod: 2022-11-28T14:09:31+08:00
tags:
  - jimp
  - gif
  - base64
---

## 问题描述

在使用 Jimp 的 `getBase64Async` 函数将图片转换为 GIF 格式时，得到的 base64 编码结果为：

```
data:image/gif;base64,[object Promise]
```

这个问题在 [Jimp GitHub Issue #1056](https://github.com/oliver-moran/jimp/issues/1056) 中有详细讨论。

## 解决办法

使用 `getBufferAsync` 方法代替 `getBase64Async`，并手动构建 base64 字符串：

```javascript
image.getBufferAsync(image.getMIME()).then(data => { 
    const base64 = 'data:' + image.getMIME() + ';base64,' + data.toString('base64');
    // 处理生成的 base64 字符串
});
```
