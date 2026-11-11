// MUI
import { createTheme } from '@mui/material/styles'

interface Layers {
  background: number
  base: number
  drawerOverlay: number
  drawer: number
  sectionDecor: number
  navBar: number
  navSplash: number
  toggleBtn: number
  navMenu: number
  logo: number
  drawerPanel: number
}

interface Motion {
  duration: number
  easing: string
}

declare module '@mui/material/styles' {
  interface Theme {
    layers: Layers
    motion: Motion
  }
  interface ThemeOptions {
    layers?: Layers
    motion?: Motion
  }
}

const layers: Layers = {
  background: -1,
  base: 1,
  drawerOverlay: 900,
  drawer: 1000,
  sectionDecor: 8000,
  navBar: 9000,
  navSplash: 9001,
  toggleBtn: 9001,
  navMenu: 9002,
  logo: 9003,
  drawerPanel: 9500,
}

const motion: Motion = {
  duration: 400,
  easing: 'ease-out',
}

const theme = createTheme({
  palette: {
    common: {
      black: '#000000',
      white: '#ffffff',
    },
    primary: {
      main: '#fee502',
    },
  },
  typography: {
    fontFamily: ['var(--font-nunito)', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontFamily: 'var(--font-another-danger), serif',
      fontSize: '100px',
      letterSpacing: '-0.2rem',
      '@media (max-width:1199.95px)': {
        fontSize: '80px',
      },
    },
    h2: {
      fontFamily: 'var(--font-futura-cebo), sans-serif',
      fontSize: '62px',
      letterSpacing: '-0.2rem',
    },
    h3: {
      fontFamily: 'var(--font-futura-cb), sans-serif',
      fontSize: '51px',
      letterSpacing: '-0.15rem',
      textTransform: 'uppercase',
    },
    h4: {
      fontFamily: 'var(--font-futura-heavy), sans-serif',
      fontSize: '22px',
      letterSpacing: '-0.04rem',
      '@media (max-width:1199.95px)': {
        fontSize: '16px',
      },
    },
    h5: {
      fontSize: '14px',
      fontWeight: '800',
      lineHeight: '1.4em',
      letterSpacing: '0.075em',
    },
    overline: {
      fontFamily: 'var(--font-futura-cebo), sans-serif',
      fontSize: '16px',
      lineHeight: '1.4em',
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
      '@media (max-width:1199.95px)': {
        fontSize: '14px',
      },
    },
  },
  layers,
  motion,
})

export default theme
