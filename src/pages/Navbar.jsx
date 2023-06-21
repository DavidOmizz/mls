import React, { useState } from 'react'
import logo from '../images/mls_logo.png'
import '../css/style.css'
import { NavLink} from "react-router-dom";
import image from '../images/hamburger-menu.svg'

import { Fa } from 'react-icons/fa';

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <div className='containers' >
        <div className='logo'>
            {/* <a href={'/'}><img src={logo} alt="" /></a> */}
            <NavLink to={'/'}><img src={logo} alt=""/></NavLink>
        </div>

        <button id='containers--btn' className='hamburger' onClick={() => {setIsNavExpanded(!isNavExpanded);}}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
        </button>
        
        <div className={
          isNavExpanded ? "nav-list expanded" : "nav-list"
        }>
            <ul>
                <li>
                  <NavLink
                    to="/foreclosures"
                  >
                    Foreclosures
                  </NavLink>
                </li>
                <li><a href={'https://www.newhomesource.com/?refer=mlscom'} target='_blank'>New Homes</a></li>
                <li><a href={'https://www.topagentsranked.com/signup02?utm_source=mlsdotcom&utm_campaign=textlink'} target='_blank'>Find an Agent</a></li>
                <li><a href={''}>Real Estate Classes</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar