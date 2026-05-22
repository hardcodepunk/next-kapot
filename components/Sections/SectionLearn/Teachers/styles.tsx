// MUI
import { Typography, TypographyProps, styled } from '@mui/material'
import Grid from '@mui/material/Grid'

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

export const TeacherBody = styled(Typography)<TypographyProps>(() => ({
  '&&': {
    margin: '20px 0px',
  },
}))

export const SocialsGrid = styled(Grid)({
  height: '40px',
})
