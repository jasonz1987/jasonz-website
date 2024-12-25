---
title: There is no current event loop 错误的解决方法
lastmod: 2022-12-23T12:31:44+08:00
tags:
  - python
  - 协程
---

在 Python 中使用协程时，高版本的 Python 可能会报以下错误：

```
DeprecationWarning: There is no current event loop
```

## 解决方法

将原来的代码：

```python
loop = asyncio.get_event_loop()
```

改为：

```python
loop = asyncio.new_event_loop()
asyncio.set_event_loop(loop)
```

### 完整示例

为了确保代码在不同环境中都能正常运行，建议使用 `try-except` 块来处理不同的 Python 版本和环境：

```python
import asyncio

try:
    # 对于 Python 3.10 及以上版本
    loop = asyncio.get_running_loop()
except RuntimeError:
    # 如果没有正在运行的事件循环，则创建一个新的
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)

# 继续使用 loop 进行协程操作
```

