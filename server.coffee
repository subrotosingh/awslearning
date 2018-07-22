http = require('http')
port = 3000
ip = "127.0.0.1"
server = http.createServer (req, res) ->
 res.writeHead 200,
 "Content-Type": "text/plain"
 setInterval ->
 res.write("Hello This is my first program. ")
 setTimeout ->
 res.end()
server.listen(port, ip)
console.log "Server running at http://#{ip}:#{port}/"