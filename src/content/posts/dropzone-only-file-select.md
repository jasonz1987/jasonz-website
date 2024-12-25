---
title: Dropzone只允许上传一个文件
lastmod: 2022-12-04T07:52:19+08:00
tags:
  - dropzone
  - 上传
---


在使用 Dropzone 时，即使设置了 `maxFiles: 1` 和 `uploadMultiple: false`，用户在界面上仍然可以选择多个文件（虽然会有错误提示）。为了确保界面也只允许选择一个文件，可以通过事件监听来实现。

## 解决方法

通过监听 `maxfilesexceeded` 事件，并在初始化时设置相关配置：

```javascript
Dropzone.options.myDropzone = {
    uploadMultiple: false,
    maxFiles: 1,
    init: function() {
        this.on("maxfilesexceeded", function(file) {
            alert("每次仅允许选择一个文件");
            this.removeFile(file);
        });
    }
};
```

### 完整示例

为了确保更好的用户体验，可以进一步优化代码，确保用户在选择文件时不会出现混淆：

```javascript
Dropzone.options.myDropzone = {
    uploadMultiple: false,
    maxFiles: 1,
    init: function() {
        this.on("addedfile", function(file) {
            if (this.files.length > 1) {
                alert("每次仅允许选择一个文件");
                this.removeFile(this.files[0]);
            }
        });

        this.on("maxfilesexceeded", function(file) {
            alert("每次仅允许选择一个文件");
            this.removeFile(file);
        });
    }
};
```




