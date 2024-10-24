The map Method
Overview
The map method creates a new array populated with the results of calling a provided function on every element in the calling array.
Syntax
The syntax of the map method is as follows:

array.map(callbackFn, thisArg)


callbackFn: A function to be executed for each element in the array. It takes three arguments:
currentValue: The value of the current element.
index: The index of the current element (optional).
array: The array being traversed (optional).
thisArg: An optional value to use as this when executing callbackFn

EXAMPLE : 

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(function(number) {
    return number * 2;
});
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]



Map Practice
Example Exercise
Here is an example exercise where you practice using the map method:

const names = ["John", "Alice", "Bob"];
const upperCaseNames = names.map(function(name) {
    return name.toUpperCase();
});
console.log(upperCaseNames); // Output: ["JOHN", "ALICE", "BOB"]

