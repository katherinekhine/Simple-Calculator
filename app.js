var number1 = document.getElementById("num1");
var number2 = document.getElementById("num2");
var AddBtn = document.getElementById("Add");
var SubBtn = document.getElementById("Sub");
var MultBtn = document.getElementById("Mult");
var DivBtn = document.getElementById("Divide");
var printResult = document.getElementById("result");
// For Add Button
function AddNumber() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a + b;
    printResult.textContent = result.toString();
}
AddBtn.addEventListener("click", AddNumber);
// For Subtract Button
function SubNumber() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a - b;
    printResult.textContent = result.toString();
}
SubBtn.addEventListener("click", SubNumber);
// For Multiply Button
function MultiplyNumber() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a * b;
    printResult.textContent = result.toString();
}
MultBtn.addEventListener("click", MultiplyNumber);
