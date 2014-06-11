/* You are given a binary tree (not sorted, it doesn't matter in this kata) represented by TreeNode class, 
which is defined like this:

class TreeNode
  attr_accessor :left
  attr_accessor :right
  attr_reader :value
end
Your task is to return the array with elements from tree sorted by levels, which means the root element goes first, 
then root children (from left to right) are second and third, and so on. The leaf terminator is nil. 
Return empty array for empty tree (nil argument). */

var BST2 = function (value) {
    this.value = value;
    this.left = null;
    this.right = null;
    return this;
};

BST2.prototype.sort = function () {
    var result = [];

    var traverse = function (tree, order) {
        result.push({
            value: tree.value,
            order: order,
            index: result.length
        });
        if (tree.left) { traverse(tree.left, order + 1); }
        if (tree.right) { traverse(tree.right, order + 1); }
    };
    traverse(this, 0);


    return result.sort(function(a, b) {
        if (a.order !== b.order) { return b.order < a.order; }
        if (a.order === b.order) { return b.index < a.index; }
    }).map(function(e) {
        return a.value;
    });
};