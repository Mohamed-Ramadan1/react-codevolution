import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    const nabLinkStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : "normal",
            textDecoration: isActive ?'none':"underline"
        }
    }
    return (
        <nav>
        <NavLink style={nabLinkStyle} to='/'>Home</NavLink>
        <NavLink to='about' style={nabLinkStyle}>About</NavLink>
        <NavLink to='Product' style={nabLinkStyle}>Product</NavLink>
        </nav>
    )
}

export default NavBar
