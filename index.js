//import {calculateVat} from './utils'


const http = require('http')
http.createServer((req, res)=> {
  res.setHeader('Content-type', 'text/html')
  res.writeHead(200)
  res.write('<h1>Hello</h1>')
  res.end()
}).listen("5001")

// Build in module
// path
// file-system
// os
// events
// HTTP
