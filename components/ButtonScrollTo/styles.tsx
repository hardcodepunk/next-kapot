// MUI
import { Link, styled } from '@mui/material'

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
  textDecoration: 'none',
  transition: 'all 0.4s ease-out',
  '& h1, & h2, & h3, & h4, & h5, & h6': {
    margin: '0 -9px',
    padding: '0 9px',
  },
  '&:hover, &:active': {
    color: theme.palette.primary.main,
  },
}))
