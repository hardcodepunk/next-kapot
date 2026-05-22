// MUI
import { Typography, TypographyProps, styled } from '@mui/material'

export const ItemBody = styled(Typography)<TypographyProps>(() => ({
  '&&': {
    maxWidth: '400px',
  },
}))
