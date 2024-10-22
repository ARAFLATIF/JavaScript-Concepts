Basic Arithmetic Operations
JavaScript supports standard arithmetic operators:
+ (addition)
- (subtraction)
* (multiplication)
/ (division)
% (modulus)
** (exponentiation)



let sum = 10 + 5; // 15
let difference = 10 - 5; // 5
let product = 10 * 5; // 50
let quotient = 10 / 5; // 2
let modulus = 10 % 5; // 0
let exponent = 10 ** 2; // 100




Number Methods
Here are some common methods used on numbers:
toString()
Converts a number to a string.

  Number Methods
Here are some common methods used on numbers:
toString()
Converts a number to a string.


  toExponential()
Returns a string representing the number in exponential notation.

  let num = 123;
console.log(num.toExponential()); // "1.23e+2"



toFixed()
Returns a string representing the number with a specified number of decimals.

  let num = 123.456;
console.log(num.toFixed(2)); // "123.46"



toPrecision()
Returns a string representing the number with a specified length.

  let num = 123.456;
console.log(num.toPrecision(4)); // "123.5"



valueOf()
Returns the primitive value of a number. 
  This method is used internally by JavaScript and is not typically needed in user code.

  let num = 123;
console.log(num.valueOf()); // 123



Converting Variables to Numbers
JavaScript provides several global methods to convert variables to numbers:
Number()
Converts a value to a number. If the value cannot be converted, it returns NaN.


  let boolToNum = Number(true); // 1
let strToNum = Number("10"); // 10
let dateToNum = Number(new Date("1970-01-01")); // 0 (milliseconds since January 1, 1970)



parseInt()
Parses a string and returns a whole number.

  let strToWholeNum = parseInt("10.33"); // 10
let strToWholeNumWithSpaces = parseInt("10 20 30"); // 10


parseFloat()
Parses a string and returns a floating-point number.

  let strToFloat = parseFloat("10.33"); // 10.33



Special Values and Constants
NaN (Not a Number): Returned when a mathematical operation cannot produce a meaningful numeric result.


  let result = 4 - "hello"; // NaN
console.log(typeof result); // "number"
console.log(Number.isNaN(result)); // true



Infinity and -Infinity: Represent positive and negative infinity.

  let posInf = Infinity; // Infinity
let negInf = -Infinity; // -Infinity



Number Constants: Such as MAX_VALUE, MIN_VALUE, MAX_SAFE_INTEGER, MIN_SAFE_INTEGER, and EPSILON.


  console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.EPSILON); // 2.220446049250313e-16





BigInt
BigInt is a newer data type introduced to handle integers of arbitrary length, which can be larger than the maximum safe integer.
Creating BigInt
Append n to the end of an integer.
Use the BigInt() function.

  let bigIntLiteral = 1234567890123456789012345n;
let bigIntFromNumber = BigInt(1234567890123456789012345);



BigInt Operations
BigInt supports most arithmetic operations, but mixing BigInt with Number throws an error.

  let bigIntSum = 100000000000000000000n + 2n; // 100000000000000000002n
try {
    let mixedSum = 100000000000000000000n + 2;
    console.log(mixedSum);
} catch (error) {
    console.log(error); // TypeError: Cannot mix BigInt and other types, use explicit conversion.
}


Type Conversion and Coercion
Boolean to Number: true becomes 1, false becomes 0.

let boolToNum = true + 10; // 11
let boolToNum2 = false + 10; // 10




Null to Number: null becomes 0.

let nullToNum = null + 5; // 5



String to Number: Strings are converted to numbers in arithmetic operations.

  let strToNum = "10" / "2"; // 5



Undefined to Number: undefined becomes NaN.

  let undefinedToNum = undefined + 10; // NaN
