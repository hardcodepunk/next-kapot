// Components
import SectionEvents from '.'

export default function WrappedSectionEvents({ sectionEventsRef, ...props }) {
  return <SectionEvents {...props} ref={sectionEventsRef} />
}
