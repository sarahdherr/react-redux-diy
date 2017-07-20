import React from 'react'
import Navbar from '../components/Navbar'
// import Kitten from '../components/Kitten'

export default (props) => {
  return (
    <div>
      <Navbar />
      {
        props.children
      }
    </div>
  )
}
