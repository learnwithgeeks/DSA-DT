// Binary Search Tree Constructor Function
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// Insert Method
BinarySearchTree.prototype.insert = function(value) {
  let bst = new BinarySearchTree(value);
  if (value <= this.value) {
    if (!this.left) this.left = bst;
    else this.left.insert(value);
  } else {
    if (!this.right) this.right = bst;
    else this.right.insert(value);
  }
};

// Contains Method
BinarySearchTree.prototype.contains = function(value) {
  if (value === this.value) {
    return true;
  } else if (this.left) return this.left.contains(value);
  else if (this.right) return this.right.contains(value);
  else return false;
};

// Depth First Traversal
BinarySearchTree.prototype.depthFirstTraversal = function(value) {};

// Binary Search Tree Object
let bst = new BinarySearchTree(20);
bst.insert(10);
bst.insert(30);
bst.insert(40);
bst.insert(30);

console.log(bst.contains(100));
