function startServer() {
	var http = require('http');
	var counter = 0;
	
	http.createServer(function (req, res) {
		res.writeHead(200, {
			'Content-Type' : 'text/plain'
		});
		res.end('Hello World\n' + ++counter);
		
	}).listen(1337, '127.0.0.1');
	console.log('Server running at http://127.0.0.1:1337/');
}
exports.startServer = startServer;