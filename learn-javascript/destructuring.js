// const firstName = 'thuan';
const fruits = ['coconut', 'banana', 'apple'];

// const coconut = fruits[0];
// const banana = fruits[1];
// console.log('traditional: ', coconut, banana)

// es6+
const [thuan] = fruits;

// ignore
const [, , apple] = fruits;
console.log('array: ', apple)


// object
const fullName = {
  firstName: 'truong',
  lastName: 'nguyen',
  books: {
    title: 'react',
    price: 20
  }
}
// fullName.age = 20; // create  a property for object fullname

// fullName['firstName']
// fullName.firstName

// can change key object, default paramater
// const firstName = fullName.firstName;
// const lastName = fullName.lastName;
// const title = fullName.books.title;
// const price = fullName.books.price;
const  { 
  firstName, 
  lastName, 
  age = 20,
  books: {
    title,
    price
  }
} = fullName;
console.log('thuan obj: ', firstName, lastName, age, title, price)

const  { 
  firstName: newFirstName
} = fullName;

console.log('tu obj: ', newFirstName, lastName, age, title, price)

// for of in desturcturing
const people = [
  {
    name: 'Mike Smith',
    family: {
      mother: 'Jane Smith',
      father: 'Harry Smith',
      sister: 'Samantha Smith'
    },
    age: 35
  },
  {
    name: 'Tom Jones',
    family: {
      mother: 'Norah Jones',
      father: 'Richard Jones',
      brother: 'Howard Jones'
    },
    age: 25
  }
];

for(const { name: newName, family: { mother: newMother, father } } of people ) {
  console.log('for ... of: ', newName, newMother, father)
}









