// Modules
import { forwardRef } from 'react'

// MUI
import { Grid, Typography } from '@mui/material'

// Components
import SocialsBar from '../../SocialsBar'
import LogoKapot from '../../Icons/Logo/LogoKapot'

// Styles
import { MailAddress, SectionFooter } from './../styles'

const Footer = forwardRef<HTMLDivElement>(function Footer(_, ref) {
  return (
    <SectionFooter ref={ref}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Grid container sx={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Grid>
              <LogoKapot />
            </Grid>
            <Grid>
              <Typography variant="h1" component="h2">Kapot</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={12}>
          <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <MailAddress variant="h3" component="span">
              kapot@echtalleskapot.be
            </MailAddress>
          </Grid>
        </Grid>
        <SocialsBar />
      </Grid>
    </SectionFooter>
  )
})

export default Footer
