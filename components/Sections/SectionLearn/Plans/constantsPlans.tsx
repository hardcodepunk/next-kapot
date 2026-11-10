import { IPlan } from './types'

export const constantsPlans: IPlan[] = [
  {
    title: 'Sunday Group Class',
    price: '10 lessons for €80',
    description: [
      "Inline skating lessons for all levels at Sportoase skatepark, Leuven. Learn aggressive inline skating (rollerblading) in a group. Min 6 years old. Protection gear and helmet obligatory! We're a skate club under Skate Vlaanderen, so we'll ask you to become a member for €40 a year. Your membership includes sports insurance, also internationally.",
      "When it rains, we move to Stelplaats indoor skatepark. We'll let you know before the session.",
    ],
    list: ['all levels, beginners welcome', 'coached by OG pro skater David (Sharp)', 'helmet and protection obligatory'],
    details: [
      { label: 'Every Sunday', value: ['9:30–11:00', '11:00–12:30'] },
      { label: 'Ages', value: ['Youth 6–22', 'Adults 23+'] },
      { label: 'Leuven, Belgium', value: ['Sportoase skatepark', 'Stelplaats indoor skatepark'] },
      { label: 'Membership', value: ['€40 per year', 'Insurance included'] },
    ],
    buttonLink: 'https://tally.so/r/wAY26B',
    buttonLabel: 'Register',
  },
  {
    title: 'Private session',
    price: '€40 per hour',
    description: [
      "You'll be privately taught to inline skate by one of our teachers. We have one pair of adaptable size junior aggressive inline skates to try out for children. Ask beforehand, not always available! All ages and levels welcome.",
    ],
    list: ['all ages and levels welcome', 'junior skates to try out'],
    details: [
      { label: 'When', value: ['By appointment'] },
      { label: 'Where', value: ['Leuven, Brussels, Antwerp, Gent', 'Anywhere in the Benelux'] },
      { label: 'Ages', value: ['All ages'] },
    ],
    buttonLink: 'https://calendly.com/kapot/private-session',
    buttonLabel: 'Book session',
  },
  // {
  //   title: 'Kapot Member',
  //   price: '€400 (first 5 members) per year',
  //   description:
  //     'One year access to a coach: 24/7 feedback. We will analyze your videos, suggest training plans and answer questions. One monthly one-hour feedback session included, online or in person. This plan saves you €80 if you would want a private session every month.',
  //   list: [
  //     'monthly 1h private session (international member 1h live call)',
  //     'one year 24/7 online feedback',
  //     'on and off skate training advice and plans',
  //     'access to our online community',
  //     'submit your clips, instant feedback',
  //     'kapot shirt',
  //   ],
  //   buttonLink: 'https://buy.stripe.com/00gfZDeaR55p4V28wy',
  //   buttonLabel: 'Become member',
  // },
]
