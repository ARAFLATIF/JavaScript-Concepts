The Mysterious Keyword 'this'
What is the 'this' Keyword?
The this keyword in JavaScript refers to the context of the current execution. 
  It can refer to the global object (in non-strict mode), the current object (in methods), or a specified object (in call, apply, or bind methods


EXAMPLE : 


let person = {
    name: "Jane",
    age: 25,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

person.greet(); // Output: Hello, my name is Jane and I am 25 years old.


Key Points
this refers to the context of the current execution.
In methods, this

