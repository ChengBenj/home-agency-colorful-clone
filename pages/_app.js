import '../styles/globals.css'
import "tailwindcss/tailwind.css";
import { PageProvider } from '../context/page';

function MyApp({ Component, pageProps }) {
  return (
    <PageProvider>
      <Component {...pageProps} />
    </PageProvider>
  )
}

export default MyApp
