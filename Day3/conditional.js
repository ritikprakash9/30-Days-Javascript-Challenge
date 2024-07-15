//================================== Activity 1 ==================================
let number = 0;

if (number < 0) {
  console.log("Number is Negative");
} else if (number > 0) {
  console.log("Number is Positive");
} else {
  console.log("Number is zero");
}

console.clear();

//================================== Activity 2 ==================================

let age = 2;
if (age <= 0) {
  console.log("Please enter a valid age");
} else if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

console.clear();

//================================== Activity 3 ==================================

let num1 = 200;
let num2 = 35;
let num3 = 5;

if (num1 > num2) {
  if (num1 > num3) {
    console.log("Number 1 is Greater");
  } else {
    console.log("Number 3 is Greater");
  }
} else {
  if (num2 > num3) {
    console.log("Number 2 is greater");
  } else {
    console.log("Number 3 is greater");
  }
}
