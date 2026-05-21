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
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <DocumentHeadTags {...props} />
      </Head>
      <body className={fontVariables}>
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
