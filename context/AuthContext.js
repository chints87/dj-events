import { createContext, useState } from 'react';
// import { useRouter } from 'next/router';
// import { API_URL } from '@/config/index';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setuser] = useState('');
  const [error, setError] = useState();

  // Register User
  const register = async (userDetails) => {
    console.log(userDetails);
  };
  // Login User
  const login = async ({ email: identifier, password }) => {
    console.log({ identifier, password });
  };

  // Logout User
  const logout = async () => {
    console.log('logout');
  };

  // Check if user is logged in
  const checkUserLoggedIn = async (credentials) => {
    console.log('Check', credentials);
  };

  return (
    <AuthContext.Provider value={{
      user, error, register, login, logout, checkUserLoggedIn,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
