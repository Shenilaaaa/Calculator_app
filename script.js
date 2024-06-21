let display = document.getElementById('display');
let historyList = document.getElementById('history-list');

function appendNumber(num) {
    display.value += num;
}

function appendOperator(operator) {
    display.value += operator;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    let expression = display.value;
    try {
        let result = eval(expression);
        display.value = result;
        display.style.background = 'linear-gradient(to bottom right, #85FFBD, #4CAF50)'; // Green gradient for answer
        addToHistory(expression, result);
    } catch (error) {
        display.value = 'Error';
        display.style.background = 'linear-gradient(to bottom right, #FF9999, #FF3300)'; // Red gradient for error
    }
}

function addToHistory(expression, result) {
    let historyItem = document.createElement('li');
    historyItem.textContent = `${expression} = ${result}`;
    historyList.prepend(historyItem);
}
