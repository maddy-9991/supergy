import '../styles/tailwind.css';
import Layout from '../components/Layout';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../config/theme';
import createEmotionCache from '../config/createEmotionCache';
import { AppProps } from 'next/app'


interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
