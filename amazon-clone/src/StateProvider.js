import React, { createContext, useContext, useReducer } from "react"; //Importing From react

// Prepares The DataLayer
export const StateContext = createContext();

// Wrap our app provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
</StateContext.Provider>
);

// Pull Information From the DATA
export const useStateValue = () => useContext(StateContext);

