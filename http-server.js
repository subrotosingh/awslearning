// Generated by CoffeeScript 2.3.1
(function() {
  var http, server;

  http = require('http');

  server = http.createServer(function(req, res) {
    var data;
    console.log(req.method, req.url);
    return data = 'hi\n';
  });

  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': data.length
  });

  res.end(data);

  server.listen(8000);

}).call(this);
