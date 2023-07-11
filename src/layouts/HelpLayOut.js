import React from 'react'
import { Outlet } from 'react-router-dom'

function HelpLayOut() {
    return (
        <div className='help-layout'>
            <h2>Website Help</h2>
            <p>lorem ipsum dolor site </p>
            <Outlet/>
        </div>
    )
}

export default HelpLayOut
