const fs = require('fs');

const countStudents = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        let students = data.split('\n').slice(1).filter((line) => line);
        const fieldCount = {};

        students.forEach((student) => {
          const fields = student.split(',');
          if (!fieldCount[fields[3]]) {
            fieldCount[fields[3]] = { count: 0, list: [] };
          }
          fieldCount[fields[3]].count++;
          fieldCount[fields[3]].list.push(fields[0]);
        });

	let studentsCount = `Number of students: ${students.length}\n`;
        let fieldsArray = [];
        for (const field in fieldCount) {
          fieldsArray.push(`Number of students in ${field}: ${fieldCount[field].count}. List: ${fieldCount[field].list.join(', ')}`);
        }
        let result = fieldsArray.join('\n');
        console.log(studentsCount + result);
        resolve(studentsCount + result);
      }
    });
  });
}

module.exports = countStudents;
