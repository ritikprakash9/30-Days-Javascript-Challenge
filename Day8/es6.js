//================================== Activity 1 ==================================

// Task 1:

let personName = "Ritik";
let personAge = 23;

console.log(`Person Name is ${personName} and person age is ${personAge}`);

// Task 2:

console.log(`This
    is a multiline
    string which
    is introduced in Javascript ES6`);

//================================== Activity 2 ==================================

// Task 3:

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [first, second] = number;

console.log(`1st = ${first} and 2nd = ${second}`);

// Task 4:

const book = {
  title: "Java Programming",
  author: "James Gosling",
};

console.log(`Titile = ${book.title} and author = ${book.author}`);

//================================== Activity 3 ==================================

// Task 5:

const car = ["BMW", "Lamborgini"];

const addCar = [...car, "Maruti Suzuki", "Alto"];

console.log(car);
console.log(addCar);

// Task 6:

const add = (...num) => {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum = sum + num[i];
  }

  return sum;
};

console.log(add(1));
console.log(add(1, 2));
console.log(add(1, 2, 3));
//================================== Activity 4 ==================================

// Task 7:

const product = (num1, num2 = 1) => num1 * num2;

console.log(product(3, 5));
console.log(product(2));

//================================== Activity 5 ==================================

// Task 8:

let id = 101;
let firstName = "Ritik";
let lastName = "Prakash";

let details = { id, firstName, lastName };

console.log(
  `Id = ${details.id}, First Name = ${details.firstName}, Last Name = ${details.lastName}`
);

// Task 9:
