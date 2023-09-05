/* 
DevNavbar de dev
Doit être moche (utiliser des couleurs criardes)
DOit contenir les liens vers toutes les pages que l'on veut tester 
    y compris celles qui mènent à des erreurs
*/

import { Link } from "react-router-dom";
import "./DevNavbar.scss";
import Container from "./Container";

export default function DevNavbar({ links }) {
  return (
    <Container>
      <nav className="DevNavbar">
        {links.map((link) => (
          <Link key={link} to={link}>
            {link}
          </Link>
        ))}
      </nav>
    </Container>
  );
}
