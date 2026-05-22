import { RefObject } from 'react'

// Components
import SectionLearn from '.'

/**
 * DO NOT REMOVE — load-bearing workaround.
 *
 * `pages/index.tsx` imports section components via `dynamic({ ssr: false })`.
 * Without this layer of indirection the page renders unstyled in production
 * (MUI emotion cache + Next.js dynamic + forwardRef interaction we never fully
 * diagnosed). We tried collapsing this back to a direct static import twice
 * already — both times it broke styling silently in the browser while SSR
 * curl probes looked fine.
 *
 * If you're tempted to delete this file: don't, until you have visual
 * confirmation in a real browser across the whole page.
 */
interface Props {
  sectionLearnRef: RefObject<HTMLDivElement | null>
}

export default function WrappedSectionLearn({ sectionLearnRef, ...props }: Props) {
  return <SectionLearn {...props} ref={sectionLearnRef} />
}
