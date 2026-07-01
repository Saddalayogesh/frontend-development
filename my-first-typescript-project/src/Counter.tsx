import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(10);

  const incLogics = (): void => {
    setCount((prev) => prev + 1);
  };

  const decLogics = (): void => {
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <h1>Counter Value: {count}</h1>
      <button onClick={incLogics}>Increment</button>
      <button onClick={decLogics} disabled={count === 0}>
        Decrement
      </button>
    </>
  );
};

export default Counter;