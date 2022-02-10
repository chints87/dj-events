import React from 'react';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';

// Over here the path for the event page will be /events/event-name, while
// the api route in stratify would be /events?slug={$slug}
// as a query parameter. In next.js the api route /api/events/${slug} (given how the
// folder structure is )

export default function Eventpage({ evt }) {
  const router = useRouter();
  const deleteEvent = async () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Are you sure you want to delete?')) {
      const res = await fetch(`${API_URL}/events/${evt.id}`, {
        method: 'DELETE',
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error);
      } else {
        router.push('/events');
      }
    }
  };
  return (
    <Layout>
      <h1>{evt.slug}</h1>
      <Link href={`/events/edit/${evt.id}`}>
        <a>
          <FaPencilAlt />
          {' '}
          Edit
        </a>
      </Link>
      <Link href="#">
        <a onClick={deleteEvent} role="presentation">
          <FaTimes />
          {' '}
          Delete
        </a>
      </Link>
      <p>Other event info</p>
      <Link href="/events">
        <a>Go back</a>
      </Link>
    </Layout>
  );
}

// Calling events from API then extracting the
// slug parameters for all events into a variable paths
export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/events`);
  const events = await res.json();

  const paths = events.map((evt) => ({
    params: { slug: evt.slug },
  }));
  return {
    paths,
    fallback: true,
  };
}

// This function takes path as a parameter
// Does this require extra memory?
export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/events?slug=${slug}`);
  const events = await res.json();

  return {
    props: {
      evt: events[0],
    },
    revalidate: 1,
  };
}
// export async function getServerSideProps({ query: { slug } }) {
//   const res = await fetch(`${API_URL}/api/events/${slug}`);
//   const events = await res.json();

//   return {
//     props: {
//       evt: events[0],
//     },
//   };
// }
