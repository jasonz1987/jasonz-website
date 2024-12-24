---
title: 程序员日记20241219
lastmod: 2024-12-19T02:03:54+08:00
tags:
  - Android
  - Jetpack Compose
  - 软键盘
  - Asterisk
  - MIFARE
  - IC卡
  - 日记
---




## Android

* `jetpack compose`里的`checkbox` 避免使用 `remeber` 来存储局部状态的`checkedState` 或者也可以使用 `rememberUpdatedState`来实时更新；

* `jetpack compose`中软键盘和焦点的可以可以使用`keyboardcontroller`和`LocalFocusManager` 或 `FocusRequester` 进行管理，不过要注意`FocusRequester`必须要绑定在`modifer` 上，不然会闪退；

* 修改`imeAction = ImeAction.Send` 类型的时候，同样要注意在 `keyboardActions` 监听对应的 `onSend`, 其他类型同样的道理；

  

## Asterisk

* 设置`qualify`选项只是用来检测分机的电话状态，并不会自动取分机的注册信息；

* 如果使用`realtime`模式，可以通过`lastms`字段是否大于0，来判断是否注册状态；

  

## 其他

* 了解了一些关于`MIFARE`， `CPU卡`， `非接触IC卡`等相关名词的介绍
