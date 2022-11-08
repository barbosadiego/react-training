import { useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { AuthContext } from './AuthContext';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const api = useApi();

  const signin = async (email, password) => {
    const data = api.signin(email, password);

    if (data.user && data.token) {
      setUser(data.user);
      return true;
    }

    return false;
  };

  const signout = async () => {
    await api.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
}
