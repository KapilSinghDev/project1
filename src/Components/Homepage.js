import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Aboutme from './Aboutme'
import Skillstab from './Skillstab'
import Projects from './Projects'
function Homepage() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Aboutme/>
      <Skillstab/>
      <Projects/>
    </div>
  )
}

export default Homepage
