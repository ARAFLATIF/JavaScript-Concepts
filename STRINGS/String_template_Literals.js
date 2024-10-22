String template literals, introduced in ECMAScript 2015 (ES6), are a powerful way to create and manipulate strings in JavaScript.
  Here’s a detailed overview of their features and usage.


  Syntax
Template literals are delimited by backtick characters ( ) instead of the traditional single or double quotes.

  let name = 'Alice';
let greeting = `Hello ${name}`;
console.log(greeting); // "Hello Alice"


Multi-Line Strings
One of the key advantages of template literals is the ability to create multi-line strings without the need for escape sequences.

  let address = `
  123 Main St.
  San Francisco, CA
  94105
`;
console.log(address);
// Output:
// 123 Main St.
// San Francisco, CA
// 94105


String Interpolation
Template literals allow you to embed expressions within the string using the ${expression} syntax. These expressions can be variables,
  function calls, or any valid JavaScript expression.

  let number1 = 8;
let number2 = 3;
let result = `The sum of ${number1} and ${number2} is ${number1 + number2}.`;
console.log(result); // "The sum of 8 and 3 is 11."



Tagged Template Literals
Tagged template literals allow you to parse the template literal with a custom function.
  This function can perform any desired operations on the parts of the template literal.



  Syntax
To use a tagged template literal, you precede the template literal with a function name.

  function myTag(strings,...values) {
  console.log(strings); // Array of string parts
  console.log(values); // Array of expression values
  return 'Processed string';
}

let name = 'Sarah';
let city = 'Rome';
let result = myTag`Hello ${name}. Welcome to ${city}.`;
console.log(result); // "Processed string"



Example: Formatting a Receipt
Here’s an example of using a tagged template literal to format a receipt:

function receiptTag(strings,...values) {
  let finalString = '';
  for (let i = 0; i < values.length; i++) {
    finalString += strings[i] + values[i];
  }
  finalString += strings[strings.length - 1];
  return finalString;
}

const item = 'apple';
const price = 2.5;
const quantity = 3;
const message = receiptTag`
  You have ${quantity} ${item}s.
  Unit cost: $${price}.
  Total cost: $${quantity * price}.
`;
console.log(message);
// Output:
// You have 3 apples.
// Unit cost: $2.5.
// Total cost: $7.5.



Raw Strings
The String.raw method allows you to access the raw strings as they were entered, without processing escape sequences.

  let s = String.raw`Welcome to GeeksforGeeks Value of expression is ${2 + 3}`;
console.log(s); // "Welcome to GeeksforGeeks Value of expression is ${2 + 3}"


Nested Templates
Template literals can be nested to create more complex and readable strings, especially when dealing with conditional logic or multiple expressions.

  function maximum(x, y, z) {
  let c = `value ${(y > x && y > z)? 'y is greater' : `${x > z? 'x is greater' : 'z is greater'}`}`;
  return c;
}
console.log(maximum(5, 11, 15)); // "value z is greater"
console.log(maximum(15, 11, 3)); // "value x is greater"
console.log(maximum(11, 33, 2)); // "value y is greater"



Advantages
Readability and Maintainability: Template literals make your code more readable by avoiding the need for concatenation with the + operator and escaping quotation marks245.
Multi-Line Support: Easily create multi-line strings without escape sequences.
Expression Embedding: Embed variables and expressions directly within the string.
Custom Processing: Use tagged template literals to perform custom operations on the string parts.


  In summary, template literals offer a flexible and powerful way to work with strings in JavaScript, enhancing readability, maintainability, and the ability to perform complex string manipulations.
