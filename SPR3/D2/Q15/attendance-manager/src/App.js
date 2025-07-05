import React, { useState } from 'react';
import './App.css';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Alice', present: true },
    { id: 2, name: 'Bob', present: false },
    { id: 3, name: 'Charlie', present: true },
    { id: 4, name: 'Diana', present: false },
    { id: 5, name: 'Ethan', present: true },
  ]);

  const toggleAttendance = (id) => {
    const updated = students.map((student) =>
      student.id === id ? { ...student, present: !student.present } : student
    );
    setStudents(updated);
  };

  const presentCount = students.filter((student) => student.present).length;

  return (
    <div className="app">
      <h1>Attendance Manager</h1>

      <ul>
        {students.map((student) => (
          <li key={student.id} className="student-row">
            <span>{student.name}</span>
            <span>{student.present ? 'Present' : 'Absent'}</span>
            <button onClick={() => toggleAttendance(student.id)}>Toggle</button>
          </li>
        ))}
      </ul>

      <h3>Total Present: {presentCount}</h3>
    </div>
  );
}

export default App;
