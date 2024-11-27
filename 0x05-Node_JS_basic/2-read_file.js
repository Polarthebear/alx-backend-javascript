const fs = require('fs');

function countStudents(fileName) {
  const students = {};
  const fields = {};
  try {
    const content = fs.readFileSync(fileName, 'utf-8');
    const lines = content.toString().trim().split('\n');

    if (lines.length < 2) {
      throw new Error('File contains no data');
    }

    // Process header row to verify structure
    const header = lines[0].split(',');
    if (header.length < 4) {
      throw new Error('Invalid file format: Expected at least 4 columns');
    }

    for (let i = 1; i < lines.length; i += 1) {
      const row = lines[i].split(',');

      // Validate row structure
      if (row.length >= 4) {
        const name = row[0].trim();
        const field = row[3].trim();

        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(name);

        fields[field] = (fields[field] || 0) + 1;
      }
    }

    const totalStudents = Object.values(fields).reduce((sum, count) => sum + count, 0);
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, count] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${count}. List: ${students[field].join(', ')}`);
    }
  } catch (error) {
    throw Error(`Cannot load the database: ${error.message}`);
  }
}

module.exports = countStudents;
