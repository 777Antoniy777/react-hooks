import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [type, setType] = useState('users');
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  // combine shouldComponentUpdate + componentDidUpdate + setState
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))
    console.log('render');

    // emulation of componentWillMount
    return () => {
      console.log('componentWillMount');
    };
  }, [type]);

  // emulation of componentDidMount
  useEffect(() => {
    console.log('componentDidMount');

    window.addEventListener('mousemove', handleWindowMousemove);

    // emulation of componentWillMount
    return () => {
      window.removeEventListener('mousemove', handleWindowMousemove);
    };
  }, []);

  const handleWindowMousemove = (evt) => {
    setPos({
      x: evt.clientX,
      y: evt.clientY,
    });
  };

  return (
    <div className="App">
      <h1>Ресурс: {type}</h1>

      <button className="btn" style={{backgroundColor: "green"}} type="button" onClick={() => setType('users')}>Пользователи</button>
      <button className="btn" style={{backgroundColor: "orange"}} type="button" onClick={() => setType('todos')}>Todos</button>
      <button className="btn" style={{backgroundColor: "blue"}} type="button" onClick={() => setType('posts')}>Посты</button>

      <pre>{JSON.stringify(data)}</pre>
      <pre>{JSON.stringify(pos)}</pre>
    </div>
  );
}

export default App;
