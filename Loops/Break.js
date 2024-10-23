Using Break in Loops
The break statement is used to exit a loop prematurely.
Example: Using Break in a For Loop

let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    if (fruit === "banana") {
        break;
    }
    console.log(fruit);
}

Output : 

apple


Example: Using Break in a While Loop

let i = 0;
while (i < 5) {
    if (i === 3) {
        break;
    }
    console.log(i);
    i++;
}

Output :

0
1
2
