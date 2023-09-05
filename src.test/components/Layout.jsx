// import DevNavbar from "./DevNavbar";
import Footer from "./Footer";
import Header from "./Header";
import "./Layout.scss";

["/", "/about/", "/accomodation/:id", "*"];

export default function Layout({ children }) {
  return (
    <div className="Layout">
      {/* <DevNavbar
        links={[
          "/",
          "/about/",
          "/accomodation/c67ab8a7",
          "/accomodation/bluurgssss",
          "/bluurgssss",
        ]}
      /> */}
      <Header />
      {children}
      <Footer className="Layout__Footer" />
    </div>
  );
}
