import { useState } from "react";

function FormsPractice() {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name === "" || age === "" || course === "") {
      alert("Please fill all fields");
    } else {
      alert("Form submitted");

      console.log(name);
      console.log(age);
      console.log(course);
    }
  }

  return (
    <div>

      <h1>Student Form</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="number"
          placeholder="Enter age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Enter course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Submit
        </button>

      </form>

      <h2>Hello {name}</h2>

      <h3>Age: {age}</h3>

      <h3>Course: {course}</h3>

    </div>
  );
}

export default FormsPractice;