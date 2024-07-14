//================================== Activity 1 ==================================

let num1 = 4;
let num2 = 2;

let add_result = num1 + num2;
console.log(add_result);

let sub_result = num1 - num2;
console.log(sub_result);

let mul_result = num1 * num2;
console.log(mul_result);

let div_result = num1 / num2;
console.log(div_result);

let rem_result = num1 % num2;
console.log(rem_result);

console.clear();

//================================== Activity 2 ==================================

let maxSpeed = 80;

maxSpeed += 20;
console.log(maxSpeed);

maxSpeed -= 50;
console.log(maxSpeed);

console.clear();

//================================== Activity 3 ==================================

let marks_in_maths = 85;
let marks_in_computer = 90;

console.log(marks_in_computer > marks_in_maths);
console.log(marks_in_computer < marks_in_computer);

marks_in_maths += 5;
console.log(marks_in_maths <= marks_in_computer);
console.log(marks_in_maths >= marks_in_computer);

console.clear();

let Ducatti = {
  name: "Ducatti Panigale",
  topSpeed: "299",
};

let Kawasaki = {
  name: "Kawasaki Ninja ZX-10R",
  topSpeed: "299",
};

console.log(Ducatti.topSpeed == Kawasaki.topSpeed);
console.log(Ducatti.topSpeed === Kawasaki.topSpeed);

/*
    == : only check value
    === : Check value as well as data type
*/

console.clear();
//================================== Activity 4 ==================================

2 > 3 && console.log("1. And Operator");
2 < 3 && console.log("2. And Operator");

2 > 3 || console.log("3. OR Operator");
2 < 3 || console.log("4. OR Operator");

console.log(Ducatti.topSpeed != Kawasaki.topSpeed);
console.log(Ducatti.topSpeed !== Kawasaki.topSpeed);

//================================== Activity 5 ==================================

let number = 5;
number > 0 ? console.log("Positive") : console.log("Negative");

number = -5;
number > 0 ? console.log("Positive") : console.log("Negative");
