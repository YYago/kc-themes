# kc-themes

#### 项目介绍

看云文档样式(For: "style/website.css")。

#### 安装教程 & 使用说明

如直接使用到自己的文档，则在themes目录选择对应的主题样式直接复制源码即可。

如果想自己开发则：

1. fork仓库或者自己下载仓库文件到本地进行开发。
2. 克隆或者解压到指定文件夹之后，进入`kc-themes` 目录。
3. 运行 `npm install`。
4. 编辑 `gulpfile.js` 的 `themeName` 常量(例如:"myTheme")，使gulp的作用路径指向你新建的样式文件夹。
5. 然后运行 `gulp new`，将得到新的主题目录：`themes/myTheme`;
    >会得到如下*默认文件：*
    ```
    themes/myTheme/myTheme.less # less 文件。
    themes/myTheme/_index.html  # 可修改。
    themes/myTheme/index.html   # 由_index.html而来，会被重复覆盖，测试用。
    themes/myTheme/README.md    # 主题介绍
    ```

6. 现在你可以在`themes/myTheme`下开始开发了。
7. 开发完之后，执行 `gulp pub` 生成 `website.css` 。

## 主题列表

主题名称 | 描述 | 源码
-------|------|------
[pwedu-TOC-fixed](themes/pwedu-TOC-fixed)   | 文章内部导航组件:`[TOC]` 固定在浏览器窗口，方面上下文导航。     |[less](themes/pwedu-TOC-fixed/pwedu-TOC-fixed.less)、[CSS](themes/pwedu-TOC-fixed/website.css)

#### 参与贡献

1. Fork 本项目
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request

> *可贡献的点：*
>
>   * 新的主题；
>   * 新增可控 DOM 节点（某些插件、标记、组件专有类(class)或者唯一标识(ID)）。 ——针对 `statics/less.less`,可新增`scss`支持。
>   * 脚手架优化。——针对 `gulpfile.js`,可增 `grunt.js`、`webpack`等。
>   * 预览、测试页面优化。 

LICENSE

[MIT](LICENSE)