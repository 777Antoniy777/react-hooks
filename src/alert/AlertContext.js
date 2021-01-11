import React, {useContext, useReducer} from 'react';

// const
const SHOW_ALERT = 'show';
const HIDE_ALERT = 'hide';

const AlertContext = React.createContext();

export const useAlert = () => {
  return useContext(AlertContext);
};

// reducer like in Redux store
const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        status: true,
        text: action.payload,
      };

    case HIDE_ALERT:
      return {
        ...state,
        status: false,
      };
  
    default:
      return state;
  }
};

function AlertProvider({children}) {
  // The second arg is state like Redux store
  const [state, dispatch] = useReducer(reducer, {
    status: false,
    text: '',
  });

  // Function dispatchers with TYPE and PAYLOAD
  const show = (text) => dispatch({
    type: SHOW_ALERT,
    payload: text,
  });

  const hide = () => dispatch({
    type: HIDE_ALERT,
  });

  return (
    <AlertContext.Provider value={{
      alert: state,
      show,
      hide,
    }}>
      {children}
    </AlertContext.Provider>
  );
}

export default AlertProvider;