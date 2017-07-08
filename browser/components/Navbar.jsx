import React from 'react'
import {Link} from 'react-router'

export default (props) => {
  return (
    <ul className='nav nav-tabs'>
      <li className='brand-name'><Link to='/home'>SARAH HERR</Link></li>
      {/* <li className='tabs'><Link to='/contact'>CONTACT</Link></li>
      <li className='tabs'><Link to='/projects'>PROJECTS</Link></li>
      <li className='tabs'><Link to='/about'>ABOUT</Link></li> */}
    </ul>
  )
}
