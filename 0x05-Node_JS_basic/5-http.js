const http = require('http');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    await countStudents(process.argv[2])
	.then((result) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/plain');
          res.end(`This is the list of our students\n${result}`);
        })
	  .catch((err) => {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'text/plain');
          res.end(err.message);
	});
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
