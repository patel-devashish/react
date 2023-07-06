import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const display = document.getElementById("value");

function handleClick1() {
  return (display.innerText = Number(display.innerText) + 1);
}

function Counter() {
  return (
    <div class="container">
      <p class="heading">Counter</p>
      <span id="value">0</span>
      <div class="button-container">
        <button class="dec" onClick={handleClick1}>
          DECREASE
        </button>
        <button class="res" onClick={(display.innerText = 0)}>
          RESET
        </button>
        <button
          class="inc"
          onClick={(display.innerText = Number(display.innerText) + 1)}
        >
          INCREASE
        </button>
      </div>
    </div>
  );
}

root.render(<Counter />);
