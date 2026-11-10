// Modules
import { memo } from 'react'

// MUI
import { Grid, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { Bolt } from '@mui/icons-material'

// Components
import Button from '../../../Button'

// Styles
import { ItemPrice, ItemTitle } from '../../styles'
import { DetailsList, PlanBody, StyledList } from './styles'

// Types
import { IPlan } from './types'

const Plans = (props: IPlan) => {
  const { title, price, description, list, details, buttonLink, buttonLabel } = props
  return (
    <Grid size={12}>
      <Grid container columnSpacing={8}>
        <Grid size={{ xs: 12, md: 7, xl: 8 }}>
          <ItemTitle variant="h1" component="h2">
            {title}
          </ItemTitle>
          <ItemPrice as="h3" variant="h4">
            <Typography component="span" variant="inherit" color="primary">
              {price}
            </Typography>
          </ItemPrice>
          {description.map((paragraph) => (
            <PlanBody key={paragraph} variant="h5" component="p">
              {paragraph}
            </PlanBody>
          ))}
          <StyledList dense>
            {list.map((item) => (
              <ListItem key={item}>
                <ListItemIcon>
                  <Bolt />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </StyledList>
        </Grid>
        <Grid size={{ xs: 12, md: 5, xl: 4 }}>
          {details && (
            <DetailsList>
              {details.map(({ label, value }) => (
                <div key={label}>
                  <Typography component="dt" variant="overline">
                    {label}
                  </Typography>
                  {value.map((line) => (
                    <dd key={line}>{line}</dd>
                  ))}
                </div>
              ))}
            </DetailsList>
          )}
          <Button
            href={buttonLink}
            variant="contained"
            size="large"
            className="inverted"
            disableElevation
            label={buttonLabel}
            sx={{ width: { xs: '100%', md: 'auto' } }}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default memo(Plans)
