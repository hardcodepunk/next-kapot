// MUI
import { createTheme } from '@mui/material/styles'

let theme = createTheme()

theme = createTheme(theme, {
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
      [theme.breakpoints.down('lg')]: {
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
      [theme.breakpoints.down('lg')]: {
        fontSize: '16px',
      },
    },
    h5: {
      fontSize: '14px',
      fontWeight: '800',
      lineHeight: '1.4em',
      letterSpacing: '0.075em',
      [theme.breakpoints.down('lg')]: {
        fontSize: '12px',
      },
    },
  },
})

export default theme
