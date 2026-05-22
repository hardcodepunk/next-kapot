// Modules
import Head from 'next/head'

// Config
import {
  SITE_URL,
  SITE_NAME,
  SITE_LOCALE,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_WIDTH,
  DEFAULT_OG_IMAGE_HEIGHT,
  DEFAULT_OG_IMAGE_ALT,
} from './config'

// Structured data
import { sportsClubSchema, eventSchemas } from './jsonLd'

// Types
import { ISeo } from './types'

const Seo = ({ title, description, ogImage, path, noindex }: ISeo) => {
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
      <meta property="og:image:width" content={String(DEFAULT_OG_IMAGE_WIDTH)} />
      <meta property="og:image:height" content={String(DEFAULT_OG_IMAGE_HEIGHT)} />
      <meta property="og:image:alt" content={DEFAULT_OG_IMAGE_ALT} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={SITE_LOCALE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={absoluteOgImage} />
      <meta name="twitter:image:alt" content={DEFAULT_OG_IMAGE_ALT} />

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sportsClubSchema) }}
      />
      {eventSchemas.map((schema, index) => (
        <script
          key={`event-jsonld-${index}`}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  )
}

export default Seo
