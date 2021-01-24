import {Link} from 'react-router-dom'
export default function NotFound() {
    return (
        <div className="not-found">
            <h2>sorry</h2>
            <p>that page can not be found</p>
            <Link to="/">Back to home page</Link>
        </div>
    )
}
