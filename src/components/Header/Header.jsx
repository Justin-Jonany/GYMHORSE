import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.svg'
import { Link } from 'react-scroll'
const Header = () => {

  return (
    
    <div className="header">
      
        <img src = {Logo} alt="" className='logo'/>
        <ul className='header-menu'>
            <li><Link to='header' span={true} smooth={true}>Home</Link></li>
            <li><Link to='Programs' span={true} smooth={true}>Programs</Link></li>
            <li><Link to='Reasons' span={true} smooth={true}>Why us</Link></li>
            <li><Link to='plans' span={true} smooth={true}>Plans</Link></li>
            <li><Link to='Testimonials' span={true} smooth={true}>Testimonial</Link></li>
        </ul>

    </div>
  )
}

export default Header