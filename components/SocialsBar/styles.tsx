// MUI
import { Link, styled } from '@mui/material'

export const StyledLinkIcon = styled(Link)(({ theme }) => ({
  color: theme.palette.common.black,
  display: 'flex',
  transition: 'all 0.4s ease-out',
  margin: '6px',
  '&.inverted': {
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}))
