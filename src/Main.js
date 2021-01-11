import React from 'react';
import {useAlert} from "./alert/AlertContext";

function Main() {
  const {show} = useAlert();

  return (
    <>
        <h1>Добрый день!</h1>

        <button className="btn btn-success" type="button" onClick={() => show('Этот текст из Main.js')}>Показать alert</button>
    </>
  );
}

export default Main;