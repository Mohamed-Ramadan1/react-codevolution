import React from 'react'
import { NavLink } from 'react-router-dom'
const stylesLinjs = ({ isActive }) => {
    return {
        fontWeight: isActive ? 'bold' : "normal",
    textDecoration:isActive?'none':"underline"
    }
}
function NavBar() {
  return (
    <nav>
        <NavLink to='/' style={stylesLinjs}>Home</NavLink>
        <NavLink to='About' style={stylesLinjs}>About</NavLink>
        <NavLink to='Products' style={stylesLinjs}>Products</NavLink>
    </nav>
  )
}

export default NavBar
