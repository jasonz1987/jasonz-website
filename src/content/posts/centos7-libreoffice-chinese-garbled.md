---
title: Centos7下使用Libreoffice中文乱码
lastmod: 2022-11-25T07:51:42+08:00
tags:
  - centos
  - libreoffice
  - 乱码
---


## 解决步骤

### 1. 验证系统是否安装中文字体

检查系统中已安装的字体：

```shell
fc-list
```

如果提示 `fc-list: command not found`，则需要安装相关依赖包：

```shell
yum -y install cups-libs fontconfig
```

### 2. 拷贝 Windows 字体

在 Windows 电脑上找到 `C:\Windows\Fonts` 目录，拷贝其中的 `.ttf` 字体文件。

![Windows 字体目录](https://upload-images.jianshu.io/upload_images/3535141-843177b49e88e1b4.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

### 3. 将字体文件上传到 Linux 系统

在 Linux 系统的 `/usr/share/fonts` 目录下新建一个 `windows` 文件夹，并将字体文件上传到该文件夹，然后修改权限：

```shell
mkdir -p /usr/share/fonts/windows
chmod -R 755 /usr/share/fonts/windows
```

### 4. 刷新字体缓存

刷新字体缓存以使新字体生效：

```shell
fc-cache -fv
```

### 5. 验证字体是否加载成功

验证中文字体是否加载成功：

```shell
fc-list :lang=zh
```

如果第 4 步不生效，可以尝试重启机器：

```shell
reboot
```

