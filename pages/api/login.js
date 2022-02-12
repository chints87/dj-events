import cookie from 'cookie';
import { API_URL } from '@/config/index';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { identifier, password } = req.body;

    // This route is like a middleware for Strapi
    // Fetch call to strapi
    const strapiRes = await fetch(`${API_URL}/auth/local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });

    const data = await strapiRes.json();

    if (strapiRes.ok) {
      // Set cookie on server side
      res.setHeader('Set-Cookie', cookie.serialize('token', data.jwt, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        maxAge: 60 * 60 * 24 * 7,
        sameSite: 'strict',
        // Indicates the path that must exist in the requested URL
        // for the browser to send the Cookie header.
        path: '/',
      }));
      res.status(200).json({ user: data.user });
    } else {
      res.status(data.statusCode).json({ message: data.message[0].messages[0].message });
    }
  } else {
    // If the URL is typed then a 405 message would show
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
