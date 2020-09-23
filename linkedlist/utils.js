class LinkedList {
	constructor() {
		this._head = null;
		this.size = 0;
	}

	add(data) {
		this.size++;
		let newNode = new Node(data);
		if (this._head === null) {
			this._head = newNode;
			return;
		}
		let currNode = this._head;
		while (currNode.next != null) {
			currNode = currNode.next;
		}
		currNode.next = newNode;
	}

	display() {
		let result = '';
		let currNode = this._head;
		while (currNode != null) {
			result += currNode.data + ' ';
			currNode = currNode.next;
		}
		console.log(result);
	}

	get head() {
		return this._head;
	}
}

class Node {
	constructor(data) {
		this._data = data;
		this._next = null;
	}
	set data(data) {
		this._data = data;
	}
	set next(next) {
		this._next = next;
	}
	get data() {
		return this._data;
	}
	get next() {
		return this._next;
	}
}

module.exports = LinkedList;
