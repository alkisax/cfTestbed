const http = require('node:http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  if (req) {
    console.log("a request")
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('hello world\n')
  }
})

server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}${port}/`);
  
})