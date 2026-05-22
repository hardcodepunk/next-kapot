// MUI
import { Typography, TypographyProps, styled } from '@mui/material'
import Grid from '@mui/material/Grid'

export const Section = styled(Grid)(({ theme }) => ({
  position: 'relative',
  padding: '180px 14% 200px',
  '&.inverted': {
    background: theme.palette.common.black,
    '& h2, & h3, & h4, & h5, & p': {
      color: theme.palette.common.white,
    },
    '& .MuiSvgIcon-root': {
      color: theme.palette.common.white,
      transition: 'all 0.4s ease-out',
    },
    '& .MuiIconButton-root:hover .MuiSvgIcon-root': {
      color: theme.palette.primary.main,
    },
  },
  '&.slim': {
    padding: '70px 14% 120px',
  },
  [theme.breakpoints.down('lg')]: {
    padding: '100px 14% 140px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '55px 14% 70px',
  },
}))

export const SectionSubtitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontFamily: 'var(--font-futura-cebd), sans-serif',
  textTransform: 'uppercase',
  fontSize: '51px',
  marginTop: '90px',
  [theme.breakpoints.down('xl')]: {
    fontSize: '40px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '34px',
    letterSpacing: '-0.1rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '27px',
    letterSpacing: '-0.1rem',
  },
}))

export const SectionSubtitleEmphasis = styled('span')(({ theme }) => ({
  fontFamily: 'var(--font-futura-cebo), sans-serif',
  color: theme.palette.primary.main,
}))

export const Container = styled(Grid)({
  marginTop: '2rem',
})

export const ItemTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  textTransform: 'uppercase',
  fontSize: '40px',
  letterSpacing: '2px',
  [theme.breakpoints.down('lg')]: {
    fontSize: '40px',
  },
}))

export const ItemPrice = styled(Typography)<TypographyProps>(() => ({
  margin: '24px 0',
  fontFamily: 'var(--font-futura-cebd), sans-serif',
  textTransform: 'lowercase',
  fontSize: '17px',
}))

export const ItemMeta = styled(Typography)<TypographyProps>(({ theme }) => ({
  textTransform: 'uppercase',
  fontSize: '14px',
  fontFamily: 'var(--font-futura-cebo), sans-serif',
  margin: '4px 0',
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
  },
}))
