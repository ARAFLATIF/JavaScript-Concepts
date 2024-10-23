Using For Loops with Arrays
In JavaScript, for loops are commonly used to iterate over arrays.
Example: Iterating Over an Array

let fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

Output :

apple
banana
cherry



Using For...Of Loops with Arrays
JavaScript also provides the for...of loop for iterating over iterable objects like arrays.
Example: Using For...Of Loop

let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}


Output :

apple
banana
cherry



Iterating Arrays Exercise
Example: Summing Array Elements

let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let number of numbers) {
    sum += number;
}
console.log(sum); // Output: 15

