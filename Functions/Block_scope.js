Block Scope
What is Block Scope?
Block scope, introduced in ES6 with the let and const keywords, allows variables to be scoped to the block they are defined in, rather than the entire function or global scope. This means variables declared inside a block (denoted by {}) cannot be accessed from outside that block

EXAMPLE : 

if (true) {
    let blockVariable = "I'm block-scoped with 'let'";
    const constantBlockVar = "I'm block-scoped with 'const'";
    console.log(blockVariable); // Accessible here
    console.log(constantBlockVar); // Accessible here
}

// blockVariable and constantBlockVar are not accessible here

Key Points
let and const provide block scope, while var does not.
Block scope helps in controlling variable visibility and lifespan, reducing potential conflicts
