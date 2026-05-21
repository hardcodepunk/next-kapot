// Modules
import { MouseEventHandler, ReactNode, memo } from 'react'

// MUI
import { ButtonProps } from '@mui/material'

// Styles
import { StyledButton } from './styles'

interface IButton extends Omit<ButtonProps, 'children' | 'onClick'> {
  label: ReactNode
  onClick?: MouseEventHandler<HTMLElement>
}

const Button = ({ label, ...rest }: IButton) => <StyledButton {...rest}>{label}</StyledButton>

export default memo(Button)
