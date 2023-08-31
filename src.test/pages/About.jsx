import Layout from "../components/Layout";
import DevDump from "../components/DevDump";
import { Collapse } from "../components/Collapse";
import Banner from "../components/Banner";
import AboutBannerBg from "../assets/about-bg.png";
import Container from "../components/Container";

export default function About({ children }) {
  return (
    <Layout>
      <Container>
        <DevDump />
        <Banner
          className="Banner--about"
          image={AboutBannerBg}
          text=""
          min-height="223px"
        />
        {children}
        <Collapse title="Fiabilité">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </Collapse>
        <Collapse title="Respect">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </Collapse>
        <Collapse title="Service">
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N'hésitez pas à nous contacter si vous avez la
          moindre question.
        </Collapse>
        <Collapse title="Sécurité">
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </Collapse>
      </Container>
    </Layout>
  );
}
