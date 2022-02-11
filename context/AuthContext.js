import { createContext, useState } from 'react';
// import { useRouter } from 'next/router';
import { NEXT_URL } from '@/config/index';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setuser] = useState('');
  const [error, setError] = useState('');

  // Reset Error, with an event so that the
  // user has seen it
  const resetError = async () => setError(null);

  // Register User
  const register = async (userDetails) => {
    console.log(userDetails);
  };
  // Making a request to the API in next that will
  // further make a request to Strapi
  const login = async ({ email: identifier, password }) => {
    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });

    const data = await res.json();

    console.log(data);

    if (res.ok) {
      setuser(data.user);
    } else {
      setError(data.message);
      // setError(null);
    }
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
      user, error, resetError, register, login, logout, checkUserLoggedIn,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
