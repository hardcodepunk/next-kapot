// MUI
import { Typography, TypographyProps, styled } from '@mui/material'

// Components
import ButtonCtaScrollTo from '../ButtonScrollTo/ButtonCtaScrollTo'
import VideoPlayer from './VideoPlayer'

export const ContainerVideo = styled('div')`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

export const Video = styled(VideoPlayer)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

export const Overlay = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`

export const VideoBody = styled('div')(
  ({ theme }) => `
  && {
    position: absolute;
    right: 7%;
    bottom: 10%;
    z-index: ${theme.layers.base};
    max-width: 600px;

    ${theme.breakpoints.down('lg')} {
      right: auto;
      left: 7%;
      bottom: 20%;
    }

    ${theme.breakpoints.down('sm')} {
      max-width: 520px;
    }
  }
  `,
)

export const VideoCaption = styled(Typography)<TypographyProps>(
  ({ theme }) => `
  && {
    color: #fff;
    transition: opacity 0.4s ease-out;
    font-size: 42px;
    line-height: 52px;

    ${theme.breakpoints.down('sm')} {
      font-size: 30px;
      letter-spacing: -0.1rem;
      line-height: 42px;
    }
  }
  `,
)

export const CallToAction = styled(ButtonCtaScrollTo)(({ theme }) => ``)

export const Emphasis = styled(Typography)<TypographyProps>(
  ({ theme }) => `
      && {
        font-size: 47px;
        letter-spacing: 2px;
        vertical-align: bottom;
        color: ${theme.palette.primary.main};

        ${theme.breakpoints.down('sm')} {
          font-size: 37px;
        }
      }
    `,
)
