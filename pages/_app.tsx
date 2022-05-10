import '../styles/globals.css'
import AppLayout from '../src/modules/layout/app-layout/app-layout';
import type { AppProps } from 'next/app'
import 'antd/dist/antd.css';

function PersonalityTest({ Component, pageProps }: AppProps) {
  return <AppLayout>
      <Component {...pageProps} />
  </AppLayout>
}

export default PersonalityTest
