var http = require('http')
http.createServer(function(req,res)
{
    res.writeHead(200,{'Context-Type':'text/html'});
    res.write("Hello,World!");
    res.end();
}).listen(3000);