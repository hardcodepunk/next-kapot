// Components
import Events from './Events'

// Constants
import { constantsEvents } from './constantsEvents'

// Styles
import { Container } from '../../styles'

const ContainerEvents = () => {
  return (
    <Container container spacing={7}>
      {constantsEvents.map((event) => (
        <Events key={event.title} {...event} />
      ))}
    </Container>
  )
}

export default ContainerEvents
