---
title: 程序员日记20241206
lastmod: 2024-12-06T14:26:00+08:00
tags:
  - Android
  - Uniapp
  - UTS
  - ProcessPhoenix
  - JNI
  - 日记
  - 呼叫转移
  - Zapier
  - Asterisk
  - AMI
  - Playwright
---



## Android

* 如何优雅的重启安卓App，尝试了一些代码效果不理想，结果还是用了[*ProcessPhoenix*](https://github.com/JakeWharton/ProcessPhoenix) 这个库，一行代码搞定。

* 又是被`JNI`折磨的一天，厂商给了一个少参数的.h文件，结果JAVA调用就报错了，我尝试`nm`和`objdump`来分析`so`文件，但是只能分析出函数名，无法获取完整参数，有知道的大佬告知一下。

## Asterisk

* 修改conf文件之后，调用`Asterisk` 的`AMI` 的 `reload`命令 好像并没有生效，但是CLI模式下的`core reload`就可以，今天时间不够，晚点儿看一下源码研究一下。

## 工作流

* 准备实现一个可以自动同步到文章到各大平台的工具（自用），简单看了一下工作流网站[Zapier](https://zapier.com/)是真不错，但是对国内的APPs支持就差了点儿，最终还是打算用`python` + `actionscript` + `playwright`来从头撸吧。

## UTS插件

* 客户咨询了一个做电话呼叫转移插件的功能，简单看了一下安卓`API`是有的，但是不太清楚对手机和SIM卡的适配性如何。
* 如果修改了`UTSAndroidHookProxy`代码，切记要重新自定义基座，才能生效！！！

