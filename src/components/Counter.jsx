// src/components/Counter.jsx
import React from 'react';

const Counter = ({ count, increment, decrement }) => {
  return (
    <div className="counter-container">
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
