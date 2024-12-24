---
title: 程序员日记20241224
lastmod: 2024-12-24T21:36:17+08:00
tags:
  - React Native
  - React
  - Antd
  - Uniapp
  - UTS
  - Pjsip
  - 日记
---




## React Native

* RN项目好像修改根目录的`build.gradle`的仓库地址，好像对插件工程的仓库也没有生效，另外也尝试了在`gradle.properties`增加了代理，好像也没有用

  ```glsl
  org.gradle.jvmargs=-DsocksProxyHost\=127.0.0.1 -DsocksProxyPort\=15236
  ```
  
* 旧的插件报了一个**"re-registered bubbling event"** 的错误，原因是`bubbling`与`direct`事件冲突：

  ```objc
  //RCT_EXPORT_VIEW_PROPERTY(onDismissed, RCTBubblingEventBlock);
  ```

  

## React

* `Antd`里的`TreeSelect`组件 ，如果开了自定义字段的话并且设置`showSearch`的时候，搜索不会生效的，还需要设置`treeNodeFilterProp`字段，例如

```javascript
showSearch: true,
filterTreeNode: true,
treeNodeFilterProp: "name",
fieldNames: {
  label: 'name',
  value: 'id',
},
```



## Uniapp

* `UTS` 中 `number`调用`toByte()`方法转换为`byte`的时候要注意，传入的十进制是有符号的，也就是 -128 到 127范围，如果超出此范围会溢出。 



## Pjsip

* 生产环境上的一个BUG，如果通话的时候播放音乐，如果暂停音乐，然后再暂停通话就会闪退，原因是`mediaplayer`的资源释放，导致线程断言失败，因此在Pjsip里，资源的释放仅仅设置为null是没有用的，需要使用安全方法`delete()`
