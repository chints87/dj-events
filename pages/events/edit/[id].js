import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FaImage } from 'react-icons/fa';
import moment from 'moment';
import Image from 'next/image';
import Layout from '@/components/Layout';
import Modal from '@/components/Modal';
import { API_URL } from '@/config/index';
import { parseCookie } from '@/utilities/parseCookie';

// TODO: Use Formik
export default function EditEventPage({ evt, token }) {
  const [values, setValues] = useState({
    name: evt.name,
    venue: evt.venue,
    address: evt.address,
    performers: evt.performers,
    date: evt.data,
    time: evt.time,
    description: evt.description,
  });

  // eslint-disable-next-line no-unused-vars
  const [imagePreview, setImagePreview] = useState(
    evt.Image ? evt.Image.formats.thumbnail.url : null,
  );

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API_URL}/events/${evt.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        alert('You are not authorzied to modify this');
      }
    } else {
      const event = await res.json();
      router.push(`/events/${event.slug}`);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const [showModal, setShowModal] = useState(false);

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
          <input type="date" id="date" name="date" value={moment(values.date).format('yyyy-DD-MM')} onChange={handleInputChange} />
        </label>
        <label htmlFor="time">
          Time
          <input type="text" id="time" name="time" value={values.time} onChange={handleInputChange} />
        </label>
        <label htmlFor="description">
          Description
          <input type="text" id="description" name="description" value={values.description} onChange={handleInputChange} />
        </label>
        <input type="submit" value="Edit Event" />
      </form>
      <h2>Event Image</h2>
      { imagePreview
        ? <Image src={imagePreview} height={100} width={100} alt="" /> : <p>No image uploaded</p> }
      <div>
        <button type="button" onClick={() => setShowModal(true)}>
          <FaImage />
          {' '}
          Set Image
        </button>
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)} title="test">
        <p>Image</p>
      </Modal>
    </Layout>

  );
}

export async function getServerSideProps({ req, params: { id } }) {
  const res = await fetch(`${API_URL}/events/${id}`);
  const event = await res.json();
  const { token } = parseCookie(req);

  return {
    props: {
      evt: event,
      token,
    },
  };
}
