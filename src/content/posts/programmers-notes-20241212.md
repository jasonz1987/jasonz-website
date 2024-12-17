---
title: 程序员日记20241211
lastmod: 2024-12-11T14:26:00+08:00
tags:
  - IOS
  - 日记
  - Astro
  - 蓝牙
  - Bun
  - Markdown
  - 博客
---

## IOS

* `BLE`蓝牙折腾的一天，只能说之前学习的不够深入，只以为服务ID，特征值ID就可以操作了，结果忽略了特征值ID 是有不同的`properties`的，需要根据`property`的不同，判断是否具备`.write` ，`.notify`，`.read`属性来进行不同的获取值的方法，否则，就会造成你以为自己发送了指令，但在回调里获取不到值的情况。
* 学习了`Xcode`辅助工具`Packetlogger`进行蓝牙抓包，确实好用。



## Astro

* 在继续对比了一番之后，还是放弃了原来自己的`nextjs`+ `headless cms` 搭建博客的方案，最终选择了`Astro`+`Markdown`，从今天开始折腾。

* 首次接触到了`bun.sh`这个工具，据说比`NodeJS` 快，然而同样的情况下，我的依赖下载了一夜。。

