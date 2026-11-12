// Styles
import { CallToAction, ContainerVideo, Emphasis, Video, Overlay, VideoBody, VideoCaption } from './styles'

// Types
import { IVideoDisplay } from './types'

const VideoDisplay = (props: IVideoDisplay) => {
  const { handleScrollTo, routes } = props
  return (
    <ContainerVideo>
      <Video />
      <Overlay></Overlay>
      <VideoBody>
        <VideoCaption variant="h3" component="h1">
          Events and coaching all ages.<br></br>By and for the{' '}
          <Emphasis variant="h1" component="span">
            {' '}
            inline skate{' '}
          </Emphasis>
          community.
        </VideoCaption>

        {routes.map((r, i) => {
          if (i === 0) {
            return <CallToAction key={r.title} handleScrollTo={handleScrollTo} location={'#' + r.anchor} label="Learn to skate"></CallToAction>
          }
          return null
        })}
      </VideoBody>
    </ContainerVideo>
  )
}

export default VideoDisplay
