import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function HelpLayOut() {
    return (
        <div className='help-layout'>
            <h2>Website Help</h2>
            <p>lorem ipsum dolor site </p>


            <nav>
                <NavLink to='faq'>View The FAQ</NavLink>
                <NavLink to='contact'>Contact Us</NavLink>
            </nav>

            <Outlet/>
        </div>
    )
}

export default HelpLayOut
