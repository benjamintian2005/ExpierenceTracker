import React, { useState } from "react";

const ExperienceTracker = () => {
  const [experiences, setExperiences] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addExperience = () => {
    if (title && description) {
      setExperiences([...experiences, { title, description, date: new Date() }]);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div style={{ padding: "24px", maxWidth: "600px", margin: "auto" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>Experience Tracker</h1>
      <div style={{ marginBottom: "16px" }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "8px" }}
        />
        <textarea
          placeholder="Describe your experience"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "8px" }}
        />
        <button onClick={addExperience} style={{ padding: "8px 16px", backgroundColor: "blue", color: "white", border: "none", cursor: "pointer" }}>Add Experience</button>
      </div>
      <div>
        {experiences.map((exp, index) => (
          <div key={index} style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", marginBottom: "8px" }}>
            <h2 style={{ fontSize: "18px", fontWeight: "600" }}>{exp.title}</h2>
            <p style={{ fontSize: "14px", color: "gray" }}>{exp.date.toDateString()}</p>
            <p style={{ marginTop: "8px" }}>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTracker;
