import React from 'react';
import Link from 'next/link';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { API_URL } from '../config/index';

export default function DashboardItem({ evt }) {
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
        router.push('/events/dashboard');
      }
    }
  };
  return (
    <div>
      <Link href={`/events/${evt.slug}`}>
        <a>{evt.name}</a>
      </Link>
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
    </div>
  );
}
