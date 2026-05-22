// MUI
import { Typography, TypographyProps, styled } from '@mui/material'

export const SectionFooter = styled('footer')(({ theme }) => ({
  '&&': {
    position: 'relative',
    background: theme.palette.primary.main,
    padding: '70px 0 140px',
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
