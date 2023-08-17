import { Link } from "react-router-dom"
import "./_Navbar.scss"

export default function Navbar() {
    return (
        <nav className="nav">
            <ul className="nav_list">
                <li>
                    <Link to="/Kasa/">Accueil</Link>
                </li>
                <li>
                    <Link to="/about/">A propos</Link>
                </li>
            </ul>
        </nav>
    )
}