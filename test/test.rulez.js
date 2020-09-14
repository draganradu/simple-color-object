const fs = require('fs');

class _this {
    constructor() {
        this.newline = '\n'
        this.tableDivider = ' | '
        this.output = []

        this.statistics = {
            faild: 0,
            succesfull: 0,
            timestart: 0,
            timeEnd: 0,

            get totalTests() {
                return this.succesfull + this.faild
            }
        }
    }

    addline(a) {
        this.output.push(this.tableDivider + a.join(this.tableDivider) + this.tableDivider + this.newline)
    }

    buildFooter() {

    }

    writeFile() {
        fs.writeFile('exemple_color.md', this.output.join(''), (err) => {
            if (err) {
                return console.log(err)
            } else {
                console.log('Color was built -> push me to git -> publish to npm');
                console.log('-----------------------------')
                // console.log(this.output.join(''))
            }

        });
    }
}

module.exports = new _this