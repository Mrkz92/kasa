import Banner from "./Banner";
import Gallery from "./Gallery"
import Header from "./Header"
import "../styles/Home.scss"

const Home = () => {
    return (
      <div className="d-home">
        <div className="div-2">
            <Header className="header-instance"/>
            <div className="body">
                <Banner className="section"/>
                <Gallery className="gallery-instance"/>
            </div>
        </div>
      </div>
    );
};

export default Home
