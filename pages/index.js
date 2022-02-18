import Link from 'next/link';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import EventItem from '@/components/EventItem';

export default function HomePage({ events }) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      { events.length === 0 && <p>No Events</p> }
      {events.map((evt) => <EventItem key={evt.id} evt={evt} />)}

      { events.length > 0 && (
      <Link href="/events">
        <a style={{ textDecoration: 'underline' }}>View all events(takes them to events page)</a>
      </Link>
      )}
    </Layout>
  );
}

// getServerSideProps sends a request to fetch data whenever
// navigated or reloaded to the page containing it

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`);
  const events = await res.json();
  return {
    props: { events },
    // Over here since getStateProps the props are received
    // only at built time, any updates made to the event will
    // need to be seen and for that revalidate is used.
  };
}
