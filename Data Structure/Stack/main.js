const Stack = require('./utils');

const myStack = new Stack();
myStack.push(10);
myStack.push(110);

myStack.push(1110);
myStack.push(111110);
myStack.push(11101);

myStack.display();
console.log(myStack.pop());

myStack.display();
