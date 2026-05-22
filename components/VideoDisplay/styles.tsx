// MUI
import { Typography, TypographyProps, styled } from '@mui/material'

// Components
import ButtonCtaScrollTo from '../ButtonScrollTo/ButtonCtaScrollTo'
import VideoPlayer from './VideoPlayer'

export const ContainerVideo = styled('div')({
  position: 'relative',
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
})

export const Video = styled(VideoPlayer)({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
})

export const Overlay = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
})

export const VideoBody = styled('div')(({ theme }) => ({
  '&&': {
    position: 'absolute',
    right: '7%',
    bottom: '10%',
    zIndex: theme.layers.base,
    maxWidth: '600px',
    [theme.breakpoints.down('lg')]: {
      right: 'auto',
      left: '7%',
      bottom: '20%',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '520px',
    },
  },
}))

export const VideoCaption = styled(Typography)<TypographyProps>(({ theme }) => ({
  '&&': {
    color: '#fff',
    transition: 'opacity 0.4s ease-out',
    fontSize: '42px',
    lineHeight: '52px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px',
      letterSpacing: '-0.1rem',
      lineHeight: '42px',
    },
  },
}))

export const CallToAction = styled(ButtonCtaScrollTo)({})

export const Emphasis = styled(Typography)<TypographyProps>(({ theme }) => ({
  '&&': {
    fontSize: '47px',
    letterSpacing: '2px',
    verticalAlign: 'bottom',
    color: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      fontSize: '37px',
    },
  },
}))
