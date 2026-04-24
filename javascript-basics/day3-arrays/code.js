// Day 3: Arrays + map()

// Task 1 Use map() → multiply by 2
const nums = [2, 4, 6, 8];
const doubled = nums.map((n) => n * 2);
console.log(doubled);

// Task 2  vConvert numbers to strings
const numbers = [1, 2, 3];
const strings = numbers.map((n) => n.toString());
console.log(strings);

// Task 3  Use map():If marks > 40 → "Pass"  Else → "Fail"
const users = [
  { name: "Anu", marks: 50 },
  { name: "Ram", marks: 30 }
];

const result = users.map((user) =>
  user.marks > 40 ? "Pass" : "Fail"
);

console.log(result);