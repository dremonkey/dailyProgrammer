/* Implement a binary search tree with methods INSERT, DELETE, and CONTAINS. Use the pseudo-classical style. */

var BST = function (value) {
    this.value = value;
    this.parent = null;
    this.left = null;
    this.right = null;
    return this;
};

BST.prototype.insert = function (value) {
    if (value < this.value && this.left !== null) { return this.left.insert(value); }
    if (value > this.value && this.right !== null) { return this.right.insert(value); }

    if (value < this.value && this.left === null) { 
        this.left = new BST(value); 
        this.left.parent = this;
    }
    if (value > this.value && this.right === null) { 
        this.right = new BST(value); 
        this.right.parent = this;
    }

    return value;
};

BST.prototype.delete = function () {
    var remove = function(node) {
        var isLeftChild = (node.parent.left.value === node.value);
        if (!node.left && !node.right) { 
            if (isLeftChild) { node.parent.left = null; }
            else { node.parent.right = null; }
        } else if (node.left && !node.right) {
            if (isLeftChild) { node.parent.left = node.left; }
            else { node.parent.right = node.left; }
        } else if (!node.left && node.right) {
            if (isLeftChild) { node.parent.left = node.right; }
            else { node.parent.right = node.right; }
        } else {
            if (isLeftChild) { node.parent.left = node.left; }
            else { node.parent.right = node.left; }
            var merge = function(source, target) {
                source.insert(target.value);
                if (target.left !== null) { merge(source, target.left); }
                if (target.right !== null) { merge(source, target.right); }
            };
            merge(node.left, node.right);
        }
        return node.value;
    };

    if (this.value === value) { remove(this); }
    if (value < this.value && this.left !== null) { return this.left.delete(value); }
    if (value > this.value && this.right !== null) { return this.right.delete(value); }
    return null;
};

BST.prototype.contains = function (value) {
    if (this.value === value) { return true; }
    if (value < this.value && this.left !== null) { return this.left.contains(value); }
    if (value > this.value && this.right !== null) { return this.right.contains(value); }
    return false;
};