// Modules
import { Html, Main, Head, NextScript } from 'next/document'
import { DocumentHeadTags, DocumentHeadTagsProps, documentGetInitialProps } from '@mui/material-nextjs/v15-pagesRouter'
import type { DocumentContext } from 'next/document'

// Theme
import theme from '../theme/theme'
import { fontVariables } from '../theme/fonts'

export default function MyDocument(props: DocumentHeadTagsProps) {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <meta name="color-scheme" content="light dark" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="author" content="Kapot" />
        <meta name="geo.region" content="BE-VBR" />
        <meta name="geo.placename" content="Leuven" />
        <meta name="geo.position" content="50.8798;4.7005" />
        <meta name="ICBM" content="50.8798, 4.7005" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <DocumentHeadTags {...props} />
      </Head>
      <body className={fontVariables}>
        <noscript>
          <p style={{ padding: '24px', textAlign: 'center', fontFamily: 'sans-serif' }}>
            Kapot — Belgian inline skating community. Events, contests and lessons in Leuven.
            Contact: kapot@echtalleskapot.be. This site works best with JavaScript enabled.
          </p>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const finalProps = await documentGetInitialProps(ctx)
  return finalProps
}
