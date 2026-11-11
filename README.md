# Yinuo (Dorine) Liu · 个人作品集网站

纯 HTML + CSS + 一点 JavaScript，不需要编译，改完文件刷新浏览器就能看到。

## 文件夹里有什么

```
index.html              首页
about.html              About 页
404.html                找不到页面时显示
projects/               每个项目一页
  _template.html        新项目模板（复制后改名使用）
zh/                     简体中文版，结构和英文版一模一样（zh/index.html、zh/about.html、zh/projects/）
assets/css/style.css    所有样式，颜色在最上面的 :root 里
assets/js/main.js       深色/浅色切换、点击图片放大
assets/img/<项目名>/    压缩后的图片（WebP）
files/                  简历 PDF、NYC 报告 PDF
.nojekyll               告诉 GitHub Pages 原样发布，不要删
```

## 本地预览

直接双击 `index.html` 用浏览器打开即可。

## 中文版

`zh/` 文件夹是整站的简体中文版，图片和 CSS 跟英文版共用。每个页面右上角的「中文 / EN」按钮会跳到另一种语言的同一页。

改内容时记得两边一起改：英文页 `projects/xxx.html` 对应中文页 `zh/projects/xxx.html`。加新项目时，中英文各加一页，首页也各加一张卡片。

## 常见修改

**改文字**：用任意文本编辑器（VS Code、Cursor 都行）打开对应的 `.html`，找到那段英文直接改。页头（导航）和页脚（邮箱、LinkedIn）在每个页面里各有一份，改邮箱时要把所有 `.html` 都改一遍，在 VS Code / Cursor 里用"在文件夹中查找替换"一次就能改完。

**换简历**：把新的 PDF 命名为 `Yinuo-Liu-Resume.pdf`，覆盖 `files/` 里的旧文件。网站版简历不要放电话号码。

**加新项目**：
1. 复制 `projects/_template.html`，改名，比如 `steam-tags.html`（小写、用连字符、不要空格）。
2. 把里面所有 `[方括号]` 的地方换成真实内容，删掉 `noindex` 那一行。
3. 图片放进 `assets/img/steam-tags/`，宽 1600 像素左右、每张 300 KB 以内。
4. 打开 `index.html`，在 "Data & research" 里复制一个 `<li class="row">…</li>` 块，改标题、简介、链接和图片。
5. 改一下相邻项目页面底部的 Previous / Next 链接。

**嵌入 Tableau Public 仪表盘**：在 Tableau Public 上打开你的仪表盘，复制分享链接，粘到项目页里 `<div class="embed">` 的 `src` 里，末尾保留 `?:showVizHome=no&:embed=true`。NYC 项目页和模板里都有一段写好的注释，删掉注释符号就能用。

**改颜色**：`assets/css/style.css` 最上面 `:root` 是深色主题，`:root[data-theme="light"]` 是浅色主题，只改这两块就行。

## 更新网上的版本

网站放在 GitHub 上。改完文件后：打开 GitHub 上的这个仓库，进到对应文件夹，点绿色 **Code** 按钮左边的 **+** → **Upload files**，把改过的文件拖进去（同名文件会被替换），再点 **Commit changes**。一两分钟后网站就会更新。
