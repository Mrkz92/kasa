import { Link } from "react-router-dom";
import "./Error.scss";
import Container from "./Container";

export default function Error() {
  return (
    <div className="Error">
      <Container>
        <h1 className="Error__h1">404</h1>
        <p className="Error__explain">
          Oups!&nbsp;La&nbsp;page&nbsp;que
          vous&nbsp;demandez&nbsp;n'existe&nbsp;pas.
        </p>
      </Container>
      <Container>
        <Link className="Error__Link" to="/">
          Retourner à la page d'accueil
        </Link>
      </Container>
    </div>
  );
}
