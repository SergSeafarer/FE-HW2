const firstNumber = prompt('Please, enter first number');
const secondNumber = prompt('Please, enter second number');
const sum = Number(firstNumber) + Number(secondNumber);
const sub = firstNumber - secondNumber;
const mult = firstNumber * secondNumber;
const div = firstNumber / secondNumber; 
alert(firstNumber + '+' + secondNumber + '=' + sum);
alert(firstNumber + '-' + secondNumber + '=' + sub);
alert(firstNumber + '*' + secondNumber + '=' + mult);
alert(firstNumber + '/' + secondNumber + '=' + div);