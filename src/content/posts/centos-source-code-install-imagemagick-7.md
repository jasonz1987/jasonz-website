---
title: Centos源码编译安装ImageMagick7
lastmod: 2023-02-06T07:40:27+08:00
tags:
  - centos
  - imagemagick
  - 编译
---

* 1、安装依赖
```shell
# yum groupinstall 'Development Tools'
# yum -y install bzip2-devel freetype-devel libjpeg-devel libpng-devel libtiff-devel giflib-devel zlib-devel ghostscript-devel djvulibre-devel libwmf-devel jasper-devel libtool-ltdl-devel libX11-devel libXext-devel libXt-devel lcms-devel libxml2-devel librsvg2-devel OpenEXR-devel php-devel
```
* 2、下载安装包

```shell   
# wget https://www.imagemagick.org/download/ImageMagick.tar.gz
# tar xvzf ImageMagick.tar.gz
```

* 3、编译安装

```shell   
# cd ImageMagick*
# ./configure
# make
# make install
```

* 4、验证

```shell     
# magick -version

Version: ImageMagick 7.0.8-28 Q16 x86_64 2019-02-19 https://imagemagick.org
Copyright: (C) 1999-2019 ImageMagick Studio LLC
License: https://imagemagick.org/script/license.php
Features: Cipher DPC HDRI OpenMP 
Delegates (built-in): bzlib djvu fontconfig freetype jng jpeg lzma openexr pangocairo png tiff wmf x xml zlib
```

