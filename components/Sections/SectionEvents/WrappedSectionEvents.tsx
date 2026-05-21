import { RefObject } from 'react'

// Components
import SectionEvents from '.'

interface Props {
  sectionEventsRef: RefObject<HTMLDivElement | null>
}

export default function WrappedSectionEvents({ sectionEventsRef, ...props }: Props) {
  return <SectionEvents {...props} ref={sectionEventsRef} />
}
