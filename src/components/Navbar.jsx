import { Link } from "react-router-dom";
import "./Navbar.scss";
export default function Navbar() {
  return (
    <nav className="Navbar">
      <ul className="Navbar__ul">
        <li className="Navbar__li">
          <Link className="Navbar__a" to="/">
            Accueil
          </Link>
        </li>
        <li className="Navbar__li">
          <Link className="Navbar__a" to="/about/">
            A propos
          </Link>
        </li>
      </ul>
    </nav>
  );
}
