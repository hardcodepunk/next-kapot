// Modules
import { useState, useCallback, memo } from 'react'

// Components
import NavBar from './NavBar'
import NavBarMobile from './NavBarMobile/NavBarMobile'

// Types
import { INavbar } from './types'

const NavbarContainer = (props: INavbar) => {
  const [isToggledNavBarOpen, setIsToggledNavBarOpen] = useState(false)
  const handleViewToggledNavBar = useCallback(() => setIsToggledNavBarOpen((v) => !v), [])

  return (
    <>
      <NavBarMobile isToggledNavBarOpen={isToggledNavBarOpen} handleViewToggledNavBar={handleViewToggledNavBar} {...props} />
      <NavBar {...props} />
    </>
  )
}

export default memo(NavbarContainer)
