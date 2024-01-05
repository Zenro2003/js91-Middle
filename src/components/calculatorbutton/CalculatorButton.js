import React from 'react';

const CalculatorButton = ({ value, onClick }) => {
  const handleClick = () => {
    onClick(value);
  };

  return (
    <button className="calculator-button" onClick={handleClick}>
      {value}
    </button>
  );
};

export default CalculatorButton;
