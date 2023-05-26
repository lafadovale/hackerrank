function gradingStudents(grades) {
  let roundedGrades = grades.map((grade) => {
    let addedNumber = 5 - (grade % 5);
    return grade > 37 && addedNumber < 3 ? grade + addedNumber : grade;
  });
  return roundedGrades;
}
