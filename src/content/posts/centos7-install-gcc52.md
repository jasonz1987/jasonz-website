---
title: Centos7安装GCC5.2
lastmod: 2022-12-16T11:43:56+08:00
tags:
  - centos
  - gcc
---


## 简介

CentOS 7 默认的 GCC 版本较低，如果需要升级到 GCC 5.2，可以通过源码编译的方式进行安装。

## 步骤

### 1. 下载 GCC 5.2.0 源码

使用 `wget` 命令下载 GCC 5.2.0 的源码包：

```shell
wget http://ftp.gnu.org/gnu/gcc/gcc-5.2.0/gcc-5.2.0.tar.bz2
tar -jxvf gcc-5.2.0.tar.bz2
```

### 2. 进入 GCC 目录

解压完成后，进入 GCC 源码目录：

```shell
cd gcc-5.2.0
```

### 3. 下载依赖包

GCC 需要一些额外的依赖包，可以使用自带的脚本下载：

```shell
./contrib/download_prerequisites
```

### 4. 创建 build 文件夹

为了避免污染源码目录，建议在源码目录外创建一个 `build` 文件夹进行编译：

```shell
mkdir build
cd build
```

### 5. 编译安装

配置并编译 GCC。此过程可能耗时较长，请耐心等待：

```shell
../configure --prefix=/usr/local/gcc --enable-languages=c,c++ --disable-multilib
make && sudo make install
```

### 6. 修改软连接

为确保系统默认使用新安装的 GCC 和 G++，需要修改软连接：

```shell
sudo mv /usr/bin/gcc /usr/bin/gcc_bak
sudo ln -s /usr/local/gcc/bin/gcc /usr/bin/gcc

sudo mv /usr/bin/g++ /usr/bin/g++_bak
sudo ln -s /usr/local/gcc/bin/g++ /usr/bin/g++
```

### 7. 查看升级后版本

最后，验证 GCC 和 G++ 是否成功升级：

```shell
gcc --version
g++ --version
```


通过以上步骤，你应该能够在 CentOS 7 上成功安装并配置 GCC 5.2。如果遇到任何问题，请参考官方文档或社区支持。

