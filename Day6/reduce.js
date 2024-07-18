let num = [1, 2, 3, 4, 5];

let sum = num.reduce(function (add, element) {
  return add + element;
});

console.log(sum);
