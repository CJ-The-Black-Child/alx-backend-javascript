const fs = require('fs');

const readDatabase = (path) => new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            reject(Error(err));
            return;
        }
        let students = data.split('\n').filter(Boolean);
            students = students.map((item) => item.split(','));

        const fields = {};
        for (const i in students) {
            if (i !== 0) {
                if (!fields[students[i][3]]) fields[students[i][3]] = [];
                fields[students[i][3]].push(students[i][0]);
            }
        }

        delete fields.field;

        resolve(fields);
    });
});

module.exports = readDatabase;
