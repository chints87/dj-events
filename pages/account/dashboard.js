import React, { useContext } from 'react';
import Layout from '@/components/Layout';
import AuthContext from '@/context/AuthContext';
import { parseCookie } from '@/utilities/parseCookie';
import { API_URL } from '@/config/index';
import DashboardItem from '@/components/DashboardItem';

export default function DashboardPage({ userEvents }) {
  const { user } = useContext(AuthContext);
  return (
    <Layout title={user ? `${user.username}'s Dashboard` : null}>
      <h1>Dashboard</h1>
      {userEvents.map((evt) => <DashboardItem key={evt.id} evt={evt} />) }
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookie(req);
  const data = await fetch(`${API_URL}/events/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const userEvents = await data.json();

  return {
    props: {
      userEvents,
    },
  };
}
