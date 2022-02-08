import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import EventItem from '@/components/EventItem';

export default function HomePage({ events }) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      { events.length === 0 && <p>No Events</p> }

      {events.map((evt) => <EventItem key={evt.id} evt={evt} />)}
    </Layout>
  );
}

// to fetch data on each request, that is when we come onto the page

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events },
    // Over here since getStateProps the props are received
    // only at built time, any updates made to the event will
    // need to be seen and for that revaliate is used.
    revalidate: 1,
  };
}
