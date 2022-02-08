import Link from 'next/link';
import Layout from '@/components/Layout';
import styles from '@/styles/scss/404.module.scss';

export default function NotFoundPage() {
  return (
    <Layout title="Page Not Found">
      <div className={styles.error}>
        <h1>404</h1>
        <h3>Sorry, Page does not exists</h3>
        <Link href="/"><a>Go Back Home</a></Link>
      </div>
    </Layout>
  );
}
