import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';

// TODO: Use Formik
export default function AddEventPage() {
  const [values, setValues] = useState({
    name: '',
    venue: '',
    address: '',
    performers: '',
    date: '',
    time: '',
    description: '',
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    const res = await fetch(`${API_URL}/events`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      alert('Error');
    } else {
      const event = await res.json();
      router.push(`/events/${event.slug}`);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <Layout title="Add New Event">
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="name">
          Event Name
          <input type="text" id="name" name="name" value={values.name} onChange={handleInputChange} />
        </label>
        <label htmlFor="venue">
          Venue
          <input type="text" id="venue" name="venue" value={values.venue} onChange={handleInputChange} />
        </label>
        <label htmlFor="address">
          address
          <input type="text" id="address" name="address" value={values.address} onChange={handleInputChange} />
        </label>
        <label htmlFor="performers">
          Performers
          <input type="text" id="performers" name="performers" value={values.performers} onChange={handleInputChange} />
        </label>
        <label htmlFor="date">
          Date
          <input type="date" id="date" name="date" value={values.date} onChange={handleInputChange} />
        </label>
        <label htmlFor="time">
          Time
          <input type="text" id="time" name="time" value={values.time} onChange={handleInputChange} />
        </label>
        <label htmlFor="description">
          Description
          <input type="text" id="description" name="description" value={values.description} onChange={handleInputChange} />
        </label>
        <input type="submit" value="Add Event" />
      </form>
    </Layout>
  );
}
