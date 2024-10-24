What is a JavaScript Function?
A JavaScript function is a reusable block of code that performs a specific task. It can take arguments, process data, and return values. Functions are first-class objects, meaning they can be passed to other functions, returned from functions, and assigned to variables and properties.
Syntax and Declaration
Functions can be declared in several ways:

Function Declaration

function myFunction(param1, param2) {
    // code to be executed
}

This is the most common way to declare a function. The function name follows the function keyword, and parameters are listed in parentheses. The code to be executed is enclosed in curly brackets.

  
  
  Function Expression : 

let myFunction = function(param1, param2) {
    // code to be executed
};

Here, the function is defined as an expression and assigned to a variable. This method is useful when passing functions as arguments to other functions.

  Arrow Function : 

const myFunction = (param1, param2) => {
    // code to be executed
};

Introduced in ES6, arrow functions provide a more concise way to define functions. They are particularly useful for simple functions and when working with higher-order functions.


  Example: Our Very First Function

function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Alice"); // Output: Hello, Alice!


This example shows a basic function declaration and invocation.
