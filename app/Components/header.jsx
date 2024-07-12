'use client'
import { useState } from 'react'
import React from 'react'
import Headlines from './headlines'
import Navbar from './navbar'
import ScrollPercent from './ScrollPercent'
import ThinkIndiaLogo from './ThinkIndiaLogo'
import Hero_section from './Hero_section'
import ThinkIndiaInfo from './AboutThinkIndia'
import Team from './Team'
import Contact from './contact'
import Footer from './footer'
function Header() {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [headlinesHeight, setHeadlinesHeight] = useState(0);
  const total_height1=navbarHeight+headlinesHeight;
  return (
    <div className='w-full display-block block sticky top-0'>
      <Headlines setHeadlinesHeight={setHeadlinesHeight} />
      <ScrollPercent />
      <Navbar setNavbarHeight={setNavbarHeight} />
      <ThinkIndiaLogo navbarHeight={navbarHeight} headlinesHeight={headlinesHeight} />
      <Hero_section total_height={total_height1} />
      <ThinkIndiaInfo />
      <Team />
      <Contact /> 
      <Footer />
      
    </div>
  )
}

export default Header
