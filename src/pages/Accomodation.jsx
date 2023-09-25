import { datas } from "../data/accList";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import Layout from "../components/Layout";
import Sheet from "../components/Sheet";
import Carousel from "../components/Carousel";
import { Collapse } from "../components/Collapse";
import Container from "../components/Container";
import Columns from "../components/Columns";
import Flow from "../components/Flow";

export default function Accomodation({ children }) {
  const { id } = useParams("id");
  const data = datas.find((data) => data.id === id);

  if (!data) return NotFound();

  return (
    <Layout>
      <Container>
        <Flow>
          <Carousel slides={data.pictures} />
          <Sheet />
          <Columns>
            <Collapse title="Description">{data.description}</Collapse>
            <Collapse title="Equipements">
              <ul style={children}>
                {data.equipments.map((eq, index) => (
                  <li key={index}>{eq}</li>
                ))}
              </ul>
            </Collapse>
          </Columns>
        </Flow>
      </Container>
    </Layout>
  );
}
