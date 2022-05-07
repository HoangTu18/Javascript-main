class Stack {
  constructor(items = []) {
    this.items = items
  }

  push(value) {
    this.items.push(value)
  }

  pop() {
    this.items.pop()
  }

  print() {
    return this.items
  }
}

const stack = new Stack();

/* === http link ===*/
async function fetchData(label = 'todos'){
  const apiLink = `https://tony-json-server.herokuapp.com/api/${label}`;
  const res = await fetch(apiLink);
  const data = await res.json();
  const values = data.data;
  return values;
}

const sayBye = () => {
  console.log('sayBye export default')
}

// export no default
export {
  stack,
  fetchData,
  sayBye
}

// export default

// traditional function
// export default function sayHi() {
//   console.log('sayHi export default')
// }

// arrow function
const sayHi = () => {
  console.log('sayHi export default')
}
// export default sayHi;
export { sayHi as default }

