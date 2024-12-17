---
title: 程序员日记20241213
lastmod: 2024-12-13T12:26:00+08:00
tags:
  - Bun
  - 日记
  - Astro
  - 博客
  - 官网
  - Nginx
  - Giscus
  - 1Panel
  - IOS
  - BLE
  - 蓝牙
---

## Bun

* 昨天下载了一夜，依赖仍然没有成功，看来只能找下一下解决办法了，看了官网的文档，在`$HOME/.bunfig.toml` 全局配置源，类似`npm`配置

  ```ini
  [install]
  registry = "https://registry.npmmirror.com/"
  ```

  

## Astro

* 个人博客 [https://www.jason-z.com](https://www.jason-z.com) 初步搭建完成了，用了别人的主题稍微改了一下 ，2个小时左右就上线了，效果还是很不错的；

* 随便把公司的官网 [https://byteee.cn](https://byteee.cn) 也用`Astro`重构了一下，不过`Bussiness`相关的主题免费的就不多了，付费的要筛选，索性先拿着一个先用着，后面根据情况再完善吧；

* `Astro` 默认使用的是`static`模式，所以编译出来的`dist` 目录都是静态HTML文件，如果自己部署到`nginx`服务器上，可能直接访问一些路由诸如 /blog，会出现 403 / 404错误，因为实际编译出来的是blog.html，所以需要在nginx 上做一些解析配置：

  ```ini
  location / {
      try_files $uri $uri.html $uri/ /index.html;
  }
  
   # 兼容以 / 结尾的路径，将 /blog/ 重定向到对应的 index.html
  location ~ ^(.+)/$ {
      try_files $1/index.html $1.html $1/ /index.html;
  }
  ```

  

## Giscus

* Giscuss 初体验，配置比较简单，体验也不错，后期计划将其加入到[https://byteee.fund](https://byteee.fund) 里面去。



## SSL

* 今天看到公号上有一个推文，说`SSL`免费证书的有效期好像会进一步减少到45天，看来自动化续签的需求会进一步提升，看到有人推荐了`github`上的开源项目`domain admin` ，试用了一下还是不错，但是最后发现好像`1panel`基本上内置了这个功能了，所以可能暂时又用不到了。。



## 1Panel

* 作为一个传统的运维，所以对**宝塔** 这种的产品有点儿排斥。但是，这种观点有时候也会动摇的，后来看到了最近推荐了`1panel`，而且还是`JumpServer`的公司出的，之前做运维的时候和这家公司还有些交情，所以今天果断决定试试，没想到初次体验下来，感觉还是不错的，其他功能没有深入研究，至少这UI还是比较现代化的。
* 如果多个域名映射到一个网站上，并且都需要开启`https`的话，这里好像网站默认只会绑定一个`SSL`证书，导致其他域名的`https`访问失败，不知道是`1panel`功能上的BUG还是我使用的姿势不对，暂时的解决方案，就是自己手动修改`nginx` 配置， 通过不同的`Server Name`来映射证书。



## IOS

* `BLE`使用`retrieveConnectedPeripherals` 来进行查找已连接外设的时候，注意这里传入的services 是服务ID，而且测试的时候是需要必传的；
* `BLE`在调用`disconnect` 断开设备连接的时候，实际上调用的是应用级别的连接，系统级别的连接是无法断开的，这也很好解释为什么你调用这个方法之后，在IOS设备列表里仍然可以看到外设链接着。