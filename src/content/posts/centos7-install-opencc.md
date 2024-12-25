---
title: Centos7安装Opencc
lastmod: 2022-12-19T14:25:51+08:00
tags:
  - centos7
  - opencc
---


## 准备工作

安装必要的依赖包：

```shell
yum -y install cmake
yum -y install git
```

## 下载代码

克隆 OpenCC 仓库：

```shell
git clone https://github.com/BYVoid/OpenCC
```

## 安装文档生成工具

安装 Doxygen 用于生成 OpenCC 的使用文档：

```shell
yum -y install doxygen
```

## 编译安装

进入 OpenCC 目录并编译安装：

```shell
cd OpenCC
mkdir build && cd build
cmake ..
make && sudo make install
```

## 创建链接

创建符号链接以确保库文件路径正确：

```shell
ln -s /usr/lib/libopencc.so.2 /usr/lib64/libopencc.so.2
```

