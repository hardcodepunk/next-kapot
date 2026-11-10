// MUI
import { List, Typography, TypographyProps, styled } from '@mui/material'

export const PlanBody = styled(Typography)<TypographyProps>({
  '& + &': {
    marginTop: '1em',
  },
})

export const DetailsList = styled('dl')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  margin: 0,
  [theme.breakpoints.down('md')]: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    justifyContent: 'start',
    columnGap: '32px',
    rowGap: '16px',
    marginTop: '32px',
  },
  '& dt': {
    color: theme.palette.primary.main,
    marginBottom: '4px',
  },
  '& dd': {
    ...theme.typography.h5,
    margin: 0,
    color: theme.palette.common.white,
  },
}))

export const StyledList = styled(List)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginTop: '16px',
  '& .MuiListItemText-primary, & .MuiListItemText-secondary': {
    ...theme.typography.overline,
    color: theme.palette.common.white,
  },
  '& .MuiListItem-root': {
    paddingLeft: 0,
  },
  '& .MuiListItemIcon-root': {
    minWidth: '22px',
  },
  '& svg': {
    fill: theme.palette.primary.main,
    marginLeft: '-7px',
  },
}))
