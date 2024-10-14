// src/App.jsx
import React, { useState } from 'react';
import Counter from './components/Counter';
import StepSelector from './components/StepSelector';
import './App.css'; // Optional: for styling

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter App</h1>
      <Counter count={count} increment={increment} decrement={decrement} />
      <StepSelector setStep={setStep} />
      <h4>Current Step Size: {step}</h4>
    </div>
  );
}

export default App;
