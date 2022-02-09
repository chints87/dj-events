import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// This displays a single event item
export default function EventItem({ evt }) {
  return (
    <div style={{ display: 'flex' }}>
      <div>
        <Image src={evt.Image ? evt.Image.formats.thumbnail.url : '/images/event-default.png' } alt={evt.name} width={170} height={100} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {evt.name}
        <p>Other relevant details</p>
      </div>

      <Link href={`events/${evt.slug}`}>
        <a style={{ textDecoration: 'underline', marginLeft: '10px' }}>Details(takes user to the specific event page)</a>
      </Link>
    </div>
  );
}
