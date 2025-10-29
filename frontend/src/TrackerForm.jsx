// TrackerForm.jsx
import { useState } from "react";

export default function TrackerForm({ onSave }) {
  const [type, setType] = useState("");
  const [text, setText] = useState("");
  const [targetTime, setTargetTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!type.trim() || !text.trim()) return;
    onSave({
      type,
      text,
      targetTime: targetTime || null,
      createdAt: new Date().toISOString(),
    });
    setType("");
    setText("");
    setTargetTime("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginTop: "1rem",
      }}
    >
      <input
        placeholder="Type (e.g. Task, Habit, Idea)"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <input
        placeholder="Description"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <label>
        Target Time:
        <input
          type="datetime-local"
          value={targetTime}
          onChange={(e) => setTargetTime(e.target.value)}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
}
