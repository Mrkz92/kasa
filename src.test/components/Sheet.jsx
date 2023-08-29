import { datas } from "../data/accList";
import { useParams } from "react-router-dom";
import "./Sheet.scss";
import Tag from "./Tag";

export default function Sheet() {
  const { id } = useParams("id");
  const dataAccomodation = datas.filter((data) => data.id === id);
  console.log(dataAccomodation[0].tags);
  return (
    <section className="Accomodation__infos">
      <h1 className="Accomodation__h1">{dataAccomodation[0].title}</h1>
      <p className="Accomodation__location">{dataAccomodation[0].location}</p>
      <div className="Accomodation__Tag">
        {dataAccomodation[0].tags.map((tag, index) => (
          <Tag key={index} tag={tag} />
        ))}
      </div>
      <div className="Accomodation__host-infos">
        <h3 className="host__name">{dataAccomodation[0].host.name}</h3>
        <img
          src={dataAccomodation[0].host.picture}
          alt="Host Name"
          className="host__img"
        />
      </div>
    </section>
  );
}
