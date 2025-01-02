const http = require('http');

const PORT = process.env.PORT || 1245;
const HOST = '0.0.0.0';

const app = http.createServer((_, res) => {
  const responseText = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', Buffer.byteLength(responseText));
  res.statusCode = 200;
  res.end(responseText);
});

app.listen(PORT, HOST, () => {
  console.log(`Server listening at -> http://${HOST}:${PORT}`);
});

module.exports = app;

