import { Nunito_Sans } from 'next/font/google'
import localFont from 'next/font/local'

export const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-nunito',
  display: 'swap',
})

export const anotherDanger = localFont({
  src: '../public/fonts/AnotherDanger.woff2',
  variable: '--font-another-danger',
  display: 'swap',
})

export const futuraHeavy = localFont({
  src: '../public/fonts/FuturaStdHeavy.woff2',
  variable: '--font-futura-heavy',
  display: 'swap',
})

export const futuraCondensedBold = localFont({
  src: '../public/fonts/FuturaStdCondensedBold.woff2',
  variable: '--font-futura-cb',
  display: 'swap',
})

export const futuraCondensedExtraBd = localFont({
  src: '../public/fonts/FuturaStdCondensedExtraBd.woff2',
  variable: '--font-futura-cebd',
  display: 'swap',
})

export const futuraCondExtraBoldObl = localFont({
  src: '../public/fonts/FuturaStdCondExtraBoldObl.woff2',
  variable: '--font-futura-cebo',
  display: 'swap',
})

export const fontVariables = [
  nunitoSans.variable,
  anotherDanger.variable,
  futuraHeavy.variable,
  futuraCondensedBold.variable,
  futuraCondensedExtraBd.variable,
  futuraCondExtraBoldObl.variable,
].join(' ')
