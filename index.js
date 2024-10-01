//import {calculateVat} from './utils'
const util = require('./utils')

const vat = util.calculateVat(100, 7)
console.log("vat is", vat)

console.log(__filename)
console.log(__dirname)
