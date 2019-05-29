let arr = [1, 2, 3];
let map = arr.map(value => "element " + value);
let filter = arr.filter(value => value >= 2);
let reduce = arr.reduce((sum, ele) => sum + ele);
console.log("map", map);
console.log("filter", filter);
console.log("reduce", reduce);
