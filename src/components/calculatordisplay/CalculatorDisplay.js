import React from 'react';

const CalculatorDisplay = ({ calculation, result }) => {
  return (
    <div className="calculator-display">
      <div className="calculation">{calculation}</div>
      <div className="result">{result}</div>
    </div>
  );
};

export default CalculatorDisplay;
