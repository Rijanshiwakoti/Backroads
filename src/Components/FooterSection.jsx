import React from 'react'
import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks'

const FooterSection = () => {
  return (
    <footer className="section footer">
      <PageLinks mainClass={'footer-links'} subClass={'footer-link'} />
      <SocialLinks mainClass={'footer-icons'} subClass={'footer-icon'} />
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  )
}

export default FooterSection
