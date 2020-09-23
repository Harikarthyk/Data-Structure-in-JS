class TreeNode {
	constructor(data) {
		this._data = data;
		this._left = null;
		this._right = null;
	}
	set left(left) {
		this._left = left;
	}
	set right(right) {
		this._right = right;
	}
	get data() {
		return this._data;
	}
	set data(data) {
		this._data = data;
	}
	get left() {
		return this._left;
	}
	get right() {
		return this._right;
	}
}

class Tree {
	constructor() {
		this._root = null;
		this.size = 0;
	}
	get root() {
		return this._root;
	}
	set root(newRoot) {
		this._root = newRoot;
	}
	add(data) {
		this.root = this.helper_add(this.root, data);
	}
	helper_add(rootNode, data) {
		if (rootNode === null) {
			let newNode = new TreeNode(data);
			this.size++;
			return newNode;
		}
		if (rootNode.data > data)
			rootNode.left = this.helper_add(rootNode.left, data);
		else rootNode.right = this.helper_add(rootNode.right, data);
		return rootNode;
	}
	preorder() {
		this.helper_preorder(this.root);
	}
	helper_preorder(rootNode) {
		if (rootNode != null) {
			this.helper_preorder(rootNode.left);
			console.log(rootNode.data);
			this.helper_preorder(rootNode.right);
		}
	}
}

let root = new Tree();
root.add(10);
root.add(19);
root.add(12);
root.add(8);
root.add(1);
root.preorder();
