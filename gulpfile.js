let gulp = require('gulp');
let ftpHelper = require('./utils/ftpHelper');

gulp.task('upload', function (resolve) {
    let conn = ftpHelper.getConn({
        path: 'web/battleground-bulls.de'
    });
    gulp.src('build/**')
        .pipe(conn);

    resolve();
});

gulp.task('uploadDev', function (resolve) {
    let conn = ftpHelper.getConn({
        path: 'web/dev.battleground-bulls.de'
    });
    gulp.src('build/**')
        .pipe(conn);

    resolve();
});
