import { RefObject } from 'react'

// Components
import SectionLearn from '.'

// `forwardRef` error when dynamically importing a module in Next.js
// fix: wrap component in a custom component

interface Props {
  sectionLearnRef: RefObject<HTMLDivElement>
}

export default function WrappedSectionLearn({ sectionLearnRef, ...props }: Props) {
  return <SectionLearn {...props} ref={sectionLearnRef} />
}
