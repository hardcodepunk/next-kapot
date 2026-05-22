// Modules
import Link from 'next/link'
import Image from 'next/image'

// MUI
import { styled } from '@mui/material'
import Grid from '@mui/material/Grid'

export const ToggledNavBarWrapper = styled(Grid)(({ theme }) => ({
  display: 'none',
  position: 'absolute',
  zIndex: theme.layers.drawerPanel,
  [theme.breakpoints.down('lg')]: {
    display: 'flex',
  },
}))

export const Block = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
})

export const LinkButton = styled(Link)(({ theme }) => ({
  background: 'transparent',
  color: theme.palette.common.white,
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '22px',
  marginBottom: '32px',
  textDecoration: 'none',
  transition: 'color 0.2s ease-out',
  display: 'flex',
  '&:first-of-type': {
    marginTop: '40px',
  },
  '&:hover': {
    color: theme.palette.primary.main,
  },
}))

export const SocialsBlock = styled(Grid)({
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 'auto',
  paddingTop: '12px',
})

export const StyledSplashIllustration = styled(Image)(({ theme }) => ({
  position: 'absolute',
  left: 0,
  bottom: '25%',
  zIndex: theme.layers.background,
}))
