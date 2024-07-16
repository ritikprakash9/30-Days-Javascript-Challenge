//================================== Activity 1 ==================================

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

console.clear();
//================================== Activity 2 ==================================

let i = 1;
let sum = 0;
while (i <= 10) {
  sum = sum + i;
  i++;
}

console.log(`Sum of first 10 number is ${sum}`);

let num = 10;
while (num >= 1) {
  console.log(num);
  num--;
}

console.clear();

//================================== Activity 3 ==================================

let number = 1;
do {
  console.log(number);
  number++;
} while (number <= 5);

console.clear();

let fact = 1;
let counter = 1;
do {
  fact = fact * counter;
  counter++;
} while (counter <= 5);

console.log(fact);

console.clear();
//================================== Activity 4 ==================================

let n = 5;
for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log();
}

//================================== Activity 5 ==================================

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }

  console.log(i);
}
