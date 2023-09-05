import { Link } from "react-router-dom";
import "./Error.scss";

export default function Error() {
  return (
    <div className="Error">
      <h1 className="Error__h1">404</h1>
      <p className="Error__explain">
        Oups! La page que vous demander n'existe pas.
      </p>
      <Link className="Error__Link" to="/">
        Retourner à la page d'accueil
      </Link>
    </div>
  );
}
