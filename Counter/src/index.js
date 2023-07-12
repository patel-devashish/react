import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {
  const [index, setIndex] = useState(0);

  function handleClick1() {
    setIndex(index - 1);
  }

  function handleClick2() {
    setIndex(0);
  }

  function handleClick3() {
    setIndex(index + 1);
  }
  return (
    <div class="container">
      <p class="heading">Counter</p>
      <span id="value">{index}</span>
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
