1. charAt() and at()
Returns the character at the specified index.

  let str = "Hello";
console.log(str.charAt(0)); // "H"
console.log(str.at(0)); // "H"[4][5].


2. indexOf() and lastIndexOf()
indexOf() returns the index of the first occurrence of a specified substring.
lastIndexOf() returns the index of the last occurrence of a specified substring.

  let str = "Hello World";
console.log(str.indexOf("World")); // 6
console.log(str.lastIndexOf("World")); // 6[1][6].


3. toLowerCase() and toUpperCase()
toLowerCase() converts the string to lowercase.
toUpperCase() converts the string to uppercase.

  let str = "Hello World";
console.log(str.toLowerCase()); // "hello world"
console.log(str.toUpperCase()); // "HELLO WORLD"[2][4].


4. slice(), substring(), and substr()
slice(start, end) extracts a part of the string from the start index to the end index (exclusive).
substring(start, end) is similar to slice(), but it does not accept negative indices.
substr(start, length) extracts a part of the string starting from the specified index and with the specified length.


  let str = "Apple, Banana, Kiwi";
console.log(str.slice(7, 13)); // "Banana"
console.log(str.substring(7, 13)); // "Banana"
console.log(str.substr(7, 6)); // "Banana"[4][5].


5. concat()
Joins two or more strings.

let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(" ", str2)); // "Hello World"[4].



let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(" ", str2)); // "Hello World"[4].

let str = "   Hello World   ";
console.log(str.trim()); // "Hello World"
console.log(str.trimStart()); // "Hello World   "
console.log(str.trimEnd()); // "   Hello World"[4].


. split()
Splits a string into an array of substrings based on a specified separator.

 let str = "apple,banana,kiwi";
console.log(str.split(",")); // ["apple", "banana", "kiwi"][4].



8. replace() and replaceAll()
replace() replaces the first occurrence of a specified value with another value.
replaceAll() replaces all occurrences of a specified value with another value.

  let str = "Hello World, World!";
console.log(str.replace("World", "Universe")); // "Hello Universe, World!"
console.log(str.replaceAll("World", "Universe")); // "Hello Universe, Universe!"[3].



9. includes(), startsWith(), and endsWith()
includes() checks if the string contains a specified value.
startsWith() checks if the string starts with a specified value.
endsWith() checks if the string ends with a specified value.

let str = "Hello World";
console.log(str.includes("World")); // true
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("World")); // true[4].



10. padStart() and padEnd()
padStart() pads the string with another string until it reaches the specified length from the start.
padEnd() pads the string with another string until it reaches the specified length from the end.


  let str = "5";
console.log(str.padStart(4, "0")); // "0005"
console.log(str.padEnd(4, "0")); // "5000"[4].
