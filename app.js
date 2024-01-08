const http = require('http');
http.createServer(function(req, res) {
res.write("server in progress");
	res.end();
}).listen(3000);

console.log("server started");
