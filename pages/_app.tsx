import '../styles/globals.css';
import type { AppProps } from 'next/app';
import AppLayout from '../src/modules/layout/app-layout/app-layout';
import 'antd/dist/antd.css';

function PersonalityTest({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default PersonalityTest;
