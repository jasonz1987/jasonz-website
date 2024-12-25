---
title: MacOS关闭brew install 自动更新
lastmod: 2023-02-05T02:57:18+08:00
tags:
  - macos
  - brew
---


在 MacOS 系统上，默认情况下使用 `brew install` 命令安装程序时，Homebrew 会自动对所有软件进行更新。如果我们只想单独安装软件而不需要全局更新，可以通过以下方法关闭自动更新功能。

## 临时关闭自动更新

在执行 `brew install` 命令前，添加环境变量 `HOMEBREW_NO_AUTO_UPDATE=1`，例如：

```shell
HOMEBREW_NO_AUTO_UPDATE=1 brew install <package_name>
```

## 永久关闭自动更新

如果需要一直关闭此功能，可以通过配置环境变量来实现。

### Bash

编辑 `~/.bashrc` 文件并添加环境变量：

```shell
echo 'export HOMEBREW_NO_AUTO_UPDATE=1' >> ~/.bashrc
source ~/.bashrc
```

### Zsh

编辑 `~/.zshrc` 文件并添加环境变量：

```shell
echo 'export HOMEBREW_NO_AUTO_UPDATE=1' >> ~/.zshrc
source ~/.zshrc
```


