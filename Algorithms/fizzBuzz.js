// Fizz Buzz Algorithm

// Linear Time Complexity O(n)

let counter = 1;
function fizzBuzz(number) {
  if (counter % 15 === 0) console.log("FizzBuzz");
  else if (counter % 3 === 0) console.log("Fizz");
  else if (counter % 5 === 0) console.log("Buzz");
  else console.log(counter);
  ++counter;
  if (counter <= number) fizzBuzz(number);
}
fizzBuzz(30);
