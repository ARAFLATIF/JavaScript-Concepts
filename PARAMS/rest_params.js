Rest parameters in JavaScript allow a function to accept an indefinite number of arguments as an array. Here's a simple explanation of how they work:

  What are Rest Parameters?

    Rest parameters are denoted by three dots (...) followed by a parameter name. 
    They collect all remaining arguments into an array, allowing functions to handle a variable number of arguments flexibly.


    Syntax and Usage

function functionName(...parameterName) {
  // function body
}

The rest parameter must be the last parameter in the function definition.



Key Features
Collecting Arguments:
Rest parameters gather all extra arguments into an array:


function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10

Combining with Regular Parameters:
You can use rest parameters alongside regular parameters:

function greet(greeting, ...names) {
  names.forEach(name => console.log(`${greeting}, ${name}!`));
}

greet("Hello", "Alice", "Bob", "Charlie");
// Output:
// Hello, Alice!
// Hello, Bob!
// Hello, Charlie!



Array Methods:
Since rest parameters create real arrays, you can use array methods on them:

function sortArgs(...args) {
  return args.sort();
}

console.log(sortArgs(3, 1, 4, 1, 5)); // Output: [1, 1, 3, 4, 5]



Advantages
Flexibility: Functions can handle any number of arguments.
Cleaner Code: Eliminates the need for the arguments object.
Array Features: Rest parameters are real arrays, unlike the arguments object.
Rest parameters simplify working with functions that need to handle multiple arguments, making your code more readable and flexible.
