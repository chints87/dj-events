import cookie from 'cookie';

// export const parseCookie = (req) => cookie.parse(req ? req.headers.cookie || '' : '');

export function parseCookie(req) {
  return cookie.parse(req ? req.headers.cookie || '' : '');
}
