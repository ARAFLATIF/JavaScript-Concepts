Here's an explanation of how spread syntax works with function calls, array literals, and objects in JavaScript:
Spread in Function Calls

The spread syntax allows you to expand an iterable (like an array) into individual arguments when calling a function:

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers)); // Output: 6


In this example, ...numbers spreads the array into individual arguments, equivalent to calling sum(1, 2, 3)
