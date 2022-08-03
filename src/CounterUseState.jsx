import React, { useState } from "react";

export function CounterUseState() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter useState</h1>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}
