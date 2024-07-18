const employee = [
  {
    id: 101,
    name: "abc",
  },

  {
    id: 102,
    name: "pqr",
  },

  {
    id: 103,
    name: "xyz",
  },
];

let names = employee.map(function (element) {
  return element.name;
});

console.log(names);
