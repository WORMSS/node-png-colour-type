# png-colour-type
Gets the colour type of a PNG

#### Usage:

##### asynchronous

Errors are reported, except for close error.

```javascript
var png_colour_type = require('png_colour_type');

png_colour_type.withPromise('path/to/file.png')
.then(colourType => {
    // something something darkside.
});
```

##### synchronous

For simplistity and less overhead, there is no internal catching of file system errors.

```javascript
var png_colour_type = require('png_colour_type');

var colourType = png_colour_type('path/to/file.png');
```
