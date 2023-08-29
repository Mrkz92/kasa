import Layout from "../components/Layout";
import DevDump from "../components/DevDump";
import Sheet from "../components/Sheet";
import Carousel from "../components/Carousel";
import { Collapse } from "../components/Collapse";
import { datas } from "../data/accList";
import { useParams } from "react-router-dom";

export default function Accomodation() {
  const { id } = useParams("id");
  const dataAccomodation = datas.find((data) => data.id === id);
  return (
    <Layout>
      <DevDump valeur={dataAccomodation} />
      <main className="Accomodation">
        <Carousel slides={dataAccomodation.pictures} />
        <Sheet />
        <Collapse title="Description">{dataAccomodation.description}</Collapse>
        <Collapse title="Equipements">{dataAccomodation.equipments}</Collapse>
      </main>
    </Layout>
  );
}
