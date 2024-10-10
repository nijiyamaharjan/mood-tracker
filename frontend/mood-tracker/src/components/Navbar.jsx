import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <Link to="/">
                <h1 className="text-3xl font-bold">
                    Mood Tracker
                </h1>
            </Link>
        </div>  
    )
  }