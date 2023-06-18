import React from 'react'
import logo from '../images/mls_logo.png'
import '../css/style.css'

function Navbar() {
  return (
    <div className='containers'>
        <div className='logo'>
            <a href={'/'}><img src={logo} alt="" /></a>
        </div>
        <div className='nav-list'>
            <ul>
                <li><a href={'foreclosures'}>Foreclosures</a></li>
                <li><a href={'https://www.newhomesource.com/?refer=mlscom'} target='_blank'>New Homes</a></li>
                <li><a href={'https://www.topagentsranked.com/signup02?utm_source=mlsdotcom&utm_campaign=textlink'} target='_blank'>Find an Agent</a></li>
                <li><a href={''}>Real Estate Classes</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar