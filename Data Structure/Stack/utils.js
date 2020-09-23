class Node {
	constructor(data) {
		this._data = data;
		this._next = null;
	}
	get next() {
		return this._next;
	}
	get data() {
		return this._data;
	}
	set data(data) {
		this._data = data;
	}
	set next(newNext) {
		this._next = newNext;
	}
}

class Stack {
	constructor() {
		this.size = 0;
		this._top = null;
	}
	get top() {
		return this._top;
	}
	set top(newTop) {
		this._top = newTop;
	}
	push(data) {
		this.size++;
		if (this.top == null) {
			this.top = new Node(data);
			return;
		}
		let curr = this.top;
		while (curr.next) {
			curr = curr.next;
		}
		curr.next = new Node(data);
		this.size++;
		return;
	}
	result = '';
	pop() {
		if (this.top === null) return null;
		this.size--;
		this.result = 0;
		let curr = this.top;
		if (this.size === 1) {
			this.size--;
			this.result = this.top.data;
			this.top = null;
			return this.result;
		}
		if (this.size == 2) {
			this.size--;
			this.result = this.top.next.data;
			this.top.next = null;
			return this.result;
		}
		while (curr.next.next) {
			curr = curr.next;
		}
		this.result = curr.next.data;
		curr.next = null;
		return this.result;
	}
	display() {
		let curr = this.top;
		let result = '';
		while (curr) {
			result += curr.data + ' ';
			curr = curr.next;
		}
		console.log(result);
	}
}

module.exports = Stack;
