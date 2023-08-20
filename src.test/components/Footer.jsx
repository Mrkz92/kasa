import logo from "../assets/logo-bw.svg";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__div">
        <img src={logo} alt="Kasa" className="Footer__logo" />
        <p className="Footer__txt">© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
}
