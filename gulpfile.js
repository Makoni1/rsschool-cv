const gulp = require("gulp"),
sass = require('gulp-sass')(require('sass')),
autoprefixer = require("gulp-autoprefixer");

gulp.task("buildCss", function(){
    return gulp.src("scss/style.scss")
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
        overrideBrowserslist: ["last 8 versions"]
    }))
    .pipe(gulp.dest("build/css/"))
});
gulp.task("build", gulp.parallel("buildCss"));
