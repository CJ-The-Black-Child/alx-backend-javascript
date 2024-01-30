const fs = require('fs');

function countStudents (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }

      const students = data.split('\n').filter(Boolean).map((item) => item.split(','));

      console.log(`Number of students: ${students.length - 1}`);

      const fields = students.reduce((acc, student, i) => {
        if (i !== 0) {
          if (!acc[students[i][3]]) acc[students[i][3]] = [];
          acc[students[i][3]].push(students[i][0]);
        }
        return acc;
      }, {});

      delete fields.field;

      resolve(Object.keys(fields).map((key) => {
        return `Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`;
      }));
    });
  });
}

module.exports = countStudents;
