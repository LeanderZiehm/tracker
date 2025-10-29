// App.jsx
import { useState } from "react";
import { getItems, saveItem } from "./storage";
import TrackerForm from "./TrackerForm";

export default function App() {
  const [items, setItems] = useState(getItems());
  const [showForm, setShowForm] = useState(false);

  const handleSave = (item) => {
    saveItem(item);
    setItems(getItems());
    setShowForm(false);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h1>📊 Tracker</h1>
      {showForm ? (
        <TrackerForm onSave={handleSave} />
      ) : (
        <>
          <button onClick={() => setShowForm(true)}>+ Add</button>
          <ul style={{ marginTop: "1rem", listStyle: "none", padding: 0 }}>
            {items.map((it, i) => (
              <li
                key={i}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                }}
              >
                <strong>{it.type}</strong>: {it.text}
                <div style={{ fontSize: "0.9em", color: "#555" }}>
                  Created: {new Date(it.createdAt).toLocaleString()}
                  {it.targetTime && (
                    <>
                      <br />
                      Target: {new Date(it.targetTime).toLocaleString()}
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
