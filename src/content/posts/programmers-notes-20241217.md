---
title: 程序员日记20241217
lastmod: 2024-12-17T05:14:55+08:00
tags:
  - Android
  - BLE
  - 蓝牙
  - Astro
  - 百度统计
  - 日记
---




## Android

* 安卓下的`BLE` 如果订阅数据的话，除了要设置`setCharacteristicNotification`为 `true`，另外必须要启用`CCC Descriptor `，以下是UTS代码示例（非kotlin代码）：

  ```typescript
  // 此处的00002902-0000-1000-8000-00805f9b34fb是固定值
  let descriptor = characteristic.getDescriptor(UUID.fromString("00002902-0000-1000-8000-00805f9b34fb"))
  if (descriptor != null) {
    console.log("CCC Descriptor")
    descriptor.value = BluetoothGattDescriptor.ENABLE_NOTIFICATION_VALUE
    bluetoothGatt?.writeDescriptor(descriptor)
    bluetoothGatt?.setCharacteristicNotification(characteristic, true)
  }
  ```

  

## Astro

* 给[博客](https://www.jason-z.com)直接加入百度统计代码，会有TS语法提示错误，可以通过`@ts-ignore`避免此问题

  ```js
    // @ts-ignore
  	 var _hmt: any[] = _hmt || [];
  ```

  



## 其他

* 偶然间翻了一下自己[51CTO的博客](https://blog.51cto.com/studiogang) 十几年前更新的文章，没想到人气还算不错的，如果坚持下去，可能应该会是头部的作者了吧，可惜事实是没有如果。。
