The forEach Method
Overview
The forEach method is an iterative method that calls a provided callback function once for each element in an array, a Set, or a Map. It is particularly useful for performing operations on each element of a collection without the need for explicit looping.
Syntax
The syntax of the forEach method is as follows:

array.forEach(callbackFn, thisArg)

callbackFn: A function to be executed for each element in the array. It takes three arguments:
currentValue: The value of the current element.
index: The index of the current element.
array: The array being traversed.
thisArg: An optional value to use as this when executing callbackFn.

  Example with Arrays

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(element, index, array) {
    console.log(`Element: ${element}, Index: ${index}, Array: ${array}`);
});

OUTPUT : 

Element: 1, Index: 0, Array: 1,2,3,4,5
Element: 2, Index: 1, Array: 1,2,3,4,5
Element: 3, Index: 2, Array: 1,2,3,4,5
Element: 4, Index: 3, Array: 1,2,3,4,5
Element: 5, Index: 4, Array: 1,2,3,4,5


Example with Arrow Functions
Arrow functions can be used to make the code more concise:

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(element => console.log(element));

OUTPUT : 

1
2
3
4
5



Updating Array Elements
The forEach method can also be used to update the elements of the array:

let students = ['John', 'Sara', 'Jack'];
students.forEach(function(item, index, arr) {
    arr[index] = 'Hello ' + item;
});
console.log(students); // Output: ["Hello John", "Hello Sara", "Hello Jack"]


forEach with Sets and Maps

The forEach method can also be used with Sets and Maps.

  Sets

const set = new Set([1, 2, 3]);
set.forEach(function(value, valueAgain, set) {
    console.log(`Value: ${value}, Set: ${set}`);
});

OUTPUT : 

Value: 1, Set: Set { 1, 2, 3 }
Value: 2, Set: Set { 1, 2, 3 }
Value: 3, Set: Set { 1, 2, 3 }

