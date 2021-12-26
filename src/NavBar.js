import { Link } from "react-router-dom"
const NavBar = () => {
    
    return (
        <nav className="navbar">
            <h1>The Nahom Blog</h1>
            <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create_blog" >New Blog</Link>
            
            <Link to="/login" >Login</Link>
            <Link to="/register" >Register</Link>
            
            {/* <Link to="/create_blog" style={{color:'white',backgroundColor:'#f1356d',borderRadius:'8px'}}>New Blog</Link> */}
            </div>
        </nav>
    )
}

export default NavBar
