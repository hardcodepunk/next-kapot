// Components
import Logo from '../Icons/Logo'

// Media
import LogoSkateVlaanderen from './../../public/images/illustrations/sponsor__skate-vlaanderen.svg'

// Styles
import { CallToAction, ContainerVideo, Emphasis, Video, Overlay, PartnerBadge, VideoBody, VideoCaption } from './styles'
import { LogoLink } from '../Icons/Logo/styles'

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
      <PartnerBadge>
        <LogoLink href="https://www.skate.vlaanderen/" target="_blank" rel="noopener">
          <Logo src={LogoSkateVlaanderen} height={40} alt="Skate Vlaanderen (opens in a new tab)" />
        </LogoLink>
      </PartnerBadge>
    </ContainerVideo>
  )
}

export default VideoDisplay
