---
title: 程序员日记20241218
lastmod: 2024-12-18T02:03:43+08:00
tags:
  - Android
  - Android Studio
  - Aidl
  - AGP
  - Astro
  - 备案
  - SSG
  - 日记
---




## Android

* 使用 **Android Studio** 将 `Aidl` 生成的`Java`类的时候，对于AGP 8+，将Aidl文件放置到**package**目录下**build**并不会直接生成，需要在**build.gradle**文件里设置：

  ```ini
  buildFeatures {
      aidl = true
  }
  ```

  

## Astro

* 备案被驳回了，因为如果多个域名指向同一个网址，需要显示不同的备案号，`SSG` 模式下不支持动态获取，所以只能还是用原生的`window.location.host` 来识别和显示。
