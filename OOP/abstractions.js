// way of hiding implementation details and only show functionality to user

function Vehicle() {
  this.vehicle = "vehicleName";
  throw Error("Abstract Class");
}

Vehicle.prototype.detail = function() {
  return "Vehicle : " + this.vehicle;
};

function Bike(name) {
  this.vehicle = name;
}

Bike.prototype = Object.create(Vehicle.prototype);

const object = new Bike("Honda");

console.log(object.detail());
