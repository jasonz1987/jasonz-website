---
title: Centos7安装Libreoffice
lastmod: 2022-11-25T09:10:55+08:00
tags:
  - centos7
  - libreoffice
  - yum
---


# Centos7 安装 LibreOffice

## 安装步骤

### 1. 更新系统包

确保系统包是最新的：

```shell
sudo yum update -y
```

### 2. 安装 LibreOffice

使用 `yum` 安装 LibreOffice：

```shell
sudo yum install -y libreoffice
```

### 3. 验证安装

验证 LibreOffice 是否成功安装：

```shell
libreoffice --version
```

