import { Link } from "react-router-dom";
import "./Navbar.scss";
import Container from "./Container";

export default function Navbar() {
  return (
    <Container>
      <nav className="Navbar">
        <ul className="Navbar__ul">
          <li className="Navbar__li">
            <Link className="Navbar__a" to="/Kasa/">
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
    </Container>
  );
}
