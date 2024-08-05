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
let buttons = buttonContainer.querySelectorAll('.numButton');

buttons.forEach((button) => {
    button.addEventListener('click', function () {
        concDisplay(button.innerText);
    });
});
