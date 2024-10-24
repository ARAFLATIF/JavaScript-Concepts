The Return Keyword
What is the Return Keyword?
The return keyword is used to specify the value that a function will return when it is called. When JavaScript reaches a return statement, the function execution stops, and the specified value is returned to the caller.

  Example: Using the Return Keyword

function add(a, b) {
    return a + b;
}

let result = add(5, 7);
console.log(result); // Output: 12

Example Without Return
If a function does not use the return keyword, it will return undefined by default

function greet(name) {
    console.log(`Hello, ${name}!`);
}

let result = greet("Alice");
console.log(result); // Output: undefined



Heart Function Exercise and Rant Exercise
These exercises are likely designed to practice the concepts learned so far.
Heart Function Exercise
This might involve creating a function that prints or returns a heart symbol or a related message.

  function heartMessage() {
    console.log("❤️");
}

heartMessage(); // Output: ❤️


Rant Exercise
This could involve creating a function that takes a message and repeats it multiple times, possibly with some formatting.

  function rant(message, times) {
    for (let i = 0; i < times; i++) {
        console.log(message.toUpperCase());
    }
}

rant("I love JavaScript!", 3);
// Output:
// I LOVE JAVASCRIPT!
// I LOVE JAVASCRIPT!
// I LOVE JAVASCRIPT!


Conclusion
Functions are a fundamental part of JavaScript programming, allowing for modular, reusable code. Understanding how to declare functions, handle arguments, and use the return keyword is crucial for writing effective JavaScript code. Here are the key points summarized:
Function Declaration: Using the function keyword to define a named function.
Function Expression: Defining a function as an expression and assigning it to a variable.
Arrow Function: A concise way to define functions using the => syntax.
Arguments: The values passed to a function when it is called, distinguishable from parameters.
Multiple Arguments: Handling variable numbers of arguments using the arguments object or rest parameters.
Return Keyword: Specifying the value that a function returns when it is called.
