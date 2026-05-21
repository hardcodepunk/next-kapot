// Modules
import Head from 'next/head'
import { AppProps } from 'next/app'

// MUI
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'

// Vercel
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

// Theme
import theme from '../theme/theme'
// Side-effect import so next/font's build plugin processes the fonts into the client bundle.
// The CSS variables are applied to <body> in pages/_document.tsx.
import '../theme/fonts'

// Global styles
import '../styles/globals.css'

// Cache
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '../src/createEmotionCache'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="description" content="Learn to inline skate, attend rollerblade contests and events. By and for the inline community." />
        <title>Kapot | Inline skate events, contests and lessons.</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
        <Analytics />
        <SpeedInsights />
      </ThemeProvider>
    </CacheProvider>
  )
}
