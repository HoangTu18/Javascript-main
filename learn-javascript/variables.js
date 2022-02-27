// hoisting
var x;
const y = 'abc'; // global variable

// code something 1
console.log("var x: ", x) // undefined
// code something 2


x = 1; // global variable
console.log("var x: ", x) // 1


if(true) {
  var x = 2;
}

// hositing
function getX() {
  // var x = 2;
  var x;
  x = 2;
  console.log('hositing function x: ', x) // 2
}

getX(); // excute function;
console.log('hositing x: ', x) // 2

// block scope
if (true) {
  const animal = 'dog';
  console.log('animal: ', animal)
}
console.log('animal global: ', animal)