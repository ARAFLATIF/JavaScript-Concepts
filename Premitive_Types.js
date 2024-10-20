In JavaScript, primitive types are the basic building blocks of data and are immutable by nature.
Here’s a detailed explanation of each primitive type, 
including the two additional types introduced in later versions of JavaScript: Symbol and BigInt.



Number
The Number type represents numeric values. Here are some examples:


// Integer
let integer = 42;
console.log(typeof integer); // "number"

// Floating-point number
let float = 3.14;
console.log(typeof float); // "number"

// Special values
let infinity = Infinity;
console.log(typeof infinity); // "number"
let negativeInfinity = -Infinity;
console.log(typeof negativeInfinity); // "number"
let notANumber = NaN; // Not a Number
console.log(typeof notANumber); // "number"


String
The String type represents sequences of characters. Here are some examples:

// Single quotes
let singleQuoteString = 'Hello, World!';
console.log(typeof singleQuoteString); // "string"

// Double quotes
let doubleQuoteString = "Hello, World!";
console.log(typeof doubleQuoteString); // "string"

// Template literals (backticks)
let templateLiteral = `Hello, World!`;
console.log(typeof templateLiteral); // "string"



Boolean
The Boolean type represents a logical value that can be either true or false. Here are some examples:




let trueValue = true;
console.log(typeof trueValue); // "boolean"

let falseValue = false;
console.log(typeof falseValue); // "boolean"



Null
The Null type has only one value, which is null. Here is an example:


let nullValue = null;
console.log(typeof nullValue); // "object" (note: this is a historical anomaly)
