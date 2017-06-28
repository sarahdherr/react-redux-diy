import React from 'react'

import Summary from './About/Summary'
import Hobbies from './About/Hobbies'
import Experience from './About/Experience'
import DownloadResume from './About/DownloadResume'

export default (props) =>
  <div>
    <Summary />
    <div className='clearfix separating' />
    <Hobbies />
    <div className='clearfix' />
    <Experience />
    <div className='clearfix' />
    <DownloadResume />
  </div>
