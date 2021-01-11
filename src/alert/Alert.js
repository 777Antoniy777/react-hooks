import React from 'react';
import {useAlert} from "./AlertContext";

function Alert() {
  const {alertStatus: alert, toggleAlert} = useAlert();

  if (!alert) return null; 

  return (
    <div className="alert alert-danger" onClick={toggleAlert}>
      Это очень важное сообщение
    </div>
  );
}
  
export default Alert;