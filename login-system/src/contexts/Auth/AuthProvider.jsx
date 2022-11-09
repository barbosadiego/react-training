import { useEffect } from 'react';
import { useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { AuthContext } from './AuthContext';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const api = useApi();

  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem('authToken');
      if (storageData) {
        const data = await api.validateToken(storageData);
        if (data.user) {
          setUser(data.user);
        }
      }
    };

    validateToken();
  }, []);

  const signin = async (email, password) => {
    const data = await api.signin(email, password);

    if (data.user && data.token) {
      setUser(data.user);
      setToken(data.token);
      return true;
    }

    return false;
  };

  const setToken = (token) => {
    localStorage.setItem('authToken', token);
  };

  const signout = async () => {
    await api.logout();
    setUser(null);
    setToken('');
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
}
