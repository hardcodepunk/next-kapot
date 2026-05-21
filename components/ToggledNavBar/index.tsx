// Modules
import { useEffect } from 'react'

// Media
import MobileMenuStrokeIllustration from './../../public/images/illustrations/paint-mobile-menu-stroke.svg'

// Styles
import { Content, ToggledNavBarWrapper, ToggleBtn, Overlay, ToggleBtnMiddleStroke, ToggleBtnTopStroke, ToggleBtnBottomStroke } from './styles'

// Types
import { IToggledNavBar } from './types'

const PANEL_ID = 'mobile-nav-panel'

const ToggledNavBar = (props: IToggledNavBar) => {
  const { children, isToggledNavBarOpen, handleViewToggledNavBar } = props

  useEffect(() => {
    if (!isToggledNavBarOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') handleViewToggledNavBar()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isToggledNavBarOpen, handleViewToggledNavBar])

  return (
    <>
      <ToggleBtn
        type="button"
        open={isToggledNavBarOpen}
        onClick={handleViewToggledNavBar}
        aria-label={isToggledNavBarOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isToggledNavBarOpen}
        aria-controls={PANEL_ID}
      >
        <ToggleBtnTopStroke className="top" src={MobileMenuStrokeIllustration} alt="" width={50} />
        <ToggleBtnMiddleStroke className="middle" src={MobileMenuStrokeIllustration} alt="" width={50} />
        <ToggleBtnBottomStroke className="bottom" src={MobileMenuStrokeIllustration} alt="" width={50} />
      </ToggleBtn>
      <Overlay open={isToggledNavBarOpen} onClick={handleViewToggledNavBar} aria-hidden="true" />
      <ToggledNavBarWrapper id={PANEL_ID} open={isToggledNavBarOpen}>
        <Content open={isToggledNavBarOpen}>{children}</Content>
      </ToggledNavBarWrapper>
    </>
  )
}

export default ToggledNavBar
