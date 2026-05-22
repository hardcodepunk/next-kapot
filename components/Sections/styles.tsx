// Modules
import Image from 'next/image'

// MUI
import { Typography, TypographyProps, styled, Link, List } from '@mui/material'
import Grid from '@mui/material/Grid'

export const Section = styled(Grid)(({ theme }) => ({
  '&&': {
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
  },
}))

export const SectionSubtitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  '&&': {
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
  },
}))

export const SectionSubtitleEmphasis = styled('span')(({ theme }) => ({
  '&&': {
    fontFamily: 'var(--font-futura-cebo), sans-serif',
    color: theme.palette.primary.main,
  },
}))

export const MailAddress = styled(Typography)<TypographyProps>(({ theme }) => ({
  '&&': {
    fontSize: '34px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '22px',
      letterSpacing: '-0.05rem',
    },
  },
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
  '&&': {
    margin: '24px 0',
    fontFamily: 'var(--font-futura-cebd), sans-serif',
    textTransform: 'lowercase',
    fontSize: '17px',
  },
}))

export const ItemMeta = styled(Typography)<TypographyProps>(({ theme }) => ({
  '&&': {
    textTransform: 'uppercase',
    fontSize: '14px',
    fontFamily: 'var(--font-futura-cebo), sans-serif',
    margin: '4px 0',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
  },
}))

export const ItemBody = styled(Typography)<TypographyProps>(() => ({
  '&&': {
    maxWidth: '400px',
  },
}))

export const TeacherTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  '&&': {
    fontSize: '70px',
    color: theme.palette.primary.main,
    marginBottom: '1rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '50px',
      letterSpacing: '-0.1rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '40px',
      letterSpacing: '-0.1rem',
    },
  },
}))

export const TeacherTag = styled(Typography)<TypographyProps>(() => ({
  '&&': {
    margin: '20px 0 10px',
    textTransform: 'uppercase',
    fontFamily: 'var(--font-futura-cebd), sans-serif',
  },
}))

export const TeacherBody = styled(Typography)<TypographyProps>(() => ({
  '&&': {
    margin: '20px 0px',
  },
}))

export const StyledList = styled(List)(({ theme }) => ({
  '&&': {
    color: theme.palette.primary.main,
    '& .MuiListItemText-primary, & .MuiListItemText-secondary': {
      fontFamily: 'var(--font-futura-cebo), sans-serif',
      fontSize: '12px',
      textTransform: 'uppercase',
      color: theme.palette.primary.main,
    },
    '& svg': {
      fill: theme.palette.primary.main,
    },
  },
}))

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

export const SectionFooter = styled('footer')(({ theme }) => ({
  '&&': {
    position: 'relative',
    background: theme.palette.primary.main,
    padding: '70px 0 140px',
  },
}))

export const StyledLinkIcon = styled(Link)(({ theme }) => ({
  '&&': {
    color: theme.palette.common.black,
    display: 'flex',
    transition: 'all 0.4s ease-out',
    margin: '6px',
  },
}))

export const SocialsGrid = styled(Grid)({
  height: '40px',
})
