---
title: jQuery Ajax上传文件
lastmod: 2022-11-29T08:27:05+08:00
tags:
  - jquery
  - ajax
  - 上传
---


通过 `FormData` 手动构造字段，并配合 `ajax` 的 `processData` 和 `contentType` 选项，可以实现文件上传。示例代码如下：

```javascript
var formData = new FormData();
formData.append('file', $('#file')[0].files[0]);

$.ajax({
    url: 'upload.php',
    type: 'POST',
    data: formData,
    processData: false,  // 防止 jQuery 自动转换数据为查询字符串
    contentType: false,  // 不设置内容类型，允许浏览器根据数据自动设置
    success: function(data) {
        console.log(data);
        alert(data);
    },
    error: function(xhr, status, error) {
        console.error(status, error);
    }
});
```


