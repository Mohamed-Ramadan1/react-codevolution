import React from 'react'
import { Link } from 'react-router-dom'

function NoteFound() {
    return (
        <div>
            <h1>The page you look for is not found!</h1>
            <p>Go to home Page <Link to='/'>Home</Link></p>
        </div>
    )
}

export default NoteFound
