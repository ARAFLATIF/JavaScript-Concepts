Arguments Intro
Parameters vs. Arguments
Parameters: These are the variables listed in the function's definition. For example, name in the greet function above is a parameter.
Arguments: These are the values passed to the function when it is called. For example, "Alice" is an argument when calling greet("Alice").
Example: Arguments in a Function


function sum(a, b) {
    return a + b;
}

let result = sum(3, 5); // Here, 3 and 5 are arguments
console.log(result); // Output: 8


Functions With Multiple Arguments
Handling Multiple Arguments
Functions can take any number of arguments, and these can be accessed within the function body.
Using the arguments Object
The arguments object is an array-like object that contains all the arguments passed to a function.


function multipleArgs() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

let result = multipleArgs(1, 2, 3, 4, 5);
console.log(result); // Output: 15



Using Rest Parameters (ES6)
Rest parameters provide a more modern and readable way to handle variable numbers of arguments.


  function multipleArgs(...args) {
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
}

let result = multipleArgs(1, 2, 3, 4, 5);
console.log(result); // Output: 15

This method is more concise and easier to read.



  Example: Multiple Args Exercise

function average(...numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum / numbers.length;
}

let avg = average(10, 20, 30, 40);
console.log(avg); // Output: 25
