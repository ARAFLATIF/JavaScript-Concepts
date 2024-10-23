Combining For and While Loops
You can mix for and while loops in nested constructs.

  Example: Combining For and While Loops


let numbers = [12, 5, 3];
for (let n of numbers) {
    let i = 0;
    while (i < n) {
        console.log(i);
        i += 2;
    }
}

Output : 

0
2
4
6
8
10
0
2
4
0
2

This demonstrates the flexibility of combining different loop types in nested structures.
