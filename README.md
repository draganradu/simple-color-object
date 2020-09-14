# simple-color-object

This is a modernized version of [simple-color](https://www.npmjs.com/package/simple-color-converter) it uses moder javascript getters and setters and all sorts of javascript goodness to make one of the lightest but most feathure dense color convertors for javascript you can use.

## How to use
```javascript

const simpleColor = require('simple-color-object');

var color = new simpleColorConverter()

color.cmyk = "cmyk 0 50 60 60"

console.log(color.ral) // { ral: 3009 } 

color.rgb = "rgb 0 50 60"

console.log(color.ral) // { ral: 5008 }

```

## Format identification from string
The main thing we do better then any other color convertor is the ability to get any string and figure out is there is a color berried in there.

[Accepted colors test](exemple_color.md)