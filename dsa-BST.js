var BinarySearchTree = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.add = function (value) {
  if (value <= this.value) {
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

BinarySearchTree.prototype.depthFirstSearch = function (target) {
  var found = false;

  if (this.value === target) {
    return this;
  } else {
    if (target <= this.value) {
      if (this.left) found = this.left.depthFirstSearch(target);
    } else {
      if (this.right) found = this.right.depthFirstSearch(target);
    }
  }

  return found;
};

BinarySearchTree.prototype.breadthFirstSearch = function (target) {
  var found = false;
  var queue = [];
  
  queue.push(this);
  
  while(queue.length > 0 && !found) {
    var current = queue.shift();
    if (current.value === target) {
      found = current;
    } else {
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }

  return found;
};

BinarySearchTree.prototype.preOrder = function () {

};

BinarySearchTree.prototype.inOrder = function () {

};

BinarySearchTree.prototype.postOrder = function () {

};

BinarySearchTree.prototype.stackPreOrder = function () {

};

BinarySearchTree.prototype.stackInOrder = function () {

};

BinarySearchTree.prototype.stackPostOrder = function () {

};

var bst = new BinarySearchTree(7);
bst.add(5);
bst.add(8);
bst.add(1);
bst.add(6);
bst.add(9);

// console.log(bst);
console.log(bst.breadthFirstSearch(10))