//STEP 1
function halfNumber(number) {
  let result = number / 2;
  console.log(`Half of ${number} is ${result}`);
}
halfNumber(5);
//STEP 2
function squareNumber(number) {
  let result = number * number;
  console.log(`The result of squaring the number ${number} is ${result}`);
}
squareNumber(3);

//STEP 3
function percentOf(num1, num2) {
  let percent = (num1 / num2) * 100;
  console.log(`${num1} is ${percent}\% of ${num2}`);
}
percentOf(2, 4);

//STEP 4
function findModulus(num1, num2) {
  if (num2 > num1) {
    let modulus = num2 % num1;
    console.log(`${modulus} is the modulus of ${num1} and ${num2}`);
  } else if (num1 > num2) {
    let modulus = num1 % num2;
    console.log(`${modulus} is the modulus of ${num2} and ${num1}`);
  }
}
findModulus(4, 10);
//STEP 5
