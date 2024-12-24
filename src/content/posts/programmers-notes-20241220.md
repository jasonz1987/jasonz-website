---
title: 程序员日记20241220
lastmod: 2024-12-20T22:46:26+08:00
tags:
  - Asterisk
  - AMI
  - React Native
  - Linux
  - Uniapp
  - UTS
  - 插件
  - SSH
  - 日记
---




## Asterisk

* `AMI` 目前在生产环境中发现2个问题，1，操作的延时很大，2.很多Action不支持异步的，需要在应用层来实现。



## React Native

* `RN` 的国内生态这么不理想吗，连个优量汇这种广告SDK插件都没几个可以用的吗？



## Linux

* 一个奇怪的问题，添加主机信任之后，突然就访问不了，一直提示`connect refused`，然后从`authorized_keys`里删除公钥，又重新添加又可以了。。



## Uniapp

* `UTS`里如果回调数组的话传入`any[]` ，到前端会变成`object`类型，设置为`any`才会解析为数组。
