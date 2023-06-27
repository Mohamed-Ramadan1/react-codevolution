import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
    return (
        <div>
            <input type='search' />
            <h1>//////</h1>
            <Link to='Featured'>Features</Link> 
            <h1>//////</h1>
        <Link to='new'>new</Link>
        <Outlet/>
        </div>
    )
}

export default Products
