import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const colorsArr = [
  "#FFFFFF",
  "#FF0000",
  "#00FFFF",
  "#C0C0C0",
  "#0000FF",
  "#808080",
  "#00008B",
  "#000000",
  "#ADD8E6",
  "#FFA500",
  "#800080",
  "#A52A2A",
  "#FFFF00",
  "#800000",
  "#00FF00",
  "#008000",
  "#FF00FF",
  "#808000",
  "#FFC0CB",
  "#7FFFD4",
];

function randNumGenrator() {
  return Math.floor(Math.random() * colorsArr.length);
}

function Colorflipper() {
  const [color, setColor] = useState("#FFFFFF");
  function changeColor() {
    setColor(colorsArr[randNumGenrator()]);
  }

  return (
    <div style={{ backgroundColor: color }}>
      <h2>
        Background color: <span>{String(color)}</span>
      </h2>
      <button onClick={changeColor}>CLICK ME !</button>
    </div>
  );
}
root.render(<Colorflipper />);
