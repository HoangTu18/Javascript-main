/* for ... of */
const array1 = [1,2,3,4];
for(const element of array1) {
  console.log('elelment: ', element)
}

/* splice */
const months = ['Jan', 'Feb', 'March']
months.splice(1, 2); //remove 

console.log('months', months)

/* shift */
const animales  = ['elepant', 'lion', 'tiger']
const shiftAnimal = animales.shift();

console.log("before shift: ", animales)
console.log("after shift: ", shiftAnimal)


/* filter */
const books = ['react', 'vue', 'angular', 'javascript', 'php'];

// const newBooks = books.filter(book => book.length > 3); // arrow function
const newBooks = books.filter(book => { // arrow function
  return book.length > 3
}); 
// const newBooks = books.filter(function(book, index, array) { // anomy function
//   // console.log(book, index, array);
//   return book.length > 5
// })
console.log("filter: ", newBooks)


/* === execirse === */

/* Bai 1
- create an array from 0 to 50.
- print số đầu tiên mà chia het cho 3 va chia het cho 7
- print cac so ma` chi het cho 3 va 7.`
*/
const numbs = Array.from(new Array(50), (_, index) => index + 1);
const filteredNumb = numbs.filter(item => item % 3 === 0 && item % 7 === 0)
const firstNum = filteredNumb.shift();
console.log('numfirstNumbs', firstNum)

/* === map === */
// input
const cars = [
  {
    id: 1,
    title: 'bmw'
  }
]

/*
output
const newCars = [
  {
    id: 'cars 1',
    title: 'bmw',
    updateDated: xxx
  }
]
*/
const newCars = cars.map((item, idx) => {
  return {
    id: `${item.title} ${idx}`,
    updateDated: Date.now(),
    // ...
  }
})

console.log("before map: ", cars)
console.log("after map: ", newCars)

/* === reduce === */
const alphabet = [10, 20, 30];
/*
output
{
  result: xxx
}
*/
// const newAlphabet = alphabet.reduce((acc, currValue, index) => {
//   return acc + currValue
// }, 0)
// 1 call: 0 -> 0 + 10 -> 10
// 2 call: 10 -> 10 + 20 -> 30
// 3 call: 30 -> 30 + 30 -> 60

const newAlphabetObject = alphabet.reduce((acc, currValue, index) => {
  console.log(acc, currValue, index)
  return {
    result: acc.result + currValue
  }
}, {
  result: 0
})
// 1 call: { result: 0 } -> acc.result + 10 => { result: 10 }
// 2 call: { result: 10 } -> acc.result + 20 -> 30
// 3 call: { result: 30 } -> acc.result + 30 -> 60
console.log('reduce: ', newAlphabetObject)


/* shopping cart
input: 
[
  { name: 'react', quanlity: 3, price: 200 },
  { name: 'milk', quanlity: 10, price: 400 },
  { name: 'beer', quanlity: 5, price: 100 },
]

=> total: 5100
*/
const carts = [
  { name: 'react', quanlity: 3, price: 200 },
  { name: 'milk', quanlity: 10, price: 400 },
  { name: 'beer', quanlity: 5, price: 100 },
  { name: 'beer', quanlity: 5, price: 500 },
]
const totalCart = carts.reduce((acc, currValue) => {
  return acc + currValue.quanlity * currValue.price
}, 0)

console.log('reduce totalCart', totalCart);

/* concat */
const animal1 = ['tiger', 'leon'];
const fruits = ['banana', 'orange'];
const players = ['ronaldo', 'messi'];
// output: ['tiger', 'leon', 'banana', 'orange']

// const combineArray = animal1.concat(fruits, players)
// const combineArray = [].concat(animal1, fruits, players)
const combineArray =  [ // es6 rest
  ...animal1,
  ...fruits,
  ...players
]
console.log('concat combineArray', combineArray);

/*
flattern aray: use reduce
input: [[10,20], [50,100], [30,500]]
output: [10,20,50,100,30,500]
*/


/* sort */
// linear sort, bubble sort, selection sort, insertion sort... 
const counter = [1, 10000, 3, 6, 2, 2000];
const counterSorted = counter.sort((a, b) => {
  if(a > b) return -1;
  if(a < b) return 1;
  return 0;
})
console.log('sort: ', counterSorted)

const students = [
  { name: 'truong', age: 20 },
  { name: 'tu', age: 15 },
  { name: 'thuan', age: 30 },
  { name: 'nam', age: 20 },
  { name: 'minh', age: 15 },
]
const studentSorted = students.sort((a, b) => {
  if(a.age > b.age) return -1;
  if(a.age < b.age) return 1;
  return 0;
  // return b.age - a.age
})
console.log('student sort: ', studentSorted)

/* some 
The some() method tests whether at least one element in the array passes the test implemented by the provided function.
*/
const ages = [3, 5, 7];
const isAgeEven = ages.some(number => number % 2 === 0);
console.log('some: ', isAgeEven)

/* every 
The every() method tests whether all elements in the array pass the test implemented by the provided function. 
*/
const price = [2, 5, 7, 9, 30];
const isPriceEven = price.every(number => number < 10);
console.log('every: ', isPriceEven)

/* find */
const cartsFiend = carts.find(item => item.price > 200);
console.log('find: ', cartsFiend)