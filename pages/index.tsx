// Modules
import { useEffect, useMemo, useRef } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

// Components
//
// Sections are loaded via dynamic({ ssr: false }) and go through Wrapped*
// shim files that turn the ref into a regular prop. This is a load-bearing
// workaround for a silent styling break in the browser when forwardRef
// section components are SSR-rendered with the MUI emotion cache.
// We tried collapsing this to static imports + direct refs twice — both
// times it broke production styling while SSR curl probes looked fine.
// Do not flatten this without thorough cross-browser visual verification.
const NavBar = dynamic(() => import('../components/NavBar'), { ssr: false })
import VideoDisplay from '../components/VideoDisplay'

const SectionLearn = dynamic(() => import('../components/Sections/SectionLearn/WrappedSectionLearn'), { ssr: false })
const SectionEvents = dynamic(() => import('../components/Sections/SectionEvents/WrappedSectionEvents'), { ssr: false })
const SectionCollab = dynamic(() => import('../components/Sections/SectionCollab'), { ssr: false })
const Footer = dynamic(() => import('../components/Sections/SectionFooter/WrappedSectionFooter'), { ssr: false })

const Home = () => {
  const router = useRouter()
  const path = router.asPath

  const learnRef = useRef<HTMLDivElement>(null)
  const eventsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const routes = useMemo(
    () => [
      { anchor: 'learn', title: 'Learn', linkRef: learnRef },
      { anchor: 'events', title: 'Events', linkRef: eventsRef },
      { anchor: 'contact', title: 'Contact', linkRef: contactRef },
    ],
    [],
  )

  const handleScrollTo = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const href = event.currentTarget.href
    const route = routes.find((r) => href.includes(r.anchor))
    route?.linkRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    if (!path.includes('#')) return
    const route = routes.find((r) => path.includes(r.anchor))
    route?.linkRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [path, routes])

  return (
    <>
      <NavBar routes={routes} handleScrollTo={handleScrollTo} />
      <VideoDisplay routes={routes} handleScrollTo={handleScrollTo} />
      <SectionLearn sectionLearnRef={routes[0].linkRef} />
      <SectionEvents sectionEventsRef={routes[1].linkRef} />
      <SectionCollab />
      <Footer sectionFooterRef={routes[2].linkRef} />
    </>
  )
}

export default Home
