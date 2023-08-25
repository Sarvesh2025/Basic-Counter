import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handleDecrement = (props) => {
    setCount(count - 1);
  };
  const handleIncrement = (props) => {
    setCount(count + 1);
  }
  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </>
  );
}

export default App;
