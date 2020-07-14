const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
	const url = "../" + (req.url.endsWith("/") ? req.url + "index.html" : req.url);
	if (fs.existsSync(url)) {
		fs.readFile(url, (err ,data) => {
			if (!err) {
				res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8' });
				res.end(data);
			}
		});
	}
});

const port = 8080;
server.listen(port);
console.log('Server listen on port ' + port);

