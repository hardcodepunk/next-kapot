// Modules
import Image from 'next/image'

// MUI
import { styled } from '@mui/material'

// Media
import LogoKapot from '../Icons/Logo/LogoKapot'

export const StyledNav = styled('nav')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: theme.palette.common.white,
  width: '100%',
  position: 'absolute',
  zIndex: theme.layers.navBar,
  padding: '45px 7%',
}))

export const StyledSplashIllustration = styled(Image)(({ theme }) => ({
  position: 'absolute',
  left: 0,
  top: '90px',
  zIndex: theme.layers.navSplash,
  [theme.breakpoints.down('xl')]: {
    top: '70px',
    width: '430px',
  },
  [theme.breakpoints.down('lg')]: {
    top: '40px',
  },
  [theme.breakpoints.down('md')]: {
    top: '35px',
    width: '350px',
  },
  [theme.breakpoints.down('sm')]: {
    top: '30px',
    width: '80%',
  },
}))

export const Menu = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'flex-end',
  '& > * + *': {
    marginLeft: '70px',
  },
  position: 'relative',
  zIndex: theme.layers.navMenu,
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}))

export const MenuItem = styled('li')({
  fontSize: '32px',
  textTransform: 'uppercase',
})

export const StyledLogo = styled(LogoKapot)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    height: '135px',
  },
}))
