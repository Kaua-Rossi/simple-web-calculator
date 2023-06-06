var value1 = "";
var operationResult = window.document.getElementById("textResult");

operationResult.innerText = value1;

function ButtonPressed(_value) {
  value1 += String(_value);
  operationResult.innerText = value1;
}

function Erase() {
  value1 = String(value1);
  value1 = value1.substring(0, value1.length - 1);
  operationResult.innerText = value1;
}

function Result() {
  try {
    value1 = math.evaluate(value1);
    operationResult.innerText = value1;
  } catch (error) {
    operationResult.innerText = "Error";
    console.error(error);
    value1 = "";
  }
}
