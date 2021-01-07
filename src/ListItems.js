import React, { useEffect, useState } from "react";

function ListItems({getItems}) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const newItems = getItems();

        setItems(newItems);
        console.log('test');
    }, [getItems]);

    return (
      <ul>
          { items.map((elem) => 
            <li key={elem}>{elem}</li>
          )}
      </ul>
    );
  }
  
  export default ListItems;