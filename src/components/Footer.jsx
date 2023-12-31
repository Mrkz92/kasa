import logo from "../assets/logo-bw.svg";
import Container from "./Container";
import "./Footer.scss";

export default function Footer({ className, ...attrs }) {
  return (
    <div className={`Footer ${className}`} {...attrs}>
      <Container>
        <div className="Footer__div">
          <img src={logo} alt="Kasa" className="Footer__logo" />
          <p className="Footer__txt">© 2020 Kasa. All rights reserved</p>
        </div>
      </Container>
    </div>
  );
}
