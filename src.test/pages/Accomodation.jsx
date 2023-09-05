import Layout from "../components/Layout";
import DevDump from "../components/DevDump";
import Sheet from "../components/Sheet";
import Carousel from "../components/Carousel";
import { Collapse } from "../components/Collapse";
import { datas } from "../data/accList";
import { useParams } from "react-router-dom";
import Container from "../components/Container";

export default function Accomodation({ children }) {
  const { id } = useParams("id");
  const dataAccomodation = datas.find((data) => data.id === id);
  return (
    <Layout>
      <Container>
        <DevDump valeur={dataAccomodation} />
        <main className="Accomodation">
          <Carousel slides={dataAccomodation.pictures} />
          <Sheet />
          <Collapse className="Accomodation__description" title="Description">
            {dataAccomodation.description}
          </Collapse>
          <Collapse className="Accomodation__equipments" title="Equipements">
            <ul style={children}>
              {dataAccomodation.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </main>
      </Container>
    </Layout>
  );
}
