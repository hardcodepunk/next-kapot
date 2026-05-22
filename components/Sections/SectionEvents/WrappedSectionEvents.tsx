import { RefObject } from 'react'

// Components
import SectionEvents from '.'

/**
 * DO NOT REMOVE — see WrappedSectionLearn for the full rationale.
 * Short version: dynamic({ ssr: false }) + forwardRef + MUI emotion breaks
 * silently in the browser when this wrapper is bypassed.
 */
interface Props {
  sectionEventsRef: RefObject<HTMLDivElement | null>
}

export default function WrappedSectionEvents({ sectionEventsRef, ...props }: Props) {
  return <SectionEvents {...props} ref={sectionEventsRef} />
}
