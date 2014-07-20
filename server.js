var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static')
var serve = serveStatic('/', {'index': ['index.html', 'index.htm']})

// Create server
var server = http.createServer(function(req, res){
  var done = finalhandler(req, res)
  serve(req, res, done)
})

// Listen
server.listen(process.env.PORT || 3030)