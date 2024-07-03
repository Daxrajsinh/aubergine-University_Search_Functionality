import React, { useContext, useState } from "react";
import useFetch from "./useFetch";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [query, setQuery] = useState("middle");
    const { isLoading, isError, university } = useFetch(`search?country=${query}`);
  
    return (
      <AppContext.Provider value={{ query, university, setQuery, isLoading, isError }}>
        {children}
      </AppContext.Provider>
    );
  };
  

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };