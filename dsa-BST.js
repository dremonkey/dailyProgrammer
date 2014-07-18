var BinarySearchTree = function (value) {
    this.value = value;
    this.left = null;
    this.right = null;
};

BinarySearchTree.prototype.add = function (value) {
    if (value === this.value) { 
        return null;
    } else if (value < this.value) {
        if (this.left === null) { 
            this.left = new BinarySearchTree(value); 
        } else {
            this.left.add(value);
        }
    } else {
        if (this.right === null) {
            this.right = new BinarySearchTree(value);
        } else {
            this.right.add(value);
        }
    }
};

BinarySearchTree.prototype.breadthFirstSearch = function () {
    var visit = function (node) {
        console.log(node.value);
    };
    var queue = [];
    queue.shift(this);
    while (queue.length > 0) {
        var node = queue.pop(this);
        visit(node);
        if (this.left) { queue.shift(this.left); }
        if (this.right) { queue.shift(this.right); }
    }
};

BinarySearchTree.prototype.preOrder = function () {
    var visit = function (node) { };
    visit(this);
    if (this.left) { this.left.preOrder(); }
    if (this.right) { this.right.preOrder(); }
};

BinarySearchTree.prototype.inOrder = function () {
    var visit = function (node) { };
    if (this.left) { this.left.inOrder(); }
    visit(this);
    if (this.right) { this.right.inOrder(); }
};

BinarySearchTree.prototype.postOrder = function () {
    var visit = function (node) { };
    if (this.left) { this.left.postOrder(); }
    if (this.right) { this.right.postOrder(); }
    visit(this);
};

BinarySearchTree.prototype.stackPreOrder = function () {

};

BinarySearchTree.prototype.stackInOrder = function () {

};

BinarySearchTree.prototype.stackPostOrder = function () {

};
