import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import Link from 'next/link';
import Layout from '@/components/Layout';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
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
          Don&apos;t have an account
          {' '}
          <Link href="/account/register">
            <a>Register</a>
          </Link>

        </p>
      </div>
    </Layout>
  );
}
