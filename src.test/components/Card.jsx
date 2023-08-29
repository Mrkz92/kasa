import { datas } from "../data/accList";
import "./Card.scss";
import { Link } from "react-router-dom";

export default function Card(datas) {
  return (
    <Link to={`/accomodation/${datas.id}`} className="Card">
      <figure>
        <img className="Card__img" src={datas.cover} alt={datas.title} />
        <figcaption>
          <h3 className="Card__h3">{datas.title}</h3>
        </figcaption>
      </figure>
    </Link>
  );
}
