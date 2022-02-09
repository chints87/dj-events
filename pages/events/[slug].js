import React from 'react';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';

export default function Eventpage({ evt }) {
  return (
    <Layout>
      <h1>{evt.slug}</h1>
    </Layout>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const events = await res.json();

  return {
    props: {
      evt: events[0],
    },
  };
}
