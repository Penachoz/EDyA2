import React from 'react';
import { useCalculator } from './useCalculadora';

import "./CalcStyles.css";
const Calculator = () => {
  const {
    displayValue,
    inputDigit,
    clear,
    handleOperation,
    equal
  } = useCalculator();

  return (
    <div className="Calcu">
      <h3 className="display">{displayValue}</h3> 
      <span className="expression"></span>

      <section className="panel">
        <section className="numbers">
          <button onClick={() => inputDigit('7')}>7</button>
          <button onClick={() => inputDigit('8')}>8</button>
          <button onClick={() => inputDigit('9')}>9</button>

          <button onClick={() => inputDigit('4')}>4</button>
          <button onClick={() => inputDigit('5')}>5</button>
          <button onClick={() => inputDigit('6')}>6</button>

          <button onClick={() => inputDigit('1')}>1</button>
          <button onClick={() => inputDigit('2')}>2</button>
          <button onClick={() => inputDigit('3')}>3</button>

          <button onClick={() => inputDigit('0')} className="zero">
          0
        </button>
        </section>

        <section className="operators">
          <button onClick={() => handleOperation('/')}>÷</button>
          <button onClick={() => handleOperation('*')}>x</button>
          <button onClick={() => handleOperation('-')}>-</button>
          <button onClick={() => handleOperation('+')}>+</button>
          <button onClick={equal}>=</button>
          <button onClick={() => clear()}>AC</button>
        </section>
      </section>
    </div>
  );
};

export default Calculator;
