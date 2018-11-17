/**
 * Author: https://gitee.com/class877
 */

/**
 * 在这里配置你的主题名称，须符合描述规则。
 */
const themeName ="pwedu-TOC-fixed";

const fs = require('fs');
const gulp = require('gulp');
const gReplace = require('gulp-replace')
const gRename = require('gulp-rename');
const gLess = require('gulp-less');
const gConnect = require('gulp-connect');

let themeDir = 'themes/'+themeName;
if(/[\/|\\|\.]/g.test(themeName)||themeName==""){
    throw Error("没有配置主题名称或者命名出错，不允许多级目录！请重新命名。例如：MyTheme")
}


gulp.task('new',(cb)=>{
    if(fs.existsSync(themeDir)){
        throw Error(`主题名称：${themeName} 已经存在，请重新命名。`)
    }else{
        gulp.src('statics/less.less')
            .pipe(gReplace("ThemeName:",`ThemeName: ${themeName}`))
            .pipe(gRename(`${themeName}.less`))
            .pipe(gulp.dest(themeDir));
        gulp.src('statics/index.html')
            .pipe(gReplace("<!--{name}-->",`${themeName}`))
            .pipe(gRename("_index.html"))
            .pipe(gulp.dest(themeDir));
        gulp.src('statics/README.md')
            .pipe(gReplace("{name}",`${themeName}`))
            .pipe(gulp.dest(themeDir));
    }
});
gulp.task('less',()=>{
    let lessFile = themeDir+'/'+themeName+'.less';
    gulp.src(lessFile)
        .pipe(gLess())
        .pipe(gulp.dest(themeDir));
});

gulp.task('html',()=>{
    let cssFile = themeDir+'/'+themeName+'.css';
    let css = fs.readFileSync(cssFile,{encoding:'utf8'});
    let htmlfile = themeDir+'/'+'_index.html';
    gulp.src(htmlfile)
        .pipe(gReplace("/*{css}*/",css))
        .pipe(gRename("index.html"))
        .pipe(gulp.dest(themeDir))
        .pipe(gConnect.reload());
})
gulp.task('watch',()=>{
    gulp.watch(themeDir+'/*.less',['less','html'])
    gulp.watch(themeDir+'/_index.html',['html'])
})
gulp.task('server',()=>{
    gConnect.server({
        name:themeName,
        root:themeDir,
        port:8686,
        index:'index.html',
        livereload:true
    })
});
gulp.task('pub',(cb)=>{
    gulp.src(themeDir+'/'+themeName+'.less')
        .pipe(gLess())
        .pipe(gRename('website.css'))
        .pipe(gulp.dest(themeDir));
});
gulp.task('default',['server','less','html','watch']);