const http = require('http')
const url = require('url')
const port = 9000

function responseHandler (request,response){
    let myUrl = url.parse(request.url)
    response.writeHead(418,{'Content-Type':'text/plain'})
    response.write(myUrl.pathname)
    response.end()
}

const server = http.createServer(responseHandler)

server.listen(port)
