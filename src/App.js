import React, {useEffect, useMemo, useState} from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  // cash the object 
  const titleStyle = useMemo(() => ({
      color: colored ? "green" : "orange",
  }), [colored]);

  const complexCalculate = (num) => {
    // some complex calculation
    let i = 0;
    while (i < 1000000000) i++;

    return num * 2;
  };

  // cash complex calculation and function wont call if we change other state values 
  const computedVal = useMemo(() => {
    return complexCalculate(number);
  }, [number]);

  // doesnt call because we use useMemo (s. 9)
  useEffect(() => {
    console.log('styles changed');
    // titleStyle is object. all objects set on links
    // became useEffect call every time when we rerender the component (prev link !== next link)
    // and if we use useMemo we see that object and its link saved and rerender doesnt happen
  }, [titleStyle]);

  return (
    <div className="App">
      <h1 style={titleStyle}>Вычисляемое свойство: {computedVal}</h1>

      <button className="btn btn-danger" type="button" onClick={() => setNumber(number - 1)}>Уменьшить</button>
      <button className="btn btn-success" type="button" onClick={() => setNumber(number + 1)}>Увеличить</button>
      <button className="btn btn-warning" type="button" onClick={() => setColored(prev => !prev)}>Изменить</button>
    </div>
  );
}

export default App;
