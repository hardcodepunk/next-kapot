// Modules
import { memo } from 'react'

// MUI
import { Grid } from '@mui/material'
import { Instagram } from '@mui/icons-material'

// Styles
import { ItemMeta } from '../../styles'
import { SocialsGrid, TeacherBody, TeacherTitle } from './styles'

// Types
import { ITeacher } from './types'
import IconLink from '../../../Icons/IconLink'

const Teacher = (props: ITeacher) => {
  const { name, instagramLink, timeSkating, age, description } = props
  return (
    <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
      <TeacherTitle variant="h1" component="h2">
        {name}
      </TeacherTitle>
      <Grid container>
        <SocialsGrid>
          {instagramLink && <IconLink ariaLabel="Check out the teacher's Instagram" link={instagramLink} icon={<Instagram />} />}
        </SocialsGrid>
      </Grid>
      <ItemMeta as="h3" variant="h4">
        Skating for {timeSkating} years
      </ItemMeta>
      <ItemMeta variant="h4">{age} years old</ItemMeta>
      <TeacherBody variant="h5">{description}</TeacherBody>
    </Grid>
  )
}

export default memo(Teacher)
