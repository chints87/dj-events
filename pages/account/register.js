import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import Link from 'next/link';
import Layout from '@/components/Layout';

export default function Login() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
            <label htmlFor="username">
              Username
              <input type="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
          </div>
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

          <div>
            <label htmlFor="confirmPassword">
              confirmPassword
              <input type="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </label>
          </div>
        </form>
        <input type="submit" value="Register" />
        <p>
          Already have an account
          {' '}
          <Link href="/account/login">
            <a>Login</a>
          </Link>

        </p>
      </div>
    </Layout>
  );
}
