const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	console.log(req.url, req.method);

	// Set Content-Type
	res.setHeader('Content-Type', 'text/html');

	// Setting up routing, so browser can display the page a user visits
	let path = './views/';
	switch(req.url) {
		case '/':
			path += 'index.html';
			res.statusCode = 200; // Status code
			break;
		case '/about':
			path += 'about.html';
			res.statusCode = 200;
			break;
		// Using redirections
		case '/about-me':
			res.statusCode = 301;
			res.setHeader('Location', '/about');
			res.end();
			break;
		default:
			path += '404.html';
			res.statusCode = 400;
			break;
	}

	// Read html file and send the content of the file to the browser
	fs.readFile(path, (err, data) => {
		if (err) {
			console.log(err);
			res.end();
		}
		else {
			// res.write(data);
			res.end(data);
		}
	})
});


server.listen(3000, 'localhost', () => {
	console.log('Listening for requests on port 3000');
});
