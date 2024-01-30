#!/usr/bin/node
const fs = require('fs');

const countStudents = (path) => {
  let content;

  try {
    content = fs.readFileSync(path, 'utf8').split('\n');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const students = content.filter(Boolean).map((item) => item.split(','));

  console.log(`Number of students: ${students.length - 1}`);

  const fields = students.reduce((acc, student, i) => {
    if (i !== 0) {
      if (!acc[students[i][3]]) acc[students[i][3]] = [];
      acc[students[i][3]].push(students[i][0]);
    }
    return acc;
  }, {});

  delete fields.field;

  for (const key of Object.keys(fields)) {
    console.log(`Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`);
  }
};

module.exports = countStudents;
