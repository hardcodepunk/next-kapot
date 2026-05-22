// Modules
import Image from 'next/image'

// MUI
import { styled, Box, Grid } from '@mui/material'

// Types
import { IBox, IButton, IToggle } from './types'

export const Overlay = styled('div')<IBox>(({ theme, open }) => ({
  display: open ? 'block' : 'none',
  position: 'fixed',
  height: '100%',
  width: '100%',
  zIndex: theme.layers.drawerOverlay,
}))

export const ToggledNavBarWrapper = styled(Box)<IBox>(({ theme, open }) => ({
  width: open ? '280px' : '0px',
  opacity: open ? 1 : 0,
  background: theme.palette.common.black,
  flexWrap: 'nowrap',
  height: '100%',
  paddingTop: '90px',
  paddingBottom: '28px',
  paddingRight: open ? '24px' : '0px',
  paddingLeft: open ? '24px' : '0px',
  position: 'fixed',
  right: 0,
  top: 0,
  alignItems: 'center',
  zIndex: theme.layers.drawer,
  transition: '0.2s width ease-out, 0.2s padding-left ease-out, 0.2s padding-right ease-out',
  overflowY: 'scroll',
}))

export const ToggleBtn = styled('button')<IButton>(({ theme, open }) => ({
  position: 'fixed',
  right: '40px',
  top: '30px',
  width: '40px',
  height: '40px',
  zIndex: theme.layers.toggleBtn,
  cursor: 'pointer',
  border: 0,
  background: 'transparent',
  padding: 0,
  color: 'inherit',
  font: 'inherit',
  '& .top, & .middle, & .bottom': {
    display: 'block',
    position: 'absolute',
    left: 0,
    top: '50%',
    width: '100%',
    margin: '-2px 0 0',
    transformOrigin: '50%',
    transition: 'all 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955)',
  },
  '& .top': {
    transform: open ? 'rotate(-45deg)' : 'translate(0, -12px)',
  },
  '& .middle': {
    opacity: open ? 0 : 1,
  },
  '& .bottom': {
    transform: open ? 'rotate(45deg)' : 'translate(0, 12px)',
  },
}))

export const ToggleBtnTopStroke = styled(Image)({
  height: 'auto',
})

export const ToggleBtnMiddleStroke = styled(Image)({
  height: 'auto',
})

export const ToggleBtnBottomStroke = styled(Image)({
  height: 'auto',
})

export const Content = styled(Grid)<IToggle>(({ open }) => ({
  transition: '0.2s opacity ease-out',
  transitionDelay: '100ms',
  opacity: open ? 1 : 0,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
}))
