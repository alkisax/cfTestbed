const { log } = require('console');
const fs = require('fs')
const http = require('http')
const os = require('os')

const osType = os.type()
console.log(osType);

const htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <h3>Hello World! your os type is ${osType}</h3>
    
  </body>
  </html>
`

const server =  http.createServer((req, res) => {
  console.log("create server ")
  fs.writeFile('./index.html', htmlContent, err => {
    if (err) {
      console.log("problem in writing file");
    } else {
      console.log("διαβάζουμε το αρχείο και το στέλνουμε πίσω")
      fs.readFile('./index.html', 'utf8', (err, content) => {
        if (err) {
          console.log("problem in reading file", err);          
        } else {
          res.setHeader('Content-Type', 'text/html')
          res.end(content)
        }
      })
    }
  })
})

server.listen(3000, () => {
  console.log("server is listening on port 3000");
  
})
