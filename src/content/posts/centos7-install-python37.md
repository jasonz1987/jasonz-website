---
title: Centos7安装Python3.7
lastmod: 2022-11-25T08:30:12+08:00
tags:
  - centos
  - python
---

文本讲述的是 Python 3.7 的源码编译安装方法。

## 安装步骤

### 1. 检查当前的 Python 和 GCC 版本

检查当前系统中已安装的 Python 和 GCC 版本：

```shell
python -V
gcc --version
```

如果提示 `gcc: command not found`，则需要安装 GCC：

```shell
yum -y install gcc
```

### 2. 安装依赖

安装编译 Python 所需的依赖包：

```shell
yum -y install gcc patch libffi-devel python-devel zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gdbm-devel db4-devel libpcap-devel xz-devel
```

### 3. 下载、解压并安装

下载 Python 3.7.10 源码包并进行编译安装：

```shell
wget https://www.python.org/ftp/python/3.7.10/Python-3.7.10.tgz
tar zxvf Python-3.7.10.tgz
cd Python-3.7.10
./configure
make && sudo make install
```

### 4. 建立软连接（如果需要的话）

为新安装的 Python 3.7 创建软连接，以便通过 `python3` 和 `pip3` 命令使用：

```shell
ln -s /usr/local/bin/python3.7 /usr/bin/python3
ln -s /usr/local/bin/pip3.7 /usr/bin/pip3
```

### 5. 验证版本

验证 Python 和 pip 是否成功安装：

```shell
python3 --version
pip3 --version
```

