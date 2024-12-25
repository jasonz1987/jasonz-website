---
title: Python3提示ModuleNotFoundError  No module named “_ctypes”的解决方法
lastmod: 2022-11-25T08:46:37+08:00
tags:
  - python
---


## 问题描述

在安装或使用 Python 3 时，可能会遇到以下错误提示：

```
import ctypes
File "/usr/local/python3/lib/python3.7/ctypes/__init__.py", line 7, in <module>
    from _ctypes import Union, Structure, Array
ModuleNotFoundError: No module named '_ctypes'
```

## 问题分析

此问题通常是由于系统缺少外部链接库 `libffi` 导致的。`_ctypes` 模块依赖于 `libffi` 库来实现 C 类型的支持。

## 解决方案

### 安装依赖库并重新安装 Python 3

1. **安装 `libffi-devel` 依赖库**

   使用 `yum` 安装 `libffi-devel` 以确保系统中有必要的开发库：

   ```shell
   yum install libffi-devel -y
   ```

2. **重新编译和安装 Python 3**

   如果你是从源码编译安装的 Python 3，建议重新编译和安装 Python 3 以确保 `_ctypes` 模块正确生成：

   ```shell
   cd /path/to/python3-source
   ./configure
   make
   sudo make install
   ```

3. **验证安装**

   验证 `_ctypes` 模块是否已成功加载：

   ```python
   python3 -c "import ctypes; print(ctypes.__file__)"
   ```



