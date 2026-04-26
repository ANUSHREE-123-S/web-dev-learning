// Day 6: async + fetch

// Fetch users and print names
async function getUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    // print only names
    const names = data.map((user) => user.name);
    console.log(names);

  } catch (error) {
    console.log("Error:", error);
  }
}

getUsers();