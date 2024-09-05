import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const defaultValue = 0;

function App() {
  const [value, setValue] = useState(defaultValue);
  const handleAdd = () => {
    setValue(value+1);
  } 
  const handleReset = () => {
    setValue(defaultValue);
  }
  const handleSubstract = () => {
    setValue(value-1);
  }
  return (
    <>
    <h1> Reset </h1>
    <span> {value} </span>
    <br></br>
    <br></br>
    <button onClick={ () => handleReset()}>Reset</button>
    <h2> Restar </h2>
    <button onClick={ () => handleSubstract()}>-1</button>
    <h2> Sumar </h2>
    <button onClick={ () => handleAdd()}>+1</button>
    </>
    
  );
}

export default App;
