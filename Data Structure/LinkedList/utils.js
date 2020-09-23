class Node {
	constructor(data, next = null) {
		this._data = data;
		this._next = next;
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
	set next(next) {
		this._next = next;
	}
}

class LinkedList {
	constructor() {
		this._head = null;
		this.size = 0;
	}
	get head() {
		return this._head;
	}
	set head(newHead) {
		this._head = newHead;
	}
	add(data) {
		this.size++;
		if (null === this.head) {
			this.head = new Node(data);
			return;
		}
		let curr = this.head;
		while (curr.next) {
			curr = curr.next;
		}
		curr.next = new Node(data);
	}
	delete(data = null) {
		if (this.size == 0) return 0;
		console.log(data);
		if (data) {
			let curr = this.head;
			let pre = curr;
			if (this.head.data === data) {
				this.size--;
				this.head = this.head.next;
				return this.size;
			}
			while (curr) {
				if (curr.data === data) {
					pre.next = curr.next;
					this.size--;
					return this.size;
				}
				pre = curr;
				curr = curr.next;
			}
			return this.size;
		}
		let curr = this.head;
		if (this.size === 1) {
			this.size--;
			this.head = null;
			return this.size;
		}
		if (this.size == 2) {
			this.size--;
			this.head.next = null;
			return this.size;
		}
		while (curr.next.next) {
			curr = curr.next;
		}
		curr.next = null;

		return this.size;
	}
	insert(index = this.size, data = 0) {
		if (index > this.size) index = this.size;
		index--;
		this.size++;
		if (index == -1) {
			let newNode = new Node(data);
			newNode.next = this.head;
			this.head = newNode;
			return;
		}
		let curr = this.head;
		while (index-- > 0) {
			curr = curr.next;
		}
		let join = curr.next;
		curr.next = new Node(data);
		curr.next.next = join;
		this.size++;
		return this.size;
	}
	display() {
		let curr = this.head;
		let result = '';
		while (curr) {
			result += curr.data + ' ';
			curr = curr.next;
		}
		console.log(result);
	}
}

//Functions :
/**
 * Description :
 *         => add(data) -> parameter : data and return size of the list
 *         => delete(data) -> parameter : data to deleted return size of the list
 *         => insert(pos,data) -> parameter : position ( 0 , list size ) return size of the list
 *         => size -> return the size of the list
 *         => display -> parameter : no parameters and return the entire result
 */

module.exports = LinkedList;
