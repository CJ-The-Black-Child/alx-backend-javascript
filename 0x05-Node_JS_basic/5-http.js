const http = require('http');
const countStudents = require('./3-read_file_async');

const DATABASE = process.argv[2];

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	
	if (req.url === '/') {
		res.end('Hello Holberton School!');
	} else if (req.url === '/students') {
		try {
			const students = await countStudents(DATABASE);
			res.end(`This is the list of our students\n${students.join('\n')}`);
		} catch (error) {
			res.end(error.message);
		}
	} else {
		res.statusCode = 404;
		res.end();
	}
});

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
