import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [color, setColor] = useState("#000000"); // Default color is black

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <input type="color" value={color} onChange={handleColorChange} />
      <p>Selected Color: {color}</p>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: color,
          border: "1px solid #000",
          marginTop: "10px",
        }}
      ></div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
