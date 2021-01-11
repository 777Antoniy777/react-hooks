import React from 'react';
import {useAlert} from "./AlertContext";

function Alert() {
  const {alert, hide} = useAlert();
  const {status, text} = alert;

  if (!status) return null; 

  return (
    <div className="alert alert-danger" onClick={hide}>
      {text}
    </div>
  );
}
  
export default Alert;