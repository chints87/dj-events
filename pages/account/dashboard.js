import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import AuthContext from '@/context/AuthContext';
import { parseCookie } from '@/utilities/parseCookie';
import { API_URL } from '@/config/index';
import DashboardItem from '@/components/DashboardItem';

export default function DashboardPage({ userEvents, token }) {
  const router = useRouter();
  // Adding delete event function here and not in the component
  // mainly because this is a page
  const deleteEvent = async (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Are you sure you want to delete?')) {
      const res = await fetch(`${API_URL}/events/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error);
      } else {
        router.push('/events');
      }
    }
  };
  const { user } = useContext(AuthContext);
  return (
    <Layout title={user ? `${user.username}'s Dashboard` : null}>
      <h1>Dashboard</h1>
      {userEvents.map((evt) => <DashboardItem key={evt.id} evt={evt} deleteEvent={deleteEvent} />) }
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
      token,
    },
  };
}
