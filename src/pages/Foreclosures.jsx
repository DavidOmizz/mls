import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Section1 from './Section1'
import Foreclosures1 from '../components/Foreclosures1'
import Footer from './Footer'
import Foreclosures2 from '../components/Foreclosures2'

function Foreclosures() {
  return (
    <div>
      <Navbar/> 
      <Foreclosures1/>
      <Foreclosures2/>
      <Footer/>
    </div>
  )
}

export default Foreclosures