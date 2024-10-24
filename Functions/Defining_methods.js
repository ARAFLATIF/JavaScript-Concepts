Defining Methods
What are Methods in JavaScript?
Methods in JavaScript are functions that are properties of objects. They are used to perform actions on objects and can access and modify the object's properties

EXAMPLE : 

let person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

person.greet(); // Output: Hello, my name is John and I am 30 years old.

Key Points
Methods are functions that belong to objects.
They can use the this keyword to access the object's properties5.

  Methods Exercise

EXAMPLE : 


let calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};

console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.subtract(5, 3)); // Output: 2

This exercise involves defining methods on an object to perform arithmetic operations
