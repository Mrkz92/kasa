import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import Container from "./Container";
import "./Header.scss";
import Navbar from "./Navbar";

export default function Header({ children }) {
  return (
    <Container>
      <div className="Header">
        <Link className="Header__link" to="/">
          <img src={logo} alt="Kasa" className="Header__logo" />
        </Link>
        <Navbar className="Header__Navbar" />
        {children}
      </div>
    </Container>
  );
}
