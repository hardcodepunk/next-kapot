import { IEvent } from './types'

export const constantsEvents: IEvent[] = [
  {
    title: 'Kapot Contest',
    location: 'Sportoase skatepark, Leuven',
    price: 'free',
    date: '1st of August 2026',
    startDate: '2026-08-01',
    venueAddress: 'Philipssite 6, 3001 Leuven',
    description:
      "Belgian annual celebration of inline skating! Feel the vibes as skaters from all over the world come together to showcase their tricks. It's more than a contest; it's a family gathering where everyone's passion for rollerblading is shared. Come out and play!",
    buttonLink: 'https://www.facebook.com/events/1298588894932094/',
    buttonLabel: 'View event',
    disabledButton: false,
  },
  {
    title: 'Nocturnus',
    location: 'Blaarmeersen skatepark, Gent',
    price: 'free',
    date: 'mid August',
    description:
      'Annual all-night inline skate jam in Blaarmeersen skatepark. Tradition brought back to life. Relocated to Gent! Lights will be lit until morning.',
    buttonLabel: 'To be announced',
    disabledButton: true,
  },
]
