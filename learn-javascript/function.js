// IIFE
(function() {
  var aIIFE = 'abc'
  console.log("iife")
})()

// console.log('aIIFE: ', aIIFE)

// normal function
function getFee(isFee) {
  // const fee = isFee ? '10$' : '20$';
  // return fee;
  return isFee ? '10$' : '20$';
}
console.log('normal function: ', getFee(true)) // 10$

// arrow function -> anomynous function
const getFeeArrowFunction = (isFee) => {
  return isFee ? '10$' : '20$';
}
console.log('arrow function: ', getFeeArrowFunction(false)) // 20$


function getMonth(month) {}
getMonth('xx') // Jan -> 1, Feb -> 2, March -> 3, April -> 4, May -> 5

// constructor function
function HttpRequest(host, port) {
  this.host = host
  this.port = port;
  this.price = 30;
}

// add method
HttpRequest.prototype.print = function() {
  // console.log('Server running at: ' + this.host + ':' + this.port)
  console.log(`Server running at: ${this.host}: ${this.port}`) // template string es6
}

HttpRequest.prototype.calc = function(number) {
  console.log('calc price: ' + (this.price - number))
}


HttpRequest.prototype.arrowFunc = (number) => {
  console.log('arrowFunc: ' + (this.price - number))
}

// use
const httpRequest = new HttpRequest('localhost', 3000);

httpRequest.print();
httpRequest.calc(10);
httpRequest.arrowFunc(10);

// function return statement
function caclulateNumber(a, b) {
  if(a === 1) return a + b;
  if(a < 1) return b;
  return a;
}
const getNumber = caclulateNumber(1, 10);
console.log('caclulateNumber: ', getNumber)


// write function studentAchive(score) -> score === 1: ignorant; > 4, < 7: middle; còn lai: good

