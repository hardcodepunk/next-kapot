// Modules
import { ButtonHTMLAttributes, ReactNode } from 'react'

// MUI
import { BoxProps } from '@mui/material'

export interface IToggledNavBar {
  children: ReactNode
  isToggledNavBarOpen: boolean
  handleViewToggledNavBar: () => void
}

export interface IToggle {
  open: boolean
}

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>, IToggle {}

export interface IBox extends BoxProps, IToggle {}
