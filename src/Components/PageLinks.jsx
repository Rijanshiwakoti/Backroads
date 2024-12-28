import { pageLinks } from '../data'
import React from 'react'

const PageLinks = ({ mainClass, subClass, mainID }) => {
  return (
    <ul className={mainClass} id={mainID}>
      {pageLinks.map((link) => {
        const { id, herf, name } = link
        return (
          <li key={id}>
            <a href={herf} className={subClass}>
              {name}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default PageLinks
