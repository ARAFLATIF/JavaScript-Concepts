Using Const with Arrays
Declaring an array with const does not make the array immutable; it only prevents reassignment of the variable.

  const colors = ["red", "green", "blue"];
colors.push("yellow");
console.log(colors); // ["red", "green", "blue", "yellow"]

