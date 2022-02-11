import React, { useState, useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import Link from 'next/link';
import Layout from '@/components/Layout';
import AuthContext from '@/context/AuthContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, error } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };
  return (
    <Layout title="User Login">
      <div>
        <h1>
          <FaUser />
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">
              Email
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
          </div>
          <input type="submit" value="Login" />
        </form>
        <p>
          Don&apos;t have an account ?
          {' '}
          <Link href="/account/register">
            <a>Register</a>
          </Link>

        </p>
      </div>
    </Layout>
  );
}
