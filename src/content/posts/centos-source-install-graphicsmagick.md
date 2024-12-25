---
title: Centos7编译安装GraphicsMagick
lastmod: 2023-02-06T07:27:34+08:00
tags:
  - centos
  - graphicsMagick
---
* 1、安装依赖

```shell
yum install -y gcc libpng libjpeg libpng-devel libjpeg-devel ghostscript libtiff libtiff-devel freetype freetype-devel 
```

* 2、下载最新安装包

<https://sourceforge.net/projects/graphicsmagick/files/>

* 3、解压

```shell     
xz -d GraphicsMagick-1.3.40.xz
tar -zxvf GraphicsMagick-1.3.40.tar
```

* 4、编译安装

    
```shell   
cd graphicsMagick-1.3.40 
./configure
make
make install 
```

* 5、验证是否安装成功
 
 ```shell    
gm version
gm convert -list formats 
```

