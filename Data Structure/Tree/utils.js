class Node {
	constructor(data) {
		this._data = data;
		this._left = null;
		this._right = null;
	}
	get left() {
		return this._left;
	}
	get right() {
		return this._right;
	}
	get data() {
		return this._data;
	}
	set data(data) {
		this._data = data;
	}
	set left(left) {
		this._left = left;
	}
	set right(right) {
		this._right = right;
	}
}

class Tree {
	constructor() {
		this._root = null;
	}
	get root() {
		return this._root;
	}
	set root(root) {
		this._root = root;
	}
	add(data) {
		this.root = this.helper_add(this.root, data);
	}
	helper_add(rootNode, data) {
		if (rootNode === null) {
			let newNode = new Node(data);
			this.size++;
			return newNode;
		}
		if (rootNode.data > data)
			rootNode.left = this.helper_add(rootNode.left, data);
		else rootNode.right = this.helper_add(rootNode.right, data);
		return rootNode;
	}
	result = '';
	preorder() {
		this.result = '';
		this.helper_preorder(this.root);
		console.log(this.result);
	}
	helper_preorder(rootNode) {
		if (rootNode != null) {
			this.helper_preorder(rootNode.left);
			// console.log(rootNode.data);
			this.result += rootNode.data + ' ';
			this.helper_preorder(rootNode.right);
		}
	}
	delete(data) {}
}

module.exports = Tree;
