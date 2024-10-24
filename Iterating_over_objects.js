Iterating over objects in JavaScript can be a bit more complex than iterating over arrays or other iterable objects because objects are not inherently iterable. Here are several methods to iterate over objects:
Using For...In Loop
The for...in loop is a traditional way to iterate over the properties of an object, including those inherited from the prototype chain.


  SYNTAX :

for (let prop in obj) {
    // code to be executed
}

EXAMPLE : 

let person = { name: "John", age: 30, city: "New York" };
for (let prop in person) {
    console.log(`${prop}: ${person[prop]}`);
}

OUTPUT : 

name: John
age: 30
city: New York

However, to avoid iterating over inherited properties, you should use the hasOwnProperty method:

for (let prop in person) {
    if (person.hasOwnProperty(prop)) {
        console.log(`${prop}: ${person[prop]}`);
    }
}





Using Object.keys()
The Object.keys() method returns an array of the object's own enumerable property names.
Syntax

let keys = Object.keys(obj);
for (let key of keys) {
    // code to be executed
}

EXAMPLE : 

let person = { name: "Jane", age: 25, city: "London" };
let keys = Object.keys(person);
for (let key of keys) {
    console.log(`${key}: ${person[key]}`);
}

OUTPUT : 

name: Jane
age: 25
city: London

You can also use forEach to iterate over the keys:

Object.keys(person).forEach(key => {
    console.log(`${key}: ${person[key]}`);
});



Using Object.values()
The Object.values() method returns an array of the object's own enumerable property values.
Syntax

let values = Object.values(obj);
for (let value of values) {
    // code to be executed
}

EXAMPLE : 

let person = { name: "John", age: 30, city: "New York" };
let values = Object.values(person);
for (let value of values) {
    console.log(value);
}


OUTPUT : 

John
30
New York


You can also use forEach to iterate over the values:

Object.values(person).forEach(value => {
    console.log(value);
});





Using Object.entries()
The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
Syntax

let entries = Object.entries(obj);
for (let [key, value] of entries) {
    // code to be executed
}

EXAMPLE : 

let person = { name: "Jane", age: 25, city: "London" };
let entries = Object.entries(person);
for (let [key, value] of entries) {
    console.log(`${key}: ${value}`);
}

OUTPUT : 

name: Jane
age: 25
city: London

You can also use forEach to iterate over the entries:

Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});



Conclusion
Iterating over objects in JavaScript can be achieved through various methods, each with its own advantages. 
  The for...of loop, while not directly applicable to objects, can be used in conjunction with methods like Object.entries() to iterate over key-value pairs. 
  Understanding these methods is crucial for effective JavaScript programming, especially when working with complex data structures.
