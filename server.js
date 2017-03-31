var http = require('http')
var path = require('path')

var bankai = require('bankai')

var clientPath = path.join(__dirname, 'client.js')
var assets = bankai(clientPath)

const routes = {
  '/': (req, res) => {
    return assets.html(req, res).pipe(res)
  },
  '/bundle.js': (req, res) => {
    return assets.js(req, res).pipe(res)
  },
  '/bundle.css': (req, res) => {
    return assets.css(req, res).pipe(res)
  }
}

const notFound = (req, res) => {
  return (res.statusCode = 404) && res.end('404 not found')
}

http.createServer(function (req, res) {
  routes[req.url] ? routes[req.url](req, res) : notFound(req, res)
}).listen(8080)
