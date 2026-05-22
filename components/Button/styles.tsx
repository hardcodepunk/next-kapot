// MUI
import { Button as MuiButton, styled } from '@mui/material'

export const StyledButton = styled(MuiButton)(({ theme, disabled }) => ({
  '&&': {
    background: theme.palette.common.black,
    padding: '8px 20px',
    textTransform: 'uppercase',
    fontFamily: theme.typography.h2.fontFamily,
    fontSize: '20px',
    color: theme.palette.common.white,
    transition: 'all 0.4s ease-out',
    borderRadius: 0,
    letterSpacing: theme.typography.h5.letterSpacing,
    marginTop: '34px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
    '&.inverted': {
      color: theme.palette.common.black,
      background: theme.palette.common.white,
    },
    '&:hover, &:active': {
      color: theme.palette.common.black,
      background: theme.palette.primary.main,
    },
    ...(disabled && { opacity: 0.3 }),
  },
}))
