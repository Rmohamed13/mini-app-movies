import { Link, useMatch, useResolvedPath } from "react-router-dom"
//import './Styles/Nav.css'

export default function Navbar() {
    const path = window.location.pathname
    return (
    <nav className="nav">
        <Link to="/" className="site-title">
            
        </Link>
        <ul>
            {/* <CustomLink className='link' to="/">Home</CustomLink> */}
            <CustomLink className='link' to="/">Movies</CustomLink>
            
        </ul>
    </nav>
    )
}


function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive =useMatch({ path: resolvedPath.pathname, end: true})
    return (
    <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
            {children}
        </Link>
    </li>
    )
}