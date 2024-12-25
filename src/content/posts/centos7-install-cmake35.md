---
title: Centos7安装Cmake3.5
lastmod: 2022-12-16T11:23:32+08:00
tags:
  - centos
  - cmake
---


## 简介

本文档介绍如何在 Cen././////////////////////////////////tOS 7 上安装 CMake 3.5。

## 步骤

### 1. 下载 CMake 3.5

使用 `wget` 命令下载 CMake 3.5 的源码包：

```shell
wget https://cmake.org/files/v3.5/cmake-3.5.2.tar.gz
```

### 2. 解压文件

解压下载的压缩包：

```shell
tar xvf cmake-3.5.2.tar.gz
```

### 3. 编译

进入解压后的目录并进行编译：

```shell
cd cmake-3.5.2
./bootstrap --prefix=/usr
```

> **注意**: 确保你进入了正确的目录（`cmake-3.5.2`），而不是 `cmake-3.4.3`。

### 4. 安装

编译完成后，执行安装命令：

```shell
make && sudo make install
```

### 5. 验证版本

最后，验证 CMake 是否安装成功并检查其版本：

```shell
cmake --version
```

