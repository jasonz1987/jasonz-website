---
title: MacOS安装Swoole提示library not found for -lssl解决方案
lastmod: 2022-11-27T16:31:59+08:00
tags:
  - macos
  - swoole
  - ssl
---

## 问题描述

在 MacOS 上使用 Pecl 安装 Swoole 并开启 SSL 支持时，可能会遇到以下错误：

```
ld: library not found for -lssl
clang: error: linker command failed with exit code 1 (use -v to see invocation)
make: *** [swoole.la] Error 1
ERROR: `make' failed
```

## 问题分析

此问题通常是由于安装过程中未正确识别系统的 OpenSSL 路径导致的。

## 解决方法

### 1. 查看系统安装的 OpenSSL 版本

使用 Homebrew 列出已安装的 OpenSSL 公式：

```shell
brew list --formula | grep openssl
```

### 2. 查看 OpenSSL 的路径

获取 OpenSSL 的安装路径信息：

```shell
brew info openssl@1.1
```

### 3. 重新安装 Swoole

在安装 Swoole 时，当提示是否启用 SSL 支持时，输入 `yes` 并指定 OpenSSL 的路径。例如：

```shell
pecl install swoole
```

在安装过程中，当出现以下提示时：

```
enable openssl support? [no]
```

输入：

```
yes --with-openssl-dir=/usr/local/opt/openssl@1.1/
```

确保将 `/usr/local/opt/openssl@1.1/` 替换为你实际的 OpenSSL 安装路径。

