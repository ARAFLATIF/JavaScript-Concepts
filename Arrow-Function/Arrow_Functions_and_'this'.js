Overview
Arrow functions have a different behavior regarding the this keyword compared to traditional functions. In arrow functions, this is lexically bound and cannot be changed.
Syntax
The syntax of an arrow function is as follows:

const myFunction = (params) => { body };

EXAMPLE : 

const obj = {
    name: "John",
    greet: () => {
        console.log(`Hello, my name is ${this.name}`); // 'this' will refer to the global object or undefined in strict mode
    }
};
obj.greet(); // Output: Hello, my name is undefined

Traditional Function Comparison
In contrast, traditional functions bind this dynamically:

const obj = {
    name: "John",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`); // 'this' will refer to the object
