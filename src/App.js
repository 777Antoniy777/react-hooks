import React, {useState} from 'react';
import './App.css';

// if you need to set the calculation of some function
// you can write it to useState like value 
// const getRandomValue = () => {
//   console.log('...calcilation');
//   return +Math.random(0, 1).toFixed(2);
// }

function App() {
  // const [counter, setCounter] = useState(() => getRandomValue());
  const [counter, setCounter] = useState(0);
  const [values, setValues] = useState({
    title: 'Счетчик',
    date: Date.now(),
  });

  const increaseValue = (evt) => {
    evt.preventDefault();

    setCounter(counter + 1);
  };

  const decreaseValue = (evt) => {
    evt.preventDefault();

    setCounter(counter - 1);
  };

  const changeTitle = (evt) => {
    evt.preventDefault();

    setValues({
      ...values,
      title: 'Новый счетчик',
    });
  }

  return (
    <div className="App">
      <h1>Счетчик: {counter}</h1>

      <button className="btn btn-danger" type="button" onClick={decreaseValue}>Уменьшить</button>
      <button className="btn btn-success" type="button" onClick={increaseValue}>Увеличить</button>

      <button className="btn btn-default" type="button" onClick={changeTitle}>Изменить заголовок</button>
      <pre>{JSON.stringify(values)}</pre>
    </div>
  );
}

export default App;
