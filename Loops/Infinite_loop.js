The Perils Of Infinite Loops
What is an Infinite Loop?
An infinite loop occurs when the test expression never becomes false, causing the loop to run indefinitely. This can happen if the loop variable is not updated correctly.


  Example: Infinite Loop

for (let counter = 0; counter < 5;) {
    console.log("I love ice cream!");
}

This loop will run infinitely because counter is not incremented.
