// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operation) {
  switch (operation) {
    case "add":
      result = x + y;
      alert(`${x} \+ ${y} is equal to ${result} `);
      break;
    case "subtract":
      result = x - y;
      alert(`${x} \- ${y} is equal to ${result} `);
      break;
    case "multiply":
      result = x * y;
      alert(`${x} \* ${y} is equal to ${result} `);
      break;
    case "divide":
      result = x / y;
      alert(`${x} \/ ${y} is equal to ${result} `);
  }
}

// COLLECT FIRST NUMBER FROM USER
let x;
let y;
let operation;
do {
  x = Number(prompt("Enter first number: "));
  // COLLECT SECOND NUMBER FROM USER
  y = Number(prompt("Enter second number: "));
  // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER

  operation = prompt(
    "Which operation you would like to perform on numbers (add, subtract, multiply, divide)?"
  );

  if (
    operation !== "add" &&
    operation !== "subtract" &&
    operation !== "multiply" &&
    operation !== "divide"
  ) {
    alert("You entered wrong operation..");
  }
} while (
  operation !== "add" &&
  operation !== "subtract" &&
  operation !== "multiply" &&
  operation !== "divide"
);

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
calculate(x, y, operation);
//
