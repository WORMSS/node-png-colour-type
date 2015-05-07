var fs = require("fs");
var buffer = new Buffer(1);
function png_colour_type(file) {
	var fd = fs.openSync(file, "r");
	fs.readSync(fd, buffer, 0, 1, 25);
	fs.close(fd);
	return buffer[0];
}
module.exports = png_colour_type;