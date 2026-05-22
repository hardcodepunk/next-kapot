// Modules
import Image from 'next/image'

// MUI
import { styled } from '@mui/material'

export const StyledSplashIllustrationTop = styled(Image)(({ theme }) => ({
  position: 'absolute',
  top: '-5%',
  right: 0,
  zIndex: theme.layers.sectionDecor,
  height: 'auto',
  [theme.breakpoints.down('sm')]: {
    top: '-7%',
    width: '50%',
  },
}))

export const StyledSplashIllustrationBottom = styled(Image)(({ theme }) => ({
  position: 'absolute',
  left: 0,
  bottom: '20%',
  zIndex: theme.layers.sectionDecor,
  height: 'auto',
  [theme.breakpoints.down('lg')]: {
    width: '100px',
  },
  [theme.breakpoints.down('md')]: {
    width: '70px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '50px',
  },
}))
