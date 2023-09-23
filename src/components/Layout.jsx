import Footer from "./Footer";
import Header from "./Header";
import "./Layout.scss";

["/", "/about/", "/accomodation/:id", "*"];

export default function Layout({ children }) {
  return (
    <div className="Layout">
      <Header />
      {children}
      <Footer className="Layout__Footer" />
    </div>
  );
}
