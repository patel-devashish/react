import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="container">
      <div className="color-slider"></div>

      <div className="color-canvas-container">
        <canvas className="color-canvas"></canvas>
        <div className="color-cursor"></div>
      </div>

      <div className="color-value-display">
        <input type="text" className="rgb-value" readOnly />
        <input type="text" className="hex-value" readOnly />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
