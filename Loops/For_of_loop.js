The for...of loop is a modern JavaScript feature introduced in ECMAScript 2015 (ES6) that allows you to iterate over iterable objects such as arrays, strings, maps, sets, and even custom iterable objects.


  Syntax
The basic syntax of the for...of loop is as follows:

for (let variable of iterable) {
    // code to be executed
}

variable: The variable that takes the value of the current iteration.
iterable: The iterable object (e.g., array, string, map, set) you want to loop through.



 Example: Iterating Over an Array

let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}

Output : 

apple
banana
cherry




Example: Iterating Over a String

let str = "hello";
for (let char of str) {
    console.log(char);
}

Output : 

h
e
l
l
o




Example: Iterating Over a Set

let set = new Set([1, 2, 3, 4]);
for (let num of set) {
    console.log(num);
}

Output :

1
2
3
4



Example: Iterating Over a Map

let map = new Map([
    ["name", "John"],
    ["age", 30],
    ["city", "New York"]
]);
for (let [key, value] of map) {
    console.log(`${key}: ${value}`);
}


Output : 

name: John
age: 30
city: New York




For...Of Practice
Exercises and Examples
Here are some practice exercises to help you get familiar with the for...of loop:
Sum of Array Elements

let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let num of numbers) {
    sum += num;
}
console.log(sum); // Output: 15



Printing Object Keys and Values Using For...Of with Object.entries()
While for...of cannot directly iterate over objects, you can use Object.entries() to convert the object into an array of key-value pairs and then iterate over it.

  let person = { name: "Jane", age: 25, city: "London" };
for (let [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
}

Output : 

name: Jane
age: 25
city: London

