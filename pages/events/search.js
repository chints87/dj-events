import qs from 'qs';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import EventItem from '@/components/EventItem';

export default function SearchPage({ events }) {
  const router = useRouter();
  return (
    <Layout title="Search Events">
      <Link href="/events">Go back</Link>
      <h1>
        Search Result for
        {' '}
        {router.query.term}
        {' '}
      </h1>
      { events.length === 0 && (
      <p>
        No results found for
        {' '}
        {router.query.term}
      </p>
      ) }

      {events.map((evt) => <EventItem key={evt.id} evt={evt} />)}
    </Layout>
  );
}

export async function getServerSideProps({ query: { term } }) {
// When want to place search multiple fields in a table/model
  const query = qs.stringify(({
    _where: {
      _or: [
        { name_contains: term },
        { performers_contains: term },
        { description_contains: term },
        { venue_contains: term },
      ],
    },
  }));

  // Send request to strapi api
  const res = await fetch(`${API_URL}/events?${query}`);
  const events = await res.json();

  return {
    props: { events },

  };
}
