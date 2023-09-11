// Sort method in JS

const fruits = ['dragon fruit', 'apple', 'date', 'cherry', 'banana'];

console.log(fruits.sort());

const nums = [10, 5, 18, 1, 27];
// js try to convert in string first and then try to sort
const compareFunction = (a, b) => {
  return b - a;
  //   return a - b;/
};

console.log(nums.sort(compareFunction));

// sort them with age array
const people = [
  {
    name: 'Piyush',
    age: 30,
  },
  {
    name: 'Jinu',
    age: 20,
  },
  {
    name: 'Raj',
    age: 12,
  },
  {
    name: 'Manvik',
    age: 3,
  },
  {
    name: 'Rajesh',
    age: 25,
  },
];

const compareFunctionObject = (a, b) => {
  return a.age - b.age;
};
console.log(people.sort(compareFunctionObject));
