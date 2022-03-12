// defined object
const car = {
  name: 'Honda City',
  model: 500,
  isJapan: true,
  color: ['white', 'red', 'black'],
  agency: {
    name: 'Cong Hoa',
    address: '140 Cong Hoa, Tphcm'
  },
  'app-id': '1234-31441-3431',
  3: '2013',
  // normal function, default parameter
  start: function(time = new Date()) {
    return time; // undefined
  },
  // arrow function
  end: (time) => {
    return time;
  },
  brake: function(isBrake) {
    return {
      safe: isBrake
    }
  },
  //normal function
  fullName: function() {
    return `${this.name} ${this.model}` // this = car
  },
  // arrow function
  getNameAgency: () => {
    // if(this.agency) {
    //   return this.agency.name
    // }
    // return undefined;
    return this.agency?.name; // this = {}; this?.agency?.name -> optional chain operator
  }
}

const startTime = car.start();
console.log('startTime: ', startTime)

const endTime = car.end();
console.log('endTime: ', endTime)

const brake = car.brake(true);
console.log('brake: ', brake.safe) 

/* access properties */
const CAR_AGENCY = 'agency';

const carName = car.name;
console.log('access properties carName: ', carName)

const carModel = car['model'];
console.log('access properties carModel: ', carModel);

const carAppId = car['app-id'];
console.log('access properties carAppId: ', carAppId);

const carAgency = car[CAR_AGENCY];
console.log('access properties carAgency: ', carAgency);

// es 6: object desstructuring
const model = 'abc';
const { name, model: newModel } = car;
console.log('access properties name: ', name)
console.log('access properties newModel: ', newModel)

// this memod
const carFullName = car.fullName();
console.log('access properties carFullName: ', carFullName)

const carAgencyName = car.getNameAgency();
console.log('access properties carAgencyName: ', carAgencyName)

/* loop object */
for(const keyObject in car) {
  // name: 'honda city' ...
  const valueOject = car[keyObject];
  console.log('loop object for ... in: ', `${keyObject}: ${valueOject}`)
}

// for ... in with array
const carsArray = ['city', 'vios', 'vinfast'];
for(const cardIndex in carsArray) {
  console.log('loop array for ... in: ', cardIndex)
}

// Object.keys()
const loopObjectByKey = Object.keys(car);
loopObjectByKey.forEach(key => {
  console.log('loopObjectByKey: ', `${key}: ${car[key]}`)
})

// Object.values()
const loopObjectByValues = Object.values(car);
loopObjectByValues.forEach(values => {
  console.log('loopObjectByValues: ', `${values}`)
});

// object.entries();
const loopObjectByEntries = Object.entries(car);
loopObjectByEntries.forEach(carItem => {
  console.log('loopObjectByEntries: ', carItem)
});

/* copy object */

// spread operator es6
const targetObject = { firstName: 'truong', lastName: 'nguyen', price: 100 };
const targetObjectB = { address: '140', city: 'TPHCM', price: 30 };
const spreadSource = { ...targetObjectB, ...targetObject }; // copy shallow object

// object.assgin es5
const assignSoure = Object.assign({}, targetObject, targetObjectB) // copy shallow object

// Object stringify
const stringifyObject = JSON.parse(JSON.stringify(targetObject)); // copy deep object

console.log('copy object spread: ', spreadSource);
console.log('copy object assgin: ', assignSoure);
console.log('copy object stringifyObject: ',  stringifyObject);

/* delete object */
delete targetObject.price;
console.log("delete object: ", targetObject)

// update object
let persons = {
  1: {
    id: 1,
    title: 'react',
    author: 'tony'
  },
  2: {
    id: 2,
    gender: 'male',
    title: 'angular',
    author: 'minh'
  },
}

console.log("before update persopn: ", persons)

const newId = 2;
const newPersons = {
  ...persons,
  [newId]: {
    ...persons[newId],
    title: 'updated',
    author: 'new author'
  }
}
console.log("after update persopn: ", newPersons)