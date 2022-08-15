const sftp = require('gulp-sftp-up4');
const keyfile = require('./key');

let ftpHelper = {
    ftpDeploy: null,
    plugins: null,
    getConn: function (config) {
        return sftp({
            host: '38.242.140.22',
            user: 'moritz',
            port: '61093',
            remotePath: config.path,
            key: keyfile.key,
            passphrase: keyfile.passphrase
        });
    }
};
module.exports = ftpHelper;
