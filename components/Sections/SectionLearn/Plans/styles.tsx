// MUI
import { List, styled } from '@mui/material'

export const StyledList = styled(List)(({ theme }) => ({
  '&&': {
    color: theme.palette.primary.main,
    '& .MuiListItemText-primary, & .MuiListItemText-secondary': {
      fontFamily: 'var(--font-futura-cebo), sans-serif',
      fontSize: '12px',
      textTransform: 'uppercase',
      color: theme.palette.primary.main,
    },
    '& svg': {
      fill: theme.palette.primary.main,
    },
  },
}))
