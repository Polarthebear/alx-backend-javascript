const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';
const DB_FILE = process.argv[2] || '';

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 */
const countStudents = (dataPath) =>
  new Promise((resolve, reject) => {
    if (!dataPath) return reject(new Error('Cannot load the database'));

    fs.readFile(dataPath, 'utf-8', (err, data) => {
      if (err) return reject(new Error('Cannot load the database'));

      const reportParts = [];
      const fileLines = data.trim().split('\n');
      const [headerLine, ...records] = fileLines;
      const fieldNames = headerLine.split(',');
      const studentGroups = {};

      records.forEach((line) => {
        const values = line.split(',');
        const field = values.pop();
        const student = Object.fromEntries(
          fieldNames.slice(0, -1).map((name, idx) => [name, values[idx]])
        );
        studentGroups[field] = studentGroups[field] || [];
        studentGroups[field].push(student);
      });

      const totalStudents = Object.values(studentGroups).reduce(
        (sum, group) => sum + group.length,
        0
      );
      reportParts.push(`Number of students: ${totalStudents}`);
      Object.entries(studentGroups).forEach(([field, group]) => {
        reportParts.push(
          `Number of students in ${field}: ${group.length}. List: ${group
            .map((s) => s.firstname)
            .join(', ')}`
        );
      });

      resolve(reportParts.join('\n'));
    });
  });

const sendResponse = (res, statusCode, text) => {
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', Buffer.byteLength(text));
  res.statusCode = statusCode;
  res.end(text);
};

const SERVER_ROUTE_HANDLERS = [
  {
    route: '/',
    handler(_, res) => sendResponse(res, 200, 'Hello Holberton School!'),
  },
  {
    route: '/students',
    handler(_, res) {
      countStudents(DB_FILE)
        .then((report) => sendResponse(res, 200, `This is the list of our students\n${report}`))
        .catch((err) =>
          sendResponse(
            res,
            500,
            `This is the list of our students\n${err.message}`
          )
        );
    },
  },
];

const app = http.createServer((req, res) => {
  const handler = SERVER_ROUTE_HANDLERS.find((r) => r.route === req.url)?.handler;
  if (handler) {
    handler(req, res);
  } else {
    sendResponse(res, 404, 'Not Found');
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Server listening at -> http://${HOST}:${PORT}`);
});

module.exports = app;
