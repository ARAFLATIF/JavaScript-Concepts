What is a While Loop?
A while loop is another type of control flow statement that continues to execute as long as a certain condition is true.
Example: Basic While Loop

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

Output : 

0
1
2
3
4



Nested While Loops
Example: Doctor's Office Schedule
Nested while loops can be used similarly to nested for loops. Here is an example that prints available appointments in a doctor's office:

let hour = 8;
let minute = 0;
while (hour <= 9) {
    while (minute <= 59) {
        console.log(`${hour}:${minute.toString().padStart(2, '0')}`);
        minute += 30;
    }
    hour++;
    minute = 0;
}

Output :

8:00
8:30
9:00
9:30

