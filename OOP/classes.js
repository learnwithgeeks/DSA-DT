/*
The class syntax contains two components:

Class declarations
Class expressions
*/

// Class Declaration
class Employee {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  detail() {
    return this.id + " " + this.name;
  }
}
const e1 = new Employee(101, "vivek");
console.log(e1.detail());

// Class Expression
const employee = class {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  detail() {
    return this.id + " " + this.name;
  }
};
const e2 = new employee(102, "fahad");
console.log(e2.detail());
