import { createContext, useContext } from 'react';
import useAuth from '../hooks/useAuth';

const GlobalContext = createContext(null);

function useGlobalContext() {
  return useContext(GlobalContext);
}

function GlobalContextProvider({ children }) {
  const user = useAuth();
  let values = {
    user,
  };
  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
}

export { useGlobalContext, GlobalContextProvider };
