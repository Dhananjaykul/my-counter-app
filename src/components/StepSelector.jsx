// src/components/StepSelector.jsx
import React from 'react';

const StepSelector = ({ setStep }) => {
  return (
    <div className="step-selector">
      <h3>Select Step Size:</h3>
      <button onClick={() => setStep(1)}>1</button>
      <button onClick={() => setStep(2)}>2</button>
      <button onClick={() => setStep(5)}>5</button>
    </div>
  );
};

export default StepSelector;
