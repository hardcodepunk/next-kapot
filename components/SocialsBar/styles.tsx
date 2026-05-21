// MUI
import { Link, Theme, styled } from '@mui/material'

const baseStyles = ({ theme }: { theme: Theme }) => `
  color: ${theme.palette.common.black};
  display: flex;
  transition: all 0.4s ease-out;
  margin: 6px;
`

const invertedStyles = ({ theme }: { theme: Theme }) => `
  &.inverted {
    color: ${theme.palette.common.white};

    :hover {
      color: ${theme.palette.primary.main};
    }
  }
`

export const StyledLinkIcon = styled(Link)(
  ({ theme }) => `
    ${baseStyles({ theme })}
    ${invertedStyles({ theme })}
  `,
)
