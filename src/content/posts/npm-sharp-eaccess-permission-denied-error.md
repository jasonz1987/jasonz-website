---
title: ERR! sharp EACCES permission denied, mkdir ‘/root/.npm/_libvips'错误的解决方案
lastmod: 2023-02-06T07:19:33+08:00
tags:
  - npm
  - sharp
---


在使用 NPM 安装包时，有时会遇到以下错误提示：

```
sharp@0.31.3 install /root/.nvm/versions/node/v14.17.0/lib/node_modules/favicons/node_modules/sharp

> (node install/libvips && node install/dll-copy && prebuild-install) || (node install/can-compile && node-gyp rebuild && node install/dll-copy)

sharp: Installation error: EACCES: permission denied, mkdir '/root/.npm/_libvips'

sharp: Are you trying to install as a root or sudo user?

sharp: - For npm <= v6, try again with the "--unsafe-perm" flag
sharp: - For npm >= v8, the user must own the directory "npm install" is run in
sharp: Please see https://sharp.pixelplumbing.com/install for required dependencies
```

## 问题分析

根据错误提示，这通常是权限问题。即使当前使用的是 root 账户运行，也会出现此错误。原因可能是 NPM 需要一个专门用于运行 NPM 的高权限账户，或者需要调整安装目录的权限。

## 解决方法

### 方法一：使用 `--unsafe-perm` 选项

对于 npm 版本 <= v6，可以尝试使用 `--unsafe-perm` 选项来忽略权限检查：

```shell
npm install <package-name> -g --unsafe-perm
```

### 方法二：确保安装目录权限正确

对于 npm 版本 >= v8，确保当前用户拥有运行 `npm install` 的目录权限。可以通过以下步骤解决：

1. **切换到非 root 用户**：尽量避免以 root 用户身份运行 NPM 安装命令。
2. **更改 NPM 全局安装路径**：将 NPM 的全局安装路径更改为当前用户的家目录下。

   ```shell
   npm config set prefix ~/.npm-global
   ```

   然后将 `~/.npm-global/bin` 添加到系统的 PATH 环境变量中：

   ```shell
   export PATH=~/.npm-global/bin:$PATH
   ```

3. **重新安装包**：

   ```shell
   npm install <package-name> -g
   ```

### 方法三：使用 nvm 管理 Node.js 和 NPM

如果你使用 `nvm` 来管理 Node.js 和 NPM，建议确保当前使用的 Node.js 版本和 NPM 版本是最新的，并且以普通用户身份运行安装命令。




