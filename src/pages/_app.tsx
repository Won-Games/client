import NextNprogress from 'nextjs-progressbar'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import { Provider as AuthProvider } from 'next-auth/client'
import { ApolloProvider } from '@apollo/client'
import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'
import { useApollo } from 'utils/apollo'
import { StickyNote } from 'components/StickyNote'
import { AppProvider } from 'providers/app'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <AuthProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <AppProvider>
          <Head>
            <title>Won Games</title>
            <link rel="shortcut icon" href="/img/icon-512.png" />
            <link rel="apple-touch-icon" href="/img/icon-512.png" />
            <link rel="manifest" href="/manifest.json" />
            <meta
              name="description"
              content="The best Game Store in the world!"
            />
          </Head>
          <DefaultSeo {...SEO} />
          <GlobalStyles />
          <NextNprogress
            color="#F231A5"
            startPosition={0.3}
            stopDelayMs={200}
            height={5}
          />
          <StickyNote>
            <p>
              Esse é um site de estudos! Quer fazer um site igual? Aprenda no
              curso <a href="https://reactavancado.com.br">React Avançado</a>
            </p>
          </StickyNote>
          <Component {...pageProps} />
        </AppProvider>
      </ApolloProvider>
    </AuthProvider>
  )
}

export default App
