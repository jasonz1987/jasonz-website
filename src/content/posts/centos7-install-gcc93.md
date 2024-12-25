---
title: Centos7安装GCC9.3
lastmod: 2022-12-19T14:14:48+08:00
tags:
  - centos
  - gcc
  - devtoolset
---


高版本的 GCC 需要借助 **devtoolset** 来安装。

## 安装步骤

### 1. 安装 SCL

首先，安装 Software Collections (SCL)：

```shell
yum -y install centos-release-scl-rh
```

### 2. 安装 devtoolset

接着，安装 devtoolset-9：

```shell
yum -y install devtoolset-9*
```

### 3. 启动 devtoolset

启动 devtoolset-9 并使其生效：

```shell
scl enable devtoolset-9 bash
source /opt/rh/devtoolset-9/enable
```

### 4. 加入到开机启动

为了使 devtoolset-9 在系统启动时自动启用，可以在 `/etc/rc.d/rc.local` 文件最下面加入以下内容：

```shell
echo "source /opt/rh/devtoolset-9/enable" >> /etc/rc.d/rc.local
chmod +x /etc/rc.d/rc.local
```

### 5. 验证版本

验证 GCC 是否成功安装并生效：

```shell
which gcc
gcc --version
```

## 移除 devtoolset

如果需要移除 devtoolset-9，可以使用以下命令：

```shell
yum -y remove devtoolset-9* libasan libatomic libcilkrts libitm liblsan libtsan libubsan
```


通过以上步骤，你应该能够在 CentOS 7 上成功安装并配置 GCC 9.3。如果遇到任何问题，请参考官方文档或社区支持。

