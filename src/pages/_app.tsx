import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { Cursor } from '../components';
import { ThemeProvider } from '../context/theme-context';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Cursor className="hidden dark:lg:block" />
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}
