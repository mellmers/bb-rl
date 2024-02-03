let gulp = require('gulp');
let sftpHelper = require('./utils/sftpHelper');

gulp.task('upload', function (resolve) {
    let conn = sftpHelper.getConn({
        path: 'web/battlebulls.de'
    });
    return gulp.src('build/**').pipe(conn);
});

gulp.task('uploadDev', function (resolve) {
    let conn = sftpHelper.getConn({
        path: 'web/dev.battlebulls.de'
    });
    return gulp.src('build/**').pipe(conn);
});
