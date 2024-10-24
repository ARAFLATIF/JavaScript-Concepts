Intro to Arrow Functions
Overview
Arrow functions are a concise way to write functions in JavaScript. They were introduced in ECMAScript 2015 (ES6).
Syntax
The basic syntax of an arrow function is as follows:

const myFunction = (params) => { body };

params: A list of parameters separated by commas.
body: The function body which can be either an expression or a block of statement

EXAMPLE : 

const add = (a, b) => a + b;
console.log(add(3, 5)); // Output: 8


Arrow Function Exercise
Example Exercise
Here is an example exercise where you practice using arrow functions:

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(number => number * number);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]



Arrow Function Implicit Returns
Overview
Arrow functions can have implicit returns if the function body is a single expression. This eliminates the need for the return keyword.


  EXAMPLE : 

const greet = name => `Hello, ${name}!`;
console.log(greet("Alice")); // Output: Hello, Alice!



Arrow Functions Wrapup
Summary
Arrow functions are a powerful tool in modern JavaScript development. Here are the key points summarized:
Concise Syntax
No this Binding
No arguments Object
Implicit Returns
By mastering arrow functions, you can write more concise and readable code.

  
