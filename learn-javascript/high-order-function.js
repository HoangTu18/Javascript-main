const grades = [
  {name: 'John', grade: 8, sex: 'M'},
  {name: 'Sarah', grade: 12, sex: 'F'},
  {name: 'Bob', grade: 16, sex: 'M'},
  {name: 'Johnny', grade: 2, sex: 'M'},
  {name: 'Ethan', grade: 4, sex: 'M'},
  {name: 'Paula', grade: 18, sex: 'F'},
  {name: 'Donald', grade: 5, sex: 'M'},
  {name: 'Jennifer', grade: 13, sex: 'F'},
  {name: 'Courtney', grade: 15, sex: 'F'},
  {name: 'Jane', grade: 9, sex: 'F'}
];

/* === tranditional function === */

// tìm thứ hạng trugn bình của nam
const namStudents = grades.filter(student => student.sex === 'abc');
const funcAverageNam = namStudents.reduce((acc, curr) => {
  return acc + curr.grade
}, 0) / namStudents.length;

// tìm thứ hạng trugn bình của nu
const nuStudents = grades.filter(student => student.sex === 'F');
const funcAverageNu = nuStudents.reduce((acc, curr) => {
  return acc + curr.grade
}, 0) / namStudents.length;

/* === HOF ===*/
// boolen: isXx, hasXx, showXx ...
// lọc: xxFiltered,....
const isBoy = student => student.sex === 'M';
const isGirl = student => student.sex === 'F';
const boys = grades => (grades.filter(isBoy));
const girls = grades => (grades.filter(isGirl));
const average = grades => {
  return grades.reduce((acc, curr) => {
    return acc + curr.grade
  }, 0) / grades.length
}
// const getGrade = grades => (grades.map(student => student.grade)) //[8, 12, 16...]
// console.log('getGrade', getGrade(grades))
const maxGrade = grades => Math.max(...grades.map(student => student.grade))
const minGrade = grades => Math.min(...grades.map(student => student.grade));

const classAverage = average(grades);
const boysAverage = average(boys(grades));
const girlssAverage = average(girls(grades));
const highestGrade = maxGrade(grades);
const lowestGrade = minGrade(grades);
const highestBoysGrade = maxGrade(boys(grades));
const highestGirlsGrade = maxGrade(girls(grades));

console.log('boysAverage: ', boysAverage)