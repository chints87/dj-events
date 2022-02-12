import Link from 'next/link';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { useContext } from 'react';
import styles from '@/styles/scss/Header.module.scss';
import Search from './Search';
import AuthContext from '@/context/AuthContext';

export default function Header() {
  const { user, logout } = useContext(AuthContext);
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
          </li>
          { user
            ? (
              <>
                <li>
                  <Link href="/events/add">
                    <a>Add Event</a>
                  </Link>
                </li>
                <li>
                  <Link href="/account/dashboard">
                    <a>Dashboard</a>
                  </Link>
                </li>
                <li>
                  <button type="button" onClick={() => logout()}>
                    <FaSignOutAlt />
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link href="/account/login">
                  <a>
                    <FaSignInAlt />
                    {' '}
                    Login
                  </a>
                </Link>
              </li>
            ) }

        </ul>
      </nav>

    </header>
  );
}
