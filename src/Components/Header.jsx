import React from 'react'
import { pageLinks, socialLinks } from '../data'
import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks'

const Header = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src="/images/logo.svg" className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <NavLinks />
        <SocialLinks mainClass={'nav-icons'} subClass={'nav-icon'} />
      </div>
    </nav>
  )
}

const NavLinks = () => {
  return (
    <React.Fragment>
      <PageLinks
        mainClass={'nav-links'}
        subClass={'nav-link'}
        mainID={'nav-links'}
      />
    </React.Fragment>
  )
}

export default Header
