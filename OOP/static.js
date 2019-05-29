// Static keyword does not required to create object

class Employee {
  static detail(name) {
    return name;
  }
}
console.log(Employee.detail("vivek"));
