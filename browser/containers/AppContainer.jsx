import React from 'react'
import Navbar from '../components/Navbar'
// import About from '../components/About'

export default (props) => {
  return (
    <div>
      <Navbar />
      {
        props.children
      }
      {/* <About /> */}
    </div>
  )
}
