// Constructor Function For Linked List
function LinkedList() {
  this.head = null;
  this.tail = null;
}

// Constructor Function For Node
function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

// Object of Linked List Contructor Function
const linkedList = new LinkedList();

console.log("Linked List", linkedList);

// Object of Node Constructor Function
const node = new Node(200, "node2", null);

console.log("Node", node);
