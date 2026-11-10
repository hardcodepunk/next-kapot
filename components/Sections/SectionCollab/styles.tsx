// MUI
import { styled } from '@mui/material'

export const SponsorLink = styled('a')(({ theme }) => ({
  display: 'block',
  position: 'relative',
  zIndex: theme.layers.base,
  transition: 'transform 0.2s ease-out',
  '&:hover': {
    transform: 'scale(1.08)',
  },
  '&:focus-visible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: '6px',
  },
  '@media (prefers-reduced-motion: reduce)': {
    transition: 'none',
    '&:hover': {
      transform: 'none',
    },
  },
}))
