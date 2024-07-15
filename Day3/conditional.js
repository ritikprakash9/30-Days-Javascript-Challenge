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

let age = 2;
if (age <= 0) {
  console.log("Please enter a valid age");
} else if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

console.clear();

//================================== Activity 2 ==================================

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

console.clear();
//================================== Activity 3 ==================================

let days = 4;

switch (days) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Thrusday");
    break;

  case 5:
    console.log("Firday");
    break;

  case 6:
    console.log("Saturday");
    break;

  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("Please Enter a Valid Date");
}

let score = 29;

if (score < 0 && score > 100) {
  console.log("Invalid Marks");
}

switch (score / 10) {
  case 10:
  case 9:
    console.log("A Grade");
    break;

  case 8:
    console.log("B Grade");
    break;

  case 7:
    console.log("C Grade");
    break;

  case 6:
    console.log("C Grade");
    break;

  case 5:
    console.log("D Grade");
    break;

  case 4:
    console.log("E Grade");
    break;

  default:
    console.log("F Grade");
}

console.clear();
//================================== Activity 4 ==================================

let num = 5;

num > 0 ? console.log("Number is Positive") : console.log("Number is Negative");

console.clear();

//================================== Activity 5 ==================================

let year = 2003;

if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
  console.log("Year is leap year");
} else {
  console.log("Year is not a leap year");
}
