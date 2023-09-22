import { datas } from "../data/accList";
import { useParams } from "react-router-dom";

import NotFound from "./NotFound";
// import DevDump from "../components/DevDump";
import Layout from "../components/Layout";
import Sheet from "../components/Sheet";
import Carousel from "../components/Carousel";
import { Collapse } from "../components/Collapse";
import Container from "../components/Container";
import Columns from "../components/Columns";
import Flow from "../components/Flow";

export default function Accomodation({ children }) {
  const { id } = useParams("id");
  const dataAccomodation = datas.find((data) => data.id === id);

  if (!dataAccomodation) {
    console.log("Redirection vers NotFound");
    return NotFound();
  }

  return (
    <Layout>
      <Container>
        {/* <DevDump valeur={dataAccomodation} /> */}
        <main className="Accomodation">
          <Flow>
            <Carousel slides={dataAccomodation.pictures} />
            <Sheet />
            <Columns>
              <Collapse
                className="Accomodation__description"
                title="Description"
              >
                {dataAccomodation.description}
              </Collapse>
              <Collapse
                className="Accomodation__equipments"
                title="Equipements"
              >
                <ul style={children}>
                  {dataAccomodation.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              </Collapse>
            </Columns>
          </Flow>
        </main>
      </Container>
    </Layout>
  );
}
