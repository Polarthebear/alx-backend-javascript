/**
 * Module to count the students in a CSV file
 * @param: dataPath to the CSV file
 */
const countStudents = (filePath) => new Promise((resolve, reject) => {
  const fs = require('fs');

  fs.readFile(filePath, 'utf-8', (error, fileContent) => {
    if (error) {
      reject(new Error('Cannot load the database'));
      return;
    }

    if (fileContent) {
      const fileLines = fileContent.trim().split('\n');
      const studentGroups = {};
      const headerFields = fileLines[0].split(',');
      const studentProperties = headerFields.slice(0, headerFields.length - 1);

      for (const line of fileLines.slice(1)) {
        const studentData = line.split(',');
        const studentValues = studentData.slice(0, studentData.length - 1);
        const studentField = studentData[studentData.length - 1];

        if (!studentGroups[studentField]) {
          studentGroups[studentField] = [];
        }

        const studentObject = studentProperties
          .map((propertyName, index) => [propertyName, studentValues[index]]);
        studentGroups[studentField].push(Object.fromEntries(studentObject));
      }

      const totalStudentCount = Object.values(studentGroups)
        .reduce((total, students) => total + students.length, 0);

      console.log(`Number of students: ${totalStudentCount}`);
      for (const [field, group] of Object.entries(studentGroups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }

      resolve(true);
    }
  });
});

module.exports = countStudents;
