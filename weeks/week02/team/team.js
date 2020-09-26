function getText() {
  var text = document.getElementById('input').value;
  document.getElementById('displayContent').innerHTML = text;
}
const getNumber = (id) => {
  var number = parseFloat(document.getElementById(id).value);
  return number;
};

function sumNumber() {
  var sum = 0;
  var number = parseInt(document.getElementById('inputNum').value);
  for (var i = 0; i <= number; i++) {
    sum += i;
  }
  document.getElementById('displayNumber').innerHTML = sum;
}

function addNumber() {
  //   var number1 = parseInt(document.getElementById('inputNum1').value);
  //   var number2 = parseInt(document.getElementById('inputNum2').value);
  var number1 = getNumber('inputNum1');
  var number2 = getNumber('inputNum2');
  document.getElementById('displayTotal').innerHTML = number1 + number2;
}

const multNumber = function (number1, number2) {
  //   console.log('num1 ' + number1, ' ', 'num2 ', number2);
  document.getElementById('displayTotal').innerHTML = number1 * number2;
};
function mulNumber() {
  //   var number1 = parseFloat(document.getElementById('inputNum1').value);
  //   var number2 = parseFloat(document.getElementById('inputNum2').value);
  var number1 = getNumber('inputNum1');
  var number2 = getNumber('inputNum2');
  multNumber(number1, number2);
}
const subNumber = () => {
  //   var number1 = parseFloat(document.getElementById('inputNum1').value);
  //   var number2 = parseFloat(document.getElementById('inputNum2').value);
  var number1 = getNumber('inputNum1');
  var number2 = getNumber('inputNum2');
  document.getElementById('displayTotal').innerHTML = number1 - number2;
};
function divNumber() {
  var number1 = getNumber('inputNum1');
  var number2 = getNumber('inputNum2');

  //   var number1 = parseInt(document.getElementById('inputNum1').value);
  //   var number2 = parseInt(document.getElementById('inputNum2').value);
  document.getElementById('displayTotal').innerHTML = number1 / number2;
}
