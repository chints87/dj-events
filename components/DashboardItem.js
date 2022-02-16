import React from 'react';
import Link from 'next/link';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';

export default function DashboardItem({ evt, deleteEvent }) {
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
      <button onClick={() => deleteEvent(evt.id)} type="button">
        <FaTimes />
        {' '}
        Delete
      </button>

    </div>
  );
}
