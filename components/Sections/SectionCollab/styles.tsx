// MUI
import { styled } from '@mui/material'

export const SponsorLink = styled('a')(({ theme }) => ({
  display: 'block',
  position: 'relative',
  zIndex: theme.layers.base,
  '& img': {
    filter: 'saturate(0) brightness(1.17)',
    transition: theme.transitions.create('filter', theme.motion),
  },
  '&:hover img, &:focus-visible img': {
    filter: 'saturate(1) brightness(1)',
  },
  '&:focus-visible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: '6px',
  },
}))
