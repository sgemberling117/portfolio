import React from 'react'
import { Link } from 'gatsby'

import './header.css'

const Header = () => {
    return (
        <header>
            <Link to='/'>
                <img src='https://i.imgur.com/xOBvT40.png' alt='logo' className='logo'></img>
            </Link>
            <ul className='header-links'>
                <li><Link to ='/' activeClassName='nav-item-active'>Home</Link></li>
                <li><Link to ='/projects' activeClassName='nav-item-active'>Projects</Link></li>
                <li><Link to ='/contact' activeClassName='nav-item-active'>Contact</Link></li>
            </ul>
        </header>
    )
}

export default Header