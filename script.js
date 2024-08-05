let firstNumber, operator, secondNumber;

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