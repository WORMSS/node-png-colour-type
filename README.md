# png-colour-type
Gets the colour type of a PNG

For simplistity and less overhead, there is no internal catching of file system errors.

##### Usage:
synchronous
````javascript
var png_colour_type = require('png_colour_type');

var colourType = png_colour_type('path/to/file.png');
````
