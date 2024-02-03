const sftp = require('gulp-sftp-up4');
const keyfile = require('./key');

let sftpHelper = {
    getConn: function (config) {
        return sftp({
            host: '94.250.202.6',
            user: 'moritz',
            port: '61093',
            remotePath: config.path,
            key: keyfile.key,
            passphrase: keyfile.passphrase
        });
    }
};
module.exports = sftpHelper;
