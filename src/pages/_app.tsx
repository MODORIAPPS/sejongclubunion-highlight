import Footer from '@/components/Footer';
import MapView from '@/components/MapView';
import TopBar from '@/components/TopBar';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <TopBar />
      <Component {...pageProps} />
      <MapView />
      <Footer />
    </div>
  );
}
