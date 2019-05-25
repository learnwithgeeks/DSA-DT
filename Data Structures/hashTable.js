// Hash Table Constructor Functions
function HashTable(size) {
  this.buckets = new Array(size);
  this.numBuckets = this.buckets.length;
}

// Hash Node Constructor Functions
function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

// Hash Method Function
HashTable.prototype.hash = function(key) {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }
  let bucket = total % this.numBuckets;
  return bucket;
};

// Insert Node
HashTable.prototype.insert = function(key, value) {
  let index = this.hash(key);
  if (!this.buckets[index]) this.buckets[index] = new HashNode(key, value);
  else if (this.buckets[index].key === key) {
    this.buckets[index].value = value;
  } else {
    let currentNode = this.buckets[index];
    while (currentNode.next) {
      if (currentNode.next.key === key) {
        currentNode.next.value = value;
        return;
      }
      currentNode = currentNode.next;
    }
    currentNode.next = new HashNode(key, value);
  }
};

// Get Method
HashTable.prototype.get = function(key) {
  let index = this.hash(key);
  if (this.buckets[index]) {
    let currentNode = this.buckets[index];
    while (currentNode) {
      if (currentNode.key === key) return currentNode.value;
      currentNode = currentNode.next;
    }
    return null;
  } else return null;
};

// Retrieve All
HashTable.prototype.retrieveAll = function() {
  let hashNode = [];
  let bucket = this.buckets;
  for (let index in bucket) {
    while (bucket[index]) {
      if (bucket[index]) hashNode.push(bucket[index]);
      bucket[index] = bucket[index].next;
    }
  }
  return hashNode;
};
