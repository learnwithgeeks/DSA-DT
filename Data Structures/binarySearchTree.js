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
BinarySearchTree.prototype.depthFirstTraversal = function(order) {
  if (order === "preorder") console.log(this.value);
  if (this.left) this.left.depthFirstTraversal(order);
  if (order === "inorder") console.log(this.value);
  if (this.right) this.right.depthFirstTraversal(order);
  if (order === "postorder") console.log(this.value);
};

// Breadth First Traversal
BinarySearchTree.prototype.breadthFirstTraversal = function() {
  let queue = [this];
  while (queue.length) {
    let firstNode = queue.shift();
    console.log(firstNode.value);
    if (firstNode.left) queue.push(firstNode.left);
    if (firstNode.right) queue.push(firstNode.right);
  }
};

// Get Minimum Value
BinarySearchTree.prototype.getMinVal = function() {
  if (this.left) this.left.getMinVal();
  else console.log(this.value);
};

// Get Maximum Value
BinarySearchTree.prototype.getMaxVal = function() {
  if (this.right) this.right.getMaxVal();
  else console.log(this.value);
};
