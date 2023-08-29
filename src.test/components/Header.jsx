import logo from "../assets/logo.svg";
import "./Header.scss";
import Navbar from "./Navbar";

export default function Header({ children }) {
  return (
    <div className="Header">
      <img src={logo} alt="Kasa" className="Header__logo" />
      <Navbar className="Header__Navbar" />
      {children}
    </div>
  );
}
