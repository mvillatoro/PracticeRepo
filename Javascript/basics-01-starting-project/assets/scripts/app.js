const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// comments!

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBefore, calnNumber) {
  const calcDdescription = `${resultBefore} ${operator} ${calnNumber}`;
  outputResult(currentResult, calcDdescription);
}

function writeToLog(
  operationIdendifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdendifier,
    prvResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculate(calculationType) {
  if (
    (calculationType !== "Add" &&
      calculationType !== "Sub" &&
      calculationType !== "Mult" &&
      calculationType !== "Div") ||
    !enteredNumber
  ) {
    return;
  }

  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;

  if (calculationType === "Add") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "Sub") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "Mult") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "Div") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  } else {
    writeToLog("no pos guau...");
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculate("Add");
}

function subtract() {
  calculate("Sub");
}

function multiply() {
  calculate("Mult");
}

function divide() {
  calculate("Div");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
