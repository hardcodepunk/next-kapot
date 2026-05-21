// MUI
import { Grid } from '@mui/material'

// Styles
import { StyledLinkIcon } from './styles'

// Constants
import { constantsSocialMedia } from './constantsSocialMedia'
import { ISocialsBar } from './types'

const SocialsBar = (props: ISocialsBar) => {
  const { className } = props
  return (
    <Grid size={12}>
      <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
        {constantsSocialMedia.map((route) => (
          <StyledLinkIcon aria-label={route.ariaLabel} className={className} key={route.title} href={route.link} target="_blank" rel="noopener">
            {route.icon}
          </StyledLinkIcon>
        ))}
      </Grid>
    </Grid>
  )
}

export default SocialsBar
