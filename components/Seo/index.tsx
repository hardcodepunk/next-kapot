// Modules
import Head from 'next/head'

// Data
import { constantsEvents } from '../Sections/SectionEvents/Events/constantsEvents'
import { constantsSocialMedia } from '../SocialsBar/constantsSocialMedia'

// Types
import { ISeo } from './types'

const SITE_URL = 'https://echtalleskapot.be'
const DEFAULT_TITLE = 'Kapot | Inline skate events, contests and lessons.'
const DEFAULT_DESCRIPTION = 'Learn to inline skate, attend rollerblade contests and events. By and for the inline community.'
const DEFAULT_OG_IMAGE = '/images/splash_kapot-contest.jpg'
const ORG_EMAIL = 'kapot@echtalleskapot.be'
const ORG_LOGO = '/images/illustrations/logo--white.svg'

const sportsClubSchema = {
  '@context': 'https://schema.org',
  '@type': 'SportsClub',
  name: 'Kapot',
  url: SITE_URL,
  logo: `${SITE_URL}${ORG_LOGO}`,
  email: ORG_EMAIL,
  description: DEFAULT_DESCRIPTION,
  sport: 'Inline skating',
  sameAs: constantsSocialMedia.map((s) => s.link),
  location: {
    '@type': 'SportsActivityLocation',
    name: 'Sportoase Leuven',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Philipssite 6',
      postalCode: '3001',
      addressLocality: 'Leuven',
      addressCountry: 'BE',
    },
  },
}

const eventSchemas = constantsEvents
  .filter((event) => Boolean(event.startDate))
  .map((event) => ({
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: event.title,
    description: event.description,
    startDate: event.startDate,
    ...(event.endDate && { endDate: event.endDate }),
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: event.location,
      ...(event.venueAddress && {
        address: {
          '@type': 'PostalAddress',
          streetAddress: event.venueAddress,
        },
      }),
    },
    organizer: {
      '@type': 'SportsClub',
      name: 'Kapot',
      url: SITE_URL,
    },
    offers: {
      '@type': 'Offer',
      price: event.price === 'free' ? '0' : event.price,
      priceCurrency: 'EUR',
      availability: event.disabledButton ? 'https://schema.org/PreOrder' : 'https://schema.org/InStock',
      ...(event.buttonLink && { url: event.buttonLink }),
    },
  }))

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
      <meta property="og:site_name" content="Kapot" />
      <meta property="og:locale" content="en_GB" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={absoluteOgImage} />

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
