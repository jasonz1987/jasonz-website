---
title: pycdc安装
lastmod: 2022-12-22T06:28:03+08:00
tags:
  - pycdc
  - python
  - 反编译
---


## 安装步骤

以下是安装 `pycdc` 的详细步骤：

### 1. 克隆仓库

首先，克隆 `pycdc` 的 GitHub 仓库：

```shell
git clone https://github.com/zrax/pycdc
```

### 2. 进入项目目录

进入克隆下来的项目目录：

```shell
cd pycdc
```

### 3. 配置构建环境

使用 `cmake` 配置构建环境：

```shell
cmake .
```

### 4. 编译

编译项目：

```shell
make
```

### 5. 运行测试

运行测试以确保一切正常：

```shell
make check
```

### 6. 使用 pycdc

使用 `pycdc` 解析 `.pyc` 文件。将 `/path/your.pyc` 替换为你要解析的 `.pyc` 文件路径：

```shell
python pycdc /path/your.pyc
```

