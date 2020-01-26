const sftp = require('gulp-sftp-up4');
const keyfile = require('./key');

let ftpHelper = {
    ftpDeploy: null,
    plugins: null,
    getConn: function (config) {
        return sftp({
            host: "85.10.207.134",
            user: "moritz",
            port: "22",
            remotePath: config.path,
            key: keyfile.key,
            passphrase: keyfile.passphrase
        });
    }
};
module.exports = ftpHelper;
