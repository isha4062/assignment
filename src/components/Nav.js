import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/Logo.png"

export default memo(function Nav() {
  return (
    <div className="navbar">
      <img src={logo} alt="" width="87px" height="44px" />
      <div className='list'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li>About</li>
            <li><Link to="/contact">Contact</Link></li>
            <li><button>Get in Touch</button></li>
        </ul>
      </div>
    </div>
  )
})
