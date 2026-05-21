// Modules
import { useEffect, useMemo, useRef } from 'react'
import { useRouter } from 'next/router'

// Components
import NavBar from '../components/NavBar'
import VideoDisplay from '../components/VideoDisplay'
import SectionLearn from '../components/Sections/SectionLearn'
import SectionEvents from '../components/Sections/SectionEvents'
import SectionCollab from '../components/Sections/SectionCollab'
import Footer from '../components/Sections/SectionFooter'

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
    const href = event.currentTarget.href
    event.preventDefault()

    routes?.map((el) => {
      if (href.includes(el?.anchor)) {
        el?.linkRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  }

  useEffect(() => {
    if (path?.length > 2) {
      routes?.map((el) => {
        router.asPath.includes(el?.anchor) && el?.linkRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }, [path, router.asPath])

  return (
    <>
      <NavBar routes={routes} handleScrollTo={handleScrollTo} />
      <VideoDisplay routes={routes} handleScrollTo={handleScrollTo} />
      <SectionLearn ref={routes[0].linkRef} />
      <SectionEvents ref={routes[1].linkRef} />
      <SectionCollab />
      <Footer ref={routes[2].linkRef} />
    </>
  )
}

export default Home
