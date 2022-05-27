/* 
create operate function that takes an operator, two numbers
and calls one of the functions on the numbers (do not allow division by 0)

create function that populates display when number buttons are hit (DOM event listener)
store display value as variable for further steps 

store first number input when a user presses an operator, save operator chosen, and call operate() function 
when equals button is pressed 

allow for stringing of operators, basically store a running total number for further operations 

round numbers with long decimals to prevent display overflow 

possibly write a clear function that resets all input variables 
*/

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b = 0) return "No. Just no.";
    return a / b;
}