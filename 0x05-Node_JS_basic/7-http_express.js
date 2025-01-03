const express = require('express');
const fs = require('fs').promises;

const app = express();
const PORT = 1245;
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 */
const countStudents = async (dataPath) => {
  if (!dataPath) {
    throw new Error('Cannot load the database');
  }

  try {
    const data = await fs.readFile(dataPath, 'utf8');
    const lines = data.trim().split('\n');
    const headers = lines[0].split(',');
    const students = lines.slice(1).map((line) => {
      const values = line.split(',');
      return Object.fromEntries(headers.map((header, idx) => [header, values[idx]]));
    });

    const studentGroups = students.reduce((groups, student) => {
      const field = student.field || 'Unknown';
      groups[field] = groups[field] || [];
      groups[field].push(student);
      return groups;
    }, {});

    const totalStudents = students.length;
    const report = [`Number of students: ${totalStudents}`];

    for (const [field, group] of Object.entries(studentGroups)) {
      const names = group.map((student) => student.firstname).join(', ');
      report.push(`Number of students in ${field}: ${group.length}. List: ${names}`);
    }

    return report.join('\n');
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

// Routes
app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (_, res) => {
  try {
    const report = await countStudents(DB_FILE);
    res.status(200).send(`This is the list of our students\n${report}`);
  } catch (error) {
    res.status(500).send(`This is the list of our students\n${error.message}`);
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
