const stringContainer = document.querySelector('.text-container');
const clearButton = document.querySelector('.clear');
const operateButton = document.querySelector('.operate');
const displayButtons = document.querySelectorAll('.display');
let stringArray = [];
let tempBlock = 0;

clearButton.addEventListener('click', () => {
    stringContainer.textContent = "";
    stringArray = [];
    tempBlock = 0;
})

operateButton.addEventListener('click', () => {
    operate(...stringArray);
})

displayButtons.forEach((button) => { 
    button.addEventListener('click', () => {
        if (button.textContent === "+" || button.textContent === "-" || button.textContent === "*" || button.textContent === "/") {
            display(button.textContent, false, true);
        } else {
            display(Number(button.textContent));
        }
    })
})

function display(string, result=false, operator=false) {
    // executes upon events from keypad buttons 
    if (!isNaN(string) && !isNaN(stringArray[stringArray.length - 1]) && !result) {
        multiDigitUpdate(string);
    } else {
        stringArray.push(string);
        stringContainer.textContent = string;
    }

    tempBlock = (result) ? 1 : 0;

    if (stringArray.length > 3) {
        if (operator) {
            // this also executes non-sensical arrays which operate() handles
            const operator = stringArray.pop()
            operate(...stringArray); 
            stringArray.push(operator);
        }
        stringArray.splice(0, 1); 
    } 
}

function multiDigitUpdate(num) {
    if (tempBlock) {
        tempBlock = 0;
        stringArray.push(num);
        stringContainer.textContent = num;
    } else {
        const prevNum = stringArray.length - 1;
        stringArray.splice(prevNum, 1, parseInt(`${stringArray[prevNum]}${num}`));
        stringContainer.textContent = stringArray[prevNum];
    }
}

function operate(num1, operator, num2) {
    // "=" button event listener executes operate(...stringArray, true);
    switch (operator) {
        case "+": 
            display(add(num1, num2), true);
            break;
        case "-":
            display(subtract(num1, num2), true);
            break;
        case "*":
            display(multiply(num1, num2), true);
            break;
        case "/":
            display(divide(num1, num2), true);
            break;
        default:
            break;
    }
}

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
    if (b === 0) {
        alert("Stop trying to break my calculator.");
        return 0;
    }
    if (a % b !== 0) {
        return Number((a / b).toFixed(2));
    } else {
        return (a / b);
    }
}