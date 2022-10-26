import React, { useState } from 'react';

const Counter = ({ defaultValue }) => {
  const [counter, setCounter] = useState(defaultValue);

  const handleClick = (change) => {
    setCounter((prev) => prev + change);
  };

  return (
    <div>
      <h1>Counter</h1>
      <div className="controls">
        <button onClick={() => handleClick(-1)}>-</button>
        <p>{counter}</p>
        <button onClick={() => handleClick(1)}>+</button>
      </div>
    </div>
  );
};

export default Counter;
