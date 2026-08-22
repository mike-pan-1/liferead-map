# 阅途 · 人生书单 / LifeRead Map

一个按人生阶段整理书籍的前端原型，无需构建工具或后端。

## 使用

直接双击打开 `index.html`，或在 VS Code 中使用任意静态文件服务器预览。

## 添加书籍

在 `app.js` 的 `books` 数组中增加书籍对象。`stages` 对应阶段 id，`nodes` 对应页面右侧展示的思维导图要点，`feishu` 可配置该书的飞书文档；未配置时使用示例地址。

## GA4

`app.js` 已提供 `track()` 事件封装，会在页面存在 `window.gtag` 时发送 `select_content`、`view_item`、`click_feishu_map` 和 `random_book` 事件。正式接入时，在 `index.html` 的 `<head>` 中加入 GA4 的 `gtag.js` 脚本，并将 Measurement ID 替换为真实值。
