//import {calculateVat} from './utils'
const http = require('http')
const path = require('path')
const fs = require('fs')

const getPage = (page) => {
  return fs.readFileSync(path.join(__dirname, page))
}

http.createServer((req, res) => {
  console.log("server staring on http://localhost:5001")
  const fileType = path.extname(req.url) || ".html"

  if (fileType === ".html") {
    res.setHeader('Content-type', 'text/html')
    res.writeHead(200)

    if (req.url === "/") {
      res.write(getPage('index.html'))
    } else {
      res.write(getPage(`${req.url}.html`))
    }

  } else {
    res.writeHead(404)
  }
  res.end()


}).listen("5001")

// Build in module
// path
// file-system
// os
// events
// HTTP
