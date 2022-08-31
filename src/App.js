import { useState } from "react";

import "./styles.css";

export default function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      <h1>Simple Button Toggle</h1>
      <button
        style={{
          padding: "10px",
          width: 100,
          background: toggle ? "green" : "red",
          border: "none",
          color: "white"
        }}
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? "ON" : "OFF"}
      </button>
    </div>
  );
}
