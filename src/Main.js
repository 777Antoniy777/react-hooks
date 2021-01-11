import React from 'react';
import {useAlert} from "./alert/AlertContext";

function Main() {
  const {toggleAlert} = useAlert();

  return (
    <>
        <h1>Добрый день!</h1>

        <button className="btn btn-success" type="button" onClick={toggleAlert}>Показать alert</button>
    </>
  );
}

export default Main;