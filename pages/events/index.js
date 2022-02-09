import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import EventItem from '@/components/EventItem';

export default function EventsPage({ events }) {
  return (
    <Layout title="All Events">
      <h1>All Events</h1>
      { events.length === 0 && <p>No Events</p> }

      {events.map((evt) => <EventItem key={evt.id} evt={evt} />)}
    </Layout>
  );
}

// getServerSideProps sends a request to fetch data whenever
// navigated or reloaded to the page containing it

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events`);
  const events = await res.json();

  return {
    props: { events },
    // Over here since getStateProps the props are received
    // only at built time, any updates made to the event will
    // need to be seen and for that revalidate is used.
    revalidate: 1,
  };
}
