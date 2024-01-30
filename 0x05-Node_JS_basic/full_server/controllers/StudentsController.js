const fs = require('fs');

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(err);
      return;
    }
    const students = data.split('\n')
      .filter(Boolean)
      .map((item) => item.split(','));
    const fields = students.reduce((acc, student, i) => {
      if (i !== 0) {
        if (!acc[student[3]]) acc[student[3]] = [];
        acc[student[3]].push(student[0]);
      }
      return acc;
    }, {});

    delete fields.field;

    resolve(fields);
  });
});

module.exports = readDatabase;
