import React from 'react'
import {Link} from 'react-router'

export default (props) => {
  return (
    <ul className='nav nav-tabs'>
      <li className='brand-name'><Link to='/kittens'>Kitten Korner</Link></li>
    </ul>
  )
}
