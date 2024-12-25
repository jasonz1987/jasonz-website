---
title: Centos7 Yum安装PHP8.0
lastmod: 2022-11-27T16:37:43+08:00
tags:
  - centos
  - php
  - yum
---

## 安装步骤

### 1. 安装 REMI 源

安装 EPEL 和 REMI 源：

```shell
yum -y install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
yum -y install https://rpms.remirepo.net/enterprise/remi-release-7.rpm
```

### 2. 安装 yum-utils

安装 `yum-utils` 工具：

```shell
yum -y install yum-utils
```

### 3. 开启 PHP 8.0 REMI 库

禁用所有 REMI PHP 库，并启用 PHP 8.0 的 REMI 库：

```shell
yum-config-manager --disable 'remi-php*'
yum-config-manager --enable remi-php80
```

### 4. 更新 yum

更新系统包以确保使用最新的软件源信息：

```shell
yum update
```

### 5. 安装 PHP 8.0 及其扩展

安装 PHP 8.0 及常用扩展：

```shell
yum -y install php php-devel php-mysql
```

### 6. 验证版本

验证 PHP 是否成功安装并生效：

```shell
php -v
```

