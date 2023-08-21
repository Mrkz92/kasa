import { datas } from "../data/accList";
import Card from "./Card";
import "./Gallery.scss";

export default function Gallery() {
  return (
    <ul className="Gallery">
      {datas.map((data) => (
        <Card
          key={`${data.id}`}
          id={`${data.id}`}
          title={`${data.title}`}
          cover={`${data.cover}`}
        />
      ))}
    </ul>
  );
}
