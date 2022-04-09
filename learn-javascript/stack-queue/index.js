// unshift
const array = [0,1,2,3,4,5,6,7,8,9,10];
const length = array.length;
// for(let i = length; i >= 0; i--) {
//   array[i] = array[i - 1]; 
// }
// array[0] = -1
// console.log('unshift: ', array)

// shift
for(let i = 0; i < length; i++) {
  array[i] = array[i + 1]
}
console.log('shift: ', array)
