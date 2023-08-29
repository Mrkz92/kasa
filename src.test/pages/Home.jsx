import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Layout from "../components/Layout";
import { datas } from "../data/accList";
import DevDump from "../components/DevDump";
import HomeBannerBg from "../assets/home-bg.png";

export default function Home() {
  return (
    <Layout>
      <DevDump valeur={datas} />
      <Banner
        className="Banner--home"
        image={HomeBannerBg}
        text="Chez vous, partout et ailleurs"
      />
      <Gallery datas={datas} />
    </Layout>
  );
}
