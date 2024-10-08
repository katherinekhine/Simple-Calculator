const number1 = document.getElementById("num1") as HTMLButtonElement;
const number2 = document.getElementById("num2") as HTMLButtonElement;

const AddBtn = document.getElementById("Add") as HTMLButtonElement;
const SubBtn = document.getElementById("Sub") as HTMLButtonElement;
const MultBtn = document.getElementById("Mult") as HTMLButtonElement;
const DivBtn = document.getElementById("Divide") as HTMLButtonElement;

const printResult = document.getElementById("result") as HTMLButtonElement;

// For Add Button
function AddNumber() {
  let a = parseFloat(number1.value);
  let b = parseFloat(number2.value);
  let result = a + b;
  printResult.textContent = result.toString();
}
AddBtn.addEventListener("click", AddNumber);

// For Subtract Button
function SubNumber() {
  let a = parseFloat(number1.value);
  let b = parseFloat(number2.value);
  let result = a - b;
  printResult.textContent = result.toString();
}
SubBtn.addEventListener("click", SubNumber);

// For Multiply Button
function MultiplyNumber() {
  let a = parseFloat(number1.value);
  let b = parseFloat(number2.value);
  let result = a * b;
  printResult.textContent = result.toString();
}
MultBtn.addEventListener("click", MultiplyNumber);

// For Divide Button
function DivNumber() {
  let a = parseFloat(number1.value);
  let b = parseFloat(number2.value);
  if (b != 0) {
    let result = a / b;
    printResult.textContent = result.toString();
  } else {
    printResult.textContent = "Error: Division by zero is not allowed!";
  }
}
DivBtn.addEventListener("click", DivNumber);
