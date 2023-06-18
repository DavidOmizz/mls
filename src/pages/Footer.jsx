import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container row'>
            <div className='footer-container--links col-md-6'>
                <ul>
                    <p>Company</p>
                    <li><a href={''}>About Us</a></li>
                    <li><a href={''}>Contact Us</a></li>
                    <li><a href={''}>Privacy Policy</a></li>
                    <li><a href={''}>Terms of Use</a></li>
                    <li><a href={''}>Site Map</a></li>
                </ul>
                <ul>
                    <p>Property Search</p>
                    <li><a href={''}>Find Foreclosures</a></li>
                    <li><a href={''}>Find New Homes</a></li>
                    <li><a href={''}>Find An Agent</a></li>
                </ul>
                <ul>
                    <p>Resources</p>
                    <li><a href={''}>Bookmark This Site</a></li>
                    <li><a href={''}>Education</a></li>
                    <li><a href={''}>Glossary</a></li>
                    <li><a href={''}>Seller/Buyer Info</a></li>
                    <li><a href={''}>Fair Housing</a></li>
                </ul>
            </div>
            <div className='footer-container--text col-md-6'>
                <p>Multiple Listing Network® is the parent company of and DBA MLS.com®. Multiple Listing Network® is an independently owned and operated Real Estate Advertising and Listing Service Company for real estate firms and other real estate related entities. MLS.com is independently owned and operated and is not affiliated with any of the over 900 local MLS systems. Your use of this web site constitutes your acceptance of our Privacy Policy and Terms of Use. Multiple Listing Network® and "MLS.com America's Real Estate Portal" are federally registered Servicemarks.</p>
            </div>
        </div>
        <p className='footer--copyright col-12'>Multiple Listing Copyright 1991 - 2023 | MLS.com America's Real Estate portal Copyright 2007 - 2023.
            All Righnts Reserved.
        </p>
    </div>
  )
}

export default Footer