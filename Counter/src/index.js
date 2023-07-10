import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

let v = 0;

function handleClick1() {
  console.log((v = v - 1));
}

function handleClick2() {
  console.log((v = 0));
}

function handleClick3() {
  console.log((v = v + 1));
}

function Counter() {
  return (
    <div class="container">
      <p class="heading">Counter</p>
      <span id="value">{v}</span>
      <div class="button-container">
        <button class="dec" onClick={handleClick1}>
          DECREASE
        </button>
        <button class="res" onClick={handleClick2}>
          RESET
        </button>
        <button class="inc" onClick={handleClick3}>
          INCREASE
        </button>
      </div>
    </div>
  );
}

root.render(<Counter />);
