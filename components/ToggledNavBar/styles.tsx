// Modules
import Image from 'next/image'

// MUI
import { styled, Box, Grid } from '@mui/material'

// Types
import { IBox, IButton, IToggle } from './types'

export const Overlay = styled('div')<IBox>(
  ({ theme, open }) => `
    display: ${open ? 'block' : 'none'};
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: ${theme.layers.drawerOverlay};
  `,
)

export const ToggledNavBarWrapper = styled(Box)<IBox>(
  ({ theme, open }) => `
    width: ${open ? 280 : 0}px;
    opacity: ${open ? 1 : 0};
    background: ${theme.palette.common.black};
    flex-wrap: nowrap;
    height: 100%;
    padding-top: 90px;
    padding-bottom: 28px;
    padding-right: ${open ? 24 : 0}px; 
    padding-left: ${open ? 24 : 0}px;
    position: fixed; 
    right: 0;
    top: 0;
    align-items: center;
    z-index: ${theme.layers.drawer};
    transition: 0.2s width ease-out, 0.2s padding-left ease-out, 0.2s padding-right ease-out;
    overflow-y: scroll;
  `,
)

export const ToggleBtn = styled('button')<IButton>(
  ({ theme, open }) => `
  && {
    position: fixed;
    right: 40px;
    top: 30px;
    width: 40px;
    height: 40px;
    z-index: ${theme.layers.toggleBtn};
    cursor: pointer;
    border: 0;
    background: transparent;
    padding: 0;
    color: inherit;
    font: inherit;

    .top, .middle, .bottom {
      display: block;
      position: absolute;
      left: 0;
      top: 50%;
      width: 100%;
      margin: -2px 0 0;
      transform-origin: 50%;
      transition: all 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }

    .top {
      transform: translate(0, -12px);
    }

    .bottom {
      transform: translate(0, 12px);
    }

    .top {
      transform: ${open ? 'rotate(-45deg)' : 'rotate(0, -12px'};
    }

    .middle {
      opacity: ${open ? 0 : 1};
    }

    .bottom {
      transform: ${open ? 'rotate(45deg)' : 'translate(0, 12px)'};
    }
  }
`,
)

export const ToggleBtnTopStroke = styled(Image)`
  height: auto;
`

export const ToggleBtnMiddleStroke = styled(Image)`
  height: auto;
`

export const ToggleBtnBottomStroke = styled(Image)`
  height: auto;
`

export const Content = styled(Grid)<IToggle>(
  ({ open }) => `
    transition: 0.2s opacity ease-out;
    transition-delay: 100ms;
    opacity: ${open ? 1 : 0};
    display: flex;
    flex-direction: column;
    height: 100%;
  `,
)
