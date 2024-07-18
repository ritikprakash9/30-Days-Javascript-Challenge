//================================== Activity 1 ==================================

// Task 1:

let num = [1, 2, 3, 4, 5];

console.log(num[0]);
console.log(num[1]);
console.log(num[2]);
console.log(num[3]);
console.log(num[4]);

console.clear();
// Task 2:

console.log(num[0]);
console.log(num[num.length - 1]);

console.clear();

//================================== Activity 2 ==================================

// Task 3:

num.push(6);
console.log(num);

// Task 4:
num.pop();
console.log(num);

// Task 5:

num.shift();
console.log(num);
// Task 6:

num.unshift(101);
console.log(num);

console.clear();
//================================== Activity 3 ==================================

// Task 7:

const evenNumber = [2, 4, 6, 8, 10];

const doubleOfEven = evenNumber.map(function (element) {
  return element * 2;
});

console.log(doubleOfEven);

// Task 8:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(function (element) {
  if (element % 2 == 0) {
    return element;
  }
});

console.log(evenNumbers);

console.clear();
// Task 9:

let sum = numbers.reduce(function (add, element) {
  return add + element;
});

console.log(sum);

//================================== Activity 4 ==================================

// Task 10:

let bike = ["Kawasaki", "ducatii", "dominar"];

for (let i = 0; i < bike.length; i++) {
  console.log(bike[i]);
}

// Task 11:

bike.forEach(function (element) {
  console.log(element);
});

//================================== Activity 5 ==================================

// Task 12:

// Task 13:
