---
title: CSS网站变灰效果
lastmod: 2022-12-01T12:21:25+08:00
tags:
  - css3
---

配合一些哀悼日，需要把网站变为灰色，这里可以借助`css3`的`filter`属性来实现。

代码如下:

```css
html {
    -webkit-filter : grayscale(100%);
    -moz-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    filter: grayscale(100%);
  filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
}
```

