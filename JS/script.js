var Value1 = "";
var OperationResult = window.document.getElementById("textResult");

OperationResult.innerText = Value1;

function ButtonPressed(_Value) {
  Value1 += String(_Value);
  OperationResult.innerText = Value1;
}
function Erase() {
  Value1 = Value1.slice(0, -1);
  OperationResult.innerText = Value1;
}

function Result() {
  try {
    Value1 = math.evaluate(Value1);
    OperationResult.innerText = Value1;
  } catch (error) {
    OperationResult.innerText = "Error";
    console.error(error);
    Value1 = ""
  }
}
