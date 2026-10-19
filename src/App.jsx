import React, { useState } from "react";
import ProductList from "./components/ProductList.jsx";

export default function App() {
  const [name, setName] = useState("");

  return (
    <div style={{ maxWidth: "550px", margin: "40px auto", fontFamily: "sans-serif", padding: "20px" }}>
      <h1>React Product Dashboard</h1>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="nameInput" style={{ display: "block", marginBottom: "6px" }}>
          Enter your name:
        </label>
        <input
          id="nameInput"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type name here..."
          style={{ padding: "8px", width: "100%", boxSizing: "border-box", borderRadius: "4px", border: "1px solid #ccc" }}
        />
      </div>

      <p style={{ fontSize: "1.1rem" }}>
        Hello, {name ? name : "Guest"}!
      </p>
    </div>
  );
}
