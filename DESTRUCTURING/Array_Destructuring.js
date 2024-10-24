Array Destructuring
Array destructuring allows you to unpack values from arrays and assign them to variables using a syntax that resembles array literals.
Basic Syntax

const numbers = [1, 2, 3];
const [first, second, third] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(third); // Output: 3


Features
Skipping Elements: You can skip elements by leaving a gap in the assignment.

const [first, , third] = numbers;
console.log(third); // Output: 3


Default Values: Assign default values if the array does not provide enough elements.

  const [a = 10, b = 20] = [1];
console.log(b); // Output: 20


Nested Arrays: Destructure nested arrays by using nested brackets.

  const nestedArr = [1, [2, 3]];
const [one, [two, three]] = nestedArr;
console.log(two); // Output: 2

