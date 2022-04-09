// traditional function
function funcA(x) {
  return function (y) {
    return function (z) {
      return x + y + z
    }
  }
  
}
const count = funcA(1)(2)(3);
console.log('count: ', count)


// arrow function es6+
const arrowClouse = (x) => (y) => x + y;
console.log('arrow function: ', arrowClouse(1)(2))
