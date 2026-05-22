// Modules
import Image from 'next/image'

// MUI
import { styled } from '@mui/material'

export const StyledSplashIllustrationBottomVariation1 = styled(Image)(({ theme }) => ({
  position: 'absolute',
  left: 0,
  top: '7%',
  zIndex: theme.layers.background,
  [theme.breakpoints.down('lg')]: {
    width: '850px',
    top: 0,
  },
  [theme.breakpoints.down('md')]: {
    width: '570px',
  },
  [theme.breakpoints.down('sm')]: {
    top: '-4%',
    width: '90%',
  },
}))
