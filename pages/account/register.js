import React, { useState, useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import Link from 'next/link';
import Layout from '@/components/Layout';
import AuthContext from '@/context/AuthContext';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { register, error } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('in here');
    register({ username, email, password });
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
              <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
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
              <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </label>
          </div>
          <input type="submit" value="Register" />
        </form>
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
