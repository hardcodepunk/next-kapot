// Modules
import { AppProps } from 'next/app'

// MUI
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { AppCacheProvider } from '@mui/material-nextjs/v15-pagesRouter'

// Vercel
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

// Components
import Seo from '../components/Seo'

// Theme
import theme from '../theme/theme'
// Side-effect import so next/font's build plugin processes the fonts into the client bundle.
// The CSS variables are applied to <body> in pages/_document.tsx.
import '../theme/fonts'

// Global styles
import '../styles/globals.css'

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props
  return (
    <AppCacheProvider {...props}>
      <Seo />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
        <Analytics />
        <SpeedInsights />
      </ThemeProvider>
    </AppCacheProvider>
  )
}
