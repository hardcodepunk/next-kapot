// Modules
import { RefObject } from 'react'

export interface IRoutes {
  routes: {
    anchor: string
    title: string
    linkRef: RefObject<HTMLDivElement | null>
  }[]
  handleScrollTo: (event: React.MouseEvent<HTMLAnchorElement>) => void
}
