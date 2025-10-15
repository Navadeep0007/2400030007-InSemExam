import React, { useState } from "react";
import "./index.css";

const AttendanceTracker = () => {
  const students = ["John", "Mary", "Alex", "Sophia", "David"];
  const [attendance, setAttendance] = useState(Array(students.length).fill(false));

  const handleCheck = (index) => {
    const updated = [...attendance];
    updated[index] = !updated[index];
    setAttendance(updated);
  };

  const presentCount = attendance.filter(Boolean).length;

  return (
    <div className="tracker-container">
      <h2>Attendance Tracker</h2>
      <ul className="student-list">
        {students.map((name, i) => (
          <li key={i}>
            <label>
              <input
                type="checkbox"
                checked={attendance[i]}
                onChange={() => handleCheck(i)}
              />
              {name}
            </label>
          </li>
        ))}
      </ul>
      <h3 className="total-present">Total Present: {presentCount}</h3>
    </div>
  );
};

export default AttendanceTracker;
