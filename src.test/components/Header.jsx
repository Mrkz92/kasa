import logo from "../assets/logo.svg";
import "./Header.scss";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="Header">
      <img src={logo} alt="Kasa" className="Header__logo" />
      <Navbar />
    </div>
  );
}
