import Banner from "../../components/banner/Banner"
import Gallery from "../../components/gallery/Gallery"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import "./_Home.scss"

export default function Home() {
  return (
    <div className="d-home">
      <div className="div-2">
        <Header className="header-instance" />
        <div className="body">
          <Banner className="section" />
          <Gallery className="gallery-instance" />
        </div>
        <Footer />
      </div>
    </div>
  )
}
