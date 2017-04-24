var fs = require("fs");
var buffer = new Buffer(1);
function png_colour_type(file) {
    var fd = fs.openSync(file, "r");
    fs.readSync(fd, buffer, 0, 1, 25);
    fs.close(fd);
    return buffer[0];
}

png_colour_type.withPromise = function (file) {
    return new Promise((resolve, reject) => {
        fs.open(file, "r", (err, fd) => {
            if ( err ) return reject(err);
            let buffer = new Buffer(1);
            fs.read(fd, buffer, 0, 1, 25, (err) => {
                if ( err ) return reject(err);
                fs.close(fd, (err) => {
                    resolve(buffer[0]);
                });
            });
        });
    });
};

module.exports = png_colour_type;
