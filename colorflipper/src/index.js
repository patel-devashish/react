import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const colorsArr = [
  "#FF0000",
  "#FFFFFF",
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

function Colorflipper() {
  return (
    <div>
      <h2>
        Background color: <span>#ffffff</span>
      </h2>
      <button>CLICK ME !</button>
    </div>
  );
}
root.render(<Colorflipper />);
