Function Expressions
What are Function Expressions?
Function expressions are functions defined as expressions and assigned to variables. Unlike function declarations, function expressions are not hoisted to the top of their scope, meaning they must be defined before they can be used

EXAMPLE : 

let myFunction = function() {
    console.log("This is a function expression");
};

myFunction(); // This will work


Key Points
Function expressions are defined using the assignment operator.
They are not hoisted, so they must be defined before use



Function Expression Exercise

EXAMPLE : 

let sum = function(a, b) {
    return a + b;
};

console.log(sum(3, 5)); // Output: 8

This exercise involves creating a simple function expression that takes two arguments and returns their sum.

  
