import React from 'react'
import { Link } from 'react-router'

// Need to decide what contact information to use and how to design the page (icons, words, both, etc)

export default (props) =>
  <div className='contact'>
    <h3>Connect with Me:</h3>
    <div>
      <button><Link to='www.linkedin.com/in/sarahherr'>LinkedIn</Link></button>
    </div>
    <h3>Email Me:</h3>
    <div>
      <button><Link to='email/goes/here'>Gmail</Link></button>
    </div>
    <h3>Follow Me:</h3>
    <div>
      <button><Link to='www.medium.com/@sarahdherr'>Medium</Link></button>
    </div>
    <h3>Stalk Me:</h3>
    <div>
      <button><Link to='google/maps'>New York City</Link></button>
    </div>
    <h3>Call Me:</h3>
    <div>
      <button><Link to='something?'>(563)676-7408</Link></button>
    </div>
  </div>
