// BE yeu cau FE request len JSON string "{ 'truong': 1, 'thuan': 2 }"
const bodyData = { 'username': 1, 'passsword': 2 }
console.log('json string: ', JSON.stringify(bodyData))

// FE recevie data from BE 1 cai json string
const data = '{"username":"truong","email":"truong@gmail.com"}';

const parseObject = JSON.parse(data)
console.log('json parse: ', parseObject.name)

// UI :

// name: data.name
// age: data.age
