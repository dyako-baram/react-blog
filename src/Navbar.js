import {Link} from 'react-router-dom'
export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/"><h1>The React Blog</h1></Link>
            <div className="links">
            <Link to="/">About</Link>
            <Link to="/create">New Blog</Link>
            </div>
        </nav>
    )
}
