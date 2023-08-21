import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Layout from "../components/Layout";
import { datas } from "../data/accList";
import DevDump from "../components/DevDump";
import DevNavbar from "../components/DevNavbar";

export default function Home() {
  return (
    <Layout>
      <DevNavbar />
      <DevDump valeur={datas} />
      <Banner />
      <Gallery datas={datas} />
    </Layout>
  );
}
