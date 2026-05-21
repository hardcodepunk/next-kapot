// MUI
import { styled } from '@mui/material'

export const ContainerLogo = styled('div')(
  ({ theme }) => `
    position: relative;
    z-index: ${theme.layers.logo};
  `,
)
