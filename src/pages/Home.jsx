import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Layout from "../components/Layout";
import { datas } from "../data/accList";
import HomeBannerBg from "../assets/home-bg.png";
import Container from "../components/Container";

export default function Home({ children }) {
  return (
    <Layout>
      <Container>
        <Banner
          context="home"
          image={HomeBannerBg}
          text="Chez&nbsp;vous, partout&nbsp;et&nbsp;ailleurs"
        />
        {children}
        <Gallery datas={datas} />
      </Container>
    </Layout>
  );
}
