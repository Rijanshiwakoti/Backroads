import { socialLinks } from '../data'
import React from 'react'

const SocialLinks = ({ mainClass, subClass }) => {
  return (
    <ul className={mainClass}>
      {socialLinks.map((link) => {
        const { id, herf, name } = link
        return (
          <li key={id}>
            <a href={herf} target="_blank" rel="noreferrer" className={subClass}>
              <i className={name}></i>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialLinks
