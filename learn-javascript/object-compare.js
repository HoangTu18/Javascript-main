// referential equality
const thuan = {}; // memory A
const tu = {}; // memory B
const truong = thuan; // truong reference to thuan

console.log('referential equality: ', thuan == truong)

// manual comparison
const hero1 = {
  name: 'batman',
  gender: 'female',
  price: 80,
  address: { // memory abc
    city: [1,2,4],
    province: {
      name: 'binh thuan'
    }
  }
}
const hero2 = {
  name: 'batman',
  gender: 'female',
  price: 80,
  address: { // memory xyz
    city: [1,2,3],
    province: {
      name: 'binh thuan'
    }
  }
}
function manualComparision(obj1, obj2) {
  return obj1.name === obj2.name && obj1.gender === obj2.gender
}
console.log('manual comparison', manualComparision(hero1, hero2))


// shallow equality
function shallowEquality(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if(keys1.length !== keys2.length) {
    return false;
  }

  for(const key of keys1) {
    if(object1[key] !== object2[key]) {
      return false
    }
  }

  return true;

}
console.log('shallow equality: ', shallowEquality(hero1, hero2))

function isObject(value) {
  return value !== null && typeof value === 'object';
}
function deepEquality(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if(keys1.length !== keys2.length) {
    return false;
  }

  for(const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const isAreObject = isObject(val1) && isObject(val2);
    if(isAreObject && !deepEquality(val1, val2) || !isAreObject && val1 !== val2) {
      return false
    }
  }
  return true;
}

console.log('deep equality: ', deepEquality(hero1, hero2))