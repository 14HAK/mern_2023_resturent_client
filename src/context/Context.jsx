import { createContext } from 'react';

export const MyContext = createContext();

const Context = ({ children }) => {
  const user = { name: 'barasot' };

  const contextData = { user };

  return (
    <MyContext.Provider value={contextData}>{children}</MyContext.Provider>
  );
};

export default Context;
