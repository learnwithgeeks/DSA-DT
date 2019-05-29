// process of hiding data inside a class

class Employee {
  constructor() {
    let name;
    let id;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
  getId() {
    return this.id;
  }
  setId(id) {
    this.id = id;
  }
}

const e = new Employee();
e.setName("vivek");
e.setId(100);
console.log(e.getName() + " " + e.getId());
