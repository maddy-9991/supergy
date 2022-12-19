// pages/_app.tsx
import '../styles/tailwind.css'
import { UserProvider } from '@auth0/nextjs-auth0'
import Layout from '../components/Layout'
import { ApolloProvider } from '@apollo/client'
import client from '../lib/apollo'
import { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../config/theme';
import createEmotionCache from '../config/createEmotionCache';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache, }: MyAppProps) {
  return (

    // <UserProvider>
    //   <ApolloProvider client={client}>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </CacheProvider>
    //    </ApolloProvider>
    // </UserProvider>
  )
}

export default MyApp