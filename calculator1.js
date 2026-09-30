let number1 = document.querySelector("#number1");
let number2 = document.querySelector("#number2");

let output = document.querySelector("#output");

let addButton = document.querySelector("#add");
let subtractButton = document.querySelector("#subtract");
let multiplyButton = document.querySelector("#multiply");
let divideButton = document.querySelector("#divide");


// Addition
function add(a, b) {

    return a + b;

}


// Subtraction
function subtract(a, b) {

    return a - b;

}


// Multiplication
function multiply(a, b) {

    return a * b;

}


// Division
function divide(a, b) {

    if (b == 0) {

        return "Cannot divide by zero";

    }

    return a / b;

}


// Callback
function showResult(result) {

    output.textContent = result;

}


// Main function
function calculate(operation, callback) {

    let a = Number(number1.value);
    let b = Number(number2.value);

    let result = operation(a, b);

    callback(result);

}


// Addition button
addButton.addEventListener("click", function() {

    calculate(add, showResult);

});


// Subtraction button
subtractButton.addEventListener("click", function() {

    calculate(subtract, showResult);

});


// Multiplication button
multiplyButton.addEventListener("click", function() {

    calculate(multiply, showResult);

});


// Division button
divideButton.addEventListener("click", function() {

    calculate(divide, showResult);

});