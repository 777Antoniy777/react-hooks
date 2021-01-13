import React, {useEffect, useState} from 'react';
import './App.css';

const useLogger = (value) => {
  useEffect(() => {
    console.log(value);
  }, [value]);
};

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (evt) => {
    const target = evt.target;
    const value = target.value;

    setValue(value);
  };

  const clearValue = () => {
    setValue('');
  };

  return {
    arg: {
      value,
      onChange,
    },
    value,
    clearValue,
  };
};

function App() {
  const input = useInput('');
  const email = useInput('');

  useLogger(input.value);
  useLogger(email.value);

  const clear = () => {
    input.clearValue();
    email.clearValue();
  };

  return (
    <div className="App container pt-3">
      {/* We can use spread operator and set needle args for React element (example input here) */}
      <input type="text" {...input.arg} />
      <input type="email" {...email.arg} />

      <button className="btn btn-warning" type="reset" onClick={() => clear()}>Очистить</button>

      <h1>
        <span style={{'paddingRight': '20px',}}>{input.value}</span>
        <span>{email.value}</span>
      </h1>
    </div>
  );
}

export default App;
