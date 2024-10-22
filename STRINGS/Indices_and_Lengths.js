Indices
Zero-Based Indexing: In JavaScript, strings are indexed starting from 0. 
  This means the first character of a string is at index 0, and the last character is at string.length - 1

let str = "Hello";
console.log(str[0]); // "H"
console.log(str[str.length - 1]); // "o"



Accessing Characters
You can access individual characters using square bracket notation or the charAt() method.
Square Bracket Notation:

let str = "Hello";
console.log(str[0]); // "H"

charAt() Method:

let str = "Hello";
console.log(str.charAt(0)); // "H"
```[2][6].

Length
The length property returns the number of characters in a string.

let str = "Hello";
console.log(str.length); // 5
```[2][5].


  Key Points
Case Sensitivity: When searching for substrings using methods like indexOf(), the search is case-sensitive134.
Empty Strings: If the search value is an empty string, indexOf() returns 0 because an empty string is considered to be found at the beginning of the string4.
Out of Range Indices: If the index is out of the range of the string (less than 0 or greater than or equal to the length of the string), methods like charAt() return an empty string


EXAMPLE : 

let str = "Hello World";

// Accessing characters
console.log(str[0]); // "H"
console.log(str.charAt(0)); // "H"

// Length of the string
console.log(str.length); // 11

// Finding the index of a substring
console.log(str.indexOf("World")); // 6

[more explanation : Explanation:
The indexOf() method is used to find the index of the first occurrence of a specified substring within a string.
In this case, the substring is "World".
The method returns the 0-based index of the first character of the substring. Here, "World" starts at the 6th index of the string "Hello World".
Therefore, console.log(str.indexOf("World")) outputs 6. ]

// Searching with case sensitivity
console.log(str.indexOf("world")); // -1

[more explanation : Explanation:
The indexOf() method is case-sensitive, meaning it treats uppercase and lowercase letters as distinct characters.
In this example, the substring "world" (all lowercase) is searched within the string "Hello World" (where "World" is capitalized).
Since the case does not match, the method does not find the substring and returns -1, indicating that the specified value was not found.
Therefore, console.log(str.indexOf("world")) outputs -1.]
