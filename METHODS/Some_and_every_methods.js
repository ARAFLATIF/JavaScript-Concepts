Some & Every Methods
Overview
The some and every methods are used to test whether at least one element or all elements in an array pass the test implemented by a provided function.
Syntax
The syntax for both methods is similar:

array.some(callback(element[, index[, array]]), thisArg)
array.every(callback(element[, index[, array]]), thisArg)

callback: A function to be executed on each element of the array. It takes three arguments:
element: The current element being processed.
index: The index of the current element (optional).
array: The array the method was called upon (optional).
thisArg: An optional object to which this can refer in the callback function.



  Some Method
The some method returns true if at least one element in the array passes the test implemented by the provided function.

  const numbers = [1, 2, 3, 4, 5];
const hasEven = numbers.some(function(number) {
    return number % 2 === 0;
});
console.log(hasEven); // Output: true



Every Method
The every method returns true if all elements in the array pass the test implemented by the provided function.

  const numbers = [2, 4, 6, 8, 10];
const allEven = numbers.every(function(number) {
    return number % 2 === 0;
});
console.log(allEven); // Output: true



Key Points
some: Returns true if at least one element passes the test.
every: Returns true if all elements pass the test.
Callback Function: The callback function is executed for each element in the array.
Optional Arguments: The callback function can take index and array as optional arguments.
thisArg: An optional value can be passed as the context for the callback function



Some/Every Exercise
Example Exercise
Here is an example exercise where you practice using the some and every methods:


const ages = [18, 20, 22, 25];
const hasAdult = ages.some(function(age) {
    return age >= 18;
});
const allAdults = ages.every(function(age) {
    return age >= 18;
});
console.log(hasAdult); // Output: true
console.log(allAdults); // Output: true

