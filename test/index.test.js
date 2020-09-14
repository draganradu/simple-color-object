
const objectiveColor = require('../objective-color')
const testData = require('./test.data')
const testRulez = require('./test.rulez')

const colorTest = new objectiveColor()

for (const elementColor of testData) {

    if (typeof elementColor[0] === 'string') {
        // set color
        colorTest.colorExtractor(elementColor[0])
        // read

        let testPased = true
        for (const testValue in elementColor[1]) {
            // convert data to a die cast model
            if (typeof elementColor[1][testValue] === 'object') {
                var die = Object.entries(elementColor[1][testValue]).sort().toString()
                var cast = Object.entries(colorTest[testValue]).sort().toString()
            } else {
                var die = elementColor[1][testValue]
                var cast = colorTest[testValue]
            }

            // see if the testing is correct
            if (die !== cast) {
                testPased = false
                console.log('faild on:' + (testRulez.statistics.totalTests + 2), die, '---------------------------------------')
            } else {
                testRulez.addline([elementColor[0], testValue + ": " + die])
            }
        }

        if (testPased) {
            testRulez.statistics.succesfull++;
        } else {
            testRulez.statistics.faild++;
        }
    }



}

console.log(testRulez.statistics)
testRulez.writeFile()






// const objectiveColor = require('../objective-color')

// const newColor = new objectiveColor('#ff0A')


// // newColor.cmyk = 'cmyk 10 50 20 6'
// // console.log(newColor)
// // console.log(newColor.cmyk)
// newColor.hex3 = '#123'
// console.log(newColor)

// console.log(newColor.cmyk)
// console.log(newColor.grayscale)
// console.log(newColor.hex3)
// console.log(newColor.hex4)
// console.log(newColor.hex6)
// console.log(newColor.hex8)
// console.log(newColor.html)
// console.log(newColor.hsl)
// console.log(newColor.hsv)
// console.log(newColor.lab)
// console.log(newColor.pantone)
// console.log(newColor.ral)
// console.log(newColor.rgb)
// console.log(newColor.rgba)
// console.log(newColor.rgbdecimal)
// console.log(newColor.w)
// console.log(newColor.xyz)
// console.log(newColor.yuv)

// console.log(newColor.rgb)
// console.log(newColor.cmyk)


// console.log(newColor.rgb = {r:10, g: 170, b: 10})
// console.log(newColor.rgb)
// console.log(newColor.cmyk)
