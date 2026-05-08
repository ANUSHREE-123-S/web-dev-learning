import { useState } from "react";

function StudentList() {
  const [students, setStudents] = useState([
    { id: 1, name: "Anu", course: "CSE" },
    { id: 2, name: "Ravi", course: "ISE" },
    { id: 3, name: "Kiran", course: "ECE" },
  ]);

  function deleteStudent(id) {
    const updatedStudents = students.filter(
      (student) => student.id !== id
    );

    setStudents(updatedStudents);
  }

  return (
    <div>
      <h1>Student List</h1>

      <h2>Total Students: {students.length}</h2>

      {students.map((student) => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <p>{student.course}</p>

          <button onClick={() => deleteStudent(student.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default StudentList;