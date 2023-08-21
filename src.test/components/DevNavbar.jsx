/* 
DevNavbar de dev
Doit être moche (utiliser des couleurs criardes)
DOit contenir les liens vers toutes les pages que l'on veut tester 
    y compris celles qui mènent à des erreurs
*/

import { Link } from "react-router-dom";
import "./DevNavbar.scss";

export default function DevNavbar() {
  return (
    <nav className="DevNavbar">
      <ul className="DevNavbar__ul">
        <li className="DevNavbar__li">
          <Link className="DevNavbar__a" to="/">
            Home
          </Link>
        </li>
        <li className="DevNavbar__li">
          <Link className="DevNavbar__a" to="/about/">
            About
          </Link>
        </li>
        <li className="DevNavbar__li">
          <Link className="DevNavbar__a" to="/accomodation/:id">
            Accomodation
          </Link>
        </li>
        <li className="DevNavbar__li">
          <Link className="DevNavbar__a" to="*">
            NotFound
          </Link>
        </li>
      </ul>
    </nav>
  );
}
