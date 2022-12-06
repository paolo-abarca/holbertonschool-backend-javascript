/* eslint-disable */

export default function updateStudentGradeByCity(students, city, newGrades) {
  const result = students.filter((place) => place.location === city)
    .map((person) => {
      for (const grades of newGrades) {
        if (grades.studentId === person.id) {
          person.grade = grades.grade;
          return person;
        }
      }
      person.grade = 'N/A';
      return person;
    });
  return result;
}
