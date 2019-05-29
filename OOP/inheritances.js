// Inheritance enables new objects to take on the properties of existing objects.

/*
Single Inheritance (one parent , one child)
Multi-level Inheritance (multiple parent , one child)
Multiple Inheritance (multiple parent , mutiple child)
Hierarchical Inheritance (mutiple child , one parent)
*/

// Single Inheritance

class Father {
  constructor() {
    this.color = "brown";
  }
}

class Son extends Father {
  constructor() {
    super();
    this.weight = "60KG";
  }
}

const i = new Son();
console.log(i);
