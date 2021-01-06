import React, {useState, useRef, useEffect} from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('initial');

  // Count rerendering of the component
  const renderCount = useRef(1);
  // Create ref on DOM element
  const inputRef = useRef(null);
  // Let you to know previous value of any state value --> useEffect + updating previous value (s. 20)
  const prevValue = useRef('');

  useEffect(() => {
    renderCount.current++;
    console.log(inputRef)
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  const focus = () => {
    return inputRef.current.focus();
  };

  return (
    <div className="App">
      <h1>Количество рендеров компонента: {renderCount.current}</h1>
      <h2>Прошлое состояние: {prevValue.current}</h2>

      <input type="text" value={value} ref={inputRef} onChange={(evt) => setValue(evt.target.value)} />

      <button className="btn btn-success" type="button" onClick={focus}>Нажать</button>
    </div>
  );
}

export default App;
