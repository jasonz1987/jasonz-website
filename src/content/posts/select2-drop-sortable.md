---
title: select2实现拖动排序
lastmod: 2022-12-04T08:07:03+08:00
tags:
  - select2
  - 拖动
  - 排序
---


如果要在 Select2 多选情况下实现项目可以拖动排序，可以参考以下代码：

## 示例代码

```javascript
var selectEl = $('select').select2();

// 使 Select2 的选项可拖动排序
selectEl.next().children().children().children().sortable({
    containment: 'parent',
    stop: function (event, ui) {
        // 更新选项顺序
        ui.item.parent().children('[title]').each(function () {
            var title = $(this).attr('title');
            var original = $('option:contains(' + title + ')', selectEl).first();
            original.detach();
            selectEl.append(original);
        });
        selectEl.trigger('change');
    }
});
```

## 代码说明

1. **初始化 Select2**：
   ```javascript
   var selectEl = $('select').select2();
   ```

2. **使 Select2 的选项可拖动排序**：
   使用 jQuery UI 的 `sortable` 方法来使 Select2 的选项可拖动。注意选择器的选择路径可能因 Select2 版本不同而有所变化。

3. **更新选项顺序**：
   在拖动结束时（`stop` 事件），遍历所有带有 `title` 属性的元素，并根据其标题找到对应的 `<option>` 元素，重新排列它们的顺序并触发 `change` 事件以确保 Select2 组件更新状态。

4. **触发 `change` 事件**：
   ```javascript
   selectEl.trigger('change');
   ```

## 注意事项

- 确保已引入 jQuery 和 jQuery UI 库。
- 根据 Select2 的版本和结构调整选择器路径。
- 如果使用的是较新的 Select2 版本，建议查阅官方文档以获取最新的选择器路径。
