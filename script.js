let firstNumber, operator, secondNumber;
let display = document.querySelector(".display");

function add(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(...numbers) {
    return numbers.reduce((total, number) => total * number, 1);
}

function divide(num1, num2) {
    return num1 / num2;
}

function changeDisplay(num) {
    display.innerText = num;
}

function clearDisplay() {
    display.innerText = "";
}

function concDisplay(num) {
    display.innerText += num;
}

let buttonContainer = document.querySelector('.buttons');
let numButtons = buttonContainer.querySelectorAll('.num');

numButtons.forEach((button) => {
    button.addEventListener('click', function () {
        concDisplay(button.innerText);
        if (operator == null) {
            firstNumber = display.innerText;
        } else {
            secondNumber = display.innerText;
        }
    });
});

let operButtons = buttonContainer.querySelectorAll('.oper');

operButtons.forEach((button) => {
    button.addEventListener('click', function() {
        clearDisplay();
        operator = button.innerText;
    });
});

let clearButton = buttonContainer.querySelector('.clear');
clearButton.addEventListener('click', clearDisplay);

let equalButton = buttonContainer.querySelector('.equal');
equalButton.addEventListener('click', function() {
    switch(operator) {
        case "*": {
            let ans = multiply(firstNumber, secondNumber);
            changeDisplay(ans);
        }
    }
    firstNumber = display.innerText;
    operator = null;
    secondNumber = null;
});