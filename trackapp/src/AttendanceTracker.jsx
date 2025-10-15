import React, { useState } from "react";

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
    <div style={{ maxWidth: 420, margin: "40px auto", fontFamily: "Arial, sans-serif" }}>
      <h2>Attendance Tracker</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {students.map((name, i) => (
          <li key={i} style={{ margin: "8px 0" }}>
            <label style={{ cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={attendance[i]}
                onChange={() => handleCheck(i)}
                style={{ marginRight: 8 }}
              />
              {name}
            </label>
          </li>
        ))}
      </ul>
      <h3>Total Present: {presentCount}</h3>
    </div>
  );
};

export default AttendanceTracker;
