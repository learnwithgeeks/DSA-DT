// Constructor is use to initialize object

// Constructor Object

class Employee {
  constructor(name) {
    this.name = name;
  }
}

const o = new Employee("vivek");
console.log(o);

// Super Method

class Father {
  constructor() {
    this.color = "brown";
  }
}

class Son extends Father {
  constructor() {
    super();
    this.weight = 40 + "KG";
  }
}

const o2 = new Son();
console.log(o2);
