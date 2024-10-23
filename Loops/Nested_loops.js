What are Nested Loops?
Nested loops involve a loop inside another loop. The inner loop runs for each iteration of the outer loop.
Example: Nested For Loops

let adj = ["red", "big", "tasty"];
let fruits = ["apple", "banana", "cherry"];
for (let x of adj) {
    for (let y of fruits) {
        console.log(x, y);
    }
}

Output :

red apple
red banana
red cherry
big apple
big banana
big cherry
tasty apple
tasty banana
tasty cherry



Real-World Analogies
Library Example: Imagine looking through each row of books in a library. The outer loop represents going through each row, and the inner loop represents looking at each book in that row.
Classroom Example: Distributing a document to every student in multiple classes. The outer loop iterates over the classes, and the inner loop iterates over the students in each class.


Printing patterns :

Nested loops can be used to print complex patterns, such as a multiplication table:


for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        process.stdout.write(`${i * j}\t`);
    }
    console.log();
}


Output :

1   2   3   4   5
2   4   6   8   10
3   6   9   12  15
4   8   12  16  20
5   10  15  20  25
