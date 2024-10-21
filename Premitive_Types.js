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




Undefined
The Undefined type has only one value, which is undefined. Here is an example:

let undefinedValue = undefined;
console.log(typeof undefinedValue); // "undefined"



Symbol
The Symbol type, introduced in ECMAScript 2015 (ES6),
  represents a unique and immutable primitive value that may be used as the key of an Object property. 
  Here are some examples:

// Creating a Symbol
let mySymbol = Symbol('mySymbol');
console.log(typeof mySymbol); // "symbol"

// Symbols are unique
let anotherSymbol = Symbol('mySymbol');
console.log(mySymbol === anotherSymbol); // false

// Using Symbol as a property key
let obj = {};
obj[mySymbol] = 'value';
console.log(obj[mySymbol]); // "value"




BigInt
The BigInt type, also introduced in later versions of JavaScript, 
  represents integers with arbitrary magnitude. Here are some examples:

// Creating a BigInt using the 'n' suffix
let bigIntLiteral = 1234567890123456789012345678901234567890n;
console.log(typeof bigIntLiteral); // "bigint"

// Creating a BigInt using the BigInt() function
let bigIntFromNumber = BigInt(123);
console.log(typeof bigIntFromNumber); // "bigint"

// Creating a BigInt from a string
let bigIntFromString = BigInt("1234567890123456789012345678901234567890");
console.log(typeof bigIntFromString); // "bigint"

// Arithmetic operations with BigInt
let sum = 100000000000000000000n + 2n;
console.log(sum); // 100000000000000000002n

// Mixing BigInt and Number throws an error
try {
    let mixedSum = 100000000000000000000n + 2;
    console.log(mixedSum);
} catch (error) {
    console.log(error); // TypeError: Cannot mix BigInt and other types, use explicit conversion.
}





Key Points
Number: Represents numeric values, including integers, floating-point numbers, and special values like Infinity and NaN.
String: Represents sequences of characters, enclosed in single quotes, double quotes, or backticks.
Boolean: Represents logical values true or false.
Null: Has only one value, null, which is often used to indicate the absence of any object value.
Undefined: Has only one value, undefined, which indicates that a variable has not been assigned a value.
Symbol: Represents unique and immutable primitive values, often used as property keys in objects.
BigInt: Represents integers with arbitrary magnitude, useful for operations involving very large integers.
