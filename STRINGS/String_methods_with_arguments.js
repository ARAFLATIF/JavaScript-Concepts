1. charAt() and at()
Arguments: index
Returns the character at the specified index in the string.

  let str = "Hello";
console.log(str.charAt(0)); // "H"
console.log(str.at(0)); // "H"[1][4][5].


2. indexOf() and lastIndexOf()
Arguments:
indexOf(str): Returns the index of the first occurrence of str in the string.
lastIndexOf(str): Returns the index of the last occurrence of str in the string.

  let str = "Hello World";
console.log(str.indexOf("World")); // 6
console.log(str.lastIndexOf("World")); // 6[1][4][5].



3. slice(), substring(), and substr()
Arguments:
slice(beginIndex, endIndex): Returns a substring from beginIndex to endIndex (exclusive).
substring(beginIndex, endIndex): Similar to slice(), but does not accept negative indices.
substr(start, length): Returns a substring starting from start with the specified length.

  let str = "Mind, Power, Soul";
console.log(str.slice(6, 11)); // "Power"
console.log(str.substring(6, 11)); // "Power"
console.log(str.substr(6, 5)); // "Power"[1][4][5].



4. concat()
Arguments: One or more strings to concatenate.
Joins two or more strings together.

  let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(" ", str2)); // "Hello World"[1][4][5].



5. replace() and replaceAll()
Arguments:
replace(searchValue, replaceValue): Replaces the first occurrence of searchValue with replaceValue.
replaceAll(searchValue, replaceValue): Replaces all occurrences of searchValue with replaceValue.


  let str = "Mind, Power, Soul";
console.log(str.replace("Power", "Space")); // "Mind, Space, Soul"
console.log(str.replaceAll("Power", "Space")); // "Mind, Space, Soul" (if "Power" appears multiple times)[1][4][5].


6. toLowerCase() and toUpperCase()
Arguments: None
Converts the string to lowercase or uppercase.

  let str = "Hello World";
console.log(str.toLowerCase()); // "hello world"
console.log(str.toUpperCase()); // "HELLO WORLD"[1][4][5].


7. trim(), trimStart(), and trimEnd()
Arguments: None
Removes leading and/or trailing whitespace from the string.

 let str = "   Hello World   ";
console.log(str.trim()); // "Hello World"
console.log(str.trimStart()); // "Hello World   "
console.log(str.trimEnd()); // "   Hello World"[1][4][5].




8. split()
Arguments: separator (optional) and limit (optional)
Splits the string into an array of substrings based on the separator.


  let str = "apple,banana,kiwi";
console.log(str.split(",")); // ["apple", "banana", "kiwi"][1][4][5].




9. includes(), startsWith(), and endsWith()
Arguments:
includes(searchString): Returns true if the string contains searchString.
startsWith(searchString): Returns true if the string starts with searchString.
endsWith(searchString): Returns true if the string ends with searchString.

  let str = "Hello World";
console.log(str.includes("World")); // true
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("World")); // true[1][4][5].


10. padStart() and padEnd()
Arguments:
padStart(targetLength, padString): Pads the string with padString until it reaches targetLength from the start.
padEnd(targetLength, padString): Pads the string with padString until it reaches targetLength from the end.

  let str = "5";
console.log(str.padStart(4, "0")); // "0005"
console.log(str.padEnd(4, "0")); // "5000"[1][4][5].



Here are some examples to illustrate the usage of these methods:


let str = "Mind, Power, Soul";

// Using charAt() and at()
console.log(str.charAt(0)); // "M"
console.log(str.at(0)); // "M"

// Using indexOf() and lastIndexOf()
console.log(str.indexOf("Power")); // 6
console.log(str.lastIndexOf("Power")); // 6

// Using slice(), substring(), and substr()
console.log(str.slice(6, 11)); // "Power"
console.log(str.substring(6, 11)); // "Power"
console.log(str.substr(6, 5)); // "Power"

// Using concat()
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(" ", str2)); // "Hello World"

// Using replace() and replaceAll()
console.log(str.replace("Power", "Space")); // "Mind, Space, Soul"
console.log(str.replaceAll("Power", "Space")); // "Mind, Space, Soul" (if "Power" appears multiple times)

// Using toLowerCase() and toUpperCase()
console.log(str.toLowerCase()); // "mind, power, soul"
console.log(str.toUpperCase()); // "MIND, POWER, SOUL"

// Using trim(), trimStart(), and trimEnd()
let trimmedStr = "   Hello World   ";
console.log(trimmedStr.trim()); // "Hello World"
console.log(trimmedStr.trimStart()); // "Hello World   "
console.log(trimmedStr.trimEnd()); // "   Hello World"

// Using split()
let splitStr = "apple,banana,kiwi";
console.log(splitStr.split(",")); // ["apple", "banana", "kiwi"]

// Using includes(), startsWith(), and endsWith()
console.log(str.includes("Power")); // true
console.log(str.startsWith("Mind")); // true
console.log(str.endsWith("Soul")); // true

// Using padStart() and padEnd()
let paddedStr = "5";
console.log(paddedStr.padStart(4, "0")); // "0005"
console.log(padded
