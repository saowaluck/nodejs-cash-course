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


//File system
const fs = require('fs')
fs.writeFileSync(path.join(__dirname, 'data.txt'), "Helloi Sync")
console.log("read file sync::::", fs.readFileSync(path.join(__dirname, 'data.txt'), "utf8"))


fs.writeFile(path.join(__dirname, 'data.txt'), "Hello Async", () => {
  console.log("finish writting file")
  console.log("read file Async::::", fs.readFileSync(path.join(__dirname, 'data.txt'), "utf8"))

})


console.log(path.join(__dirname, 'data.txt'))
// console.log(fs.readFileSync(path.join(__dirname, 'data.txt')))
// console.log(fs.readFileSync(path.join(__dirname, 'data.txt'), 'utf8'))



//OS
const os = require("os")
console.log(os.cpus())
console.log(os.homedir())
console.log(os.uptime())

//Events
const events = require('events')
const EventEmitter = events.EventEmitter
const connect = new EventEmitter

connect.on("online", () => {
  console.log("event on")
})
connect.emit("online")