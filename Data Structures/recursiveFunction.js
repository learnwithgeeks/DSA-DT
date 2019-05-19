let counter = 0;

// Recursive Function Factorial Program
function Factorial(num) {
  if (num === 1) return num;
  else return num * Factorial(num - 1);
}

// Recursive Function Table Creation Program
function Table(num) {
  counter++;
  if (counter <= 10) {
    console.log(num + "x" + counter + " = " + num * counter);
    Table(num);
  }
  return false;
}

// Recursive Function Fizz Buzz Program
function FizzBuzz(num, firstMultiple, secondMultiple) {
  counter++;
  if (counter <= num) {
    if (counter % firstMultiple === 0 && counter % secondMultiple === 0)
      console.log("FizzBuzz");
    else if (counter % firstMultiple === 0) console.log("Fizz");
    else if (counter % secondMultiple === 0) console.log("Buzz");
    else console.log(counter);
    FizzBuzz(num, firstMultiple, secondMultiple);
  }
  return false;
}
FizzBuzz(100, 3, 5);
