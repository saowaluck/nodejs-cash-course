//import {calculateVat} from './utils'
const http = require('http')
const path = require('path')
const fs = require('fs')

const getPage = (page) => {
  return fs.readFileSync(path.join(__dirname, page))
}

http.createServer((req, res)=> {
  res.setHeader('Content-type', 'text/html')
  res.writeHead(200)
  res.write(getPage('index.html'))
  res.end()
}).listen("5001")

// Build in module
// path
// file-system
// os
// events
// HTTP
