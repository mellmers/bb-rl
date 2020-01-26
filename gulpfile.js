let gulp = require('gulp');
let ftpHelper = require('./utils/ftpHelper');

gulp.task('upload', function (resolve) {
    let conn = ftpHelper.getConn({
        path: 'web/battleground-bulls.de'
    });
    return gulp.src('build/**')
        .pipe(conn);
});

gulp.task('uploadDev', function (resolve) {
    let conn = ftpHelper.getConn({
        path: 'web/dev.battleground-bulls.de'
    });
    return gulp.src('build/**')
        .pipe(conn);
});
