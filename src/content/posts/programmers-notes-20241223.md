---
title: 程序员日记20241223
lastmod: 2024-12-23T11:21:02+08:00
tags:
  - React Native
  - Expo
  - Uniapp
  - UTS
  - 日记
---




## React Native

* `Expo` 下要区分 ` Managed Workflow` 和 `Bare Workflow`, `Managed Workflow` 下默认不支持原生插件，需要`Eject`才能使用；

* 本来准备自己撸一个`RN`的优量汇的插件的，但是群内有一位米好心的老哥竟然免费分享给了我，十分感谢；

* 优量汇广告组件渲染的时候，还是要给与样式和高度，不然渲染不出来。

  

## Uniapp

* 遇到一个奇怪的问题，`nvue`里在`onLoad` 去调用 `UTS`组件的销毁方法时候，好像不会执行，组件的实例也没销毁，暂时的解决方法时候`UTS`组件本身的`NVUnloaded`事件里去销毁；
