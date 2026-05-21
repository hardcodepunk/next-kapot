import { RefObject } from 'react'

// Components
import Footer from '.'

// `forwardRef` error when dynamically importing a module in Next.js
// fix: wrap component in a custom component

interface Props {
  sectionFooterRef: RefObject<HTMLDivElement | null>
}

export default function WrappedSectionFooter({ sectionFooterRef, ...props }: Props) {
  return <Footer {...props} ref={sectionFooterRef} />
}
