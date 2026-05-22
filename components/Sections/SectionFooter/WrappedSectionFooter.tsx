import { RefObject } from 'react'

// Components
import Footer from '.'

/**
 * DO NOT REMOVE — see WrappedSectionLearn for the full rationale.
 * Short version: dynamic({ ssr: false }) + forwardRef + MUI emotion breaks
 * silently in the browser when this wrapper is bypassed.
 */
interface Props {
  sectionFooterRef: RefObject<HTMLDivElement | null>
}

export default function WrappedSectionFooter({ sectionFooterRef, ...props }: Props) {
  return <Footer {...props} ref={sectionFooterRef} />
}
