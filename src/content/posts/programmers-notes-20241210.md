---
title: 程序员日记20241210
lastmod: 2024-12-10T14:26:00+08:00
tags:
  - Android
  - Uniapp
  - UTS
  - Gradle
  - Flutter
  - 日记
---

## Android

* **org.gradle.api.GradleException** 编译错误。

解决方案：gradle版本过低，升级到7.5以上即可

```
distributionUrl=https\://services.gradle.org/distributions/gradle-7.6-all.zip
```

```groovy
    dependencies {
        classpath 'com.android.tools.build:gradle:7.2.2'
        ....
```



* **Targeting S+ (version 31 and above) requires that one of FLAG_IMMUTABLE or FLAG_MUTABLE** 编译错误

​	解决方案：升级**work:work-runtime** 依赖版本到2.7+

       ```groovy
        implementation 'androidx.work:work-runtime:2.7.0'
       ```



## UTS

* `uniapp` 虽然默认依赖了轮子哥的`XXPermission`让权限申请变的简单，但是如果用户去处理诸如蓝牙，存储等一些权限权限的时候，还必须考虑版本的适配性，因此还是有诸多不便，所以不知道是否有类似的原生库在做这个事情不？如果没有，到时候自己空了撸一个。
* 有个客户咨询了，是否可以在安卓下获取到运行进程的集合，从Android 7.0以后因为安全限制的问题已经不行了，不知道是否有其他黑魔法？



## 其他

* 今天感觉是工作效率是比较高的，交付了原生SDK项目，另外把拖了好久的`flutter`蓝牙定制插件项目的初版做了出来，后面一下午专心研究了一个手环项目的DEMO，把整个流程大致上都熟悉得差不多了，后面写安卓的接口基本上就用了半天+一晚上，看来还是要在前期要多下功夫，后面开发效率也会高很多。