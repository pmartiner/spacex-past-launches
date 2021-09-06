// Types
import { AppType } from 'next/dist/shared/lib/utils';

const MyApp: AppType = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default MyApp;
