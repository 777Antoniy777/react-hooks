import React, {useCallback, useState} from "react";
import "./App.css";
import ListItems from "./ListItems";

function App() {
  const [count, setCount] = useState(1);
  const [colored, setColored] = useState(false);

  const titleStyle = {
    color: colored ? "green" : "orange",
  };

  // useCallback uses for cashing all function 
  // which set like callback in child component through props
  // it prevents often rerender, because value will be saved and it s not a object link
  const generateItemsFromApi = useCallback(() => {
    return new Array(count).fill('').map((_, i) => `Елемент ${i + 1}`);
  }, [count]);

  // show all function
  console.log(generateItemsFromApi);

  return (
    <div className="App">
      <h1 style={titleStyle}>Количество элементов: {count}</h1>

      <button className="btn btn-success" type="button" onClick={() => setCount(count + 1)}>Увеличить</button>
      <button className="btn btn-warning" type="button" onClick={() => setColored(prev => !prev)}>Изменить</button>

      {/* useMemo working in presents component, not in child! */}
      {/* but if you caching primitive value you can use it too */}
      <ListItems getItems={generateItemsFromApi} />
    </div>
  );
}

export default App;
