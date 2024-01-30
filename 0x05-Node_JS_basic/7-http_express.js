const express = require('express');
const countStudents = require('./3-read_file_async');

const DATABASE = process.argv[2];

const app = express();
const port = 1245;

app.get('/', (req, res) => res.send('Hello Holberton School!'));

app.get('/students', async (req, res) => {
	try {
		const students = await countStudents(DATABASE);
		res.send(`This is the list of our students\n${students.join('\n')}`);
	} catch (error) {
		res.send(`This is the list of our students\n${error.message}`);
	}
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

module.exports = app;
