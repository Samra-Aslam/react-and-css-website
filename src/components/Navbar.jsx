import React from 'react'
import "../css/Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className='header'>
            <header>
                <div className='logo'><h3>Online.<span>Store</span></h3></div>
                <div className='NavList'>
                  <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/manu'>Manu</Link></li>
                  </ul>
                </div>
            </header>
        </div>
    </>
  )
}

export default Navbar