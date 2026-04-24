// Day 5: filter() + reduce()

// Task 1: Even numbers
const nums = [1, 2, 3, 4, 5];
const even = nums.filter((n) => n % 2 === 0);
console.log(even);

// Task 2: Filter users age > 21
const users = [
  { name: "Anu", age: 20 },
  { name: "Ram", age: 25 }
];

const filteredUsers = users.filter((u) => u.age > 21);
console.log(filteredUsers);

// Task 3: Sum using reduce
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// Task 4: Total marks
const students = [
  { name: "A", marks: 40 },
  { name: "B", marks: 50 }
];

const totalMarks = students.reduce((acc, s) => acc + s.marks, 0);
console.log(totalMarks);