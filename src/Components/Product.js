import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function Product() {
    return (
        <>
        <div>
            <input type='search' placeholder='search'/>
            </div>
        <nav>
            <Link to='featured'>Featured </Link>
            <Link to='new'>New </Link>
        </nav>
            <Outlet />
        </>
    )
}

export default Product
