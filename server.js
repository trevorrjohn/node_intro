var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res) {
  var pathname = url.parse(req.url).pathname;
  console.log(req);

  switch(pathname) {
  case "/":
    fs.readFile('./index.html', function(e, content) {
      res.writeHead(200, {'type': 'text/html'});
      res.write(content);
      res.end();
    });
    break;
  case "/world":
    res.writeHead(200);
    res.write('world');
    res.end();
    break;
  default:
    res.writeHead(200);
    res.write('Default');
    res.end();
  }
}).listen(8000);
