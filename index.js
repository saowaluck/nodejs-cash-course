//import {calculateVat} from './utils'
const util = require('./utils')

const vat = util.calculateVat(100, 7)
console.log("vat is", vat)

console.log(__filename)
console.log(__dirname)


// Build in module
const path = require('path')
console.log(path.basename(__filename))
console.log(path.dirname(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename))
console.log(path.join(__dirname, 'utils.js'))


