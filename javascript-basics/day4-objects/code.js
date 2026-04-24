// Day 4: Objects + Destructuring + Spread

// Task 1
const user = { name: "Anu", marks: 45 };
console.log(user.name);

// Task 2 (Destructuring)
const { name, marks } = user;
console.log(name, marks);

// Task 3 (Spread - update)
const updatedUser = { ...user, marks: 50 };
console.log(updatedUser);

// Task 4 (Reference vs Copy)
const u1 = { name: "Anu" };
const u2 = u1;

u2.name = "Ram";
console.log(u1.name); // check output