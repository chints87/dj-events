import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { NEXT_URL } from '@/config/index';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setuser] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  // Check if user is logged in
  const checkUserLoggedIn = async () => {
    const res = await fetch(`${NEXT_URL}/api/user`);
    const data = await res.json();

    if (res.ok) {
      setuser(data.user);
    } else {
      setError(null);
    }
  };

  useEffect(() => checkUserLoggedIn(), []);

  // Reset Error, with an event so that the
  // user has seen it
  const resetError = async () => setError(null);

  // Register User
  const register = async (newUser) => {
    const res = await fetch(`${NEXT_URL}/api/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });

    const data = await res.json();
    if (res.ok) {
      setuser(data.user);
      router.push('/account/dashboard');
    } else {
      setError(data.message);
      // setError(null);
    }
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
    if (res.ok) {
      setuser(data.user);
      router.push('/account/dashboard');
    } else {
      setError(data.message);
      // setError(null);
    }
  };

  // Logout User
  const logout = async () => {
    const res = await fetch(`${NEXT_URL}/api/logout`, {
      method: 'POST',
    });

    if (res.ok) {
      setuser(null);
      router.push('/');
    } else {
      setError('Something went wrong');
    }
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
