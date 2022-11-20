import React, { useReducer, useContext } from "react";
import reducer from "./reducer";
import { DISPLAY_ALERT, CLEAR_ALERT } from "./actions";

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
};

const appContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  return (
    <appContext.Provider value={{ ...state, displayAlert }}>
      {children}
    </appContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(appContext);
};

export { AppProvider, initialState, useAppContext };
