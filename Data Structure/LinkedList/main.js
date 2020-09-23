const LinkedList = require('./utils');

let myList = new LinkedList();

myList.add(1);
myList.add(2);
myList.add(3);
myList.add(13);
myList.add(31);
myList.delete(13);
myList.insert(0, 122);
myList.display();
console.log(myList.size);
