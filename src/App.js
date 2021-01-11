import React from 'react';
import './App.css';
import AlertProvider from "./alert/AlertContext";
import Main from "./Main";
import Alert from "./alert/Alert";

function App() {
  return (
    <AlertProvider>
      <div className="App pt-3">
        <Alert />
        <Main />
      </div>
    </AlertProvider>
  );
}

export default App;
