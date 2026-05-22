// Data
import { constantsEvents } from '../Sections/SectionEvents/Events/constantsEvents'
import { constantsSocialMedia } from '../SocialsBar/constantsSocialMedia'

// Config
import { SITE_URL, SITE_NAME, ORG_EMAIL, ORG_LOGO_PATH, DEFAULT_DESCRIPTION } from './config'

export const sportsClubSchema = {
  '@context': 'https://schema.org',
  '@type': 'SportsClub',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}${ORG_LOGO_PATH}`,
  email: ORG_EMAIL,
  description: DEFAULT_DESCRIPTION,
  sport: 'Inline skating',
  sameAs: constantsSocialMedia.map((s) => s.link),
  areaServed: {
    '@type': 'Country',
    name: 'Belgium',
  },
}

export const eventSchemas = constantsEvents
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
      name: SITE_NAME,
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
