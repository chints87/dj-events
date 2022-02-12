import cookie from 'cookie';
import { API_URL } from '@/config/index';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    if (!req.headers.cookie) {
      res.status(403).json({ message: 'Not Authrorzied' });
      return;
    }

    // Extract token from cookie
    const { token } = cookie.parse(req.headers.cookie);

    const strapiRes = await fetch(`${API_URL}/users/me`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const user = await strapiRes.json();
    console.log('User', user);

    if (strapiRes.ok) {
    //   Ideal to send as an object property incase want to
    // send anything else
      res.status(200).json({ user });
    } else {
      res.status(403).json({ message: 'User forbidden' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
