const { log } = require('console')
const fs= require('fs')
const http = require('http')
const os = require('os')

const osType = os.type()

const htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <h3>Hello World! your os type is ${osType}!!sdfg!</h3>
    
  </body>
  </html>
`

const server= http.createServer((req, res) => {
  fs.writeFileSync('./index2.html', htmlContent)
  let readFile = fs.readFileSync('index2.html', 'utf8')
  if (readFile){
    res.setHeader('Content-Type', 'text/html')
    res.end(readFile)
  }
})

server.listen(3000, () => {
  console.log("listening on port 3000")  
})