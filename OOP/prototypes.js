// Class Declarations
class Employee {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

// Prototype Object
Employee.prototype.detail = function() {
  return this.id + " " + this.name;
};

// Constructor Object
const emp = new Employee(101, "vivek");
console.log(emp.detail());
