import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Footer from './Footer'

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Footer/>
    </div>
  )
}

export default Home