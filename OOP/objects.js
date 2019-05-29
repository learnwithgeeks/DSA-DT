/*
There are 3 ways to create objects.

By object literal
By creating instance of Object directly (using new keyword)
By using an object constructor (using new keyword)
*/

// By Object Literal
const emp = { id: 101, name: "vivek" };
console.log("Object Literal", emp.id + " " + emp.name);

// By Creating instance of Object Directly
const emp2 = new Object();
emp2.id = 102;
emp2.name = "fahad";
console.log("Object Directly", emp2.id + " " + emp2.name);

// By Creating instance of Object Constructor
function emp3(id, name) {
  this.id = id;
  this.name = name;
}
const emp4 = new emp3(103, "darshan");
console.log("Object Constructor", emp4.id + " " + emp4.name);
