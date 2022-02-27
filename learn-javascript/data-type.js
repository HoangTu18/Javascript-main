/* object
- key: string, number
- value: string, number, object, null, undefined, array, array like string, array like object ....
*/

const language = {
  name: 'truong',
  age: 18,
  fruits: ['banana', 'orange'], // array like string
  books: [  
    {
      title: 'Javascript',
      price: 80
    },
    {
      title: 'React',
      price: 100
    }
  ], // array like object,
  gender: null,
  isShowLoading: undefined
}

console.log(language.name)

/* object compare reference */
const objectA = {}; // memory A
const objectB = {}; // memory B
const objectC = objectA; // memory A

// add property into object
objectA.name = 'truong';
objectA['age'] = 19;

console.log('compare object: ', objectB == objectC);
console.log('objectA: ', objectA);

/* undefined */
var dataUnd;
console.log('undefined: ', dataUnd);

/* type coercion */
const numCoercion = 30 - '19' // -> 30 - Number('19') -> 30 -  19
console.log('numCoercion: ', 11)

// convert string -> number
console.log('convert string -> number: ', Number('19'));
console.log('convert string -> number: ', parseInt('19.756'))
console.log('convert string -> number: ', parseFloat('19.63'))

// convert number - > string
const numberToString = 20;
console.log('convert number -> string: ', numberToString.toString());

// detect data type
console.log('detect data type: ', typeof numCoercion)


/* truthy and falsy */
const files = {};
console.log('convert value -> boolean: ', Boolean(files))
