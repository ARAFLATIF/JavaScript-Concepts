Overview
The reduce method is us ed to apply a function to each element in the array (from left to right) so as to reduce it to a single output value. It is often used for aggregating data.
Syntax
The syntax of the reduce method is as follows:

array.reduce(callback(accumulator, currentValue[, index[, array]]), initialValue)

callback: A function to be executed on each element of the array. It takes four arguments:
accumulator: The accumulated value from the previous call.
currentValue: The current element being processed.
index: The index of the current element (optional).
array: The array reduce was called upon (optional).
initialValue: An optional initial value for the accumulator.


  EXAMPLE : 

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum); // Output: 15

Key Points
Accumulator: The accumulated value from the previous call.
Callback Function: The callback function is executed for each element in the array.
Optional Arguments: The callback function can take index and array as optional arguments.
Initial Value: An optional initial value for the accumulator.
Single Output: Reduces the array to a single output value
