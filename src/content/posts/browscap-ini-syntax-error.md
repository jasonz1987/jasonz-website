---
title: syntax error, unexpected $end, expecting ']' in /etc/php.d/php_browscap.ini 错误的解决方法
lastmod: 2022-11-27T16:19:57+08:00
tags:
  - php
  - browscap
---
## 问题描述

下载 `php_browscap.ini` 文件到 `/etc/php.d/` 目录下之后，运行PHP会提示以下错误：

> PHP:  syntax error, unexpected end of file, expecting ']' in
> /etc/php.d/php_browscap.ini on line 44

## 问题解决

将下载的`php_browscap.ini` 文件放置到其他目录，例如`/etc/php_browscap.ini`目录下即可。

参考此[issue](https://github.com/browscap/browscap/issues/1842)


