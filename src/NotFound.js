import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <h2>404 Page is NOT FOUND</h2>
            <p>The page you have requested is no where to be found !!</p>
            <Link to={'/'}>Go back to the main page</Link>
        </div>
    )
}

export default NotFound
