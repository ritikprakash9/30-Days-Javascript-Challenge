//================================== Activity 1 ==================================

// Task 1:

let evenOdd = (num) => {
  if (num % 2 == 0) {
    console.log(`${num} is even number`);
  } else {
    console.log(`${num} is odd number`);
  }
};

evenOdd(812);
evenOdd(413);

// Task 2:

let square = (num) => console.log(`${num}^2 = ${num * num}`);

square(5);

//================================== Activity 2 ==================================

// Task 1:

let maxOfTwo = (num1, num2) => {
  if (num1 > num2) {
    console.log(`${num1} is greater`);
  } else {
    console.log(`${num2} is greater`);
  }
};

maxOfTwo(2, 3);

console.clear();

// Task 2:

let fullName = (firstName, lastName) => firstName + " " + lastName;

console.log(fullName("Ritik", "Prakash"));

//================================== Activity 3 ==================================

// Task 1:

let sum = (num1, num2) => num1 + num2;

console.log(sum(5, 7));

// Task 2:

let value = (value, contain) => {
  return value.includes(contain);
};

console.log(value("Ritik", "R"));
console.log(value("Ritik", "P"));

console.clear();
//================================== Activity 4 ==================================

// Task 1:

function product(num1, num2 = 1) {
  return num1 * num2;
}

console.log(product(23));

let pro = (num1, num2 = 2) => num1 * num2;

console.log(pro(123));

console.clear();

// Task 2:

let greetMessage = (name, age = 18) =>
  console.log(`Hello ${name}, have a nice day`);

greetMessage("Ritik");
greetMessage("Prakash", 21);

console.clear();

//================================== Activity 5 ==================================

// Task 1:

function callBackFunction() {
  console.log("I am call back function");
}

function higherOrderFunction(fun, num) {
  console.log("I am Higher Order Function");
  for (let i = 0; i < num; i++) {
    fun();
  }
}

higherOrderFunction(callBackFunction, 5);

// Task 2:
