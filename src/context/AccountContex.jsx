import React,{ createContext, useContext } from "react";

const AccountContext = createContext(null);

export const useAccountContext = () => {
  return useContext(AccountContext);
};

export const AccountContextProvider = ({ children }) => {
  const [account, setAccount] = React.useState(null);
  return (
    <AccountContext.Provider value={{ account, setAccount }}>
      {children}
    </AccountContext.Provider>
  );
};
