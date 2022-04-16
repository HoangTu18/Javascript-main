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
}

const stack = new Stack();

stack.push(5);
stack.push(10);
stack.pop();


console.log(stack)