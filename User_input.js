Using the prompt() Function
The prompt() function is the simplest way to get user input. It displays a pop-up dialog box with a message, an input field, and two buttons: "OK" and "Cancel."


let userName = prompt("Please enter your name:");
if (userName!== null) {
    console.log("Hello, " + userName + "!");
}

If the user clicks "OK," the function returns the input value as a string.
If the user clicks "Cancel" or closes the dialog box, the function returns null
