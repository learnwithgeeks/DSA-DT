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

// Adding New Node To Head
LinkedList.prototype.addToHead = function(value) {
  let newNode = new Node(value, this.head, null);
  if (!this.head) this.tail = newNode;
  else this.head.prev = newNode;
  this.head = newNode;
};

// Adding New Node To Tail
LinkedList.prototype.addToTail = function(value) {
  let newNode = new Node(value, null, this.tail);
  if (!this.tail) this.head = newNode;
  else this.tail.next = newNode;
  this.tail = newNode;
};

// Removing Head
LinkedList.prototype.removeHead = function() {
  if (!this.head) return null;
  this.head = this.head.next;
  if (this.head) this.head.prev = null;
  else this.tail = null;
};

// Removing Tail
LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null;
  this.tail = this.tail.prev;
  if (this.tail) this.tail.next = null;
  else this.head = null;
};

// Search
LinkedList.prototype.search = function(searchValue) {
  let currentNode = this.head;
  while (currentNode) {
    if (searchValue === currentNode.value) {
      return currentNode.value;
    }

    currentNode = currentNode.next;
  }
  return null;
};

// Index of
LinkedList.prototype.indexOf = function(value) {
  let currentNode = this.head;
  let indexes = [];
  let currentIndex = 0;
  while (currentNode) {
    if (value === currentNode.value) {
      indexes.push(currentIndex);
    }
    currentNode = currentNode.next;
    currentIndex++;
  }
  return indexes;
};
