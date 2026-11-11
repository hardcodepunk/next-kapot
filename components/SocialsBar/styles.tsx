// MUI
import { Link, styled } from '@mui/material'

export const StyledLinkIcon = styled(Link)(({ theme }) => ({
  color: theme.palette.common.black,
  display: 'flex',
  transition: theme.transitions.create('all', theme.motion),
  margin: '6px',
  '&.inverted': {
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}))
