import Layout from '@/components/Layout';

export default function EventsPage() {
  return (
    <Layout title="Events Page" description="events" keywords="is,a,event">
      <h1>Events</h1>
    </Layout>
  );
}

/* This function is executed first before the
 component function */
export async function getStaticProps() {
  /* Pre-generate a page i.e the
  HTML and data - prepared from server side -
  content during build time */

  /* Run server side code */

  /* Code doesnt get bundled, which is
     sent to the client side */

  /* Prefetch data before this component
     is created */
  return {
    props: {},
  };
}

/* THIS CODE IS EXECUTED ONLY DURING
BUILD TIME OR DEV SERVER */
