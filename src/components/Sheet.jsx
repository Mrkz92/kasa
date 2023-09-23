import { datas } from "../data/accList";
import { useParams } from "react-router-dom";
import "./Sheet.scss";
import Rate from "./Rate";
import Tag from "./Tag";

export default function Sheet({ rating }) {
  const { id } = useParams("id");
  const dataSheet = datas.filter((data) => data.id === id);

  return (
    <section className="Sheet">
      <div className="Sheet__titles">
        <h1 className="Sheet__h1">{dataSheet[0].title}</h1>
        <h2 className="Sheet__location">{dataSheet[0].location}</h2>
      </div>
      <div className="Sheet__Tags">
        {dataSheet[0].tags.map((tag, index) => (
          <Tag key={index} tag={tag} />
        ))}
      </div>
      <Rate className="Sheet__Rate" rating={+dataSheet[0].rating} />
      <div className="Sheet__host">
        <h3 className="Sheet__host-name">{dataSheet[0].host.name}</h3>
        <img
          className="Sheet__host-picture"
          src={dataSheet[0].host.picture}
          alt="Host Name"
        />
      </div>
    </section>
  );
}
