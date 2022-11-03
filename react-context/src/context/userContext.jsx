import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleName({ name, email }) {
    setName(name);
    setEmail(email);
    console.log('provider data: ', { name, email });
  }

  return (
    <UserContext.Provider value={{ name, email, handleName }}>
      {children}
    </UserContext.Provider>
  );
};
