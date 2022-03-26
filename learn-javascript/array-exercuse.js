/* ===== reduce ==== */

/* Baitap1 
Counting values in an object
input: ['truong', 'thuan', 'tu', 'nam', 'thuan', 'thuan', 'tu']
output: { 'truong': 1, 'thuan': 3, 'tu': 2, 'nam': 1}
*/
const CLASS = ["truong", "thuan", "tu", "truong", "thuan", "tu", "nam"];

const countCLASS = CLASS.reduce((acc, curr) => {
  acc[curr] = acc[curr] ? ++acc[curr] : 1;
  return acc;
}, {});
console.log('Counting values in an object: ', countCLASS);


/* Baitap2
remove duplicate items in array
input: ['truong', 'thuan', 'tu', 'nam', 'thuan', 'thuan', 'tu']
output: ['truong', 'thuan', 'tu', 'nam']
*/
const input = ['truong','thuan','tu','nam','thuan','thuan','tu']
const newArray = input.reduce(function(acc,current){
  if(acc.indexOf(current) === -1){
    acc.push(current)
  }
  return acc
},[])
console.log('remove duplicate items in array: ', newArray)


/* Baitap3
group objects by a property
input: [
  { name: 'truong', age: 20 },
  { name: 'tu', age: 15 },
  { name: 'thuan', age: 30 },
  { name: 'nam', age: 20 },
  { name: 'minh', age: 15 },
]
output: {
  20: [
    { name: 'truong', age: 20 },
    { name: 'nam', age: 20 },
  ],
  15: [
    { name: 'tu', age: 15 },
    { name: 'minh', age: 15 },
  ],
  30: [
    { name: 'thuan', age: 15 }
  ],
}
*/
const peoples = [
  { name: 'truong', age: 20 },
  { name: 'tu', age: 15 },
  { name: 'thuan', age: 30 },
  { name: 'nam', age: 20 },
  { name: 'minh', age: 15 },
]
function groupBy(data, property) {
  return data.reduce((acc, curr) => {
    const key = curr[property]; // key = curr[name] = 20
    if(!acc[key]) {
      acc[key] = []
    }
    acc[key].push(curr);
    return acc;
  }, {});
}
const groupByAge = groupBy(peoples, 'name');
console.log('group by age: ', groupByAge)

/* Baitap4
bonding arrays spread (...)
input: [
  {
    name: 'Tu',
    books: ['react', 'javascript', 'vue']
  },
  {
    name: 'Thuan',
    books: ['angular', 'c#', 'c++']
  },
  {
    name: 'Truong',
    books: ['svele', 'php']
  }
]
output: [
  'react', 'javascript', 'vue', 'angular', 'c#', 'c++', 'svele', 'php'
]
*/

const books = [
  {
    name: 'Tu',
    books: ['react', 'javascript', 'vue']
  },
  {
    name: 'Thuan',
    books: ['angular', 'c#', 'c++']
  },
  {
    name: 'Truong',
    books: ['svele', 'php']
  }
]
const allBooks = books.reduce((acc, curr) => {
  return [...acc, ...curr.books];
  // return acc.concat(curr.books)
}, [])

console.log('bonding arrays spread: ', allBooks)