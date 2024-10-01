//File system

const fs = require('fs')
fs.writeFileSync(path.join(__dirname, 'data.txt'), "Helloi Sync")
console.log("read file sync::::", fs.readFileSync(path.join(__dirname, 'data.txt'), "utf8"))


fs.writeFile(path.join(__dirname, 'data.txt'), "Hello Async", () => {
  console.log("finish writting file")
  console.log("read file Async::::", fs.readFileSync(path.join(__dirname, 'data.txt'), "utf8"))

})

console.log(path.join(__dirname, 'data.txt'))
console.log(fs.readFileSync(path.join(__dirname, 'data.txt')))
console.log(fs.readFileSync(path.join(__dirname, 'data.txt'), 'utf8'))
