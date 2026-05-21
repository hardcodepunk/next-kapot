// Modules
import Head from 'next/head'

interface SeoProps {
  title?: string
  description?: string
  ogImage?: string
  path?: string
  noindex?: boolean
}

const SITE_URL = 'https://echtalleskapot.be'
const DEFAULT_TITLE = 'Kapot | Inline skate events, contests and lessons.'
const DEFAULT_DESCRIPTION = 'Learn to inline skate, attend rollerblade contests and events. By and for the inline community.'
const DEFAULT_OG_IMAGE = '/images/splash_kapot-contest.jpg'

const Seo = ({ title, description, ogImage, path, noindex }: SeoProps) => {
  const resolvedTitle = title ?? DEFAULT_TITLE
  const resolvedDescription = description ?? DEFAULT_DESCRIPTION
  const resolvedOgImage = ogImage ?? DEFAULT_OG_IMAGE
  const canonicalUrl = `${SITE_URL}${path ?? ''}`
  const absoluteOgImage = resolvedOgImage.startsWith('http') ? resolvedOgImage : `${SITE_URL}${resolvedOgImage}`

  return (
    <Head>
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:site_name" content="Kapot" />
      <meta property="og:locale" content="en_GB" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={absoluteOgImage} />
    </Head>
  )
}

export default Seo
