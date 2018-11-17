# pwedu-TOC-fixed

文章内部导航组件`[TOC]` 固定在浏览器窗口，方面上下文导航。

ThemeName: `pwedu-TOC-fixed `<br>
Version: `v0.1`<br>
Author: https://www.kancloud.cn/@pwedu<br>
Description: 
   1. 使用 '@media screen'。
   2. 如果不介意，可以使用入侵式固定（以尽量适应小屏设备）:<br>
      `.markdown-toc{...right: 200px;}` <br>或者更多，这取决于链接字符长度，最大值 932px；可以限制宽度然后侵入正文（但会发生遮挡，不推荐）
   3. `1490px = 279+932+279`，如果都是短标题，可以适当减小：`279+932+[ TOC 最长的 li 的 width ]` 。
   4. 如果不考虑主目录(左侧主目录)展开宽度，可以设为：`980 + [ TOC 最长的 li 的 width ]` 。

## 文件

* less: [pwedu-TOC-fixed.less](pwedu-TOC-fixed.less)
* CSS: [website.css](website.css)