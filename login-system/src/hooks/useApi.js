import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

// fake api's
export const useApi = () => ({
  validateToken: async (token) => {
    return {
      user: { id: 3, name: 'josé', email: 'jose@gmail.com' },
    };
    const response = await api.post('/validate', { token });
    return response.data;
  },

  signin: async (email, password) => {
    return {
      user: { id: 3, name: 'josé', email: 'jose@gmail.com' },
      token: '12345667890',
    };
    const response = await api.post('/signin', { email, password });
    return response.data;
  },

  logout: async () => {
    return { status: true };
    const response = await api.post('/logout');
    return response.data;
  },
});
