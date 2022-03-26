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

/* Baitap 5
search by name
input: [
  {
    id: 0,
    name: 'truong'
  },
  {
    id: 1,
    name: 'khoa'
  },
  {
    id: 2,
    name: 'nam'
  },
  {
    id: 3,
    name: 'thu'
  }
]
when user input: t
output: [
   {
    id: 0,
    name: 'truong'
  },
  {
    id: 3,
    name: 'thu'
  }
]
*/


/* Baitap 6
extract file name
input: {
  id: 12,
  passportNumber: 12,
  pic: {
    pictureIdNumber:
      "data:application/pdf;name=[Smart Contract] A-Survey-of-Attack-on-Ethereum-Smart-Contracts.pdf;base64,JVBERi0xLjMKJcTl8uXrp/Og0MTGCjUgMCBvY",
    pictureOfBuyerHoldingPassport:
      "data:image/png;name=Screenshot from 2018-09-10 13-24-45.png;base64,iVBORw0KGgoAAAANSUhEUgAAAbkAAAFpCAI"
  },
  number: {
    picturePassport:
      "data:image/png;name=Screenshot from 2018-10-29 13-16-53.png;base64,iVBORw0KGgoAAAANSUhEUgAAAX",
    proofOfTemporaryAddress:
      "data:image/png;name=one-way.png;base64,iVBORw0KGgoAAAANSUhEUgAABIUA"
  }
};
output: {
  pictureIdNumber: '[Smart Contract] A-Survey-of-Attack-on-Ethereum-Smart-Contracts.pdf',
  pictureOfBuyerHoldingPassport: 'Screenshot from 2018-09-10 13-24-45.png',
  picturePassport: 'Screenshot from 2018-10-29 13-16-53.png',
  proofOfTemporaryAddress: 'one-way.png'
}
*/

/* Baitap 7
flattern object
input: {
  businessLicenseNumber: '23',
  informationOfBusiness: {
    idNumber: {
      id: 22,
      issuanceDate: '2222-02-02',
      issuancePlace: '22',
      pictureIdNumber: 'http://localhost:3032/uploads/1548662953953.png',
    },
    passport: {
      expiryDate: '2222-02-02',
      issuanceDate: '2222-02-02',
      issuancePlace: '222',
      passportNumber: 222,
      pictureOfBuyerHoldingPassport: 'http://localhost:3032/uploads/2314231253123.png',
      picturePassport: 'http://localhost:3032/uploads/231eqe42.png',
      address: {
        pictureAddress: 'http://localhost:3032/uploads/content-js.pdf',
      }
    },
  },
  street: {
    id: 22,
    issuanceDate: '2222-02-02',
    issuancePlace: 'tpcm',
    pictureStreet: 'http://localhost:3032/uploads/street.pdf',
  },
  proofOfTemporaryAddress: 'http://localhost:3032/uploads/1678345437.png',
}

output: {
  businessLicenseNumber: '23',
  id: 22,
  issuanceDate: '2222-02-02',
  issuancePlace: 'tpcm',
  pictureIdNumber: 'http://localhost:3032/uploads/1548662953953.png',
  expiryDate: '2222-02-02',
  passportNumber: 222,
  pictureOfBuyerHoldingPassport: 'http://localhost:3032/uploads/2314231253123.png',
  picturePassport: 'http://localhost:3032/uploads/231eqe42.png',
  pictureAddress: 'http://localhost:3032/uploads/content-js.pdf',
  pictureStreet: 'http://localhost:3032/uploads/street.pdf',
  proofOfTemporaryAddress: 'http://localhost:3032/uploads/1678345437.png'
} 
*/