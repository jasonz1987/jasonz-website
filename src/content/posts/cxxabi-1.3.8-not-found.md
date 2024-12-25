---
title: CXXABI_1.3.8 not found 错误的解决方案
lastmod: 2022-12-19T14:43:08+08:00
tags:
  - python
  - cxxabi
---



升级 Python 版本后，运行库时可能会遇到以下错误：

```
ImportError: /lib64/libstdc++.so.6: version `CXXABI_1.3.8' not found (required by /usr/local/python3/lib/python3.7/site-packages/tensorflow/python/_pywrap_tensorflow_internal.so)
```

## 解决方法

### 1. 查看本机情况

检查当前系统中已有的 CXXABI 版本：

```shell
strings /lib64/libstdc++.so.6 | grep CXXABI
```

如果输出不包含 `CXXABI_1.3.8`，则需要更新或替换 `libstdc++.so.6`。

### 2. 查找动态库位置

查找系统中所有 `libstdc++.so*` 文件的位置：

```shell
find / -name "libstdc++.so*" 2>/dev/null
```

### 3. 验证目标动态库

找到一个包含 `CXXABI_1.3.8` 的 `libstdc++.so.6` 文件，并验证其版本：

```shell
strings /var/lib/docker/overlay2/83ab3664426d4266880c6cf241eca1dd14364fd91892f11a4ca58c31c46c4050/diff/usr/lib/x86_64-linux-gnu/libstdc++.so.6.0.25 | grep CXXABI
```

确保输出包含 `CXXABI_1.3.8`。

### 4. 复制动态库

将包含 `CXXABI_1.3.8` 的 `libstdc++.so.6` 文件复制到 `/usr/lib64/` 目录：

```shell
sudo cp /var/lib/docker/overlay2/83ab3664426d4266880c6cf241eca1dd14364fd91892f11a4ca58c31c46c4050/diff/usr/lib/x86_64-linux-gnu/libstdc++.so.6.0.25 /usr/lib64/
```

### 5. 建立软连接

移除旧的符号链接并创建新的符号链接：

```shell
sudo rm /usr/lib64/libstdc++.so.6
sudo ln -s /usr/lib64/libstdc++.so.6.0.25 /usr/lib64/libstdc++.so.6
```
