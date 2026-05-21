import type { StaticImport } from 'next/dist/shared/lib/get-img-props'

export interface ILogo {
  src: string | StaticImport
  alt: string
  height?: number
  width?: number
}
