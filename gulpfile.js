let gulp = require('gulp')
const bs = require('browser-sync').create();

gulp.task('bs', ()=>{
    bs.init({
        files:["**"],
        proxy: 'blog.com:8083',
        port: 3000,
        tunnel: true
    })
})

gulp.task('watch',()=>{
    gulp.watch('**.*'['browser-sync']);
})
