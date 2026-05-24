// Modules
import { Ref } from 'react'

// MUI
import Typography from '@mui/material/Typography'

// Media
import SplashIllustrationTop from './../../../public/images/illustrations/paint-splash-2.svg'
import SplashIllustrationBottom from './../../../public/images/illustrations/paint-splash-3.svg'

// Styles
import { Section, SectionSubtitle, SectionSubtitleEmphasis } from '../styles'
import { StyledSplashIllustrationBottom, StyledSplashIllustrationTop } from './styles'
import ContainerPlans from './Plans'
import ContainerTeachers from './Teachers'

interface SectionLearnProps {
  ref?: Ref<HTMLDivElement>
}

const SectionLearn = ({ ref }: SectionLearnProps) => (
  <Section className="inverted" ref={ref}>
    <Typography variant="h1" component="h2">
      Learn
    </Typography>
    <SectionSubtitle variant="h2">
      Always wanted to improve at inline skating?<br></br>
      <SectionSubtitleEmphasis>Enroll now.</SectionSubtitleEmphasis>
    </SectionSubtitle>
    <ContainerPlans />
    <SectionSubtitle variant="h2">
      Introducing to you,<br></br>
      <SectionSubtitleEmphasis>the teachers.</SectionSubtitleEmphasis>
    </SectionSubtitle>
    <ContainerTeachers />
    <StyledSplashIllustrationTop src={SplashIllustrationTop} alt="" width={299} />
    <StyledSplashIllustrationBottom src={SplashIllustrationBottom} alt="" width={150} />
  </Section>
)

export default SectionLearn
