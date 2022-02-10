import Link from 'next/link';
import styles from '@/styles/scss/Header.module.scss';
import Search from './Search';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>LOGO</a>
        </Link>
      </div>
      <Search />
      <nav>
        <ul>
          <li>
            <Link href="/events">
              <a>Events</a>
            </Link>
            <Link href="/events/add">
              <a>Add Event</a>
            </Link>
          </li>
        </ul>
      </nav>

    </header>
  );
}
