import cookie from 'cookie';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Set cookie on server side
    res.setHeader('Set-Cookie', cookie.serialize('token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      expires: new Date(0),
      sameSite: 'strict',
      // Indicates the path that must exist in the requested URL
      // for the browser to send the Cookie header.
      path: '/',
    }));
    res.status(200).json({ message: 'Successfully logged out' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
