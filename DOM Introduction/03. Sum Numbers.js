function calc() {
    let firstNumber = document.getElementById('num1').value;
    let secondNumber = document.querySelectorAll('#num2')[0].value;
    let sum = document.querySelectorAll('#sum')[0];

    sum.value = Number(firstNumber) + Number(secondNumber);
}