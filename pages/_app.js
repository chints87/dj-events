import { AuthProvider } from '../context/AuthContext';
import '../styles/scss/globals.scss';

/* export function reportWebVitals(metric) {
  console.log(metric)
} */

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
