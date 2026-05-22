// Modules
import { memo } from 'react'

// MUI
import { Grid } from '@mui/material'

// Components
import Button from './../../../Button'

// Styles
import { ItemMeta, ItemPrice, ItemTitle } from '../../styles'
import { ItemBody } from './styles'

// Types
import { IEvent } from './types'

const Events = (props: IEvent) => {
  const { title, date, price, location, description, disabledButton, buttonLink, buttonLabel } = props
  return (
    <Grid size={{ md: 6, lg: 6 }}>
      <ItemTitle variant="h1" component="h2">
        {title}
      </ItemTitle>
      <ItemMeta as="h3" variant="h4">
        {location}
        <br />
        {date}
      </ItemMeta>
      <ItemPrice variant="h4">{price}</ItemPrice>
      <ItemBody variant="h5">{description}</ItemBody>
      <Button disabled={disabledButton} variant="contained" size="large" href={buttonLink} disableElevation label={buttonLabel} />
    </Grid>
  )
}

export default memo(Events)
