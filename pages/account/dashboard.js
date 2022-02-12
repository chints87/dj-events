import React, { useContext } from 'react';
import Layout from '@/components/Layout';
import AuthContext from '@/context/AuthContext';

export default function DashboardPage() {
  const { user } = useContext(AuthContext);
  return (
    <Layout title={ user ? `${user.username}'s Dashboard` : null}>
      <h1>Dashboard</h1>
    </Layout>
  );
}
