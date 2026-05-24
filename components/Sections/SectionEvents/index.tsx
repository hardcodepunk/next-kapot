// Modules
import { Ref } from 'react'

// Components
import ContainerEvents from './Events'

// MUI
import { Typography } from '@mui/material'

// Media
import SplashIllustrationBottomVariation1 from './../../../public/images/illustrations/paint-splash-4.svg'

// Styles
import { Section, SectionSubtitle, SectionSubtitleEmphasis } from '../styles'
import { StyledSplashIllustrationBottomVariation1 } from './styles'

interface SectionEventsProps {
  ref?: Ref<HTMLDivElement>
}

const SectionEvents = ({ ref }: SectionEventsProps) => (
  <Section ref={ref}>
    <Typography variant="h1" component="h2">
      Events
    </Typography>
    <SectionSubtitle variant="h2">
      Shouldering <SectionSubtitleEmphasis>Kapot Contest</SectionSubtitleEmphasis> <br></br>
      and other internationally recognised events.
    </SectionSubtitle>
    <ContainerEvents />
    <StyledSplashIllustrationBottomVariation1 src={SplashIllustrationBottomVariation1} alt="" width={950} />
  </Section>
)

export default SectionEvents
