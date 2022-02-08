import React from 'react';
import Image from 'next/image';

export default function EventItem({ evt }) {
  return (
    <div>
      <div>
        <Image src={evt.image} alt={evt.name} width={170} height={100} />
      </div>
      {evt.name}
    </div>
  );
}
