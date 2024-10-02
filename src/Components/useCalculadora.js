import { useState } from 'react';

export const useCalculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForNewValue) {
      setDisplayValue(digit);
      setWaitingForNewValue(false);
    } else {
      setDisplayValue(displayValue === '0' ? digit : displayValue + digit);
    }
  };

  const clear = () => {
    setDisplayValue('0');
    setOperator(null);
    setPreviousValue(null);
    setWaitingForNewValue(false);
  };

  const handleOperation = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (previousValue == null) {
      setPreviousValue(inputValue);
    } else if (operator) {
      const currentValue = previousValue || 0;
      const newValue = performOperation(currentValue, inputValue, operator);
      setPreviousValue(newValue);
      setDisplayValue(String(newValue));
    }

    setWaitingForNewValue(true);
    setOperator(nextOperator);
  };

  const performOperation = (prev, current, operator) => {
    switch (operator) {
      case '+':
        return prev + current;
      case '-':
        return prev - current;
      case '*':
        return prev * current;
      case '/':
        return prev / current;
      default:
        return current;
    }
  };

  const equal = () => {
    handleOperation(operator);
    setOperator(null);
    setPreviousValue(null);
  };

  return {
    displayValue,
    inputDigit,
    clear,
    handleOperation,
    equal
  };
};
